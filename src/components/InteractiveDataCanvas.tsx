import React, { useEffect, useRef } from 'react';
import { Database, TrendingUp, Sparkles, Activity } from 'lucide-react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  baseRadius: number;
  highlight: boolean;
  alpha: number;
}

export const InteractiveDataCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Create particles representing data points
    const particleCount = 42;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        radius: Math.random() * 2.5 + 1.5,
        baseRadius: Math.random() * 2.5 + 1.5,
        highlight: Math.random() > 0.75,
        alpha: Math.random() * 0.6 + 0.3
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid coordinates
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
      ctx.lineWidth = 1;
      const step = 45;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Mouse interaction
        const dx = mouseX - p.x;
        const dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          p.x -= (dx / dist) * 1.5;
          p.y -= (dy / dist) * 1.5;
          p.radius = p.baseRadius * 1.8;
        } else {
          p.radius = p.baseRadius;
        }

        // Draw connections
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);

          if (dist2 < 110) {
            const lineAlpha = (1 - dist2 / 110) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = p.highlight || p2.highlight
              ? `rgba(56, 189, 248, ${lineAlpha * 1.4})`
              : `rgba(99, 102, 241, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        if (p.highlight) {
          ctx.fillStyle = `rgba(56, 189, 248, ${p.alpha})`;
          ctx.shadowColor = 'rgba(56, 189, 248, 0.8)';
          ctx.shadowBlur = 8;
        } else {
          ctx.fillStyle = `rgba(148, 163, 184, ${p.alpha * 0.7})`;
          ctx.shadowColor = 'transparent';
          ctx.shadowBlur = 0;
        }
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] lg:min-h-[500px] flex items-center justify-center">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-indigo-500/10 to-transparent rounded-3xl filter blur-2xl pointer-events-none" />

      {/* HTML5 Canvas */}
      <div className="relative w-full h-full rounded-2xl border border-white/[0.08] bg-[#0A0E1A]/80 backdrop-blur-xl overflow-hidden shadow-2xl">
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full cursor-crosshair" />

        {/* Center Analytical Graphic Overlay */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center p-6 text-center">
          <div className="relative p-6 rounded-2xl bg-[#0F172A]/85 border border-cyan-500/25 shadow-2xl backdrop-blur-md max-w-xs transition-transform duration-300 hover:scale-105">
            <div className="flex items-center justify-between mb-3">
              <span className="flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400">
                <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" /> Live Telemetry
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Active Node
              </span>
            </div>

            <div className="text-left space-y-2">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Relational Model:</span>
                <span className="text-slate-200 font-semibold">Star Schema</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Query Latency:</span>
                <span className="text-cyan-300 font-semibold">14.8 ms</span>
              </div>
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Data Integrity:</span>
                <span className="text-emerald-400 font-semibold">99.98% Clean</span>
              </div>
            </div>

            {/* Mini Progress bars */}
            <div className="mt-4 pt-3 border-t border-white/[0.08] space-y-1.5">
              <div className="flex justify-between text-[11px] font-mono text-slate-400">
                <span>SQL / ETL Pipeline</span>
                <span className="text-slate-300">Ready</span>
              </div>
              <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-indigo-500 rounded-full w-[88%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Analytical Badges around Canvas */}
        <div className="absolute top-4 left-4 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-sm shadow-lg">
            <Database className="w-3.5 h-3.5 text-cyan-400" />
            <span>PostgreSQL • 100k+ Rows</span>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 pointer-events-none">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-sm shadow-lg">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Cohort Retention Active</span>
          </div>
        </div>

        <div className="absolute top-4 right-4 pointer-events-none hidden sm:block">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-sm shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span>Power BI DAX Metrics</span>
          </div>
        </div>
      </div>
    </div>
  );
};
