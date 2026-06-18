export interface Topic {
  id: string
  title: string
  duration: string
  prerequisites: string[]
  dependencies: string[]
  contentFile: string
}

export interface Module {
  id: string
  number: number
  title: string
  subtitle: string
  icon: string
  duration: string
  topics: Topic[]
}

export const modules: Module[] = [
  {
    id: 'm1',
    number: 1,
    title: 'Welcome and Learning Objectives',
    subtitle: 'Setting the stage for your Quantum NLP journey',
    icon: 'Compass',
    duration: '15 min',
    topics: [
      { id: '1.1', title: 'Introduction to the Workshop', duration: '5 min', prerequisites: [], dependencies: ['1.2'], contentFile: '1.1' },
      { id: '1.2', title: 'Expected Learning Outcomes', duration: '3 min', prerequisites: ['1.1'], dependencies: ['1.3'], contentFile: '1.2' },
      { id: '1.3', title: 'Workshop Roadmap', duration: '4 min', prerequisites: ['1.2'], dependencies: ['1.4'], contentFile: '1.3' },
      { id: '1.4', title: 'Pre-Assessment Activity', duration: '3 min', prerequisites: ['1.3'], dependencies: [], contentFile: '1.4' },
    ],
  },
  {
    id: 'm2',
    number: 2,
    title: 'Understanding Natural Language Processing',
    subtitle: 'From human language to machine understanding',
    icon: 'MessageSquare',
    duration: '40 min',
    topics: [
      { id: '2.1', title: 'What is Natural Language Processing?', duration: '5 min', prerequisites: ['1.4'], dependencies: ['2.2'], contentFile: '2.1' },
      { id: '2.2', title: 'How Humans Understand Language', duration: '5 min', prerequisites: ['2.1'], dependencies: ['2.3'], contentFile: '2.2' },
      { id: '2.3', title: 'How Machines Process Language', duration: '5 min', prerequisites: ['2.2'], dependencies: ['2.4'], contentFile: '2.3' },
      { id: '2.4', title: 'NLP Applications in Daily Life', duration: '5 min', prerequisites: ['2.3'], dependencies: ['2.5'], contentFile: '2.4' },
      { id: '2.5', title: 'Text Classification without Programming', duration: '20 min', prerequisites: ['2.4'], dependencies: [], contentFile: '2.5' },
    ],
  },
  {
    id: 'm3',
    number: 3,
    title: 'Foundations of Classical NLP',
    subtitle: 'Building blocks of traditional language processing',
    icon: 'Layers',
    duration: '60 min',
    topics: [
      { id: '3.1', title: 'Text Preprocessing Techniques', duration: '5 min', prerequisites: ['2.5'], dependencies: ['3.2'], contentFile: '3.1' },
      { id: '3.2', title: 'Tokenization', duration: '5 min', prerequisites: ['3.1'], dependencies: ['3.3'], contentFile: '3.2' },
      { id: '3.3', title: 'Stop Word Removal', duration: '5 min', prerequisites: ['3.2'], dependencies: ['3.4'], contentFile: '3.3' },
      { id: '3.4', title: 'Stemming and Lemmatization', duration: '5 min', prerequisites: ['3.3'], dependencies: ['3.5'], contentFile: '3.4' },
      { id: '3.5', title: 'Word Representation Techniques', duration: '5 min', prerequisites: ['3.4'], dependencies: ['3.6'], contentFile: '3.5' },
      { id: '3.6', title: 'Bag of Words Model', duration: '5 min', prerequisites: ['3.5'], dependencies: ['3.7'], contentFile: '3.6' },
      { id: '3.7', title: 'TF-IDF Representation', duration: '5 min', prerequisites: ['3.6'], dependencies: ['3.8'], contentFile: '3.7' },
      { id: '3.8', title: 'Word Embeddings', duration: '5 min', prerequisites: ['3.7'], dependencies: ['3.9'], contentFile: '3.8' },
      { id: '3.9', title: 'Building Basic NLP Pipelines', duration: '20 min', prerequisites: ['3.8'], dependencies: [], contentFile: '3.9' },
    ],
  },
  {
    id: 'm4',
    number: 4,
    title: 'Why Quantum Computing for NLP?',
    subtitle: 'Understanding the motivation behind quantum language processing',
    icon: 'Zap',
    duration: '30 min',
    topics: [
      { id: '4.1', title: 'Challenges of Modern NLP Systems', duration: '5 min', prerequisites: ['3.9'], dependencies: ['4.2'], contentFile: '4.1' },
      { id: '4.2', title: 'Computational Complexity of Language Models', duration: '5 min', prerequisites: ['4.1'], dependencies: ['4.3'], contentFile: '4.2' },
      { id: '4.3', title: 'Limitations of Classical ML Approaches', duration: '5 min', prerequisites: ['4.2'], dependencies: ['4.4'], contentFile: '4.3' },
      { id: '4.4', title: 'Motivation for Quantum Machine Learning', duration: '5 min', prerequisites: ['4.3'], dependencies: ['4.5'], contentFile: '4.4' },
      { id: '4.5', title: 'Potential Benefits of Quantum NLP', duration: '5 min', prerequisites: ['4.4'], dependencies: ['4.6'], contentFile: '4.5' },
      { id: '4.6', title: 'Can Quantum Computing Transform NLP?', duration: '5 min', prerequisites: ['4.5'], dependencies: [], contentFile: '4.6' },
    ],
  },
  {
    id: 'm5',
    number: 5,
    title: 'Quantum Computing Fundamentals for NLP Researchers',
    subtitle: 'Essential quantum concepts for language processing',
    icon: 'Atom',
    duration: '60 min',
    topics: [
      { id: '5.1', title: 'Introduction to Quantum Computing', duration: '5 min', prerequisites: ['4.6'], dependencies: ['5.2'], contentFile: '5.1' },
      { id: '5.2', title: 'Classical Bits vs Quantum Bits', duration: '5 min', prerequisites: ['5.1'], dependencies: ['5.3'], contentFile: '5.2' },
      { id: '5.3', title: 'Quantum States and Superposition', duration: '5 min', prerequisites: ['5.2'], dependencies: ['5.4'], contentFile: '5.3' },
      { id: '5.4', title: 'Quantum Entanglement', duration: '5 min', prerequisites: ['5.3'], dependencies: ['5.5'], contentFile: '5.4' },
      { id: '5.5', title: 'Quantum Measurement', duration: '5 min', prerequisites: ['5.4'], dependencies: ['5.6'], contentFile: '5.5' },
      { id: '5.6', title: 'Quantum Gates', duration: '5 min', prerequisites: ['5.5'], dependencies: ['5.7'], contentFile: '5.6' },
      { id: '5.7', title: 'Quantum Circuits', duration: '5 min', prerequisites: ['5.6'], dependencies: ['5.8'], contentFile: '5.7' },
      { id: '5.8', title: 'Creating Quantum Circuits with Qiskit', duration: '25 min', prerequisites: ['5.7'], dependencies: [], contentFile: '5.8' },
    ],
  },
  {
    id: 'm6',
    number: 6,
    title: 'From Language to Quantum States',
    subtitle: 'Encoding words and sentences into quantum representations',
    icon: 'Brain',
    duration: '45 min',
    topics: [
      { id: '6.1', title: 'Representing Words as Vectors', duration: '5 min', prerequisites: ['5.8'], dependencies: ['6.2'], contentFile: '6.1' },
      { id: '6.2', title: 'Vector Spaces in NLP', duration: '5 min', prerequisites: ['6.1'], dependencies: ['6.3'], contentFile: '6.2' },
      { id: '6.3', title: 'Introduction to Quantum State Representation', duration: '5 min', prerequisites: ['6.2'], dependencies: ['6.4'], contentFile: '6.3' },
      { id: '6.4', title: 'Encoding Text into Quantum States', duration: '5 min', prerequisites: ['6.3'], dependencies: ['6.5'], contentFile: '6.4' },
      { id: '6.5', title: 'Feature Mapping Techniques', duration: '5 min', prerequisites: ['6.4'], dependencies: ['6.6'], contentFile: '6.5' },
      { id: '6.6', title: 'Encoding Words into Quantum Circuits', duration: '20 min', prerequisites: ['6.5'], dependencies: [], contentFile: '6.6' },
    ],
  },
  {
    id: 'm7',
    number: 7,
    title: 'Introduction to Quantum Natural Language Processing',
    subtitle: 'Understanding the QNLP paradigm',
    icon: 'Sparkles',
    duration: '30 min',
    topics: [
      { id: '7.1', title: 'What is Quantum Natural Language Processing?', duration: '5 min', prerequisites: ['6.6'], dependencies: ['7.2'], contentFile: '7.1' },
      { id: '7.2', title: 'Evolution of QNLP', duration: '5 min', prerequisites: ['7.1'], dependencies: ['7.3'], contentFile: '7.2' },
      { id: '7.3', title: 'Classical NLP vs Quantum NLP', duration: '5 min', prerequisites: ['7.2'], dependencies: ['7.4'], contentFile: '7.3' },
      { id: '7.4', title: 'Components of a QNLP Pipeline', duration: '5 min', prerequisites: ['7.3'], dependencies: ['7.5'], contentFile: '7.4' },
      { id: '7.5', title: 'Applications of QNLP', duration: '5 min', prerequisites: ['7.4'], dependencies: ['7.6'], contentFile: '7.5' },
      { id: '7.6', title: 'Current State of Research in QNLP', duration: '5 min', prerequisites: ['7.5'], dependencies: [], contentFile: '7.6' },
    ],
  },
  {
    id: 'm8',
    number: 8,
    title: 'Linguistic Foundations of QNLP',
    subtitle: 'Grammar, meaning, and the DisCoCat framework',
    icon: 'BookOpen',
    duration: '40 min',
    topics: [
      { id: '8.1', title: 'Grammar and Meaning Representation', duration: '5 min', prerequisites: ['7.6'], dependencies: ['8.2'], contentFile: '8.1' },
      { id: '8.2', title: 'Compositional Semantics', duration: '5 min', prerequisites: ['8.1'], dependencies: ['8.3'], contentFile: '8.2' },
      { id: '8.3', title: 'Distributional Semantics', duration: '5 min', prerequisites: ['8.2'], dependencies: ['8.4'], contentFile: '8.3' },
      { id: '8.4', title: 'Introduction to DisCoCat Framework', duration: '10 min', prerequisites: ['8.3'], dependencies: ['8.5'], contentFile: '8.4' },
      { id: '8.5', title: 'Diagrammatic Representation of Language', duration: '5 min', prerequisites: ['8.4'], dependencies: ['8.6'], contentFile: '8.5' },
      { id: '8.6', title: 'Visualizing Sentence Structures', duration: '10 min', prerequisites: ['8.5'], dependencies: [], contentFile: '8.6' },
    ],
  },
  {
    id: 'm9',
    number: 9,
    title: 'QNLP Frameworks and Tools',
    subtitle: 'Setting up your quantum NLP development environment',
    icon: 'Wrench',
    duration: '40 min',
    topics: [
      { id: '9.1', title: 'Overview of QNLP Ecosystem', duration: '5 min', prerequisites: ['8.6'], dependencies: ['9.2'], contentFile: '9.1' },
      { id: '9.2', title: 'Introduction to Qiskit', duration: '5 min', prerequisites: ['9.1'], dependencies: ['9.3'], contentFile: '9.2' },
      { id: '9.3', title: 'Introduction to PennyLane', duration: '5 min', prerequisites: ['9.2'], dependencies: ['9.4'], contentFile: '9.3' },
      { id: '9.4', title: 'Introduction to Lambeq', duration: '5 min', prerequisites: ['9.3'], dependencies: ['9.5'], contentFile: '9.4' },
      { id: '9.5', title: 'Setting Up the Development Environment', duration: '5 min', prerequisites: ['9.4'], dependencies: ['9.6'], contentFile: '9.5' },
      { id: '9.6', title: 'Installing and Exploring QNLP Libraries', duration: '15 min', prerequisites: ['9.5'], dependencies: [], contentFile: '9.6' },
    ],
  },
  {
    id: 'm10',
    number: 10,
    title: 'Building Quantum Language Models with Lambeq',
    subtitle: 'From sentence diagrams to quantum circuits',
    icon: 'GitBranch',
    duration: '50 min',
    topics: [
      { id: '10.1', title: 'Parsing Sentences into Diagrams', duration: '10 min', prerequisites: ['9.6'], dependencies: ['10.2'], contentFile: '10.1' },
      { id: '10.2', title: 'Understanding Sentence Diagrams', duration: '10 min', prerequisites: ['10.1'], dependencies: ['10.3'], contentFile: '10.2' },
      { id: '10.3', title: 'Converting Diagrams into Quantum Circuits', duration: '10 min', prerequisites: ['10.2'], dependencies: ['10.4'], contentFile: '10.3' },
      { id: '10.4', title: 'Parameterized Quantum Circuits for Language', duration: '10 min', prerequisites: ['10.3'], dependencies: ['10.5'], contentFile: '10.4' },
      { id: '10.5', title: 'Creating Your First Quantum Language Model', duration: '10 min', prerequisites: ['10.4'], dependencies: [], contentFile: '10.5' },
    ],
  },
  {
    id: 'm11',
    number: 11,
    title: 'Quantum Text Classification',
    subtitle: 'Building quantum classifiers for text data',
    icon: 'Target',
    duration: '60 min',
    topics: [
      { id: '11.1', title: 'Introduction to Text Classification', duration: '5 min', prerequisites: ['10.5'], dependencies: ['11.2'], contentFile: '11.1' },
      { id: '11.2', title: 'Classical Classification Approaches', duration: '5 min', prerequisites: ['11.1'], dependencies: ['11.3'], contentFile: '11.2' },
      { id: '11.3', title: 'Quantum Classification Workflow', duration: '10 min', prerequisites: ['11.2'], dependencies: ['11.4'], contentFile: '11.3' },
      { id: '11.4', title: 'Data Preparation for QNLP', duration: '10 min', prerequisites: ['11.3'], dependencies: ['11.5'], contentFile: '11.4' },
      { id: '11.5', title: 'Building a Quantum Sentiment Model', duration: '10 min', prerequisites: ['11.4'], dependencies: ['11.6'], contentFile: '11.5' },
      { id: '11.6', title: 'Model Training and Validation', duration: '10 min', prerequisites: ['11.5'], dependencies: ['11.7'], contentFile: '11.6' },
      { id: '11.7', title: 'Quantum Sentiment Classification Lab', duration: '10 min', prerequisites: ['11.6'], dependencies: [], contentFile: '11.7' },
    ],
  },
  {
    id: 'm12',
    number: 12,
    title: 'Hybrid Quantum-Classical NLP Models',
    subtitle: 'Combining quantum and classical approaches',
    icon: 'Cpu',
    duration: '40 min',
    topics: [
      { id: '12.1', title: 'Why Hybrid Models?', duration: '5 min', prerequisites: ['11.7'], dependencies: ['12.2'], contentFile: '12.1' },
      { id: '12.2', title: 'Variational Quantum Circuits', duration: '10 min', prerequisites: ['12.1'], dependencies: ['12.3'], contentFile: '12.2' },
      { id: '12.3', title: 'Hybrid Learning Architecture', duration: '5 min', prerequisites: ['12.2'], dependencies: ['12.4'], contentFile: '12.3' },
      { id: '12.4', title: 'Quantum Feature Extraction', duration: '5 min', prerequisites: ['12.3'], dependencies: ['12.5'], contentFile: '12.4' },
      { id: '12.5', title: 'Integration with Classical Neural Networks', duration: '5 min', prerequisites: ['12.4'], dependencies: ['12.6'], contentFile: '12.5' },
      { id: '12.6', title: 'Hybrid NLP Pipeline Lab', duration: '10 min', prerequisites: ['12.5'], dependencies: [], contentFile: '12.6' },
    ],
  },
  {
    id: 'm13',
    number: 13,
    title: 'Evaluating Quantum NLP Models',
    subtitle: 'Performance metrics and benchmarking',
    icon: 'BarChart3',
    duration: '30 min',
    topics: [
      { id: '13.1', title: 'Performance Metrics', duration: '5 min', prerequisites: ['12.6'], dependencies: ['13.2'], contentFile: '13.1' },
      { id: '13.2', title: 'Accuracy, Precision, Recall, F1 Score', duration: '5 min', prerequisites: ['13.1'], dependencies: ['13.3'], contentFile: '13.2' },
      { id: '13.3', title: 'Benchmarking Against Classical Models', duration: '5 min', prerequisites: ['13.2'], dependencies: ['13.4'], contentFile: '13.3' },
      { id: '13.4', title: 'Understanding Quantum Advantage', duration: '5 min', prerequisites: ['13.3'], dependencies: ['13.5'], contentFile: '13.4' },
      { id: '13.5', title: 'Experimental Analysis and Interpretation', duration: '10 min', prerequisites: ['13.4'], dependencies: [], contentFile: '13.5' },
    ],
  },
  {
    id: 'm14',
    number: 14,
    title: 'Research Applications of QNLP',
    subtitle: 'Real-world applications and case studies',
    icon: 'FlaskConical',
    duration: '40 min',
    topics: [
      { id: '14.1', title: 'Sentiment Analysis', duration: '5 min', prerequisites: ['13.5'], dependencies: ['14.2'], contentFile: '14.1' },
      { id: '14.2', title: 'Fake News Detection', duration: '5 min', prerequisites: ['14.1'], dependencies: ['14.3'], contentFile: '14.2' },
      { id: '14.3', title: 'Question Answering Systems', duration: '5 min', prerequisites: ['14.2'], dependencies: ['14.4'], contentFile: '14.3' },
      { id: '14.4', title: 'Healthcare Text Analytics', duration: '5 min', prerequisites: ['14.3'], dependencies: ['14.5'], contentFile: '14.4' },
      { id: '14.5', title: 'Legal Document Analysis', duration: '5 min', prerequisites: ['14.4'], dependencies: ['14.6'], contentFile: '14.5' },
      { id: '14.6', title: 'Multilingual Language Processing', duration: '5 min', prerequisites: ['14.5'], dependencies: ['14.7'], contentFile: '14.6' },
      { id: '14.7', title: 'Conversational AI and Chatbots', duration: '10 min', prerequisites: ['14.6'], dependencies: [], contentFile: '14.7' },
    ],
  },
  {
    id: 'm15',
    number: 15,
    title: 'Mini Project and Collaborative Learning',
    subtitle: 'Apply your QNLP knowledge in a team project',
    icon: 'Users',
    duration: '60 min',
    topics: [
      { id: '15.1', title: 'Problem Identification', duration: '10 min', prerequisites: ['14.7'], dependencies: ['15.2'], contentFile: '15.1' },
      { id: '15.2', title: 'Dataset Selection', duration: '10 min', prerequisites: ['15.1'], dependencies: ['15.3'], contentFile: '15.2' },
      { id: '15.3', title: 'Designing a QNLP Solution', duration: '15 min', prerequisites: ['15.2'], dependencies: ['15.4'], contentFile: '15.3' },
      { id: '15.4', title: 'Team-Based Activity', duration: '10 min', prerequisites: ['15.3'], dependencies: ['15.5'], contentFile: '15.4' },
      { id: '15.5', title: 'Presentation and Discussion', duration: '10 min', prerequisites: ['15.4'], dependencies: ['15.6'], contentFile: '15.5' },
      { id: '15.6', title: 'Feedback and Improvement', duration: '5 min', prerequisites: ['15.5'], dependencies: [], contentFile: '15.6' },
    ],
  },
  {
    id: 'm16',
    number: 16,
    title: 'Research Roadmap in QNLP',
    subtitle: 'Future directions and open problems',
    icon: 'Route',
    duration: '45 min',
    topics: [
      { id: '16.1', title: 'Current Challenges in QNLP', duration: '5 min', prerequisites: ['15.6'], dependencies: ['16.2'], contentFile: '16.1' },
      { id: '16.2', title: 'Open Research Problems', duration: '5 min', prerequisites: ['16.1'], dependencies: ['16.3'], contentFile: '16.2' },
      { id: '16.3', title: 'Quantum Transformers', duration: '5 min', prerequisites: ['16.2'], dependencies: ['16.4'], contentFile: '16.3' },
      { id: '16.4', title: 'Quantum Embeddings', duration: '5 min', prerequisites: ['16.3'], dependencies: ['16.5'], contentFile: '16.4' },
      { id: '16.5', title: 'Quantum Attention Mechanisms', duration: '5 min', prerequisites: ['16.4'], dependencies: ['16.6'], contentFile: '16.5' },
      { id: '16.6', title: 'Quantum Large Language Models', duration: '5 min', prerequisites: ['16.5'], dependencies: ['16.7'], contentFile: '16.6' },
      { id: '16.7', title: 'Quantum Retrieval-Augmented Generation', duration: '5 min', prerequisites: ['16.6'], dependencies: ['16.8'], contentFile: '16.7' },
      { id: '16.8', title: 'Quantum Knowledge Graphs', duration: '10 min', prerequisites: ['16.7'], dependencies: [], contentFile: '16.8' },
    ],
  },
  {
    id: 'm17',
    number: 17,
    title: 'Resources for Continued Learning',
    subtitle: 'Tools, papers, and communities for your QNLP journey',
    icon: 'Library',
    duration: '20 min',
    topics: [
      { id: '17.1', title: 'Research Papers and Surveys', duration: '3 min', prerequisites: ['16.8'], dependencies: ['17.2'], contentFile: '17.1' },
      { id: '17.2', title: 'Open-Source Tools and Libraries', duration: '3 min', prerequisites: ['17.1'], dependencies: ['17.3'], contentFile: '17.2' },
      { id: '17.3', title: 'Datasets for QNLP Research', duration: '3 min', prerequisites: ['17.2'], dependencies: ['17.4'], contentFile: '17.3' },
      { id: '17.4', title: 'Research Communities and Forums', duration: '3 min', prerequisites: ['17.3'], dependencies: ['17.5'], contentFile: '17.4' },
      { id: '17.5', title: 'Publication Opportunities', duration: '4 min', prerequisites: ['17.4'], dependencies: ['17.6'], contentFile: '17.5' },
      { id: '17.6', title: 'Funding Opportunities in Quantum AI', duration: '4 min', prerequisites: ['17.5'], dependencies: [], contentFile: '17.6' },
    ],
  },
  {
    id: 'm18',
    number: 18,
    title: 'Workshop Wrap-Up',
    subtitle: 'Recap, reflection, and next steps',
    icon: 'GraduationCap',
    duration: '15 min',
    topics: [
      { id: '18.1', title: 'Recap of Key Concepts', duration: '5 min', prerequisites: ['17.6'], dependencies: ['18.2'], contentFile: '18.1' },
      { id: '18.2', title: 'Participant Reflections', duration: '3 min', prerequisites: ['18.1'], dependencies: ['18.3'], contentFile: '18.2' },
      { id: '18.3', title: 'Post-Assessment Activity', duration: '5 min', prerequisites: ['18.2'], dependencies: ['18.4'], contentFile: '18.3' },
      { id: '18.4', title: 'Future Learning Pathways', duration: '2 min', prerequisites: ['18.3'], dependencies: [], contentFile: '18.4' },
    ],
  },
]

export function getModule(id: string): Module | undefined {
  return modules.find((m) => m.id === id)
}

export function getTopic(topicId: string): { module: Module; topic: Topic } | undefined {
  for (const mod of modules) {
    const t = mod.topics.find((tp) => tp.id === topicId)
    if (t) return { module: mod, topic: t }
  }
  return undefined
}

export function getTotalTopics(): number {
  return modules.reduce((acc, m) => acc + m.topics.length, 0)
}

export function getCompletedTopics(progress: Record<string, { approved?: boolean }>): number {
  return Object.values(progress).filter((p) => p.approved).length
}
