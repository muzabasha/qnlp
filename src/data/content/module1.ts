import type { TopicContent } from './loader'

export const m1Content: Record<string, TopicContent> = {
  '1.1': {
    topicId: '1.1',
    learningObjective: 'Understand the workshop structure, goals, and what you will achieve by the end of this 6-hour hands-on session.',
    nextPrep: 'Review your current understanding of NLP and prepare to articulate what you hope to learn from this workshop.',
    dependencyGraph: `flowchart LR
      A[1.1 Workshop Introduction] --> B[1.2 Learning Outcomes]
      B --> C[1.3 Workshop Roadmap]
      C --> D[1.4 Pre-Assessment]
      D --> E[Module 2: NLP Basics]`,
    storytelling: {
      story: "Picture this: You're standing at the entrance of a massive library that contains every book ever written — in every language known to humanity. A robot librarian approaches you and says, 'I can read all these books in one second, but I don't understand a single word of them.' Sounds absurd, right? Well, that's exactly where we are with computers today. They can process terabytes of text but struggle to understand simple sarcasm like 'Oh great, another Monday!' Meanwhile, quantum computers are emerging like magical glasses that could help machines finally 'get' what we're saying. This workshop is your backstage pass to understanding how this quantum magic works.",
      questions: [
        'Have you ever had a computer completely misunderstand what you meant?',
        'What makes human language so difficult for machines to process?',
        'If quantum computers could understand language better, what problem would that solve for you?',
      ],
      connection: 'The story illustrates the fundamental challenge of Natural Language Processing (NLP): processing is not the same as understanding. Just like our robot librarian, classical computers process text without true comprehension. Quantum computing offers a new paradigm that may help bridge this gap.',
      technicalIntro: 'Welcome to the world of Quantum Natural Language Processing (QNLP). This workshop bridges two fascinating fields: Natural Language Processing (how computers handle human language) and Quantum Computing (computing using quantum mechanical phenomena). By combining them, we open doors to more efficient and potentially more powerful language understanding systems.',
      lifeSkills: 'This workshop develops critical thinking (understanding complex systems), problem-solving (bridging two technical domains), and lifelong learning skills (exploring an emerging field). These skills are essential for adapting to rapidly evolving technology landscapes.',
    },
    mathModelling: {
      need: 'Understanding the scale of language processing requires mathematical modeling of computational complexity.',
      motivation: 'Classical NLP models face exponential growth in computational requirements as language complexity increases.',
      challenge: 'Modeling the relationship between vocabulary size, sentence length, and computational requirements.',
      equations: [
        {
          latex: 'O(n \\cdot d)',
          meaning: 'Big O notation: Computational complexity scales linearly with sequence length (n) and embedding dimension (d) for basic NLP operations.',
          interpretation: 'For a sentence with n words, each represented by a d-dimensional vector, basic operations require n × d computations.',
        },
        {
          latex: 'O(n^2 \\cdot d)',
          meaning: 'For attention mechanisms (like Transformers), complexity scales quadratically with sequence length.',
          interpretation: 'Doubling sentence length quadruples the computation required — this is why long documents are expensive to process.',
        },
        {
          latex: 'P(\\text{correct}) = \\frac{1}{1 + e^{-E}}',
          meaning: 'Probability of correct classification as a function of energy E in a quantum system.',
          interpretation: 'Quantum systems can potentially explore multiple states simultaneously, offering exponential speedup for certain NLP tasks.',
        },
      ],
      variables: [
        { symbol: 'n', name: 'Sequence Length', description: 'Number of words/tokens in the input sequence' },
        { symbol: 'd', name: 'Embedding Dimension', description: 'Size of the vector representation for each word' },
        { symbol: 'E', name: 'Energy', description: 'Energy of the quantum system state' },
        { symbol: 'P', name: 'Probability', description: 'Probability of correct classification' },
      ],
      interactive: {
        equation: 'O(n^{2} \\cdot d)',
        description: 'Explore how computational complexity grows with sequence length and embedding dimension:',
        variables: [
          { symbol: 'n', name: 'Sequence Length', description: 'Number of tokens in input' },
          { symbol: 'd', name: 'Embedding Dimension', description: 'Size of word vectors' },
        ],
        sliders: [
          { name: 'n', label: 'Sequence Length (n)', min: 1, max: 100, step: 1, default: 10 },
          { name: 'd', label: 'Embedding Dim (d)', min: 50, max: 1000, step: 50, default: 300 },
        ],
      },
      charts: [
        {
          title: 'Computational Complexity Growth',
          type: 'line',
          data: [
            { name: '10', 'Classical (O(n²))': 100, 'Quantum (O(n))': 10 },
            { name: '20', 'Classical (O(n²))': 400, 'Quantum (O(n))': 20 },
            { name: '30', 'Classical (O(n²))': 900, 'Quantum (O(n))': 30 },
            { name: '40', 'Classical (O(n²))': 1600, 'Quantum (O(n))': 40 },
            { name: '50', 'Classical (O(n²))': 2500, 'Quantum (O(n))': 50 },
            { name: '60', 'Classical (O(n²))': 3600, 'Quantum (O(n))': 60 },
            { name: '70', 'Classical (O(n²))': 4900, 'Quantum (O(n))': 70 },
            { name: '80', 'Classical (O(n²))': 6400, 'Quantum (O(n))': 80 },
          ],
        },
      ],
      advantages: 'Quantum computing offers potential exponential speedup for certain NLP operations, particularly those involving high-dimensional vector spaces and complex optimization problems.',
      limitations: 'Current quantum hardware is limited in qubit count and coherence time. Error rates are still high, and large-scale fault-tolerant quantum computers are not yet available.',
    },
    activities: [
      {
        title: 'Workshop Overview Presentation',
        description: 'The instructor presents the workshop roadmap, highlighting the journey from classical NLP fundamentals to building quantum language models.',
        steps: [
          'Display the workshop agenda on projector',
          'Explain the 18-module structure',
          'Highlight hands-on lab sessions',
          'Discuss learning outcomes and assessment methods',
        ],
        materials: 'Projector, presentation slides, workshop handout',
        timeRequired: '5 min',
        outcomes: 'Students understand the workshop structure and what they will learn',
        rubrics: 'Attention and engagement during presentation',
      },
      {
        title: 'Expectation Setting',
        description: 'Instructor facilitates a discussion to align student expectations with workshop objectives.',
        steps: [
          'Ask students what they hope to learn',
          'Write expectations on a shared board',
          'Map expectations to workshop modules',
          'Address any misconceptions',
        ],
        outcomes: 'Aligned expectations between instructor and students',
        rubrics: 'Quality of questions and participation',
      },
      {
        title: 'Group Discussion: Quantum Future',
        description: 'Students discuss in groups how quantum computing might change their field of work or study.',
        steps: [
          'Form groups of 5-6 students',
          'Discuss: "How would quantum NLP impact your domain?"',
          'Each group shares one insight',
          'Class-wide discussion on common themes',
        ],
        timeRequired: '5 min',
        outcomes: 'Students connect workshop content to their own context',
      },
      {
        title: 'Self-Assessment Survey',
        description: 'Students individually assess their current knowledge of NLP and quantum computing.',
        steps: [
          'Rate your NLP knowledge (1-5)',
          'Rate your quantum computing knowledge (1-5)',
          'Write down one question you want answered',
          'Submit for instructor reference',
        ],
        outcomes: 'Baseline assessment of student knowledge levels',
        rubrics: 'Honest self-assessment (not graded)',
      },
    ],
    project: {
      scope: 'This introductory topic sets the foundation for the entire workshop. The project scope is to create a personal learning plan for the QNLP workshop.',
      objectives: [
        'Understand the full workshop curriculum',
        'Identify personal learning goals',
        'Create a study roadmap for the workshop duration',
        'Set up the learning environment',
      ],
      timeline: [
        { phase: 'Review Curriculum', duration: '2 min', percent: 40 },
        { phase: 'Set Goals', duration: '2 min', percent: 30 },
        { phase: 'Plan Schedule', duration: '1 min', percent: 30 },
      ],
      teamRoles: [
        { role: 'Learner', responsibility: 'Active participation and note-taking' },
        { role: 'Peer', responsibility: 'Collaborate and share insights' },
      ],
      deliverables: [
        'Personal learning goals document',
        'Workshop schedule with notes',
        'List of 3 questions to be answered during workshop',
      ],
    },
    questions: [
      {
        question: 'What is the primary goal of Quantum Natural Language Processing (QNLP)?',
        answer: 'QNLP aims to leverage quantum computing principles to process and understand human language more efficiently than classical approaches.',
        explanation: 'By encoding linguistic information into quantum states, QNLP can potentially handle complex language tasks with fewer computational resources.',
        commonMistake: 'Thinking QNLP is about running existing NLP algorithms on quantum hardware',
        tip: 'Remember: QNLP reimagines language processing using quantum principles',
      },
      {
        question: 'How does computational complexity differ between classical attention mechanisms and quantum approaches?',
        answer: 'Classical attention mechanisms have O(n²) complexity while quantum approaches can potentially achieve O(n) or better for certain operations.',
        explanation: 'The quadratic scaling of attention mechanisms is a major bottleneck in classical NLP. Quantum superposition allows processing multiple states simultaneously.',
        commonMistake: 'Assuming all quantum algorithms are automatically faster',
        tip: 'Think about the difference between quadratic and linear scaling',
      },
    ],
    virtualLab: {
      description: 'Explore how computational complexity scales with input size in classical vs quantum approaches.',
      steps: [
        'Initialize the Complexity Explorer',
        'Select classical attention computation',
        'Run the simulation with varying input sizes',
        'Compare with quantum-inspired approach',
        'Analyze the complexity scaling graphs',
      ],
      stepDetails: [
        'Setting up parameters: vocabulary size and sequence length',
        'Classical attention calculates O(n²) pairwise interactions',
        'Observing quadratic growth in computational steps',
        'Quantum approach processes in superposition',
        'Reviewing the comparative performance metrics',
      ],
      completionMessage: 'You have visualized the fundamental advantage of quantum approaches for NLP tasks!',
      dataFlow: `flowchart LR
        A[Input Text] --> B[Tokenization]
        B --> C[Embedding]
        C --> D{Processing}
        D --> E[Classical: O(n²)]
        D --> F[Quantum: O(n)]
        E --> G[Results]
        F --> G`,
    },
    insights: {
      advantages: [
        'Clear understanding of workshop goals and structure',
        'Established baseline for measuring learning progress',
        'Connection between personal expectations and curriculum',
        'Foundation for subsequent technical modules',
      ],
      disadvantages: [
        'Introductory content may feel basic for experienced participants',
        'Cannot cover all aspects of QNLP in a single workshop',
      ],
      futureScope: 'This workshop opens doors to continued exploration in quantum machine learning, quantum algorithms for NLP, and hybrid quantum-classical systems.',
      industrialApplications: [
        'Quantum-enhanced language models for enterprise NLP',
        'Efficient document classification at scale',
        'Quantum natural language interfaces',
      ],
      careerRelevance: 'QNLP expertise is highly sought after in quantum computing startups, AI research labs, and technology companies investing in next-generation NLP capabilities.',
    },
  },

  '1.2': {
    topicId: '1.2',
    learningObjective: 'Clearly articulate the 9 key learning outcomes that will be achieved by the end of this workshop.',
    nextPrep: 'Think about how each learning outcome relates to your current work or research area.',
    dependencyGraph: `flowchart LR
      A[1.1 Introduction] --> B[1.2 Learning Outcomes]
      B --> C[1.3 Roadmap]`,
    storytelling: {
      story: "Imagine you're about to embark on a treasure hunt. You've been given a map, but before you start, the mapmaker says, 'Here are the 9 treasures you'll find along the way.' Knowing what treasures await makes the journey more meaningful — you'll recognize each discovery when you encounter it. That's exactly what learning outcomes do: they're your treasure map for this workshop.",
      questions: [
        'Have you ever completed a course and realized you didn\u2019t learn what you expected?',
        'How would clear learning outcomes change your learning experience?',
      ],
      connection: "Learning outcomes are like GPS waypoints for your educational journey. They tell you exactly what destinations you'll reach and help you measure your progress along the way.",
      technicalIntro: "The 9 learning outcomes of this workshop span from understanding the motivation behind QNLP to being able to conduct independent research. Each outcome builds upon the previous ones, creating a structured learning path.",
      lifeSkills: 'Goal-setting and outcome-oriented thinking are valuable life skills. Knowing what you want to achieve before starting any project dramatically increases success rates.',
    },
    mathModelling: {
      need: 'Learning outcomes provide measurable targets for educational assessment.',
      motivation: 'Without clear outcomes, learners cannot gauge their progress or instructors cannot evaluate effectiveness.',
      challenge: 'Defining measurable, achievable outcomes that span knowledge, comprehension, and application levels.',
      equations: [
        {
          latex: '\\text{Learning Gain} = \\frac{\\text{Post-test Score} - \\text{Pre-test Score}}{\\text{Maximum Score} - \\text{Pre-test Score}}',
          meaning: 'Normalized learning gain measures how much a student learned relative to how much they could have learned.',
          interpretation: 'A gain of 0 means no learning, 1 means the student learned everything possible from their starting point.',
        },
      ],
      variables: [
        { symbol: 'G', name: 'Learning Gain', description: 'Normalized measure of knowledge improvement' },
      ],
      interactive: {
        equation: 'G = \\frac{\\text{Post} - \\text{Pre}}{\\text{Max} - \\text{Pre}}',
        description: 'Calculate learning gain with different pre and post test scores:',
        variables: [
          { symbol: 'Pre', name: 'Pre-test Score', description: 'Score before workshop' },
          { symbol: 'Post', name: 'Post-test Score', description: 'Score after workshop' },
          { symbol: 'Max', name: 'Maximum Score', description: 'Maximum possible score' },
        ],
        sliders: [
          { name: 'Pre', label: 'Pre-test Score', min: 0, max: 100, step: 5, default: 30 },
          { name: 'Post', label: 'Post-test Score', min: 0, max: 100, step: 5, default: 75 },
          { name: 'Max', label: 'Maximum Score', min: 50, max: 100, step: 5, default: 100 },
        ],
      },
      charts: [
        {
          title: 'Expected Knowledge Progression',
          type: 'bar',
          data: [
            { name: 'Before', Knowledge: 15 },
            { name: 'After Module 5', Knowledge: 35 },
            { name: 'After Module 10', Knowledge: 60 },
            { name: 'After Module 15', Knowledge: 80 },
            { name: 'Workshop End', Knowledge: 90 },
          ],
        },
      ],
      advantages: 'Clear learning outcomes keep both instructor and learner focused on measurable goals throughout the workshop.',
      limitations: 'Learning outcomes cannot capture all dimensions of learning, such as creativity, curiosity, and attitudinal changes.',
    },
    activities: [
      {
        title: 'Outcomes Walkthrough',
        description: 'Instructor explains each learning outcome with concrete examples of how it will be achieved.',
        steps: [
          'Display all 9 learning outcomes',
          'Explain each outcome with a real example',
          'Show which module covers each outcome',
          'Answer questions about outcomes',
        ],
        materials: 'Learning outcomes handout',
        outcomes: 'Students understand what they will achieve',
      },
      {
        title: 'Outcome Mapping Exercise',
        description: 'Students map learning outcomes to their personal goals.',
        steps: [
          'Read each learning outcome',
          'Rate your current level for each (1-5)',
          'Identify which outcome is most valuable to you',
          'Share with a partner',
        ],
        outcomes: 'Personalized connection to learning outcomes',
      },
    ],
    project: {
      scope: 'Create a personal learning contract based on the 9 learning outcomes.',
      objectives: ['Understand all 9 outcomes', 'Set personal targets for each', 'Create tracking mechanism'],
      timeline: [
        { phase: 'Review Outcomes', duration: '1 min', percent: 30 },
        { phase: 'Self-Assessment', duration: '1 min', percent: 40 },
        { phase: 'Set Targets', duration: '1 min', percent: 30 },
      ],
      teamRoles: [],
      deliverables: ['Personalized learning contract', 'Self-assessment scores for each outcome'],
    },
    questions: [
      {
        question: 'Name three learning outcomes of this QNLP workshop.',
        answer: '1. Explain the motivation behind Quantum NLP. 2. Understand how quantum states can represent linguistic information. 3. Build a sentence classification model using QNLP.',
        explanation: 'These outcomes span from conceptual understanding to practical application, ensuring comprehensive learning.',
        commonMistake: 'Memorizing outcomes without understanding how they connect to workshop activities',
        tip: 'Use outcomes as a checklist throughout the workshop',
      },
    ],
    virtualLab: {
      description: 'Track your expected learning gain across the workshop outcomes.',
      steps: ['Assess current knowledge', 'Set target scores', 'Visualize learning gap', 'Plan learning path', 'Review progress'],
      stepDetails: ['Rate each outcome', 'Define target levels', 'Calculate gaps', 'Map to modules', 'Track completion'],
      completionMessage: 'You now have a clear learning roadmap!',
    },
    insights: {
      advantages: ['Clear direction for learning', 'Measurable progress tracking', 'Focused curriculum design'],
      disadvantages: ['Outcomes may not capture serendipitous learning'],
      futureScope: 'Learning outcomes framework can be applied to any self-directed learning project.',
      industrialApplications: ['Training program design', 'Skill gap analysis', 'Competency-based assessment'],
      careerRelevance: 'Understanding how to define and measure learning outcomes is valuable for educators, trainers, and team leads.',
    },
  },

  '1.3': {
    topicId: '1.3',
    learningObjective: 'Understand the complete workshop roadmap showing how each module connects to create a cohesive learning journey.',
    nextPrep: 'Review the roadmap and identify which modules you are most excited about.',
    dependencyGraph: `flowchart LR
      A[M1: Welcome] --> B[M2: NLP Basics]
      B --> C[M3: Classical NLP]
      C --> D[M4: Why Quantum?]
      D --> E[M5: Quantum Computing]
      E --> F[M6: Language to Quantum]
      F --> G[M7: QNLP Intro]
      G --> H[M8: Linguistics]
      H --> I[M9: Tools]
      I --> J[M10: Lambeq]
      J --> K[M11: Classification]
      K --> L[M12: Hybrid Models]
      L --> M[M13: Evaluation]
      M --> N[M14: Applications]
      N --> O[M15: Mini Project]
      O --> P[M16: Research Roadmap]
      P --> Q[M17: Resources]
      Q --> R[M18: Wrap-Up]`,
    storytelling: {
      story: 'Building a house requires a blueprint. You don\'t start with the roof or the plumbing — you begin with the foundation, then the walls, the wiring, and finally the finishing touches. Our workshop is like building a quantum NLP house. Module 1 is laying the foundation. By Module 18, you\'ll be admiring the fully furnished house and thinking about how to build your own.',
      questions: [
        'Have you ever started learning something without a clear roadmap? What happened?',
        'Why is it important to know where you are in the learning journey at all times?',
      ],
      connection: 'A roadmap transforms a complex journey into manageable steps. Each module is a stepping stone that prepares you for the next.',
      technicalIntro: 'The 18 modules follow a deliberate progression: foundations (M1-4), quantum basics (M5-6), QNLP core (M7-10), practical applications (M11-14), and synthesis (M15-18).',
      lifeSkills: 'Roadmapping is a crucial project management skill. Breaking large goals into smaller, achievable milestones is the secret to tackling any complex project.',
    },
    mathModelling: {
      need: 'Understanding the dependency graph helps optimize learning paths.',
      motivation: 'Not all topics are independent — some must be learned before others.',
      challenge: 'Creating an optimal ordering of topics that respects all prerequisite relationships.',
      equations: [
        {
          latex: 'D = (V, E)',
          meaning: 'A directed graph D with vertices V (topics) and edges E (prerequisite relationships).',
          interpretation: 'Each topic is a node, and each prerequisite relationship is a directed edge from prerequisite to dependent topic.',
        },
      ],
      variables: [
        { symbol: 'V', name: 'Vertices', description: 'Set of all topics in the workshop' },
        { symbol: 'E', name: 'Edges', description: 'Prerequisite relationships between topics' },
      ],
      advantages: 'Roadmap provides clarity and prevents learning blocks due to missing prerequisites.',
      limitations: 'Individual learning speeds vary; roadmap is a guideline, not a rigid schedule.',
    },
    activities: [
      {
        title: 'Roadmap Walkthrough',
        description: 'Instructor presents the full 18-module roadmap with dependency connections.',
        steps: ['Show complete roadmap', 'Explain each phase', 'Highlight key dependencies', 'Discuss time allocation'],
        materials: 'Roadmap diagram handout',
        outcomes: 'Students understand the full learning journey',
      },
      {
        title: 'Module Exploration',
        description: 'Students browse the module list and identify topics of personal interest.',
        steps: ['Scan all module titles', 'Mark 3 most interesting modules', 'Note prerequisite checks', 'Share with group'],
        outcomes: 'Personal connection to workshop content',
      },
    ],
    project: {
      scope: 'Create a personal learning schedule based on the workshop roadmap.',
      objectives: ['Understand module dependencies', 'Allocate personal study time', 'Set module-level goals'],
      timeline: [],
      teamRoles: [],
      deliverables: ['Personalized schedule', 'Priority module list'],
    },
    questions: [],
    virtualLab: {
      description: 'Interactive roadmap explorer showing module dependencies.',
      steps: ['Load roadmap', 'Click modules to explore', 'Trace dependency paths', 'Find your learning path', 'Save preferences'],
      stepDetails: ['Display graph', 'Show topic details', 'Highlight prerequisites', 'Personalize path', 'Export roadmap'],
      completionMessage: 'You have explored the complete workshop roadmap!',
    },
    insights: {
      advantages: ['Clear learning path', 'Visible progress', 'Understanding of topic relationships'],
      disadvantages: ['May feel restrictive to some learners'],
      futureScope: 'Roadmap skills apply to any large-scale learning or project endeavor.',
      industrialApplications: ['Project planning', 'Curriculum design', 'Learning management systems'],
      careerRelevance: 'Understanding how to structure complex learning paths is valuable in education technology and training roles.',
    },
  },

  '1.4': {
    topicId: '1.4',
    learningObjective: 'Complete a pre-assessment to establish baseline knowledge and identify areas requiring more focus during the workshop.',
    nextPrep: 'Review your pre-assessment results and identify 3 topics to focus on during the workshop.',
    storytelling: {
      story: "Before a doctor treats a patient, they run tests. Before a personal trainer designs a workout, they assess fitness levels. Before a chef cooks a meal, they taste the ingredients. Assessment before action is the key to effectiveness. Our pre-assessment is your diagnostic test — it helps us tailor the workshop to your needs and helps you know where to focus your energy.",
      questions: [
        'Why do doctors run tests before treatment?',
        'How would a pre-assessment change your learning approach?',
      ],
      connection: 'Pre-assessment establishes a baseline. Without knowing where you start, you cannot measure how far you\'ve come.',
      technicalIntro: 'This pre-assessment covers fundamental NLP concepts, basic linear algebra, and quantum computing awareness. It is not graded — it\'s a diagnostic tool.',
      lifeSkills: 'Self-assessment is a meta-skill that improves learning efficiency. Knowing what you don\'t know is the first step to mastery.',
    },
    mathModelling: {
      need: 'Pre-assessment helps quantify the knowledge gap that the workshop needs to fill.',
      motivation: 'Effective learning requires personalized attention to individual knowledge gaps.',
      challenge: 'Designing assessment questions that accurately measure current knowledge across diverse backgrounds.',
      equations: [
        {
          latex: '\\text{Gap} = \\text{Target Knowledge} - \\text{Current Knowledge}',
          meaning: 'The learning gap is the difference between where you are and where you need to be.',
          interpretation: 'A larger gap means more focused effort is needed in that area.',
        },
      ],
      variables: [
        { symbol: 'Gap', name: 'Knowledge Gap', description: 'Amount of learning needed' },
      ],
      advantages: 'Identifies strengths and weaknesses before instruction begins, allowing personalized focus.',
      limitations: 'Pre-assessment cannot measure motivation, interest, or learning potential.',
    },
    activities: [
      {
        title: 'Pre-Assessment Quiz',
        description: 'Students complete a short quiz covering NLP and quantum computing basics.',
        steps: ['Distribute assessment', 'Explain it\'s not graded', 'Students complete independently', 'Collect responses'],
        materials: 'Assessment form (printed or digital)',
        timeRequired: '3 min',
        outcomes: 'Baseline knowledge data collected',
      },
    ],
    project: {
      scope: 'Self-assessment and gap analysis.',
      objectives: ['Identify knowledge gaps', 'Set focus areas for workshop'],
      timeline: [],
      teamRoles: [],
      deliverables: ['Completed assessment', 'Personal gap analysis'],
    },
    questions: [],
    virtualLab: {
      description: 'Interactive self-assessment with instant feedback.',
      steps: ['Answer questions', 'Review results', 'See gap analysis', 'Get recommendations', 'Set learning focus'],
      stepDetails: ['5 diagnostic questions', 'Score calculation', 'Visual gap display', 'Personalized tips', 'Focus planning'],
      completionMessage: 'Pre-assessment complete! Use your results to guide your focus.',
    },
    insights: {
      advantages: ['Personalized learning focus', 'Baseline for measuring progress', 'Identifies knowledge gaps'],
      disadvantages: ['May cause anxiety for some students (ungraded helps)'],
      futureScope: 'Pre-assessment is a valuable tool for any learning or training program.',
      industrialApplications: ['Employee training', 'Educational diagnostics', 'Adaptive learning systems'],
      careerRelevance: 'Assessment design and gap analysis are important skills in educational technology and HR analytics.',
    },
  },
}
