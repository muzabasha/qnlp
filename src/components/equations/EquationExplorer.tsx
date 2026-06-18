import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Section } from '@/components/ui/Section'
import { EqBlock } from './Equation'
import { Sliders } from 'lucide-react'

interface ParamSlider {
  name: string
  label: string
  min: number
  max: number
  step: number
  default: number
}

interface EquationExplorerProps {
  title?: string
  equation: string
  description: string
  variables: Array<{ symbol: string; name: string; description: string }>
  sliders?: ParamSlider[]
  children?: React.ReactNode
}

export function EquationExplorer({
  title = 'Equation Explorer',
  equation,
  description,
  variables,
  sliders = [],
  children,
}: EquationExplorerProps) {
  const [params, setParams] = useState<Record<string, number>>(
    Object.fromEntries(sliders.map((s) => [s.name, s.default]))
  )

  return (
    <Section title={title} icon={<Sliders className="w-5 h-5" />}>
      <p className="text-surface-600 dark:text-surface-400">{description}</p>

      <div className="my-4">
        <EqBlock math={equation} />
      </div>

      <div className="space-y-3 mb-4">
        <h4 className="font-semibold text-surface-800 dark:text-surface-200">Variable Explanation:</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {variables.map((v) => (
            <div key={v.symbol} className="flex items-start gap-2 p-2 bg-surface-50 dark:bg-surface-900 rounded-lg">
              <span className="font-mono font-bold text-primary-600 dark:text-primary-400 min-w-[24px]">
                {v.symbol}
              </span>
              <div>
                <span className="font-medium text-sm text-surface-800 dark:text-surface-200">{v.name}</span>
                <p className="text-xs text-surface-500">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {sliders.length > 0 && (
        <div className="space-y-4 p-4 bg-surface-50 dark:bg-surface-900 rounded-xl">
          <h4 className="font-semibold text-surface-800 dark:text-surface-200">Interactive Parameters:</h4>
          {sliders.map((s) => (
            <div key={s.name}>
              <div className="flex justify-between text-sm mb-1">
                <label className="font-medium text-surface-700 dark:text-surface-300">{s.label}</label>
                <span className="font-mono text-primary-600 dark:text-primary-400">{params[s.name]}</span>
              </div>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={params[s.name]}
                onChange={(e) => setParams((p) => ({ ...p, [s.name]: parseFloat(e.target.value) }))}
                className="w-full h-2 bg-surface-200 dark:bg-surface-700 rounded-lg appearance-none cursor-pointer accent-primary-600"
              />
            </div>
          ))}
        </div>
      )}

      {children && <div className="mt-4">{children}</div>}
    </Section>
  )
}
