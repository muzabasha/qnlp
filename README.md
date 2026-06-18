# Quantum Natural Language Processing (QNLP) Workshop

**A Hands-On Journey from Words to Quantum Circuits**

A comprehensive, interactive static web application for delivering a 6-hour hands-on workshop on Quantum Natural Language Processing. Designed for classroom teaching (60 students) with projector-optimized UI, NEP 2020 alignment, and no backend requirements.

## Features

- **18 Comprehensive Modules** covering NLP basics to advanced quantum language models
- **Interactive Topic Rendering** with 7 pedagogical sections per topic
- **Storytelling-Based Learning** with real-world analogies to reduce technical fear
- **Mathematical Modelling** with KaTeX equations and interactive parameter explorers
- **Activity-Based Learning** with 4 levels (Teacher Demo → Collaborative → Group → Individual)
- **Project-Based Learning** with timelines, team roles, and deliverables
- **Virtual Labs** with step-by-step interactive simulations
- **Question Bank** with detailed answers and explanations
- **Learning Analytics Dashboard** for progress tracking
- **Dark/Light Mode** toggle for projector optimization
- **Responsive Design** for Desktop, Laptop, Tablet, and Mobile
- **NEP 2020 Aligned** Experiential and multidisciplinary learning

## Tech Stack

- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Equations**: KaTeX
- **Diagrams**: Mermaid.js
- **Icons**: Lucide React
- **State Management**: Zustand
- **Routing**: React Router v7

## Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Sidebar, Layout shell
│   ├── ui/              # Card, Button, Badge, Section, ProgressBar
│   ├── charts/          # Recharts wrapper components
│   ├── equations/       # KaTeX equation renderers + equation explorer
│   └── diagrams/        # Mermaid diagram wrapper
├── pages/               # Home, Overview, Module, Topic, Analytics
├── data/
│   ├── modules.ts       # Module/topic definitions with prerequisites
│   └── content/         # Topic content files (storytelling, math, activities, etc.)
│       ├── loader.ts    # Content type definitions
│       └── module1.ts   # Module 1 content
├── store/               # Zustand stores (progress, feedback, theme)
├── hooks/               # Custom React hooks
└── utils/               # Utility functions
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Installation

```bash
git clone https://github.com/muzabasha/qnlp.git
cd qnlp
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production Build

```bash
npm run build
npm run preview
```

## Deployment

### GitHub

```bash
git remote add origin https://github.com/muzabasha/qnlp.git
git push -u origin master
```

### Vercel (Automatic)

1. Push to GitHub
2. Go to [https://vercel.com/new](https://vercel.com/new)
3. Import the `qnlp` repository
4. Framework preset: **Vite**
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy

### Vercel (CLI)

```bash
npm i -g vercel
vercel --prod
```

## Content Generation Pattern

Each topic follows a recursive feedback workflow:

1. **Prerequisites & Dependencies** - Knowledge graph showing what comes before/after
2. **Storytelling** - Funny real-world analogy with reflective questions
3. **Mathematical Modelling** - Equations, variables, interactive explorers, charts
4. **Activity-Based Learning** - 4 levels of activities with rubrics
5. **Project-Based Learning** - Scope, timeline, team roles, deliverables
6. **Question Bank** - 2-mark questions with answers and explanations
7. **Virtual Lab** - Step-by-step interactive simulation
8. **Insights & Wrap-Up** - Advantages, future scope, career relevance

## Adding New Topic Content

Create a new content file in `src/data/content/` following the `TopicContent` interface:

```typescript
import type { TopicContent } from './loader'

export const m2Content: Record<string, TopicContent> = {
  '2.1': {
    topicId: '2.1',
    learningObjective: '...',
    storytelling: { story: '...', questions: [...], ... },
    mathModelling: { need: '...', equations: [...], ... },
    activities: [{ title: '...', steps: [...], ... }],
    project: { scope: '...', objectives: [...], ... },
    questions: [{ question: '...', answer: '...', ... }],
    virtualLab: { description: '...', steps: [...], ... },
    insights: { advantages: [...], ... },
  },
}
```

Then import and merge into `loader.ts`.

## NEP 2020 Alignment

- **Experiential Learning**: Virtual labs, hands-on activities, project-based learning
- **Multidisciplinary Approach**: Bridges quantum physics, computer science, and linguistics
- **Critical Thinking**: Problem-solving through comparative analysis and research identification
- **Self-Directed Learning**: Progress tracking and personalized learning paths

## License

MIT
