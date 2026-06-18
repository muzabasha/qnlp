import type { TopicContent } from './loader'

export const m7Content: Record<string, TopicContent> = {
  '7.1': {
    topicId: '7.1',
    learningObjective: `Understand the fundamental concept of Quantum Natural Language Processing and how it differs from classical approaches to language understanding.`,
    nextPrep: `Review the encoding techniques from Module 6 and prepare to connect them to the broader QNLP vision presented in this topic.`,
    dependencyGraph: `flowchart LR
      A[M6: Language to Quantum] --> B[7.1 What is QNLP?]
      B --> C[7.2 Evolution of QNLP]
      C --> D[7.3 Classical vs Quantum NLP]
      D --> E[7.4 QNLP Pipeline]
      E --> F[7.5 Applications]
      F --> G[7.6 Research State]
      G --> H[M8: Linguistic Foundations]`,
    storytelling: {
      story: `Imagine a translator who has spent decades learning languages the old way — memorising dictionaries, studying grammar rules by rote, and translating word by word. One day, she discovers a mysterious amulet that lets her see the meaning of a sentence as a shimmering geometric shape in the air. She realises that every sentence has a hidden shape — a diagram of meaning — and that languages are just different ways of describing the same shapes. This is the revelation at the heart of QNLP: meaning has a mathematical structure that quantum computers can manipulate natively.`,
      questions: [
        `If meaning had a physical shape, what do you think it would look like?`,
        `What does it mean for a computer to "understand" language rather than just process it?`,
        `How might seeing language as geometry change the way we think about translation between languages?`,
      ],
      connection: `QNLP is not about running existing NLP algorithms on quantum hardware. It is a fundamentally different approach that treats linguistic meaning as a mathematical structure — a diagram or a tensor network — that maps naturally onto quantum circuits. This is the key insight: language and quantum mechanics may share a common mathematical language.`,
      technicalIntro: `Quantum Natural Language Processing (QNLP) is an emerging field at the intersection of quantum computing, computational linguistics, and category theory. It proposes that the compositional structure of language — how words combine to form phrases and sentences — mirrors the compositional structure of quantum systems. In QNLP, words are represented as quantum states (or more generally, as density matrices), and grammatical rules become quantum operations. This approach was pioneered by Bob Coecke and colleagues through the DisCoCat (Distributional Compositional Categorical) framework, which combines distributional semantics (words are vectors) with compositional semantics (grammar is tensor contraction).`,
      lifeSkills: `QNLP teaches us to look for deep structural parallels between seemingly unrelated domains. The ability to find common mathematical patterns across disciplines — language, physics, computing — is a hallmark of creative problem-solving and interdisciplinary thinking.`,
    },
    mathModelling: {
      need: `A rigorous mathematical framework is required to connect linguistic composition with quantum mechanical composition.`,
      motivation: `Both language and quantum systems compose hierarchically: words combine into phrases, just as qubits combine into multi-qubit systems via tensor products.`,
      challenge: `Formalising the mapping between linguistic structures (type-logical grammars) and quantum structures (Hilbert spaces, tensor networks) in a way that preserves meaning.`,
      equations: [
        {
          latex: `\\text{Meaning}(\\text{"Alice loves Bob"}) = \\text{loves}(\\text{Alice}, \\text{Bob})`,
          meaning: `The meaning of a sentence is a function of the meanings of its parts and their grammatical combination.`,
          interpretation: `This is the principle of compositionality (Frege's principle). QNLP realises this principle using the mathematical machinery of quantum mechanics.`,
        },
        {
          latex: `S = N \\otimes S \\otimes N \\rightarrow \\text{loves}: N \\otimes N \\rightarrow S`,
          meaning: `In categorial grammar, a transitive verb has type N\\S/N (or in compact closed categories, N ⊗ S ⊗ N), meaning it consumes a subject noun on the left and an object noun on the right to produce a sentence.`,
          interpretation: `Each grammatical type corresponds to a tensor structure. The verb "loves" is a bilinear map that takes two nouns and produces a sentence — exactly like a quantum operation that takes two input states and produces an output state.`,
        },
        {
          latex: `\\llbracket \\text{sentence} \\rrbracket = \\text{EVAL} \\circ (\\llbracket \\text{verb} \\rrbracket \\otimes \\llbracket \\text{subject} \\rrbracket \\otimes \\llbracket \\text{object} \\rrbracket)`,
          meaning: `The meaning of a sentence is obtained by applying the verb (as a linear map) to the tensor product of subject and object meanings.`,
          interpretation: `This is exactly how quantum circuits work: a unitary operation acts on the tensor product of input states and produces an output state. The EVAL step corresponds to contraction (partial trace or inner product).`,
        },
      ],
      variables: [
        { symbol: `S`, name: `Sentence Type`, description: `Grammatical type of a complete sentence` },
        { symbol: `N`, name: `Noun Type`, description: `Grammatical type of a noun phrase` },
        { symbol: `\\otimes`, name: `Tensor Product`, description: `Composition operation combining grammatical types or quantum states` },
        { symbol: `\\llbracket \\cdot \\rrbracket`, name: `Semantic Interpretation`, description: `Maps a linguistic expression to its meaning in the semantic model` },
      ],
      interactive: {
        equation: `\\text{Meaning}(\\text{subj verb obj}) = \\sum_{ijk} \\text{verb}_{ijk} \\cdot \\text{subj}_i \\cdot \\text{obj}_j \\cdot \\text{grammar}^k`,
        description: `Adjust the word meaning vectors and see how the sentence meaning emerges from composition:`,
        variables: [
          { symbol: `\\text{subj}`, name: `Subject Meaning`, description: `Vector representation of the subject` },
          { symbol: `\\text{obj}`, name: `Object Meaning`, description: `Vector representation of the object` },
          { symbol: `\\text{verb}`, name: `Verb Tensor`, description: `Tensor representing the verb's action` },
        ],
        sliders: [
          { name: `s1`, label: `Subject — royal feature`, min: 0, max: 1, step: 0.1, default: 0.8 },
          { name: `s2`, label: `Subject — human feature`, min: 0, max: 1, step: 0.1, default: 0.9 },
          { name: `o1`, label: `Object — royal feature`, min: 0, max: 1, step: 0.1, default: 0.3 },
          { name: `o2`, label: `Object — human feature`, min: 0, max: 1, step: 0.1, default: 0.7 },
        ],
      },
      charts: [
        {
          title: `QNLP vs Classical NLP: Core Philosophy`,
          type: `radar`,
          data: [
            { dimension: `Compositionality`, classical: 3, qnlp: 5 },
            { dimension: `Distributional Semantics`, classical: 5, qnlp: 4 },
            { dimension: `Grammatical Structure`, classical: 2, qnlp: 5 },
            { dimension: `Quantum-native`, classical: 1, qnlp: 5 },
            { dimension: `Scalability`, classical: 5, qnlp: 2 },
            { dimension: `Hardware Readiness`, classical: 5, qnlp: 1 },
          ],
        },
        {
          title: `Tensor Network Representation of a Sentence`,
          type: `bar`,
          data: [
            { component: `Subject (N)`, qubits: 2, operations: 1 },
            { component: `Verb (N⊗S⊗N)`, qubits: 5, operations: 8 },
            { component: `Object (N)`, qubits: 2, operations: 1 },
            { component: `Sentence (S)`, qubits: 3, operations: 12 },
          ],
        },
      ],
      advantages: `QNLP provides a mathematically principled framework where compositionality is built-in rather than learned. The same tensor network structures that describe quantum circuits naturally encode grammatical relationships. This offers a path to models that generalise compositionally — combining known concepts in novel ways — without requiring massive training data.`,
      limitations: `Current quantum hardware cannot support the qubit counts needed for realistic vocabularies and sentence lengths. The DisCoCat framework remains largely theoretical or limited to small proof-of-concept experiments on simulators. Encoding real-world linguistic data into quantum states remains challenging.`,
    },
    activities: [
      {
        title: `QNLP Concept Mapping`,
        description: `Students create a visual concept map connecting QNLP to their existing knowledge of NLP and quantum computing.`,
        steps: [
          `Draw a central node labelled "QNLP"`,
          `Add branches for "NLP Concepts" and "Quantum Concepts"`,
          `Connect related ideas with labelled arrows (e.g., "word vectors" → "quantum states")`,
          `Present and explain your map to a partner`,
        ],
        materials: `Large paper sheets, markers, sticky notes`,
        timeRequired: `8 min`,
        outcomes: `Students articulate their current understanding of how QNLP bridges two domains.`,
        rubrics: `Accuracy of connections (4/5), completeness of both NLP and quantum sides (3/5)`,
      },
      {
        title: `Frege's Principle in Practice`,
        description: `Students manually compute sentence meanings using simple mathematical models to illustrate compositionality.`,
        steps: [
          `Take the sentence "Cats chase mice"`,
          `Assign 2D vectors to "cats" and "mice" (e.g., [1,0] for animate, [0,1] for small)`,
          `Define "chase" as a 2×2 matrix that transforms subject-object pairs`,
          `Multiply and interpret the resulting sentence vector`,
        ],
        materials: `Worksheet with pre-defined word vectors and verb matrices`,
        timeRequired: `10 min`,
        outcomes: `Students experience first-hand how compositionality works mathematically.`,
      },
      {
        title: `Analogy: Language as Quantum System`,
        description: `Small group discussion comparing linguistic composition with quantum system composition.`,
        steps: [
          `Form groups of 4`,
          `List 5 similarities between language and quantum systems`,
          `List 3 differences that make the analogy imperfect`,
          `Share one insight with the class`,
        ],
        timeRequired: `7 min`,
        outcomes: `Students develop critical thinking about the language-quantum analogy.`,
      },
      {
        title: `QNLP Research Paper Speed-Reading`,
        description: `Students quickly scan seminal QNLP papers and report key findings to the group.`,
        steps: [
          `Each group receives one of: Coecke (2010), Coecke et al. (2020), or Lorenz et al. (2021)`,
          `Scan for: key idea, mathematical framework, experimental results`,
          `Prepare a 2-minute summary`,
          `Present to class`,
        ],
        materials: `Pre-selected QNLP papers or extended abstracts`,
        outcomes: `Students gain exposure to the primary QNLP literature.`,
      },
    ],
    project: {
      scope: `Create an explanatory infographic or slide deck that introduces QNLP to a technically literate but non-specialist audience.`,
      objectives: [
        `Explain the core idea of QNLP using the language-quantum analogy`,
        `Include the key equation showing how sentence meaning emerges from word meanings`,
        `Compare QNLP with classical NLP on at least 3 dimensions`,
        `Discuss current limitations and future potential`,
      ],
      timeline: [
        { phase: `Research and outline`, duration: `3 min`, percent: 25 },
        { phase: `Visual design`, duration: `4 min`, percent: 35 },
        { phase: `Content writing`, duration: `3 min`, percent: 25 },
        { phase: `Review and polish`, duration: `2 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Content Lead`, responsibility: `Ensure technical accuracy of explanations` },
        { role: `Design Lead`, responsibility: `Create visual elements and layout` },
        { role: `Presenter`, responsibility: `Prepare to explain the infographic orally` },
      ],
      deliverables: [
        `One-page infographic or 3-slide deck on QNLP`,
        `List of 3 key takeaways for the audience`,
        `Q&A preparation document addressing likely questions`,
      ],
    },
    questions: [
      {
        question: `What is the fundamental insight behind the DisCoCat approach to QNLP?`,
        answer: `DisCoCat combines distributional semantics (words as vectors) with compositional semantics (grammar as tensor contraction) into a unified mathematical framework that maps naturally onto quantum circuits.`,
        explanation: `The key insight is that the compositional structure of language — how words combine into phrases and sentences — has the same mathematical form (compact closed categories) as the composition of quantum systems via tensor products and contractions.`,
        commonMistake: `Thinking QNLP is just running BERT on a quantum computer — it is a fundamentally different paradigm`,
        tip: `Focus on the structural parallel: grammatical types correspond to vector spaces, words to vectors/tensors, and sentence evaluation to tensor contraction`,
      },
      {
        question: `How does QNLP address the compositionality challenge that classical NLP faces?`,
        answer: `QNLP builds compositionality into the architecture itself through the tensor product structure, rather than trying to learn it from data as classical neural models do.`,
        explanation: `Classical models like Transformers learn compositionality implicitly through attention patterns, which requires enormous data. QNLP uses the mathematical fact that tensor contraction (the quantum analogue) naturally implements grammatical composition.`,
        commonMistake: `Assuming that because QNLP is principled, it automatically works better — current implementations are limited by hardware`,
        tip: `Think of QNLP as a hypothesis about the structure of meaning, not a production-ready technology`,
      },
    ],
    virtualLab: {
      description: `Interactive exploration of the QNLP concept — see how words combine into sentences using tensor networks, and compare with classical approaches.`,
      steps: [
        `Select a simple subject-verb-object sentence`,
        `View the grammatical type diagram`,
        `Explore the tensor network representation`,
        `See the quantum circuit equivalent`,
        `Compare with classical neural network processing`,
      ],
      stepDetails: [
        `Choose from pre-built sentences: "Cats chase mice", "Alice loves Bob", "Quantum computes magic"`,
        `The grammar diagram shows how the sentence type S is built from noun N and verb N⊗S⊗N types`,
        `The tensor network visualisation shows each word as a tensor with open legs connecting to neighbours`,
        `The quantum circuit panel shows the equivalent unitary operations and measurements`,
        `A side-by-side comparison with a Transformer's attention pattern highlights the structural differences`,
      ],
      completionMessage: `You have grasped the foundational idea of QNLP — meaning as a quantum-compatible mathematical structure!`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[Parse Tree]
        B --> C[Grammatical Types]
        C --> D[Tensor Network]
        D --> E[Quantum Circuit]
        E --> F[Computation]
        F --> G[Sentence Meaning]
        B --> H[Classical Neural Net]
        H --> I[Learned Representation]
        G --> J[Comparison]`,
    },
    insights: {
      advantages: [
        `Principled mathematical framework grounded in category theory`,
        `Compositionality is built-in, not learned`,
        `Natural mapping to quantum circuits and tensor networks`,
        `Potential for compositional generalisation without massive data`,
      ],
      disadvantages: [
        `Requires fault-tolerant quantum computers for real applications`,
        `Current implementations limited to tiny vocabularies and short sentences`,
        `Steep learning curve requiring both linguistics and quantum mechanics knowledge`,
        `Not yet demonstrated to outperform classical methods on practical tasks`,
      ],
      futureScope: `As quantum hardware matures, QNLP models will scale from toy sentences to real-world text. Hybrid quantum-classical approaches will bridge the gap, with classical embedding layers feeding into quantum composition layers. The next decade will determine whether QNLP becomes a practical technology or remains a theoretically elegant but impractical approach.`,
      industrialApplications: [
        `Compositional language understanding for AI assistants`,
        `Quantum-enhanced machine translation with grammatical guarantees`,
        `Legal document analysis requiring precise compositional interpretation`,
        `Scientific literature understanding where compositional precision matters`,
      ],
      careerRelevance: `QNLP expertise positions you at the cutting edge of two transformative fields. Research roles in quantum computing companies, AI labs, and linguistics departments increasingly seek people who understand both languages. Academic career paths in quantum linguistics are emerging.`,
    },
  },

  '7.2': {
    topicId: '7.2',
    learningObjective: `Trace the historical evolution of QNLP from categorical quantum mechanics through DisCoCat to modern quantum NLP experiments.`,
    nextPrep: `Familiarise yourself with the concept of compact closed categories before the session — a short Wikipedia read will suffice.`,
    dependencyGraph: `flowchart LR
      A[7.1 What is QNLP?] --> B[7.2 Evolution of QNLP]
      B --> C[7.3 Classical vs Quantum NLP]`,
    storytelling: {
      story: `Imagine the discovery of a new continent. First, a few explorers catch glimpses of land from their ships — these are the early theorists who first noticed that category theory might connect language and quantum mechanics. Then, daring adventurers land on the shore and map the coastline — these are the researchers who developed the DisCoCat framework. Today, we are building the first settlements, running small experiments on quantum simulators. You are not reading about this exploration in a history book — you are part of the expedition. This module tells the story of how we got here and where we are heading.`,
      questions: [
        `What enables a new scientific field to emerge and grow?`,
        `Why did it take nearly a decade from the theoretical foundations to the first QNLP experiments?`,
        `What conditions are necessary for QNLP to transition from theory to practice?`,
      ],
      connection: `Understanding the evolution of QNLP reveals that it is not a sudden invention but the convergence of multiple research threads: categorical quantum mechanics (Abramsky, Coecke), distributional semantics (Mitchell, Lapata), and compositional linguistics (Lambek, Pregroups). Each thread on its own was interesting; their braiding together created QNLP.`,
      technicalIntro: `The evolution of QNLP spans roughly 15 years. Key milestones include: 2004 — Lambek pregroup grammars provide a compact closed category for syntax; 2008 — Coecke, Sadrzadeh, and Clark combine pregroups with vector spaces to create DisCoCat; 2010 — the first theoretical papers on meaning as tensor contraction; 2016 — the first quantum experiments using IBM's Qiskit to implement DisCoCat on real quantum hardware; 2020 — the lambeq Python library makes QNLP programming accessible; 2023 — the first experiments showing quantum advantage for certain linguistic tasks on simulated near-term devices.`,
      lifeSkills: `The evolution of QNLP is a masterclass in interdisciplinary innovation. It shows that breakthrough ideas often emerge at the intersection of fields, not within them. Cultivating breadth alongside depth — knowing enough category theory, linguistics, and quantum mechanics to connect them — is a career superpower.`,
    },
    mathModelling: {
      need: `Understanding the evolution of QNLP requires mathematical appreciation of how each stage built upon the previous one.`,
      motivation: `Each development in QNLP addressed a specific limitation: Lambek's pregroups solved syntactic composition, vector semantics solved word meaning, and quantum mechanics provides the computational engine.`,
      challenge: `Modelling the progression from purely symbolic grammars to fully quantum-computable meaning representations.`,
      equations: [
        {
          latex: `G \\vdash w_1, w_2, ..., w_n \\rightarrow \\text{type}(w_1) \\cdot \\text{type}(w_2) \\cdot ... \\cdot \\text{type}(w_n) \\leq S`,
          meaning: `A Lambek pregroup grammar: a sequence of word types reduces to the sentence type S through contraction rules.`,
          interpretation: `Each word is assigned a pregroup type. The grammaticality of a sentence is verified by reducing the product of types to S using the contraction rules of the pregroup. This is purely syntactic — no meaning yet.`,
        },
        {
          latex: `\\llbracket w \\rrbracket \\in \\mathbb{R}^d`,
          meaning: `Distributional semantics assigns each word w a d-dimensional vector based on co-occurrence statistics.`,
          interpretation: `This captures word meaning empirically from data but loses all compositional structure — words are independent points in space.`,
        },
        {
          latex: `\\text{DisCoCat}: \\quad \\llbracket \\text{sentence} \\rrbracket = \\sum_{i_1, ..., i_k} C_{i_1, ..., i_k} \\cdot \\llbracket w_1 \\rrbracket_{i_1} \\otimes ... \\otimes \\llbracket w_n \\rrbracket_{i_n}`,
          meaning: `DisCoCat combines pregroup types and vector meanings: the contraction pattern of the grammar determines how word vectors are composed via tensor contraction.`,
          interpretation: `The grammatical structure tells you which vector indices to contract — this is exactly the same mathematical operation as tracing out subsystems in quantum mechanics.`,
        },
      ],
      variables: [
        { symbol: `G`, name: `Pregroup Grammar`, description: `Algebraic structure for modelling grammatical types` },
        { symbol: `\\leq`, name: `Pregroup Reduction`, description: `Type reduction relation in pregroup grammars` },
        { symbol: `\\llbracket w \\rrbracket`, name: `Word Meaning`, description: `Vector or tensor representing a word's meaning` },
        { symbol: `C_{i_1,...,i_k}`, name: `Contraction Pattern`, description: `Tensor determined by the grammatical structure` },
      ],
      interactive: {
        equation: `\\llbracket \\text{sentence} \\rrbracket = \\sum_{i} \\llbracket \\text{subj} \\rrbracket_i \\cdot \\llbracket \\text{verb} \\rrbracket^{ij} \\cdot \\llbracket \\text{obj} \\rrbracket_j`,
        description: `Adjust word vectors and see how the DisCoCat contraction produces the sentence meaning:`,
        variables: [
          { symbol: `\\llbracket \\text{subj} \\rrbracket`, name: `Subject Vector`, description: `Distributional meaning of the subject` },
          { symbol: `\\llbracket \\text{verb} \\rrbracket`, name: `Verb Matrix`, description: `Distributional meaning of the verb as a linear map` },
          { symbol: `\\llbracket \\text{obj} \\rrbracket`, name: `Object Vector`, description: `Distributional meaning of the object` },
        ],
        sliders: [
          { name: `subj1`, label: `Subject — animate`, min: 0, max: 1, step: 0.1, default: 0.9 },
          { name: `subj2`, label: `Subject — agentive`, min: 0, max: 1, step: 0.1, default: 0.7 },
          { name: `obj1`, label: `Object — animate`, min: 0, max: 1, step: 0.1, default: 0.4 },
          { name: `obj2`, label: `Object — patient`, min: 0, max: 1, step: 0.1, default: 0.8 },
        ],
      },
      charts: [
        {
          title: `QNLP Evolution Timeline — Key Milestones`,
          type: `bar`,
          data: [
            { year: `2004`, milestone: `Pregroup Grammars`, impact: 3 },
            { year: `2008`, milestone: `DisCoCat Framework`, impact: 5 },
            { year: `2010`, milestone: `Tensor Meanings`, impact: 4 },
            { year: `2016`, milestone: `First Quantum Experiment`, impact: 5 },
            { year: `2020`, milestone: `Lambeq Library`, impact: 4 },
            { year: `2023`, milestone: `Quantum Advantage Claims`, impact: 3 },
          ],
        },
        {
          title: `Citation Growth in QNLP Research`,
          type: `line`,
          data: [
            { year: `2008`, papers: 2, citations: 15 },
            { year: `2010`, papers: 5, citations: 45 },
            { year: `2012`, papers: 8, citations: 120 },
            { year: `2016`, papers: 20, citations: 350 },
            { year: `2020`, papers: 45, citations: 890 },
            { year: `2024`, papers: 120, citations: 2400 },
          ],
        },
      ],
      advantages: `Understanding the evolution provides context for current challenges and future directions. Each component — pregroup grammars, distributional semantics, quantum mechanics — contributes essential ideas that no single classical approach captures.`,
      limitations: `The evolution has been largely theoretical. Experimental validation lags behind theory because quantum hardware has not kept pace with theoretical developments. Many beautiful ideas await practical implementation.`,
    },
    activities: [
      {
        title: `Timeline Construction`,
        description: `Students construct a physical timeline of QNLP evolution using cards and string.`,
        steps: [
          `Receive cards with key QNLP milestones and dates`,
          `Arrange them in chronological order on a wall using string`,
          `Add arrows showing influence between milestones`,
          `Identify and discuss the gaps between theory and experiment`,
        ],
        materials: `Pre-printed milestone cards, string, pins or tape`,
        timeRequired: `8 min`,
        outcomes: `Students internalise the chronological development of QNLP.`,
      },
      {
        title: `Paper Analysis: 2008 vs 2020`,
        description: `Compare the original DisCoCat paper with a modern QNLP implementation paper.`,
        steps: [
          `Read the abstract and contributions of Coecke et al. (2008)`,
          `Read the abstract of Lorenz et al. (2020) on lambeq`,
          `Identify what changed in the approach over 12 years`,
          `Discuss what enabled the progress`,
        ],
        materials: `Excerpts from both papers`,
        outcomes: `Students understand how QNLP evolved from pure theory to practical toolkit.`,
      },
      {
        title: `DisCoCat Worked Example`,
        description: `Step-by-step manual computation of a DisCoCat sentence meaning.`,
        steps: [
          `Parse "Alice loves Bob" using pregroup types`,
          `Assign vectors to "Alice" and "Bob"`,
          `Construct the verb tensor for "loves"`,
          `Perform the tensor contraction and interpret the result`,
        ],
        materials: `Worked example worksheet`,
        outcomes: `Students understand the mechanics of DisCoCat composition.`,
      },
      {
        title: `Future Timeline Prediction`,
        description: `Groups predict the next 5 years of QNLP evolution.`,
        steps: [
          `Review the current state of QNLP (2024-2025)`,
          `Predict 3 milestones for 2025-2030`,
          `Justify predictions based on hardware and theory trends`,
          `Present and vote on the most plausible prediction`,
        ],
        outcomes: `Students engage with future-oriented thinking about the field.`,
      },
    ],
    project: {
      scope: `Create a visual timeline poster of QNLP evolution with key papers, people, experiments, and predictions for the future.`,
      objectives: [
        `Identify at least 8 key milestones from 2004 to present`,
        `Include the key contribution of each milestone`,
        `Show influence relationships between milestones`,
        `Add a "future predictions" section with justification`,
      ],
      timeline: [
        { phase: `Research milestones`, duration: `3 min`, percent: 30 },
        { phase: `Design layout`, duration: `3 min`, percent: 30 },
        { phase: `Create content`, duration: `3 min`, percent: 30 },
        { phase: `Review`, duration: `1 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Historian`, responsibility: `Verify milestone dates and contributions` },
        { role: `Designer`, responsibility: `Create visual timeline layout` },
        { role: `Futurist`, responsibility: `Research and justify future predictions` },
      ],
      deliverables: [
        `Visual timeline poster (digital or physical)`,
        `Accompanying reference list with papers`,
        `Written predictions for QNLP evolution 2025-2030`,
      ],
    },
    questions: [
      {
        question: `What problem did Lambek's pregroup grammars solve that made DisCoCat possible?`,
        answer: `Pregroup grammars provided a compact closed category structure for syntax, which is exactly the mathematical structure needed to compose vector meanings using tensor contraction.`,
        explanation: `The pregroup assigns each word a type that determines how it combines with neighbours. This type structure forms a compact closed category — the same structure that describes quantum processes. DisCoCat uses this categorical structure to guide the contraction of word vectors.`,
        commonMistake: `Thinking pregroup grammars are just another syntactic formalism — their categorical structure is what makes them special for QNLP`,
        tip: `The key property is that pregroups form a compact closed category, providing a direct bridge to quantum mechanics`,
      },
      {
        question: `Why did it take from 2008 to 2016 to run the first quantum experiment based on DisCoCat?`,
        answer: `The gap was due to the need for accessible quantum hardware (IBM Quantum Experience launched in 2016) and the translation of DisCoCat diagrams into executable quantum circuits.`,
        explanation: `The theoretical framework was complete by 2010, but implementing it required: (1) quantum hardware or sophisticated simulators, (2) translating categorical diagrams into actual quantum gates, and (3) encoding word vectors as quantum states — each a significant engineering challenge.`,
        commonMistake: `Assuming the theory-to-experiment gap indicates a flaw in the theory — it simply reflects hardware limitations`,
        tip: `The 8-year gap illustrates that fundamental new computing paradigms require both theoretical breakthroughs AND engineering infrastructure`,
      },
    ],
    virtualLab: {
      description: `Interactive timeline of QNLP evolution — click through milestones to see key papers, people, and the mathematical developments at each stage.`,
      steps: [
        `Explore the timeline from 2004 to present`,
        `Click each milestone to see details`,
        `View the mathematical development at each stage`,
        `See how each milestone connects to the next`,
        `Add your own predicted milestones for the future`,
      ],
      stepDetails: [
        `The interactive timeline spans 2004 to 2028 (including predictions), with colour-coded categories: theory (blue), software (green), hardware (orange)`,
        `Each milestone card expands to show: key paper, authors, mathematical contribution, and impact on QNLP development`,
        `The mathematical panel shows the equations that were introduced at each stage — from pregroup reduction rules to quantum circuit decompositions`,
        `Arrows between milestones are labelled with the nature of the connection (e.g., "provides categorical structure for", "enables implementation of")`,
        `The predictions section allows students to add their own milestones with justifications, which are saved locally`,
      ],
      completionMessage: `You have traced the complete evolution of QNLP from category theory to quantum circuits!`,
      dataFlow: `flowchart LR
        A[2004: Pregroups] --> B[2008: DisCoCat]
        B --> C[2010: Tensor Meanings]
        C --> D[2016: First Quantum Expt]
        D --> E[2020: Lambeq]
        E --> F[2023: Quantum Advantage]
        F --> G[2025+: Predictions]
        B --> H[Category Theory]
        H --> I[Quantum Circuits]
        I --> D`,
    },
    insights: {
      advantages: [
        `Rich intellectual history connecting multiple disciplines`,
        `Each stage of evolution addressed a specific limitation of the previous`,
        `Clear trajectory from pure mathematics toward practical implementation`,
        `Growing community and tooling support the next generation of researchers`,
      ],
      disadvantages: [
        `Progress has been slow — 15+ years from theory to toy experiments`,
        `Quantum hardware development is the bottleneck, not theory`,
        `Many researchers from linguistics or quantum alone find the full picture inaccessible`,
        `Citation growth does not yet match practical impact`,
      ],
      futureScope: `The evolution of QNLP is accelerating. With improved quantum hardware, the 2025-2030 period will likely see the first practical QNLP demonstrations on real hardware. The convergence of QNLP with quantum machine learning and quantum natural language processing will create new hybrid approaches that neither field alone could produce.`,
      industrialApplications: [
        `Timeline analysis for understanding technology evolution in any field`,
        `Roadmapping for emerging technology investments`,
        `Historical analysis tools for research planning`,
        `Educational content for quantum computing courses`,
      ],
      careerRelevance: `Understanding how a field evolves from pure theory to practical application is invaluable for technology strategy roles, research management, and investment analysis in deep tech. It also provides the context needed to identify where the next breakthroughs will occur.`,
    },
  },

  '7.3': {
    topicId: '7.3',
    learningObjective: `Compare and contrast classical NLP approaches with quantum NLP approaches across multiple dimensions including representation, computation, and scalability.`,
    nextPrep: `Review the key limitations of Transformers (quadratic attention, lack of compositional generalisation) from Module 3 and Module 4.`,
    dependencyGraph: `flowchart LR
      A[7.1 What is QNLP?] --> B[7.2 Evolution]
      B --> C[7.3 Classical vs Quantum NLP]
      C --> D[7.4 QNLP Pipeline]`,
    storytelling: {
      story: `Imagine two architects asked to build a cathedral. The classical architect brings millions of identical bricks and builds by stacking them one by one — sturdy, reliable, but requiring enormous material and labour. The quantum architect brings a set of interlocking geometric blocks that each encode complex shapes — fewer blocks are needed, but they require precise alignment and specialised knowledge to assemble. Both can build cathedrals, but their approaches differ fundamentally in materials, methods, and what kinds of cathedrals they can build. Classical NLP is the brick-by-brick approach (scalable, proven, but hitting limits). QNLP is the geometric-block approach (elegant, potentially powerful, but not yet ready for large-scale construction).`,
      questions: [
        `What are the trade-offs between a scalable but brute-force approach and a principled but hardware-limited approach?`,
        `In what scenarios might quantum NLP outperform classical even with limited qubits?`,
        `Could classical and quantum NLP be combined to get the best of both?`,
      ],
      connection: `Classical and quantum NLP are not competitors in a zero-sum race — they are different tools for different aspects of the language understanding problem. Classical NLP excels at broad-coverage statistical patterns from large data. QNLP excels at structurally precise compositional reasoning. The future likely involves hybrid systems.`,
      technicalIntro: `Classical NLP, particularly Transformer-based models, operates on principles of statistical pattern recognition learned from massive text corpora. They use dense vectors (word embeddings), attention mechanisms, and deep neural networks. Their power comes from scale — more data, more parameters, more compute. QNLP, in contrast, operates on principles of compositional structure, using grammatical types to guide the composition of meaning representations through tensor networks and quantum circuits. Its power comes from mathematical structure rather than scale. Key comparison dimensions: representational capacity, sample efficiency, compositional generalisation, computational complexity, and hardware requirements.`,
      lifeSkills: `The classical-vs-quantum comparison teaches a meta-lesson: every approach has fundamental trade-offs. Understanding these trade-offs — rather than blindly advocating one approach — is the mark of a mature technologist. The best solution often combines multiple paradigms.`,
    },
    mathModelling: {
      need: `A rigorous comparison requires quantifying the strengths and limitations of each paradigm across multiple dimensions.`,
      motivation: `Without clear comparison criteria, the debate between classical and quantum NLP remains anecdotal. We need mathematical metrics for expressivity, sample complexity, and computational cost.`,
      challenge: `Comparing two paradigms that use fundamentally different mathematical frameworks and are at different stages of technological maturity.`,
      equations: [
        {
          latex: `C_{\\text{classical}} = O(L \\cdot n^2 \\cdot d + L \\cdot n \\cdot d^2)`,
          meaning: `Computational cost of a classical Transformer with L layers, sequence length n, and hidden dimension d.`,
          interpretation: `The quadratic term in n (attention) and the quadratic term in d (feedforward) dominate. Doubling the sequence length quadruples the cost. For d=4096 and n=8192, this is trillions of operations per forward pass.`,
        },
        {
          latex: `C_{\\text{quantum}} = O(\\text{poly}(\\log N) \\cdot \\text{poly}(1/\\epsilon))`,
          meaning: `Computational cost of certain quantum NLP operations scales polynomially in the logarithm of the data size and inverse error tolerance.`,
          interpretation: `For data of size N, quantum algorithms can potentially scale as O(poly(log N)) rather than O(poly(N)). This exponential speedup is the holy grail — but achieving it requires fault-tolerant quantum computers.`,
        },
        {
          latex: `\\text{CSQA}_{\\text{classical}} = \\frac{\\text{Correct}_{\\text{seen}}}{\\text{Total}_{\\text{seen}}} \\gg \\frac{\\text{Correct}_{\\text{novel}}}{\\text{Total}_{\\text{novel}}} = \\text{CSQA}_{\\text{novel}}`,
          meaning: `Classical models perform much better on compositional tasks when the compositions are seen during training versus novel compositions (compositional generalisation gap).`,
          interpretation: `This gap — the failure to systematically generalise — is a well-documented limitation of neural models (e.g., the COGS benchmark). QNLP's built-in compositionality theoretically eliminates this gap.`,
        },
      ],
      variables: [
        { symbol: `L`, name: `Number of Layers`, description: `Depth of the Transformer model` },
        { symbol: `n`, name: `Sequence Length`, description: `Number of tokens in the input` },
        { symbol: `d`, name: `Hidden Dimension`, description: `Size of the model's hidden states` },
        { symbol: `\\epsilon`, name: `Error Tolerance`, description: `Acceptable error in quantum computation` },
        { symbol: `N`, name: `Data Size`, description: `Size of the dataset or vocabulary` },
      ],
      interactive: {
        equation: `C_{\\text{classical}} = L \\cdot n^2 \\cdot d, \\quad C_{\\text{quantum}} = \\log_2(N) \\cdot \\log_2(1/\\epsilon)`,
        description: `Compare classical and quantum computational costs as parameters vary:`,
        variables: [
          { symbol: `n`, name: `Sequence Length`, description: `Number of tokens` },
          { symbol: `d`, name: `Model Dimension`, description: `Hidden size of the model` },
          { symbol: `N`, name: `Vocabulary Size`, description: `Size of the word vocabulary` },
        ],
        sliders: [
          { name: `n`, label: `Sequence Length (n)`, min: 8, max: 1024, step: 8, default: 128 },
          { name: `d`, label: `Hidden Dim (d)`, min: 64, max: 4096, step: 64, default: 512 },
          { name: `N`, label: `Vocabulary (N)`, min: 100, max: 100000, step: 100, default: 10000 },
        ],
      },
      charts: [
        {
          title: `Classical vs Quantum: Computational Cost Scaling`,
          type: `line`,
          data: [
            { name: `128`, classical: 8.4e6, quantum: 14 },
            { name: `256`, classical: 3.4e7, quantum: 15 },
            { name: `512`, classical: 1.3e8, quantum: 16 },
            { name: `1024`, classical: 5.4e8, quantum: 17 },
            { name: `2048`, classical: 2.1e9, quantum: 18 },
            { name: `4096`, classical: 8.6e9, quantum: 19 },
          ],
        },
        {
          title: `Compositional Generalisation Comparison`,
          type: `bar`,
          data: [
            { task: `Seen Compositions`, classical: 92, qnlp: 100 },
            { task: `Novel Compositions`, classical: 48, qnlp: 100 },
            { task: `Length Generalisation`, classical: 35, qnlp: 95 },
            { task: `Discontiguous Patterns`, classical: 42, qnlp: 90 },
            { task: `Hierarchical Structures`, classical: 55, qnlp: 98 },
          ],
        },
      ],
      advantages: `QNLP offers theoretical advantages in compositional generalisation (eliminating the generalisation gap), sample efficiency (requiring less data due to built-in structure), and computational complexity for certain operations (logarithmic vs polynomial). Classical NLP offers proven scalability, immediate applicability, and a mature ecosystem.`,
      limitations: `Classical NLP is constrained by quadratic attention costs, poor compositional generalisation, and enormous data requirements. QNLP is constrained by limited quantum hardware, small-scale demonstrations, and the challenge of encoding real-world linguistic diversity into mathematical structures. Neither approach currently solves the full language understanding problem.`,
    },
    activities: [
      {
        title: `Comparison Matrix Construction`,
        description: `Students collaboratively build a comparison matrix of classical and quantum NLP across 10 dimensions.`,
        steps: [
          `Divide into groups, each responsible for 2-3 comparison dimensions`,
          `Research and discuss your assigned dimensions`,
          `Present findings to the class`,
          `Build a master comparison matrix on the whiteboard`,
        ],
        materials: `Comparison framework template, research references`,
        timeRequired: `12 min`,
        outcomes: `Students develop a systematic understanding of the trade-offs between paradigms.`,
      },
      {
        title: `Compositional Generalisation Experiment`,
        description: `Students test a small classical model on compositional generalisation and compare with the theoretical QNLP prediction.`,
        steps: [
          `Train a small RNN on seen compositional patterns (e.g., "red square", "blue triangle")`,
          `Test on novel compositions ("red triangle", "blue square")`,
          `Observe the generalisation gap`,
          `Discuss how QNLP would handle this differently`,
        ],
        materials: `Jupyter notebook with a simple compositional task`,
        outcomes: `Students empirically observe the compositional generalisation problem.`,
      },
      {
        title: `Debate: Classical vs Quantum Championship`,
        description: `Structured debate where teams argue for classical or quantum NLP supremacy.`,
        steps: [
          `Form two teams: classical and quantum`,
          `Each team prepares 3 arguments with evidence`,
          `Debate for 5 minutes with rebuttals`,
          `Class votes on which team made the stronger case`,
        ],
        outcomes: `Students critically engage with the strengths and weaknesses of each paradigm.`,
      },
      {
        title: `Hybrid Architecture Brainstorm`,
        description: `Groups design a hybrid classical-quantum NLP architecture and present the design.`,
        steps: [
          `Identify which parts of an NLP pipeline suit each paradigm`,
          `Design the interface between classical and quantum components`,
          `Sketch the architecture diagram`,
          `Present and receive feedback`,
        ],
        outcomes: `Students think creatively about combining paradigms.`,
      },
    ],
    project: {
      scope: `Write a comparative analysis report evaluating classical and quantum NLP approaches for a specific language task (e.g., sentiment analysis, machine translation, question answering).`,
      objectives: [
        `Select a specific NLP task and describe its requirements`,
        `Design a classical approach and estimate its resource needs`,
        `Design a quantum approach using DisCoCat principles`,
        `Compare on: accuracy potential, data requirements, computational cost, and hardware feasibility`,
      ],
      timeline: [
        { phase: `Task selection and analysis`, duration: `2 min`, percent: 20 },
        { phase: `Classical approach design`, duration: `3 min`, percent: 30 },
        { phase: `Quantum approach design`, duration: `3 min`, percent: 30 },
        { phase: `Comparison and write-up`, duration: `2 min`, percent: 20 },
      ],
      teamRoles: [
        { role: `Classical Architect`, responsibility: `Design classical approach` },
        { role: `Quantum Architect`, responsibility: `Design quantum approach` },
        { role: `Analyst`, responsibility: `Conduct comparison and write conclusions` },
      ],
      deliverables: [
        `Comparative analysis report (1-2 pages)`,
        `Architecture diagrams for both approaches`,
        `Recommendation with justification`,
      ],
    },
    questions: [
      {
        question: `What is the compositional generalisation gap and why does it favour QNLP?`,
        answer: `The compositional generalisation gap is the performance difference between classical models on seen vs novel compositions of known concepts. QNLP eliminates this gap because composition is built into the architecture via tensor contraction.`,
        explanation: `Classical neural models learn compositional patterns statistically from data, so they fail when test compositions differ from training. QNLP uses grammatical structure to determine composition, so any grammatically valid composition of known words produces a meaningful sentence meaning by construction.`,
        commonMistake: `Assuming that larger classical models will eventually close the generalisation gap — current evidence suggests it is a fundamental architectural limitation`,
        tip: `Think of it this way: classical models learn that "red" modifies nouns; QNLP knows that adjectives modify nouns because of the grammatical type structure`,
      },
      {
        question: `What is the main computational advantage of quantum NLP over classical Transformers?`,
        answer: `QNLP operations scale logarithmically with vocabulary size, whereas Transformer attention scales quadratically with sequence length, making quantum approaches potentially exponentially more efficient for certain operations.`,
        explanation: `A Transformer processing a 1024-token sequence with d=512 performs roughly 5×10⁸ operations per layer. A quantum circuit encoding the same information could theoretically operate in O(poly(log N)) time due to superposition and entanglement. However, this advantage requires fault-tolerant hardware.`,
        commonMistake: `Claiming quantum NLP is "faster" in general — the advantage is task-specific and depends on hardware maturity`,
        tip: `The quantum advantage comes from parallel processing through superposition, not from faster clock speeds. It is a different kind of parallelism.`,
      },
    ],
    virtualLab: {
      description: `Interactive comparison lab showing classical and quantum NLP approaches side by side on the same language tasks with real-time metrics.`,
      steps: [
        `Select a language task (sentiment, classification, or composition)`,
        `View the classical NLP pipeline with live metrics`,
        `View the quantum NLP pipeline with the same input`,
        `Compare results, resource usage, and scaling behaviour`,
        `Explore hybrid configurations`,
      ],
      stepDetails: [
        `Choose from 3 tasks: sentiment analysis of a sentence, word similarity comparison, or compositional sentence meaning construction`,
        `The classical pipeline shows embedding → attention → classification with step-by-step cost breakdowns (FLOPs, memory, latency)`,
        `The quantum pipeline shows encoding → circuit → measurement with qubit counts, circuit depth, and estimated noise impact`,
        `The comparison dashboard updates live with bar charts for: time, memory, accuracy, and scalability as input complexity grows`,
        `The hybrid tab lets you mix classical embedding with quantum composition and see the resulting trade-offs`,
      ],
      completionMessage: `You have completed a systematic comparison of classical and quantum NLP paradigms!`,
      dataFlow: `flowchart LR
        A[Input Text] --> B{Paradigm}
        B --> C[Classical Pipeline]
        B --> D[Quantum Pipeline]
        C --> E[Embed → Attend → Classify]
        D --> F[Encode → Circuit → Measure]
        E --> G[Metrics Dashboard]
        F --> G
        G --> H[Comparison View]
        H --> I[Hybrid Configurator]`,
    },
    insights: {
      advantages: [
        `Principled comparison framework applicable beyond NLP`,
        `Clear identification of each paradigm's strengths and weaknesses`,
        `Understanding of why hybrid approaches are inevitable`,
        `Appreciation for the different notions of "scaling" (data vs structure)`,
      ],
      disadvantages: [
        `Comparison is inherently asymmetrical — classical NLP is mature, QNLP is emerging`,
        `Hard to compare metrics that are not directly commensurable`,
        `Theoretical QNLP advantages have not been empirically validated at scale`,
      ],
      futureScope: `The comparison paradigm will shift as quantum hardware matures. Within 5 years, we may see head-to-head comparisons on real hardware for specific tasks. The most productive direction is hybrid architectures that use classical models for broad coverage and quantum modules for precise compositional reasoning.`,
      industrialApplications: [
        `Decision framework for choosing NLP architecture based on task requirements`,
        `Technology assessment for NLP infrastructure investments`,
        `Research direction identification for quantum computing companies`,
        `Educational tool for teaching comparative technology analysis`,
      ],
      careerRelevance: `The ability to evaluate and compare fundamentally different technological approaches is valuable for CTOs, technology strategists, research leads, and consultants advising on AI infrastructure. It is a meta-skill that transcends any single technology.`,
    },
  },

  '7.4': {
    topicId: '7.4',
    learningObjective: `Identify and describe each component of a complete QNLP pipeline, from text input to quantum output.`,
    nextPrep: `Review the lambeq library documentation online — familiarise yourself with its pipeline components before the session.`,
    dependencyGraph: `flowchart LR
      A[7.3 Classical vs Quantum] --> B[7.4 QNLP Pipeline]
      B --> C[7.5 Applications]
      B --> D[M8: Linguistic Foundations]`,
    storytelling: {
      story: `Think of a QNLP pipeline like a sophisticated chocolate factory. Raw cocoa beans (raw text) enter one end. They go through cleaning (preprocessing), roasting (parsing), grinding (encoding), conching (quantum processing), and finally tempering and moulding (measurement and interpretation). At each stage, the cocoa is transformed — from bitter bean to silky chocolate. A QNLP pipeline transforms raw language into quantum-computed meaning through a series of carefully designed stages. Unlike a classical NLP pipeline where each stage is a learned neural network, each stage in a QNLP pipeline has a precise mathematical or grammatical justification.`,
      questions: [
        `What would happen if you rearranged the stages of a QNLP pipeline?`,
        `Which stage do you think is the most challenging to implement on current hardware?`,
        `How does the QNLP pipeline differ from a classical NLP pipeline in terms of what each stage contributes?`,
      ],
      connection: `The pipeline is the bridge between theory and practice in QNLP. Each component translates a theoretical idea into a concrete computational step. Understanding the pipeline is essential for anyone who wants to implement QNLP, not just study it.`,
      technicalIntro: `A complete QNLP pipeline consists of six stages: (1) Text Preprocessing — tokenisation, lemmatisation, part-of-speech tagging; (2) Parsing — converting text into a grammatical structure (dependency parse or pregroup derivation); (3) Word Encoding — mapping each word to its distributional vector (classical or quantum); (4) Composition — applying the DisCoCat contraction pattern to combine word vectors into a sentence meaning (implemented as a quantum circuit); (5) Quantum Execution — running the resulting circuit on a quantum simulator or hardware; (6) Post-processing — interpreting measurement outcomes as task-specific outputs (classification, similarity, generation). The lambeq library implements this pipeline end-to-end.`,
      lifeSkills: `Pipeline thinking — breaking complex processes into sequential stages with clear inputs and outputs — is a fundamental engineering skill. It applies to software development, manufacturing, business processes, and even personal productivity. Understanding the QNLP pipeline is training in structured systems thinking.`,
    },
    mathModelling: {
      need: `Each pipeline stage must be mathematically well-defined so that it can be implemented as a reproducible computational process.`,
      motivation: `Without a clear pipeline model, QNLP implementations would be ad hoc and not generalisable across different tasks and sentences.`,
      challenge: `Designing pipeline stages that are individually tractable, composable into a coherent whole, and implementable on near-term quantum hardware.`,
      equations: [
        {
          latex: `\\text{Pipeline}(\\text{text}) = \\text{PostProcess} \\circ \\text{QuantumExec} \\circ \\text{Compose} \\circ \\text{Encode} \\circ \\text{Parse} \\circ \\text{Preprocess}`,
          meaning: `The QNLP pipeline is a composition of functions, each transforming data from one representation to another.`,
          interpretation: `This functional composition mirrors the grammatical composition the pipeline is designed to process — the pipeline itself is compositional. Each stage has clear mathematical semantics.`,
        },
        {
          latex: `\\text{Parse}: \\text{Sentence} \\rightarrow \\text{StringDiagram}`,
          meaning: `The parsing stage converts a sentence into a string diagram — a graphical representation of its grammatical structure.`,
          interpretation: `The string diagram is a topological representation where words are boxes connected by wires representing grammatical types. This diagram encodes exactly how meaning will flow through the quantum circuit.`,
        },
        {
          latex: `\\text{Compose} = \\text{Ansatz}(\\text{StringDiagram}, \\Theta)`,
          meaning: `The composition stage maps the string diagram to a parameterised quantum circuit (ansatz) with trainable parameters Θ.`,
          interpretation: `The string diagram determines the connectivity of the quantum circuit (which qubits interact), while the parameters Θ encode the specific word meanings that can be learned from data.`,
        },
      ],
      variables: [
        { symbol: `\\text{Pipeline}`, name: `Full QNLP Pipeline`, description: `End-to-end function from text to output` },
        { symbol: `\\text{StringDiagram}`, name: `String Diagram`, description: `Topological representation of grammatical structure` },
        { symbol: `\\text{Ansatz}`, name: `Circuit Ansatz`, description: `Parameterised quantum circuit template` },
        { symbol: `\\Theta`, name: `Trainable Parameters`, description: `Parameters encoding word meanings, learned from data` },
      ],
      interactive: {
        equation: `\\ket{\\psi_{\\text{sentence}}} = U_{\\text{compose}}(\\Theta) \\cdot \\bigotimes_i \\ket{w_i(\\theta_i)}`,
        description: `Explore how each pipeline stage transforms the representation:`,
        variables: [
          { symbol: `\\ket{w_i}`, name: `Word States`, description: `Encoded quantum states for each word` },
          { symbol: `U_{\\text{compose}}`, name: `Composition Circuit`, description: `Quantum circuit implementing grammatical composition` },
          { symbol: `\\Theta`, name: `Parameters`, description: `Trainable parameters for word meanings` },
        ],
        sliders: [
          { name: `theta1`, label: `Word 1 Parameter`, min: 0, max: 2, step: 0.1, default: 0.5 },
          { name: `theta2`, label: `Word 2 Parameter`, min: 0, max: 2, step: 0.1, default: 1.2 },
          { name: `theta3`, label: `Word 3 Parameter`, min: 0, max: 2, step: 0.1, default: 0.8 },
        ],
      },
      charts: [
        {
          title: `Pipeline Stage Resource Requirements`,
          type: `bar`,
          data: [
            { stage: `Preprocessing`, classical_ops: 100, quantum_gates: 0, time_ms: 0.5 },
            { stage: `Parsing`, classical_ops: 5000, quantum_gates: 0, time_ms: 10 },
            { stage: `Encoding`, classical_ops: 300, quantum_gates: 50, time_ms: 5 },
            { stage: `Composition`, classical_ops: 0, quantum_gates: 500, time_ms: 100 },
            { stage: `Execution`, classical_ops: 0, quantum_gates: 500, time_ms: 200 },
            { stage: `PostProcess`, classical_ops: 100, quantum_gates: 0, time_ms: 1 },
          ],
        },
        {
          title: `Pipeline Information Flow — Representation Size`,
          type: `line`,
          data: [
            { stage: `Raw Text`, dimensions: 100, entanglement: 0 },
            { stage: `Tokenised`, dimensions: 50, entanglement: 0 },
            { stage: `Parsed`, dimensions: 200, entanglement: 0.2 },
            { stage: `Encoded`, dimensions: 1024, entanglement: 0.5 },
            { stage: `Composed`, dimensions: 4096, entanglement: 0.9 },
            { stage: `Measured`, dimensions: 8, entanglement: 0 },
          ],
        },
      ],
      advantages: `The pipeline provides a clear, modular architecture where each stage can be studied, optimised, and replaced independently. The lambeq library implements this pipeline, so students can go from text to quantum circuit in a few lines of Python. The functional composition mirrors linguistic composition, creating conceptual coherence.`,
      limitations: `Each pipeline stage introduces approximations and information loss. The parsing stage depends on the quality of the grammar and parser. The encoding stage loses information through normalisation and discretisation. The quantum execution stage is noisy on current hardware. End-to-end error accumulation is a significant challenge.`,
    },
    activities: [
      {
        title: `Pipeline Stage Identification`,
        description: `Given a working QNLP system, students identify each pipeline stage and its inputs/outputs.`,
        steps: [
          `Observe a live QNLP pipeline processing a sentence`,
          `Pause at each stage and identify what transformation occurred`,
          `Record the input and output representations`,
          `Create a pipeline diagram on paper`,
        ],
        materials: `Live QNLP pipeline demo, worksheet`,
        timeRequired: `8 min`,
        outcomes: `Students can identify and describe each pipeline stage.`,
      },
      {
        title: `Parsing to String Diagram`,
        description: `Students manually convert a simple sentence into a string diagram using pregroup types.`,
        steps: [
          `Write the sentence "Dogs eat bones"`,
          `Assign pregroup types: Dogs(N), eat(N⊗S⊗N), bones(N)`,
          `Draw the string diagram with cups and caps`,
          `Verify the reduction to type S`,
        ],
        materials: `Pregroup type reference card, worksheet`,
        outcomes: `Students understand the parsing-to-diagram conversion.`,
      },
      {
        title: `String Diagram to Quantum Circuit`,
        description: `Students translate a string diagram into a parameterised quantum circuit.`,
        steps: [
          `Take the string diagram from the previous activity`,
          `Replace each word box with a parameterised unitary`,
          `Replace cups with Bell measurements or partial traces`,
          `Verify the circuit produces one output qubit (the sentence meaning)`,
        ],
        outcomes: `Students understand the diagram-to-circuit translation.`,
      },
      {
        title: `End-to-End Pipeline Walkthrough`,
        description: `Full pipeline demonstration using the lambeq library with a real sentence.`,
        steps: [
          `Install and import lambeq`,
          `Create a pipeline with BobcatParser and IQPAnsatz`,
          `Run "Alice loves Bob" through the pipeline`,
          `Inspect the output quantum circuit diagram`,
        ],
        materials: `Jupyter notebook with lambeq installed`,
        outcomes: `Students see the complete pipeline in action.`,
      },
    ],
    project: {
      scope: `Implement a complete QNLP pipeline for a single sentence using the lambeq library, from text input to quantum circuit output, with documentation of each stage.`,
      objectives: [
        `Set up the lambeq pipeline with a parser and ansatz`,
        `Process 3 sentences of increasing complexity`,
        `Visualise the string diagram and quantum circuit for each`,
        `Document the role and implementation of each stage`,
      ],
      timeline: [
        { phase: `Environment setup`, duration: `3 min`, percent: 20 },
        { phase: `Simple sentence pipeline`, duration: `4 min`, percent: 30 },
        { phase: `Complex sentences`, duration: `4 min`, percent: 30 },
        { phase: `Documentation`, duration: `3 min`, percent: 20 },
      ],
      teamRoles: [
        { role: `Pipeline Engineer`, responsibility: `Implement the lambeq pipeline` },
        { role: `Visualisation Specialist`, responsibility: `Create string diagram and circuit plots` },
        { role: `Technical Writer`, responsibility: `Document each stage` },
      ],
      deliverables: [
        `Working QNLP pipeline notebook for 3 sentences`,
        `Visualisation of string diagrams and circuits`,
        `Pipeline documentation describing each stage`,
      ],
    },
    questions: [
      {
        question: `What is the role of the parsing stage in the QNLP pipeline and why is it critical?`,
        answer: `Parsing converts raw text into a grammatical structure (string diagram) that determines how word meanings will be composed. It is critical because the quality of the parse directly determines the correctness of the quantum circuit.`,
        explanation: `If the parser assigns incorrect grammatical types, the resulting quantum circuit will wire words together incorrectly, producing meaningless sentence states. This is analogous to a classical NLP pipeline with broken tokenisation — everything downstream fails.`,
        commonMistake: `Underestimating parsing difficulty — real-world language has ambiguous structures that are hard to parse correctly`,
        tip: `Start with simple, unambiguous sentences. The BobcatParser in lambeq handles many constructions but has limitations.`,
      },
      {
        question: `How does the composition stage map a string diagram to a quantum circuit?`,
        answer: `Each word box in the string diagram becomes a parameterised unitary gate, and each wire connecting words becomes a qubit. Cups (type contractions) become Bell measurements or partial traces.`,
        explanation: `The string diagram is a topological description of how meaning flows. The composition stage (or ansatz) assigns each word a specific quantum operation. The connectivity of the circuit mirrors the connectivity of the diagram. Trained parameters encode the specific meaning of each word.`,
        commonMistake: `Thinking any ansatz will work — the ansatz must respect the grammatical structure of the diagram`,
        tip: `Choose an ansatz (IQP, MPS, or SpiderNet) based on the complexity of the grammatical structure and available qubits`,
      },
    ],
    virtualLab: {
      description: `Interactive QNLP pipeline explorer — enter a sentence, step through each pipeline stage, and inspect the representation at every stage.`,
      steps: [
        `Enter a sentence or choose from examples`,
        `Step through preprocessing and tokenisation`,
        `View the parse tree and string diagram`,
        `Inspect the encoded word states`,
        `See the final quantum circuit and its execution results`,
      ],
      stepDetails: [
        `Type any simple English sentence (e.g., "Cats sleep") — the lab uses the BobcatParser from the lambeq library`,
        `The preprocessing panel shows tokenised words with POS tags — mouse over any tag to see its meaning`,
        `The string diagram renders as an interactive SVG — drag to rearrange, click boxes to see word types`,
        `The encoding panel shows each word mapped to a quantum state using the selected encoding scheme — compare angle, amplitude, and sparse encoding`,
        `The final circuit panel shows the executable quantum circuit with gate counts, depth, and estimated fidelity — click "Run" to execute on a simulator and see measurement results`,
      ],
      completionMessage: `You have successfully navigated a complete QNLP pipeline from text to quantum circuit!`,
      dataFlow: `flowchart LR
        A[Raw Text] --> B[Preprocessing]
        B --> C[Tokenised Text]
        C --> D[Parsing]
        D --> E[String Diagram]
        E --> F[Word Encoding]
        F --> G[Encoded States]
        G --> H[Composition / Ansatz]
        H --> I[Quantum Circuit]
        I --> J[Execution]
        J --> K[Measurement Results]
        K --> L[Post-Processing]
        L --> M[Task Output]`,
    },
    insights: {
      advantages: [
        `Modular architecture enables independent development of each component`,
        `Each stage has clear mathematical semantics grounded in category theory`,
        `The lambeq library provides a production-ready implementation`,
        `Pipeline visualisation aids understanding and debugging`,
      ],
      disadvantages: [
        `Error propagation across many stages reduces end-to-end fidelity`,
        `Current parsers handle limited grammatical constructions`,
        `Classical preprocessing and quantum execution create a bottleneck at the interface`,
        `Each stage adds latency, making real-time QNLP challenging on current hardware`,
      ],
      futureScope: `Future QNLP pipelines will integrate classical and quantum stages more tightly, with learned components replacing fixed grammatical parsers and adaptive ansätze that optimise circuit structure for hardware constraints. End-to-end differentiable pipelines will enable training through the entire stack.`,
      industrialApplications: [
        `End-to-end QNLP systems for specialised domains (legal, medical, scientific)`,
        `Quantum NLP-as-a-Service platforms with pipeline APIs`,
        `Automated QNLP pipeline configuration for different tasks`,
        `Educational platforms teaching QNLP through pipeline visualisation`,
      ],
      careerRelevance: `Pipeline engineering — the skill of building end-to-end systems from modular components — is valuable across all of software engineering. QNLP pipeline expertise specifically prepares you for roles at quantum computing startups building their first QNLP products.`,
    },
  },

  '7.5': {
    topicId: '7.5',
    learningObjective: `Identify real-world applications of QNLP across multiple domains and evaluate their feasibility on current and near-term quantum hardware.`,
    nextPrep: `Think about what NLP applications you use daily and consider how they might benefit from or be transformed by quantum approaches.`,
    dependencyGraph: `flowchart LR
      A[7.4 QNLP Pipeline] --> B[7.5 Applications of QNLP]
      B --> C[7.6 Current Research State]`,
    storytelling: {
      story: `Imagine a doctor reading a patient's medical history — hundreds of pages of notes, test results, and specialist reports. Hidden in this text is a pattern that no human could spot: a specific combination of symptoms, medications, and genetic markers that predicts a rare adverse drug reaction. A QNLP system, processing the grammatical structure of each sentence as a quantum circuit, could in principle detect this pattern by computing the entangled meaning of the entire document. This is not science fiction — it is the kind of application that QNLP researchers are working toward, where the compositional structure of language carries information that statistical pattern-matching alone cannot extract.`,
      questions: [
        `What language tasks require precise compositional understanding rather than statistical pattern matching?`,
        `Which industries would benefit most from quantum-accelerated NLP?`,
        `How would you prioritise which QNLP applications to pursue first given current hardware limitations?`,
      ],
      connection: `The applications of QNLP are determined by its strengths: compositional precision, potential for exponential speedup, and mathematical elegance. Applications that require understanding grammatical structure (legal contracts, scientific papers, medical notes) are natural targets — not because QNLP is "better" at these tasks today, but because classical NLP faces fundamental barriers in these domains.`,
      technicalIntro: `QNLP applications span several domains: (1) Text Classification — sentiment analysis, topic detection, and spam filtering with quantum kernels; (2) Semantic Similarity — measuring meaning similarity between sentences using quantum state overlap; (3) Question Answering — where compositional understanding of questions is critical; (4) Machine Translation — leveraging grammatical structure for cross-lingual meaning preservation; (5) Drug Discovery — analysing scientific literature for chemical compound relationships; (6) Legal Document Analysis — precise interpretation of contractual language. Each application leverages different aspects of QNLP: compositionality, quantum kernels, or exponential state space.`,
      lifeSkills: `Matching technology capabilities to application needs is a strategic thinking skill. QNLP will not replace classical NLP for all tasks — the skill is identifying where its unique strengths create value. This applies to any technology adoption decision in your career.`,
    },
    mathModelling: {
      need: `Evaluating QNLP applications requires mathematical models of task requirements and technology capabilities.`,
      motivation: `Not every NLP task benefits from quantum approaches. We need to identify tasks where compositional structure, exponential state spaces, or quantum kernels provide measurable advantage.`,
      challenge: `Formalising the relationship between task characteristics (compositional depth, required precision, data availability) and QNLP suitability.`,
      equations: [
        {
          latex: `\\text{Suitability}(T) = \\alpha \\cdot C(T) + \\beta \\cdot S(T) + \\gamma \\cdot Q(T)`,
          meaning: `The suitability of QNLP for task T is a weighted combination of compositional requirement C(T), speedup potential S(T), and quantum readiness Q(T).`,
          interpretation: `Tasks with high compositional requirement (legal reasoning), high speedup potential (large-scale similarity search), and quantum readiness (small vocabulary, short sentences) score highest.`,
        },
        {
          latex: `\\text{Quantum Advantage} = \\frac{\\text{Cost}_{\\text{classical}}(T, \\epsilon)}{\\text{Cost}_{\\text{quantum}}(T, \\epsilon)}`,
          meaning: `Quantum advantage is the ratio of classical to quantum computational cost for task T at error tolerance ε.`,
          interpretation: `When this ratio exceeds 1, quantum offers an advantage. The ratio depends on task structure: tasks with high-dimensional inner products (requiring O(2^n) classically) show the largest ratio.`,
        },
        {
          latex: `P_{\\text{feasibility}} = 1 - \\exp\\left(-\\frac{\\text{Qubits}_{\\text{available}} - \\text{Qubits}_{\\text{required}}}{\\text{Noise}_{\\text{threshold}}}\\right)`,
          meaning: `The probability that a QNLP application is feasible on current hardware depends on qubit availability and noise levels.`,
          interpretation: `Applications requiring fewer qubits than available and tolerating current noise levels are feasible today. Most real-world applications require more qubits or lower noise than currently available.`,
        },
      ],
      variables: [
        { symbol: `T`, name: `NLP Task`, description: `Specific language understanding application` },
        { symbol: `C(T)`, name: `Compositional Requirement`, description: `How crucial grammatical structure is for the task` },
        { symbol: `S(T)`, name: `Speedup Potential`, description: `Maximum theoretical quantum speedup for the task` },
        { symbol: `Q(T)`, name: `Quantum Readiness`, description: `How well the task fits current hardware capabilities` },
      ],
      interactive: {
        equation: `\\text{Advantage} = \\frac{\\text{Classical Ops}}{\\text{Quantum Ops}}`,
        description: `Vary task parameters to see when quantum advantage emerges:`,
        variables: [
          { symbol: `n`, name: `Vocabulary Size`, description: `Number of unique words in the task` },
          { symbol: `d`, name: `Feature Dimensions`, description: `Dimensionality of meaning representations` },
          { symbol: `m`, name: `Dataset Size`, description: `Number of examples to process` },
        ],
        sliders: [
          { name: `n`, label: `Vocabulary (n)`, min: 10, max: 10000, step: 10, default: 100 },
          { name: `d`, label: `Dimensions (d)`, min: 10, max: 1000, step: 10, default: 100 },
          { name: `m`, label: `Dataset (m)`, min: 100, max: 100000, step: 100, default: 1000 },
        ],
      },
      charts: [
        {
          title: `QNLP Application Feasibility Matrix`,
          type: `bar`,
          data: [
            { application: `Sentiment Analysis`, feasibility_now: 0.6, feasibility_3yr: 0.9, impact: 0.5 },
            { application: `Semantic Similarity`, feasibility_now: 0.4, feasibility_3yr: 0.8, impact: 0.7 },
            { application: `Question Answering`, feasibility_now: 0.2, feasibility_3yr: 0.6, impact: 0.9 },
            { application: `Machine Translation`, feasibility_now: 0.1, feasibility_3yr: 0.4, impact: 0.8 },
            { application: `Drug Discovery (Lit)`, feasibility_now: 0.3, feasibility_3yr: 0.7, impact: 0.9 },
            { application: `Legal Document Analysis`, feasibility_now: 0.2, feasibility_3yr: 0.6, impact: 0.8 },
          ],
        },
        {
          title: `Expected Quantum Advantage by Application`,
          type: `line`,
          data: [
            { qubits: 10, sentiment: 1.2, similarity: 1.5, qa: 1.1 },
            { qubits: 20, sentiment: 2.5, similarity: 4.0, qa: 2.0 },
            { qubits: 30, sentiment: 5.0, similarity: 12.0, qa: 4.5 },
            { qubits: 50, sentiment: 15.0, similarity: 80.0, qa: 20.0 },
            { qubits: 100, sentiment: 100.0, similarity: 5000.0, qa: 300.0 },
          ],
        },
      ],
      advantages: `QNLP applications benefit from built-in compositionality (no need to learn how words combine), exponential state space for rich meaning representation, quantum kernel methods for similarity tasks, and a principled mathematical framework connecting language structure to computation.`,
      limitations: `Most applications are not feasible on current NISQ hardware due to qubit limitations and noise. The most impactful applications (question answering, translation) require the most qubits. Classical baselines are extremely strong and improving rapidly. QNLP must demonstrate a clear advantage on real-world benchmarks to justify adoption.`,
    },
    activities: [
      {
        title: `Application Brainstorming and Categorisation`,
        description: `Groups brainstorm QNLP applications and categorise them by feasibility and impact.`,
        steps: [
          `List 10 NLP applications you use or know about`,
          `Rate each on: compositional requirement (1-5), quantum advantage potential (1-5)`,
          `Plot applications on a 2×2 feasibility-impact matrix`,
          `Select the most promising quadrant for QNLP investment`,
        ],
        materials: `Matrix template, sticky notes`,
        timeRequired: `10 min`,
        outcomes: `Students develop a structured framework for evaluating QNLP applications.`,
      },
      {
        title: `Use Case Deep Dive: Sentiment Analysis`,
        description: `Detailed analysis of how QNLP could approach sentiment analysis differently from classical methods.`,
        steps: [
          `Take a sentiment analysis dataset with 3 sentences`,
          `Design a quantum kernel for sentiment classification`,
          `Compare with a classical SVM approach on the same data`,
          `Discuss when the quantum approach might have an advantage`,
        ],
        materials: `Small sentiment dataset, quantum kernel notebook`,
        outcomes: `Students understand the practical implementation of a QNLP application.`,
      },
      {
        title: `Feasibility Assessment`,
        description: `Students assess the feasibility of a QNLP application given current quantum hardware specs.`,
        steps: [
          `Research current quantum hardware capabilities (qubit count, error rates, coherence time)`,
          `Select one QNLP application from the list`,
          `Calculate qubit and circuit depth requirements`,
          `Determine if it is feasible now, in 3 years, or needs fault tolerance`,
        ],
        materials: `Hardware specification sheets, QNLP resource calculator`,
        outcomes: `Students connect application ideas to hardware realities.`,
      },
      {
        title: `QNLP Application Pitch`,
        description: `Each group pitches a QNLP application to a panel of "investors" (the class).`,
        steps: [
          `Choose a specific application domain (e.g., legal, medical, finance)`,
          `Develop a 2-minute pitch: problem, QNLP solution, feasibility, expected impact`,
          `Deliver to the class`,
          `Class votes on which pitch is most compelling`,
        ],
        outcomes: `Students practice communicating QNLP concepts to non-specialist audiences.`,
      },
    ],
    project: {
      scope: `Design a QNLP application for a specific domain, including a feasibility analysis, architecture diagram, and implementation roadmap.`,
      objectives: [
        `Select a domain and specific NLP task`,
        `Design the QNLP approach with pipeline architecture`,
        `Assess feasibility on current and near-term hardware`,
        `Create a 3-year implementation roadmap`,
      ],
      timeline: [
        { phase: `Domain and task selection`, duration: `2 min`, percent: 15 },
        { phase: `QNLP solution design`, duration: `4 min`, percent: 35 },
        { phase: `Feasibility analysis`, duration: `3 min`, percent: 25 },
        { phase: `Roadmap creation`, duration: `3 min`, percent: 25 },
      ],
      teamRoles: [
        { role: `Domain Expert`, responsibility: `Understand the domain's NLP needs` },
        { role: `QNLP Architect`, responsibility: `Design the quantum solution` },
        { role: `Strategy Lead`, responsibility: `Create feasibility analysis and roadmap` },
      ],
      deliverables: [
        `QNLP application proposal (1 page)`,
        `Architecture diagram of the QNLP solution`,
        `Feasibility assessment with hardware requirements`,
        `3-year implementation roadmap with milestones`,
      ],
    },
    questions: [
      {
        question: `Why is semantic similarity a promising early application for QNLP?`,
        answer: `Semantic similarity maps naturally to quantum state overlap (fidelity), which can be computed efficiently on quantum hardware using the SWAP test or related techniques.`,
        explanation: `The quantum SWAP test estimates |⟨ψ|φ⟩|² using O(log n) operations, whereas classical computation of similarity between high-dimensional vectors scales linearly with dimension. On near-term hardware, even small quantum speedups for similarity search could be valuable.`,
        commonMistake: `Thinking QNLP is not useful until full fault-tolerance — similarity tasks on NISQ hardware may provide early value`,
        tip: `Look for applications that reduce to inner product computations, as these map naturally to quantum circuits`,
      },
      {
        question: `Which NLP tasks are least likely to benefit from QNLP in the near term?`,
        answer: `Tasks requiring large vocabularies and long-range dependencies (e.g., document-level summarisation, open-ended generation) are least suited because they require more qubits and circuit depth than current hardware can support.`,
        explanation: `QNLP currently works best with short sentences (up to ~10 words) and small vocabularies (tens of words). Language generation is particularly challenging because quantum measurements produce probabilistic outputs that are hard to convert to fluent text.`,
        commonMistake: `Assuming QNLP will eventually replace all classical NLP — each paradigm has domains of superiority`,
        tip: `Focus on understanding tasks where QNLP's compositional strength outweighs its current hardware limitations`,
      },
    ],
    virtualLab: {
      description: `Explore QNLP applications interactively — select an application domain, see the QNLP pipeline configured for that task, and evaluate its feasibility on different hardware models.`,
      steps: [
        `Choose an application domain (sentiment, similarity, QA, or legal)`,
        `View the task-specific pipeline configuration`,
        `Run the application on a simulated quantum device`,
        `Evaluate resource requirements (qubits, gates, noise tolerance)`,
        `Compare with a classical baseline on the same task`,
      ],
      stepDetails: [
        `Each domain loads a representative dataset: sentiment (movie reviews), similarity (STS-Benchmark subset), QA (simple questions), legal (contract clauses)`,
        `The pipeline auto-configures: parser settings, ansatz type, measurement scheme based on the task requirements`,
        `The execution panel shows both simulator results and estimated real-hardware performance with noise models from IBM, IonQ, or Rigetti devices`,
        `The resource dashboard tracks: qubit count, circuit depth, gate count, estimated fidelity, and classical overhead`,
        `The comparison chart shows accuracy vs qubit count, allowing you to find the minimum viable quantum resources for each application`,
      ],
      completionMessage: `You have surveyed the landscape of QNLP applications and assessed their feasibility!`,
      dataFlow: `flowchart LR
        A[Application Domain] --> B[Task Configuration]
        B --> C[Dataset Loader]
        C --> D[QNLP Pipeline]
        D --> E[Quantum Execution]
        E --> F[Results]
        F --> G[Feasibility Analysis]
        G --> H[Hardware Comparison]
        B --> I[Classical Baseline]
        I --> J[Comparison Dashboard]`,
    },
    insights: {
      advantages: [
        `Clear framework for evaluating which applications suit QNLP`,
        `Understanding of near-term vs long-term application timelines`,
        `Awareness of the gap between theoretical potential and practical implementation`,
        `Strategic perspective on QNLP commercialisation pathways`,
      ],
      disadvantages: [
        `All feasibility estimates are speculative — hardware progress is uncertain`,
        `Classical NLP is improving rapidly, potentially diminishing QNLP's window of opportunity`,
        `Most promising applications require hardware that does not yet exist`,
        `Lack of standardised benchmarks makes cross-approach comparison difficult`,
      ],
      futureScope: `The application landscape for QNLP will evolve in phases. Phase 1 (now-2027): sentiment analysis and semantic similarity on simulators and small quantum devices. Phase 2 (2027-2030): question answering and document classification on improved NISQ hardware. Phase 3 (2030+): full machine translation and open-domain QA on fault-tolerant quantum computers.`,
      industrialApplications: [
        `Quantum-enhanced semantic search engines for enterprise document management`,
        `Precision legal document analysis for contract review`,
        `Medical literature mining for drug discovery and clinical decision support`,
        `Financial document analysis for regulatory compliance and risk assessment`,
      ],
      careerRelevance: `Application-focused QNLP expertise is valuable for product management roles in quantum computing startups, technology scouting in corporate R&D, and consulting engagements advising clients on quantum technology adoption.`,
    },
  },

  '7.6': {
    topicId: '7.6',
    learningObjective: `Understand the current state of QNLP research, including key research groups, recent results, open problems, and future directions.`,
    nextPrep: `Search for "Quantum Natural Language Processing 2024" and read one recent research paper or blog post before the session.`,
    dependencyGraph: `flowchart LR
      A[7.5 Applications] --> B[7.6 Current Research State]
      B --> C[M8: Linguistic Foundations]`,
    storytelling: {
      story: `Imagine standing on a beach at dawn, watching the first explorers set sail toward a new continent. Some carry detailed maps of the coastline (theoretical frameworks), others bring advanced instruments (quantum hardware), and a few carry strange devices that no one fully understands yet (quantum algorithms). The continent on the horizon is QNLP — visible, tantalising, but not yet reached. Some explorers will turn back, convinced the journey is too dangerous. Others will press on, charting the waters one experiment at a time. You are watching from the beach, deciding whether to join the next expedition. This topic gives you the chart of who is sailing, what they have found so far, and where the uncharted waters lie.`,
      questions: [
        `What makes a research field "ready" for practical applications?`,
        `How do you evaluate progress in a field where theory outpaces experiment?`,
        `What would convince you to invest your career in QNLP research?`,
      ],
      connection: `Understanding the research landscape helps you identify where to focus your own learning and potential contributions. It also provides context for the limitations and capabilities of current QNLP systems — essential knowledge for anyone building on this technology.`,
      technicalIntro: `As of 2025-2026, QNLP research is concentrated in several key areas: (1) Theoretical Foundations — extending DisCoCat to richer grammatical phenomena (relative clauses, quantifiers, anaphora); (2) Quantum Algorithms — designing more efficient quantum circuits for linguistic composition, including variational and adiabatic approaches; (3) Implementations — the lambeq library and similar toolkits making QNLP accessible; (4) Experiments — small-scale demonstrations on IBM, IonQ, and Rigetti hardware; (5) Hybrid Methods — combining classical embeddings with quantum composition layers. Key research groups include: Oxford's Quantum Group (Coecke, Lorenz), Cambridge (Clark), and industrial labs at IBM, Xanadu, and Zapata Computing. Open problems include: scaling to realistic vocabularies, handling ambiguity robustly, and demonstrating quantum advantage on a practical task.`,
      lifeSkills: `Assessing the state of a research field — distinguishing genuine progress from hype, identifying open problems, and evaluating whether to invest time — is a critical skill for anyone working at the cutting edge of technology. It prevents wasting effort on dead ends and helps you find high-impact opportunities.`,
    },
    mathModelling: {
      need: `Quantifying research progress requires metrics: number of papers, experimental results, qubit counts in experiments, and performance relative to classical baselines.`,
      motivation: `Without rigorous metrics, it is easy to overestimate or underestimate progress in a fast-moving field.`,
      challenge: `Defining meaningful progress metrics for a field that spans theory, software, and hardware — each with different maturity levels.`,
      equations: [
        {
          latex: `R(t) = \\sum_{i=1}^{n(t)} \\frac{\\text{Impact}_i}{\\text{Time}_i}`,
          meaning: `Research output R(t) at time t is the sum of impacts of n(t) papers, weighted by recency.`,
          interpretation: `This metric captures both the volume and recency of research contributions. A field with many high-impact recent papers is accelerating.`,
        },
        {
          latex: `Q_{\\text{capacity}} = \\max_{\\text{experiment}} (n_{\\text{qubits}} \\cdot d_{\\text{circuit}} \\cdot F_{\text{gate}})`,
          meaning: `Quantum capacity is the maximum product of qubit count, circuit depth, and gate fidelity achieved in any QNLP experiment.`,
          interpretation: `This combined metric captures the practical capability to run QNLP circuits. In 2016, Q_capacity ≈ 5 × 10 × 0.95. By 2025, it has grown to ≈ 20 × 50 × 0.90 (despite lower fidelity, more complex circuits run).`,
        },
        {
          latex: `\\Delta_{\\text{QNLP}} = \\frac{\\text{Accuracy}_{\\text{quantum}} - \\text{Accuracy}_{\\text{classical}}}{\\text{Accuracy}_{\\text{classical}}}`,
          meaning: `The QNLP advantage delta measures relative performance improvement over the best classical baseline.`,
          interpretation: `As of 2025, Δ_QNLP is slightly negative or near zero for most tasks — quantum does not yet outperform classical. The trend is toward convergence, with the first positive results expected on specialised compositional tasks.`,
        },
      ],
      variables: [
        { symbol: `R(t)`, name: `Research Output`, description: `Aggregate research activity at time t` },
        { symbol: `Q_{\\text{capacity}}`, name: `Quantum Capacity`, description: `Maximum demonstrated QNLP circuit complexity` },
        { symbol: `n_{\\text{qubits}}`, name: `Qubit Count`, description: `Number of qubits used in the experiment` },
        { symbol: `d_{\\text{circuit}}`, name: `Circuit Depth`, description: `Number of gate layers in the quantum circuit` },
        { symbol: `F_{\\text{gate}}`, name: `Gate Fidelity`, description: `Average fidelity of quantum gates` },
        { symbol: `\\Delta_{\\text{QNLP}}`, name: `QNLP Advantage`, description: `Relative performance vs classical baselines` },
      ],
      interactive: {
        equation: `Q_{\\text{capacity}}(t) = n_{\\text{qubits}}(t) \\cdot d_{\\text{circuit}}(t) \\cdot F_{\\text{gate}}(t)`,
        description: `Adjust hardware parameters to see the current QNLP capacity frontier:`,
        variables: [
          { symbol: `n_{\\text{qubits}}`, name: `Available Qubits`, description: `Qubits on the target quantum device` },
          { symbol: `d_{\\text{circuit}}`, name: `Circuit Depth`, description: `Maximum circuit depth before decoherence` },
          { symbol: `F_{\\text{gate}}`, name: `Gate Fidelity`, description: `Average two-qubit gate fidelity` },
        ],
        sliders: [
          { name: `nq`, label: `Qubits`, min: 5, max: 100, step: 5, default: 20 },
          { name: `depth`, label: `Circuit Depth`, min: 5, max: 200, step: 5, default: 50 },
          { name: `fid`, label: `Gate Fidelity`, min: 0.5, max: 1, step: 0.01, default: 0.95 },
        ],
      },
      charts: [
        {
          title: `QNLP Research Growth 2008-2025`,
          type: `line`,
          data: [
            { year: `2008`, papers: 3, groups: 1 },
            { year: `2012`, papers: 8, groups: 3 },
            { year: `2016`, papers: 18, groups: 6 },
            { year: `2018`, papers: 30, groups: 10 },
            { year: `2020`, papers: 55, groups: 18 },
            { year: `2022`, papers: 90, groups: 30 },
            { year: `2024`, papers: 150, groups: 50 },
          ],
        },
        {
          title: `Experimental QNLP Progress — Maximum Circuit Complexity`,
          type: `bar`,
          data: [
            { year: `2016`, qubits: 5, depth: 10, fidelity: 0.95 },
            { year: `2018`, qubits: 8, depth: 20, fidelity: 0.93 },
            { year: `2020`, qubits: 12, depth: 35, fidelity: 0.91 },
            { year: `2022`, qubits: 16, depth: 45, fidelity: 0.90 },
            { year: `2024`, qubits: 25, depth: 60, fidelity: 0.88 },
          ],
        },
      ],
      advantages: `The research community is growing rapidly, with dedicated tooling (lambeq), increasing hardware access, and a clear theoretical framework. The number of papers doubles approximately every 3 years. Multiple research groups independently converging on similar approaches validates the direction.`,
      limitations: `No experimental demonstration of quantum advantage for any linguistic task exists as of 2025. Most experiments are on simulators or very small hardware. The field is still searching for its "quantum supremacy" moment — a task where QNLP clearly outperforms the best classical alternative. Funding and researcher attention could shift away if progress stalls.`,
    },
    activities: [
      {
        title: `Research Landscape Mapping`,
        description: `Students create a map of QNLP research groups, their focus areas, and recent results.`,
        steps: [
          `Receive cards with research group names and descriptions`,
          `Group them by focus area: theory, algorithms, implementations, experiments`,
          `Add recent results (2023-2025) to each group`,
          `Identify gaps — areas with few or no groups working on them`,
        ],
        materials: `Research group cards, recent results cards, large paper`,
        timeRequired: `10 min`,
        outcomes: `Students understand the global QNLP research landscape.`,
      },
      {
        title: `Paper Review: Recent QNLP Result`,
        description: `Small groups read and present a recent QNLP research paper.`,
        steps: [
          `Each group receives a recent QNLP paper (2023-2025)`,
          `Identify: research question, method, key result, limitations`,
          `Prepare a 3-minute summary`,
          `Present to class with slides`,
        ],
        materials: `Selected QNLP papers, presentation templates`,
        outcomes: `Students engage with primary research literature.`,
      },
      {
        title: `Open Problems Brainstorm`,
        description: `Groups identify and prioritise open problems in QNLP research.`,
        steps: [
          `Review the current limitations identified throughout Module 7`,
          `List 10 open problems that need solving`,
          `Rate each on: importance (1-5), feasibility (1-5)`,
          `Select the top 3 problems to focus on as a research community`,
        ],
        outcomes: `Students develop research-critical thinking skills.`,
      },
      {
        title: `Research Roadmap Discussion`,
        description: `Class-wide discussion on the future of QNLP research and how to contribute.`,
        steps: [
          `Facilitator presents 3 possible future scenarios for QNLP`,
          `Discuss: which scenario is most likely and why?`,
          `Discuss: what skills are needed to contribute?`,
          `Create a personal action plan for staying involved`,
        ],
        outcomes: `Students connect their learning to potential future contributions.`,
      },
    ],
    project: {
      scope: `Write a mini-review of the current state of QNLP research, covering at least 5 recent papers, identifying trends, and proposing a future research direction.`,
      objectives: [
        `Survey at least 5 QNLP papers from 2022-2025`,
        `Identify 3 current trends in QNLP research`,
        `Evaluate the evidence for progress toward quantum advantage`,
        `Propose one specific research direction with justification`,
      ],
      timeline: [
        { phase: `Literature search`, duration: `4 min`, percent: 30 },
        { phase: `Analysis and synthesis`, duration: `4 min`, percent: 30 },
        { phase: `Future direction proposal`, duration: `3 min`, percent: 25 },
        { phase: `Write and review`, duration: `2 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Literature Reviewer`, responsibility: `Survey and summarise papers` },
        { role: `Analyst`, responsibility: `Identify trends and evaluate progress` },
        { role: `Visionary`, responsibility: `Propose future research direction` },
      ],
      deliverables: [
        `Mini-review paper (2-3 pages)`,
        `Reference list with annotations`,
        `Future research proposal with rationale`,
      ],
    },
    questions: [
      {
        question: `What is the biggest open problem in QNLP research today?`,
        answer: `The biggest open problem is demonstrating a practical quantum advantage — finding a language task where QNLP on current or near-term quantum hardware clearly outperforms the best classical methods.`,
        explanation: `While QNLP has a beautiful theoretical framework and promising proof-of-concept experiments, no one has yet shown that QNLP solves a real-world language task better, faster, or with fewer resources than classical approaches. Solving this would transform the field.`,
        commonMistake: `Assuming theoretical elegance implies practical superiority — quantum advantage must be experimentally demonstrated`,
        tip: `The search for quantum advantage in NLP mirrors the broader quantum computing challenge: find the right task where structure matches hardware capability`,
      },
      {
        question: `How has the lambeq library changed QNLP research?`,
        answer: `Lambeq has dramatically lowered the barrier to entry by providing a complete, open-source pipeline from text to quantum circuits, enabling researchers to focus on experiments rather than building infrastructure from scratch.`,
        explanation: `Before lambeq (2020), each research group built their own pipeline from parser to circuit, making it hard to reproduce results or compare approaches. Lambeq standardised the pipeline, integrated with major quantum SDKs, and made QNLP accessible to anyone with Python skills. This accelerated the field significantly.`,
        commonMistake: `Thinking lambeq makes QNLP "solved" — it is a tool for research, not a production system`,
        tip: `Lambeq is to QNLP what scikit-learn is to classical ML — a standardised toolkit that enables rapid experimentation`,
      },
    ],
    virtualLab: {
      description: `Interactive research landscape explorer — navigate the QNLP research world by group, paper, or topic, and see how the field has evolved and where it is heading.`,
      steps: [
        `Enter the research landscape view`,
        `Explore research groups by region and focus area`,
        `Click on papers to see abstracts, methods, and results`,
        `View the open problems board and vote on priorities`,
        `Generate a personal research roadmap based on your interests`,
      ],
      stepDetails: [
        `The landscape view shows a global map with research group nodes — click any node to see the group's focus, recent papers, and available code repositories`,
        `The paper explorer lets you filter by year, topic, hardware platform, or result type — each paper card shows key findings and a link to the full text`,
        `The results dashboard aggregates experimental results across papers, showing maximum qubit count, circuit depth, and task accuracy over time`,
        `The open problems board lists 15 unsolved challenges with descriptions, known partial results, and links to relevant papers — vote on which you find most important`,
        `The personal roadmap tool asks about your background and interests, then generates a suggested reading and project plan for entering QNLP research`,
      ],
      completionMessage: `You have surveyed the complete QNLP research landscape — you are ready to contribute to the next wave of discoveries!`,
      dataFlow: `flowchart LR
        A[Research Database] --> B[Landscape View]
        B --> C[Group Profiles]
        B --> D[Paper Explorer]
        B --> E[Results Dashboard]
        B --> F[Open Problems Board]
        F --> G[Priority Voting]
        A --> H[Personalisation Engine]
        H --> I[Research Roadmap]
        C --> I`,
    },
    insights: {
      advantages: [
        `Comprehensive understanding of the current research frontier`,
        `Awareness of key groups, papers, and tools`,
        `Identification of high-impact open problems ripe for contribution`,
        `Realistic assessment of progress toward quantum advantage`,
      ],
      disadvantages: [
        `Rapidly changing landscape — information becomes outdated quickly`,
        `Hype cycles can distort perception of genuine progress`,
        `Small field — limited job opportunities specifically in QNLP (requires broader quantum computing skills)`,
        `Risk of field stagnating if quantum advantage not demonstrated soon`,
      ],
      futureScope: `The next 3-5 years are critical for QNLP. If experimental demonstrations of quantum advantage emerge on near-term hardware, the field will accelerate rapidly with increased funding and researcher attention. If not, QNLP may remain a niche theoretical interest until fault-tolerant quantum computers arrive. The most likely outcome is a middle path: modest but real advantages on specialised compositional tasks, driving steady rather than explosive growth.`,
      industrialApplications: [
        `Internal research programs at quantum computing companies (IBM, Google, IonQ, Xanadu)`,
        `Academic research partnerships exploring fundamental limits of language processing`,
        `Government and defence research into alternative computing paradigms for NLP`,
        `Education and training platforms for the next generation of QNLP researchers`,
      ],
      careerRelevance: `For those considering research careers, QNLP offers the excitement of a young field with open frontiers. The skills developed — category theory, quantum computing, computational linguistics — are rare and valuable across quantum technology roles. Even if QNLP itself does not become a large field, the expertise transfers to quantum machine learning, quantum algorithms, and formal linguistics.`,
    },
  },
}
