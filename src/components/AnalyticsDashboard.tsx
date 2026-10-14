import React, { useState } from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';
import {
  TrendingUp,
  DollarSign,
  ShoppingCart,
  CheckCircle2,
  Filter,
  Info,
  Layers,
  Sparkles
} from 'lucide-react';
import {
  monthlyTrends,
  categoryBreakdown,
  orderDistribution
} from '../data/sampleAnalyticsData';

export const AnalyticsDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'trends' | 'categories' | 'fulfillment'>('trends');
  const [metricView, setMetricView] = useState<'revenue' | 'orders' | 'aov'>('revenue');
  const [timeFilter, setTimeFilter] = useState<'all' | 'h2'>('all');

  // Filtered dataset
  const displayedMonthlyData = timeFilter === 'h2'
    ? monthlyTrends.slice(6)
    : monthlyTrends;

  // Custom Dark Tooltip for Line/Area Charts
  const CustomTrendTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 border border-cyan-500/30 p-3.5 rounded-xl shadow-2xl backdrop-blur-md font-mono text-xs space-y-1.5 min-w-[180px]">
          <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
            <span className="font-semibold text-white">{label} Performance</span>
            <span className="text-[10px] text-cyan-400">Sample Record</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Gross Revenue:</span>
            <span className="font-bold text-cyan-300">${data.revenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Orders:</span>
            <span className="font-bold text-sky-200">{data.orders.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Average Order Value:</span>
            <span className="font-bold text-emerald-300">${data.aov}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Cohort Repeat:</span>
            <span className="font-bold text-indigo-300">{data.repeatRate}%</span>
          </div>
        </div>
      );
    }
    return null;
  };

  // Custom Category Tooltip
  const CustomCategoryTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-slate-900/95 border border-cyan-500/30 p-3 rounded-xl shadow-2xl backdrop-blur-md font-mono text-xs space-y-1 min-w-[170px]">
          <div className="font-bold text-white border-b border-white/10 pb-1">{data.category}</div>
          <div className="flex justify-between text-slate-300">
            <span>Revenue:</span>
            <span className="text-cyan-300 font-bold">${data.revenue.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Order Volume:</span>
            <span className="text-sky-200 font-bold">{data.orders.toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>YoY Growth:</span>
            <span className="text-emerald-400 font-bold">+{data.growth}%</span>
          </div>
          <div className="flex justify-between text-slate-300">
            <span>Revenue Share:</span>
            <span className="text-indigo-300 font-bold">{data.share}%</span>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full bg-[#090E1A]/90 border border-white/[0.08] rounded-2xl p-4 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden">
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Illustrative Demonstration Disclaimer Banner */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-3 rounded-xl bg-slate-900/80 border border-cyan-500/20 text-xs text-slate-300 font-mono">
        <div className="flex items-center gap-2">
          <Info className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>
            <strong className="text-cyan-300">Illustrative Demonstration:</strong> Interactive data visualization powered by Recharts showcasing dynamic BI layouts and metric controls.
          </span>
        </div>
        <span className="shrink-0 px-2.5 py-0.5 rounded-full text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          Synthetic Data Model
        </span>
      </div>

      {/* KPI Cards Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
            <span>Total Revenue</span>
            <DollarSign className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-display text-white">$870,500</div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 mt-1.5">
            <TrendingUp className="w-3 h-3" />
            <span>+24.8% vs Baseline</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
            <span>Total Orders</span>
            <ShoppingCart className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-display text-white">15,640</div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-cyan-400 mt-1.5">
            <span>Avg AOV: $55.6</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
            <span>Fulfillment Rate</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-display text-white">90.0%</div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400 mt-1.5">
            <span>On-time deliveries</span>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-900/60 border border-white/[0.06] hover:border-cyan-500/30 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-xs font-mono mb-2">
            <span>Repeat Buyer Rate</span>
            <Layers className="w-4 h-4 text-indigo-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold font-display text-white">26.2%</div>
          <div className="flex items-center gap-1.5 text-[11px] font-mono text-indigo-400 mt-1.5">
            <span>Cohort retention</span>
          </div>
        </div>
      </div>

      {/* Control Bar: View Switcher and Timeframe Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-6">
        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/[0.08] text-xs">
          <button
            onClick={() => setActiveTab('trends')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'trends'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Revenue Trajectory
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'categories'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Category Share
          </button>
          <button
            onClick={() => setActiveTab('fulfillment')}
            className={`px-3.5 py-1.5 rounded-lg font-medium transition-all ${
              activeTab === 'fulfillment'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Fulfillment SLA
          </button>
        </div>

        {/* Dynamic Controls based on tab */}
        {activeTab === 'trends' && (
          <div className="flex items-center gap-3 text-xs font-mono">
            {/* Metric Selector */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-white/[0.08]">
              <button
                onClick={() => setMetricView('revenue')}
                className={`px-2.5 py-1 rounded ${
                  metricView === 'revenue' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                Revenue ($)
              </button>
              <button
                onClick={() => setMetricView('orders')}
                className={`px-2.5 py-1 rounded ${
                  metricView === 'orders' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                Orders
              </button>
              <button
                onClick={() => setMetricView('aov')}
                className={`px-2.5 py-1 rounded ${
                  metricView === 'aov' ? 'bg-slate-800 text-cyan-300' : 'text-slate-400 hover:text-white'
                }`}
              >
                AOV
              </button>
            </div>

            {/* Timeframe Filter */}
            <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-lg border border-white/[0.08]">
              <Filter className="w-3.5 h-3.5 text-slate-400 ml-1" />
              <button
                onClick={() => setTimeFilter('all')}
                className={`px-2 py-1 rounded ${
                  timeFilter === 'all' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                12M
              </button>
              <button
                onClick={() => setTimeFilter('h2')}
                className={`px-2 py-1 rounded ${
                  timeFilter === 'h2' ? 'bg-slate-800 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                H2 Only
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chart Visualizations Area */}
      <div className="w-full h-[340px] sm:h-[380px]">
        {activeTab === 'trends' && (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={displayedMonthlyData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="orderGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6366F1" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#6366F1" stopOpacity={0.0} />
                </linearGradient>
                <linearGradient id="aovGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
              <XAxis
                dataKey="month"
                stroke="#64748B"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              />
              <YAxis
                stroke="#64748B"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) =>
                  metricView === 'revenue'
                    ? `$${val / 1000}k`
                    : metricView === 'aov'
                    ? `$${val}`
                    : `${val}`
                }
              />
              <Tooltip content={<CustomTrendTooltip />} />

              {metricView === 'revenue' && (
                <Area
                  type="monotone"
                  dataKey="revenue"
                  name="Monthly Revenue"
                  stroke="#38BDF8"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#revenueGradient)"
                />
              )}

              {metricView === 'orders' && (
                <Area
                  type="monotone"
                  dataKey="orders"
                  name="Order Count"
                  stroke="#6366F1"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#orderGradient)"
                />
              )}

              {metricView === 'aov' && (
                <Area
                  type="monotone"
                  dataKey="aov"
                  name="Average Order Value"
                  stroke="#10B981"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#aovGradient)"
                />
              )}
            </AreaChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'categories' && (
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryBreakdown}
              layout="vertical"
              margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" horizontal={false} />
              <XAxis
                type="number"
                stroke="#64748B"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(val) => `$${val / 1000}k`}
              />
              <YAxis
                type="category"
                dataKey="category"
                stroke="#94A3B8"
                fontSize={12}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
              />
              <Tooltip content={<CustomCategoryTooltip />} />
              <Bar
                dataKey="revenue"
                name="Gross Revenue"
                fill="#38BDF8"
                radius={[0, 6, 6, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        )}

        {activeTab === 'fulfillment' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-center">
            {/* Donut Chart */}
            <div className="h-[250px] sm:h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={orderDistribution}
                    dataKey="percentage"
                    nameKey="status"
                    cx="50%"
                    cy="50%"
                    innerRadius={65}
                    outerRadius={95}
                    paddingAngle={4}
                  >
                    {orderDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="#0B0F19" strokeWidth={2} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any, name: any) => [`${value}% of total orders`, name]}
                    contentStyle={{
                      backgroundColor: '#0F172A',
                      borderColor: 'rgba(56, 189, 248, 0.3)',
                      borderRadius: '0.75rem',
                      color: '#F8FAFC',
                      fontFamily: 'monospace',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Distribution Legend & Insights */}
            <div className="space-y-3 font-mono text-xs">
              <h4 className="text-slate-300 font-semibold uppercase tracking-wider mb-2">
                Order Delivery Status Breakdown
              </h4>
              {orderDistribution.map((item) => (
                <div
                  key={item.status}
                  className="p-2.5 rounded-lg bg-slate-900/50 border border-white/[0.05] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-300">{item.status}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400">{item.count.toLocaleString()} orders</span>
                    <span className="font-bold text-white min-w-[45px] text-right">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer Diagnostic Note */}
      <div className="mt-5 pt-4 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive controls: Click metric pills or tabs above to update visualization state.</span>
        </div>
        <span className="text-slate-500">Visualization Stack: React + Recharts + Tailwind</span>
      </div>
    </div>
  );
};
