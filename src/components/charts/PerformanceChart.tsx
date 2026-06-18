import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer, LineChart, Line, AreaChart, Area,
} from 'recharts'
import { Card } from '@/components/ui/Card'

interface ChartData {
  name: string
  [key: string]: string | number
}

interface PerformanceChartProps {
  data: ChartData[]
  type?: 'bar' | 'line' | 'area'
  title?: string
  bars?: { key: string; color: string }[]
  xKey?: string
}

const COLORS = ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#3b82f6']

export function PerformanceChart({
  data,
  type = 'bar',
  title,
  bars,
  xKey = 'name',
}: PerformanceChartProps) {
  if (!data || data.length === 0) return null

  const dataKeys = bars || Object.keys(data[0]).filter((k) => k !== xKey)
  const chartBars = dataKeys.map((d, i) => ({
    key: typeof d === 'string' ? d : d.key,
    color: typeof d === 'string' ? COLORS[i % COLORS.length] : d.color,
  }))

  const renderChart = () => {
    switch (type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            {chartBars.map((b) => (
              <Line key={b.key} type="monotone" dataKey={b.key} stroke={b.color} strokeWidth={2} dot={{ r: 4 }} />
            ))}
          </LineChart>
        )
      case 'area':
        return (
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            {chartBars.map((b) => (
              <Area key={b.key} type="monotone" dataKey={b.key} fill={b.color} stroke={b.color} fillOpacity={0.3} />
            ))}
          </AreaChart>
        )
      default:
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey={xKey} tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip />
            <Legend />
            {chartBars.map((b) => (
              <Bar key={b.key} dataKey={b.key} fill={b.color} radius={[4, 4, 0, 0]} />
            ))}
          </BarChart>
        )
    }
  }

  return (
    <Card className="my-4">
      {title && <h4 className="text-lg font-bold mb-4 text-surface-800 dark:text-surface-200">{title}</h4>}
      <ResponsiveContainer width="100%" height={300}>
        {renderChart()}
      </ResponsiveContainer>
    </Card>
  )
}
