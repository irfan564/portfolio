export interface MonthlyDataPoint {
  month: string;
  revenue: number;
  orders: number;
  aov: number; // Average Order Value
  repeatRate: number;
}

export interface CategoryDataPoint {
  category: string;
  revenue: number;
  orders: number;
  growth: number;
  share: number;
}

export interface OrderDistributionPoint {
  status: string;
  count: number;
  percentage: number;
  color: string;
}

export interface ChannelPerformancePoint {
  channel: string;
  cac: number;
  conversion: number;
  volume: number;
}

export const monthlyTrends: MonthlyDataPoint[] = [
  { month: "Jan", revenue: 42500, orders: 850, aov: 50.0, repeatRate: 18.2 },
  { month: "Feb", revenue: 47800, orders: 920, aov: 51.9, repeatRate: 19.5 },
  { month: "Mar", revenue: 53200, orders: 1040, aov: 51.1, repeatRate: 21.0 },
  { month: "Apr", revenue: 58900, orders: 1110, aov: 53.0, repeatRate: 22.4 },
  { month: "May", revenue: 64100, orders: 1190, aov: 53.8, repeatRate: 23.8 },
  { month: "Jun", revenue: 69400, orders: 1260, aov: 55.0, repeatRate: 25.1 },
  { month: "Jul", revenue: 76200, orders: 1350, aov: 56.4, repeatRate: 26.5 },
  { month: "Aug", revenue: 73800, orders: 1290, aov: 57.2, repeatRate: 27.0 },
  { month: "Sep", revenue: 81400, orders: 1400, aov: 58.1, repeatRate: 28.2 },
  { month: "Oct", revenue: 88900, orders: 1510, aov: 58.8, repeatRate: 29.6 },
  { month: "Nov", revenue: 106500, orders: 1780, aov: 59.8, repeatRate: 31.2 },
  { month: "Dec", revenue: 118400, orders: 1940, aov: 61.0, repeatRate: 32.5 }
];

export const categoryBreakdown: CategoryDataPoint[] = [
  { category: "Electronics", revenue: 268000, orders: 3820, growth: 24.5, share: 31 },
  { category: "Home & Kitchen", revenue: 189000, orders: 3240, growth: 18.2, share: 22 },
  { category: "Apparel & Shoes", revenue: 164000, orders: 3410, growth: 15.8, share: 19 },
  { category: "Beauty & Health", revenue: 132000, orders: 2590, growth: 29.4, share: 15 },
  { category: "Sports & Fitness", revenue: 115000, orders: 1680, growth: 12.1, share: 13 }
];

export const orderDistribution: OrderDistributionPoint[] = [
  { status: "Delivered On-Time", count: 11420, percentage: 77.5, color: "#38BDF8" },
  { status: "In Transit / Carrier", count: 1840, percentage: 12.5, color: "#6366F1" },
  { status: "Delayed / SLA Exception", count: 890, percentage: 6.0, color: "#F59E0B" },
  { status: "Returned / Cancelled", count: 590, percentage: 4.0, color: "#EF4444" }
];

export const channelPerformance: ChannelPerformancePoint[] = [
  { channel: "Organic Search", cac: 12, conversion: 3.8, volume: 4200 },
  { channel: "Direct Traffic", cac: 4, conversion: 4.6, volume: 3800 },
  { channel: "Email Marketing", cac: 8, conversion: 5.2, volume: 3100 },
  { channel: "Paid Social", cac: 28, conversion: 2.4, volume: 2400 },
  { channel: "Referral Program", cac: 16, conversion: 3.9, volume: 1240 }
];
