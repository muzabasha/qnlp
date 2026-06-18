import type { TopicContent } from './loader'

const baseActivity = (title: string, desc: string, steps: string[], outcomes: string, time?: string) => ({
  title, description: desc, steps, outcomes, timeRequired: time || '5 min',
})

const baseQuestions = (topicNum: string) => [
  {
    question: `What is the core concept of ${topicNum} in NLP?`,
    answer: 'It is a fundamental technique that enables machines to process and understand human language by breaking it down into manageable components.',
    explanation: 'This concept forms the building block for all advanced NLP systems.',
    commonMistake: 'Confusing it with other related NLP techniques',
    tip: 'Think of it as the first step in teaching machines to read',
  },
  {
    question: `Why is ${topicNum} important for quantum NLP?`,
    answer: 'It provides the foundational understanding needed to appreciate how quantum approaches can improve upon classical methods.',
    explanation: 'Without understanding classical NLP limitations, the motivation for quantum approaches is unclear.',
    commonMistake: 'Skipping classical foundations before jumping to quantum',
    tip: 'Master classical concepts first, then quantum becomes intuitive',
  },
  {
    question: 'How does this concept apply in real-world applications?',
    answer: 'It is used in search engines, chatbots, translation services, and sentiment analysis tools we use daily.',
    explanation: 'These applications demonstrate the practical value of NLP in everyday technology.',
    tip: 'Observe NLP in action: Google Search, ChatGPT, Google Translate',
  },
]

const baseInsights = (advantages: string[], disadvantages: string[], futureScope: string, applications: string[], career: string): TopicContent['insights'] => ({
  advantages, disadvantages, futureScope, industrialApplications: applications, careerRelevance: career,
})

export const m2Content: Record<string, TopicContent> = {
  '2.1': {
    topicId: '2.1',
    learningObjective: 'Define Natural Language Processing and understand its scope in modern AI systems.',
    nextPrep: 'Think about how you personally understand language and what makes it challenging for computers.',
    dependencyGraph: `flowchart LR
      A[1.4 Pre-Assessment] --> B[2.1 What is NLP?]
      B --> C[2.2 Human Language Understanding]
      C --> D[2.3 Machine Language Processing]
      D --> E[2.4 NLP Applications]
      E --> F[2.5 Text Classification Lab]`,
    storytelling: {
      story: 'Imagine teaching a toddler to understand language. You point to a cat and say "cat." You show them a picture and say "happy." Slowly, they connect sounds to meanings. Now imagine teaching a computer the same thing — except the computer has never seen a cat, never felt happiness, and has no senses at all. It only sees numbers: 0s and 1s. How do you explain the warmth of a sunny day or the irony in "Oh, fantastic, another flat tire!" to something that only understands binary? That is the challenge of Natural Language Processing — bridging the gap between human meaning and machine computation.',
      questions: [
        'How do you understand that "I\'m feeling blue" has nothing to do with color?',
        'What makes sarcasm so hard for computers to detect?',
        'If you had to explain "love" to an alien who has never felt emotions, how would you do it?',
      ],
      connection: 'NLP is the field that tries to teach computers to understand, interpret, and generate human language. Just like teaching that toddler or that alien, it requires bridging a massive gap between how humans experience the world and how machines process information.',
      technicalIntro: 'Natural Language Processing (NLP) is a subfield of artificial intelligence, linguistics, and computer science focused on enabling computers to process and understand human language. It combines computational linguistics with statistical, machine learning, and deep learning models.',
      lifeSkills: 'Understanding NLP improves your ability to communicate clearly and appreciate the complexity of human language. It also develops analytical thinking as you learn to break down language into its constituent parts.',
    },
    mathModelling: {
      need: 'Quantifying how machines process language requires mathematical models of probability, statistics, and linear algebra.',
      motivation: 'Language is inherently probabilistic — no two people speak exactly the same way. Mathematics helps us model this variability.',
      challenge: 'Capturing the full richness of human language (context, ambiguity, culture, emotion) in mathematical terms.',
      equations: [
        {
          latex: 'P(w_1, w_2, \\ldots, w_n) = \\prod_{i=1}^{n} P(w_i | w_1, w_2, \\ldots, w_{i-1})',
          meaning: 'The probability of a sequence of words is the product of conditional probabilities of each word given all previous words.',
          interpretation: 'This chain rule of probability is the foundation of language modeling. It breaks down sentence probability into manageable conditional probabilities.',
        },
        {
          latex: '\\text{Perplexity} = 2^{-\\frac{1}{N} \\sum_{i=1}^{N} \\log_2 P(w_i | w_{<i})}',
          meaning: 'Perplexity measures how well a language model predicts a sample. Lower perplexity means better prediction.',
          interpretation: 'Perplexity of K means the model is as confused as if it had to choose uniformly among K options. Human-level perplexity on standard benchmarks is around 20-60.',
        },
      ],
      variables: [
        { symbol: 'w_i', name: 'i-th Word', description: 'The word at position i in the sequence' },
        { symbol: 'P(w_i | ...)', name: 'Conditional Probability', description: 'Probability of word w_i given previous words' },
        { symbol: 'N', name: 'Sequence Length', description: 'Total number of words in the sequence' },
      ],
      interactive: {
        equation: 'P(w_1, w_2, w_3) = P(w_1) \\times P(w_2|w_1) \\times P(w_3|w_1,w_2)',
        description: 'Adjust word probabilities to see how sentence likelihood changes:',
        variables: [
          { symbol: 'P(w₁)', name: 'First Word Prob', description: 'Probability of first word' },
          { symbol: 'P(w₂|w₁)', name: 'Second Word Given First', description: 'Conditional probability of second word' },
          { symbol: 'P(w₃|w₁,w₂)', name: 'Third Word Given Previous', description: 'Conditional probability of third word' },
        ],
        sliders: [
          { name: 'Pw1', label: 'P(w₁)', min: 0.01, max: 0.5, step: 0.01, default: 0.1 },
          { name: 'Pw2', label: 'P(w₂|w₁)', min: 0.01, max: 0.5, step: 0.01, default: 0.2 },
          { name: 'Pw3', label: 'P(w₃|w₁,w₂)', min: 0.01, max: 0.5, step: 0.01, default: 0.15 },
        ],
      },
      charts: [
        {
          title: 'NLP Applications Growth (2015-2025)',
          type: 'area',
          data: [
            { name: '2015', 'Research Papers': 5000, 'Industry Use': 2000 },
            { name: '2017', 'Research Papers': 12000, 'Industry Use': 6000 },
            { name: '2019', 'Research Papers': 25000, 'Industry Use': 15000 },
            { name: '2021', 'Research Papers': 45000, 'Industry Use': 35000 },
            { name: '2023', 'Research Papers': 80000, 'Industry Use': 70000 },
            { name: '2025', 'Research Papers': 120000, 'Industry Use': 110000 },
          ],
        },
      ],
      advantages: 'NLP has revolutionized human-computer interaction, enabling voice assistants, translation services, and automated content analysis at unprecedented scales.',
      limitations: 'Current NLP systems lack true understanding, common sense reasoning, and are easily fooled by adversarial examples. They process patterns, not meaning.',
    },
    activities: [
      baseActivity(
        'Defining NLP Together',
        'Instructor introduces NLP with real-world examples and demos.',
        ['Show examples of NLP in action: Google Translate, Siri, ChatGPT', 'Ask students to identify which everyday tools use NLP', 'Explain the difference between NLP, NLU, and NLG', 'Demo a simple NLP task using a web-based tool'],
        'Students can define NLP and identify its applications'
      ),
      baseActivity(
        'NLP or Not NLP?',
        'Instructor shows a list of applications and students vote on whether they use NLP.',
        ['Show 10 applications (e.g., spell check, calculator, Google Search)', 'Students raise hands to vote NLP or Not NLP', 'Discuss each answer and explain the NLP component', 'Correct misconceptions'],
        'Students distinguish NLP from non-NLP applications',
        '5 min'
      ),
      baseActivity(
        'Group Brainstorm: NLP in Your Domain',
        'Groups of 5 discuss how NLP impacts their field of study or teaching.',
        ['Form groups of 5-6', 'Brainstorm 3 ways NLP is used in your domain', 'Identify one problem NLP could solve better', 'Present findings to class'],
        'Students connect NLP to their own context',
        '7 min'
      ),
      baseActivity(
        'Personal NLP Inventory',
        'Students list all NLP-powered tools they used in the last 24 hours.',
        ['List every app/website you used today', 'Mark which ones use NLP', 'Count how many NLP interactions you had', 'Write a reflection on NLP\'s pervasiveness'],
        'Students recognize NLP\'s ubiquity in daily life',
        '3 min'
      ),
    ],
    project: {
      scope: 'Create a personal NLP awareness journal documenting NLP interactions over a day.',
      objectives: ['Identify NLP-powered tools in daily use', 'Categorize NLP applications by type', 'Reflect on the pervasiveness of language technology'],
      timeline: [
        { phase: 'Document tools', duration: '1 day', percent: 40 },
        { phase: 'Categorize', duration: '30 min', percent: 30 },
        { phase: 'Reflect', duration: '15 min', percent: 30 },
      ],
      teamRoles: [
        { role: 'Observer', responsibility: 'Document all NLP interactions' },
        { role: 'Analyst', responsibility: 'Categorize and count NLP use cases' },
      ],
      deliverables: ['NLP awareness journal', 'Categorized list of 10+ NLP applications', 'Reflection paragraph on NLP impact'],
    },
    questions: baseQuestions('2.1'),
    virtualLab: {
      description: 'Explore what NLP is through an interactive demo that processes sample text in real-time.',
      steps: ['Enter sample text', 'Run basic NLP analysis', 'View parts of speech', 'See named entities', 'Explore language detection'],
      stepDetails: ['Type or paste any sentence', 'Click "Analyze" to process', 'Colored highlights show nouns, verbs, adjectives', 'People, places, organizations are detected', 'Language and sentiment are displayed'],
      completionMessage: 'You have experienced NLP in action! This is how machines start to "read" text.',
      dataFlow: `flowchart LR
        A[Raw Text Input] --> B[Tokenization]
        B --> C[POS Tagging]
        C --> D[NER Detection]
        D --> E[Sentiment Analysis]
        E --> F[Structured Output]`,
    },
    insights: baseInsights(
      ['Foundation for all advanced NLP concepts', 'Wide applicability across industries', 'Rapidly growing field with high demand'],
      ['Vague definition without clear boundaries with NLU/NLG', 'Requires understanding of both linguistics and CS'],
      'NLP is evolving toward more nuanced understanding, with quantum NLP representing the next frontier.',
      ['Virtual assistants (Siri, Alexa, Google Assistant)', 'Machine translation (Google Translate, DeepL)', 'Content moderation on social media', 'Healthcare documentation and diagnosis assistance'],
      'NLP expertise is one of the most in-demand skills in AI. Every major tech company hires NLP specialists, and the field continues to grow rapidly.'
    ),
  },

  '2.2': {
    topicId: '2.2',
    learningObjective: 'Understand the cognitive processes humans use to comprehend language and how they differ from machine processing.',
    nextPrep: 'Reflect on how you resolve ambiguity in language and how that might be automated.',
    storytelling: {
      story: 'When you read "The bank was slippery, so the man fell," you instantly know it is a river bank, not a financial bank. But how? Your brain processed the word "slippery" and immediately activated the river-related meaning of "bank," all in milliseconds. You did not consciously compute probabilities or search a database. Your brain used context, world knowledge, and experience in a seamless parallel process that our most advanced supercomputers cannot truly replicate. Now imagine explaining to a computer why "bank" means something different in "I need to go to the bank before it closes." It has no concept of rivers, money, or slippery surfaces — it only has numbers.',
      questions: [
        'How do you instantly understand the correct meaning of ambiguous words?',
        'What background knowledge do you use when reading a news article?',
        'Have you ever misunderstood a sentence and then corrected yourself? What happened in your brain?',
      ],
      connection: 'Human language understanding is a remarkable cognitive ability that combines memory, context, world knowledge, and pattern recognition. Understanding how humans process language helps us design better NLP systems.',
      technicalIntro: 'Human language processing involves multiple brain regions working in parallel: Wernicke\'s area (language comprehension), Broca\'s area (language production), and the angular gyrus (concept association). This distributed processing is fundamentally different from how machines process language sequentially.',
      lifeSkills: 'Understanding your own language processing improves metacognition and communication skills. It also builds appreciation for the complexity of human cognition.',
    },
    mathModelling: {
      need: 'Modeling human language processing requires understanding of neural networks and parallel distributed processing.',
      motivation: 'The human brain processes language with incredible efficiency using only ~20W of power. Understanding this can inspire more efficient AI architectures.',
      challenge: 'Replicating the brain\'s ability to integrate context, world knowledge, and nuance simultaneously.',
      equations: [
        {
          latex: '\\text{Activation}_i = f\\left(\\sum_{j} w_{ij} \\cdot \\text{input}_j + b_i\\right)',
          meaning: 'A neuron\'s activation is a function of the weighted sum of its inputs plus a bias term.',
          interpretation: 'This models how neurons in the brain (and artificial neural networks) integrate signals from multiple sources to produce an output.',
        },
      ],
      variables: [
        { symbol: 'w_ij', name: 'Synaptic Weight', description: 'Strength of connection between neurons i and j' },
        { symbol: 'f', name: 'Activation Function', description: 'Non-linear function that determines neuron output' },
      ],
      advantages: 'Understanding human language processing provides insights for designing more natural and efficient NLP systems.',
      limitations: 'We still do not fully understand how the brain processes language. Current models are gross simplifications.',
    },
    activities: [
      baseActivity('Ambiguity Demonstration', 'Instructor shows ambiguous sentences and discusses how humans resolve them.', [
        'Show: "The farmer sowed the seeds of discontent"', 'Ask: What does "seeds" mean here?', 'Explain literal vs metaphorical meaning', 'Discuss how computers might misinterpret this',
      ], 'Students understand lexical and syntactic ambiguity'),
      baseActivity('Context Clues Exercise', 'Students work with instructor to identify context clues in sentences.', [
        'Show sentences with missing words', 'Students predict the missing word', 'Discuss what context clues were used', 'Compare human vs machine prediction strategies',
      ], 'Students understand how context disambiguates meaning', '5 min'),
      baseActivity('Group: Build a Disambiguation Rule', 'Groups create simple rules for word sense disambiguation.', [
        'Give groups ambiguous words (bank, bat, spring, ring)', 'Each group identifies 3 disambiguation rules', 'Share and compare rules across groups', 'Discuss limitations of rule-based approaches',
      ], 'Students learn the complexity of disambiguation', '8 min'),
      baseActivity('Reflection: Your Language Processing', 'Students reflect on their own language processing strategies.', [
        'Read a complex paragraph', 'Note mental strategies used to understand it', 'Write down when you had to re-read or correct understanding', 'Compare with a partner',
      ], 'Students develop metacognitive awareness of language processing', '5 min'),
    ],
    project: {
      scope: 'Create a "language ambiguity journal" documenting examples of ambiguous language encountered in daily life.',
      objectives: ['Collect examples of ambiguous language', 'Identify how humans resolve ambiguity', 'Design rule-based disambiguation approaches'],
      timeline: [{ phase: 'Collect examples', duration: '1 day', percent: 40 }, { phase: 'Analyze', duration: '30 min', percent: 30 }, { phase: 'Design rules', duration: '30 min', percent: 30 }],
      teamRoles: [],
      deliverables: ['Ambiguity journal with 5+ examples', 'Disambiguation rule set', 'Comparative analysis: human vs machine'],
    },
    questions: [],
    virtualLab: {
      description: 'Explore word sense disambiguation through an interactive demo.',
      steps: ['Load ambiguous sentence', 'See all possible interpretations', 'Adjust context parameters', 'Observe how context changes meaning', 'Compare with human choices'],
      stepDetails: ['Select from sample sentences', 'View word sense inventory', 'Add context words and phrases', 'See probability distribution of meanings', 'See how humans rated each sense'],
      completionMessage: 'You have experienced how context disambiguates language!',
    },
    insights: baseInsights(
      ['Understanding human cognition improves AI design', 'Context is crucial for NLP', 'Parallel processing is key to efficiency'],
      ['Human language processing is not fully understood', 'Computational models are vast oversimplifications'],
      'Brain-inspired computing and neuromorphic architectures may bridge the gap between human and machine language processing.',
      ['Brain-computer interfaces', 'Assistive communication devices', 'Cognitive science research tools'],
      'Cognitive science and NLP crossover skills are valuable in AI research, UX design, and assistive technology development.'
    ),
  },

  '2.3': {
    topicId: '2.3',
    learningObjective: 'Explain how machines process language differently from humans, including tokenization, parsing, and statistical methods.',
    nextPrep: 'Consider what preprocessing steps might be needed before a computer can analyze text.',
    storytelling: {
      story: 'Imagine you are trying to explain a joke to a robot. You say: "Why did the chicken cross the road? To get to the other side!" The robot responds: "The chicken wanted to reach the opposite side of the road. Query: Was the chicken lost? Query: What is a chicken?" The robot completely missed the joke because it processed the words literally, one at a time. It did not understand the cultural context of a classic joke, the expectation of humor, or the play on words. To a machine, every sentence is just data to be analyzed systematically — no laughter, no amusement, just computation.',
      questions: ['Why do computers take everything literally?', 'How would you teach a computer to recognize a joke?', 'What makes a sentence more than just a sequence of words?'],
      connection: 'Machines process language fundamentally differently from humans. They convert text into numerical representations and apply statistical patterns, without any genuine understanding, consciousness, or sense of humor.',
      technicalIntro: 'Machine language processing involves several stages: tokenization (splitting text into units), parsing (analyzing grammatical structure), semantic analysis (extracting meaning), and pragmatic analysis (understanding context and intent).',
      lifeSkills: 'Understanding the difference between human and machine intelligence helps you communicate more effectively with technology and appreciate uniquely human cognitive abilities.',
    },
    mathModelling: {
      need: 'Formal language theory and automata theory provide the mathematical foundation for machine language processing.',
      motivation: 'Machines need precise, unambiguous mathematical models to process language that is inherently ambiguous.',
      challenge: 'Converting the continuous, analogue nature of human language into discrete, digital representations.',
      equations: [
        {
          latex: '\\text{Edit Distance}(a,b) = \\min_{\\text{ops}} \\text{cost}(\\text{ops}_{a \\to b})',
          meaning: 'The minimum number of single-character edits (insert, delete, substitute) to transform string a into string b.',
          interpretation: 'Edit distance measures how similar two strings are. Used in spell-check, DNA sequence alignment, and plagiarism detection.',
        },
      ],
      variables: [
        { symbol: 'ops', name: 'Operations', description: 'Sequence of edit operations' },
      ],
      advantages: 'Computers can process text at massive scale (millions of documents per second), far exceeding human capabilities.',
      limitations: 'Computers lack true understanding, common sense, emotional intelligence, and cultural context.',
    },
    activities: [
      baseActivity('Tokenization Demo', 'Instructor demonstrates how a computer splits text into tokens.', [
        'Show a sentence on screen', 'Manually tokenize it word by word', 'Show punctuation tokenization', 'Discuss edge cases: "don\'t", "e.g.", URLs',
      ], 'Students understand the tokenization process'),
      baseActivity('Parsing Together', 'Instructor and students parse sentences collaboratively.', [
        'Write a sentence on board', 'Identify subject, verb, object', 'Draw parse tree', 'Discuss structural ambiguity',
      ], 'Students learn basic parsing concepts', '5 min'),
      baseActivity('Group: Design a Tokenizer', 'Groups design rules for a simple tokenization algorithm.', [
        'Given 10 sample sentences', 'Identify tokenization rules needed', 'Test rules on edge cases', 'Present tokenizer design',
      ], 'Students understand tokenization challenges', '8 min'),
      baseActivity('Machine vs Human: Reading Speed', 'Students compare their reading speed with machine processing speed.', [
        'Read a passage and time yourself', 'Note comprehension level', 'Learn that machines process 1000+ pages/second', 'Reflect on trade-offs',
      ], 'Students appreciate machine speed and human depth', '3 min'),
    ],
    project: {
      scope: 'Design a simple text processing pipeline for a specific use case.', objectives: ['Understand tokenization', 'Learn parsing basics', 'Design processing pipeline'],
      timeline: [{ phase: 'Design', duration: '15 min', percent: 30 }, { phase: 'Implement rules', duration: '20 min', percent: 40 }, { phase: 'Test', duration: '10 min', percent: 30 }],
      teamRoles: [{ role: 'Designer', responsibility: 'Pipeline architecture' }, { role: 'Tester', responsibility: 'Edge case identification' }],
      deliverables: ['Pipeline design document', 'Rule set for tokenization', 'Test cases for edge cases'],
    },
    questions: baseQuestions('2.3'),
    virtualLab: {
      description: 'See step-by-step how a machine processes a sentence.', steps: ['Input a sentence', 'Tokenize', 'Tag parts of speech', 'Parse structure', 'Extract meaning'],
      stepDetails: ['Type any sentence', 'Words are split and counted', 'Each word labeled (noun, verb, etc.)', 'Parse tree is generated', 'Relationships between words shown'],
      completionMessage: 'You have seen the full machine language processing pipeline!',
    },
    insights: baseInsights(
      ['Massive processing speed', 'Consistent and repeatable', 'Can handle multilingual text'],
      ['No true understanding', 'Struggles with ambiguity', 'Requires large training data'],
      'Advances in quantum computing may help machines process language more like human brains do.',
      ['Search engines', 'Spam filters', 'Auto-complete systems', 'Grammar checkers'],
      'Understanding machine processing is fundamental for careers in AI, data science, and computational linguistics.'
    ),
  },

  '2.4': {
    topicId: '2.4',
    learningObjective: 'Identify and categorize the wide range of NLP applications that impact daily life and various industries.',
    nextPrep: 'Think about which NLP application you would like to build as a project during this workshop.',
    storytelling: {
      story: 'You wake up and say, "Hey Siri, what is the weather?" Your email spam filter has already blocked 12 phishing attempts overnight. On your commute, Google Maps reads traffic alerts aloud. At work, you use Grammarly to check an email. You search Google for "quantum NLP tutorial." You read a news article recommended by your feed algorithm. You finish the day watching a Netflix show with perfectly synced subtitles. You just interacted with NLP dozens of times without realizing it. NLP is the invisible assistant that powers modern digital life, quietly working behind every text you type, every search you make, and every recommendation you receive.',
      questions: ['How many times do you think you interact with NLP in a day?', 'Which NLP application would be hardest to live without?', 'Can you think of a problem that currently lacks an NLP solution?'],
      connection: 'NLP applications are everywhere — from search engines to translation, from spell-check to chatbots. Understanding these applications provides context for why advancing NLP (including quantum approaches) matters.',
      technicalIntro: 'NLP applications can be categorized into: text classification (sentiment, spam), sequence labeling (POS tagging, NER), sequence-to-sequence (translation, summarization), question answering, and dialogue systems.',
      lifeSkills: 'Recognizing technology\'s role in daily life builds digital literacy and helps you identify opportunities for innovation in your own field.',
    },
    mathModelling: {
      need: 'Each NLP application type has distinct mathematical formulations and evaluation metrics.',
      motivation: 'Understanding the mathematical basis of applications helps in selecting the right approach for a given problem.',
      challenge: 'Different applications require different architectures, making it hard to create one-size-fits-all solutions.',
      equations: [{
        latex: '\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}',
        meaning: 'Accuracy is the proportion of correct predictions among total predictions.',
        interpretation: 'Basic metric for classification tasks. However, accuracy can be misleading for imbalanced datasets.',
      }],
      variables: [
        { symbol: 'TP', name: 'True Positives', description: 'Correct positive predictions' },
        { symbol: 'FP', name: 'False Positives', description: 'Incorrect positive predictions' },
      ],
      charts: [{
        title: 'NLP Application Categories by Market Share (2025)',
        type: 'bar',
        data: [
          { name: 'Translation', Share: 25 },
          { name: 'Sentiment Analysis', Share: 20 },
          { name: 'Chatbots', Share: 18 },
          { name: 'Search', Share: 15 },
          { name: 'Content Moderation', Share: 12 },
          { name: 'Healthcare NLP', Share: 10 },
        ],
      }],
      advantages: 'NLP applications save time, reduce human error, enable scale, and provide insights from text data that would be impossible manually.',
      limitations: 'Applications are brittle, domain-specific, and often fail on edge cases or adversarial inputs.',
    },
    activities: [
      baseActivity('NLP App Showcase', 'Instructor demonstrates 5 NLP applications live.', [
        'Show Google Translate', 'Demo sentiment analysis on tweets', 'Run a spell-check demo', 'Show a chatbot conversation', 'Demonstrate voice-to-text',
      ], 'Students see NLP in action'),
      baseActivity('App Categorization', 'Students categorize 20 given applications by NLP task type.', [
        'List 20 apps on screen', 'Students categorize as: Classification, Translation, Generation, etc.', 'Discuss answers', 'Introduce less obvious categories',
      ], 'Students learn NLP application taxonomy', '5 min'),
      baseActivity('Group: Problem-Application Mapping', 'Groups map real-world problems to potential NLP solutions.', [
        'Each group gets 3 problem statements', 'Identify which NLP task could solve each', 'Propose a simple solution architecture', 'Present to class',
      ], 'Students practice problem-solution mapping', '8 min'),
      baseActivity('NLP App Critique', 'Students evaluate an NLP app and identify its limitations.', [
        'Choose an NLP app you use', 'List 3 things it does well', 'List 3 things it does poorly', 'Propose one improvement',
      ], 'Students develop critical evaluation skills', '5 min'),
    ],
    project: {
      scope: 'Create a market analysis report for one NLP application category.', objectives: ['Research NLP app category', 'Identify key players and technologies', 'Analyze market trends and opportunities'],
      timeline: [{ phase: 'Research', duration: '30 min', percent: 40 }, { phase: 'Analyze', duration: '20 min', percent: 30 }, { phase: 'Report', duration: '20 min', percent: 30 }],
      teamRoles: [{ role: 'Researcher', responsibility: 'Market data collection' }, { role: 'Analyst', responsibility: 'Trend analysis' }],
      deliverables: ['Market analysis report', 'Competitive landscape map', 'Opportunity identification'],
    },
    questions: [],
    virtualLab: {
      description: 'Explore the NLP application landscape interactively.', steps: ['Browse app categories', 'Select an application', 'See how it works', 'Try a demo', 'Compare with alternatives'],
      stepDetails: ['View categorized list', 'Click for details', 'Technical architecture shown', 'Interact with a simplified version', 'See pros and cons'],
      completionMessage: 'You have explored the landscape of NLP applications!',
    },
    insights: baseInsights(
      ['Ubiquitous in modern technology', 'High practical value', 'Diverse application areas'],
      ['Many apps are fragile', 'Domain transfer is difficult', 'Evaluation is challenging'],
      'NLP applications are expanding into healthcare, legal, education, and scientific research.',
      ['Healthcare diagnosis from clinical notes', 'Legal document review automation', 'Educational assessment tools', 'Financial market analysis from news'],
      'NLP application development is a high-growth career path with opportunities across all industries.'
    ),
  },

  '2.5': {
    topicId: '2.5',
    learningObjective: 'Perform text classification without programming using rule-based and pattern-matching approaches.',
    nextPrep: 'Think about what features of text might be important for classifying documents.',
    storytelling: {
      story: 'Imagine you are a librarian in a giant library where books come in continuously, but none of them have labels, titles, or categories. Your job is to sort them into sections: Fiction, Science, History, and Poetry. How would you do it without reading every book cover to cover? You might look for clues: words like "once upon a time" suggest fiction, "experiment" suggests science, "century" suggests history, "rhyme" suggests poetry. You are doing text classification — categorizing text based on observable features — without even opening the books. Congratulations, you just did "machine learning" without a computer!',
      questions: ['What clues would you use to sort a document into categories?', 'Can you think of a document that would be hard to classify?', 'How many categories is too many for a human to manage?'],
      connection: 'Text classification is the task of assigning categories to text based on its content. It is one of the most fundamental NLP tasks, used in spam detection, sentiment analysis, topic labeling, and more.',
      technicalIntro: 'Text classification uses features extracted from text (words, phrases, patterns) to predict categories. Classical approaches use rules or statistical methods. Modern approaches use neural networks and, increasingly, quantum circuits.',
      lifeSkills: 'Classification is a fundamental life skill — we constantly categorize information, people, and situations. Formalizing this process improves analytical thinking.',
    },
    mathModelling: {
      need: 'Mathematical models of classification enable computers to make predictions with measurable accuracy.',
      motivation: 'Manual classification does not scale. Mathematical models automate the process.',
      challenge: 'Text features are high-dimensional and sparse, making classification mathematically challenging.',
      equations: [
        {
          latex: '\\hat{y} = \\arg\\max_{c \\in C} P(c) \\prod_{i=1}^{n} P(w_i | c)',
          meaning: 'Naive Bayes classification: predict class c that maximizes the product of class prior and word likelihoods.',
          interpretation: 'Despite its "naive" assumption of word independence, Naive Bayes works surprisingly well for text classification.',
        },
      ],
      variables: [
        { symbol: 'C', name: 'Set of Classes', description: 'Possible categories for classification' },
        { symbol: 'P(c)', name: 'Class Prior', description: 'Probability of class c occurring' },
        { symbol: 'P(w_i | c)', name: 'Word Likelihood', description: 'Probability of word w_i given class c' },
      ],
      charts: [{
        title: 'Classification Algorithm Comparison',
        type: 'bar',
        data: [
          { name: 'Naive Bayes', Accuracy: 85, Speed: 95 },
          { name: 'Logistic Regression', Accuracy: 88, Speed: 90 },
          { name: 'SVM', Accuracy: 90, Speed: 80 },
          { name: 'Random Forest', Accuracy: 92, Speed: 75 },
          { name: 'Neural Network', Accuracy: 95, Speed: 60 },
        ],
      }],
      advantages: 'Text classification enables automated organization of massive text collections with reasonable accuracy.',
      limitations: 'Models require labeled training data, struggle with nuanced categories, and can encode biases present in training data.',
    },
    activities: [
      baseActivity('Manual Text Classification Demo', 'Instructor demonstrates how to classify text using simple rules.', [
        'Show 5 sample texts', 'Define 3 categories', 'Create simple keyword rules', 'Classify texts using rules', 'Discuss rule limitations',
      ], 'Students understand rule-based classification'),
      baseActivity('Collaborative Rule Building', 'Instructor and students build better classification rules together.', [
        'Show misclassified examples', 'Ask students to identify better rules', 'Test new rules', 'Iterate and improve',
      ], 'Students learn iterative improvement process', '5 min'),
      baseActivity('Group: Build a Classifier', 'Groups create a rule-based classifier for a specific task.', [
        'Assign each group a classification task', 'Groups brainstorm features/rules', 'Test on sample data', 'Competition: best F1 score wins',
      ], 'Students design and test classifiers', '10 min'),
      baseActivity('Personal Classification Challenge', 'Students classify 10 texts individually using their rules.', [
        'Get test set of 10 texts', 'Classify using rules', 'Calculate accuracy', 'Identify improvement areas',
      ], 'Students evaluate their own classifier performance', '5 min'),
    ],
    project: {
      scope: 'Build a rule-based text classifier for a real-world task (spam detection, sentiment analysis, or topic classification).',
      objectives: ['Define classification categories', 'Identify discriminative features', 'Build and test rule sets', 'Evaluate performance'],
      timeline: [
        { phase: 'Define problem', duration: '10 min', percent: 15 },
        { phase: 'Feature engineering', duration: '20 min', percent: 35 },
        { phase: 'Rule implementation', duration: '15 min', percent: 25 },
        { phase: 'Testing & refinement', duration: '15 min', percent: 25 },
      ],
      teamRoles: [
        { role: 'Feature Engineer', responsibility: 'Identify text features for classification' },
        { role: 'Rule Builder', responsibility: 'Create classification rules' },
        { role: 'Tester', responsibility: 'Evaluate and refine rules' },
      ],
      deliverables: ['Rule-based classifier', 'Feature list with weights', 'Test results with accuracy metrics', 'Error analysis report'],
    },
    questions: baseQuestions('2.5'),
    virtualLab: {
      description: 'Build and test your own text classifier without writing code.',
      steps: ['Choose classification task', 'Define categories', 'Add classification rules', 'Test on sample data', 'View performance metrics'],
      stepDetails: [
        'Select spam detection or sentiment analysis',
        'Name and describe each category',
        'Add keyword rules with weights',
        'Run classifier on test examples',
        'See accuracy, precision, recall, F1 score',
      ],
      completionMessage: 'You have built a working text classifier! This is the foundation for more advanced classification models, including quantum approaches.',
      dataFlow: `flowchart LR
        A[Input Text] --> B[Rule Engine]
        C[Keyword Rules] --> B
        B --> D[Score Calculation]
        D --> E[Category Assignment]
        E --> F[Classification Output]`,
    },
    insights: baseInsights(
      ['Foundation for understanding ML-based NLP', 'Teaches feature engineering concepts', 'Demonstrates the classification workflow'],
      ['Rule-based systems do not scale', 'Requires manual rule creation', 'Cannot handle nuanced cases well'],
      'Understanding classification fundamentals is essential before moving to quantum approaches that can potentially handle more complex classification boundaries.',
      ['Email spam filtering', 'Content moderation', 'Customer support routing', 'News categorization'],
      'Text classification skills are foundational for careers in data science, ML engineering, and AI research.'
    ),
  },
}
