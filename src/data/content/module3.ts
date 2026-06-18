import type { TopicContent } from './loader'

const baseActivity = (title: string, desc: string, steps: string[], outcomes: string, time?: string) => ({
  title, description: desc, steps, outcomes, timeRequired: time || '5 min',
})

const baseInsights = (advantages: string[], disadvantages: string[], futureScope: string, applications: string[], career: string): TopicContent['insights'] => ({
  advantages, disadvantages, futureScope, industrialApplications: applications, careerRelevance: career,
})

export const m3Content: Record<string, TopicContent> = {
  '3.1': {
    topicId: '3.1',
    learningObjective: 'Understand the fundamental text preprocessing techniques required to clean and prepare raw text for NLP pipelines.',
    nextPrep: 'Collect a sample paragraph of text and manually identify what preprocessing steps it might need.',
    dependencyGraph: `flowchart LR
      A[2.5 Text Classification Lab] --> B[3.1 Text Preprocessing]
      B --> C[3.2 Tokenization]
      C --> D[3.3 Stop Word Removal]
      D --> E[3.4 Stemming & Lemmatization]
      E --> F[3.5 Word Representations]`,
    storytelling: {
      story: `Picture a master chef preparing a five-course meal. Before any cooking begins, there is an entire ritual of washing, peeling, chopping, and marinating ingredients. A chef would never throw a muddy potato straight into a gourmet soup — that would be culinary chaos! Similarly, raw text straight from the internet is a mess: it has HTML tags, weird characters, inconsistent capitalization, emojis, typos, and formatting artifacts. If you fed this chaos directly into an NLP model, the model would throw a digital tantrum. Text preprocessing is the mise en place of NLP — cleaning, chopping, and preparing your textual ingredients so that your algorithms can cook up something delicious.`,
      questions: [
        'What kind of "dirt" might you find in raw text scraped from social media?',
        'Why might preprocessing decisions affect the final outcome of an NLP task?',
        'Can preprocessing ever remove important information? How would you balance cleaning with preservation?',
      ],
      connection: 'Text preprocessing is the essential first step in any NLP pipeline. Just as a chef prepares ingredients before cooking, we prepare text before analysis. The quality of preprocessing directly determines the quality of downstream results.',
      technicalIntro: 'Text preprocessing encompasses lowercasing, removing HTML tags/URLs, handling punctuation, expanding contractions, correcting typos, normalizing unicode characters, and removing non-alphanumeric symbols. Each decision impacts tokenization and downstream model performance.',
      lifeSkills: 'Preprocessing teaches attention to detail and the importance of foundational work. In any complex project, the quality of preparation determines the quality of the final product — whether cooking, coding, or building a house.',
    },
    mathModelling: {
      need: 'Quantifying text "cleanness" helps determine whether preprocessing is sufficient or if more steps are needed.',
      motivation: 'Noise in text data degrades model performance. Mathematical metrics help us measure and compare cleanliness across different preprocessing strategies.',
      challenge: 'Defining a universal cleanliness metric that works across languages, domains, and text sources.',
      equations: [
        {
          latex: '\\text{Noise Ratio} = \\frac{\\text{Non-Alphanumeric Tokens} + \\text{Stop Tokens}}{\\text{Total Tokens}}',
          meaning: 'The proportion of tokens that carry little semantic value or are formatting artifacts.',
          interpretation: 'A high noise ratio indicates raw text that needs aggressive cleaning. Ratios below 0.2 are typically acceptable for most NLP tasks.',
        },
        {
          latex: '\\text{Vocabulary Reduction} = 1 - \\frac{|V_{\\text{processed}}|}{|V_{\\text{raw}}|}',
          meaning: 'Fraction of unique vocabulary removed through preprocessing.',
          interpretation: 'Typical preprocessing reduces vocabulary by 15-30% by normalizing case, expanding contractions, and removing punctuation-bound variants.',
        },
      ],
      variables: [
        { symbol: 'V_raw', name: 'Raw Vocabulary', description: 'Set of unique tokens before preprocessing' },
        { symbol: 'V_processed', name: 'Processed Vocabulary', description: 'Set of unique tokens after preprocessing' },
      ],
      charts: [
        {
          title: 'Impact of Preprocessing Steps on Vocabulary Size',
          type: 'bar',
          data: [
            { name: 'Raw Text', 'Unique Tokens': 1200, 'Total Tokens': 5000 },
            { name: 'Lowercased', 'Unique Tokens': 980, 'Total Tokens': 5000 },
            { name: 'No Punctuation', 'Unique Tokens': 850, 'Total Tokens': 4800 },
            { name: 'No Stop Words', 'Unique Tokens': 720, 'Total Tokens': 3200 },
            { name: 'Stemmed', 'Unique Tokens': 540, 'Total Tokens': 3200 },
          ],
        },
      ],
      advantages: 'Preprocessing reduces noise, decreases vocabulary size (improving efficiency), and helps models generalize better by normalizing surface forms.',
      limitations: 'Aggressive preprocessing can remove meaning (e.g., sentiment-bearing punctuation like "!!!" or capitalization indicating proper nouns). Domain-specific preprocessing is often necessary.',
    },
    activities: [
      baseActivity(
        'Spot the Dirt',
        'Instructor shows raw text samples and asks students to identify all preprocessing issues.',
        [
          'Display a raw tweet with hashtags, mentions, URLs, and emojis',
          'Students call out each issue they spot',
          'Instructor catalogs issues on a whiteboard',
          'Discuss which issues might affect NLP tasks differently',
        ],
        'Students learn to identify text quality issues'
      ),
      baseActivity(
        'Manual Preprocessing Race',
        'Students race to manually clean a text sample using a predefined list of rules.',
        [
          'Give each student a printed messy text paragraph',
          'List 8 preprocessing rules to apply',
          'Time how long each student takes to clean the text',
          'Compare results — discuss why cleaned versions differ',
        ],
        'Students understand preprocessing steps and subjectivity',
        '7 min'
      ),
      baseActivity(
        'Group: Design a Preprocessing Pipeline',
        'Groups design a preprocessing pipeline for a specific domain (e.g., medical records, tweets, legal documents).',
        [
          'Assign each group a domain with sample text',
          'Groups identify domain-specific noise patterns',
          'Design a sequence of preprocessing steps',
          'Present and justify each step to the class',
        ],
        'Students learn domain-specific preprocessing needs',
        '8 min'
      ),
      baseActivity(
        'Before vs After Analysis',
        'Students compare model performance on raw vs preprocessed text using a simple classification task.',
        [
          'Show two versions of the same classification task',
          'One uses raw text, one uses preprocessed text',
          'Students predict which performs better and why',
          'Reveal results and discuss the impact of cleaning',
        ],
        'Students appreciate the quantitative impact of preprocessing',
        '5 min'
      ),
    ],
    project: {
      scope: 'Design a complete text preprocessing pipeline for a social media sentiment analysis system.',
      objectives: [
        'Identify all noise types in social media text',
        'Design preprocessing rules for each noise type',
        'Build a sequence of preprocessing steps',
        'Evaluate vocabulary reduction and sample outputs',
      ],
      timeline: [
        { phase: 'Analyze sample tweets', duration: '10 min', percent: 20 },
        { phase: 'Design preprocessing rules', duration: '15 min', percent: 30 },
        { phase: 'Order steps logically', duration: '10 min', percent: 20 },
        { phase: 'Test and refine', duration: '15 min', percent: 30 },
      ],
      teamRoles: [
        { role: 'Noise Analyst', responsibility: 'Identify all types of noise in samples' },
        { role: 'Rule Designer', responsibility: 'Create preprocessing rules for each noise type' },
        { role: 'Pipeline Architect', responsibility: 'Order steps and test the pipeline' },
      ],
      deliverables: [
        'Noise analysis report with examples',
        'Complete preprocessing rule set',
        'Pipeline diagram with ordered steps',
        'Before/after comparison of 5 sample texts',
      ],
    },
    questions: [
      {
        question: 'Why is lowercasing often the first step in text preprocessing?',
        answer: 'Lowercasing normalizes words so that "Apple", "apple", and "APPLE" are treated as the same token, reducing vocabulary size and improving generalization.',
        explanation: 'Without lowercasing, a model would learn separate representations for each casing variant, wasting capacity and data.',
        commonMistake: 'Lowercasing all text including proper nouns like "Apple" the company, which can lose information',
        tip: 'Consider whether case carries meaning in your specific task before lowercasing',
      },
      {
        question: 'What is the risk of removing punctuation during preprocessing?',
        answer: 'Punctuation can carry sentiment (e.g., "Great!!!" vs "Great."), structural information, and meaning (e.g., "e.g." vs "eg"). Removing it blindly can degrade performance on some tasks.',
        explanation: 'In sentiment analysis, exclamation marks amplify emotion. In text classification, punctuation patterns can be predictive features.',
        tip: 'Always evaluate whether punctuation carries information for your specific task before removal',
      },
      {
        question: 'How does preprocessing affect model performance?',
        answer: 'Good preprocessing reduces noise, decreases vocabulary size, and helps models focus on meaningful patterns, typically improving accuracy by 2-10% depending on the task and data quality.',
        explanation: 'The improvement varies by domain: social media text benefits greatly, while formal text like news articles needs minimal preprocessing.',
        tip: 'Build your preprocessing pipeline iteratively — add steps one at a time and evaluate impact',
      },
    ],
    virtualLab: {
      description: 'Explore the effect of different preprocessing techniques on sample text data through an interactive pipeline builder.',
      steps: [
        'Load a sample text (tweet, news article, or email)',
        'Toggle preprocessing steps on/off',
        'See live vocabulary size and token count updates',
        'Compare original and processed text side by side',
        'Export your optimal preprocessing pipeline',
      ],
      stepDetails: [
        'Choose from 3 sample text types with different noise profiles',
        'Each step (lowercase, remove punctuation, expand contractions, etc.) is a toggle',
        'Real-time stats show vocabulary reduction, token count, and noise ratio',
        'Highlighted diff view shows exactly what changed',
        'Pipeline configuration is saved as a reusable preset',
      ],
      completionMessage: 'You have successfully built and tested a text preprocessing pipeline! You can see how each cleaning step transforms the text and reduces noise.',
      dataFlow: `flowchart LR
        A[Raw Text] --> B[Lowercasing]
        B --> C[Remove HTML/URLs]
        C --> D[Remove Punctuation]
        D --> E[Expand Contractions]
        E --> F[Spell Correction]
        F --> G[Clean Text Output]`,
    },
    insights: baseInsights(
      ['Essential first step that improves all downstream tasks', 'Reduces vocabulary size by 20-40%', 'Helps models generalize better'],
      ['Can remove meaning if not done carefully', 'Domain-specific preprocessing adds complexity', 'No one-size-fits-all pipeline exists'],
      'Automated preprocessing that adapts to domain, language, and task requirements is an active research area.',
      ['Search engines normalize queries before matching', 'Chatbots clean user input before intent classification', 'Healthcare NLP normalizes clinical notes', 'Social media monitoring pipelines handle noisy text'],
      'Text preprocessing skills are foundational for all NLP roles. Every data scientist working with text must master these techniques.'
    ),
  },

  '3.2': {
    topicId: '3.2',
    learningObjective: 'Understand tokenization strategies and how text is split into meaningful units for NLP processing.',
    nextPrep: 'Think about how you would define a "word" in English and why that definition might fail in other languages.',
    dependencyGraph: `flowchart LR
      A[3.1 Preprocessing] --> B[3.2 Tokenization]
      B --> C[3.3 Stop Word Removal]
      B --> D[3.4 Stemming & Lemmatization]`,
    storytelling: {
      story: `Imagine you are a tour guide in a museum, and a group of visitors walks in. You cannot show them the entire museum at once — you have to guide them through it room by room, exhibit by exhibit, piece by piece. Tokenization is the NLP equivalent of breaking the museum into individual rooms. Instead of processing a whole paragraph as one giant blob, a tokenizer says, "Let us take this one word at a time." But here is the catch: what counts as a "room"? Is "don't" one room or two? Is "New York" one room or two? Is "123-456-7890" a single token or many? Suddenly, splitting text seems as tricky as dividing a museum where some rooms are connected by secret passages!`,
      questions: [
        'Should "San Francisco" be one token or two? Why?',
        'How would you tokenize a text with no spaces, like Chinese or Japanese?',
        'What problems might arise when tokenizing social media hashtags like "#ILoveQNLP"?',
      ],
      connection: 'Tokenization is the gateway to all NLP tasks. Every subsequent operation — parsing, tagging, classification — operates on tokens. Getting tokenization right is critical because errors propagate through the entire pipeline.',
      technicalIntro: 'Tokenization is the process of splitting text into meaningful units called tokens. Word tokenization splits on whitespace and punctuation, but handles edge cases like contractions, hyphenated words, URLs, and emoticons. Subword tokenization (BPE, WordPiece) handles rare words by breaking them into frequent subword units.',
      lifeSkills: 'Tokenization teaches us that how we break down a problem into pieces determines how well we can solve it. The boundaries we choose shape our understanding — a skill that applies to project management, analysis, and problem-solving in any field.',
    },
    mathModelling: {
      need: 'Quantifying tokenization quality helps select the right tokenization strategy for a given task.',
      motivation: 'Different tokenization schemes produce different vocabulary sizes and handle rare words differently, affecting model size and coverage.',
      challenge: 'Designing tokenization that works across languages with different writing systems (space-separated, agglutinative, logographic).',
      equations: [
        {
          latex: '\\text{Vocabulary Coverage} = \\frac{|V \\cap T|}{|T|}',
          meaning: 'Fraction of tokens in a test set that are present in the vocabulary learned during training.',
          interpretation: 'High coverage (>95%) indicates the tokenizer handles most words. Low coverage means many words will be "unknown" tokens, degrading performance.',
        },
        {
          latex: '\\text{Avg Tokens per Sentence} = \\frac{\\text{Total Tokens}}{\\text{Total Sentences}}',
          meaning: 'Average number of tokens produced per sentence by the tokenizer.',
          interpretation: 'Subword tokenizers produce more tokens per sentence than word tokenizers but handle rare words better. Typical ratios: word=1.0, BPE=1.2-1.5x.',
        },
      ],
      variables: [
        { symbol: 'V', name: 'Vocabulary', description: 'Set of tokens known to the model' },
        { symbol: 'T', name: 'Test Tokens', description: 'Set of tokens in the test corpus' },
      ],
      interactive: {
        equation: '\\text{Coverage} = \\frac{|V \\cap T|}{|T|}',
        description: 'See how vocabulary size affects test set coverage:',
        variables: [
          { symbol: 'V', name: 'Vocabulary', description: 'Number of tokens in vocabulary' },
          { symbol: 'T', name: 'Test Tokens', description: 'Number of unique tokens in test set' },
        ],
        sliders: [
          { name: 'V', label: 'Vocabulary Size', min: 1000, max: 100000, step: 1000, default: 30000 },
          { name: 'T', label: 'Test Unique Tokens', min: 1000, max: 50000, step: 1000, default: 15000 },
        ],
      },
      charts: [
        {
          title: 'Tokenization Strategies: Vocabulary Size vs Coverage',
          type: 'line',
          data: [
            { name: '5K', 'Word Tokenizer': 45, 'BPE (10K merges)': 72, 'WordPiece': 75 },
            { name: '10K', 'Word Tokenizer': 62, 'BPE (10K merges)': 85, 'WordPiece': 87 },
            { name: '25K', 'Word Tokenizer': 78, 'BPE (10K merges)': 93, 'WordPiece': 94 },
            { name: '50K', 'Word Tokenizer': 88, 'BPE (10K merges)': 97, 'WordPiece': 97 },
            { name: '100K', 'Word Tokenizer': 94, 'BPE (10K merges)': 99, 'WordPiece': 99 },
          ],
        },
      ],
      advantages: 'Good tokenization balances vocabulary size with coverage, handles rare words gracefully, and works consistently across different text types.',
      limitations: 'No single tokenization scheme works best for all languages and tasks. Tokenization decisions introduce bias, especially for morphologically rich languages.',
    },
    activities: [
      baseActivity(
        'Tokenization Edge Cases Challenge',
        'Instructor presents tricky sentences and students decide how to tokenize them.',
        [
          'Show: "I said, \'Don\'t do that!\'"',
          'Show: "Email me at hello@world.com ASAP"',
          'Show: "She won the 1st prize — \u0027twas amazing!"',
          'Discuss each edge case and compare with how NLP tokenizers handle them',
        ],
        'Students understand tokenization complexity'
      ),
      baseActivity(
        'Language Comparison Exercise',
        'Compare tokenization challenges across different languages using sample texts.',
        [
          'Show English, Chinese, German (compound words), and Arabic text samples',
          'Discuss how whitespace-based tokenization fails for each',
          'Introduce language-specific tokenization approaches',
          'Students propose tokenization rules for each language',
        ],
        'Students learn cross-lingual tokenization challenges',
        '7 min'
      ),
      baseActivity(
        'Group: Build a Tokenizer Rulebook',
        'Groups create a comprehensive tokenization rulebook for a specific text domain.',
        [
          'Assign domains: legal documents, tweets, medical records, code comments',
          'Groups list 10+ edge cases their tokenizer must handle',
          'Write rules for each edge case',
          'Present and compare rulebooks across groups',
        ],
        'Students design domain-specific tokenization strategies',
        '10 min'
      ),
      baseActivity(
        'Subword Tokenization Demo',
        'Instructor demonstrates how BPE builds a vocabulary from subword units.',
        [
          'Start with 5 example words: "low", "lower", "lowest", "lowly", "lowland"',
          'Show how BPE merges frequent character pairs step by step',
          'Track vocabulary growth through merge operations',
          'Highlight how this handles rare words at inference time',
        ],
        'Students understand subword tokenization intuitively',
        '5 min'
      ),
    ],
    project: {
      scope: 'Design a tokenization strategy for a multilingual news aggregation system covering English, Chinese, and Arabic.',
      objectives: [
        'Analyze tokenization needs for 3 different writing systems',
        'Design language-specific tokenization rules',
        'Propose a unified tokenization framework',
        'Evaluate coverage and average tokens per sentence',
      ],
      timeline: [
        { phase: 'Analyze language samples', duration: '10 min', percent: 20 },
        { phase: 'Design language-specific rules', duration: '20 min', percent: 35 },
        { phase: 'Design unified framework', duration: '15 min', percent: 25 },
        { phase: 'Evaluate and document', duration: '10 min', percent: 20 },
      ],
      teamRoles: [
        { role: 'Language Analyst', responsibility: 'Analyze tokenization needs for assigned language' },
        { role: 'Rule Designer', responsibility: 'Create tokenization rules' },
        { role: 'Integration Lead', responsibility: 'Design the unified framework' },
      ],
      deliverables: [
        'Language analysis report for all 3 languages',
        'Tokenization rule set for each language',
        'Unified framework architecture diagram',
        'Coverage analysis report with metrics',
      ],
    },
    questions: [
      {
        question: 'Why is whitespace tokenization insufficient for real-world NLP?',
        answer: 'Whitespace tokenization fails on contractions ("don\'t"), hyphenated words ("state-of-the-art"), URLs, email addresses, punctuation attachment, and languages like Chinese that do not use spaces.',
        explanation: 'Real-world text is full of these edge cases, and naive tokenization either splits meaningful units or combines separate ones, confusing downstream models.',
        commonMistake: 'Assuming whitespace + punctuation splitting handles all cases',
        tip: 'Always test your tokenizer on a diverse sample of your actual data before using it in production',
      },
      {
        question: 'How does subword tokenization (like BPE) handle rare or unknown words?',
        answer: 'BPE breaks rare words into smaller frequent subword units (e.g., "unbelievable" \u2192 "un" + "believe" + "able"), so no word is truly unknown as long as its subword pieces are in the vocabulary.',
        explanation: 'This provides nearly 100% vocabulary coverage while keeping vocabulary size manageable, which is why BPE and WordPiece are used in modern LLMs.',
        tip: 'Subword tokenization gives you the best of both worlds: manageable vocabulary size with near-complete coverage',
      },
    ],
    virtualLab: {
      description: 'Experiment with different tokenization strategies on your own text and compare how each splits the input.',
      steps: [
        'Enter or paste sample text',
        'Select tokenization method (whitespace, regex, BPE, WordPiece)',
        'See highlighted token boundaries on the text',
        'Compare token counts and vocabulary for each method',
        'Export tokenized output for your chosen strategy',
      ],
      stepDetails: [
        'Type or paste any text, or load a sample',
        'Each method shows tokens with different colored highlights',
        'Side-by-side comparison of 2-3 tokenization methods simultaneously',
        'Stats panel shows vocabulary size, OOV rate, tokens per sentence',
        'Download tokenized output as JSON or CSV',
      ],
      completionMessage: 'You have explored multiple tokenization strategies and can now choose the right one for different NLP tasks!',
      dataFlow: `flowchart LR
        A[Raw Text] --> B{Tokenizer}
        B --> C[Word Tokens]
        B --> D[Subword Tokens]
        B --> E[Character Tokens]
        C --> F[Downstream Tasks]
        D --> F
        E --> F`,
    },
    insights: baseInsights(
      ['Tokenization is the gateway to all NLP tasks', 'Subword methods provide nearly 100% coverage', 'Good tokenization reduces downstream errors'],
      ['Tokenization decisions introduce language bias', 'Different tasks benefit from different tokenization', 'Edge cases are endless and domain-specific'],
      'Multilingual and cross-lingual tokenization that works uniformly across all writing systems is an active research frontier.',
      ['Search engines tokenize queries for matching', 'Machine translation systems use BPE for multilingual models', 'Code completion tools tokenize programming languages', 'Speech recognition systems tokenize phonemes'],
      'Expertise in tokenization is essential for NLP engineers. Understanding tokenization deeply gives you an edge in debugging and improving model performance.'
    ),
  },

  '3.3': {
    topicId: '3.3',
    learningObjective: 'Understand the concept of stop words and learn when and why to remove them from text data.',
    nextPrep: 'Brainstorm a list of 20 common English words that carry little meaning and consider what would be left without them.',
    dependencyGraph: `flowchart LR
      A[3.2 Tokenization] --> B[3.3 Stop Word Removal]
      B --> C[3.4 Stemming & Lemmatization]
      B --> D[3.6 Bag of Words]`,
    storytelling: {
      story: `Imagine you are a detective analyzing a suspect's diary. Pages and pages of text, but most of it reads like: "The the the and a to of in it was that he she they..." Frustrating, right? That is what raw text looks like to an NLP model — filled with tiny, meaningless words that are the linguistic equivalent of packing peanuts. They take up space, add weight, but contribute nothing to understanding the content. Stop words like "the," "a," "an," "in," "on," "at," "and," "or," "but," "is," "was," "were" are the grammatical scaffolding of language — necessary for building sentences but useless when you want to know what a text is actually about. Removing them is like stripping away the packaging to reveal the actual product inside.`,
      questions: [
        'Could removing stop words ever hurt performance for certain NLP tasks?',
        'Is "not" a stop word? Why might its removal be problematic?',
        'How would you determine the stop word list for a new domain like medical research?',
      ],
      connection: 'Stop word removal is a form of feature selection — it reduces dimensionality by removing tokens that appear frequently but carry little discriminative power. This is a bridge between tokenization and the mathematical representation of text.',
      technicalIntro: 'Stop words are high-frequency words that carry little semantic meaning and are often removed before analysis. Common stop word lists contain 100-800 words. The choice of stop word list is task-dependent: "not" is a stop word in general lists but crucial for sentiment analysis.',
      lifeSkills: 'Stop word removal teaches the principle of signal vs noise — a universal concept. In any data analysis task, learning to distinguish essential information from background noise is critical for effective decision-making.',
    },
    mathModelling: {
      need: 'Quantifying the impact of stop word removal helps determine optimal stop word lists for specific tasks.',
      motivation: 'Removing stop words can reduce feature space by 40-60% while maintaining or even improving model performance.',
      challenge: 'Determining which words are truly "stop words" varies by domain, language, and task. A word that is noise for one task is signal for another.',
      equations: [
        {
          latex: '\\text{Document Frequency}(w) = \\frac{\\text{Number of documents containing } w}{\\text{Total documents}}',
          meaning: 'The proportion of documents in a corpus that contain a given word.',
          interpretation: 'Words with document frequency close to 1.0 (like "the" or "and") appear in nearly every document and typically carry little discriminative power — prime candidates for stop words.',
        },
        {
          latex: '\\text{Space Reduction} = 1 - \\frac{|V_{\\text{after}}|}{|V_{\\text{before}}|}',
          meaning: 'Fraction of vocabulary removed by eliminating stop words.',
          interpretation: 'A typical stop word list of 179 words removes 30-50% of tokens and 10-20% of unique vocabulary, dramatically reducing the feature space.',
        },
      ],
      variables: [
        { symbol: 'DF(w)', name: 'Document Frequency', description: 'Fraction of documents containing word w' },
        { symbol: 'V_after', name: 'Vocabulary After', description: 'Unique tokens after stop word removal' },
      ],
      charts: [
        {
          title: 'Impact of Stop Word Removal on Document Length',
          type: 'bar',
          data: [
            { name: 'News Article', 'Before': 450, 'After': 210 },
            { name: 'Email', 'Before': 120, 'After': 55 },
            { name: 'Tweet', 'Before': 25, 'After': 12 },
            { name: 'Academic Paper', 'Before': 5200, 'After': 2400 },
            { name: 'Blog Post', 'Before': 800, 'After': 380 },
          ],
        },
      ],
      advantages: 'Stop word removal reduces feature dimensionality by 40-60%, speeds up training, and often improves model accuracy by removing noise.',
      limitations: 'Stop words can carry meaning ("not" for negation, "should" for modality). Aggressive removal can hurt sentiment analysis, question answering, and tasks requiring syntactic understanding.',
    },
    activities: [
      baseActivity(
        'Guess the Stop Words',
        'Instructor shows a sentence with stop words removed and students try to reconstruct it.',
        [
          'Show: "[The] [quick] [brown] [fox] [jumps] [over] [the] [lazy] [dog]" without stop words',
          'Students identify which words were removed',
          'Discuss whether the sentence is still understandable',
          'Debate: which removed words carried meaning?',
        ],
        'Students understand the role of stop words in sentence structure'
      ),
      baseActivity(
        'Domain-Specific Stop Words',
        'Working in groups, students create stop word lists for different domains.',
        [
          'Assign domains: recipe reviews, legal contracts, sports commentary, medical abstracts',
          'Each group lists 20 candidate stop words for their domain',
          'Groups swap lists and critique each other\'s choices',
          'Discuss why stop words differ by domain',
        ],
        'Students learn that stop words are task-dependent',
        '8 min'
      ),
      baseActivity(
        'The "Not" Problem',
        'Instructor demonstrates why removing "not" is dangerous for sentiment analysis.',
        [
          'Show sentences: "This movie is good" vs "This movie is not good"',
          'Remove stop words including "not" — both become identical',
          'Discuss how negation is lost',
          'Introduce "negation handling" as an advanced preprocessing step',
        ],
        'Students understand the trade-off of stop word removal',
        '5 min'
      ),
      baseActivity(
        'Frequency Analysis Exercise',
        'Students compute word frequencies in a short text and identify stop word candidates.',
        [
          'Give students a printed 500-word article',
          'Tally word frequencies manually or with a provided tool',
          'Identify the 20 most frequent words',
          'Decide which should be removed as stop words and defend choices',
        ],
        'Students apply frequency-based stop word identification',
        '10 min'
      ),
    ],
    project: {
      scope: 'Create a domain-specific stop word list for analyzing customer support tickets and evaluate its impact on a classification task.',
      objectives: [
        'Analyze a sample of customer support tickets',
        'Identify domain-specific high-frequency low-information words',
        'Create a customized stop word list',
        'Evaluate the impact on vocabulary size and model performance',
      ],
      timeline: [
        { phase: 'Analyze ticket samples', duration: '10 min', percent: 20 },
        { phase: 'Generate candidate stop words', duration: '15 min', percent: 30 },
        { phase: 'Test and refine list', duration: '15 min', percent: 30 },
        { phase: 'Evaluate impact', duration: '10 min', percent: 20 },
      ],
      teamRoles: [
        { role: 'Data Analyst', responsibility: 'Analyze word frequencies in tickets' },
        { role: 'Domain Expert', responsibility: 'Identify domain-specific noise words' },
        { role: 'Evaluator', responsibility: 'Test stop word list on classification task' },
      ],
      deliverables: [
        'Domain-specific stop word list with justifications',
        'Frequency analysis report',
        'Vocabulary reduction statistics',
        'Impact assessment on classification accuracy',
      ],
    },
    questions: [
      {
        question: 'Why is "not" a problematic word for stop word lists?',
        answer: '"Not" expresses negation, which completely reverses meaning. Removing it makes "good" and "not good" identical, destroying the ability to distinguish positive from negative sentiment.',
        explanation: 'In sentiment analysis, negation words are among the most informative features. Standard stop word lists often exclude negation words for this reason.',
        commonMistake: 'Blindly using a generic stop word list without considering the task',
        tip: 'Always review your stop word list for words that might carry meaning in your specific task',
      },
      {
        question: 'How does stop word removal affect text classification performance?',
        answer: 'It typically improves performance by reducing noise and feature dimensionality, but can hurt tasks where syntactic structure matters, such as question answering or paraphrase detection.',
        explanation: 'The effect depends on the task: high-frequency noise words dilute signal in bag-of-words models, but syntactic tasks need stop words for grammatical structure.',
        tip: 'Test your model with and without stop word removal to determine the optimal approach for your task',
      },
    ],
    virtualLab: {
      description: 'Interactive tool to explore the impact of different stop word lists on text representation and downstream task performance.',
      steps: [
        'Load a sample dataset (reviews, news, or tweets)',
        'Select or customize a stop word list',
        'Visualize vocabulary reduction',
        'Run a simple classifier with and without stop words',
        'Compare accuracy, precision, and recall metrics',
      ],
      stepDetails: [
        'Choose from 3 datasets with different characteristics',
        'Toggle individual stop words on/off or use preset lists',
        'Word cloud visualization shows before/after most frequent words',
        'Built-in Naive Bayes classifier for quick evaluation',
        'Detailed metrics table with performance comparison',
      ],
      completionMessage: 'You have mastered stop word removal! You understand how to choose task-appropriate stop word lists and evaluate their impact.',
      dataFlow: `flowchart LR
        A[Tokenized Text] --> B[Stop Word Filter]
        C[Stop Word List] --> B
        B --> D[Filtered Tokens]
        D --> E[Vocabulary Stats]
        D --> F[Downstream Model]`,
    },
    insights: baseInsights(
      ['Reduces feature space by 40-60%', 'Improves model efficiency and often accuracy', 'Simple but effective noise reduction technique'],
      ['Can remove meaningful words if not careful', 'Task-dependent — no universal stop word list', 'Negation handling requires special consideration'],
      'Context-aware stop word removal that adapts to domain, task, and even individual document characteristics is an emerging area of research.',
      ['Search engines filter stop words from queries', 'Spam filters remove common filler words', 'Topic modeling pipelines exclude stop words', 'Text summarization systems manage stop words carefully'],
      'Understanding feature selection through stop word removal is a fundamental data science skill applicable across NLP and broader ML tasks.'
    ),
  },

  '3.4': {
    topicId: '3.4',
    learningObjective: 'Differentiate between stemming and lemmatization and understand when to apply each technique.',
    nextPrep: 'Think about how many different forms a single word can take (e.g., "run", "runs", "running", "ran") and whether they represent the same concept.',
    dependencyGraph: `flowchart LR
      A[3.3 Stop Word Removal] --> B[3.4 Stemming & Lemmatization]
      B --> C[3.5 Word Representations]
      B --> D[3.6 Bag of Words]`,
    storytelling: {
      story: `Imagine you are in a foreign country and you only know three phrases: "where bathroom," "how much cost," and "I want pizza." Your grammar is atrocious — no verb conjugations, no prepositions, no articles — but you are understood! Congratulations, you just invented real-life stemming: reducing words to their bare essence. Stemming is like taking "running," "runs," and "ran" and shouting "RUN!" — you get the point across with zero elegance. Lemmatization, on the other hand, is like having Google Translate in your pocket — it knows that "better" relates to "good" and that "went" is a tortured version of "go." It is the difference between a grunting caveman and a polished diplomat. Both work, but one is much more sophisticated!`,
      questions: [
        'If a search for "running shoes" should match "run shoes", is stemming or lemmatization needed?',
        'Why might lemmatization be harder for languages with complex morphology like Arabic or Finnish?',
        'Can you think of a case where stemming would give a wrong result? (e.g., "university" stemmed to "univers")',
      ],
      connection: 'Stemming and lemmatization normalize word forms to reduce vocabulary size and group related words. This connects tokenization to word representation by ensuring different inflections of the same word map to a single representation.',
      technicalIntro: 'Stemming uses crude heuristic rules to chop off affixes (Porter, Lancaster, Snowball stemmers). Lemmatization uses vocabulary and morphological analysis to return the dictionary form (lemma). Lemmatization is more accurate but slower and requires part-of-speech information.',
      lifeSkills: 'Stemming vs lemmatization teaches the fundamental computer science trade-off: speed vs accuracy. Understanding when to use a fast approximate method vs a slower precise one is a crucial engineering and life skill.',
    },
    mathModelling: {
      need: 'Measuring the quality of normalization helps select between stemming and lemmatization for a given application.',
      motivation: 'Different applications have different tolerance for errors. Search can tolerate stemming errors; machine translation needs precise lemmatization.',
      challenge: 'Stemming over-stems (different words become same stem) and under-stems (related words remain different). Quantifying these errors helps choose the right approach.',
      equations: [
        {
          latex: '\\text{Over-stemming Error} = \\frac{|\\text{False Merges}|}{|\\text{Total Pairs}|}',
          meaning: 'Rate at which unrelated words are incorrectly merged to the same stem.',
          interpretation: 'High over-stemming means the stemmer is too aggressive, losing distinctions. Example: "university" and "universal" both stem to "univers" under Porter.',
        },
        {
          latex: '\\text{Under-stemming Error} = \\frac{|\\text{False Splits}|}{|\\text{Total Pairs}|}',
          meaning: 'Rate at which related words are not merged to the same stem.',
          interpretation: 'High under-stemming means the stemmer missed connections. Example: "ran" and "running" not mapped to same stem by a weak stemmer.',
        },
      ],
      variables: [
        { symbol: 'False Merges', name: 'False Merges', description: 'Unrelated word pairs incorrectly stemmed to same root' },
        { symbol: 'False Splits', name: 'False Splits', description: 'Related word pairs not merged to same root' },
      ],
      interactive: {
        equation: '\\text{Under-stemming} = \\frac{|\\text{Related Pairs Not Merged}|}{|\\text{Total Related Pairs}|}',
        description: 'Adjust stemming aggressiveness and see the trade-off:',
        variables: [
          { symbol: 'A', name: 'Stemming Aggressiveness', description: 'How aggressively the stemmer removes affixes' },
        ],
        sliders: [
          { name: 'A', label: 'Stemmer Aggressiveness', min: 1, max: 10, step: 1, default: 5 },
        ],
      },
      charts: [
        {
          title: 'Stemming vs Lemmatization: Error Trade-off',
          type: 'line',
          data: [
            { name: 'Porter Stemmer', 'Over-stemming': 8, 'Under-stemming': 12, Accuracy: 85 },
            { name: 'Lancaster Stemmer', 'Over-stemming': 15, 'Under-stemming': 5, Accuracy: 82 },
            { name: 'Snowball Stemmer', 'Over-stemming': 6, 'Under-stemming': 10, Accuracy: 88 },
            { name: 'WordNet Lemmatizer', 'Over-stemming': 2, 'Under-stemming': 4, Accuracy: 95 },
            { name: 'Morphological Analyzer', 'Over-stemming': 1, 'Under-stemming': 2, Accuracy: 97 },
          ],
        },
      ],
      advantages: 'Normalization reduces vocabulary by 30-50%, improves generalization, and enables matching across word forms. Lemmatization provides more linguistically accurate normalization.',
      limitations: 'Stemming produces non-words that can confuse downstream models. Lemmatization requires POS tagging (computational overhead) and a comprehensive dictionary, failing on unknown words.',
    },
    activities: [
      baseActivity(
        'Stemming Race',
        'Instructor demonstrates Porter, Lancaster, and Snowball stemmers on challenging words and students compare outputs.',
        [
          'List 10 words: running, better, cities, ponies, caresses, agreed, operator, controllable, replacement, wonderfully',
          'Apply each stemmer and show results in a table',
          'Students identify which stemmer works best for each word type',
          'Discuss why different stemmers produce different results',
        ],
        'Students see stemmer behavior differences firsthand'
      ),
      baseActivity(
        'Lemmatization Requires POS Tags',
        'Instructor shows how the same word can have different lemmas depending on part of speech.',
        [
          'Show: "I can fish" vs "I ate fish" — "fish" is verb then noun',
          'Show: "He was meeting her" vs "The meeting was long"',
          'Demonstrate lemmatizer without POS tags fails',
          'Discuss why context matters for lemmatization',
        ],
        'Students understand lemmatization requires POS tagging',
        '5 min'
      ),
      baseActivity(
        'Group: Which One to Use?',
        'Groups receive different NLP tasks and must decide: stem or lemmatize?',
        [
          'Assign tasks: search engine, sentiment analysis, translation, text summarization, plagiarism detection',
          'Groups decide stem vs lemmatize (or both/neither)',
          'Justify decisions with reasoning about speed vs accuracy',
          'Class debate on controversial cases',
        ],
        'Students practice task-appropriate normalization selection',
        '8 min'
      ),
      baseActivity(
        'Error Analysis Challenge',
        'Students analyze stemmer outputs and categorize errors as over-stemming or under-stemming.',
        [
          'Give students 20 word pairs with stemmer output',
          'Categorize each pair as correct merge, over-stemming, or under-stemming',
          'Calculate error rates for the stemmer',
          'Propose rules to fix the most common errors',
        ],
        'Students develop critical evaluation skills',
        '7 min'
      ),
    ],
    project: {
      scope: 'Design a normalization strategy for a multilingual search engine that handles English, German (compound words), and Spanish (verb conjugation), choosing between stemming and lemmatization for each language.',
      objectives: [
        'Analyze morphological complexity of 3 languages',
        'Select appropriate normalization for each language',
        'Design a hybrid approach if beneficial',
        'Evaluate precision and recall improvements in search',
      ],
      timeline: [
        { phase: 'Language morphology analysis', duration: '15 min', percent: 25 },
        { phase: 'Normalization selection', duration: '15 min', percent: 25 },
        { phase: 'Hybrid approach design', duration: '15 min', percent: 25 },
        { phase: 'Evaluation and documentation', duration: '15 min', percent: 25 },
      ],
      teamRoles: [
        { role: 'Morphology Analyst', responsibility: 'Analyze language-specific word formation patterns' },
        { role: 'Normalization Specialist', responsibility: 'Select and justify stemmer/lemmatizer choices' },
        { role: 'Evaluation Lead', responsibility: 'Design and run evaluation metrics' },
      ],
      deliverables: [
        'Language morphology analysis for all 3 languages',
        'Normalization strategy document with justifications',
        'Hybrid approach architecture (if applicable)',
        'Precision/recall evaluation report',
      ],
    },
    questions: [
      {
        question: 'What is the fundamental difference between stemming and lemmatization?',
        answer: 'Stemming uses heuristic rules to chop off affixes without understanding language, often producing non-words. Lemmatization uses vocabulary and morphological analysis to return the actual dictionary form (lemma) of a word.',
        explanation: 'Example: stemming "better" \u2192 "better" (unchanged under Porter), while lemmatization "better" \u2192 "good" (correct root form). Stemming is faster but less accurate.',
        commonMistake: 'Using stemming when the application needs real words (e.g., text generation, chatbot responses)',
        tip: 'Use stemming for search/retrieval where speed matters. Use lemmatization for tasks that need linguistically valid output.',
      },
      {
        question: 'Why does lemmatization require part-of-speech (POS) information?',
        answer: 'The same word can have different lemmas depending on its part of speech. For example, "meeting" as a noun has lemma "meeting", but as a verb has lemma "meet". Without POS, the lemmatizer cannot disambiguate.',
        explanation: 'This makes lemmatization a two-step process: first tag POS, then apply POS-specific lemmatization rules.',
        tip: 'Remember: POS tagging + lemmatization = accurate normalization, but at higher computational cost',
      },
    ],
    virtualLab: {
      description: 'Compare stemming and lemmatization side-by-side on any text, with detailed analysis of each method\'s strengths and weaknesses.',
      steps: [
        'Enter sample text or load a preset',
        'Select a stemmer (Porter, Lancaster, Snowball)',
        'Select a lemmatizer with POS tagger',
        'Compare outputs side by side',
        'Review error analysis and statistics',
      ],
      stepDetails: [
        'Type or paste text, or use sample paragraphs',
        'Each stemmer highlights changes in yellow',
        'Lemmatizer shows POS tags and base forms',
        'Split view with original, stemmed, and lemmatized versions aligned',
        'Statistics panel shows over/under-stemming rates, vocabulary reduction, processing time',
      ],
      completionMessage: 'You have mastered stemming and lemmatization! You understand the speed-accuracy trade-off and can choose the right technique for any NLP task.',
      dataFlow: `flowchart LR
        A[Tokenized Text] --> B{Stemmer or Lemmatizer?}
        B --> C[Stemmer]
        B --> D[Lemmatizer]
        C --> E[Crucial Non-Word Stems]
        D --> F[POS Tagger]
        F --> G[Dictionary Lookup]
        G --> H[Valid Lemmas]
        E --> I[Normalized Output]
        H --> I`,
    },
    insights: baseInsights(
      ['Stemming is fast and simple for search/retrieval', 'Lemmatization provides linguistically accurate normalization', 'Both reduce vocabulary size significantly'],
      ['Stemming produces non-words and over-stems', 'Lemmatization is slower and requires dictionaries', 'POS tagging errors propagate to lemmatization'],
      'Contextual lemmatization that uses surrounding words to disambiguate word senses is an active research area with applications in low-resource languages.',
      ['Search engines use stemming for query expansion', 'Chatbots use lemmatization for intent matching', 'Translation systems rely on lemmatization', 'Text analytics pipelines often combine both'],
      'Normalization expertise is valuable for search engineers, computational linguists, and NLP pipeline designers across industries.'
    ),
  },

  '3.5': {
    topicId: '3.5',
    learningObjective: 'Understand different word representation techniques from one-hot encoding to distributed representations.',
    nextPrep: 'Consider how you would represent the meaning of a word to a computer that has never seen one before.',
    dependencyGraph: `flowchart LR
      A[3.4 Stemming & Lemmatization] --> B[3.5 Word Representations]
      B --> C[3.6 Bag of Words]
      B --> D[3.7 TF-IDF]
      B --> E[3.8 Word Embeddings]`,
    storytelling: {
      story: `Imagine you are an alien who has just arrived on Earth and found a dictionary. Unfortunately, the dictionary defines words using other words you do not know. "What is a dog?" the dictionary says: "a domesticated carnivorous mammal." You do not know "domesticated," "carnivorous," or "mammal." This is exactly the problem of representing word meaning to computers. Early NLP tried "one-hot encoding" — giving each word a unique ID number, like assigning everyone in a city a random ID. But "dog"=4271 and "puppy"=8312 have nothing in common in this scheme, even though they are clearly related. Modern word representations solve this by placing words in a "semantic space" where similar words are close together — like mapping that city so that neighbors live near each other. "Dog" and "puppy" become neighbors!`,
      questions: [
        'If "king" - "man" + "woman" = "queen", what arithmetic does this imply about word representations?',
        'What makes a good word representation for a computer?',
        'How many dimensions would you need to capture all the nuances of word meaning?',
      ],
      connection: 'Word representations are the bridge between human language and machine computation. They convert discrete words into continuous numerical vectors that capture semantic and syntactic relationships.',
      technicalIntro: 'Word representation techniques range from sparse (one-hot encoding, count vectors) to dense (word embeddings). Dense representations like Word2Vec, GloVe, and FastText learn distributed representations where semantically similar words have similar vectors. Modern contextual embeddings (BERT, ELMo) produce different vectors for the same word in different contexts.',
      lifeSkills: 'The concept of representation — how we encode information — is fundamental to communication, programming, and even relationships. Choosing the right representation determines what you can and cannot express.',
    },
    mathModelling: {
      need: 'Geometric word representations enable mathematical operations on word meaning, like finding analogies through vector arithmetic.',
      motivation: 'Computers need numerical representations of words. The quality of these representations directly determines what linguistic patterns models can learn.',
      challenge: 'Capturing meaning, context, syntax, and semantics all in a fixed-size vector while keeping the representation space manageable.',
      equations: [
        {
          latex: '\\text{One-Hot}(w_i) = [0, 0, \\ldots, 1, \\ldots, 0] \\text{ where } 1 \\text{ is at position } i',
          meaning: 'A vector of size |V| with a single 1 at the index corresponding to word w_i and 0s elsewhere.',
          interpretation: 'Each word gets a unique dimension. All vectors are orthogonal — no notion of similarity between any words. Requires |V| dimensions for |V| words.',
        },
        {
          latex: '\\vec{v}_{\\text{king}} - \\vec{v}_{\\text{man}} + \\vec{v}_{\\text{woman}} \\approx \\vec{v}_{\\text{queen}}',
          meaning: 'Word analogies can be solved through vector arithmetic in the embedding space.',
          interpretation: 'This shows that embeddings capture relational meaning: the vector direction from "man" to "king" is similar to the direction from "woman" to "queen".',
        },
      ],
      variables: [
        { symbol: '|V|', name: 'Vocabulary Size', description: 'Number of unique words in vocabulary' },
        { symbol: 'd', name: 'Embedding Dimension', description: 'Size of dense word vectors (typically 50-300)' },
        { symbol: 'v_w', name: 'Word Vector', description: 'Dense vector representation of word w' },
      ],
      interactive: {
        equation: '\\vec{v}_{a} - \\vec{v}_{b} + \\vec{v}_{c} \\approx \\vec{v}_{d}',
        description: 'Explore word analogies through vector arithmetic:',
        variables: [
          { symbol: 'a', name: 'Word A', description: 'First word in analogy' },
          { symbol: 'b', name: 'Word B', description: 'Second word being subtracted' },
          { symbol: 'c', name: 'Word C', description: 'Third word being added' },
        ],
        sliders: [
          { name: 'dim1', label: 'Semantic Dimension 1', min: -1, max: 1, step: 0.1, default: 0.5 },
          { name: 'dim2', label: 'Semantic Dimension 2', min: -1, max: 1, step: 0.1, default: 0.3 },
        ],
      },
      charts: [
        {
          title: 'Word Representation Methods: Dimension vs Quality',
          type: 'line',
          data: [
            { name: '50', 'One-Hot Quality': 10, 'Embedding Quality': 55 },
            { name: '100', 'One-Hot Quality': 10, 'Embedding Quality': 72 },
            { name: '200', 'One-Hot Quality': 10, 'Embedding Quality': 85 },
            { name: '300', 'One-Hot Quality': 10, 'Embedding Quality': 92 },
            { name: '500', 'One-Hot Quality': 10, 'Embedding Quality': 95 },
          ],
        },
      ],
      advantages: 'Dense representations capture semantic similarity (similar words have similar vectors), enable analogical reasoning, reduce dimensionality from |V| to d (d << |V|), and improve generalization.',
      limitations: 'Static embeddings cannot handle polysemy (different meanings of the same word). Training requires large corpora. Out-of-vocabulary words are problematic.',
    },
    activities: [
      baseActivity(
        'One-Hot Encoding Demo',
        'Instructor shows the limitations of one-hot encoding with a simple example.',
        [
          'Take 5 words: king, queen, man, woman, prince',
          'Create one-hot vectors for each (5-dimensional)',
          'Show that dot product between any two is 0',
          'Ask: does this reflect the true relationships between these words?',
        ],
        'Students understand one-hot encoding limitations'
      ),
      baseActivity(
        'Analogy Challenge',
        'Students try to solve word analogies manually and then see how embeddings solve them.',
        [
          'Present: "doctor : hospital :: teacher : ?"',
          'Students guess the answer and explain their reasoning',
          'Show how embeddings capture this relationship',
          'Try trickier analogies: "summer : hot :: winter : ?"',
        ],
        'Students understand semantic relationships in embeddings',
        '7 min'
      ),
      baseActivity(
        'Group: Design a Semantic Space',
        'Groups design a 2D semantic space by placing words on a grid based on two meaningful dimensions.',
        [
          'Give groups 10 words: car, bus, train, apple, banana, orange, dog, cat, rabbit, lion',
          'Define 2 axes: Animal-Food and Domestic-Wild',
          'Place all 10 words on the 2D grid',
          'Compare grids across groups — discuss disagreements',
        ],
        'Students intuitively understand embedding dimensions',
        '10 min'
      ),
      baseActivity(
        'Dimensionality Comparison',
        'Instructor demonstrates how different embedding dimensions affect word similarity tasks.',
        [
          'Load pre-trained embeddings at 50d, 100d, 200d, 300d',
          'Test them on word similarity (e.g., "car" vs "automobile")',
          'Show that higher dimensions capture more nuance',
          'Discuss diminishing returns and overfitting risks',
        ],
        'Students understand the dimension-quality trade-off',
        '5 min'
      ),
    ],
    project: {
      scope: 'Design a word representation strategy for a semantic search system, choosing between one-hot, count-based, and dense embeddings with justifications.',
      objectives: [
        'Compare representation methods on semantic search tasks',
        'Select appropriate embedding dimensions',
        'Design a strategy for handling out-of-vocabulary words',
        'Evaluate search quality across different representations',
      ],
      timeline: [
        { phase: 'Research representation methods', duration: '15 min', percent: 25 },
        { phase: 'Design experiments', duration: '15 min', percent: 25 },
        { phase: 'Evaluate on search task', duration: '20 min', percent: 35 },
        { phase: 'Document findings', duration: '10 min', percent: 15 },
      ],
      teamRoles: [
        { role: 'Representation Researcher', responsibility: 'Research and compare representation methods' },
        { role: 'Search Architect', responsibility: 'Design search system using chosen representation' },
        { role: 'Evaluation Lead', responsibility: 'Design metrics and evaluate performance' },
      ],
      deliverables: [
        'Representation method comparison report',
        'Search system architecture document',
        'Performance evaluation results with 3 metrics',
        'OOV handling strategy document',
      ],
    },
    questions: [
      {
        question: 'What is the main disadvantage of one-hot encoding for word representation?',
        answer: 'One-hot vectors are orthogonal — every word is equally dissimilar to every other word. "Dog" and "puppy" share no information, even though they are semantically related. This wastes data and prevents generalization.',
        explanation: 'With one-hot encoding, the model must learn relationships from scratch. In contrast, embeddings start similar words near each other, so learning about "dog" helps understand "puppy".',
        commonMistake: 'Using one-hot encoding for large vocabulary tasks — the dimensionality becomes unmanageable',
        tip: 'One-hot encoding is only appropriate for tiny vocabularies (<100 words) or as a pedagogical example',
      },
      {
        question: 'How do word embeddings capture the analogy "king is to queen as man is to woman"?',
        answer: 'Embeddings learn vector directions that represent semantic relationships. The vector from "man" to "king" (representing "royalty" + "masculine") is similar to the vector from "woman" to "queen" (representing "royalty" + "feminine").',
        explanation: 'This demonstrates that embeddings capture not just word similarity but also relational similarity — one of the most powerful properties of distributed representations.',
        tip: 'Analogy tasks are a common way to evaluate embedding quality without needing labeled data',
      },
    ],
    virtualLab: {
      description: 'Explore different word representation techniques interactively by visualizing word vectors in a 2D/3D space and testing analogies.',
      steps: [
        'Load a set of words or input your own',
        'Choose a representation: one-hot, count vector, Word2Vec, GloVe, FastText',
        'Visualize the representation space (PCA/t-SNE)',
        'Test word similarities and analogies',
        'Compare representation methods side by side',
      ],
      stepDetails: [
        'Select from preset word sets (animals, countries, professions) or type custom words',
        'Each method generates a vector for each word',
        '2D/3D scatter plot shows word positions in semantic space',
        'Click any two words to see cosine similarity and vector difference',
        'Analogy solver: type "a : b :: c : ?" and see predicted answer',
      ],
      completionMessage: 'You have explored the landscape of word representations! You understand how different encoding schemes capture (or fail to capture) word meaning.',
      dataFlow: `flowchart LR
        A[Vocabulary] --> B{Representation Method}
        B --> C[One-Hot: |V| x |V| matrix]
        B --> D[Count-Based: |V| x d matrix]
        B --> E[Dense Embeddings: |V| x d matrix]
        C --> F[Numerical Word Vectors]
        D --> F
        E --> F`,
    },
    insights: baseInsights(
      ['Dense embeddings capture semantic similarity', 'Enable analogical reasoning through vector arithmetic', 'Reduce dimensionality from |V| to d (50-300)'],
      ['Static embeddings fail on polysemy', 'Require large training corpora', 'OOV words are problematic without subword info'],
      'Contextual embeddings (BERT, GPT) that produce different vectors for the same word in different contexts are the current state of the art.',
      ['Search engines use embeddings for semantic search', 'Recommendation systems use word vectors for content similarity', 'Translation systems use cross-lingual embeddings', 'Chatbots use embeddings for intent matching'],
      'Understanding word representations is essential for anyone working with text data. Embedding techniques are the foundation of modern NLP.'
    ),
  },

  '3.6': {
    topicId: '3.6',
    learningObjective: 'Understand the Bag of Words model and how it represents text as numerical feature vectors for machine learning.',
    nextPrep: 'Consider how you would represent a document using only word counts — what information is gained and what is lost?',
    dependencyGraph: `flowchart LR
      A[3.5 Word Representations] --> B[3.6 Bag of Words]
      B --> C[3.7 TF-IDF]
      B --> D[3.9 NLP Pipelines Lab]`,
    storytelling: {
      story: `Imagine you are at a party where everyone is talking. A friend asks you, "What was that conversation about?" But you were across the room and could only hear individual words, not full sentences. "I heard: pizza, project, deadline, pizza, Monday, meeting, pizza, budget." Despite missing the grammar and sentence structure, you can guess the topic: someone ordered pizza during a project meeting about deadlines and budgets. You have just performed a perfect Bag of Words analysis! You ignored word order, grammar, and sentence structure — exactly like Bag of Words does. The model simply counts how many times each word appears and uses those counts as features. It is surprisingly effective for many tasks, like a party-goer who misses all the nuances but still gets the gist!`,
      questions: [
        'What important information is lost when we ignore word order?',
        'Can "not good" and "good not" be distinguished in Bag of Words?',
        'Why does Bag of Words work surprisingly well despite losing so much information?',
      ],
      connection: 'Bag of Words is the simplest way to convert variable-length text into fixed-length feature vectors for machine learning. It directly connects tokenization and word counting to numerical representations that algorithms can process.',
      technicalIntro: 'Bag of Words (BoW) creates a vocabulary of all unique words in the corpus, then represents each document as a vector of word counts. Each dimension corresponds to a word, and the value is the count (or binary presence) of that word in the document. The result is a sparse, high-dimensional representation that loses word order and context.',
      lifeSkills: 'BoW teaches the principle of "good enough" solutions. Sometimes a simple, fast, interpretable approach outperforms complex methods. Knowing when simple is sufficient is a mark of engineering wisdom.',
    },
    mathModelling: {
      need: 'Converting text to fixed-size numerical vectors is necessary for most machine learning algorithms.',
      motivation: 'ML algorithms cannot process raw text directly — they need numerical feature vectors of consistent size. BoW provides the simplest mapping from text to numbers.',
      challenge: 'The resulting vectors are extremely high-dimensional (|V| dimensions) and sparse (most entries are 0), which poses computational and statistical challenges.',
      equations: [
        {
          latex: '\\vec{d}_i = [c_{i1}, c_{i2}, \\ldots, c_{i|V|}] \\text{ where } c_{ij} = \\text{count of word } w_j \\text{ in document } d_i',
          meaning: 'Document d_i is represented as a vector where each entry c_ij is the count of word w_j in that document.',
          interpretation: 'Each document becomes a point in |V|-dimensional space. Documents with similar word usage patterns cluster together geometrically.',
        },
        {
          latex: '\\text{Sparsity} = 1 - \\frac{\\text{Non-zero entries}}{\\text{Total entries}}',
          meaning: 'Fraction of the document-term matrix entries that are zero.',
          interpretation: 'Typical BoW matrices are 99%+ sparse — most words do not appear in most documents. This sparsity is both a computational challenge and a statistical one.',
        },
      ],
      variables: [
        { symbol: 'c_ij', name: 'Word Count', description: 'Number of times word j appears in document i' },
        { symbol: 'd_i', name: 'Document Vector', description: 'BoW feature vector for document i' },
        { symbol: '|V|', name: 'Vocabulary Size', description: 'Total unique words in corpus' },
      ],
      interactive: {
        equation: '\\vec{d} = [\\text{count}(w_1), \\text{count}(w_2), \\ldots, \\text{count}(w_{|V|})]',
        description: 'Type a sentence and see its Bag of Words vector:',
        variables: [
          { symbol: 'w_j', name: 'Word j', description: 'j-th word in vocabulary' },
          { symbol: 'count(w_j)', name: 'Count of Word', description: 'How many times word j appears' },
        ],
        sliders: [
          { name: 'count1', label: 'Word 1 Count', min: 0, max: 10, step: 1, default: 2 },
          { name: 'count2', label: 'Word 2 Count', min: 0, max: 10, step: 1, default: 1 },
        ],
      },
      charts: [
        {
          title: 'BoW Vector Sparsity by Vocabulary Size',
          type: 'bar',
          data: [
            { name: '100 words', 'Non-zero %': 15, 'Sparsity %': 85 },
            { name: '500 words', 'Non-zero %': 6, 'Sparsity %': 94 },
            { name: '1000 words', 'Non-zero %': 3, 'Sparsity %': 97 },
            { name: '5000 words', 'Non-zero %': 1.2, 'Sparsity %': 98.8 },
            { name: '10000 words', 'Non-zero %': 0.5, 'Sparsity %': 99.5 },
            { name: '50000 words', 'Non-zero %': 0.1, 'Sparsity %': 99.9 },
          ],
        },
      ],
      advantages: 'Simple, fast, interpretable, works well for document classification, especially with large documents where word frequency patterns are informative.',
      limitations: 'Loses word order, syntax, and context. High-dimensional and sparse. Cannot handle polysemy. Treats all words as equally important (TF-IDF addresses this).',
    },
    activities: [
      baseActivity(
        'Build a BoW Vector By Hand',
        'Students manually construct a Bag of Words vector for a short document.',
        [
          'Give students a 3-sentence paragraph',
          'Students list all unique words as vocabulary',
          'Count occurrences and create the vector',
          'Compare vectors across students — are they identical?',
        ],
        'Students understand BoW construction manually'
      ),
      baseActivity(
        'What Does BoW Miss?',
        'Instructor shows sentences that are different but identical in BoW representation.',
        [
          'Show: "Dog bites man" vs "Man bites dog"',
          'Show: "Not good, terrible" vs "Good, not terrible"',
          'Show: "The cat chased the mouse" vs "The mouse chased the cat"',
          'Discuss: these have very different meanings but identical BoW vectors',
        ],
        'Students understand the limitations of BoW',
        '5 min'
      ),
      baseActivity(
        'Group: BoW for Document Classification',
        'Groups design a BoW-based classifier for a simple task like spam detection.',
        [
          'Provide 5 spam and 5 non-spam emails',
          'Groups build vocabulary and count word frequencies',
          'Identify which words are most indicative of spam',
          'Create a classification rule based on word presence',
        ],
        'Students apply BoW to a real classification task',
        '10 min'
      ),
      baseActivity(
        'Vocabulary Size Trade-off',
        'Instructor shows how vocabulary size affects classification accuracy and computational cost.',
        [
          'Run BoW classifiers with vocabulary sizes of 100, 500, 2000, 10000',
          'Plot accuracy vs vocabulary size',
          'Plot memory usage vs vocabulary size',
          'Discuss the optimal trade-off point',
        ],
        'Students understand the practical trade-offs',
        '5 min'
      ),
    ],
    project: {
      scope: 'Build and evaluate a Bag of Words model for classifying news articles into 4 categories (sports, technology, politics, entertainment).',
      objectives: [
        'Create a vocabulary from a training corpus',
        'Build BoW vectors for all documents',
        'Train a classifier on BoW features',
        'Evaluate performance and analyze errors',
      ],
      timeline: [
        { phase: 'Vocabulary creation', duration: '10 min', percent: 20 },
        { phase: 'Feature vector construction', duration: '15 min', percent: 30 },
        { phase: 'Classifier training', duration: '10 min', percent: 20 },
        { phase: 'Evaluation and analysis', duration: '15 min', percent: 30 },
      ],
      teamRoles: [
        { role: 'Vocabulary Builder', responsibility: 'Create and manage vocabulary from corpus' },
        { role: 'Feature Engineer', responsibility: 'Construct BoW vectors for each document' },
        { role: 'Classifier Trainer', responsibility: 'Train and evaluate the classifier' },
      ],
      deliverables: [
        'Vocabulary list with frequency stats',
        'BoW matrix for the corpus',
        'Classification accuracy report',
        'Error analysis with misclassification examples',
      ],
    },
    questions: [
      {
        question: 'What information is lost when using Bag of Words representation?',
        answer: 'BoW loses word order, syntactic structure, context, and semantic relationships between words. "Dog bites man" and "Man bites dog" have identical BoW representations but opposite meanings.',
        explanation: 'This is the fundamental limitation of BoW — it treats documents as "bags" of words without considering how words relate to each other. For tasks where word order matters (sentiment, question answering), BoW performs poorly.',
        commonMistake: 'Using BoW for tasks that require understanding word relationships or sentence structure',
        tip: 'Use BoW for topic classification and document similarity. Use sequence models for tasks requiring word order understanding.',
      },
      {
        question: 'Why is the BoW feature matrix extremely sparse?',
        answer: 'Each document contains only a small fraction of the total vocabulary. With a typical vocabulary of 10,000+ words and documents of a few hundred words, 99%+ of matrix entries are zero.',
        explanation: 'This sparsity means most features carry no information for most documents. Dimensionality reduction or feature selection is often applied to make BoW more efficient.',
        tip: 'Common techniques to reduce sparsity: remove rare words, use TF-IDF weighting, or apply SVD/LSA for dimensionality reduction',
      },
    ],
    virtualLab: {
      description: 'Build and explore Bag of Words representations interactively. See how documents are transformed into numerical vectors and use them for classification.',
      steps: [
        'Load or create a small document collection',
        'Build vocabulary from the corpus',
        'View the document-term matrix',
        'Find similar documents using BoW vectors',
        'Train a classifier and test it',
      ],
      stepDetails: [
        'Choose from preset datasets or paste your own documents',
        'Vocabulary builder shows word frequencies across corpus',
        'Heatmap visualization of the document-term matrix',
        'Click any two documents to see their cosine similarity',
        'Built-in classifier shows accuracy, confusion matrix, and important words per category',
      ],
      completionMessage: 'You have built and explored a complete Bag of Words model! You understand how raw text becomes numerical features for machine learning.',
      dataFlow: `flowchart LR
        A[Raw Documents] --> B[Tokenization]
        B --> C[Vocabulary Building]
        C --> D[Word Count Matrix]
        D --> E[BoW Feature Vectors]
        E --> F[Classifier Training]
        F --> G[Predictions]`,
    },
    insights: baseInsights(
      ['Simple, fast, interpretable', 'Works well for topic classification', 'Foundation for understanding text representations'],
      ['Loses all word order information', 'Extremely high-dimensional and sparse', 'No semantic understanding between words'],
      'Modern approaches combine BoW simplicity with learned representations (e.g., Smooth Inverse Frequency embeddings) for better performance.',
      ['Spam detection systems', 'Topic categorization for news', 'Sentiment analysis for product reviews', 'Document similarity for plagiarism detection'],
      'BoW understanding is foundational for NLP roles. Even with modern deep learning, knowing BoW helps debug and improve text classification systems.'
    ),
  },

  '3.7': {
    topicId: '3.7',
    learningObjective: 'Understand TF-IDF (Term Frequency-Inverse Document Frequency) and how it improves upon simple Bag of Words by weighting word importance.',
    nextPrep: 'Think about which words should be considered "important" in a document and how you would measure importance across a collection of documents.',
    dependencyGraph: `flowchart LR
      A[3.6 Bag of Words] --> B[3.7 TF-IDF]
      B --> C[3.8 Word Embeddings]
      B --> D[3.9 NLP Pipelines Lab]`,
    storytelling: {
      story: `Imagine you are a detective investigating a series of thefts across a city. You collect witness statements from each neighborhood. Some words appear in every statement: "the," "and," "saw," "person," "thing." These are useless for finding the thief — they are just the background noise of storytelling. But one statement mentions "striped purple hat," another mentions "purple backpack," and a third mentions "striped gloves." Now those are clues! The words "purple" and "striped" are rare across all statements but appear multiple times in a few — they are the distinctive features that connect the crimes. This is exactly what TF-IDF does: it down-weights words that appear everywhere (like "the") and up-weights words that appear frequently in a few documents but rarely across the whole collection — the "purple striped" clues that define each document uniquely.`,
      questions: [
        'Why is a word that appears in every document less useful for distinguishing documents?',
        'What might TF-IDF do with your name in a collection of articles about you?',
        'How would you adjust TF-IDF for very short documents like tweets?',
      ],
      connection: 'TF-IDF improves on BoW by weighting words based on how informative they are. Words that appear frequently in a document but rarely across the corpus get high weights — they are the distinctive "clues" for that document.',
      technicalIntro: 'TF-IDF combines two metrics: Term Frequency (how often a word appears in a document) and Inverse Document Frequency (log of total documents divided by number of documents containing the word). The product gives high weight to words that are frequent in a document but rare across the corpus, filtering out common but uninformative words.',
      lifeSkills: 'TF-IDF teaches the principle of signal amplification — identifying what is distinctive rather than what is common. In any analysis, the most valuable insights often come from the rare, unusual patterns, not the common ones.',
    },
    mathModelling: {
      need: 'Different words have different discriminative power. Common words like "the" appear everywhere and should be down-weighted. Rare, document-specific words should be up-weighted.',
      motivation: 'Simple word counts (BoW) treat all words equally, but some words are much more informative for distinguishing documents than others.',
      challenge: 'Designing a weighting scheme that balances local importance (within a document) with global informativeness (across the corpus).',
      equations: [
        {
          latex: '\\text{TF-IDF}(w, d) = \\text{TF}(w, d) \\times \\text{IDF}(w) = f_{w,d} \\times \\log\\left(\\frac{N}{n_w}\\right)',
          meaning: 'TF-IDF score for word w in document d is the product of term frequency (f_w,d) and inverse document frequency (log(N/n_w)), where N is total documents and n_w is documents containing w.',
          interpretation: 'TF increases with more occurrences in the document. IDF decreases as more documents contain the word. The log dampens the IDF effect so rare words do not dominate.',
        },
        {
          latex: '\\text{IDF}(w) = \\log\\left(\\frac{1 + N}{1 + n_w}\\right) + 1',
          meaning: 'Smoothing variant of IDF that prevents division by zero and ensures IDF is non-negative.',
          interpretation: 'If a word appears in all documents, IDF ≈ 1. If it appears in only 1 document, IDF ≈ log(N) + 1. This creates a wide dynamic range for word importance.',
        },
      ],
      variables: [
        { symbol: 'f_w,d', name: 'Term Frequency', description: 'Count of word w in document d' },
        { symbol: 'N', name: 'Total Documents', description: 'Number of documents in the corpus' },
        { symbol: 'n_w', name: 'Document Frequency', description: 'Number of documents containing word w' },
      ],
      interactive: {
        equation: '\\text{TF-IDF} = f \\times \\log(N / n)',
        description: 'Adjust term frequency and document frequency to see how TF-IDF changes:',
        variables: [
          { symbol: 'f', name: 'Term Frequency', description: 'Occurrences of word in document' },
          { symbol: 'N', name: 'Total Docs', description: 'Total documents in corpus' },
          { symbol: 'n', name: 'Docs with Word', description: 'Documents containing this word' },
        ],
        sliders: [
          { name: 'f', label: 'Term Frequency (f)', min: 1, max: 20, step: 1, default: 5 },
          { name: 'N', label: 'Total Documents (N)', min: 100, max: 10000, step: 100, default: 1000 },
          { name: 'n', label: 'Doc Frequency (n)', min: 1, max: 1000, step: 1, default: 50 },
        ],
      },
      charts: [
        {
          title: 'TF-IDF Word Weights Comparison',
          type: 'bar',
          data: [
            { name: '"the"', 'TF': 50, 'IDF': 1.1, 'TF-IDF': 55 },
            { name: '"and"', 'TF': 35, 'IDF': 1.2, 'TF-IDF': 42 },
            { name: '"algorithm"', 'TF': 8, 'IDF': 3.0, 'TF-IDF': 24 },
            { name: '"quantum"', 'TF': 5, 'IDF': 4.5, 'TF-IDF': 22.5 },
            { name: '"neural"', 'TF': 6, 'IDF': 3.8, 'TF-IDF': 22.8 },
            { name: '"transformer"', 'TF': 4, 'IDF': 5.2, 'TF-IDF': 20.8 },
          ],
        },
      ],
      advantages: 'Down-weights common words, up-weights discriminative words, improves classification accuracy by 5-15% over raw BoW, and is still simple and interpretable.',
      limitations: 'Does not capture semantics or word order. Still high-dimensional and sparse. IDF assumes word distribution is uniform across corpus, which is not always true.',
    },
    activities: [
      baseActivity(
        'Manual TF-IDF Calculation',
        'Students compute TF-IDF scores by hand for a tiny corpus of 3 documents.',
        [
          'Give 3 mini-documents: D1="cat sat mat", D2="cat ran", D3="mat sat"',
          'Compute TF for each word in each document',
          'Compute IDF for each word across all documents',
          'Calculate TF-IDF and identify the most important words per document',
        ],
        'Students understand TF-IDF computation manually'
      ),
      baseActivity(
        'TF vs IDF Intuition',
        'Instructor demonstrates TF and IDF separately to build intuition before combining them.',
        [
          'Show: "the" has high TF but low IDF (high TF-IDF? No!)',
          'Show: "quantum" has low TF but high IDF (high TF-IDF? Yes!)',
          'Show: "algorithm" has medium TF and medium IDF',
          'Discuss why high TF alone or high IDF alone is not enough',
        ],
        'Students build intuition for TF and IDF interaction',
        '5 min'
      ),
      baseActivity(
        'Group: Find the Keywords',
        'Groups receive documents and use TF-IDF reasoning to identify the most distinctive words.',
        [
          'Give each group a different document from a shared corpus',
          'Without computers, use frequency analysis to find distinctive words',
          'Groups swap documents and try to guess which group had which document based on keywords',
          'Compare human keyword selection with actual TF-IDF rankings',
        ],
        'Students practice identifying discriminative words',
        '10 min'
      ),
      baseActivity(
        'TF-IDF vs BoW Classification Race',
        'Instructor runs a competition between BoW and TF-IDF classifiers.',
        [
          'Prepare a text classification dataset',
          'Train BoW and TF-IDF classifiers side by side',
          'Compare accuracy, precision, recall, F1',
          'Discuss which types of documents each handles better',
        ],
        'Students see the quantitative improvement of TF-IDF',
        '5 min'
      ),
    ],
    project: {
      scope: 'Build a TF-IDF-based document retrieval system that ranks documents by relevance to a search query.',
      objectives: [
        'Create TF-IDF vectors for a document collection',
        'Convert search queries to TF-IDF vectors',
        'Rank documents by cosine similarity to query',
        'Evaluate retrieval quality with precision@k and recall',
      ],
      timeline: [
        { phase: 'Build TF-IDF matrix', duration: '15 min', percent: 30 },
        { phase: 'Query processing', duration: '10 min', percent: 20 },
        { phase: 'Similarity computation', duration: '10 min', percent: 20 },
        { phase: 'Evaluation', duration: '15 min', percent: 30 },
      ],
      teamRoles: [
        { role: 'Index Builder', responsibility: 'Create TF-IDF vectors for all documents' },
        { role: 'Query Processor', responsibility: 'Convert queries to TF-IDF vectors' },
        { role: 'Evaluator', responsibility: 'Measure retrieval quality' },
      ],
      deliverables: [
        'TF-IDF matrix for the corpus',
        'Query-to-document similarity implementation',
        'Precision@k and recall evaluation report',
        'Top-5 results for 3 example queries',
      ],
    },
    questions: [
      {
        question: 'How does TF-IDF solve the problem of common words dominating BoW representations?',
        answer: 'IDF penalizes words that appear in many documents. A word like "the" appears in almost every document, so its IDF is near 1 (log(N/N) = log(1) = 0). A rare word appearing in few documents has high IDF, giving it more weight despite lower frequency.',
        explanation: 'This weighting scheme ensures that discriminative words contribute more to document similarity and classification, while common grammatical words contribute very little.',
        commonMistake: 'Forgetting to apply smoothing to IDF, which can cause division-by-zero errors for words appearing in every document',
        tip: 'Always use the smoothed IDF variant: IDF = log((1+N)/(1+n)) + 1',
      },
      {
        question: 'What is a limitation of TF-IDF when dealing with short documents like tweets?',
        answer: 'Short documents have very few word occurrences, making TF unreliable. IDF also becomes unstable because document frequencies are harder to estimate reliably from short texts.',
        explanation: 'TF-IDF performs best on documents with enough text for frequency patterns to be meaningful. For short texts, word embeddings or contextual models are often better choices.',
        tip: 'For short text, consider using character n-grams TF-IDF or pre-trained embeddings instead of word-level TF-IDF',
      },
    ],
    virtualLab: {
      description: 'Build and explore TF-IDF representations interactively, comparing them with raw Bag of Words to see how weighting changes document similarity.',
      steps: [
        'Load a document collection or paste your own',
        'View the TF-IDF matrix with color-coded weights',
        'Find the most distinctive words for each document',
        'Compare document similarity using BoW vs TF-IDF',
        'Use TF-IDF vectors for retrieval or classification',
      ],
      stepDetails: [
        'Choose from preset datasets or create a custom corpus',
        'Heatmap shows TF-IDF weights — bright cells are distinctive words',
        'Each document shows its top-5 TF-IDF keywords',
        'Side-by-side similarity matrix for BoW and TF-IDF shows the difference',
        'Run a query and see ranked results with similarity scores',
      ],
      completionMessage: 'You have mastered TF-IDF! You understand how to weight word importance and why TF-IDF outperforms raw BoW for most tasks.',
      dataFlow: `flowchart LR
        A[Document Collection] --> B[Tokenization]
        B --> C[Term Frequency (TF)]
        B --> D[Document Frequency (DF)]
        C --> E[TF-IDF Weighting]
        D --> E
        E --> F[TF-IDF Vectors]
        F --> G[Document Similarity]
        F --> H[Classification]
        F --> I[Information Retrieval]`,
    },
    insights: baseInsights(
      ['Significantly improves over BoW for most tasks', 'Simple, interpretable, computationally efficient', 'Widely used in industry for text analytics'],
      ['Still loses semantics and word order', 'High-dimensional and sparse', 'IDF assumptions break for some domains'],
      'Modern neural TF-IDF variations that learn IDF-like weights end-to-end are an active research area.',
      ['Search engines use TF-IDF for initial ranking', 'Keyword extraction tools use TF-IDF scores', 'Document clustering pipelines', 'Recommendation systems for content similarity'],
      'TF-IDF is one of the most widely used techniques in industry NLP. Every data scientist should understand it thoroughly.'
    ),
  },

  '3.8': {
    topicId: '3.8',
    learningObjective: 'Understand word embeddings and how they learn dense, distributed vector representations that capture semantic meaning.',
    nextPrep: 'Think about what it means for two words to be "similar" and how you might measure that numerically.',
    dependencyGraph: `flowchart LR
      A[3.7 TF-IDF] --> B[3.8 Word Embeddings]
      B --> C[3.9 NLP Pipelines Lab]
      B --> D[Module 4: Why Quantum?]`,
    storytelling: {
      story: `Imagine you are a cartographer, but instead of mapping land, you are mapping meaning. Your goal: create a map of all words where similar words are placed close together and related concepts form neighborhoods. "Doctor" lives near "nurse" and "hospital." "Paris" is close to "France" and "Eiffel." "Happy" neighbors "joyful," "elated," and "cheerful." This "semantic map" is what word embeddings create — a geography of meaning where distances represent semantic differences. And here is the mind-bending part: on this map, you can travel along meaningful directions. Walk from "man" toward "king" and you are walking in the "royalty + masculine" direction. Walk from "woman" the same distance and you arrive at "queen". Word embeddings discovered that meaning has geometry, and you can navigate it like a city!`,
      questions: [
        'What might "summer" - "hot" + "cold" equal in the embedding space?',
        'How might embeddings handle homonyms like "bank" (river vs financial)?',
        'Why would a 300-dimensional space be better than a 2D or 3D space for representing word meaning?',
      ],
      connection: 'Word embeddings represent the culmination of classical word representation techniques. They learn dense vectors that capture rich semantic and syntactic relationships, forming the bridge between classical NLP and the neural/quantum approaches that follow.',
      technicalIntro: 'Word embeddings are dense vector representations (typically 50-300 dimensions) learned from large text corpora. Word2Vec (CBOW and Skip-gram), GloVe, and FastText are popular methods. They capture semantic similarity, analogical relationships, and are the foundation for modern deep learning NLP.',
      lifeSkills: 'Embeddings teach us that meaning is relational — no word (or concept) exists in isolation. The geometry of meaning is a powerful metaphor for understanding how ideas relate in any domain.',
    },
    mathModelling: {
      need: 'Dense vectors generalize better than sparse vectors, capture similarity through distance, and enable semantic operations like analogy solving.',
      motivation: 'Sparse representations (BoW, TF-IDF) treat every word as independent. Embeddings learn shared structure across words, enabling knowledge transfer between related words.',
      challenge: 'Learning embeddings that simultaneously capture word similarity, multiple word senses, syntactic roles, and domain-specific meanings from unlabeled text.',
      equations: [
        {
          latex: 'P(w_j | w_i) = \\frac{\\exp(\\vec{v}_{w_j}^T \\cdot \\vec{v}_{w_i})}{\\sum_{k \\in V} \\exp(\\vec{v}_{w_k}^T \\cdot \\vec{v}_{w_i})}',
          meaning: 'Skip-gram objective: probability of context word w_j given target word w_i, modeled as a softmax over dot products of word vectors.',
          interpretation: 'Words that frequently appear together (co-occur) will have similar vectors because the model maximizes their dot product. This captures "you shall know a word by the company it keeps."',
        },
        {
          latex: 'J(\\theta) = -\\frac{1}{T} \\sum_{t=1}^{T} \\sum_{-m \\leq j \\leq m, j \\neq 0} \\log P(w_{t+j} | w_t)',
          meaning: 'Skip-gram loss function: negative log-likelihood of predicting context words within a window of size m around each target word.',
          interpretation: 'The model learns by trying to predict surrounding words. Words with similar contexts end up with similar vectors — the fundamental distributional hypothesis in action.',
        },
      ],
      variables: [
        { symbol: 'v_w_i', name: 'Target Vector', description: 'Embedding of the center/target word' },
        { symbol: 'v_w_j', name: 'Context Vector', description: 'Embedding of a context word' },
        { symbol: 'm', name: 'Window Size', description: 'Number of words to each side (context window)' },
        { symbol: 'T', name: 'Corpus Size', description: 'Total number of words in training corpus' },
      ],
      interactive: {
        equation: '\\text{Similarity}(a, b) = \\frac{\\vec{v}_a \\cdot \\vec{v}_b}{\\|\\vec{v}_a\\| \\|\\vec{v}_b\\|}',
        description: 'Explore cosine similarity between word vectors:',
        variables: [
          { symbol: 'v_a', name: 'Word A Vector', description: 'Embedding of first word' },
          { symbol: 'v_b', name: 'Word B Vector', description: 'Embedding of second word' },
        ],
        sliders: [
          { name: 'dim1', label: 'Word A - Dim 1', min: -1, max: 1, step: 0.1, default: 0.8 },
          { name: 'dim2', label: 'Word A - Dim 2', min: -1, max: 1, step: 0.1, default: 0.3 },
          { name: 'dim3', label: 'Word B - Dim 1', min: -1, max: 1, step: 0.1, default: 0.6 },
          { name: 'dim4', label: 'Word B - Dim 2', min: -1, max: 1, step: 0.1, default: 0.7 },
        ],
      },
      charts: [
        {
          title: 'Embedding Quality vs Training Data Size',
          type: 'line',
          data: [
            { name: '10M', 'Word2Vec': 35, 'GloVe': 30, 'FastText': 38 },
            { name: '100M', 'Word2Vec': 55, 'GloVe': 52, 'FastText': 58 },
            { name: '1B', 'Word2Vec': 72, 'GloVe': 70, 'FastText': 75 },
            { name: '10B', 'Word2Vec': 82, 'GloVe': 83, 'FastText': 85 },
            { name: '100B', 'Word2Vec': 88, 'GloVe': 90, 'FastText': 91 },
          ],
        },
      ],
      advantages: 'Dense vectors capture rich semantics, enable analogical reasoning, improve data efficiency through shared representations, and form the foundation for transfer learning in NLP.',
      limitations: 'Static embeddings fail on polysemy (one vector per word). Training requires large corpora. OOV words are problematic. Embeddings can encode societal biases present in training data.',
    },
    activities: [
      baseActivity(
        'The King - Man + Woman = Queen Demo',
        'Instructor demonstrates the famous word analogy using pre-trained embeddings.',
        [
          'Show: vector("king") - vector("man") + vector("woman") = ?',
          'Compute and show the nearest word to the result',
          'Try other analogies: "Paris : France :: Tokyo : ?"',
          'Discuss what this reveals about the geometry of meaning',
        ],
        'Students understand analogical reasoning in embeddings'
      ),
      baseActivity(
        'Nearest Neighbors Exploration',
        'Students guess the nearest neighbors of words in embedding space before seeing the results.',
        [
          'Pick a word like "pizza"',
          'Students predict the 5 most similar words',
          'Reveal actual nearest neighbors from pre-trained embeddings',
          'Discuss surprises — why are certain words considered similar?',
        ],
        'Students build intuition for embedding similarity',
        '7 min'
      ),
      baseActivity(
        'Group: Bias Detection in Embeddings',
        'Groups analyze pre-trained embeddings for gender, racial, or cultural biases.',
        [
          'Show: vector("doctor") - vector("man") + vector("woman") = ?',
          'Check if result is closer to "nurse" than "doctor" (gender bias)',
          'Check analogies: "programmer : man :: ? : woman"',
          'Discuss implications of biased embeddings in real applications',
        ],
        'Students understand ethical dimensions of NLP technology',
        '10 min'
      ),
      baseActivity(
        'Training a Mini Embedding',
        'Instructor walks through training a tiny embedding on a small corpus to show how it works.',
        [
          'Use a corpus of 20 sentences',
          'Initialize random 2D vectors for each word',
          'Simulate one epoch of Skip-gram training manually',
          'Show how similar words move closer in vector space',
        ],
        'Students understand the training process intuitively',
        '8 min'
      ),
    ],
    project: {
      scope: 'Create a word embedding-based semantic search tool that finds related documents using vector similarity rather than keyword matching.',
      objectives: [
        'Load pre-trained word embeddings (e.g., GloVe or Word2Vec)',
        'Compute document vectors by averaging word embeddings',
        'Implement semantic search using cosine similarity',
        'Evaluate search quality vs keyword-based approaches',
      ],
      timeline: [
        { phase: 'Load and explore embeddings', duration: '10 min', percent: 20 },
        { phase: 'Build document vectors', duration: '15 min', percent: 30 },
        { phase: 'Implement search', duration: '10 min', percent: 20 },
        { phase: 'Evaluate and compare', duration: '15 min', percent: 30 },
      ],
      teamRoles: [
        { role: 'Embedding Analyst', responsibility: 'Load, explore, and visualize embeddings' },
        { role: 'Search Architect', responsibility: 'Build document vectors and search function' },
        { role: 'Evaluator', responsibility: 'Compare semantic vs keyword search quality' },
      ],
      deliverables: [
        'Embedding exploration report with visualizations',
        'Document vector computation pipeline',
        'Semantic search implementation',
        'Evaluation report comparing search approaches',
      ],
    },
    questions: [
      {
        question: 'How do word embeddings capture the relationship "Paris is to France as Tokyo is to Japan"?',
        answer: 'Embeddings learn that the vector difference between capital cities and their countries is consistent. The vector (Paris - France) is approximately equal to (Tokyo - Japan), both representing the "capital of" relationship direction.',
        explanation: 'This consistency of relational vectors across different examples shows that embeddings capture abstract relationships, not just word co-occurrence patterns.',
        commonMistake: 'Thinking embeddings only capture topical similarity (words in similar documents)',
        tip: 'Embeddings capture both topical similarity ("doctor" ~ "nurse") and relational similarity ("doctor:hospital :: teacher:school")',
      },
      {
        question: 'What is the key limitation of static word embeddings like Word2Vec?',
        answer: 'Static embeddings assign the same vector to a word regardless of context. "Bank" has the same embedding whether it appears in "river bank" or "money bank", losing the distinction between different word senses.',
        explanation: 'This limits performance on tasks requiring fine-grained word sense disambiguation. Contextual embeddings (BERT, ELMo) solve this by producing context-dependent vectors.',
        tip: 'Use static embeddings for tasks where word sense is consistent (e.g., medical text). Use contextual embeddings for tasks with high lexical ambiguity.',
      },
    ],
    virtualLab: {
      description: 'Explore pre-trained word embeddings interactively — find similar words, solve analogies, visualize the semantic space, and examine potential biases.',
      steps: [
        'Load pre-trained embeddings (Word2Vec, GloVe, or FastText)',
        'Enter a word and see its nearest neighbors',
        'Solve analogies using vector arithmetic',
        'Visualize word neighborhoods in 2D/3D',
        'Explore bias in embeddings',
      ],
      stepDetails: [
        'Choose from 3 pre-trained embedding sets with different properties',
        'Nearest neighbors display shows top-10 similar words with similarity scores',
        'Analogy solver: enter "a : b :: c : ?" and see the computed answer',
        'PCA/t-SNE visualization of word clusters, colored by category',
        'Bias probe: check gender/racial associations for selected word pairs',
      ],
      completionMessage: 'You have explored the power and limitations of word embeddings! You understand how meaning is captured geometrically and how to use embeddings in practice.',
      dataFlow: `flowchart LR
        A[Large Text Corpus] --> B[Training Algorithm]
        B --> C[Word Vectors]
        C --> D[Nearest Neighbors]
        C --> E[Analogy Solving]
        C --> F[Document Vectors]
        F --> G[Semantic Search]
        F --> H[Classification]`,
    },
    insights: baseInsights(
      ['Dense vectors capture rich semantics', 'Enable analogical reasoning', 'Foundation for transfer learning in NLP', 'Compact representation (300d vs 100000d)'],
      ['Static embeddings fail on polysemy', 'Require large training corpora', 'OOV words are problematic', 'Can encode harmful biases'],
      'Contextual embeddings (BERT, GPT) and multilingual embeddings are current frontiers. Quantum embeddings may offer exponential compression of semantic spaces.',
      ['Search engines use embeddings for semantic matching', 'Recommendation systems use item embeddings', 'Translation systems use cross-lingual embeddings', 'Chatbots use embeddings for intent understanding'],
      'Word embeddings are essential knowledge for NLP engineers. Understanding them is critical before moving to contextual models and quantum language representations.'
    ),
  },

  '3.9': {
    topicId: '3.9',
    learningObjective: 'Build a complete classical NLP pipeline end-to-end, combining preprocessing, tokenization, and vectorization for text classification.',
    nextPrep: 'Review all topics from Module 3 and sketch a pipeline diagram showing how they connect.',
    dependencyGraph: `flowchart LR
      A[3.1-3.8 All Module 3 Topics] --> B[3.9 NLP Pipelines Lab]
      B --> C[Module 4: Why Quantum?]
      B --> D[Module 5: Quantum Computing Basics]`,
    storytelling: {
      story: `Congratulations! You have learned all the individual kitchen skills: washing vegetables, sharpening knives, chopping onions, boiling pasta, sautéing garlic, and plating dishes. Now it is time to actually cook a meal! Building an NLP pipeline is like running a restaurant kitchen — each station (preprocessing, tokenization, stop word removal, vectorization, classification) has its own job, and they must work together in perfect sequence. If the chopping station sends whole potatoes to the boiling station, the entire kitchen falls apart. In this lab, you become the head chef of an NLP kitchen, orchestrating all the techniques you have learned into a working pipeline that takes raw text and produces meaningful predictions. Time to cook!`,
      questions: [
        'What happens if preprocessed output does not match tokenizer expectations?',
        'How would you debug a pipeline that produces poor classification results?',
        'What is the most important component in the pipeline — or are they all equally critical?',
      ],
      connection: 'This lab ties together all Module 3 topics into a working system. Each technique learned separately (preprocessing, tokenization, stop words, stemming, TF-IDF, classification) becomes a component in an integrated pipeline.',
      technicalIntro: 'An NLP pipeline chains together sequential processing steps: raw text → preprocessing → tokenization → normalization (stem/lemmatize) → stop word removal → feature extraction (BoW/TF-IDF/embeddings) → classification model. Pipeline orchestration ensures each step outputs the correct format for the next step.',
      lifeSkills: 'Pipeline thinking — understanding how individual steps connect to form a complete system — is one of the most transferable skills in engineering. Any complex process can be understood as a pipeline of simpler steps.',
    },
    mathModelling: {
      need: 'Pipeline design requires understanding of data flow, error propagation, and computational bottlenecks between stages.',
      motivation: 'A pipeline is only as strong as its weakest link. Poor preprocessing ruins classification. Fast tokenization cannot compensate for a slow embedding lookup.',
      challenge: 'Optimizing the pipeline end-to-end requires understanding how each component affects downstream performance and identifying bottlenecks.',
      equations: [
        {
          latex: '\\text{Pipeline Accuracy} = \\prod_{i=1}^{n} (1 - \\text{Error Rate}_i)',
          meaning: 'Approximate end-to-end accuracy of an n-stage pipeline assuming independent errors.',
          interpretation: 'If each of 5 stages has 95% accuracy, pipeline accuracy is 0.95^5 = 77%. This shows how errors compound — each stage must be highly accurate for the pipeline to perform well.',
        },
        {
          latex: '\\text{Total Latency} = \\sum_{i=1}^{n} L_i',
          meaning: 'Total pipeline processing time is the sum of individual stage latencies.',
          interpretation: 'The slowest stage dominates the total latency. Optimization efforts should focus on the bottleneck stage first (Amdahl\'s law).',
        },
      ],
      variables: [
        { symbol: 'L_i', name: 'Stage Latency', description: 'Processing time of pipeline stage i' },
        { symbol: 'Error Rate_i', name: 'Stage Error Rate', description: 'Fraction of errors introduced by stage i' },
      ],
      charts: [
        {
          title: 'NLP Pipeline: Stage-wise Latency Breakdown',
          type: 'bar',
          data: [
            { name: 'Raw Text Load', Latency: 5 },
            { name: 'Preprocessing', Latency: 20 },
            { name: 'Tokenization', Latency: 10 },
            { name: 'Stop Word Removal', Latency: 5 },
            { name: 'TF-IDF Vectorization', Latency: 35 },
            { name: 'Classification', Latency: 15 },
            { name: 'Total Pipeline', Latency: 90 },
          ],
        },
      ],
      advantages: 'Modular pipeline design enables testing and optimization of each stage independently. Components can be swapped, upgraded, or replaced without affecting the rest of the system.',
      limitations: 'Errors propagate and compound through the pipeline. Debugging end-to-end is harder than testing individual components. Pipeline latency is limited by the slowest stage.',
    },
    activities: [
      baseActivity(
        'Design the Ultimate Pipeline',
        'Instructor leads a brainstorming session to design the optimal pipeline architecture.',
        [
          'List all available components: preprocessors, tokenizers, normalizers, vectorizers, classifiers',
          'Arrange them in the optimal order',
          'Discuss alternatives and trade-offs',
          'Vote on the best pipeline architecture',
        ],
        'Students design a pipeline collaboratively'
      ),
      baseActivity(
        'Component Swap Challenge',
        'Students swap components in a pipeline and observe the effect on end-to-end performance.',
        [
          'Start with a baseline pipeline',
          'Swap the stemmer for a lemmatizer',
          'Swap BoW for TF-IDF',
          'Observe changes in accuracy and speed',
        ],
        'Students understand component interoperability',
        '8 min'
      ),
      baseActivity(
        'Group: Debug a Broken Pipeline',
        'Groups receive a pipeline that produces poor results and must identify which component is failing.',
        [
          'Give each group a misconfigured pipeline',
          'Symptoms: 50% accuracy or very slow processing',
          'Groups systematically test each stage',
          'Identify and fix the broken component',
        ],
        'Students develop pipeline debugging skills',
        '10 min'
      ),
      baseActivity(
        'Pipeline Speed Optimization',
        'Students identify bottlenecks and propose optimizations for a slow pipeline.',
        [
          'Show timing breakdown of a slow pipeline',
          'TF-IDF takes 70% of total time — is it the bottleneck?',
          'Propose optimizations: reduce vocabulary, use hashing, parallelize',
          'Test optimizations and measure speedup',
        ],
        'Students learn performance optimization principles',
        '7 min'
      ),
    ],
    project: {
      scope: 'Build, test, and optimize a complete NLP pipeline for classifying news articles into categories (sports, technology, business, health).',
      objectives: [
        'Design a complete preprocessing-to-classification pipeline',
        'Implement each pipeline component',
        'Test the pipeline end-to-end',
        'Optimize for accuracy and speed',
      ],
      timeline: [
        { phase: 'Pipeline design', duration: '15 min', percent: 20 },
        { phase: 'Component implementation', duration: '25 min', percent: 35 },
        { phase: 'Integration testing', duration: '15 min', percent: 20 },
        { phase: 'Optimization', duration: '15 min', percent: 25 },
      ],
      teamRoles: [
        { role: 'Pipeline Architect', responsibility: 'Design the overall pipeline structure' },
        { role: 'Component Builder', responsibility: 'Implement individual pipeline stages' },
        { role: 'Integration Tester', responsibility: 'Test end-to-end and debug issues' },
        { role: 'Optimization Lead', responsibility: 'Identify bottlenecks and optimize' },
      ],
      deliverables: [
        'Pipeline architecture diagram',
        'Working pipeline implementation',
        'Test results with accuracy and speed metrics',
        'Optimization report with before/after comparisons',
        'User guide for running the pipeline on new data',
      ],
    },
    questions: [
      {
        question: 'Why does error compounding make pipeline design challenging?',
        answer: 'Each pipeline stage introduces some errors (e.g., tokenizer mistakes, wrong stop word removal, TF-IDF feature noise). These errors accumulate — a 5% error at each of 5 stages results in approximately 23% total error (0.95^5 = 0.77).',
        explanation: 'This means each stage must be highly accurate for the pipeline to perform well. Debugging which stage caused a particular error requires careful isolation testing.',
        commonMistake: 'Tuning each component independently without considering how errors propagate through the pipeline',
        tip: 'Always test your pipeline end-to-end. A component that works perfectly in isolation may fail in unexpected ways when connected to others.',
      },
      {
        question: 'How do you decide which pipeline components to include for a given task?',
        answer: 'Component selection depends on the task: sentiment analysis needs negation handling but not named entity recognition. Search needs stemming but not lemmatization. The optimal pipeline balances accuracy needs with computational constraints.',
        explanation: 'Key questions: What is the task? What is the acceptable latency? How much training data is available? What is the deployment environment?',
        tip: 'Start simple and add components only when you can demonstrate they improve results. Complexity is not always better.',
      },
      {
        question: 'What is the most common bottleneck in classical NLP pipelines?',
        answer: 'The vectorization stage (BoW/TF-IDF) is typically the bottleneck because it processes the entire vocabulary, which can be 10,000-100,000+ dimensions. This is where most memory and computation are consumed.',
        explanation: 'Feature extraction from sparse high-dimensional vectors is both memory-intensive and computation-heavy. Optimizing this stage (e.g., using hashing vectorizers or reducing vocabulary) often gives the biggest speedup.',
        tip: 'Profile your pipeline before optimizing. Guessing which component is the bottleneck is often wrong — measure, then optimize.',
      },
    ],
    virtualLab: {
      description: 'Build, test, and optimize a complete NLP pipeline with drag-and-drop components. See how each stage affects the final output and performance metrics.',
      steps: [
        'Choose a classification task (spam, sentiment, topic)',
        'Assemble pipeline components in order',
        'Configure each component\'s parameters',
        'Run the pipeline on test data',
        'View accuracy metrics and timing breakdown',
      ],
      stepDetails: [
        'Select from 3 built-in tasks with labeled datasets',
        'Drag components from a palette onto the canvas: preprocessor, tokenizer, stop word filter, stemmer, vectorizer, classifier',
        'Each component has configurable parameters accessible via double-click',
        'Pipeline execution shows progress through each stage with timing',
        'Results dashboard shows accuracy, precision, recall, F1, confusion matrix, ROC curve, and stage-wise latency breakdown',
      ],
      completionMessage: 'You have built a complete NLP pipeline! You understand how classical NLP components connect end-to-end and how to optimize them for real-world tasks.',
      dataFlow: `flowchart LR
        A[Raw Text] --> B[Text Preprocessor]
        B --> C[Tokenizer]
        C --> D[Stop Word Remover]
        D --> E[Stemmer/Lemmatizer]
        E --> F[TF-IDF Vectorizer]
        F --> G[Classifier]
        G --> H[Predictions]
        H --> I[Evaluation Metrics]`,
    },
    insights: baseInsights(
      ['Complete understanding of NLP pipelines end-to-end', 'Ability to debug and optimize real NLP systems', 'Foundation for building more complex pipelines (neural, quantum)'],
      ['Classical pipelines cannot handle complex language understanding', 'Feature engineering requires domain expertise', 'Pipeline latency grows with each component'],
      'End-to-end deep learning pipelines and quantum NLP pipelines represent the next evolution, where components are learned jointly rather than designed separately.',
      ['Production spam detection systems', 'Customer support ticket routing', 'Content moderation pipelines', 'Real-time sentiment monitoring systems'],
      'NLP pipeline engineering is a core skill for MLOps engineers, data scientists, and NLP specialists. Understanding classical pipelines is essential before moving to neural and quantum architectures.'
    ),
  },
}
