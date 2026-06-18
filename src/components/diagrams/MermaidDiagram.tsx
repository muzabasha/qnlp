import { useEffect, useRef, useState } from 'react'
import mermaid from 'mermaid'
import { cn } from '@/utils/cn'

mermaid.initialize({
  startOnLoad: false,
  theme: 'base',
  themeVariables: {
    primaryColor: '#6366f1',
    primaryTextColor: '#1e293b',
    primaryBorderColor: '#6366f1',
    lineColor: '#94a3b8',
    secondaryColor: '#e0e7ff',
    tertiaryColor: '#f8fafc',
    fontSize: '16px',
  },
  flowchart: { useMaxWidth: true, htmlLabels: true },
})

interface MermaidDiagramProps {
  chart: string
  caption?: string
  className?: string
}

export function MermaidDiagram({ chart, caption, className }: MermaidDiagramProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [renderId] = useState(() => `mermaid-${Math.random().toString(36).slice(2, 9)}`)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!ref.current || !chart) return
    const render = async () => {
      try {
        setError(null)
        const { svg } = await mermaid.render(renderId, chart)
        if (ref.current) {
          ref.current.innerHTML = svg
        }
      } catch (e) {
        setError('Failed to render diagram')
        console.error('Mermaid render error:', e)
      }
    }
    render()
  }, [chart, renderId])

  if (!chart) return null

  return (
    <div className={cn('my-6', className)}>
      <div className="p-4 bg-white dark:bg-surface-800 rounded-xl border border-surface-200 dark:border-surface-700 overflow-x-auto">
        <div ref={ref} className="flex justify-center min-h-[100px]" />
        {error && <p className="text-sm text-math text-center mt-2">{error}</p>}
      </div>
      {caption && (
        <p className="text-sm text-surface-500 text-center mt-2 italic">{caption}</p>
      )}
    </div>
  )
}
