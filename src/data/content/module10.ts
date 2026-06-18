import type { TopicContent } from './loader'

export const m10Content: Record<string, TopicContent> = {
  '10.1': {
    topicId: '10.1',
    learningObjective: `Understand how Lambeq parses sentences into pregroup grammar diagrams, including word type assignment, cup/string reduction, and diagram visualisation.`,
    nextPrep: `Review Module 8.5 on pregroup grammars and Module 9.4 on Lambeq's architecture. Refresh your understanding of grammatical types (n, s, adjoint types).`,
    dependencyGraph: `flowchart LR
      A[M8: Linguistics] --> B[10.1 Parsing]
      B --> C[10.2 Sentence Diagrams]
      C --> D[10.3 Diagrams to Circuits]
      D --> E[10.4 Parameterised Circuits]
      E --> F[10.5 QLM Lab]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you are an architect who has been handed a pile of lumber, bricks, and glass and told to build a house. Before you can build, you need a blueprint — a diagram showing how each piece connects. Lambeq's parser is like an automatic architect that takes a sentence (the pile of words) and produces a blueprint (the pregroup diagram) showing exactly how the words grammatically connect. Just as a blueprint reveals which walls support which beams, the pregroup diagram reveals how nouns connect to verbs, how adjectives modify nouns, and how the whole structure forms a complete sentence. Without this blueprint, building a quantum circuit for a sentence would be like constructing a house without any plan.`,
      questions: [
        `What information does a sentence diagram contain that the raw words do not?`,
        `How does grammatical structure affect the meaning of a sentence?`,
        `Why is it important to preserve grammatical structure when converting language to quantum circuits?`,
      ],
      connection: `Pregroup diagrams are the bridge between surface-level language (words) and deep structure (grammatical relationships). In the DisCoCat model, these diagrams determine exactly how quantum states combine — the diagram structure directly dictates the quantum circuit topology.`,
      technicalIntro: `Lambeq's BobcatParser implements a pregroup grammar parser based on the categorial grammar formalism. It assigns each word a pregroup type — a string of basic types (n for noun, s for sentence) and their adjoints (n^l for left adjoint, n^r for right adjoint). The parser then finds a valid reduction sequence that reduces the type string to s (a complete sentence). The result is a pregroup diagram: a graphical representation where words are boxes, types are wires, and grammatical reductions are cup operations that connect wires. Lambeq provides both a textual string representation and a visual .draw() method for these diagrams.`,
      lifeSkills: `Parsing teaches you to see structure beneath surface-level complexity — a skill that transfers to understanding system architectures, organisational charts, and any domain where underlying patterns determine behaviour.`,
    },
    mathModelling: {
      need: `Converting sentences to quantum circuits requires a precise mathematical representation of grammatical structure — pregroup diagrams provide this.`,
      motivation: `Without a formal grammatical representation, the mapping from language to quantum circuits would be ad hoc and error-prone. Pregroup grammar provides a type-theoretic foundation that guarantees grammatical correctness.`,
      challenge: `Parsing natural language into pregroup diagrams requires handling ambiguity, unknown words, and complex grammatical constructions within the parser's type system.`,
      equations: [
        {
          latex: `\\text{John}: n, \\quad \\text{loves}: n^r \\cdot s \\cdot n^l, \\quad \\text{Mary}: n`,
          meaning: `Each word is assigned a pregroup type. "John" and "Mary" are nouns (type n). "Loves" is a transitive verb that requires a noun on the left (n^r), produces a sentence (s), and requires a noun on the right (n^l).`,
          interpretation: `The type n^r·s·n^l means: the verb expects a noun to its left (the subject), outputs a sentence when both nouns are provided, and expects a noun to its right (the object). The dot is the concatenation operation in the pregroup monoid.`,
        },
        {
          latex: `n \\cdot (n^r \\cdot s \\cdot n^l) \\cdot n = (n \\cdot n^r) \\cdot s \\cdot (n^l \\cdot n) \\rightarrow_{\\text{cup}} 1 \\cdot s \\cdot 1 \\rightarrow s`,
          meaning: `The reduction process: the subject n contracts with n^r via a cup, the object n contracts with n^l via a cup, leaving only the sentence type s.`,
          interpretation: `Each grammatical reduction (cup) corresponds to a Bell state preparation and partial trace in the quantum realisation. The number of cups equals the number of grammatical relationships in the sentence.`,
        },
        {
          latex: `\\epsilon_{n^r} : n \\cdot n^r \\rightarrow 1, \\quad \\epsilon_{n^l} : n^l \\cdot n \\rightarrow 1`,
          meaning: `The cup reduction maps: a type combined with its adjoint reduces to the identity (1) via the evaluation map \\epsilon.`,
          interpretation: `In category theory terms, these are the evaluation morphisms of a compact closed category. In quantum terms, they correspond to Bell state projections. This is the mathematical core of the DisCoCat model.`,
        },
      ],
      variables: [
        { symbol: `n`, name: `Noun Type`, description: `Basic pregroup type for nouns and noun phrases` },
        { symbol: `s`, name: `Sentence Type`, description: `Basic pregroup type for complete sentences` },
        { symbol: `n^l, n^r`, name: `Adjoint Types`, description: `Left and right adjoints of the noun type, enabling grammatical reduction` },
        { symbol: `\\epsilon`, name: `Evaluation Map`, description: `Category-theoretic reduction that cancels a type with its adjoint` },
        { symbol: `\\cdot`, name: `Monoid Product`, description: `Concatenation of types in the pregroup monoid` },
      ],
      interactive: {
        equation: `n \\cdot (n^r \\cdot s \\cdot n^l) \\cdot n \\rightarrow s`,
        description: `Click through the step-by-step reduction of "Subject Verb Object" to a sentence type:`,
        variables: [
          { symbol: `S`, name: `Subject`, description: `Noun in subject position (type n)` },
          { symbol: `V`, name: `Verb`, description: `Transitive verb (type n^r·s·n^l)` },
          { symbol: `O`, name: `Object`, description: `Noun in object position (type n)` },
        ],
        sliders: [
          { name: `step`, label: `Reduction Step`, min: 0, max: 3, step: 1, default: 0 },
        ],
      },
      charts: [
        {
          title: `Parser Success Rate by Sentence Length`,
          type: `bar`,
          data: [
            { Length: `2 words`, Success: 98 },
            { Length: `3 words`, Success: 95 },
            { Length: `4 words`, Success: 88 },
            { Length: `5 words`, Success: 78 },
            { Length: `6 words`, Success: 65 },
            { Length: `7+ words`, Success: 50 },
          ],
        },
        {
          title: `Grammatical Type Distribution in Sample Corpus`,
          type: `bar`,
          data: [
            { Type: `n (noun)`, Frequency: 40 },
            { Type: `s (sentence)`, Frequency: 5 },
            { Type: `n·n^l (adjective)`, Frequency: 15 },
            { Type: `n^r·s·n^l (transitive verb)`, Frequency: 12 },
            { Type: `n^r·s (intransitive verb)`, Frequency: 10 },
            { Type: `n^r·s·n^l·n^l (ditransitive verb)`, Frequency: 3 },
            { Type: `n/n (determiner)`, Frequency: 15 },
          ],
        },
      ],
      advantages: `Pregroup grammar provides a mathematically rigorous foundation for the language-to-quantum mapping. The reduction process directly corresponds to quantum operations (cups = Bell states + partial traces), making the translation natural and correct by construction.`,
      limitations: `Pregroup grammar covers a limited subset of natural language. Complex constructions like relative clauses, coordination, and long-distance dependencies may not parse correctly. The parser's lexicon must be manually extended for domain-specific vocabulary.`,
    },
    activities: [
      {
        title: `Manual Type Assignment Exercise`,
        description: `Students manually assign pregroup types to words in several sentences and trace the reduction process before running the parser.`,
        steps: [
          `Receive a worksheet with 10 sentences of varying complexity`,
          `For each sentence, manually assign pregroup types to each word`,
          `Write the type string for the full sentence`,
          `Draw the cup reductions step by step until only s remains`,
          `Compare your manual results with Lambeq's parser output`,
        ],
        materials: `Type assignment worksheet, answer key, Lambeq parser for verification`,
        timeRequired: `12 min`,
        outcomes: `Students can manually perform pregroup type assignment and reduction.`,
        rubrics: `Correct type assignment (8/10 sentences), accurate reduction steps, correct comparison with parser`,
      },
      {
        title: `Lambeq BobcatParser Walkthrough`,
        description: `Students use Lambeq's BobcatParser to parse sentences and explore the diagram structure.`,
        steps: [
          `Import BobcatParser from lambeq`,
          `Create a parser instance: parser = BobcatParser()`,
          `Parse a simple sentence: diagram = parser.parse("Cats purr")`,
          `Print the diagram: print(diagram) — observe the string representation`,
          `Visualise the diagram: diagram.draw() — observe the graphical output`,
        ],
        materials: `Jupyter notebook with Lambeq, example sentences worksheet`,
        timeRequired: `10 min`,
        outcomes: `Students can use Lambeq's parser to generate and visualise pregroup diagrams.`,
        rubrics: `Correct parsing, successful visualisation, understanding of diagram structure`,
      },
      {
        title: `Ambiguity Exploration`,
        description: `Students explore how ambiguous sentences produce multiple parses and how Lambeq handles them.`,
        steps: [
          `Parse the ambiguous sentence "I saw the man with the telescope"`,
          `Use diagram.possible_parses to see alternative derivations`,
          `Compare the diagrams for different parses`,
          `Discuss: which parse is correct? How does context disambiguate?`,
          `Test with other ambiguous sentences like "Time flies like an arrow"`,
        ],
        materials: `Ambiguity examples worksheet, Lambeq parser`,
        timeRequired: `10 min`,
        outcomes: `Students understand how grammatical ambiguity manifests in pregroup diagrams.`,
        rubrics: `Correct identification of multiple parses, meaningful diagram comparison, insightful discussion of ambiguity`,
      },
      {
        title: `Diagram Structure Analysis`,
        description: `Students analyse the structure of pregroup diagrams and extract quantitative features.`,
        steps: [
          `Parse 5 sentences with different grammatical structures (SVO, SV, SVC)`,
          `For each diagram, count the number of words, cups, and wires`,
          `Calculate the ratio of cups to words as a measure of "grammatical density"`,
          `Plot the relationship between sentence length and number of cups`,
          `Discuss: what does the number of cups tell us about the sentence's quantum circuit complexity?`,
        ],
        materials: `Structured worksheet with analysis template, plotting library`,
        timeRequired: `8 min`,
        outcomes: `Students can extract quantitative features from pregroup diagrams.`,
        rubrics: `Correct feature extraction, meaningful analysis, accurate plotting`,
      },
    ],
    project: {
      scope: `Create a pregroup diagram analysis tool that takes any sentence, parses it with Lambeq, and outputs a structured analysis including word types, reduction steps, diagram statistics, and a visualisation.`,
      objectives: [
        `Implement sentence parsing with BobcatParser`,
        `Extract grammatical types for each word`,
        `Trace and display the reduction steps`,
        `Calculate and report diagram statistics (word count, cup count, wire count)`,
        `Generate and save the diagram visualisation`,
      ],
      timeline: [
        { phase: `Set up parser and test sentences`, duration: `3 min`, percent: 15 },
        { phase: `Implement type extraction and reduction tracing`, duration: `5 min`, percent: 25 },
        { phase: `Implement statistics calculation`, duration: `5 min`, percent: 25 },
        { phase: `Build visualisation and output`, duration: `5 min`, percent: 25 },
        { phase: `Test on diverse sentences`, duration: `3 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Parser Integrator`, responsibility: `Integrate BobcatParser and handle edge cases` },
        { role: `Analytics Developer`, responsibility: `Implement statistics extraction and analysis` },
        { role: `Visualisation Designer`, responsibility: `Create clean diagram visualisations and reports` },
      ],
      deliverables: [
        `Python script/module for diagram analysis`,
        `Sample outputs for 5 example sentences with analysis reports`,
        `Statistical summary comparing different sentence types`,
      ],
    },
    questions: [
      {
        question: `What is the role of cup operations in a pregroup diagram?`,
        answer: `Cup operations represent grammatical reductions where a type cancels with its adjoint (n·n^r → 1 or n^l·n → 1), corresponding to Bell state preparations and partial traces in the quantum realisation.`,
        explanation: `Each cup eliminates a type-adjoint pair, reducing the overall type toward the sentence type s. In the DisCoCat model, cups become quantum operations that entangle and then trace out qubits.`,
        commonMistake: `Thinking cups are the same as wire crossings — cups are grammatical reductions, while crossings (swaps) reorder wires without reducing types.`,
        tip: `Count the cups — that is how many grammatical relationships the quantum circuit must encode.`,
      },
      {
        question: `How does BobcatParser handle unknown words?`,
        answer: `BobcatParser has a built-in lexicon. Unknown words are assigned default types based on heuristics (usually n for nouns), which may lead to incorrect parses.`,
        explanation: `The parser's lexicon determines possible types for each word. If a word is not in the lexicon, the parser falls back to guessing based on capitalisation and position. Adding custom lexicon entries improves parsing accuracy.`,
        tip: `Use parser.add_to_lexicon(word, type) to add domain-specific vocabulary for better parsing.`,
      },
      {
        question: `What does it mean for a sentence to have multiple valid parses?`,
        answer: `Multiple valid parses mean the sentence is grammatically ambiguous — there are multiple reduction sequences that all result in type s.`,
        explanation: `Each parse corresponds to a different grammatical interpretation of the sentence. For "I saw the man with the telescope," one parse attaches "with the telescope" to "saw" (instrumental), another to "man" (possessive). Both are grammatically valid but have different meanings.`,
      },
    ],
    virtualLab: {
      description: `Interactive pregroup diagram explorer. Enter a sentence, see the parse tree, and click through each reduction step with animated cup operations that show how types cancel.`,
      steps: [
        `Enter a sentence in the text box (e.g., "John loves Mary")`,
        `View the type assignment — each word is tagged with its pregroup type`,
        `Click "Show Reduction Steps" to see the step-by-step reduction animation`,
        `Click on any cup to highlight its corresponding grammatical relationship`,
        `Toggle between string diagram and compact diagram views`,
      ],
      stepDetails: [
        `Input panel: text entry with auto-suggest. Parse result shows each word with its type in a coloured label. Tooltip explains each type`,
        `Diagram panel: interactive SVG diagram. Words as labelled boxes with wires extending to the right. Types shown on each wire segment`,
        `Reduction animation: click "Play" to watch the reduction step by step. Each cup operation highlights and animates the wire connection. Current type string shown at each step`,
        `Cup inspector: click any cup to see which two words it connects and what grammatical relationship it represents (subject-verb, verb-object, adjective-noun, etc.)`,
        `View toggle: "String View" shows the traditional string diagram. "Compact View" shows a simplified version with reduced wire crossings`,
      ],
      completionMessage: `You have mastered pregroup parsing! You can read pregroup diagrams, trace reductions, and understand how grammatical structure is represented.`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[Tokenisation]
        B --> C[Lexicon Lookup]
        C --> D[Type Assignment]
        D --> E[Reduction Search]
        E --> F{Valid Parse Found?}
        F -->|Yes| G[Pregroup Diagram]
        F -->|No| H[Fallback: Default Types]
        H --> G
        G --> I[Diagram Visualisation]
        G --> J[Circuit Generation]`,
    },
    insights: {
      advantages: [
        `Pregroup grammar provides a rigorous mathematical foundation for language-to-quantum mapping`,
        `Lambeq's BobcatParser handles most common sentence structures automatically`,
        `Diagram visualisation makes grammatical structure intuitively accessible`,
        `The type system guarantees grammatically correct quantum circuit generation`,
      ],
      disadvantages: [
        `Limited to pregroup grammar — other formalisms (TAG, CCG, dependency) not supported`,
        `Lexicon coverage is limited — domain-specific vocabulary requires manual extension`,
        `Ambiguous sentences produce multiple diagrams, requiring disambiguation logic`,
        `Complex sentences (relative clauses, coordination) often fail to parse`,
      ],
      futureScope: `Lambeq is developing support for dependency grammar and CCG-based parsing, which would handle a wider range of linguistic constructions. Hybrid parsers combining pregroup with neural methods are an active research direction.`,
      industrialApplications: [
        `Grammatical analysis for language learning applications`,
        `Automated grammar checking and correction`,
        `Linguistic research on grammatical structure`,
        `Foundation for any quantum NLP system built on the DisCoCat model`,
      ],
      careerRelevance: `Understanding pregroup grammar and diagram parsing is essential for any QNLP practitioner. This formalism is unique to the DisCoCat approach and represents a distinctive skill in the quantum NLP job market.`,
    },
  },

  '10.2': {
    topicId: '10.2',
    learningObjective: `Interpret pregroup sentence diagrams, understand the meaning of wires, cups, and word boxes, and recognise how grammatical relationships are represented visually.`,
    nextPrep: `Review the pregroup diagram from 10.1 and familiarise yourself with Lambeq's Diagram class documentation.`,
    dependencyGraph: `flowchart LR
      A[10.1 Parsing] --> B[10.2 Sentence Diagrams]
      B --> C[10.3 Circuits]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you are learning to read music. At first, a musical score looks like meaningless dots and lines on a staff. But as you learn that the treble clef means "higher notes," the staff lines represent pitches, and each note's position tells you which key to press, the score transforms from scribbles to a complete musical instruction manual. Sentence diagrams are exactly this — a visual language for grammar. The wires are the staff lines, the word boxes are the notes, and the cups are the dynamics telling you how parts connect. Learning to "read" sentence diagrams is like learning to read music: once you see the pattern, you can instantly grasp the grammatical structure of any sentence.`,
      questions: [
        `What makes a visual representation more useful than a textual one for understanding grammar?`,
        `How does the diagram format reveal grammatical relationships that might be hidden in text?`,
        `What information is preserved and what is lost when converting a sentence to a diagram?`,
      ],
      connection: `Sentence diagrams are the visual interface between language and quantum computation. Understanding how to read these diagrams is essential because the diagram structure directly determines the quantum circuit topology. Every wire becomes a qubit, every cup becomes a quantum operation.`,
      technicalIntro: `A pregroup diagram is a string diagram in a compact closed category. It consists of: word boxes (labels with input/output types), wires (horizontal lines representing grammatical types), cups (bent wires connecting a type to its adjoint, representing reduction), and swaps (crossed wires representing type reordering). The diagram is read left to right, following the sentence word order. Types flow along wires from left to right. Cups consume type-adjoint pairs. The outermost wires must reduce to a single wire of type s for a grammatical sentence. Lambeq's Diagram class provides methods to inspect, manipulate, and transform these diagrams.`,
      lifeSkills: `Learning to read formal diagrams trains visual literacy — the ability to extract meaning from graphical representations. This skill is valuable in engineering (schematics, blueprints), data science (charts, graphs), and project management (flowcharts, Gantt charts).`,
    },
    mathModelling: {
      need: `Understanding sentence diagrams as mathematical objects in a compact closed category is essential for reasoning about their transformation into quantum circuits.`,
      motivation: `The diagram is not just a visual aid — it is a precise mathematical structure that determines the quantum circuit's connectivity and operation count.`,
      challenge: `Interpreting complex diagrams with multiple cups, swaps, and interconnected wires requires systematic understanding of the diagram algebra.`,
      equations: [
        {
          latex: `\\text{Diagram} = (\\text{Boxes}, \\text{Wires}, \\text{Cups}, \\text{Swaps})`,
          meaning: `A diagram is a 4-tuple of boxes (word representations), wires (type flows), cups (reductions), and swaps (reorderings).`,
          interpretation: `Each component has a specific visual and algebraic role. Boxes introduce states/wires. Cups reduce types. Swaps reorder wires without reducing. The complete diagram is a well-typed composition of these elements.`,
        },
        {
          latex: `\\text{Cup}_{n, n^r} : n \\otimes n^r \\rightarrow \\mathbb{C}`,
          meaning: `A cup maps the tensor product of a type and its right adjoint to the complex numbers (scalar), representing complete reduction.`,
          interpretation: `In the diagram, a cup looks like a U-shaped bend connecting an n wire to an n^r wire. Algebraically, it is the evaluation map of the compact closed category, corresponding to a Bell state projection in quantum mechanics.`,
        },
        {
          latex: `\\text{Swap}_{n, m} : n \\otimes m \\rightarrow m \\otimes n`,
          meaning: `A swap exchanges the order of two wires without changing their types.`,
          interpretation: `Swaps appear as crossed wires in the diagram. They are necessary when the grammatical reduction order differs from the word order. In quantum terms, swaps correspond to SWAP gates that reorder qubits.`,
        },
      ],
      variables: [
        { symbol: `\\otimes`, name: `Tensor Product`, description: `Composition of wires in parallel (side-by-side)` },
        { symbol: `\\mathbb{C}`, name: `Scalars`, description: `Complex numbers — the result of a fully reduced type` },
        { symbol: `\\text{Cup}`, name: `Cup Operation`, description: `Grammatical reduction connecting a type to its adjoint` },
        { symbol: `\\text{Swap}`, name: `Swap Operation`, description: `Reorders wires without grammatical reduction` },
      ],
      interactive: {
        equation: `\\text{Diagram} = \\text{Box}_1 \\circ \\text{Cup} \\circ \\text{Box}_2 \\circ \\text{Swap} \\circ \\text{Box}_3`,
        description: `Click on each diagram component to see its mathematical interpretation and quantum circuit correspondent:`,
        variables: [
          { symbol: `Box`, name: `Word Box`, description: `Represents a word's quantum state or linear map` },
          { symbol: `Cup`, name: `Reduction Cup`, description: `Bell state + partial trace in quantum` },
          { symbol: `Swap`, name: `Wire Swap`, description: `SWAP gate reordering qubits` },
        ],
        sliders: [
          { name: `zoom`, label: `Diagram Zoom Level`, min: 50, max: 200, step: 10, default: 100 },
        ],
      },
      charts: [
        {
          title: `Diagram Component Distribution by Sentence Type`,
          type: `bar`,
          data: [
            { Sentence: `SV (Cats purr)`, Boxes: 2, Cups: 1, Swaps: 0 },
            { Sentence: `SVO (John loves Mary)`, Boxes: 3, Cups: 2, Swaps: 1 },
            { Sentence: `SVC (Dogs are animals)`, Boxes: 3, Cups: 2, Swaps: 1 },
            { Sentence: `Adj N (Big dog)`, Boxes: 2, Cups: 1, Swaps: 0 },
            { Sentence: `SVOO (Gave dog bone)`, Boxes: 4, Cups: 3, Swaps: 2 },
          ],
        },
        {
          title: `Diagram Complexity: Cups vs Words`,
          type: `scatter`,
          data: [
            { Sentence: `Cats purr`, Words: 2, Cups: 1 },
            { Sentence: `Dogs bark`, Words: 2, Cups: 1 },
            { Sentence: `John runs`, Words: 2, Cups: 1 },
            { Sentence: `John loves Mary`, Words: 3, Cups: 2 },
            { Sentence: `Big dog barks`, Words: 3, Cups: 2 },
            { Sentence: `She gave him a book`, Words: 5, Cups: 4 },
          ],
        },
      ],
      advantages: `Sentence diagrams provide an intuitive visual representation of grammatical structure that directly maps to quantum circuit topology. The diagram algebra is well-understood and supports formal reasoning about circuit correctness.`,
      limitations: `Complex sentences produce large, tangled diagrams that are difficult to read. The visual representation can obscure rather than clarify when too many crossings and cups are present.`,
    },
    activities: [
      {
        title: `Diagram Component Identification`,
        description: `Students receive printed diagrams and must identify and label all components: boxes, wires, cups, and swaps.`,
        steps: [
          `Receive a worksheet with 5 printed pregroup diagrams`,
          `For each diagram, circle and label all word boxes`,
          `Draw arrows along each wire, labelling the type on each segment`,
          `Mark each cup with a "C" and identify which two types it connects`,
          `Count the total number of boxes, wires, cups, and swaps`,
        ],
        materials: `Printed diagram worksheet, coloured pens for labelling`,
        timeRequired: `10 min`,
        outcomes: `Students can identify all structural components of a pregroup diagram.`,
        rubrics: `Correct identification of all component types, accurate type labelling, correct counts`,
      },
      {
        title: `Diagram-to-Sentence Reconstruction`,
        description: `Given only a pregroup diagram (without words), students infer the original sentence and its grammatical structure.`,
        steps: [
          `Receive a diagram with word boxes blanked out`,
          `Use the types on each box (n, n^r·s·n^l, etc.) to infer what part of speech each word must be`,
          `Based on the types and connections, propose plausible words for each blank`,
          `Reconstruct the full sentence`,
          `Verify by parsing your reconstructed sentence and comparing diagrams`,
        ],
        materials: `Blanked diagrams worksheet, Lambeq parser for verification`,
        timeRequired: `10 min`,
        outcomes: `Students understand how diagram structure encodes grammatical roles.`,
        rubrics: `Correct part-of-speech identification, plausible word choices, matching diagram structure`,
      },
      {
        title: `Diagram Simplification Challenge`,
        description: `Students manually simplify diagrams by applying rewrite rules and observe how the diagram changes.`,
        steps: [
          `Parse a sentence and display the full diagram`,
          `Identify cups that can be "pulled through" boxes (functoriality)`,
          `Identify spiders (connected cups) that can be merged`,
          `Sketch the simplified diagram by hand`,
          `Compare with Lambeq's Rewriter output`,
        ],
        materials: `Lambeq diagram output, rewrite rule reference card`,
        timeRequired: `10 min`,
        outcomes: `Students understand diagram rewrite rules at a visual level.`,
        rubrics: `Correct identification of rewrite opportunities, accurate simplified sketch, match with Lambeq output`,
      },
      {
        title: `Group Diagram Reading Relay`,
        description: `Teams compete to correctly interpret complex diagrams as fast as possible.`,
        steps: [
          `Form teams of 3-4 students`,
          `Each round, a complex diagram is displayed`,
          `Teams race to answer: number of words, cups, swaps; sentence structure type; predicted quantum circuit qubit count`,
          `First correct team scores points`,
          `After 5 rounds, the team with most points wins`,
        ],
        materials: `Diagram slides, buzzer or hand-raising system, scoreboard`,
        timeRequired: `10 min`,
        outcomes: `Students develop fluency in reading diagrams quickly.`,
        rubrics: `Speed and accuracy of diagram interpretation`,
      },
    ],
    project: {
      scope: `Create an interactive diagram reader that displays a pregroup diagram and allows users to hover over each component to see: what it represents, its type, and its role in the quantum circuit.`,
      objectives: [
        `Parse sentences and extract diagram components`,
        `Render the diagram with interactive hover states`,
        `Display component metadata (type, role, quantum correspondent) on hover`,
        `Support zoom, pan, and highlighting of connected components`,
      ],
      timeline: [
        { phase: `Design component metadata schema`, duration: `3 min`, percent: 15 },
        { phase: `Implement diagram parsing and rendering`, duration: `5 min`, percent: 25 },
        { phase: `Implement hover interactions`, duration: `5 min`, percent: 30 },
        { phase: `Add navigation controls`, duration: `3 min`, percent: 20 },
        { phase: `Testing and refinement`, duration: `2 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Data Architect`, responsibility: `Design the metadata schema for diagram components` },
        { role: `Frontend Developer`, responsibility: `Build the interactive diagram renderer` },
        { role: `UX Designer`, responsibility: `Design hover interactions and navigation` },
      ],
      deliverables: [
        `Interactive diagram reader HTML/notebook`,
        `Component metadata for 5 example diagrams`,
        `User guide for the reader tool`,
      ],
    },
    questions: [
      {
        question: `What does a cup in a pregroup diagram represent both grammatically and quantum-mechanically?`,
        answer: `Grammatically, a cup represents the reduction of a type with its adjoint (e.g., n·n^r → 1). Quantum-mechanically, it corresponds to a Bell state preparation followed by a partial trace.`,
        explanation: `The cup operation cancels a type-adjoint pair, representing a grammatical dependency between two words. In the DisCoCat model, this becomes a quantum operation that creates entanglement and then discards part of the system.`,
        commonMistake: `Thinking a cup represents a direct connection between word meanings — it actually represents the cancellation of types, which in turn enables meaning composition.`,
      },
      {
        question: `What is the difference between a cup and a swap in a pregroup diagram?`,
        answer: `A cup reduces types (cancels a type with its adjoint), changing the type string. A swap only reorders wires without changing any types.`,
        explanation: `Cups are grammatical operations that actually process the linguistic structure. Swaps are purely organisational — they reorder wires to enable cups that would otherwise be blocked by the wrong ordering of types.`,
        tip: `Think of swaps as "plumbing" that arranges wires correctly, while cups are the actual "work" of grammatical reduction.`,
      },
      {
        question: `How can you tell if a sentence diagram represents a grammatical sentence?`,
        answer: `A diagram represents a grammatical sentence if the outermost wires reduce to exactly one wire of type s (sentence).`,
        explanation: `All grammatical types must be fully reduced via cups until only the sentence type s remains. If other types remain (e.g., n), the sentence is incomplete or the parse failed.`,
      },
    ],
    virtualLab: {
      description: `Interactive diagram reader where you can explore pregroup diagrams by hovering over components, tracing wires, and seeing the quantum circuit correspondence appear in real time.`,
      steps: [
        `Enter or select a sentence to display its diagram`,
        `Hover over any word box to see its type, meaning, and quantum correspondent`,
        `Click on a wire to highlight its path through the diagram`,
        `Click on a cup to see the grammatical relationship it encodes`,
        `Toggle "Quantum View" to see how the diagram maps to a quantum circuit`,
      ],
      stepDetails: [
        `Diagram display: SVG rendering with zoom and pan. Word boxes show the word text with type label below. Wires are coloured lines flowing left to right`,
        `Hover interactions: hovering a word box shows a tooltip with: word, pregroup type, grammatical role (subject, verb, object), and the quantum state/map it becomes`,
        `Wire highlighter: clicking a wire traces its full path through the diagram, showing where types enter, combine, and reduce. The type on each segment is displayed`,
        `Cup inspector: clicking a cup highlights the two connected wires and displays the grammatical relationship (e.g., "subject-verb agreement" for n·n^r cup). Also shows the corresponding Bell state in quantum notation`,
        `Quantum View toggle: transitions the diagram to show the equivalent quantum circuit — word boxes become parameterised gates, cups become Bell preparations + traces, swaps become SWAP gates. Animation shows the transformation`,
      ],
      completionMessage: `You can now read pregroup diagrams fluently! You understand how every visual element encodes grammatical information and how it maps to quantum circuits.`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[BobcatParser]
        B --> C[Pregroup Diagram]
        C --> D[Render SVG]
        D --> E[Interactive Viewer]
        E --> F[Hover: Component Info]
        E --> G[Click: Highlight Wire]
        E --> H[Quantum View Overlay]
        H --> I[Parameterised Quantum Circuit]`,
    },
    insights: {
      advantages: [
        `Visual representation makes grammatical structure immediately accessible`,
        `Direct correspondence between diagram elements and quantum operations`,
        `Diagrams support formal mathematical reasoning about correctness`,
        `Interactive exploration accelerates learning and intuition building`,
      ],
      disadvantages: [
        `Complex sentences produce visually cluttered diagrams`,
        `Reading diagrams requires practice and familiarity with conventions`,
        `The diagram notation is unfamiliar to most linguists and computer scientists`,
        `Large diagrams cannot be displayed legibly on small screens`,
      ],
      futureScope: `Lambeq is developing automatic diagram layout algorithms that minimise crossings and optimise readability. Integration with interactive notebook widgets (ipywidgets) is making diagram exploration more accessible.`,
      industrialApplications: [
        `Visual grammar checking and correction tools`,
        `Educational tools for teaching grammatical structure`,
        `Linguistic research visualisation and analysis`,
        `Debugging tools for QNLP circuit generation`,
      ],
      careerRelevance: `The ability to read and interpret pregroup diagrams is a core skill for QNLP research and development. It distinguishes practitioners who understand the DisCoCat model deeply from those who use it as a black box.`,
    },
  },

  '10.3': {
    topicId: '10.3',
    learningObjective: `Understand how Lambeq converts pregroup sentence diagrams into quantum circuits, including the role of cups as Bell state preparations, word boxes as parameterised unitaries, and the overall circuit topology.`,
    nextPrep: `Review basic quantum circuit concepts: qubits, gates (RX, RY, RZ, CNOT), and measurement. Refresh understanding of Bell states and entanglement from Module 5.`,
    dependencyGraph: `flowchart LR
      A[10.2 Sentence Diagrams] --> B[10.3 Diagrams to Circuits]
      B --> C[10.4 Parameterised Circuits]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you are translating a novel from English to Japanese. You cannot translate word by word — the sentence structures are completely different. You must understand the deep meaning and then express it in the target language's grammar. Converting pregroup diagrams to quantum circuits is similar translation. The diagram's cups become Bell state preparations (entanglement). The word boxes become parameterised rotation gates (encoding meaning). The wires become qubits (quantum memory). The translator is Lambeq's CircuitFactory, which knows exactly how each diagram element maps to a quantum circuit element. Just as a skilled translator preserves the meaning while changing the form, Lambeq preserves the grammatical structure while changing the representation from diagrams to circuits.`,
      questions: [
        `Why is it not trivial to convert a diagram directly into a quantum circuit?`,
        `What quantum operations naturally correspond to grammatical cup reductions?`,
        `How does the choice of circuit ansatz affect the quality of the translation?`,
      ],
      connection: `This conversion is the core innovation of the DisCoCat model and the primary function of Lambeq. It bridges linguistics (pregroup diagrams) and quantum computing (parameterised circuits), enabling the entire QNLP pipeline.`,
      technicalIntro: `Lambeq converts pregroup diagrams to quantum circuits through a systematic mapping. Each wire in the diagram becomes a qubit. Each word box becomes a parameterised unitary operation applied to the qubits corresponding to its input/output types. Each cup becomes a Bell state preparation (|Φ⁺⟩) followed by a partial trace (discarding a qubit). Swaps become SWAP gates. The CircuitFactory class implements this mapping with different ansatz options controlling how word boxes are expanded into quantum gates. The default IQPAnsatz represents each word box as an IQP-style circuit (Hadamard + parameterised ZZ interactions). The resulting circuit is a parameterised quantum circuit ready for training.`,
      lifeSkills: `This translation process teaches you to find structural correspondences between different domains — a skill essential for interdisciplinary work. The ability to recognise that a grammatical cup and a Bell state are "the same thing" in different languages is the essence of deep understanding.`,
    },
    mathModelling: {
      need: `The diagram-to-circuit conversion requires a precise mathematical mapping that preserves the compositional structure of the diagram.`,
      motivation: `Without a rigorous mapping, the quantum circuit would not faithfully represent the sentence's grammatical structure, and the resulting model would not learn meaningful linguistic patterns.`,
      challenge: `Representing cups (which reduce type dimension) as quantum operations (which must be trace-preserving and completely positive).`,
      equations: [
        {
          latex: `\\text{Circuit} = \\text{Factory}(\\text{Diagram}, \\text{Ansatz})`,
          meaning: `The circuit factory takes a diagram and an ansatz and produces a parameterised quantum circuit.`,
          interpretation: `The factory iterates through the diagram elements (boxes, cups, swaps) and applies the ansatz-specific mapping for each. The result is a quantum circuit with the same compositional structure as the diagram.`,
        },
        {
          latex: `\\text{Box}(f) \\rightarrow U_f(\\theta)`,
          meaning: `A word box representing a linear map f is converted to a parameterised unitary U_f with trainable parameters \\theta.`,
          interpretation: `The word's meaning is encoded in the parameters \\theta of a unitary matrix. Different ansatzes provide different ways to parameterise U_f — from simple single-qubit rotations to multi-qubit entangling blocks.`,
        },
        {
          latex: `\\text{Cup}_{A, A^*} \\rightarrow \\ket{\\Phi^+}_{A, A^*} \\; \\text{then} \\; \\text{Tr}_{A^*}`,
          meaning: `A cup connecting types A and A^* is converted to: (1) prepare a Bell state on the two corresponding qubits, (2) trace out (discard) the A^* qubit.`,
          interpretation: `The Bell state |Φ⁺⟩ = (|00⟩ + |11⟩)/√2 creates entanglement between the two qubits. Tracing out one qubit implements the reduction — the remaining qubit carries the "meaning" of the reduced type pair.`,
        },
      ],
      variables: [
        { symbol: `U_f(\\theta)`, name: `Parameterised Unitary`, description: `A unitary matrix with trainable parameters representing a word's meaning` },
        { symbol: `\\ket{\\Phi^+}`, name: `Bell State`, description: `Maximally entangled state (|00⟩ + |11⟩)/√2 used to implement cups` },
        { symbol: `\\text{Tr}`, name: `Partial Trace`, description: `Quantum operation that discards a subsystem, leaving a reduced state` },
        { symbol: `\\text{Ansatz}`, name: `Circuit Ansatz`, description: `Template for converting word boxes into specific gate sequences` },
      ],
      interactive: {
        equation: `|\\psi_{\\text{sentence}}\\rangle = \\text{Circuit}(\\theta)|0\\dots0\\rangle`,
        description: `Adjust the circuit parameters and see how the sentence's quantum state changes as it flows through the circuit:`,
        variables: [
          { symbol: `\\theta_1`, name: `Word 1 Parameter`, description: `Rotation angle for the first word (subject)` },
          { symbol: `\\theta_2`, name: `Word 2 Parameter`, description: `Rotation angle for the second word (verb)` },
          { symbol: `\\theta_3`, name: `Word 3 Parameter`, description: `Rotation angle for the third word (object)` },
        ],
        sliders: [
          { name: `t1`, label: `\\theta_1 (subject)`, min: 0, max: 6.28, step: 0.01, default: 1.57 },
          { name: `t2`, label: `\\theta_2 (verb)`, min: 0, max: 6.28, step: 0.01, default: 2.09 },
          { name: `t3`, label: `\\theta_3 (object)`, min: 0, max: 6.28, step: 0.01, default: 0.79 },
        ],
      },
      charts: [
        {
          title: `Circuit Resource Requirements by Sentence Length`,
          type: `bar`,
          data: [
            { Words: 2, Qubits: 2, Gates: 5, Depth: 3 },
            { Words: 3, Qubits: 4, Gates: 12, Depth: 6 },
            { Words: 4, Qubits: 6, Gates: 22, Depth: 10 },
            { Words: 5, Qubits: 8, Gates: 35, Depth: 14 },
            { Words: 6, Qubits: 10, Gates: 50, Depth: 18 },
          ],
        },
        {
          title: `Ansatz Comparison: Gate Count vs Expressivity`,
          type: `bar`,
          data: [
            { Ansatz: `IQPAnsatz`, GateCount: 8, Expressivity: 3 },
            { Ansatz: `Sim14Ansatz`, GateCount: 14, Expressivity: 5 },
            { Ansatz: `MPSAnsatz`, GateCount: 6, Expressivity: 2 },
            { Ansatz: `SpiderAnsatz`, GateCount: 4, Expressivity: 2 },
            { Ansatz: `PermutationAnsatz`, GateCount: 3, Expressivity: 1 },
          ],
        },
      ],
      advantages: `The DisCoCat mapping provides a principled, mathematically rigorous way to convert linguistic structure into quantum circuits. The compositionality of the diagram ensures the circuit is correct by construction.`,
      limitations: `Each cup introduces a Bell state and partial trace, which means the circuit is not unitary overall (it is a quantum channel). The partial trace discards information, which may limit the model's expressivity. Different ansatzes vary significantly in circuit depth and trainability.`,
    },
    activities: [
      {
        title: `Manual Circuit Conversion Exercise`,
        description: `Students manually trace the conversion of a simple diagram to a quantum circuit step by step.`,
        steps: [
          `Start with the pregroup diagram for "Cats purr" (2 words, 1 cup)`,
          `Identify the word boxes: Cats (type n), purr (type n^r·s)`,
          `Map the cup to a Bell state preparation: create |Φ⁺⟩, trace out the n^r qubit`,
          `Map word boxes to parameterised RY gates`,
          `Write the complete circuit: initialise qubits, apply word gates, apply Bell state, trace, measure`,
        ],
        materials: `Circuit conversion worksheet, blank quantum circuit templates`,
        timeRequired: `12 min`,
        outcomes: `Students understand the manual mapping from diagram to circuit.`,
        rubrics: `Correct identification of each diagram component's quantum correspondent, accurate circuit construction`,
      },
      {
        title: `Lambeq CircuitFactory Demonstration`,
        description: `Students use Lambeq's CircuitFactory to automatically convert diagrams to circuits and explore the output.`,
        steps: [
          `Parse a sentence using BobcatParser`,
          `Import CircuitFactory and IQPAnsatz from lambeq`,
          `Create a circuit using factory = CircuitFactory(ansatz) and circuit = factory(diagram)`,
          `Display the circuit using circuit.draw()`,
          `Compare circuits generated with different ansatzes for the same sentence`,
        ],
        materials: `Jupyter notebook with Lambeq, circuit visualisation examples`,
        timeRequired: `10 min`,
        outcomes: `Students can use Lambeq's CircuitFactory to generate quantum circuits automatically.`,
        rubrics: `Successful circuit generation, correct ansatz configuration, meaningful comparison`,
      },
      {
        title: `Circuit Topology Analysis`,
        description: `Students analyse the topology of generated circuits and relate it back to the original sentence structure.`,
        steps: [
          `Generate circuits for 3 sentences with different structures`,
          `For each circuit, count: qubits, parameterised gates, CNOT gates, depth`,
          `Map each circuit element back to its diagram origin: which cup produced this Bell state? Which word produced this gate?`,
          `Create a table showing the relationship between sentence structure and circuit topology`,
          `Discuss: which sentence structures produce the most complex circuits?`,
        ],
        materials: `Circuit topology worksheet, Lambeq circuit output`,
        timeRequired: `10 min`,
        outcomes: `Students can trace circuit topology back to grammatical structure.`,
        rubrics: `Accurate mapping of circuit to diagram elements, correct topology analysis, insightful discussion`,
      },
      {
        title: `Ansatz Comparison and Selection`,
        description: `Students compare circuits generated by different ansatzes for the same sentence and select the best based on given criteria.`,
        steps: [
          `Generate circuits for one sentence using IQPAnsatz, Sim14Ansatz, and MPSAnsatz`,
          `Compare qubit count, gate count, and circuit depth`,
          `Simulate each circuit with random parameters and compare output distributions`,
          `Select the best ansatz based on: minimal resource usage + sufficient expressivity`,
          `Present and justify your selection to the class`,
        ],
        materials: `Ansatz comparison template, Qiskit Aer for simulation`,
        timeRequired: `10 min`,
        outcomes: `Students can choose appropriate ansatzes for given resource constraints.`,
        rubrics: `Correct ansatz comparison, thoughtful selection criteria, well-justified choice`,
      },
    ],
    project: {
      scope: `Build a circuit visualisation tool that takes a sentence and shows the step-by-step conversion from pregroup diagram to quantum circuit, with labelled correspondences between elements.`,
      objectives: [
        `Parse sentences and generate diagrams using Lambeq`,
        `Convert diagrams to circuits using CircuitFactory`,
        `Create a side-by-side visualisation showing diagram and circuit with matching colours/annotations`,
        `Allow clicking on a diagram element to highlight its circuit correspondent and vice versa`,
      ],
      timeline: [
        { phase: `Set up parsing and circuit generation pipeline`, duration: `5 min`, percent: 20 },
        { phase: `Design visualisation layout`, duration: `5 min`, percent: 20 },
        { phase: `Implement element correspondences`, duration: `5 min`, percent: 30 },
        { phase: `Build interactive features`, duration: `5 min`, percent: 20 },
        { phase: `Test on diverse sentences`, duration: `3 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Pipeline Engineer`, responsibility: `Implement the parsing-to-circuit generation pipeline` },
        { role: `Visualisation Designer`, responsibility: `Design the side-by-side display with element matching` },
        { role: `Interaction Developer`, responsibility: `Build click-to-highlight correspondence features` },
      ],
      deliverables: [
        `Interactive visualisation tool (HTML/notebook)`,
        `Element correspondence table for 3 example sentences`,
        `Documentation explaining the conversion process`,
      ],
    },
    questions: [
      {
        question: `How does Lambeq convert a pregroup diagram cup into a quantum circuit operation?`,
        answer: `A diagram cup is converted to a Bell state preparation (|Φ⁺⟩ = (|00⟩ + |11⟩)/√2) on the two corresponding qubits, followed by a partial trace that discards one qubit.`,
        explanation: `The Bell state creates entanglement between the wires, and the partial trace implements the type reduction. This corresponds to the evaluation map ε in the compact closed category.`,
        commonMistake: `Thinking a cup is just a CNOT gate — it is actually a Bell state preparation (H + CNOT) followed by tracing out a qubit.`,
        tip: `The cup is the most non-trivial part of the conversion — it is where quantum entanglement enters the QNLP model.`,
      },
      {
        question: `What determines the number of qubits needed for a sentence's quantum circuit?`,
        answer: `The number of qubits equals the number of wires at the widest point of the pregroup diagram, which is typically the number of words plus additional wires for intermediate types.`,
        explanation: `Intransitive sentences (SV) may need 2-3 qubits, while transitive sentences (SVO) typically need 4-5 qubits. The cup operations add and remove qubits through Bell state preparation and partial trace.`,
        tip: `The maximum number of parallel wires in the diagram directly determines the quantum circuit's width.`,
      },
      {
        question: `Why are partial traces necessary in the diagram-to-circuit conversion?`,
        answer: `Partial traces implement the grammatical reduction: when a type cancels with its adjoint (n·n^r → 1), the corresponding qubits are reduced/discarded, leaving only the remaining types.`,
        explanation: `Grammatical reduction reduces the type complexity. Similarly, partial trace reduces the quantum system's dimension, discarding degrees of freedom that are no longer needed. This is physically realised by simply ignoring certain output qubits.`,
      },
    ],
    virtualLab: {
      description: `Interactive diagram-to-circuit converter. Load a sentence, see the diagram on the left and the circuit on the right. Click any diagram element to see its circuit correspondent highlighted with an animated transition.`,
      steps: [
        `Enter a sentence and parse it to generate the pregroup diagram`,
        `View the side-by-side display: diagram (left) and quantum circuit (right)`,
        `Click on a word box in the diagram — the corresponding parameterised gate block highlights in the circuit`,
        `Click on a cup in the diagram — the Bell state preparation + trace highlights in the circuit`,
        `Click "Animate Conversion" to watch a step-by-step animation building the circuit from the diagram`,
      ],
      stepDetails: [
        `Side-by-side layout: left panel shows the interactive diagram (from 10.2 lab), right panel shows the generated circuit in Qiskit-style notation`,
        `Word box mapping: clicking a word box highlights in blue the corresponding gate(s) in the circuit. A tooltip shows: Word → Parameterised gates · Type → Qubits · Meaning encoding`,
        `Cup mapping: clicking a cup highlights in green the Bell state preparation (H + CNOT) and the subsequent partial trace (qubit crossed out)`,
        `Animate Conversion button: steps through the diagram left-to-right, building the circuit incrementally. Each step adds the quantum operations corresponding to the current diagram element`,
        `Circuit summary: panel showing qubit count, parameter count, gate count, and circuit depth. Updates live as different ansatzes are selected`,
      ],
      completionMessage: `You have mastered the diagram-to-circuit conversion! You understand how every part of a pregroup diagram maps to a specific quantum operation.`,
      dataFlow: `flowchart LR
        A[Pregroup Diagram] --> B[CircuitFactory]
        B --> C{Apply Ansatz}
        C --> D[Word Boxes → Parameterised Gates]
        C --> E[Cups → Bell States + Traces]
        C --> F[Swaps → SWAP Gates]
        D --> G[Parameterised Circuit]
        E --> G
        F --> G
        G --> H[Qiskit Backend]
        G --> I[PennyLane Optimiser]`,
    },
    insights: {
      advantages: [
        `Principled mapping from linguistic structure to quantum circuits`,
        `Compositional — the circuit structure directly reflects grammatical structure`,
        `Multiple ansatz options provide flexibility for different hardware constraints`,
        `Automatic conversion eliminates manual circuit design for each sentence`,
      ],
      disadvantages: [
        `Partial traces discard information, potentially limiting model capacity`,
        `Circuit depth grows quickly with sentence complexity`,
        `Current ansatzes are relatively simple and may not capture all linguistic nuances`,
        `Conversion is tied to pregroup grammar — other grammatical formalisms not supported`,
      ],
      futureScope: `Lambeq is researching more expressive ansatzes, including adaptive circuits that can adjust their structure based on sentence complexity. Quantum error mitigation techniques will be integrated to handle noise on real hardware.`,
      industrialApplications: [
        `Automated quantum circuit generation for NLP tasks`,
        `Template-based quantum model construction for different sentence types`,
        `Rapid prototyping of QNLP models for specific use cases`,
        `Educational visualisation of the language-to-quantum pipeline`,
      ],
      careerRelevance: `The ability to convert linguistic structure to quantum circuits is the core technical skill in QNLP. Expertise in this translation process enables you to build, debug, and optimise quantum language models.`,
    },
  },

  '10.4': {
    topicId: '10.4',
    learningObjective: `Understand parameterised quantum circuits for language: how trainable rotation gates encode word meanings, how circuit parameters are updated during training, and how the circuit produces meaningful sentence representations.`,
    nextPrep: `Review PennyLane's parameter-shift rule (9.3) and the concept of variational quantum circuits. Refresh understanding of rotation gates (RX, RY, RZ).`,
    dependencyGraph: `flowchart LR
      A[10.3 Diagrams to Circuits] --> B[10.4 Parameterised Circuits]
      B --> C[10.5 QLM Lab]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine a sculptor faced with a block of marble. The block contains infinite possibilities — it could become a lion, a human, or an abstract shape. The sculptor's chisel transforms the block, one chip at a time, until the intended form emerges. A parameterised quantum circuit is like that block of marble, and the parameters are the sculptor's chisel. Initially, the circuit produces random outputs, just as the marble block looks like nothing specific. But as training progresses — chips falling as the parameters are updated — the circuit's output takes shape, eventually producing meaningful sentence classifications. Every parameter in the circuit is like a precise angle of the chisel, and the gradient (computed by PennyLane) tells us exactly how to adjust each angle to reveal the intended form.`,
      questions: [
        `Why do we need trainable parameters in a quantum circuit for language?`,
        `How does changing a rotation angle affect the circuit's output?`,
        `What does it mean for a quantum circuit to "learn" a word meaning?`,
      ],
      connection: `Parameterised circuits are where learning happens in QNLP. The fixed structure comes from grammar (via Lambeq), but the parameters encode word meanings learned from data. This separation of structure (grammar, fixed) and content (parameters, learned) is the key insight of the DisCoCat model.`,
      technicalIntro: `Parameterised quantum circuits (PQCs) are quantum circuits where some gates have tunable parameters — typically rotation angles in RX, RY, RZ gates. In QNLP, each word in a sentence is encoded as a set of parameterised gates applied to specific qubits. The rotation angles represent the word's meaning in that context. During training, these angles are updated via gradient-based optimisation to minimise a task-specific loss (e.g., classification error). The full sentence is processed by the circuit, and the measurement outcome determines the prediction. The number of parameters equals the sum of the ansatz size for each word box, typically 1-4 parameters per word. The expressivity of the circuit — what functions it can represent — depends on the circuit depth and the choice of ansatz.`,
      lifeSkills: `Parameterised learning teaches you the fundamental principle of all machine learning: fixed structure + adjustable parameters = learnable model. This principle extends beyond quantum computing to neural networks, statistical models, and even organisational processes where structure is fixed but execution is refined over time.`,
    },
    mathModelling: {
      need: `Understanding how circuit parameters encode word meanings and how they are updated during training requires modelling the forward pass (inference) and backward pass (gradient computation).`,
      motivation: `The parameters are the only learnable component in a QNLP model. Their expressivity and trainability directly determine model performance.`,
      challenge: `Designing parameterised circuits that are expressive enough to capture word meanings while remaining trainable (avoiding barren plateaus) and executable on near-term quantum hardware.`,
      equations: [
        {
          latex: `U_{\\text{word}}(\\theta) = \\prod_{k=1}^{K} e^{-i\\theta_k G_k / 2}`,
          meaning: `A word's parameterised unitary is a product of K gate operations, each with parameter \\theta_k and generator G_k (typically a Pauli operator).`,
          interpretation: `Each word in the sentence is represented by a sequence of K rotation gates. For IQPAnsatz, K = 2 per word (RY + RZ or similar). The generators G_k determine which axis the rotation is about.`,
        },
        {
          latex: `f(x; \\theta) = \\text{Tr}[O \\cdot \\rho_{\\text{out}}(x; \\theta)]`,
          meaning: `The model output for sentence x with parameters \\theta is the expectation value of observable O on the output state \\rho_{\\text{out}}.`,
          interpretation: `The output state \\rho_{\\text{out}} is produced by applying the full parameterised circuit (derived from the sentence diagram) to the initial state |0...0⟩. The measurement outcome of observable O (e.g., Pauli Z on the last qubit) gives the classification result.`,
        },
        {
          latex: `\\theta_{t+1} = \\theta_t - \\eta \\cdot \\nabla_\\theta \\mathcal{L}(f(x; \\theta_t), y)`,
          meaning: `Gradient descent update: parameters are adjusted in the direction that reduces the loss \\mathcal{L}.`,
          interpretation: `PennyLane computes \\nabla_\\theta \\mathcal{L} using the parameter-shift rule. For each of the P parameters, two circuit evaluations are needed. The gradient tells us whether to increase or decrease each rotation angle to improve the model's predictions.`,
        },
      ],
      variables: [
        { symbol: `G_k`, name: `Gate Generator`, description: `Pauli operator (X, Y, Z) that generates the k-th rotation gate` },
        { symbol: `O`, name: `Observable`, description: `Measured quantum observable, typically Pauli Z on one or more qubits` },
        { symbol: `\\rho_{\\text{out}}`, name: `Output Quantum State`, description: `Density matrix of the sentence after full circuit execution` },
        { symbol: `K`, name: `Parameters per Word`, description: `Number of rotation gates used to encode each word's meaning` },
      ],
      interactive: {
        equation: `f(\\theta) = \\langle Z \\rangle = \\langle 0|U^\\dagger(\\theta) Z U(\\theta)|0\\rangle`,
        description: `Adjust the 4 parameters of a 2-word circuit and see how the output expectation value changes:`,
        variables: [
          { symbol: `\\theta_{11}`, name: `Word 1 — Gate 1`, description: `First rotation angle for the subject word` },
          { symbol: `\\theta_{12}`, name: `Word 1 — Gate 2`, description: `Second rotation angle for the subject word` },
          { symbol: `\\theta_{21}`, name: `Word 2 — Gate 1`, description: `First rotation angle for the verb` },
          { symbol: `\\theta_{22}`, name: `Word 2 — Gate 2`, description: `Second rotation angle for the verb` },
        ],
        sliders: [
          { name: `w11`, label: `\\theta_{11}`, min: 0, max: 6.28, step: 0.01, default: 1.57 },
          { name: `w12`, label: `\\theta_{12}`, min: 0, max: 6.28, step: 0.01, default: 0.79 },
          { name: `w21`, label: `\\theta_{21}`, min: 0, max: 6.28, step: 0.01, default: 2.36 },
          { name: `w22`, label: `\\theta_{22}`, min: 0, max: 6.28, step: 0.01, default: 3.14 },
        ],
      },
      charts: [
        {
          title: `Loss Landscape Visualisation (2-Parameter Slice)`,
          type: `contour`,
          data: [
            { theta1: 0.0, theta2: 0.0, Loss: 0.95 },
            { theta1: 0.0, theta2: 1.57, Loss: 0.72 },
            { theta1: 0.0, theta2: 3.14, Loss: 0.68 },
            { theta1: 1.57, theta2: 0.0, Loss: 0.81 },
            { theta1: 1.57, theta2: 1.57, Loss: 0.35 },
            { theta1: 1.57, theta2: 3.14, Loss: 0.42 },
            { theta1: 3.14, theta2: 0.0, Loss: 0.78 },
            { theta1: 3.14, theta2: 1.57, Loss: 0.45 },
            { theta1: 3.14, theta2: 3.14, Loss: 0.50 },
            { theta1: 4.71, theta2: 1.57, Loss: 0.28 },
            { theta1: 4.71, theta2: 3.14, Loss: 0.33 },
            { theta1: 6.28, theta2: 0.0, Loss: 0.92 },
            { theta1: 6.28, theta2: 1.57, Loss: 0.70 },
            { theta1: 6.28, theta2: 3.14, Loss: 0.65 },
          ],
        },
        {
          title: `Parameter Evolution During Training`,
          type: `line`,
          data: [
            { name: `Epoch 1`, theta1: 1.57, theta2: 3.14, theta3: 0.79 },
            { name: `Epoch 5`, theta1: 2.01, theta2: 2.87, theta3: 1.05 },
            { name: `Epoch 10`, theta1: 2.45, theta2: 2.55, theta3: 1.42 },
            { name: `Epoch 15`, theta1: 2.78, theta2: 2.23, theta3: 1.78 },
            { name: `Epoch 20`, theta1: 3.02, theta2: 1.98, theta3: 2.05 },
            { name: `Epoch 25`, theta1: 3.18, theta2: 1.82, theta3: 2.21 },
            { name: `Epoch 30`, theta1: 3.28, theta2: 1.72, theta3: 2.30 },
          ],
        },
      ],
      advantages: `Parameterised circuits provide a flexible, trainable framework for encoding word meanings in quantum language models. The parameters directly correspond to word semantics and are optimised via standard gradient-based machine learning techniques.`,
      limitations: `PQCs face the barren plateau problem: in large circuits, gradients vanish exponentially with qubit count, making training infeasible. Parameter initialisation and circuit architecture choices significantly affect trainability.`,
    },
    activities: [
      {
        title: `Parameter Encoding Exploration`,
        description: `Students manually set parameters for a simple 2-word circuit and observe how the output changes, building intuition for how parameters encode meaning.`,
        steps: [
          `Load a pre-built 2-word PQC for sentence classification`,
          `Set all parameters to 0 and observe the output (should be |0⟩ for both qubits)`,
          `Increase θ₁ gradually from 0 to π and observe the output probability of |1⟩`,
          `Set different parameter combinations and try to create specific output patterns`,
          `Discuss: if you wanted the circuit to output "positive" for one sentence and "negative" for another, what parameter values would you need?`,
        ],
        materials: `PQC exploration notebook, parameter worksheets`,
        timeRequired: `10 min`,
        outcomes: `Students develop intuition for how rotation angles affect circuit outputs.`,
        rubrics: `Correct observation of output changes, meaningful parameter choices, understanding of encoding`,
      },
      {
        title: `Gradient Visualisation Workshop`,
        description: `Students visualise the gradient landscape of a PQC and see how the parameter-shift rule guides optimisation.`,
        steps: [
          `Define a simple PQC with 2 parameters`,
          `Plot the loss landscape as a 3D surface (loss vs θ₁ vs θ₂)`,
          `Pick a starting point (initial parameters) and compute the gradient`,
          `Draw the gradient arrow on the landscape to see the direction of steepest descent`,
          `Simulate gradient descent and overlay the optimisation trajectory on the landscape`,
        ],
        materials: `Notebook with gradient landscape plotting, matplotlib 3D`,
        timeRequired: `10 min`,
        outcomes: `Students visually understand how gradients guide parameter updates.`,
        rubrics: `Correct landscape plotting, accurate gradient computation, meaningful trajectory visualisation`,
      },
      {
        title: `Training Dynamics Analysis`,
        description: `Students train a PQC on a simple task and analyse how different hyperparameters affect convergence.`,
        steps: [
          `Define a binary classification task with synthetic 2-word sentences`,
          `Train the PQC with learning rate 0.1 for 50 epochs — record loss curve`,
          `Repeat with learning rates 0.01 and 0.5 — compare convergence`,
          `Repeat with different parameter initialisations (all zeros, random, Xavier) — compare outcomes`,
          `Create a summary report: which hyperparameters matter most?`,
        ],
        materials: `Training notebook with configurable hyperparameters`,
        timeRequired: `12 min`,
        outcomes: `Students understand the impact of hyperparameters on QNLP training.`,
        rubrics: `Systematic hyperparameter comparison, accurate reporting, insightful conclusions`,
      },
      {
        title: `Barren Plateau Demonstration`,
        description: `Students observe the barren plateau phenomenon by computing gradient magnitudes for circuits of increasing size.`,
        steps: [
          `Create PQCs with 2, 4, 6, 8, and 10 qubits (each with ∼qubit_count parameters)`,
          `For each circuit, randomly initialise parameters 100 times and compute the gradient magnitude`,
          `Plot the average gradient magnitude vs qubit count`,
          `Observe how gradients vanish as circuit size increases`,
          `Discuss: implications for scaling QNLP to longer sentences`,
        ],
        materials: `Barren plateau analysis notebook`,
        timeRequired: `10 min`,
        outcomes: `Students understand the barren plateau challenge in PQC training.`,
        rubrics: `Correct gradient computation, accurate plotting, understanding of implications`,
      },
    ],
    project: {
      scope: `Build a parameter analysis toolkit that trains a PQC on a QNLP task and visualises how each word's parameters evolve, which parameters matter most for classification, and how the decision boundary develops.`,
      objectives: [
        `Train a PQC on a binary sentence classification task`,
        `Track all parameter values throughout training`,
        `Visualise parameter trajectories and final values`,
        `Identify which words' parameters contribute most to the classification decision`,
        `Plot the decision boundary in parameter space`,
      ],
      timeline: [
        { phase: `Set up PQC and training loop`, duration: `5 min`, percent: 20 },
        { phase: `Implement parameter tracking`, duration: `5 min`, percent: 25 },
        { phase: `Build visualisation dashboards`, duration: `5 min`, percent: 30 },
        { phase: `Analyse and interpret results`, duration: `5 min`, percent: 25 },
      ],
      teamRoles: [
        { role: `Model Trainer`, responsibility: `Set up training loop and hyperparameter tuning` },
        { role: `Visualisation Engineer`, responsibility: `Create parameter evolution plots and dashboards` },
        { role: `Analysis Lead`, responsibility: `Interpret learned parameters and relate to word meanings` },
      ],
      deliverables: [
        `Parameter tracking and visualisation notebook`,
        `Parameter evolution plots for 3 training runs`,
        `Analysis report: what did the model learn?`,
      ],
    },
    questions: [
      {
        question: `How do circuit parameters encode word meanings in a QNLP model?`,
        answer: `Each word is mapped to a set of parameterised rotation gates whose angles are trainable. These angles determine how the word transforms the quantum state, effectively encoding the word's meaning in the context of the sentence.`,
        explanation: `During training, the parameters are adjusted so that sentences with similar meanings produce similar measurement outcomes. The parameters become learned word embeddings in the quantum state space.`,
        commonMistake: `Thinking each parameter directly corresponds to a specific linguistic feature — parameters are learned in a distributed, entangled way.`,
        tip: `Think of parameters as learned rotation angles that collectively encode word meaning through their effect on the full quantum state.`,
      },
      {
        question: `What causes the barren plateau problem and why does it matter for QNLP?`,
        answer: `Barren plateaus occur when gradients vanish exponentially with the number of qubits, making gradient-based training ineffective for large circuits. This limits the size of sentences QNLP models can handle.`,
        explanation: `As circuit size grows, the loss landscape becomes exponentially flat in most directions. Random initialisation places parameters on a plateau where gradients are near zero, and the optimiser cannot find the direction to improve.`,
        tip: `Use careful parameter initialisation (e.g., identity-block or small random values) and consider circuit architectures designed to mitigate barren plateaus (e.g., layered ansatzes with identity initialisation).`,
      },
      {
        question: `Why does the parameter-shift rule require 2 circuit evaluations per parameter per gradient step?`,
        answer: `The parameter-shift rule computes the exact gradient by evaluating the circuit at θ + π/2 and θ - π/2, requiring two independent circuit executions per parameter.`,
        explanation: `For a gate of the form e^{-iθG/2}, the derivative of the expectation value is [⟨O⟩(θ+π/2) - ⟨O⟩(θ-π/2)]/2. Each evaluation requires running the full circuit once, giving 2P evaluations for P parameters.`,
      },
    ],
    virtualLab: {
      description: `Interactive PQC trainer where you can design a parameterised circuit, set initial parameters, and watch the training process with real-time visualisation of parameter evolution, loss landscape, and decision boundary.`,
      steps: [
        `Select the number of words (2-5) and parameters per word (1-4)`,
        `Choose initial parameter values manually or use a preset strategy (random, zeros, He)`,
        `Click "Train" to run gradient descent optimisation`,
        `Watch the loss curve, parameter values, and decision boundary update in real time`,
        `Pause training at any point to inspect parameter values and test predictions on new sentences`,
      ],
      stepDetails: [
        `Circuit designer: visual circuit builder showing qubits and parameterised gates. Each word's gates are grouped and colour-coded. Click any gate to see/change its parameter value`,
        `Initialisation panel: presets (all zeros, random uniform, random normal, He, Xavier) or manual input via sliders for each parameter`,
        `Training dashboard: real-time loss curve (epoch vs loss), parameter trackers (line plot of each parameter over time), gradient norm indicator`,
        `Decision boundary: 2D projection of the decision space showing how the model separates positive/negative sentences. Training data points shown with correct/predicted labels`,
        `Inspector mode: pause training and enter a specific sentence. The lab shows the full circuit with current parameter values, simulates it, and displays the predicted class with confidence score`,
      ],
      completionMessage: `You have mastered parameterised quantum circuits for language! You understand how trainable parameters encode word meanings and how gradient-based optimisation tunes them for QNLP tasks.`,
      dataFlow: `flowchart LR
        A[Initial Parameters θ₀] --> B[Parameterised Circuit]
        B --> C[Forward Pass: f(x; θ)]
        C --> D[Loss Computation L]
        D --> E{Converged?}
        E -->|No| F[Parameter-Shift Rule]
        F --> G[Gradients ∇L]
        G --> H[Optimiser Update]
        H --> I[New Parameters θₜ]
        I --> B
        E -->|Yes| J[Trained Model]
        J --> K[Classification Results]`,
    },
    insights: {
      advantages: [
        `Parameters directly encode word meanings in a differentiable way`,
        `Standard gradient-based optimisation techniques (Adam, SGD) work out of the box via PennyLane`,
        `Circuit structure (from grammar) and content (parameters) are cleanly separated`,
        `Parameter interpretation can reveal learned linguistic patterns`,
      ],
      disadvantages: [
        `Barren plateaus limit scalability to longer sentences and more complex tasks`,
        `Current ansatzes may not be expressive enough for nuanced language understanding`,
        `Parameter initialisation significantly affects training success and requires careful tuning`,
        `Each gradient step requires 2P circuit evaluations, making training computationally expensive`,
      ],
      futureScope: `Advanced optimisation techniques (quantum natural gradient, layerwise learning) and ansatz design (problem-inspired, hardware-efficient) are active research areas addressing current limitations. Parameter initialisation strategies specifically for QNLP are being developed.`,
      industrialApplications: [
        `Trainable quantum models for sentiment analysis and classification`,
        `Adaptive quantum circuits that learn domain-specific language patterns`,
        `Continuous learning systems where parameters are fine-tuned on new data`,
        `Quantum models that can be transferred between different NLP tasks`,
      ],
      careerRelevance: `Understanding PQC training — including gradient computation, optimisation, and the barren plateau challenge — is essential for any quantum machine learning practitioner. This knowledge directly transfers to VQEs, QML classification, and quantum generative models.`,
    },
  },

  '10.5': {
    topicId: '10.5',
    learningObjective: `Build, train, and evaluate your first Quantum Language Model (QLM) using Lambeq, Qiskit, and PennyLane, achieving > 75% accuracy on a binary sentence classification task in a simulated environment.`,
    nextPrep: `Ensure all three frameworks (Lambeq, Qiskit, PennyLane) are installed and working. Review the complete pipeline from 9.6 to be prepared.`,
    dependencyGraph: `flowchart LR
      A[10.4 Parameterised Circuits] --> B[10.5 QLM Lab]
      C[9.5 Dev Setup] --> B
      D[9.6 Lab] --> B
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Today is the day you become a quantum language engineer. Over the past nine modules, you have learned the theory of quantum computing, the structure of language, the mathematics of the DisCoCat model, and the tools of the trade. Now, you will build your first Quantum Language Model — a complete working system that takes sentences as input and outputs classifications using a quantum circuit. This is like the Wright Brothers' first flight at Kitty Hawk. Their first plane flew only 120 feet — a humble distance compared to modern jets. Your first QLM will classify only simple sentences — a humble capability compared to GPT-4. But just as that first flight proved that powered flight was possible, your first QLM will prove that quantum language models are real, buildable, and functional.`,
      questions: [
        `What does it mean to have built a working quantum language model?`,
        `How does the experience of building a QLM change your understanding of QNLP?`,
        `What would you need to do to scale this model to real-world applications?`,
      ],
      connection: `This lab is the culmination of the entire QNLP workshop. Every concept from Module 1 through Module 10 finds practical expression here. You will parse sentences with Lambeq, generate circuits, train parameters with PennyLane, and classify sentences — demonstrating the complete QNLP pipeline in action.`,
      technicalIntro: `In this lab, you will build a Quantum Language Model (QLM) for binary sentiment classification. The model pipeline: (1) Define a small vocabulary of positive and negative sentences (e.g., "Cats purr" → positive, "Dogs bite" → negative). (2) Parse each sentence with Lambeq's BobcatParser. (3) Convert diagrams to parameterised circuits using IQPAnsatz. (4) Execute circuits on Qiskit Aer simulator with a fixed number of shots. (5) Compute loss (cross-entropy) and gradients (parameter-shift via PennyLane). (6) Update parameters using Adam optimiser. (7) Repeat for 50-100 epochs. (8) Evaluate on a held-out test set. The lab provides helper functions, but you will write the core pipeline logic yourself, guided by the worksheet.`,
      lifeSkills: `Building a complete system from scratch teaches project synthesis — the ability to bring together multiple components into a coherent, working whole. This is the highest-value skill in engineering: not just knowing individual pieces, but knowing how to make them work together.`,
    },
    mathModelling: {
      need: `The complete QLM requires modelling the entire pipeline as a differentiable computation graph: sentence → parse → circuit → measurement → loss → gradient → parameter update.`,
      motivation: `Each step in the pipeline involves different mathematics — category theory (diagrams), quantum mechanics (circuits), probability (measurement), and optimisation (gradients). Understanding how they compose is essential.`,
      challenge: `Ensuring numerical stability and gradient flow through the stochastic measurement process requires careful handling of shot noise and probability estimation.`,
      equations: [
        {
          latex: `\\text{QLM}(x; \\theta) = \\text{argmax}_c \\frac{\\text{Counts}_c(\\text{Qiskit.run}(\\text{Lambeq.circuit}(x, \\theta)))}{\\text{Shots}}`,
          meaning: `The QLM prediction for sentence x with parameters \\theta is the class c with the highest normalised measurement counts.`,
          interpretation: `This is the complete forward pass. The sentence x is parsed by Lambeq, converted to a circuit with parameters \\theta, executed on Qiskit for Shots repetitions, and the class with the most measurements wins.`,
        },
        {
          latex: `\\mathcal{L}(\\theta) = -\\frac{1}{N} \\sum_{i=1}^{N} \\sum_{c=1}^{C} y_{i,c} \\log p_{i,c}(\\theta)`,
          meaning: `Categorical cross-entropy loss averaged over N training examples and C classes.`,
          interpretation: `y_{i,c} is 1 if example i belongs to class c, 0 otherwise. p_{i,c}(\\theta) is the predicted probability from the QLM. Minimising this loss maximises the log-likelihood of the correct class.`,
        },
        {
          latex: `\\text{Accuracy} = \\frac{1}{M} \\sum_{j=1}^{M} \\mathbb{1}(\\hat{y}_j = y_j)`,
          meaning: `Accuracy on test set of size M is the fraction of correct predictions.`,
          interpretation: `After training, we evaluate on unseen sentences. The quantum model must generalise — correctly classify sentences it has never seen before, based on the grammatical patterns learned during training.`,
        },
      ],
      variables: [
        { symbol: `\\text{QLM}`, name: `Quantum Language Model`, description: `The complete model mapping sentences to class predictions` },
        { symbol: `\\text{Shots}`, name: `Number of Shots`, description: `Times the circuit is executed to estimate measurement probabilities` },
        { symbol: `p_{i,c}`, name: `Predicted Probability`, description: `Model's predicted probability that example i belongs to class c` },
        { symbol: `\\mathbb{1}`, name: `Indicator Function`, description: `1 if prediction matches true label, 0 otherwise` },
      ],
      interactive: {
        equation: `\\text{Accuracy} = \\frac{\\text{Correct}}{\\text{Total}} \\times 100\\%`,
        description: `Train your QLM interactively — configure the model, start training, and watch the accuracy climb:`,
        variables: [
          { symbol: `\\eta`, name: `Learning Rate`, description: `Step size for Adam optimiser` },
          { symbol: `E`, name: `Training Epochs`, description: `Number of passes through the training data` },
          { symbol: `S`, name: `Shots`, description: `Circuit evaluations per sentence per epoch` },
        ],
        sliders: [
          { name: `lr`, label: `Learning Rate (\\eta)`, min: 0.001, max: 0.1, step: 0.001, default: 0.01 },
          { name: `epochs`, label: `Epochs`, min: 10, max: 200, step: 10, default: 50 },
          { name: `shots`, label: `Shots`, min: 100, max: 5000, step: 100, default: 1000 },
        ],
      },
      charts: [
        {
          title: `QLM Training Progress: Accuracy and Loss`,
          type: `line`,
          data: [
            { name: `Epoch 1`, Accuracy: 48, Loss: 0.72 },
            { name: `Epoch 10`, Accuracy: 55, Loss: 0.65 },
            { name: `Epoch 20`, Accuracy: 62, Loss: 0.57 },
            { name: `Epoch 30`, Accuracy: 68, Loss: 0.50 },
            { name: `Epoch 40`, Accuracy: 73, Loss: 0.44 },
            { name: `Epoch 50`, Accuracy: 77, Loss: 0.39 },
            { name: `Epoch 60`, Accuracy: 80, Loss: 0.35 },
            { name: `Epoch 70`, Accuracy: 82, Loss: 0.32 },
            { name: `Epoch 80`, Accuracy: 84, Loss: 0.30 },
            { name: `Epoch 100`, Accuracy: 85, Loss: 0.28 },
          ],
        },
        {
          title: `Final Test Set Confusion Matrix`,
          type: `bar`,
          data: [
            { name: `True Positive`, Count: 42 },
            { name: `True Negative`, Count: 38 },
            { name: `False Positive`, Count: 8 },
            { name: `False Negative`, Count: 12 },
          ],
        },
      ],
      advantages: `Building a complete QLM provides end-to-end understanding of the QNLP pipeline, from linguistic parsing through quantum circuit execution to gradient-based optimisation. The model, while simple, demonstrates all principles needed for scaling.`,
      limitations: `This QLM uses a small vocabulary, short sentences, and a simulated backend. Scaling to real-world datasets requires more qubits, longer circuits, noise mitigation, and larger labelled datasets — all active research challenges.`,
    },
    activities: [
      {
        title: `Lab Setup and Data Preparation`,
        description: `Students prepare the development environment and create the training dataset for the QLM.`,
        steps: [
          `Create a new Jupyter notebook for the QLM project`,
          `Import all required modules: lambeq, qiskit, pennylane, numpy, matplotlib`,
          `Define the training data: 10 positive sentences (e.g., "Cats purr", "Birds sing") and 10 negative sentences (e.g., "Dogs bite", "Snakes hiss")`,
          `Define the test data: 5 positive and 5 negative sentences not in the training set`,
          `Verify that all sentences parse correctly with BobcatParser`,
        ],
        materials: `Lab notebook template, sentence lists, parser verification script`,
        timeRequired: `10 min`,
        outcomes: `Students have a clean lab environment and prepared datasets.`,
        rubrics: `Correct imports, well-structured dataset, all sentences parse successfully`,
      },
      {
        title: `Building the QLM Pipeline`,
        description: `Students implement the core QLM pipeline: parse → circuit → execute → classify.`,
        steps: [
          `Write a function parse_to_circuit(sentence, ansatz) that returns a parameterised circuit`,
          `Write a function execute_circuit(circuit, params, shots) that runs on Aer and returns counts`,
          `Write a function circuit_to_probabilities(counts, num_classes) that normalises counts to probabilities`,
          `Write the forward function qlm_forward(sentence, params) that returns predicted class probabilities`,
          `Test the pipeline on one sentence and verify the output is reasonable`,
        ],
        materials: `Pipeline implementation guide, code skeleton`,
        timeRequired: `15 min`,
        outcomes: `Students have a working QLM forward pass.`,
        rubrics: `All pipeline functions correctly implemented, successful end-to-end test`,
      },
      {
        title: `Training the QLM`,
        description: `Students implement the training loop with PennyLane optimisation and train the model.`,
        steps: [
          `Define the cross-entropy loss function`,
          `Set up the PennyLane optimiser (Adam, learning rate = 0.01)`,
          `Initialise parameters randomly`,
          `Implement the training loop: for each epoch, iterate over training data, compute loss and gradients, update parameters`,
          `Track and plot the training loss and accuracy after each epoch`,
        ],
        materials: `Training loop template, optimiser documentation, plotting guide`,
        timeRequired: `15 min`,
        outcomes: `Students train the QLM and observe decreasing loss and increasing accuracy.`,
        rubrics: `Correct training loop, decreasing loss curve, > 75% training accuracy`,
      },
      {
        title: `Evaluation and Analysis`,
        description: `Students evaluate the trained QLM on the test set and analyse its predictions.`,
        steps: [
          `Run the trained model on all test sentences and record predictions`,
          `Compute the test accuracy`,
          `Create a confusion matrix`,
          `Identify which sentences were misclassified and hypothesise why`,
          `Write a brief report: QLM performance, misclassification patterns, suggestions for improvement`,
        ],
        materials: `Evaluation notebook, confusion matrix template, report guidelines`,
        timeRequired: `10 min`,
        outcomes: `Students evaluate their QLM and understand its strengths and weaknesses.`,
        rubrics: `Correct evaluation, meaningful confusion matrix, insightful error analysis`,
      },
    ],
    project: {
      scope: `Build, train, and evaluate a complete Quantum Language Model for binary sentiment classification. The final deliverable is a working QLM with > 75% test accuracy, accompanied by documentation, training curves, and an analysis report.`,
      objectives: [
        `Implement the complete QLM pipeline using Lambeq, Qiskit, and PennyLane`,
        `Train the model on a synthetic binary sentiment dataset`,
        `Achieve > 75% accuracy on a held-out test set`,
        `Visualise training curves (loss, accuracy, parameter evolution)`,
        `Analyse misclassified examples and suggest improvements`,
      ],
      timeline: [
        { phase: `Data preparation and parsing`, duration: `5 min`, percent: 10 },
        { phase: `Pipeline implementation`, duration: `10 min`, percent: 25 },
        { phase: `Training loop implementation`, duration: `10 min`, percent: 25 },
        { phase: `Model training and hyperparameter tuning`, duration: `10 min`, percent: 25 },
        { phase: `Evaluation and report`, duration: `5 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Pipeline Architect`, responsibility: `Implement and test the complete pipeline` },
        { role: `Training Engineer`, responsibility: `Implement the training loop and tune hyperparameters` },
        { role: `Analysis Lead`, responsibility: `Evaluate the model, create confusion matrix, write report` },
      ],
      deliverables: [
        `Complete QLM Python script/notebook`,
        `Training curves (loss and accuracy vs epochs)`,
        `Test set confusion matrix and accuracy score`,
        `Analysis report with misclassification examples and suggested improvements`,
      ],
    },
    questions: [
      {
        question: `What does it mean for a QLM to "learn" the sentiment of a sentence?`,
        answer: `The QLM learns circuit parameters that encode word meanings such that sentences with positive sentiment produce different measurement outcome distributions than negative sentences.`,
        explanation: `During training, parameters are adjusted so that the quantum circuit's output (measurement counts) correlates with the training labels. The circuit "learns" to distinguish sentence meanings without explicitly being told what words mean.`,
        commonMistake: `Thinking the QLM understands sentiment like humans — it learns statistical correlations between circuit outputs and labels.`,
        tip: `The QLM's "understanding" is entirely encoded in the rotation angles — it is a purely numerical, statistical form of learning.`,
      },
      {
        question: `Why might the QLM misclassify test sentences that have different grammatical structures from training sentences?`,
        answer: `The QLM learns parameters specific to the grammatical structures seen during training. A new grammatical pattern (e.g., adjective-noun instead of subject-verb) produces a different circuit topology that the parameters may not handle correctly.`,
        explanation: `The circuit structure depends on the sentence's grammatical diagram. Different structures mean different gate arrangements, and the learned parameters may not generalise well across different circuit topologies.`,
        tip: `Training on diverse sentence structures is essential for building a generalisable QLM. Include multiple grammatical patterns in the training set.`,
      },
      {
        question: `How could you improve the QLM's accuracy beyond 85%?`,
        answer: `Use more training data, more diverse sentence structures, a more expressive ansatz (e.g., Sim14Ansatz), longer training with learning rate scheduling, and ensemble methods combining multiple parameter initialisations.`,
        explanation: `The current limitations are: small dataset, simple ansatz, and potential barren plateaus limiting optimisation. Scaling these dimensions should improve accuracy, though diminishing returns are expected without addressing fundamental PQC limitations.`,
      },
    ],
    virtualLab: {
      description: `Complete QLM builder and trainer. Configure your model architecture, dataset, and hyperparameters through the interface, then run the full training pipeline with real-time visualisation of every component: circuit diagram, measurement distribution, loss curve, and parameter evolution.`,
      steps: [
        `Configure the model: select ansatz type, number of parameters per word, and observable`,
        `Create or load a dataset: add positive and negative sentences with labels`,
        `Review the automatically generated circuits for each unique sentence type`,
        `Click "Train" to run the full training pipeline with real-time monitoring`,
        `Evaluate the trained model on test sentences and visualise the confusion matrix`,
      ],
      stepDetails: [
        `Model configuration panel: dropdowns for ansatz (IQP, Sim14, MPS), observable (Z, custom), and parameter initialisation strategy. Summary: qubit count, parameter count, circuit depth`,
        `Dataset editor: add/remove sentences with labels. Each sentence is parsed on the fly, showing its diagram. Dataset statistics panel: size, class balance, unique grammatical structures`,
        `Circuit gallery: shows all unique circuits corresponding to different sentence structures in the dataset. Each circuit is visualised with current parameter values. Click to inspect any circuit in detail`,
        `Training dashboard: real-time loss curve, accuracy meter, parameter evolution line plot, gradient norm indicator. Live circuit preview showing how the circuit changes as parameters update`,
        `Evaluation panel: test set accuracy score, confusion matrix (absolute counts and percentages), per-class precision/recall/F1. Misclassification table showing each error with the sentence, true label, predicted label, and confidence score`,
      ],
      completionMessage: `Congratulations! You have built, trained, and evaluated your first Quantum Language Model. You are now a quantum NLP practitioner!`,
      dataFlow: `flowchart LR
        A[Training Sentences] --> B[Lambeq Parser]
        B --> C[Pregroup Diagrams]
        C --> D[CircuitFactory + Ansatz]
        D --> E[Parameterised Circuits]
        E --> F[Qiskit Aer Simulator]
        F --> G[Measurement Counts]
        G --> H[Loss Computation]
        H --> I[PennyLane Optimiser]
        I --> J[Parameter-Shift Gradients]
        J --> K[Parameter Update]
        K --> E
        G --> L{Prediction}
        L --> M[Training Accuracy]
        E --> N[New Sentences]
        N --> O[Trained Circuit]
        O --> P[Test Predictions]
        P --> Q[Test Accuracy & Report]`,
    },
    insights: {
      advantages: [
        `Complete hands-on experience building a working QLM from scratch`,
        `Demonstrates the entire QNLP pipeline in a single integrated project`,
        `Achieves non-trivial accuracy (> 75%) on a binary classification task`,
        `Provides a foundation for scaling to more complex QNLP applications`,
      ],
      disadvantages: [
        `Current model limited to short, simple sentences with small vocabulary`,
        `Accuracy on synthetic data may not transfer to real-world language`,
        `Simulated execution does not capture real hardware noise and limitations`,
        `Training is computationally expensive (2P circuit evaluations per gradient step)`,
      ],
      futureScope: `The QLM built in this lab can be extended with: larger vocabularies (more words → more parameters), longer sentences (more complex diagrams → more qubits), real datasets (IMDb reviews, Twitter sentiment), noise mitigation for real hardware execution, and more expressive ansatzes for better accuracy.`,
      industrialApplications: [
        `Proof-of-concept QNLP demonstrations for stakeholders and investors`,
        `Educational platform for teaching quantum machine learning`,
        `Baseline model for comparing different QNLP architectures`,
        `Prototyping QNLP solutions for specific business use cases`,
      ],
      careerRelevance: `Building a complete QLM is the most impressive portfolio project for QNLP job applications. It demonstrates proficiency in quantum computing frameworks, machine learning, and linguistic formalisms — a rare combination of skills highly valued in the emerging quantum NLP industry.`,
    },
  },
}
