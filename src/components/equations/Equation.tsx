import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'

interface EquationProps {
  children: string
  block?: boolean
}

export function Equation({ children, block = false }: EquationProps) {
  if (!children) return null
  try {
    return block ? (
      <div className="katex-display">
        <BlockMath math={children} />
      </div>
    ) : (
      <InlineMath math={children} />
    )
  } catch {
    return <span className="text-math font-mono text-sm">{children}</span>
  }
}

export function EqBlock({ math }: { math: string }) {
  return <Equation block>{math}</Equation>
}

export function EqInline({ math }: { math: string }) {
  return <Equation>{math}</Equation>
}
