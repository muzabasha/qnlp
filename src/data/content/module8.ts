import type { TopicContent } from './loader'

export const m8Content: Record<string, TopicContent> = {
  '8.1': {
    topicId: '8.1',
    learningObjective: `Understand how grammar provides the structural scaffolding for meaning, and how different grammatical formalisms represent syntactic relationships.`,
    nextPrep: `Review parts of speech (noun, verb, adjective, etc.) and basic sentence structure (subject-verb-object) before this session.`,
    dependencyGraph: `flowchart LR
      A[M7: QNLP Introduction] --> B[8.1 Grammar and Meaning]
      B --> C[8.2 Compositional Semantics]
      C --> D[8.3 Distributional Semantics]
      D --> E[8.4 DisCoCat Framework]
      E --> F[8.5 Diagrammatic Representation]
      F --> G[8.6 Visualising Sentences]
      G --> H[M9: Tools & Libraries]`,
    storytelling: {
      story: `Imagine a child building with LEGO bricks. The bricks themselves are just coloured plastic — they could become anything. But the instruction booklet shows which brick connects to which, and in what order. The bricks are words; the instruction booklet is grammar. Without the booklet, you have a pile of pieces. Without grammar, you have a vocabulary list but no sentences. Now imagine that the instruction booklet is written in a strange language — that is formal grammar. And imagine the completed LEGO model is not just a static object but a machine that computes meaning — that is the quantum view of grammar.`,
      questions: [
        `Can meaning exist without grammar? What about single-word utterances like "Help!"?`,
        `Why do different languages have different grammatical rules if meaning is universal?`,
        `How does knowing the grammar of a sentence help a computer understand it better than just knowing the words?`,
      ],
      connection: `Grammar is not just a set of arbitrary rules to be memorised. It is a computational system that specifies how meaning-bearing units combine to produce complex meanings. This computational view of grammar — pioneered by categorial grammar traditions — is what makes the connection to quantum computing possible.`,
      technicalIntro: `Grammar provides the compositional structure of language. Different formalisms capture different aspects: phrase structure grammars (Context-Free Grammars, Tree-Adjoining Grammars) describe hierarchical grouping, dependency grammars describe head-dependent relationships, and categorial grammars (Lambek Calculus, Pregroup Grammars) describe how expressions combine based on their syntactic类型. In QNLP, pregroup grammars are particularly important because they form a compact closed category — the same mathematical structure as quantum processes. The grammatical type of an expression determines how its meaning vector or tensor interacts with others.`,
      lifeSkills: `Understanding grammar as a computational system rather than a set of prescriptive rules develops systems thinking. You learn to see structure beneath surface complexity — a skill that transfers to understanding any complex system, from software architecture to organisational dynamics.`,
    },
    mathModelling: {
      need: `A formal mathematical model of grammar is required to specify precisely how words combine into phrases and sentences.`,
      motivation: `Natural language grammar is complex and ambiguous. Without formal models, we cannot build reliable computational systems for language processing.`,
      challenge: `Designing a grammatical formalism that is expressive enough to capture natural language phenomena yet simple enough to have a clean mathematical structure that connects to quantum mechanics.`,
      equations: [
        {
          latex: `\\text{S} \\rightarrow \\text{NP} \\; \\text{VP}`,
          meaning: `A context-free grammar rule: a sentence S consists of a noun phrase NP followed by a verb phrase VP.`,
          interpretation: `This is a rewrite rule. It says that the category S can be replaced by the sequence NP VP. These rules form a tree structure that represents the sentence's constituent hierarchy.`,
        },
        {
          latex: `\\text{VP} \\rightarrow \\text{V} \\; \\text{NP}`,
          meaning: `A verb phrase VP consists of a verb V followed by a noun phrase NP (the object).`,
          interpretation: `Together with S → NP VP and rules for NP, this builds a parse tree. The tree structure captures which words group together and in what order.`,
        },
        {
          latex: `n \\cdot n^r \\leq 1, \\quad n^l \\cdot n \\leq 1`,
          meaning: `Pregroup contraction rules: a noun n with its right adjoint n^r contracts to the identity type, and similarly for left adjoint.`,
          interpretation: `In pregroup grammars, adjoint types represent "holes" that need to be filled. An adjective of type n·n^l (or n^l·n) combines with a noun to produce a noun. The contraction rules directly implement grammatical combination.`,
        },
        {
          latex: `\\text{type(transitive\\_verb)} = n^r \\cdot s \\cdot n^l`,
          meaning: `A transitive verb has pregroup type n^r·s·n^l: it needs a subject noun on the left (n^r) and an object noun on the right (n^l), and produces a sentence s.`,
          interpretation: `For "Alice loves Bob": Alice has type n, loves has type n^r·s·n^l, Bob has type n. The contraction pattern n·(n^r·s·n^l)·n → (n·n^r)·s·(n^l·n) → s verifies grammaticality and produces the sentence type.`,
        },
      ],
      variables: [
        { symbol: `S`, name: `Sentence Type`, description: `Grammatical category for complete sentences` },
        { symbol: `NP`, name: `Noun Phrase`, description: `Grammatical category for noun phrases` },
        { symbol: `VP`, name: `Verb Phrase`, description: `Grammatical category for verb phrases` },
        { symbol: `n`, name: `Noun Type`, description: `Pregroup type for nouns` },
        { symbol: `s`, name: `Sentence Type`, description: `Pregroup type for sentences` },
        { symbol: `n^r, n^l`, name: `Adjoint Types`, description: `Right and left adjoints in the pregroup` },
      ],
      interactive: {
        equation: `\\text{type}(w_1 w_2 w_3) = t_1 \\cdot t_2 \\cdot t_3 \\rightarrow s`,
        description: `Build a sentence by assigning pregroup types and see the contraction:`,
        variables: [
          { symbol: `t_1`, name: `Word 1 Type`, description: `Pregroup type of the first word` },
          { symbol: `t_2`, name: `Word 2 Type`, description: `Pregroup type of the second word` },
          { symbol: `t_3`, name: `Word 3 Type`, description: `Pregroup type of the third word` },
        ],
        sliders: [
          { name: `type1`, label: `Type Slot 1`, min: 0, max: 3, step: 1, default: 0 },
          { name: `type2`, label: `Type Slot 2`, min: 0, max: 3, step: 1, default: 1 },
          { name: `type3`, label: `Type Slot 3`, min: 0, max: 3, step: 1, default: 2 },
        ],
      },
      charts: [
        {
          title: `Grammatical Formalisms Comparison`,
          type: `radar`,
          data: [
            { criteria: `Expressivity`, cfg: 3, dependency: 4, pregroup: 5 },
            { criteria: `Mathematical Simplicity`, cfg: 4, dependency: 3, pregroup: 5 },
            { criteria: `Quantum Compatibility`, cfg: 2, dependency: 2, pregroup: 5 },
            { criteria: `Parsing Efficiency`, cfg: 5, dependency: 5, pregroup: 3 },
            { criteria: `Linguistic Coverage`, cfg: 3, dependency: 4, pregroup: 3 },
            { criteria: `Learnability from Data`, cfg: 4, dependency: 5, pregroup: 2 },
          ],
        },
        {
          title: `Parse Tree Depth for Sample Sentences`,
          type: `bar`,
          data: [
            { sentence: `Dogs sleep`, depth: 3, nodes: 5 },
            { sentence: `Cats chase mice`, depth: 4, nodes: 9 },
            { sentence: `The dog slept quietly`, depth: 5, nodes: 13 },
            { sentence: `Alice gave Bob a book`, depth: 6, nodes: 17 },
          ],
        },
      ],
      advantages: `Formal grammars provide a precise, unambiguous specification of how words combine. Pregroup grammars in particular have exactly the right mathematical structure (compact closed category) to connect to quantum mechanics via the DisCoCat framework. The categorical perspective unifies grammar and meaning.`,
      limitations: `Natural language is messier than any formal grammar can fully capture. Idioms, metaphor, ellipsis, and context-dependent constructions challenge all grammatical formalisms. Pregroup grammars require manual assignment of types and do not handle all linguistic phenomena (e.g., long-distance dependencies) as naturally as other formalisms.`,
    },
    activities: [
      {
        title: `Pregroup Type Assignment`,
        description: `Students manually assign pregroup types to words and verify sentence grammaticality.`,
        steps: [
          `Receive a list of words with their pregroup types`,
          `Arrange words in sentence order`,
          `Apply contraction rules to reduce to type S`,
          `Determine if the sentence is grammatical according to the pregroup`,
        ],
        materials: `Pregroup type cards, contraction rule reference sheet`,
        timeRequired: `10 min`,
        outcomes: `Students understand how pregroup grammars work as a computational system.`,
      },
      {
        title: `Parse Tree Construction`,
        description: `Students build phrase structure trees for simple English sentences.`,
        steps: [
          `Write the sentence "The quick brown fox jumps over the lazy dog"`,
          `Identify parts of speech for each word`,
          `Apply CFG rules bottom-up to build the parse tree`,
          `Identify the hierarchical structure`,
        ],
        materials: `CFG rule set, worksheet`,
        outcomes: `Students understand hierarchical constituent structure.`,
      },
      {
        title: `Grammar Formalism Debate`,
        description: `Groups argue for different grammatical formalisms and their suitability for QNLP.`,
        steps: [
          `Assign each group a formalism: CFG, dependency, pregroup, or combinatory categorial`,
          `Research strengths and weaknesses`,
          `Present why your formalism is best for QNLP`,
          `Class votes on the most convincing case`,
        ],
        outcomes: `Students understand the trade-offs between different grammatical theories.`,
      },
      {
        title: `Ambiguity Detection`,
        description: `Students identify and analyse structurally ambiguous sentences.`,
        steps: [
          `Receive sentences with multiple parse trees (e.g., "I saw the man with the telescope")`,
          `Draw all possible parse trees`,
          `Explain how each parse corresponds to a different meaning`,
          `Discuss how a quantum approach might handle ambiguity through superposition`,
        ],
        outcomes: `Students understand grammatical ambiguity and its implications for QNLP.`,
      },
    ],
    project: {
      scope: `Create a reference guide for grammatical types in QNLP, showing how different parts of speech map to pregroup types and how they compose.`,
      objectives: [
        `List 10 common parts of speech and their pregroup types`,
        `Show example sentences with full type derivations`,
        `Explain the connection between pregroup reduction and quantum circuit connectivity`,
        `Include at least 3 example sentences with decreasing grammaticality`,
      ],
      timeline: [
        { phase: `Type catalogue creation`, duration: `3 min`, percent: 30 },
        { phase: `Example derivations`, duration: `3 min`, percent: 30 },
        { phase: `Quantum connection explanation`, duration: `2 min`, percent: 20 },
        { phase: `Review and finalise`, duration: `2 min`, percent: 20 },
      ],
      teamRoles: [
        { role: `Grammarian`, responsibility: `Catalogue parts of speech and pregroup types` },
        { role: `Derivation Specialist`, responsibility: `Work out example type derivations` },
        { role: `Quantum Link`, responsibility: `Explain the connection to quantum circuits` },
      ],
      deliverables: [
        `Grammatical types reference guide (1 page)`,
        `Example derivations for 5 sentences`,
        `Diagram showing pregroup reduction to quantum circuit mapping`,
      ],
    },
    questions: [
      {
        question: `Why are pregroup grammars particularly well-suited for QNLP compared to other grammatical formalisms?`,
        answer: `Pregroup grammars form a compact closed category — the same mathematical structure as the category of quantum processes (finite-dimensional Hilbert spaces and linear maps). This allows a direct mapping from grammatical derivations to quantum circuits.`,
        explanation: `The adjoint types (n^r, n^l) in pregroups correspond to the cups and caps (unit and counit) of compact closed categories. These are exactly the operations used to compose quantum systems. Other formalisms lack this direct categorical connection.`,
        commonMistake: `Thinking any formal grammar works for QNLP — the categorical structure of pregroups is uniquely suited`,
        tip: `Focus on the algebraic structure: in a pregroup, n·n^r ≤ 1 is the rule that corresponds to the cup in a string diagram`,
      },
      {
        question: `How does a parse tree differ from a pregroup derivation in what it tells us about meaning?`,
        answer: `A parse tree shows constituent hierarchy (which words group together) while a pregroup derivation shows the sequence of type contractions (how words combine left-to-right).`,
        explanation: `Both encode grammatical structure, but they capture different aspects. Parse trees emphasise hierarchical grouping (the "tree" structure), while pregroup derivations emphasise linear reduction (the "flow" of type contraction). The pregroup perspective maps more naturally to quantum circuits because the contractions correspond directly to tensor contractions.`,
        commonMistake: `Assuming parse trees and pregroup derivations are interchangeable — they capture complementary aspects of grammatical structure`,
        tip: `Think of the parse tree as the "what groups together" and the pregroup derivation as the "how they combine sequentially"`,
      },
    ],
    virtualLab: {
      description: `Interactive grammar lab — assign pregroup types, build parse trees, and see how grammatical structure determines the flow of meaning in a quantum circuit.`,
      steps: [
        `Enter a sentence or build one from a word bank`,
        `Assign pregroup types to each word`,
        `View the contraction derivation step by step`,
        `See the corresponding parse tree`,
        `Explore how the pregroup structure maps to a quantum circuit`,
      ],
      stepDetails: [
        `Choose from pre-built sentences or type your own — the lab supports simple S-V-O and S-V-O-O structures with noun modifiers`,
        `Drag and drop pregroup types onto words from a type palette — valid types include n (noun), s (sentence), n^r (noun right adjoint), n^l (noun left adjoint), and compound types like n^r·s·n^l`,
        `The derivation panel shows the contraction sequence step by step, highlighting which types are combining at each step — invalid sequences are flagged in red`,
        `The parse tree panel displays the corresponding phrase structure tree for comparison — click any node to see the constituent span`,
        `The quantum circuit preview shows how the pregroup derivation translates to qubit connectivity — each type becomes a qubit wire, each contraction becomes a Bell measurement or gate`,
      ],
      completionMessage: `You have mastered the connection between grammar and quantum structure!`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[Word Sequence]
        B --> C[Type Assignment]
        C --> D[Pregroup Derivation]
        D --> E[Type Contraction Steps]
        D --> F[Parse Tree View]
        E --> G[String Diagram]
        G --> H[Quantum Circuit Mapping]
        F --> I[Constituent Structure]`,
    },
    insights: {
      advantages: [
        `Clear mathematical foundation for grammatical composition`,
        `Pregroup structure directly maps to quantum circuits`,
        `Comparison of formalisms reveals the special role of compact closed categories`,
        `Understanding grammar computationally demystifies natural language syntax`,
      ],
      disadvantages: [
        `No single formalism captures all linguistic phenomena gracefully`,
        `Pregroup types must be manually assigned or learned from treebanks`,
        `Ambiguity in natural language creates multiple valid grammatical analyses`,
        `Formal grammars can be brittle when encountering ungrammatical but meaningful input`,
      ],
      futureScope: `Future QNLP systems will likely use learned grammatical types rather than manually assigned ones, with neural components predicting pregroup types from raw text. Hybrid grammatical formalisms that combine the categorical structure of pregroups with the coverage of dependency grammars may emerge. The categorical connection between grammar and quantum mechanics remains an active area of mathematical research.`,
      industrialApplications: [
        `Grammar checking and correction in word processors`,
        `Syntactic analysis for search engines and information extraction`,
        `Computer-assisted language learning (CALL) systems`,
        `Formal specification of domain-specific languages`,
      ],
      careerRelevance: `Understanding formal grammar is essential for NLP engineering roles, particularly in tasks requiring precise syntactic analysis. The categorical perspective on grammar is distinctive expertise that differentiates QNLP researchers from the broader NLP community.`,
    },
  },

  '8.2': {
    topicId: '8.2',
    learningObjective: `Understand the principle of compositionality (Frege's principle) and how it provides the foundation for computing meaning from structure.`,
    nextPrep: `Read about Frege's principle of compositionality and think about how it applies to your own language use.`,
    dependencyGraph: `flowchart LR
      A[8.1 Grammar and Meaning] --> B[8.2 Compositional Semantics]
      B --> C[8.3 Distributional Semantics]
      C --> D[8.4 DisCoCat Framework]`,
    storytelling: {
      story: `Imagine you are a chef creating a new dish. You understand the flavour of each ingredient individually — basil is aromatic, tomato is tangy, mozzarella is creamy. When you combine them in a caprese salad, the resulting flavour is not just the sum of individual flavours. It is a new, complex flavour where each ingredient modifies and is modified by the others. Similarly, the meaning of a sentence is not just the sum of word meanings. The meaning of "cat chases mouse" is different from "mouse chases cat" even though the words are the same. Compositionality explains how the arrangement of words creates new meaning from old.`,
      questions: [
        `Can you think of a phrase whose meaning cannot be predicted from its parts? (Hint: think idioms)`,
        `How does word order affect meaning? Give an example where changing order changes meaning entirely.`,
        `What would language be like if it were NOT compositional?`,
      ],
      connection: `Compositionality is the bridge between grammar and meaning. It says that the meaning of a complex expression is determined by the meanings of its parts and the rules used to combine them. This principle is what makes it possible to generate and understand an infinite number of sentences from a finite vocabulary. In QNLP, compositionality is realised through tensor contraction.`,
      technicalIntro: `Compositional semantics, rooted in Frege's principle (1892), holds that the meaning of a whole is a function of the meanings of its parts and their mode of syntactic combination. Formally, if E is an expression composed of subexpressions E₁, ..., Eₙ combined by syntactic rule R, then ⟦E⟧ = f_R(⟦E₁⟧, ..., ⟦Eₙ⟧), where ⟦·⟧ is the meaning function and f_R is a semantic operation corresponding to R. In type-logical semantics, each syntactic rule has a corresponding semantic operation — typically function application or abstraction. In the DisCoCat framework, the semantic operations become tensor contractions guided by pregroup types. This provides a unified treatment where syntax drives semantics directly.`,
      lifeSkills: `Compositionality is a powerful mental model beyond language. Complex systems in engineering, business, and nature are often compositional: the behaviour of the whole is determined by the parts and their interactions. Understanding this principle helps you design modular systems and predict emergent behaviour.`,
    },
    mathModelling: {
      need: `A mathematical model of compositionality is required to compute meanings of complex expressions from their parts.`,
      motivation: `Without compositionality, we would have to store the meaning of every possible sentence separately — an impossible task given the infinite creativity of language.`,
      challenge: `Specifying the semantic operations f_R for each syntactic rule R in a way that is both linguistically adequate and computationally tractable.`,
      equations: [
        {
          latex: `\\llbracket \\text{John walks} \\rrbracket = \\llbracket \\text{walks} \\rrbracket (\\llbracket \\text{John} \\rrbracket)`,
          meaning: `The meaning of "John walks" is obtained by applying the meaning of "walks" (a property) to the meaning of "John" (an entity).`,
          interpretation: `This is function application: "walks" denotes a function from entities to truth values, and "John" is an entity. The sentence meaning is the result of applying the function to the argument.`,
        },
        {
          latex: `\\llbracket \\text{every man walks} \\rrbracket = \\forall x (\\text{man}(x) \\rightarrow \\text{walks}(x))`,
          meaning: `The meaning of a universally quantified sentence involves logical quantification over individuals.`,
          interpretation: `Quantifiers like "every" introduce higher-order meaning that combines with a common noun (man) and a verb phrase (walks) to produce a quantified statement. This requires more complex semantic operations than simple function application.`,
        },
        {
          latex: `\\llbracket A \\cdot B \\rrbracket = \\llbracket A \\rrbracket \\otimes \\llbracket B \\rrbracket`,
          meaning: `In the DisCoCat framework, the meaning of combining expressions A and B is the tensor product of their individual meanings.`,
          interpretation: `Unlike classical function application where one expression is a function and the other an argument, here both expressions contribute symmetrically via tensor product. The grammatical type determines which indices are later contracted. This symmetric composition is the quantum-native form of compositionality.`,
        },
      ],
      variables: [
        { symbol: `\\llbracket \\cdot \\rrbracket`, name: `Semantic Interpretation`, description: `Maps expressions to their meanings` },
        { symbol: `f_R`, name: `Semantic Operation`, description: `Meaning combination rule corresponding to syntactic rule R` },
        { symbol: `\\otimes`, name: `Tensor Product`, description: `Symmetric composition operation in DisCoCat` },
        { symbol: `\\forall`, name: `Universal Quantifier`, description: `Logical quantifier meaning "for all"` },
      ],
      interactive: {
        equation: `\\llbracket \\text{subject verb} \\rrbracket = \\llbracket \\text{verb} \\rrbracket(\\llbracket \\text{subject} \\rrbracket)`,
        description: `Adjust entity and property vectors to see compositional meaning emerge:`,
        variables: [
          { symbol: `\\llbracket \\text{subj} \\rrbracket`, name: `Subject Meaning`, description: `Entity meaning of the subject` },
          { symbol: `\\llbracket \\text{verb} \\rrbracket`, name: `Verb Meaning`, description: `Property meaning of the verb` },
        ],
        sliders: [
          { name: `entity`, label: `Subject — entity vector dim 1`, min: 0, max: 1, step: 0.1, default: 0.7 },
          { name: `prop1`, label: `Verb — property dim 1`, min: -1, max: 1, step: 0.1, default: 0.8 },
          { name: `prop2`, label: `Verb — property dim 2`, min: -1, max: 1, step: 0.1, default: 0.3 },
        ],
      },
      charts: [
        {
          title: `Compositionality in Different Semantic Frameworks`,
          type: `radar`,
          data: [
            { dimension: `Function Application`, classical: 5, discocat: 3 },
            { dimension: `Tensor Composition`, classical: 1, discocat: 5 },
            { dimension: `Quantifier Handling`, classical: 5, discocat: 2 },
            { dimension: `Ambiguity Management`, classical: 3, discocat: 4 },
            { dimension: `Quantum Native`, classical: 1, discocat: 5 },
            { dimension: `Mathematical Simplicity`, classical: 3, discocat: 5 },
          ],
        },
        {
          title: `Compositional Complexity by Sentence Type`,
          type: `bar`,
          data: [
            { sentence: `S-V (Dogs sleep)`, operations: 1, tensor_rank: 2 },
            { sentence: `S-V-O (Cats chase mice)`, operations: 2, tensor_rank: 3 },
            { sentence: `S-V-O-O (Alice gave Bob a book)`, operations: 3, tensor_rank: 4 },
            { sentence: `S-V-O-Adv (John walks quickly)`, operations: 3, tensor_rank: 4 },
          ],
        },
      ],
      advantages: `Compositionality provides a principled, predictive theory of meaning. It explains how finite means (vocabulary and rules) generate infinite expressive power. In QNLP, compositionality through tensor contraction is computationally natural, mathematically elegant, and directly implementable on quantum hardware.`,
      limitations: `Not all language is fully compositional. Idioms ("kick the bucket"), collocations ("strong coffee" vs "powerful coffee"), and metaphors violate strict compositionality. Context and world knowledge also influence meaning beyond what syntax-driven composition can capture. QNLP's strong compositionality is both a strength (principled) and a limitation (cannot handle non-compositional phenomena without extensions).`,
    },
    activities: [
      {
        title: `Function Application Practice`,
        description: `Students practice computing meanings using function application with simple entity and property denotations.`,
        steps: [
          `Define entity meanings (e.g., John=john, Mary=mary)`,
          `Define verb meanings as functions (e.g., walks={john→true, mary→false})`,
          `Compute: ⟦Mary walks⟧ = walks(mary)`,
          `Create your own mini-model and compute 5 sentence meanings`,
        ],
        materials: `Worksheet with entity and function definitions`,
        timeRequired: `8 min`,
        outcomes: `Students understand function application as the basic compositional operation.`,
      },
      {
        title: `DisCoCat Composition Example`,
        description: `Students compute sentence meaning using tensor contraction in the DisCoCat framework.`,
        steps: [
          `Assign vectors to "Alice" and "Bob" (e.g., [1,0] and [0,1])`,
          `Define "loves" as a 2×2×2 tensor`,
          `Contract the indices according to the pregroup type n^r·s·n^l`,
          `Interpret the resulting sentence tensor`,
        ],
        materials: `Tensor contraction worksheet`,
        outcomes: `Students understand the difference between function application and tensor composition.`,
      },
      {
        title: `Idiom Challenge`,
        description: `Students identify and analyse non-compositional phrases, discussing how QNLP might handle them.`,
        steps: [
          `List 5 English idioms (e.g., "kick the bucket", "spill the beans")`,
          `Explain why they are non-compositional`,
          `Discuss: can QNLP represent idioms as atomic tensors?`,
          `Propose a hybrid approach for handling idioms in QNLP`,
        ],
        outcomes: `Students understand the limitations of pure compositionality.`,
      },
      {
        title: `Compositionality vs Connectionism Debate`,
        description: `Structured discussion on whether compositionality is learned (connectionist view) or built-in (symbolic view).`,
        steps: [
          `Form two groups: symbolic compositionality vs learned compositionality`,
          `Prepare arguments with examples from NLP`,
          `Present and debate`,
          `Discuss how QNLP takes a strong symbolic compositionality stance`,
        ],
        outcomes: `Students engage with the philosophical foundations of meaning composition.`,
      },
    ],
    project: {
      scope: `Create a mini compositional semantics for a fragment of English (10 nouns, 5 verbs, 2 determiners) and implement it both in classical function application and DisCoCat tensor composition.`,
      objectives: [
        `Define a vocabulary with meanings (entities, sets, or vectors)`,
        `Specify semantic rules for S→NP VP, VP→V NP, NP→Det N`,
        `Implement classical compositional semantics using function application`,
        `Implement the same fragment using DisCoCat tensor contraction`,
        `Compare the two implementations`,
      ],
      timeline: [
        { phase: `Vocabulary and meaning definition`, duration: `3 min`, percent: 25 },
        { phase: `Classical implementation`, duration: `3 min`, percent: 25 },
        { phase: `DisCoCat implementation`, duration: `4 min`, percent: 35 },
        { phase: `Comparison and write-up`, duration: `2 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Semanticist`, responsibility: `Define meanings and composition rules` },
        { role: `Classical Implementer`, responsibility: `Code function application semantics` },
        { role: `QNLP Implementer`, responsibility: `Code DisCoCat tensor composition` },
      ],
      deliverables: [
        `Compositional semantics specification`,
        `Working classical implementation (Python notebook)`,
        `Working DisCoCat implementation (Python notebook)`,
        `Comparison report highlighting differences`,
      ],
    },
    questions: [
      {
        question: `What is Frege's principle of compositionality and why is it important for QNLP?`,
        answer: `Frege's principle states that the meaning of a complex expression is determined by the meanings of its parts and the rules used to combine them. In QNLP, this principle is realised through tensor contraction guided by grammar types.`,
        explanation: `The principle enables us to compute meanings of novel sentences from known words and rules, without needing to store every possible sentence meaning. The DisCoCat framework implements this through the mathematical structure of compact closed categories, where grammatical composition directly determines tensor contraction patterns.`,
        commonMistake: `Thinking compositionality means "adding" word meanings — it involves structured combination, not summation`,
        tip: `Think of compositionality as a recipe: the words are ingredients, grammar is the cooking method, and meaning is the finished dish`,
      },
      {
        question: `How does DisCoCat's tensor composition differ from classical function application in compositional semantics?`,
        answer: `Classical function application treats one expression as a function and the other as an argument. DisCoCat's tensor composition uses symmetric tensor products where all expressions contribute equally, and grammatical types determine which indices contract.`,
        explanation: `In classical semantics, "John" is an entity (type e) and "walks" is a function from entities to truth values (type ⟨e,t⟩). The combination is asymmetrical: walks(john). In DisCoCat, both "John" and "walks" are tensors, and their tensor product is partially contracted according to pregroup types. This symmetric treatment is more natural for quantum systems.`,
        commonMistake: `Assuming tensor composition and function application are the same — tensor composition is more symmetric and general`,
        tip: `Function application is a special case of tensor contraction where one tensor is a vector and the other is a matrix`,
      },
    ],
    virtualLab: {
      description: `Interactive compositional semantics lab — build sentences from words, apply composition rules, and see how meaning emerges step by step.`,
      steps: [
        `Select a sentence template (S-V, S-V-O, or quantified)`,
        `Choose words and see their individual meanings`,
        `Apply composition rules step by step`,
        `Toggle between classical function application and tensor composition views`,
        `Compare the resulting sentence meanings`,
      ],
      stepDetails: [
        `Start with an S-V sentence like "Dogs sleep" — the lab shows entity vectors for "dogs" and property vectors for "sleep"`,
        `Click "Apply Composition" to see the function application ⟦sleep⟧(⟦dogs⟧) — the result is computed and shown as a truth value or weighted score`,
        `Toggle to DisCoCat view — the same sentence is now composed via tensor product and contraction, showing the intermediate tensor network`,
        `For quantified sentences ("Every dog sleeps"), the lab shows how quantifiers introduce higher-order operations that require more complex tensor contractions`,
        `The comparison panel shows both approaches side by side with the same colours for corresponding operations — green for entity, blue for property, red for quantifier`,
      ],
      completionMessage: `You have mastered the principles of compositional semantics in both classical and quantum frameworks!`,
      dataFlow: `flowchart LR
        A[Words] --> B[Individual Meanings]
        B --> C{Composition Framework}
        C --> D[Classical Function Application]
        C --> E[DisCoCat Tensor Contraction]
        D --> F[Truth-Conditional Meaning]
        E --> G[Meaning Tensor]
        F --> H[Comparison]
        G --> H`,
    },
    insights: {
      advantages: [
        `Principled account of how finite vocabulary generates infinite meanings`,
        `Clear mathematical framework connecting syntax and semantics`,
        `DisCoCat provides a quantum-native form of compositionality`,
        `Explains systematicity and productivity of human language`,
      ],
      disadvantages: [
        `Pure compositionality fails for idioms, metaphors, and other non-compositional phenomena`,
        `Requires careful specification of semantic operations for each syntactic rule`,
        `Ambiguity in natural language creates multiple valid compositional analyses`,
        `World knowledge and context modify meaning in ways compositionality alone cannot capture`,
      ],
      futureScope: `Future work in QNLP will extend compositional semantics to handle non-compositional phenomena through enriched tensor structures (e.g., idioms as atomic tensors), incorporate probabilistic and context-sensitive composition, and scale to larger grammatical fragments. The tension between pure compositionality and practical language use will be a ongoing research theme.`,
      industrialApplications: [
        `Formal verification of meaning in legal and technical documents`,
        `Compositional question answering for structured knowledge bases`,
        `Language generation with verifiable semantic content`,
        `Cross-lingual meaning preservation in machine translation`,
      ],
      careerRelevance: `Understanding compositional semantics is essential for NLP roles involving semantic parsing, formal verification of language, and any task requiring precise meaning computation. The DisCoCat perspective is unique expertise that combines linguistics and quantum computing.`,
    },
  },

  '8.3': {
    topicId: '8.3',
    learningObjective: `Understand distributional semantics — how word meanings are learned from patterns of co-occurrence in large text corpora — and its role in modern NLP.`,
    nextPrep: `Think about how you might guess the meaning of an unfamiliar word from the words that appear around it in text.`,
    dependencyGraph: `flowchart LR
      A[8.2 Compositional Semantics] --> B[8.3 Distributional Semantics]
      B --> C[8.4 DisCoCat Framework]`,
    storytelling: {
      story: `Imagine an alien who has landed on Earth and is trying to learn English by reading only the internet. The alien has never seen a cat, a dog, or a mouse, but notices that the word "cat" always appears near words like "pet", "furry", "meow", and "cute", while "dog" appears near "bark", "fetch", and "loyal". Meanwhile, "mouse" appears near both "cheese" (animal) and "click", "cursor", "screen" (computer). The alien will learn a lot about these words from the company they keep — this is distributional semantics. The alien will also notice that "mouse" keeps two different types of company, revealing its ambiguity — a nuance that grammar alone cannot capture.`,
      questions: [
        `How many occurrences of a word do you need to see before you can guess its meaning from context?`,
        `Can distributional semantics capture all aspects of word meaning? What might it miss?`,
        `If "king" and "queen" appear in similar contexts, should they have similar vectors? What does similarity mean here?`,
      ],
      connection: `Distributional semantics provides the empirical, data-driven component of QNLP. While compositionality (from 8.2) tells us HOW meanings combine, distributional semantics tells us WHAT the meanings of individual words are — they are vectors learned from co-occurrence statistics. The DisCoCat framework combines both: distributional word vectors are composed using compositional rules derived from grammar.`,
      technicalIntro: `Distributional semantics is built on the distributional hypothesis (Harris, 1954; Firth, 1957): "You shall know a word by the company it keeps." Words that appear in similar contexts tend to have similar meanings. Formally, the meaning of a word w is a vector v_w ∈ ℝ^d where each dimension corresponds to a context feature (e.g., co-occurrence with another word). These vectors are learned from large corpora using methods like word-word co-occurrence matrix factorisation (GloVe), predictive neural networks (Word2Vec), or contextualised embeddings (BERT, ELMo). The resulting vector spaces exhibit geometric properties: similar words cluster, analogies become vector arithmetic (king - man + woman ≈ queen), and semantic dimensions emerge from the statistical structure of language use.`,
      lifeSkills: `Distributional semantics teaches a powerful epistemological lesson: meaning comes from context. The identity and purpose of things — whether words, objects, or people — is revealed by the patterns of their interactions. This contextual view of meaning is as applicable to understanding organisations, ecosystems, and markets as it is to language.`,
    },
    mathModelling: {
      need: `A mathematical model of word meaning based on distributional statistics is required to provide the empirical content for QNLP's word representations.`,
      motivation: `Word meanings cannot be manually specified for all words in a language. They must be learned automatically from data, and distributional methods provide a principled way to do this.`,
      challenge: `Learning vector representations that capture semantically relevant dimensions while being computationally tractable and scalable to large vocabularies.`,
      equations: [
        {
          latex: `M_{ij} = \\log\\left(\\frac{\\text{count}(w_i, c_j) \\cdot N}{\\text{count}(w_i) \\cdot \\text{count}(c_j)}\\right)`,
          meaning: `Pointwise Mutual Information (PMI) measures how much more often word w_i and context c_j co-occur than expected by chance.`,
          interpretation: `A high PMI indicates a strong semantic association. PMI weighting is preferred over raw co-occurrence counts because it downweights frequent but uninformative context words (like "the") and upweights specifically associated words.`,
        },
        {
          latex: `J(w_i, w_j) = \\frac{\\vec{v}_i \\cdot \\vec{v}_j}{\\|\\vec{v}_i\\| \\|\\vec{v}_j\\|}`,
          meaning: `Cosine similarity between word vectors measures semantic relatedness on a scale from -1 to 1.`,
          interpretation: `Words with cosine similarity near 1 are semantically similar (e.g., "car" and "automobile"), near 0 are unrelated ("car" and "flower"), and near -1 are antonyms (rare in standard embeddings). This geometric similarity is the empirical foundation of distributional semantics.`,
        },
        {
          latex: `\\vec{v}_{\\text{king}} - \\vec{v}_{\\text{man}} + \\vec{v}_{\\text{woman}} \\approx \\vec{v}_{\\text{queen}}`,
          meaning: `Word vector arithmetic captures analogical relationships through vector offsets.`,
          interpretation: `The offset encoding the "male→female" gender transformation, learned from pairs like (man, woman), generalises to other pairs like (king, queen). This shows that word vectors encode relational structure, not just individual word meanings. The same vector offset can represent the same relationship across multiple word pairs.`,
        },
      ],
      variables: [
        { symbol: `M_{ij}`, name: `PMI Matrix`, description: `Pointwise Mutual Information between word i and context j` },
        { symbol: `\\vec{v}_i`, name: `Word Vector`, description: `d-dimensional distributional vector for word i` },
        { symbol: `w_i`, name: `Word i`, description: `The i-th word in the vocabulary` },
        { symbol: `c_j`, name: `Context j`, description: `The j-th context feature (e.g., neighbouring word)` },
        { symbol: `N`, name: `Total Count`, description: `Total number of word-context pairs in the corpus` },
      ],
      interactive: {
        equation: `\\text{PMI}(w, c) = \\log\\left(\\frac{P(w, c)}{P(w) P(c)}\\right)`,
        description: `Adjust co-occurrence counts to see how PMI captures word-context associations:`,
        variables: [
          { symbol: `P(w,c)`, name: `Joint Probability`, description: `Probability that word w and context c co-occur` },
          { symbol: `P(w)`, name: `Word Probability`, description: `Marginal probability of word w` },
          { symbol: `P(c)`, name: `Context Probability`, description: `Marginal probability of context c` },
        ],
        sliders: [
          { name: `joint`, label: `Co-occurrence count`, min: 1, max: 1000, step: 1, default: 50 },
          { name: `pw`, label: `Word frequency`, min: 10, max: 10000, step: 10, default: 500 },
          { name: `pc`, label: `Context frequency`, min: 10, max: 10000, step: 10, default: 200 },
        ],
      },
      charts: [
        {
          title: `Distributional Semantics Methods Comparison`,
          type: `radar`,
          data: [
            { criteria: `Semantic Accuracy`, pmi: 3, word2vec: 4, glove: 4, bert: 5 },
            { criteria: `Computational Cost`, pmi: 5, word2vec: 4, glove: 4, bert: 2 },
            { criteria: `Context Sensitivity`, pmi: 1, word2vec: 1, glove: 1, bert: 5 },
            { criteria: `Vector Quality`, pmi: 3, word2vec: 4, glove: 4, bert: 5 },
            { criteria: `Scalability`, pmi: 3, word2vec: 4, glove: 5, bert: 2 },
            { criteria: `QNLP Compatibility`, pmi: 4, word2vec: 4, glove: 4, bert: 3 },
          ],
        },
        {
          title: `Semantic Neighbourhood — "King" and Neighbours`,
          type: `bar`,
          data: [
            { word: `queen`, similarity: 0.85 },
            { word: `prince`, similarity: 0.78 },
            { word: `royal`, similarity: 0.72 },
            { word: `throne`, similarity: 0.65 },
            { word: `crown`, similarity: 0.62 },
            { word: `emperor`, similarity: 0.58 },
            { word: `monarch`, similarity: 0.55 },
            { word: `palace`, similarity: 0.50 },
          ],
        },
      ],
      advantages: `Distributional semantics provides a data-driven, scalable method for learning word meanings from raw text. It captures nuanced semantic relationships, supports analogical reasoning through vector arithmetic, and has been empirically validated on numerous NLP tasks. The resulting vectors are directly usable as the word representations in the DisCoCat framework.`,
      limitations: `Standard distributional models produce static vectors that cannot handle polysemy (multiple meanings of the same word). They require large corpora for reliable estimates, and they capture only statistical patterns of language use, not the underlying cognitive or referential aspects of meaning. Bias in training data is reflected and potentially amplified in the learned vectors. Contextualised embeddings (BERT, etc.) address some limitations but are computationally expensive.`,
    },
    activities: [
      {
        title: `Manual Co-occurrence Counting`,
        description: `Students manually compute word co-occurrence statistics from a small corpus.`,
        steps: [
          `Receive a small corpus of 5 sentences`,
          `For each word, count co-occurrences with every other word within a window of 2`,
          `Build a co-occurrence matrix`,
          `Compute cosine similarity between two word vectors`,
        ],
        materials: `Small printed corpus, worksheet`,
        timeRequired: `10 min`,
        outcomes: `Students understand the basic mechanics of distributional semantics.`,
      },
      {
        title: `Word2Vec Analogy Exploration`,
        description: `Students use pre-trained Word2Vec to explore analogies and semantic relationships.`,
        steps: [
          `Load pre-trained Word2Vec embeddings in Python`,
          `Compute: king - man + woman = ?`,
          `Find the top 5 nearest neighbours for 3 words`,
          `Create your own analogy and test it`,
        ],
        materials: `Jupyter notebook with Word2Vec`,
        outcomes: `Students observe the geometric properties of distributional vectors.`,
      },
      {
        title: `Polysemy Detection`,
        description: `Students identify words with multiple meanings using nearest neighbours.`,
        steps: [
          `Load word vectors for "bank", "mouse", "crane", "bat"`,
          `Find top 10 neighbours for each`,
          `Identify if neighbours cluster into distinct meaning groups`,
          `Discuss how static vectors fail for polysemous words`,
        ],
        outcomes: `Students understand the limitations of static word vectors.`,
      },
      {
        title: `PMI vs Raw Count Comparison`,
        description: `Students compute and compare PMI-weighted and raw co-occurrence vectors.`,
        steps: [
          `Compute raw co-occurrence vectors for "the", "cat", "dog"`,
          `Compute PMI-weighted vectors for the same words`,
          `Compare the similarity matrices`,
          `Discuss why PMI improves semantic quality`,
        ],
        outcomes: `Students understand the importance of weighting in distributional semantics.`,
      },
    ],
    project: {
      scope: `Build a small distributional semantics model from a custom corpus, evaluate its quality through word similarity and analogy tasks, and prepare the vectors for use in a DisCoCat sentence composition pipeline.`,
      objectives: [
        `Collect or curate a small domain-specific corpus (e.g., 50 sentences about animals)`,
        `Build a word-word co-occurrence matrix with PMI weighting`,
        `Reduce dimensionality using SVD (creating a word embedding space)`,
        `Evaluate the vectors on a word similarity task`,
        `Export the vectors in a format compatible with the lambeq library`,
      ],
      timeline: [
        { phase: `Corpus preparation`, duration: `3 min`, percent: 25 },
        { phase: `Co-occurrence matrix construction`, duration: `3 min`, percent: 25 },
        { phase: `SVD and embedding generation`, duration: `3 min`, percent: 25 },
        { phase: `Evaluation and export`, duration: `3 min`, percent: 25 },
      ],
      teamRoles: [
        { role: `Corpus Curator`, responsibility: `Prepare and clean the text corpus` },
        { role: `Matrix Builder`, responsibility: `Implement co-occurrence counting and PMI` },
        { role: `Embedding Engineer`, responsibility: `Run SVD and evaluate embeddings` },
      ],
      deliverables: [
        `Domain-specific word embedding vectors (10+ words)`,
        `Evaluation report on word similarity task`,
        `Export file compatible with lambeq word reader`,
      ],
    },
    questions: [
      {
        question: `What is the distributional hypothesis and why is it foundational for modern NLP?`,
        answer: `The distributional hypothesis states that words that appear in similar contexts have similar meanings (Firth, 1957). It is foundational because it provides a way to learn word meanings automatically from text data without manual annotation.`,
        explanation: `The hypothesis operationalises meaning as a mathematical object (a vector) that can be computed from observable data (co-occurrence statistics). This insight underlies essentially all modern NLP, from Word2Vec and GloVe to BERT and GPT. Without it, we would have no empirical method for acquiring word representations at scale.`,
        commonMistake: `Thinking distributional similarity captures ALL aspects of meaning — it captures usage patterns but not reference, truth conditions, or conceptual content`,
        tip: `The slogan "you shall know a word by the company it keeps" captures the essence: a word's distributional vector is a summary of its typical contexts`,
      },
      {
        question: `How does the DisCoCat framework use distributional word vectors?`,
        answer: `DisCoCat uses distributional word vectors as the input meanings of individual words, which are then composed into sentence meanings using tensor contractions guided by grammatical types.`,
        explanation: `Distributional semantics provides the "what" (word meanings as vectors), and compositional semantics provides the "how" (how vectors combine). The vector for "cat" comes from distributional analysis of text corpora. The sentence meaning for "cat chases mouse" is computed by applying the tensor contraction pattern of the transitive verb to the vectors for "cat" and "mouse".`,
        commonMistake: `Assuming distributional vectors alone are sufficient for sentence meaning — composition is essential`,
        tip: `Distributional semantics and compositional semantics are complementary: one provides the ingredients, the other provides the recipe`,
      },
    ],
    virtualLab: {
      description: `Interactive distributional semantics lab — explore word vectors, compute similarities, perform analogies, and see how distributional meanings feed into the QNLP pipeline.`,
      steps: [
        `Enter a word to see its distributional vector`,
        `Find the top 10 most similar words`,
        `Perform vector arithmetic analogies`,
        `Visualise the vector space in 2D using PCA`,
        `Export a word vector for use in the DisCoCat sentence composer`,
      ],
      stepDetails: [
        `Type any word — the lab has 50,000 pre-loaded GloVe 300-dimensional vectors. The vector is displayed as a heatmap showing the top 20 most active dimensions`,
        `Click "Find Neighbours" to compute cosine similarity against the entire vocabulary — results are shown as a ranked list with similarity scores and a similarity heatmap`,
        `In the analogy panel, enter queries like "king : man :: queen : ?" — the lab computes the vector arithmetic and shows the top 5 candidates`,
        `The 2D visualisation uses PCA projection — select multiple words to see their positions, coloured by semantic category (animals, places, people, etc.)`,
        `The export panel lets you select a word and download its vector in JSON format compatible with the lambeq library for use in sentence composition experiments`,
      ],
      completionMessage: `You have mastered distributional semantics — the data-driven foundation for word meanings in QNLP!`,
      dataFlow: `flowchart LR
        A[Input Word] --> B[Word Vector Lookup]
        B --> C[Nearest Neighbours]
        B --> D[Vector Arithmetic]
        D --> E[Analogy Results]
        B --> F[PCA Projection]
        F --> G[2D Visualisation]
        B --> H[Vector Export]
        H --> I[Lambeq Composer]`,
    },
    insights: {
      advantages: [
        `Data-driven word meanings learned from naturally occurring text`,
        `Geometric structure enables analogical reasoning and similarity measurement`,
        `Scalable to large vocabularies with efficient algorithms`,
        `Directly compatible with the DisCoCat compositional framework`,
      ],
      disadvantages: [
        `Static vectors cannot handle polysemy or context-sensitivity`,
        `Requires large corpora for reliable estimates (Zipfian distribution problem)`,
        `Captures usage patterns but not reference, truth, or conceptual content`,
        `Bias and stereotyping in training data propagate to vectors`,
      ],
      futureScope: `The next generation of distributional semantics for QNLP will likely use contextualised embeddings that can dynamically adjust word meaning based on sentence context. However, the challenge is making contextualised representations compatible with the tensor-based compositional framework of DisCoCat, which expects fixed word meanings. Hybrid approaches that use distributional vectors for content words and contextualised representations for function words may emerge.`,
      industrialApplications: [
        `Semantic search and information retrieval`,
        `Recommendation systems based on content similarity`,
        `Automatic thesaurus generation for writing assistance`,
        `Cross-lingual word alignment for machine translation`,
      ],
      careerRelevance: `Distributional semantics expertise is fundamental for NLP engineering roles. Understanding how word vectors are created, what they capture, and their limitations is essential for anyone working with text data in machine learning contexts.`,
    },
  },

  '8.4': {
    topicId: '8.4',
    learningObjective: `Understand the DisCoCat (Distributional Compositional Categorical) framework that unifies distributional and compositional semantics using the mathematics of compact closed categories.`,
    nextPrep: `Review the concepts of compact closed categories, tensor products, and cups/caps from the quantum computing modules (Module 5).`,
    dependencyGraph: `flowchart LR
      A[8.2 Compositional Semantics] --> B[8.3 Distributional Semantics]
      A --> C[8.4 DisCoCat Framework]
      B --> C
      C --> D[8.5 Diagrammatic Representation]
      D --> E[8.6 Visualising Sentences]`,
    storytelling: {
      story: `Imagine two ancient maps of the same territory. One map shows the landscape as points and coordinates (distributional semantics: words as points in space). The other map shows travel routes connecting cities (compositional semantics: grammatical rules connecting words). Alone, each map is incomplete. The coordinate map tells you where things are but not how to travel between them. The route map tells you how to navigate but not what each place is. DisCoCat is the master map that overlays both — it shows both the locations (word vectors) and the routes (grammatical contractions) on a single unified chart. The mathematics of category theory is the cartographic technology that makes this overlay possible.`,
      questions: [
        `Why is it useful to think of grammar and meaning as being the same kind of mathematical structure?`,
        `What do you gain by unifying distributional and compositional semantics into a single framework?`,
        `Can you think of other fields where two complementary approaches could be unified through a shared mathematical structure?`,
      ],
      connection: `DisCoCat is the theoretical heart of QNLP. It resolves a fundamental tension in linguistics: distributional semantics captures word meanings empirically but cannot explain how they compose, while compositional semantics explains composition but takes word meanings as unanalysed primitives. DisCoCat uses the mathematics of compact closed categories to do both simultaneously. This categorical framework is the same structure underlying quantum mechanics, providing a direct bridge to quantum computation.`,
      technicalIntro: `The DisCoCat framework (Coecke, Sadrzadeh, Clark, 2010) combines distributional and compositional semantics using compact closed categories. In this framework, grammatical types are objects in a compact closed category, word meanings are morphisms (or states), and grammatical composition corresponds to categorical composition (specifically, tensor contraction using the cup morphisms of the compact closed structure). Formally, a pregroup grammar forms a compact closed category Preg, and vector spaces form a compact closed category FVect. A monoidal functor F: Preg → FVect maps grammatical types to vector spaces and grammatical derivations to linear maps (tensor contractions). The meaning of a sentence is obtained by applying the functor to its grammatical derivation, producing a vector (or tensor) that represents the sentence meaning computed from the meanings of its words.`,
      lifeSkills: `DisCoCat exemplifies the power of categorical thinking — finding the common mathematical structure underlying seemingly different domains. Category theory is the mathematics of analogy, and learning to think categorically develops the ability to transfer knowledge and methods between fields. This is perhaps the most transferable intellectual skill there is.`,
    },
    mathModelling: {
      need: `A unified mathematical framework is needed to simultaneously represent word meanings (as vectors) and their grammatical composition (as tensor operations).`,
      motivation: `Before DisCoCat, distributional and compositional semantics were separate research communities with incompatible formalisms. DisCoCat showed they are not just compatible but are instances of the same categorical structure.`,
      challenge: `Constructing a functor from the category of grammar (pregroups) to the category of meaning (vector spaces) that preserves the compositional structure.`,
      equations: [
        {
          latex: `\\mathcal{C} = \\text{Compact Closed Category}`,
          meaning: `A compact closed category C has objects, morphisms, tensor products, and for each object A, left and right adjoints A^l and A^r with unit and counit morphisms.`,
          interpretation: `Both pregroup grammars and finite-dimensional vector spaces form compact closed categories. The unit morphisms (η: I → A ⊗ A^r) and counit morphisms (ε: A^r ⊗ A → I) correspond to caps and cups in string diagrams, which implement type contraction in grammar and trace/contraction in vector spaces.`,
        },
        {
          latex: `F: \\text{Preg} \\rightarrow \\text{FVect}`,
          meaning: `A monoidal functor F maps the pregroup category to the category of finite-dimensional vector spaces.`,
          interpretation: `F sends each grammatical type (n, s, etc.) to a vector space (N, S, etc.) and each pregroup derivation to a linear map. The functor preserves the tensor product structure: F(A ⊗ B) = F(A) ⊗ F(B). This means grammatical composition directly becomes tensor contraction.`,
        },
        {
          latex: `\\llbracket \\text{sentence} \\rrbracket = F(\\text{derivation}) \\left( \\bigotimes_i \\llbracket w_i \\rrbracket \\right)`,
          meaning: `The meaning of a sentence is the result of applying the functorial image of the grammatical derivation to the tensor product of word meanings.`,
          interpretation: `The grammatical derivation tells you the pattern of tensor contractions. Word meanings are vectors living in the spaces assigned by F. The derivation's cup morphisms determine which indices are contracted. The result is a vector (or tensor) in the space F(s) = S representing the sentence meaning.`,
        },
      ],
      variables: [
        { symbol: `\\mathcal{C}`, name: `Compact Closed Category`, description: `Mathematical structure with tensor products and adjoints` },
        { symbol: `F`, name: `Monoidal Functor`, description: `Structure-preserving map from grammar to meaning` },
        { symbol: `\\text{Preg}`, name: `Pregroup Category`, description: `Category of grammatical types and derivations` },
        { symbol: `\\text{FVect}`, name: `Vector Space Category`, description: `Category of vector spaces and linear maps` },
        { symbol: `\\otimes`, name: `Tensor Product`, description: `Combines objects or spaces in both categories` },
      ],
      interactive: {
        equation: `F: n \\mapsto N, \\quad s \\mapsto S, \\quad \\text{(functor on objects)}`,
        description: `Explore how the DisCoCat functor maps grammatical structures to vector space operations:`,
        variables: [
          { symbol: `N`, name: `Noun Space`, description: `Vector space dimension for noun meanings` },
          { symbol: `S`, name: `Sentence Space`, description: `Vector space dimension for sentence meanings` },
          { symbol: `\\text{type}`, name: `Grammatical Type`, description: `Pregroup type being mapped` },
        ],
        sliders: [
          { name: `dimN`, label: `Noun space dimension`, min: 2, max: 32, step: 2, default: 8 },
          { name: `dimS`, label: `Sentence space dimension`, min: 2, max: 32, step: 2, default: 8 },
        ],
      },
      charts: [
        {
          title: `DisCoCat: Unifying Two Traditions`,
          type: `bar`,
          data: [
            { component: `Word Meanings`, distributional: 5, compositional: 0, discocat: 5 },
            { component: `Composition Rules`, distributional: 0, compositional: 5, discocat: 5 },
            { component: `Empirical Learning`, distributional: 5, compositional: 0, discocat: 4 },
            { component: `Grammatical Coverage`, distributional: 0, compositional: 5, discocat: 4 },
            { component: `Quantum Compatibility`, distributional: 2, compositional: 3, discocat: 5 },
            { component: `Mathematical Unity`, distributional: 2, compositional: 2, discocat: 5 },
          ],
        },
        {
          title: `Sentence Meaning Dimensions by Sentence Type`,
          type: `bar`,
          data: [
            { sentence: `Dogs sleep`, dim: 8, contractions: 1 },
            { sentence: `Cats chase mice`, dim: 8, contractions: 2 },
            { sentence: `Alice gave Bob a book`, dim: 8, contractions: 3 },
            { sentence: `John thinks Mary walks`, dim: 16, contractions: 3 },
          ],
        },
      ],
      advantages: `DisCoCat provides a mathematically rigorous unification of distributional and compositional semantics. The categorical framework ensures that composition is structure-preserving, not ad hoc. The connection to quantum mechanics (both are compact closed categories) provides a direct path to quantum computation. The framework is modular: different choices of F (different vector space assignments) lead to different models within the same overarching theory.`,
      limitations: `The framework currently handles only simple grammatical constructions. Extensions to quantifiers, relative clauses, and anaphora require more complex categorical machinery (e.g., Frobenius algebras or decorated string diagrams). The functor F must be specified in advance — learning the optimal mapping from data is an open problem. The computational complexity of tensor contraction grows exponentially with the rank of the tensors involved, limiting practical application.`,
    },
    activities: [
      {
        title: `DisCoCat Functor Construction`,
        description: `Students manually construct a DisCoCat functor for a small grammar fragment.`,
        steps: [
          `Define the pregroup category with types: n, s, n^r, n^l`,
          `Define the vector space category: choose dimensions for N and S`,
          `Specify the functor F: n → N, s → S, n^r → N, n^l → N`,
          `Verify that F preserves the compact closed structure`,
        ],
        materials: `Category theory worksheet, vector space reference`,
        timeRequired: `12 min`,
        outcomes: `Students understand the functorial mapping from grammar to meaning.`,
      },
      {
        title: `Tensor Contraction Calculation`,
        description: `Students compute sentence meaning through tensor contraction for a simple S-V-O sentence.`,
        steps: [
          `Assign 2D vectors to "Alice" and "Bob"`,
          `Define "loves" as a 2×2×2 tensor (type n⊗s⊗n)`,
          `Contract according to the pregroup derivation pattern`,
          `Interpret the resulting 2D sentence vector`,
        ],
        materials: `Tensor contraction worksheet`,
        outcomes: `Students perform the core DisCoCat computation manually.`,
      },
      {
        title: `Comparing DisCoCat with Classical Composition`,
        description: `Students compare DisCoCat sentence meanings with classical function-application composition.`,
        steps: [
          `Compute "Alice loves Bob" using classical function application`,
          `Compute the same sentence using DisCoCat tensor contraction`,
          `Compare the mathematical structures of the two computations`,
          `Discuss the philosophical differences between the approaches`,
        ],
        outcomes: `Students understand the conceptual shift from function application to tensor contraction.`,
      },
      {
        title: `Functor Design Challenge`,
        description: `Design a DisCoCat functor for an extended grammar that includes adjectives.`,
        steps: [
          `Extend the pregroup with adjective type n·n^l`,
          `Decide the vector space for adjectives (e.g., N → N, a linear map)`,
          `Specify how the functor handles the new type`,
          `Test with "red car": compute the meaning of the adjective-noun phrase`,
        ],
        outcomes: `Students extend the DisCoCat framework to new grammatical constructions.`,
      },
    ],
    project: {
      scope: `Implement a DisCoCat model for a small grammar fragment (S-V, S-V-O, and N-Adj) in Python, including the pregroup grammar, the functor, and the sentence meaning computation.`,
      objectives: [
        `Implement the pregroup grammar with types and contraction rules`,
        `Define the vector spaces for noun and sentence meanings`,
        `Implement the functor mapping grammar to vector operations`,
        `Compute meanings for at least 5 example sentences`,
        `Verify that the computed meanings behave as expected (e.g., similar sentences have similar meaning vectors)`,
      ],
      timeline: [
        { phase: `Pregroup grammar implementation`, duration: `4 min`, percent: 30 },
        { phase: `Vector space and functor`, duration: `4 min`, percent: 30 },
        { phase: `Sentence meaning computation`, duration: `3 min`, percent: 25 },
        { phase: `Testing and verification`, duration: `2 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Grammar Implementer`, responsibility: `Implement the pregroup grammar` },
        { role: `Functor Engineer`, responsibility: `Implement the category-to-vector mapping` },
        { role: `Experimenter`, responsibility: `Test with example sentences and verify results` },
      ],
      deliverables: [
        `Working DisCoCat implementation (Python notebook)`,
        `Example sentence meanings for 5 test cases`,
        `Documentation of the functor specification`,
      ],
    },
    questions: [
      {
        question: `What is the role of the monoidal functor F in the DisCoCat framework?`,
        answer: `The functor F maps grammatical types to vector spaces and grammatical derivations to linear maps (tensor contractions), preserving the compositional structure so that meaning computation mirrors grammar.`,
        explanation: `F is the bridge between the syntactic domain (pregroup grammar) and the semantic domain (vector spaces). It ensures that the way words combine grammatically is exactly the way their meanings combine tensorially. This is what makes DisCoCat a unified framework rather than just a combination of two separate theories.`,
        commonMistake: `Thinking F just assigns vectors to words — it also assigns grammatical derivations to tensor contraction patterns`,
        tip: `Focus on the functor: it is the mathematical device that makes grammar AND meaning two sides of the same coin`,
      },
      {
        question: `Why do both pregroup grammars and vector spaces form compact closed categories, and why is this important?`,
        answer: `Both have tensor products and adjoints (cups and caps) that allow contraction. This shared structure means the functor F preserves the composition mechanism, so grammatical composition directly becomes tensor contraction.`,
        explanation: `In a compact closed category, every object A has a dual A* with morphisms η: I → A* ⊗ A and ε: A ⊗ A* → I (the cup and cap). In pregroups, these correspond to type contraction (n·n^r ≤ 1). In vector spaces, they correspond to tensor contraction (trace). The functor maps one to the other, making grammatical composition computable as linear algebra.`,
        commonMistake: `Assuming any mathematical structure would work — the compact closed property is essential for the mapping to preserve composition`,
        tip: `The compact closed structure is what makes the "magic" of DisCoCat possible: grammatical "wiring" directly becomes tensor "wiring"`,
      },
    ],
    virtualLab: {
      description: `Interactive DisCoCat lab — build a functor, load word vectors, compose sentences, and see the full pipeline from grammar to meaning to quantum circuit.`,
      steps: [
        `Define the grammar fragment (choose which types to include)`,
        `Specify the functor (set vector space dimensions)`,
        `Load or create word vectors for a small vocabulary`,
        `Enter a sentence and view the full DisCoCat derivation`,
        `See the quantum circuit that implements the composition`,
      ],
      stepDetails: [
        `Start by selecting from pre-built grammars: S-V (intransitive), S-V-O (transitive), or S-V-O-O (ditransitive) — each comes with pre-assigned pregroup types for all words`,
        `The functor panel lets you set dimensions for N (noun space) and S (sentence space) — the verb space dimensions are automatically derived from the pregroup type`,
        `Word vectors can be loaded from the distributional semantics lab (8.3) or manually entered — the lab validates that vector dimensions match the functor's space dimensions`,
        `When you submit a sentence, the lab shows: (1) the pregroup derivation tree, (2) the string diagram, (3) the tensor network with labelled contractions, (4) the resulting sentence vector`,
        `The quantum circuit panel shows the equivalent circuit — each word becomes a gate, each contraction becomes a Bell measurement — ready for execution on a simulator or hardware`,
      ],
      completionMessage: `You have mastered the DisCoCat framework — the theoretical core of QNLP!`,
      dataFlow: `flowchart LR
        A[Grammar Fragment] --> B[Pregroup Derivation]
        B --> C[String Diagram]
        C --> D[Tensor Network]
        D --> E[Word Vectors]
        E --> F[Tensor Contraction]
        F --> G[Sentence Meaning Vector]
        C --> H[Quantum Circuit Mapping]
        H --> I[Executable Circuit]`,
    },
    insights: {
      advantages: [
        `Unified mathematical framework for meaning that combines distributional and compositional approaches`,
        `Direct connection to quantum mechanics through shared compact closed categorical structure`,
        `Principled and modular — different functor choices give different models within the same theory`,
        `Provides a clear path from linguistic theory to quantum implementation`,
      ],
      disadvantages: [
        `Requires significant mathematical background (category theory)`,
        `Currently handles only a limited range of grammatical constructions`,
        `Computational cost of high-rank tensor contractions limits scalability`,
        `The functor must be hand-specified — learning it from data remains challenging`,
      ],
      futureScope: `Future extensions of DisCoCat will incorporate richer grammatical phenomena (quantification, anaphora, word sense disambiguation) through enriched categorical structures (Frobenius algebras, Hopf algebras, decorated string diagrams). Machine learning techniques will learn optimal functor specifications from data. The framework will scale to larger vocabularies and more complex sentences through hierarchical tensor networks and quantum circuit optimisations.`,
      industrialApplications: [
        `Theoretical foundation for quantum NLP product development`,
        `Formal semantics for domain-specific languages and controlled natural languages`,
        `Educational tools for teaching the mathematics of meaning`,
        `Cross-disciplinary research platform connecting linguistics, computing, and physics`,
      ],
      careerRelevance: `Understanding the DisCoCat framework is the defining expertise for QNLP researchers. It combines category theory, computational linguistics, and quantum computing — a rare and valuable interdisciplinary skill set. Researchers who master this framework are uniquely positioned to advance the theoretical foundations of QNLP.`,
    },
  },

  '8.5': {
    topicId: '8.5',
    learningObjective: `Understand string diagrams and other diagrammatic representations of linguistic structure, and how they serve as a bridge between grammar and quantum circuits.`,
    nextPrep: `Review string diagrams from quantum computing (Module 5) — particularly cups, caps, and the diagrammatic representation of tensor contraction.`,
    dependencyGraph: `flowchart LR
      A[8.4 DisCoCat Framework] --> B[8.5 Diagrammatic Representation]
      B --> C[8.6 Visualising Sentences]`,
    storytelling: {
      story: `Imagine you are an architect trying to explain the structure of a building. You could describe it in words: "The building has a steel frame, with load-bearing walls at coordinates (0,0) to (10,0)..." Or you could show a blueprint — a visual diagram where walls are lines, doors are arcs, and rooms are boxes. The blueprint communicates in a glance what paragraphs of text struggle to convey. String diagrams are the blueprints of language. They show words as boxes, grammatical types as wires, and composition as the physical connection of wires. A single string diagram captures the entire grammatical structure of a sentence in a visual form that is also a valid quantum circuit diagram.`,
      questions: [
        `Why are visual representations often more intuitive than algebraic ones for understanding structure?`,
        `What information is added by a diagram that is not present in the algebraic formula?`,
        `How might string diagrams help in designing quantum circuits for language processing?`,
      ],
      connection: `String diagrams are not just pedagogical tools — they are the actual mathematics. In category theory, string diagrams are rigorous graphical calculi where equations can be proven by topological manipulation. The same diagrams that represent grammatical derivations can be read as quantum circuit diagrams. This is not an analogy; it is a mathematical identity.`,
      technicalIntro: `String diagrams are a graphical language for reasoning about morphisms in monoidal categories. In a string diagram, objects are represented as wires (lines) and morphisms as boxes (nodes). Composition is vertical stacking, tensor product is horizontal placement. In the context of QNLP, each word is a box with input and output wires corresponding to its grammatical type. A sentence is a network of boxes connected by wires. The pregroup derivation of the sentence corresponds to a specific wiring pattern. Crucially, this same string diagram can be interpreted as a quantum circuit diagram, where wires become qubits and boxes become quantum gates. The diagrammatic representation thus serves as a universal intermediary between grammar and quantum computation.`,
      lifeSkills: `Diagrammatic reasoning is a powerful cognitive tool. Complex systems in any domain — from software architecture to organisational charts to supply chains — can be understood through diagrams that emphasise structure over symbolic manipulation. Learning to think diagrammatically enhances both understanding and communication of complex ideas.`,
    },
    mathModelling: {
      need: `A visual yet rigorous representation is needed to bridge grammatical structure (pregroup derivations) and quantum circuits (gate sequences).`,
      motivation: `Algebraic representations of grammatical derivations become complex and unintuitive for longer sentences. Diagrams reveal the structure at a glance.`,
      challenge: `Ensuring the diagrammatic calculus is both topologically rigorous (equations correspond to diagram equivalences) and computationally useful (diagrams translate to executable quantum circuits).`,
      equations: [
        {
          latex: `\\text{StringDiagram}(\\text{"Alice loves Bob"}) = \\begin{tikzpicture}[scale=0.5] \\end{tikzpicture}`,
          meaning: `A string diagram represents the sentence as boxes (words) connected by wires (grammatical types).`,
          interpretation: `Each word is a box. The type n has one wire, the type n^r·s·n^l has three wires (input n^r on left, output s middle, input n^l on right). Wires of matching types connect (contract), representing grammatical composition. The diagram is read from left to right as the sentence unfolds.`,
        },
        {
          latex: `\\epsilon_A: A^r \\otimes A \\rightarrow I \\quad \\text{(cup)}, \\quad \\eta_A: I \\rightarrow A \\otimes A^r \\quad \\text{(cap)}`,
          meaning: `Cups and caps are the diagrammatic representations of adjunction: cups connect dual wires, caps create pairs of dual wires.`,
          interpretation: `In a pregroup derivation, a cup connects n to n^r, representing their contraction to identity. In a vector space, the cup corresponds to the trace or contraction operation. In a quantum circuit, the cup corresponds to a Bell state measurement or a specific entangling operation.`,
        },
        {
          latex: `\\text{QCircuit} = \\text{Diagram}(\`) where each word box becomes a parameterised unitary U_w(\\theta_w)`,
          meaning: `The quantum circuit is obtained by replacing each word box in the string diagram with a parameterised quantum gate.`,
          interpretation: `The wiring (connectivity) of the quantum circuit is determined entirely by the grammatical structure. The parameters θ_w encode the specific meaning of each word and are learned from data. The resulting circuit is a variational quantum circuit specialised for the input sentence.`,
        },
      ],
      variables: [
        { symbol: `\\epsilon_A`, name: `Cup (Counit)`, description: `Diagrammatic element representing type contraction` },
        { symbol: `\\eta_A`, name: `Cap (Unit)`, description: `Diagrammatic element representing type introduction` },
        { symbol: `U_w(\\theta_w)`, name: `Word Unitary`, description: `Parameterised quantum gate for word w` },
        { symbol: `I`, name: `Identity Object`, description: `Trivial type (no wires) in the diagram` },
      ],
      interactive: {
        equation: `\\text{Box}_w: \\text{input wires} \\rightarrow \\text{output wires}`,
        description: `Build a string diagram by connecting word boxes with wires:`,
        variables: [
          { symbol: `\\text{Box}_w`, name: `Word Box`, description: `Diagrammatic element for each word` },
          { symbol: `\\text{wire}`, name: `Type Wire`, description: `Grammatical type connection` },
          { symbol: `\\text{cup}`, name: `Contraction Cup`, description: `Connects dual types to contract them` },
        ],
        sliders: [
          { name: `nouns`, label: `Number of nouns`, min: 1, max: 3, step: 1, default: 2 },
          { name: `verbs`, label: `Number of verbs`, min: 1, max: 2, step: 1, default: 1 },
        ],
      },
      charts: [
        {
          title: `Diagram Complexity by Sentence Type`,
          type: `bar`,
          data: [
            { sentence: `S-V (Dogs sleep)`, boxes: 2, wires: 4, cups: 1 },
            { sentence: `S-V-O (Cats chase mice)`, boxes: 3, wires: 7, cups: 2 },
            { sentence: `S-V-O-O (Alice gave Bob a book)`, boxes: 5, wires: 13, cups: 3 },
            { sentence: `S-V-O-Adv (John walks quickly)`, boxes: 4, wires: 10, cups: 2 },
            { sentence: `N-Adj-N (Big dog sleeps)`, boxes: 4, wires: 9, cups: 2 },
          ],
        },
        {
          title: `Grammatical Formalisms: Diagram Comparison`,
          type: `radar`,
          data: [
            { criteria: `Visual Intuition`, string_diagrams: 5, parse_trees: 4, dependency: 3 },
            { criteria: `Quantum Mapping`, string_diagrams: 5, parse_trees: 2, dependency: 1 },
            { criteria: `Compositional Clarity`, string_diagrams: 5, parse_trees: 4, dependency: 3 },
            { criteria: `Algebraic Rigour`, string_diagrams: 5, parse_trees: 3, dependency: 3 },
            { criteria: `Familiarity`, string_diagrams: 1, parse_trees: 5, dependency: 5 },
          ],
        },
      ],
      advantages: `String diagrams provide a unified visual language for grammar, meaning composition, and quantum circuits. They are mathematically rigorous (diagrammatic calculus), intuitive (visual wiring), and practically useful (direct mapping to quantum circuits). The same diagram can be understood by a linguist, a mathematician, and a quantum engineer.`,
      limitations: `String diagrams can become complex and visually cluttered for longer sentences. The diagrammatic calculus requires training to read fluently. Not all grammatical constructions have simple diagrammatic representations — handling phenomena like long-distance dependencies requires additional diagrammatic elements. Current tools for rendering string diagrams for QNLP are limited.`,
    },
    activities: [
      {
        title: `String Diagram Reading Practice`,
        description: `Students learn to read and interpret string diagrams for simple sentences.`,
        steps: [
          `Receive string diagrams for 5 simple sentences`,
          `Identify each word box and its type`,
          `Follow the wires to understand the composition pattern`,
          `Write the algebraic representation corresponding to the diagram`,
        ],
        materials: `Printed string diagrams, type reference card`,
        timeRequired: `10 min`,
        outcomes: `Students can read and interpret string diagrams for simple sentences.`,
      },
      {
        title: `String Diagram Construction`,
        description: `Students draw string diagrams from pregroup derivations.`,
        steps: [
          `Write a sentence and compute its pregroup derivation`,
          `Draw boxes for each word with input/output wires for their types`,
          `Connect matching wires with cups`,
          `Verify the diagram reduces to a single sentence wire on the right`,
        ],
        materials: `Pregroup derivation worksheet, drawing tools`,
        outcomes: `Students can construct string diagrams from grammatical derivations.`,
      },
      {
        title: `Diagram to Circuit Translation`,
        description: `Students translate a string diagram into a quantum circuit diagram.`,
        steps: [
          `Take a string diagram for "Cats chase mice"`,
          `Replace each word box with a generic unitary gate symbol`,
          `Replace each cup with a Bell measurement (M-circuit)`,
          `Verify the circuit has the correct number of qubits and gates`,
        ],
        materials: `String diagram, quantum circuit reference sheet`,
        outcomes: `Students understand the direct mapping from diagrams to circuits.`,
      },
      {
        title: `Topological Manipulation`,
        description: `Students perform diagrammatic equation proofs using topological moves.`,
        steps: [
          `Learn the basic topological moves: sliding boxes along wires, straightening cups, swapping wires`,
          `Apply moves to simplify a complex diagram`,
          `Verify that the simplified diagram gives the same sentence meaning`,
          `Discuss how topological equivalence relates to semantic equivalence`,
        ],
        outcomes: `Students understand the diagrammatic calculus as a reasoning tool.`,
      },
    ],
    project: {
      scope: `Create a comprehensive diagram gallery showing string diagrams, parse trees, dependency graphs, and quantum circuits for 5 sentences of increasing complexity.`,
      objectives: [
        `Select 5 sentences: S-V, S-V-O, S-V-O-O, N-Adj-N, and one with an adverb`,
        `For each sentence, create: parse tree, dependency graph, string diagram, and quantum circuit diagram`,
        `Label all elements and provide a legend`,
        `Write a brief explanation of how the four representations relate to each other`,
      ],
      timeline: [
        { phase: `Sentence selection and parsing`, duration: `2 min`, percent: 15 },
        { phase: `Parse tree creation`, duration: `3 min`, percent: 25 },
        { phase: `String diagram creation`, duration: `3 min`, percent: 25 },
        { phase: `Quantum circuit diagram`, duration: `3 min`, percent: 25 },
        { phase: `Documentation`, duration: `2 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Representation Specialist`, responsibility: `Create parse trees and dependency graphs` },
        { role: `Diagrammer`, responsibility: `Create string diagrams` },
        { role: `Quantum Engineer`, responsibility: `Create quantum circuit equivalents` },
      ],
      deliverables: [
        `Diagram gallery with 4 representations × 5 sentences`,
        `Legend and labelling for all diagram elements`,
        `Written explanation of the correspondences between representations`,
      ],
    },
    questions: [
      {
        question: `How does a string diagram for a sentence relate to a quantum circuit diagram?`,
        answer: `They are the same diagram interpreted differently: in a string diagram, boxes are words and wires are grammatical types; in a quantum circuit, boxes become quantum gates and wires become qubits.`,
        explanation: `The topological structure is identical. The string diagram shows the flow of grammatical composition; the quantum circuit shows the flow of quantum information. The DisCoCat functor ensures that the wiring pattern that grammatically composes a sentence is exactly the wiring pattern that quantum-mechanically composes the corresponding quantum states.`,
        commonMistake: `Thinking string diagrams and quantum circuits are merely analogous — they are mathematically the same structure interpreted in different categories`,
        tip: `Learn to see both interpretations simultaneously: every wire is both a grammatical type AND a qubit; every box is both a word AND a quantum gate`,
      },
      {
        question: `What do cups (ε morphisms) represent in the string diagram of a sentence?`,
        answer: `Cups represent the contraction of dual grammatical types (n and n^r), which corresponds to the grammatical combination of adjacent words.`,
        explanation: `In the pregroup grammar, a cup is the morphism ε: n·n^r → 1 that contracts a type with its adjoint. In the string diagram, it is drawn as a U-shaped bend connecting two wires. Each cup in the sentence diagram corresponds to one grammatical composition step — e.g., a verb consuming its object.`,
        commonMistake: `Thinking every wire connection is a cup — cups specifically connect wires of dual types that are being contracted`,
        tip: `Count the cups: each cup = one grammatical composition. Two cups = transitive verb (subject and object). Three cups = ditransitive verb (subject and two objects).`,
      },
    ],
    virtualLab: {
      description: `Interactive string diagram lab — build, manipulate, and translate diagrams between grammatical and quantum representations.`,
      steps: [
        `Enter a sentence or select from examples`,
        `View the generated string diagram`,
        `Drag and rearrange boxes to explore topological equivalence`,
        `Click any element to see its mathematical definition`,
        `Toggle between grammatical view and quantum circuit view`,
      ],
      stepDetails: [
        `The lab takes any simple sentence and automatically generates its string diagram using the lambeq parser — words appear as labelled boxes with coloured input/output wires for their pregroup types`,
        `Drag boxes horizontally to rearrange — the diagram automatically reroutes wires respecting topological equivalence. Boxes can slide along wires but cannot cross other wires`,
        `Click any wire to see its grammatical type (n, s, n^r, etc.) and its corresponding vector space dimension. Click any cup to see the contraction equation`,
        `The "Quantum View" toggle transforms the diagram: word boxes become gate symbols (U_θ), wires become qubit lines (blue), cups become Bell measurement symbols (M), and a measurement panel appears on the right`,
        `The lab can export diagrams as SVG, PNG, or LaTeX/TikZ for use in presentations and papers`,
      ],
      completionMessage: `You have mastered diagrammatic reasoning for QNLP — the visual language of meaning and quantum computation!`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[Parser]
        B --> C[Pregroup Derivation]
        C --> D[String Diagram Generator]
        D --> E[Interactive String Diagram]
        E --> F[Topological Manipulation]
        E --> G[Quantum View]
        G --> H[Quantum Circuit Diagram]
        E --> I[Export: SVG/PNG/LaTeX]`,
    },
    insights: {
      advantages: [
        `Unified visual language for grammar, meaning, and quantum computation`,
        `Mathematically rigorous through the diagrammatic calculus of monoidal categories`,
        `Provides an intuitive bridge between linguistic and quantum concepts`,
        `Enables visual reasoning about semantic equivalence through topological manipulation`,
      ],
      disadvantages: [
        `Diagrams become complex for long sentences with many words`,
        `Requires training to read fluently — not immediately intuitive for everyone`,
        `Current software tools for QNLP string diagrams are limited compared to other formalisms`,
        `Some grammatical phenomena require additional diagrammatic elements beyond basic cups and caps`,
      ],
      futureScope: `String diagrams will become more sophisticated as QNLP matures, incorporating richer grammatical structures through decorated wires, hierarchical box nesting, and interactive manipulation tools. Software libraries will emerge for automated diagram generation, manipulation, and circuit translation. The diagrammatic approach may generalise from QNLP to other areas of quantum machine learning where compositional structure is important.`,
      industrialApplications: [
        `Visual programming interfaces for QNLP pipeline design`,
        `Educational tools for teaching category theory and quantum computing`,
        `Diagrammatic reasoning in formal verification of linguistic structures`,
        `Cross-disciplinary communication aids for quantum linguistics research`,
      ],
      careerRelevance: `Proficiency in diagrammatic reasoning is valuable for research communication, teaching, and collaborative design in QNLP. The ability to translate between algebraic and visual representations is a mark of deep understanding that is recognised across theoretical computer science, mathematics, and quantum computing communities.`,
    },
  },

  '8.6': {
    topicId: '8.6',
    learningObjective: `Master the practical skills of visualising sentence structures as string diagrams and quantum circuits using modern QNLP software tools.`,
    nextPrep: `Ensure you have lambeq installed and working. Review the lambeq documentation for diagram and circuit visualisation functions.`,
    dependencyGraph: `flowchart LR
      A[8.5 Diagrammatic Representation] --> B[8.6 Visualising Sentences]
      B --> C[M9: Tools & Libraries for QNLP]`,
    storytelling: {
      story: `Think of the difference between having a musical score on paper and hearing the symphony performed. A score contains all the information — notes, rhythms, dynamics — but it takes training and imagination to hear the music in your head from the page. A performance makes the music real, tangible, audible. Similarly, we have been studying the "score" of QNLP — the mathematical structures, types, and diagrams. Now it is time to hear the symphony: to use software that takes a sentence, parses it, draws the string diagram, builds the quantum circuit, and lets us see and manipulate every step. This lab transforms abstract knowledge into practical, visual experience.`,
      questions: [
        `How does seeing a sentence's structure visually change your understanding of how it works?`,
        `What features would you want in a tool for visualising QNLP structures?`,
        `How would you explain a string diagram to someone who has never seen one before, using visualisation software?`,
      ],
      connection: `This topic puts all of Module 8 into practice. The grammatical types from 8.1, composition from 8.2, distributional vectors from 8.3, DisCoCat from 8.4, and diagrams from 8.5 come together in working code. You will input a sentence, and the software will produce grammatical analysis, vector representations, string diagrams, and quantum circuits — making the entire QNLP pipeline visual and interactive.`,
      technicalIntro: `In this hands-on session, students will use the lambeq library to visualise sentence structures at every level of the QNLP pipeline. Key tools include: BobcatParser (converts sentences to pregroup derivations), lambeq's diagram rendering (visualises string diagrams using matplotlib and custom SVG renderers), the IQPAnsatz and MPSAnsatz (convert diagrams to parameterised quantum circuits), and circuit drawers (Qiskit's circuit visualisation and lambeq's custom renderers). Students will learn to: parse sentences, draw string diagrams, inspect grammatical types, convert to quantum circuits, and customise visualisations for publication and presentation.`,
      lifeSkills: `This lab develops practical tooling skills that are essential for any technical field. Knowing the theory is important; being able to implement, visualise, and communicate it through software is what makes the theory useful. The ability to translate abstract concepts into working code with visual output is one of the most valuable skills in any technical career.`,
    },
    mathModelling: {
      need: `Practical visualisation tools are required to make the abstract concepts of QNLP tangible, debuggable, and communicable.`,
      motivation: `Without visualisation, QNLP remains an entirely theoretical exercise. Visual tools enable experimentation, debugging, intuition-building, and communication of results.`,
      challenge: `Rendering grammatically-informed string diagrams and quantum circuits in a way that is both mathematically accurate and visually clear for humans.`,
      equations: [
        {
          latex: `\\text{Visualise}(\\text{sentence}) = \\text{Draw}(\\text{Parse}(\\text{sentence}))`,
          meaning: `The visualisation pipeline: parse the sentence, then draw the resulting diagram.`,
          interpretation: `In lambeq, this is: diagram = BobcatParser().sentence2diagram(sentence); diagram.draw() — two lines of code produce a publication-ready string diagram.`,
        },
        {
          latex: `\\text{QCircuit} = \\text{Ansatz}(\\text{Diagram}, \\text{params})`,
          meaning: `A quantum circuit ansatz is created from a string diagram by applying a specific ansatz (e.g., IQP, MPS, or SpiderNet).`,
          interpretation: `The ansatz specifies how each word box in the string diagram should be implemented as quantum gates. The IQPAnsatz uses simple ZXZ rotations, while MPSAnsatz uses matrix product state structures for shallower circuits.`,
        },
        {
          latex: `\\text{QCircuit.draw()} = \\text{MatplotlibFigure}`,
          meaning: `The circuit can be drawn as a matplotlib figure showing qubit wires, gate symbols, and measurements.`,
          interpretation: `The visualisation shows the quantum circuit that would execute on a quantum computer: each qubit is a horizontal line, gates are symbols on the lines, and the diagram is read left to right (time flows left to right).`,
        },
      ],
      variables: [
        { symbol: `\\text{Parse}`, name: `Parser Function`, description: `Converts text to a pregroup derivation` },
        { symbol: `\\text{Draw}`, name: `Visualisation Function`, description: `Renders diagrams as images` },
        { symbol: `\\text{Ansatz}`, name: `Ansatz Function`, description: `Converts string diagrams to parameterised circuits` },
        { symbol: `\\text{QCircuit}`, name: `Quantum Circuit`, description: `Executable quantum circuit with gates and measurements` },
      ],
      interactive: {
        equation: `\\text{diagram} = \\text{Parser}(\\text{"cats chase mice"})`,
        description: `Enter a sentence and adjust visualisation parameters in real time:`,
        variables: [
          { symbol: `n`, name: `Noun Vector Dim`, description: `Dimension of noun meaning spaces` },
          { symbol: `s`, name: `Sentence Vector Dim`, description: `Dimension of sentence meaning spaces` },
          { symbol: `\\text{ansatz}`, name: `Ansatz Type`, description: `Circuit architecture to use` },
        ],
        sliders: [
          { name: `dimN`, label: `Noun dimension`, min: 2, max: 16, step: 2, default: 4 },
          { name: `dimS`, label: `Sentence dimension`, min: 2, max: 16, step: 2, default: 4 },
        ],
      },
      charts: [
        {
          title: `Visualisation Tools Comparison`,
          type: `radar`,
          data: [
            { criteria: `String Diagrams`, lambeq: 5, nltk: 1, spacy: 1 },
            { criteria: `Quantum Circuits`, lambeq: 5, nltk: 1, spacy: 1 },
            { criteria: `Ease of Use`, lambeq: 4, nltk: 4, spacy: 5 },
            { criteria: `Grammatical Coverage`, lambeq: 3, nltk: 4, spacy: 5 },
            { criteria: `Publication Quality`, lambeq: 4, nltk: 3, spacy: 3 },
            { criteria: `QNLP Integration`, lambeq: 5, nltk: 2, spacy: 2 },
          ],
        },
        {
          title: `Circuit Depth by Ansatz and Sentence Length`,
          type: `line`,
          data: [
            { words: 2, iqp: 8, mps: 6, spidernet: 10 },
            { words: 3, iqp: 16, mps: 10, spidernet: 20 },
            { words: 4, iqp: 28, mps: 14, spidernet: 34 },
            { words: 5, iqp: 44, mps: 18, spidernet: 52 },
            { words: 6, iqp: 64, mps: 22, spidernet: 74 },
          ],
        },
      ],
      advantages: `Modern QNLP tooling (lambeq, Qiskit, Cirq) makes it possible to go from text to quantum circuits in a few lines of code. Visualisation at every stage enables debugging, intuition-building, and communication. The same tools work on simulators and real quantum hardware, making the transition from learning to research seamless.`,
      limitations: `Current tools handle only simple English sentences and small vocabularies. Visualisation quality depends on the backend (lambeq's matplotlib renderer is functional but not as polished as dedicated graphics tools). Real-time interaction with large quantum circuits is limited by rendering performance. Support for non-English languages is minimal.`,
    },
    activities: [
      {
        title: `Lambeq Installation and Setup`,
        description: `Students set up the lambeq library and verify they can parse and visualise a sentence.`,
        steps: [
          `Install lambeq: pip install lambeq`,
          `Import lambeq and create a BobcatParser`,
          `Parse the sentence "Dogs sleep" and verify the diagram object`,
          `Draw the diagram using diagram.draw()`,
        ],
        materials: `Installation guide, terminal, Python environment`,
        timeRequired: `5 min`,
        outcomes: `Working lambeq installation with successful parsing and visualisation.`,
      },
      {
        title: `String Diagram Customisation`,
        description: `Students customise the appearance of their string diagrams.`,
        steps: [
          `Parse a sentence and access its properties`,
          `Change the figure size and font`,
          `Colour-code boxes by part of speech`,
          `Save the diagram as a PNG file`,
        ],
        materials: `Lambeq notebook, matplotlib reference`,
        outcomes: `Students can produce publication-ready string diagrams.`,
      },
      {
        title: `Ansatz Exploration`,
        description: `Students convert string diagrams to quantum circuits using different ansätze.`,
        steps: [
          `Parse 3 sentences of increasing complexity`,
          `Convert each to circuits using IQPAnsatz`,
          `Convert using MPSAnsatz and compare circuit depths`,
          `Draw the circuits and inspect the gate counts`,
        ],
        materials: `Lambeq notebook with ansatz examples`,
        outcomes: `Students understand how ansatz choice affects circuit complexity.`,
      },
      {
        title: `Sentence Structure Gallery`,
        description: `Students create a visual gallery of different sentence structures with diagrams and circuits.`,
        steps: [
          `Select 5 different sentence types (S-V, S-V-O, S-V-O-O, N-Adj, Adv-V)`,
          `Parse each and draw both string diagram and quantum circuit`,
          `Annotate each with the grammatical types and contraction pattern`,
          `Compile into a single gallery document`,
        ],
        materials: `Lambeq notebook, gallery template`,
        outcomes: `Students produce a comprehensive visual reference for sentence structures in QNLP.`,
      },
    ],
    project: {
      scope: `Build an interactive sentence visualisation notebook that takes any simple English sentence, parses it, draws the string diagram, builds the quantum circuit, and displays all intermediate representations in a clean, annotated format.`,
      objectives: [
        `Accept user input (a simple sentence)`,
        `Parse the sentence using lambeq's BobcatParser`,
        `Display the pregroup types for each word`,
        `Draw the string diagram with colour-coded word boxes`,
        `Build and draw the quantum circuit using a configurable ansatz`,
        `Display key metrics: number of qubits, circuit depth, gate count`,
      ],
      timeline: [
        { phase: `Input and parsing`, duration: `3 min`, percent: 20 },
        { phase: `Type display`, duration: `2 min`, percent: 15 },
        { phase: `String diagram drawing`, duration: `3 min`, percent: 25 },
        { phase: `Circuit construction and drawing`, duration: `3 min`, percent: 25 },
        { phase: `Metrics and polish`, duration: `2 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Frontend Developer`, responsibility: `Build the user input and display interface` },
        { role: `Backend Engineer`, responsibility: `Integrate lambeq parsing and circuit building` },
        { role: `Visualisation Designer`, responsibility: `Customise diagram and circuit appearance` },
      ],
      deliverables: [
        `Interactive sentence visualisation notebook`,
        `Working demonstration with 5 example sentences`,
        `User guide for the notebook`,
      ],
    },
    questions: [
      {
        question: `How do you create a string diagram for a sentence in lambeq?`,
        answer: `Use BobcatParser().sentence2diagram(sentence) to obtain the diagram object, then call diagram.draw() to visualise it.`,
        explanation: `BobcatParser uses a combinatory categorial grammar (CCG) parser and converts the CCG derivation to a pregroup derivation, which is represented as a Diagram object. The diagram consists of boxes (words) connected by wires (types), with cups representing contractions.`,
        commonMistake: `Assuming the parser works for any English sentence — BobcatParser works best for simple grammatical constructions`,
        tip: `Start with simple subject-verb-object sentences. Test your sentence with the diagram first — if it looks wrong, the grammar might need simplification.`,
      },
      {
        question: `What is the difference between IQPAnsatz and MPSAnsatz in lambeq?`,
        answer: `IQPAnsatz uses a circuit topology based on Instantaneous Quantum Polynomial (IQP) circuits with ZXZ rotations and linear entangling layers. MPSAnsatz uses Matrix Product State topology, which produces shallower circuits but may be less expressive for some grammatical structures.`,
        explanation: `IQPAnsatz creates circuits where qubits interact in a nearest-neighbour chain, with alternating rotation and entangling layers. MPSAnsatz uses a sequential structure where each qubit interacts only with the next, creating circuits that are efficient to simulate classically but potentially less powerful for capturing long-range dependencies in sentences. The choice depends on the balance between circuit depth and expressivity needed for the task.`,
        commonMistake: `Thinking one ansatz is universally better — the optimal ansatz depends on sentence length, grammatical complexity, and available hardware`,
        tip: `Use IQPAnsatz for shorter sentences (2-5 words) where expressivity matters, MPSAnsatz for longer sentences where circuit depth must be limited`,
      },
    ],
    virtualLab: {
      description: `Interactive sentence visualisation lab — enter any sentence, see every representation update in real time: parse tree, string diagram, grammatical types, and the full quantum circuit.`,
      steps: [
        `Enter a sentence in the input box`,
        `View the real-time parse tree and pregroup types`,
        `Explore the interactive string diagram`,
        `Toggle between different ansätze and see the circuit change`,
        `Export any visualisation as an image for your notes`,
      ],
      stepDetails: [
        `Type any simple sentence (e.g., "Alice loves Bob") — the lab parses it in real time as you type, updating all visualisations simultaneously`,
        `The parse tree panel shows the CCG derivation with colour-coded constituents — click any node to see its grammatical category and semantic type`,
        `The string diagram is fully interactive: hover over any box to see the word and its pregroup type, hover over any cup to see the contraction rule, and zoom/pan to explore larger diagrams`,
        `The ansatz selector (IQP, MPS, SpiderNet) instantly rebuilds the quantum circuit — the circuit diagram shows each qubit as a horizontal wire with gate symbols colour-coded by type (rotations in blue, entanglement in green, measurements in red)`,
        `The export button saves the current view as PNG, SVG, or PDF — choose between string diagram view, quantum circuit view, or combined dashboard view`,
      ],
      completionMessage: `You have mastered the art of visualising sentence structures for QNLP. You can now go from any sentence to its quantum circuit in seconds!`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[BobcatParser]
        B --> C[CCG Parse Tree]
        C --> D[Pregroup Diagram]
        D --> E[String Diagram Visualisation]
        D --> F{Ansatz Selection}
        F --> G[IQPAnsatz]
        F --> H[MPSAnsatz]
        F --> I[SpiderNetAnsatz]
        G --> J[Quantum Circuit]
        H --> J
        I --> J
        J --> K[Circuit Visualisation]
        E --> L[Export: SVG/PNG/PDF]
        K --> L`,
    },
    insights: {
      advantages: [
        `Practical, hands-on experience with QNLP software tools`,
        `Visualisation makes abstract grammatical and quantum concepts tangible`,
        `Ability to produce publication-quality diagrams for presentations and papers`,
        `Understanding of how ansatz choices affect circuit complexity`,
      ],
      disadvantages: [
        `Current tools limited to simple English sentences and small vocabularies`,
        `Visualisation quality not yet at the level of dedicated graphics tools`,
        `Real-time interaction with complex circuits can be slow`,
        `Dependency on external parsers (BobcatParser) limits language coverage`,
      ],
      futureScope: `The next generation of QNLP visualisation tools will support more languages, richer grammatical constructions, real-time hardware integration (see actual noisy results from quantum processors), and augmented reality interfaces for exploring sentence structures in 3D. As the field grows, tool quality will approach that of classical NLP visualisation tools.`,
      industrialApplications: [
        `Educational platforms for teaching quantum linguistics`,
        `Rapid prototyping of QNLP pipeline designs`,
        `Communication tools for QNLP research presentations`,
        `Integration with IDE plugins for QNLP development`,
      ],
      careerRelevance: `Practical visualisation skills using modern QNLP tools are immediately applicable in research roles, product development, and technical communication. The ability to rapidly go from abstract concept to working visualisation is highly valued in both academic and industrial settings.`,
    },
  },
}
