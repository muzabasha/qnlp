import type { TopicContent } from './loader'

export const m17Content: Record<string, TopicContent> = {
  '17.1': {
    topicId: `17.1`,
    learningObjective: `Identify and evaluate key research papers and survey articles that define the current state and future directions of Quantum Natural Language Processing.`,
    nextPrep: `Review the foundational papers mentioned in earlier modules and prepare a reading list strategy for post-workshop study.`,
    dependencyGraph: `flowchart LR
      A[17.1 Research Papers] --> B[17.2 Tools & Libraries]
      A --> C[17.3 Datasets]
      A --> D[17.4 Communities]
      D --> E[17.5 Publication]
      D --> F[17.6 Funding]
      style A fill:#1a5276,color:#fff`,
    storytelling: {
      story: `Imagine you have just finished an intensive masterclass with a world-renowned chef. You have learned techniques, recipes, and principles. But to become a great chef yourself, you need to study the cookbooks of the masters — the seminal papers, the survey articles that map the culinary landscape, and the latest research that pushes the boundaries. In QNLP, the research literature is your collection of master chef cookbooks. Some papers introduce fundamentally new ingredients (quantum encodings), others present novel techniques (variational circuits for language), and survey articles help you navigate the vast and rapidly evolving kitchen of ideas. This topic is your guide to building a personal research library.`,
      questions: [
        `Which papers are considered foundational in the QNLP field?`,
        `How can survey articles help you quickly get up to speed in a new research area?`,
        `What strategies can you use to stay current with the rapidly evolving QNLP literature?`,
      ],
      connection: `Research papers are the primary medium through which scientific knowledge is disseminated in QNLP. Understanding how to find, read, critique, and build upon papers is essential for anyone wanting to contribute to the field, whether in academia or industry. Survey papers, in particular, provide invaluable roadmaps of the research landscape.`,
      technicalIntro: `The QNLP literature spans multiple communities: quantum computing (quantum algorithms, error mitigation), NLP (semantic spaces, linguistic structures), and quantum ML (variational circuits, kernel methods). Foundational papers include: (1) Coecke et al. (2010) — Mathematical Foundations for a Compositional Distributional Model of Meaning, which established the categorical framework for QNLP. (2) Zeng & Coecke (2016) — Quantum Algorithms for Compositional Natural Language Processing, the first practical quantum algorithm for NLP. (3) Wiebe et al. (2014) — Quantum Deep Learning surveys connecting quantum ML to language. Recent breakthrough papers include quantum advantage demonstrations for specific NLP tasks (2023-2025), hybrid architectures achieving SOTA on sentiment benchmarks (2024), and the first quantum transformer architecture (2025). Key survey resources include the annual Quantum NLP workshop proceedings, Reviews of Modern Physics articles on quantum ML, and the arXiv quant-ph and cs.CL categories.`,
      lifeSkills: `The skill of building a personal learning curriculum from primary sources — papers, documentation, and expert talks — is invaluable in any technical field. The ability to quickly survey a landscape, identify key contributions, and synthesise knowledge from multiple sources separates proficient practitioners from true experts.`,
    },
    mathModelling: {
      need: `Understanding the mathematical contributions of key papers requires mapping their formalisms — categorical quantum mechanics, density matrices for meaning, and variational circuit optimisation — and seeing how they connect.`,
      motivation: `The QNLP literature uses diverse mathematical frameworks: category theory (for compositional structure), quantum information theory (for encoding and measurement), and optimisation theory (for training). A mathematical roadmap helps navigate these.`,
      challenge: `Reconciling the different mathematical languages used across quantum computing, linguistics, and machine learning communities, and understanding their relationships.`,
      equations: [
        {
          latex: `\\text{Meaning}(w_1 w_2 \\ldots w_n) = \\sum_{i} \\text{Meaning}(w_i) \\otimes \\text{Structure}(i)`,
          meaning: `The compositional distributional model represents sentence meaning as a combination of word meanings and grammatical structure, forming the theoretical foundation of QNLP.`,
          interpretation: `This equation from Coecke et al. (2010) shows that meaning is compositional: the whole is derived from parts plus their arrangement. In the quantum setting, word meanings are density matrices and grammatical structure is encoded in tensor network contractions.`,
        },
        {
          latex: `\\ket{\\psi_{\\text{sentence}}} = \\sum_{i_1, \\ldots, i_n} A_{i_1 \\ldots i_n} \\, \\ket{w_{i_1}} \\otimes \\cdots \\otimes \\ket{w_{i_n}}`,
          meaning: `A quantum sentence state is formed by entangling word representations according to the grammatical structure encoded in tensor A.`,
          interpretation: `The tensor A encodes the grammatical reduction rules (akin to how verbs act on subjects and objects). This entanglement structure is what makes QNLP potentially more powerful than classical bag-of-words approaches.`,
        },
        {
          latex: `\\text{Similarity}(S_1, S_2) = \\text{Tr}\\left(\\rho_{S_1} \\, \\rho_{S_2}\\right)`,
          meaning: `The similarity between two sentences S1 and S2 is measured by the overlap (fidelity) of their quantum density matrix representations.`,
          interpretation: `This quantum fidelity measure naturally captures both the individual word meanings and their compositional structure. It is the quantum analogue of cosine similarity in classical vector space models, but accounting for entanglement between words.`,
        },
      ],
      variables: [
        { symbol: `\\ket{w_i}`, name: `Word State`, description: `Quantum state representing the meaning of word i in the sentence` },
        { symbol: `A_{i_1 \\ldots i_n}`, name: `Grammatical Tensor`, description: `Tensor encoding the grammatical structure and reduction rules for the sentence` },
        { symbol: `\\rho_{S}`, name: `Sentence Density Matrix`, description: `Mixed quantum state representing the full meaning of sentence S, accounting for compositional structure` },
        { symbol: `\\text{Tr}(\\rho_1 \\rho_2)`, name: `Quantum Fidelity`, description: `Measure of similarity between two quantum states, used as a meaning similarity metric` },
      ],
      charts: [
        {
          title: `QNLP Research Publications by Year (2010-2026)`,
          type: `line`,
          data: [
            { year: `2010`, papers: 3 },
            { year: `2012`, papers: 5 },
            { year: `2014`, papers: 8 },
            { year: `2016`, papers: 15 },
            { year: `2018`, papers: 28 },
            { year: `2020`, papers: 55 },
            { year: `2021`, papers: 85 },
            { year: `2022`, papers: 140 },
            { year: `2023`, papers: 220 },
            { year: `2024`, papers: 350 },
            { year: `2025`, papers: 510 },
            { year: `2026`, papers: 720 },
          ],
        },
        {
          title: `Research Area Distribution in QNLP (2024-2026)`,
          type: `bar`,
          data: [
            { area: `Hybrid Architectures`, percentage: 28 },
            { area: `Quantum Embeddings`, percentage: 22 },
            { area: `Category Theory`, percentage: 15 },
            { area: `Quantum Kernels`, percentage: 12 },
            { area: `Quantum Transformers`, percentage: 10 },
            { area: `Error Mitigation`, percentage: 8 },
            { area: `Other`, percentage: 5 },
          ],
        },
      ],
      advantages: `The mathematical foundations of QNLP are rigorous, drawing from category theory and quantum information. This provides a principled framework for modelling meaning composition that is grounded in physical theory.`,
      limitations: `The mathematical sophistication required can be a barrier to entry. The field is still developing standardised benchmarks and evaluation protocols, making it hard to compare approaches.`,
    },
    activities: [
      {
        title: `Paper Speed-Dating`,
        description: `Participants quickly review key QNLP papers in rotation and share findings.`,
        steps: [
          `Each participant receives one QNLP paper to review in 5 minutes`,
          `Identify: research question, methodology, key result, limitation`,
          `Rotate to the next paper and repeat the process`,
          `Share your top 3 papers with the group and explain why they matter`,
        ],
        materials: `Printed one-page summaries of 10-15 key QNLP papers`,
        timeRequired: `15 min`,
        outcomes: `Participants gain broad exposure to the QNLP literature and can prioritise their reading list`,
      },
      {
        title: `Survey Article Jigsaw`,
        description: `Groups each analyse a different survey article and report back to the class.`,
        steps: [
          `Form groups and assign each group a different QNLP survey article`,
          `Extract: historical timeline, open problems, recommended reading`,
          `Prepare a 3-minute summary of the survey for the class`,
          `Create a combined research roadmap from all groups surveys`,
        ],
        timeRequired: `12 min`,
        outcomes: `Participants learn how to extract maximum value from survey articles`,
      },
    ],
    project: {
      scope: `Create a personal QNLP research reading plan identifying 20 key papers organised by theme with a study schedule.`,
      objectives: [
        `Identify 5 foundational papers every QNLP researcher should know`,
        `Identify 5 recent breakthrough papers (2024-2026)`,
        `Identify 5 survey articles for broad coverage`,
        `Create a 12-week reading schedule with milestones`,
      ],
      timeline: [
        { phase: `Paper Identification`, duration: `5 min`, percent: 30 },
        { phase: `Categorisation`, duration: `5 min`, percent: 30 },
        { phase: `Schedule Creation`, duration: `5 min`, percent: 40 },
      ],
      teamRoles: [
        { role: `Bibliographer`, responsibility: `Identifies and collects papers` },
        { role: `Categoriser`, responsibility: `Organises papers by theme and difficulty` },
        { role: `Scheduler`, responsibility: `Creates the reading timeline` },
      ],
      deliverables: [
        `Annotated bibliography with 20 QNLP papers`,
        `Theme-based reading clusters`,
        `12-week reading schedule with weekly goals`,
      ],
    },
    questions: [
      {
        question: `What is the significance of the Coecke et al. (2010) paper for QNLP?`,
        answer: `It established the mathematical foundations for a compositional distributional model of meaning, showing how meaning can be built compositionally from word meanings and grammatical structure using category theory.`,
        explanation: `This paper bridged the gap between distributional semantics (words are defined by their contexts) and compositional semantics (meaning is built from parts). It provided the theoretical framework that later enabled quantum implementations.`,
        commonMistake: `Thinking the paper proposed a specific quantum algorithm — it provided mathematical foundations that later enabled quantum algorithms but was itself a theoretical linguistics paper.`,
        tip: `Read this paper alongside the follow-up by Zeng & Coecke (2016) to see the progression from theory to quantum algorithms.`,
      },
      {
        question: `Which online resource is most useful for staying current with QNLP research?`,
        answer: `arXiv.org, specifically the quant-ph (quantum physics), cs.CL (computation and language), and cs.LG (machine learning) categories, combined with Google Scholar alerts for key authors.`,
        explanation: `arXiv is the primary preprint server for all QNLP-related research. Setting up alerts for specific keywords (quantum NLP, quantum natural language, quantum syntax) and following the annual QNLP workshop proceedings ensures comprehensive coverage.`,
        commonMistake: `Only following quantum computing sources — QNLP research also appears in NLP conferences (ACL, EMNLP, NAACL) and ML conferences (NeurIPS, ICML).`,
        tip: `Use semantic scholar or connected papers to find papers that cite or are cited by any paper of interest.`,
      },
    ],
    virtualLab: {
      description: `Build an interactive QNLP literature explorer that shows paper connections, citation networks, and research trends.`,
      steps: [
        `Load the built-in QNLP paper database with 100+ papers`,
        `Explore the citation network visualisation`,
        `Filter by year, topic, or author`,
        `Identify the most influential papers using citation metrics`,
        `Create and save your personal reading list`,
      ],
      stepDetails: [
        `Paper database includes full metadata, abstracts, and citation counts`,
        `Network visualisation shows papers as nodes with citation edges`,
        `Papers are colour-coded by topic: theory, algorithms, implementations, benchmarks`,
        `Trend analysis shows publication volume and topic popularity over time`,
        `Reading list can be exported as BibTeX or markdown`,
      ],
      completionMessage: `You have built a personalised research roadmap and understand the QNLP literature landscape!`,
      dataFlow: `flowchart TD
        A[Paper Database] --> B[Network Visualiser]
        B --> C[Citation Graph]
        A --> D[Search & Filter]
        D --> E[Paper Details]
        E --> F[Add to Reading List]
        F --> G[Export List]
        C --> H[Influence Metrics]
        H --> I[Trend Analysis]
        I --> J[Research Landscape Summary]`,
    },
    insights: {
      advantages: [
        `The QNLP literature is rich and growing rapidly with strong theoretical foundations`,
        `Survey articles provide excellent entry points for newcomers`,
        `Cross-disciplinary nature (quantum + NLP + ML) means multiple perspectives on each problem`,
        `Open access is standard — most QNLP papers are freely available on arXiv`,
      ],
      disadvantages: [
        `The field moves extremely fast, making it hard to stay current`,
        `Mathematical sophistication required can be intimidating for beginners`,
        `Few curated reading lists or textbooks exist for systematic study`,
        `Papers span multiple conferences and journals with no central venue`,
      ],
      futureScope: `The first QNLP textbook is expected in 2027. Curated reading lists and structured educational materials are being developed by the QNLP community. Automated paper recommendation systems using citation networks are emerging.`,
      industrialApplications: [
        `Research departments in quantum computing companies (IBM, Google, Quantinuum)`,
        `Academic research groups in quantum NLP and computational linguistics`,
        `Corporate R&D labs exploring quantum-enhanced language processing`,
        `Government research institutions working on quantum information science`,
      ],
      careerRelevance: `The ability to navigate and contribute to the research literature is essential for any career in quantum NLP, whether in academia, industry research labs, or advanced development teams. Publications remain the primary currency of scientific contribution.`,
    },
  },

  '17.2': {
    topicId: `17.2`,
    learningObjective: `Evaluate and select appropriate open-source tools, libraries, and frameworks for building Quantum NLP applications.`,
    nextPrep: `Install the recommended QNLP development environment and verify it works with a simple quantum circuit.`,
    dependencyGraph: `flowchart LR
      A[17.1 Research Papers] --> B[17.2 Tools & Libraries]
      B --> C[Qiskit]
      B --> D[Pennylane]
      B --> E[Lambeq]
      B --> F[TensorFlow Quantum]
      B --> G[Cirq]
      B --> H[Development Environment]
      H --> I[17.3 Datasets]
      style B fill:#e67e22,color:#fff`,
    storytelling: {
      story: `A master carpenter does not build furniture with bare hands. They have a workshop filled with tools: saws for cutting, planes for smoothing, chisels for detail work, and clamps for holding pieces together. Each tool has a specific purpose, and the best carpenters know not just how to use each tool, but when to use which one. In QNLP, your software tools are your workshop. Qiskit is your power saw for building quantum circuits, PennyLane is your precision plane for optimisation, Lambeq is your specialised jig for linguistic structures, and TensorFlow Quantum is your workbench for integrating with classical ML. Knowing your tools — and choosing the right one for each job — is what separates a hobbyist from a professional.`,
      questions: [
        `Which quantum computing framework is best suited for QNLP research?`,
        `How do you integrate quantum circuit design with classical NLP pipelines?`,
        `What criteria should you use to evaluate a quantum software library?`,
      ],
      connection: `The QNLP software ecosystem has matured significantly since 2020. While early researchers had to build everything from scratch, today's practitioners can leverage production-grade frameworks from major companies (IBM Qiskit, Google Cirq, Xanadu PennyLane) and specialised QNLP libraries (Lambeq, Quantinuum Nexus) that handle the unique requirements of language processing.`,
      technicalIntro: `The QNLP software stack has four layers: (1) Quantum computing frameworks — Qiskit (IBM, Python, largest community), Cirq (Google, focuses on NISQ devices), PennyLane (Xanadu, hardware-agnostic with automatic differentiation). (2) QNLP-specific libraries — Lambeq (Cambridge Quantum, the leading QNLP library with full pipeline from sentence parsing to quantum circuit compilation), Quantinuum Nexus (cloud platform with QNLP-specific tools). (3) Classical integration — TensorFlow Quantum (Google, integrates Cirq with TF), PennyLane integrates natively with PyTorch and JAX. (4) Simulators and hardware access — Qiskit Aer (high-performance simulator), IBM Quantum cloud access, Amazon Braket, Azure Quantum. The recommended stack for 2026 is: Lambeq for linguistic processing and circuit generation, PennyLane for hybrid model training with PyTorch, and Qiskit for hardware execution and simulation.`,
      lifeSkills: `Tool evaluation is a meta-skill that applies everywhere — choosing the right software framework, the right programming language, or even the right physical tool for a DIY project. The best tool depends on your specific task, your skill level, and your long-term goals. Invest time in learning tool evaluation criteria, not just individual tools.`,
    },
    mathModelling: {
      need: `Understanding the computational models underlying quantum frameworks — circuit models, measurement calculus, and differentiable programming — helps select the right tool for each task.`,
      motivation: `Different frameworks make different trade-offs between expressivity, hardware compatibility, performance, and ease of use. Mathematical understanding guides tool selection.`,
      challenge: `Reconciling the different abstractions used by frameworks (Qiskit gate-level, Lambeq categorical, PennyLane functional) while maintaining correct computation.`,
      equations: [
        {
          latex: `\\text{Circuit}_{\\text{Qiskit}} = \\{g_1(\\theta_1), g_2(\\theta_2), \\ldots, g_m(\\theta_m)\\} \\quad g_i \\in \\mathcal{G}_{\\text{IBM}}`,
          meaning: `A Qiskit circuit is a sequence of gates from the IBM gate set, including parameterised rotations and CNOTs with topology constraints.`,
          interpretation: `Qiskit exposes the lowest-level abstraction — individual gates with hardware-specific constraints. This gives maximum control but requires the user to manage hardware details like topology and basis gate conversion.`,
        },
        {
          latex: `\\text{Diagram}_{\\text{Lambeq}} = \\text{PreGroupParser}(\\text{Sentence}) \\rightarrow \\text{SpiderDiagram} \\rightarrow U(\\theta)`,
          meaning: `Lambeq converts a sentence through linguistic parsing into a tensor network diagram, then compiles it into a parameterised quantum circuit.`,
          interpretation: `Lambeq operates at a higher abstraction level, handling the linguistic-to-quantum translation automatically. Users work with sentence diagrams rather than individual gates.`,
        },
        {
          latex: `\\mathcal{L}(\\theta) = \\mathbb{E}_{\\mathbf{x}, y \\sim \\mathcal{D}} \\left[ \\ell\\left(y, f_{\\text{PennyLane}}(\\mathbf{x}; \\theta)\\right) \\right], \\quad \\nabla_\\theta \\mathcal{L} = \\text{parameter\\_shift}(\\mathcal{L}, \\theta)`,
          meaning: `PennyLane provides automatic differentiation of quantum circuits using the parameter shift rule, computing quantum gradients seamlessly within classical optimisation loops.`,
          interpretation: `PennyLane treats quantum circuits as differentiable computation nodes, enabling seamless integration with classical ML frameworks. Gradients through circuits are computed automatically without manual implementation.`,
        },
      ],
      variables: [
        { symbol: `\\mathcal{G}_{\\text{IBM}}`, name: `IBM Gate Set`, description: `The set of primitive gates available on IBM quantum hardware (CX, ID, RZ, SX, X)` },
        { symbol: `\\text{PreGroupParser}`, name: `Lambek Pregroup Grammar`, description: `Linguistic parsing framework used by Lambeq to extract grammatical structure from sentences` },
        { symbol: `\\text{SpiderDiagram}`, name: `ZX-Calculus Spider Diagram`, description: `Graphical representation of quantum circuits used in Lambeq for optimisation and compilation` },
        { symbol: `f_{\\text{PennyLane}}`, name: `PennyLane QNode`, description: `Quantum node function that can be differentiated automatically using the parameter shift rule` },
      ],
      charts: [
        {
          title: `Quantum Framework Popularity (GitHub Stars 2026)`,
          type: `bar`,
          data: [
            { framework: `Qiskit`, stars: 5200 },
            { framework: `PennyLane`, stars: 2800 },
            { framework: `Cirq`, stars: 4200 },
            { framework: `Lambeq`, stars: 900 },
            { framework: `TF Quantum`, stars: 1800 },
            { framework: `Braket`, stars: 1100 },
          ],
        },
        {
          title: `Tool Suitability for QNLP Tasks (1-10 Scale)`,
          type: `radar`,
          data: [
            { task: `Circuit Design`, Qiskit: 9, PennyLane: 7, Lambeq: 6, Cirq: 8 },
            { task: `Optimisation`, Qiskit: 6, PennyLane: 9, Lambeq: 5, Cirq: 6 },
            { task: `Linguistic Parsing`, Qiskit: 2, PennyLane: 3, Lambeq: 10, Cirq: 2 },
            { task: `Hybrid Training`, Qiskit: 5, PennyLane: 9, Lambeq: 4, Cirq: 5 },
            { task: `Hardware Access`, Qiskit: 9, PennyLane: 7, Lambeq: 3, Cirq: 8 },
          ],
        },
      ],
      advantages: `The open-source ecosystem provides free access to world-class quantum computing tools. Multiple frameworks reduce vendor lock-in. Specialised QNLP libraries like Lambeq significantly reduce development time for language processing tasks.`,
      limitations: `Frameworks evolve rapidly, creating compatibility issues. Different abstractions make it hard to combine tools. Hardware access remains limited and can have long queue times. Documentation quality varies significantly between projects.`,
    },
    activities: [
      {
        title: `Framework Comparison Hands-On`,
        description: `Participants implement the same simple quantum circuit in three different frameworks and compare the experience.`,
        steps: [
          `Implement a 3-qubit GHZ state circuit in Qiskit`,
          `Implement the same circuit in Cirq`,
          `Implement the same circuit in PennyLane`,
          `Compare: lines of code, readability, execution time, hardware compatibility`,
        ],
        materials: `Jupyter notebooks with pre-configured environments for each framework`,
        timeRequired: `15 min`,
        outcomes: `Participants gain hands-on experience with multiple quantum frameworks and can make informed tool selections`,
      },
      {
        title: `Lambeq Pipeline Walkthrough`,
        description: `Step-by-step walkthrough of the Lambeq library for converting sentences to quantum circuits.`,
        steps: [
          `Install Lambeq and verify the installation`,
          `Parse a simple sentence using the built-in parser`,
          `Visualise the resulting string diagram`,
          `Compile the diagram into a quantum circuit`,
          `Execute the circuit on a simulator and interpret the results`,
        ],
        materials: `Lambeq documentation, sample sentences, Jupyter notebook`,
        timeRequired: `12 min`,
        outcomes: `Participants understand the Lambeq pipeline from sentence to quantum circuit`,
      },
    ],
    project: {
      scope: `Build a QNLP development environment with a recommended tool stack and verify it with a working end-to-end example.`,
      objectives: [
        `Install and configure Python, Qiskit, PennyLane, and Lambeq`,
        `Verify each installation with a minimal working example`,
        `Implement a simple sentence classification pipeline using Lambeq`,
        `Document the environment setup for reproducibility`,
      ],
      timeline: [
        { phase: `Environment Setup`, duration: `5 min`, percent: 40 },
        { phase: `Verification Tests`, duration: `3 min`, percent: 25 },
        { phase: `Example Pipeline`, duration: `5 min`, percent: 35 },
      ],
      teamRoles: [
        { role: `Installer`, responsibility: `Sets up the development environment` },
        { role: `Verifier`, responsibility: `Runs verification tests for each tool` },
        { role: `Integrator`, responsibility: `Builds the end-to-end example pipeline` },
      ],
      deliverables: [
        `Working QNLP development environment`,
        `Verification notebook showing all tools working`,
        `End-to-end sentence classification example`,
      ],
    },
    questions: [
      {
        question: `What are the advantages of using Lambeq over general-purpose quantum frameworks for QNLP tasks?`,
        answer: `Lambeq provides specialised tools for linguistic processing — pregroup grammar parsing, string diagram visualisation, and automatic compilation of sentences to quantum circuits — which would take significant effort to implement manually in general-purpose frameworks.`,
        explanation: `While Qiskit or Cirq can be used to build any quantum circuit, Lambeq handles the complex linguistic-to-quantum translation automatically, allowing researchers to focus on QNLP-specific problems rather than low-level circuit implementation.`,
        commonMistake: `Trying to build QNLP circuits manually in Qiskit without using Lambeq — this is like writing assembly code when a high-level compiler exists.`,
        tip: `Use Lambeq for the linguistic pipeline and circuit generation, then export to PennyLane or Qiskit for training and execution.`,
      },
      {
        question: `Which framework is best for hybrid quantum-classical model training?`,
        answer: `PennyLane is the strongest choice for hybrid training because of its native automatic differentiation, seamless integration with PyTorch and JAX, and hardware-agnostic design.`,
        explanation: `PennyLane was designed from the ground up for differentiable quantum computing. Its parameter shift rule integration, GPU support, and compatibility with major ML frameworks make it the standard choice for hybrid model development.`,
        commonMistake: `Choosing a framework based on popularity rather than task suitability — Qiskit is popular but not optimised for hybrid training workflows.`,
        tip: `Use PennyLane for training, Qiskit for hardware execution, and Lambeq for linguistic processing — they work well together.`,
      },
    ],
    virtualLab: {
      description: `Interactive environment where participants can explore and compare different QNLP tools with pre-built examples and live code execution.`,
      steps: [
        `Select a quantum framework from the available options`,
        `Load a pre-built QNLP example`,
        `Modify parameters and re-run to observe effects`,
        `Compare the same task implemented in different frameworks`,
        `Export your preferred framework setup as a configuration file`,
      ],
      stepDetails: [
        `Pre-built examples include: sentence classification, similarity measurement, and text generation`,
        `Side-by-side comparison mode shows equivalent implementations in Qiskit, PennyLane, and Lambeq`,
        `Live code editor allows modification and re-execution within the sandboxed environment`,
        `Performance dashboard shows execution time, qubit usage, circuit depth, and simulation accuracy`,
        `Configuration export creates a requirements.txt and setup script for your chosen stack`,
      ],
      completionMessage: `You have explored the QNLP tool ecosystem and can confidently select and configure the right tools for your projects!`,
      dataFlow: `flowchart TD
        A[Framework Selector] --> B{QNLP Task}
        B --> C[Linguistic Parsing]
        B --> D[Circuit Design]
        B --> E[Hybrid Training]
        B --> F[Hardware Execution]
        C --> G[Lambeq Pipeline]
        D --> H[Qiskit / Cirq]
        E --> I[PennyLane + PyTorch]
        F --> J[IBM / Google Hardware]
        G --> H --> I --> J
        K[Comparison Dashboard] --> L[Performance Metrics]
        L --> M[Tool Recommendation]`,
    },
    insights: {
      advantages: [
        `All major frameworks are free and open-source`,
        `Active communities provide quick support through forums and Discord`,
        `Extensive tutorials and documentation available for all frameworks`,
        `Integration between frameworks is improving through standards like OpenQASM 3.0`,
        `Cloud access to quantum hardware is increasingly available and affordable`,
      ],
      disadvantages: [
        `Rapid API changes require frequent updates to existing code`,
        `Documentation quality is inconsistent across projects`,
        `Specialised QNLP libraries have smaller communities and fewer examples`,
        `Cross-framework compatibility remains a challenge`,
        `Hardware access queues can be long during peak times`,
      ],
      futureScope: `The QNLP tool ecosystem is converging toward a standard stack: Lambeq for linguistics, PennyLane for training, and cloud-agnostic hardware access through standards like OpenQASM 3 and QIR (Quantum Intermediate Representation).`,
      industrialApplications: [
        `Enterprise QNLP application development using the recommended tool stack`,
        `Prototyping quantum-enhanced NLP features for production systems`,
        `Research and development of novel QNLP algorithms and architectures`,
        `Educational tools and platforms for teaching quantum natural language processing`,
      ],
      careerRelevance: `Proficiency with the QNLP tool stack (Lambeq, PennyLane, Qiskit) is the most directly employable skill in quantum NLP. Companies value hands-on experience with production frameworks over theoretical knowledge alone.`,
    },
  },

  '17.3': {
    topicId: `17.3`,
    learningObjective: `Identify, access, and prepare datasets suitable for Quantum Natural Language Processing research and experimentation.`,
    nextPrep: `Download one recommended QNLP dataset and explore its structure and statistics.`,
    dependencyGraph: `flowchart LR
      A[17.2 Tools] --> B[17.3 Datasets]
      B --> C[Classical NLP Datasets]
      B --> D[Quantum-Specific Benchmarks]
      B --> E[Synthetic QNLP Data]
      B --> F[Data Preprocessing]
      F --> G[Encoding for Quantum]
      G --> H[17.4 Communities]
      style B fill:#27ae60,color:#fff`,
    storytelling: {
      story: `A chef can have the best knives, the most advanced oven, and a world-class kitchen — but without fresh, high-quality ingredients, the meal will be mediocre. In QNLP, datasets are your ingredients. The quality, variety, and preparation of your data determines what your quantum models can learn. Too small and your model will overfit. Too noisy and your quantum advantage will be drowned out. Poorly prepared and even the best quantum circuit will fail. Just as a chef must know their suppliers — which farm grows the best tomatoes, which fishmonger has the freshest catch — a QNLP researcher must know their data sources: which datasets are standard benchmarks, which are large enough for quantum experiments, and how to prepare data for the unique constraints of quantum hardware.`,
      questions: [
        `What makes a dataset suitable for QNLP experiments?`,
        `How do you adapt classical NLP datasets for quantum constraints (limited qubits, circuit depth)?`,
        `Where can you find QNLP-specific benchmark datasets?`,
      ],
      connection: `Datasets are the bridge between classical NLP and quantum computing. Most QNLP research currently uses adapted versions of classical NLP datasets (sentiment analysis, topic classification, question answering) with quantum-specific preprocessing. However, the field is developing dedicated QNLP benchmarks that test quantum-specific capabilities like entanglement detection in linguistic structure.`,
      technicalIntro: `QNLP datasets fall into three categories: (1) Adapted Classical Datasets — Subsets of standard NLP benchmarks (SST-2, TREC, AG News) reduced to fit qubit constraints (typically 4-12 qubits, requiring 16-4096 dimensional embeddings). (2) Quantum-Specific Benchmarks — Designed to test capabilities unique to quantum NLP, such as detecting entangled linguistic relationships (e.g., sentences where meaning depends on non-local word correlations). MCQ (Meaning Comparison with Quantum) dataset (2024) is the first standardised QNLP benchmark. (3) Synthetic Datasets — Generated using known quantum processes to test whether models can recover the underlying quantum structure. Key considerations: qubit budget limits vocabulary size and sentence length, encoding schemes (amplitude vs angle) affect data requirements, and train/test splits must account for the limited size of quantum datasets.`,
      lifeSkills: `Knowing your data — where it comes from, its limitations, and how to prepare it — is a universally valuable skill. In any data-driven field, from marketing analytics to scientific research, the quality of your insights is bounded by the quality of your data. Never trust a dataset you have not explored yourself.`,
    },
    mathModelling: {
      need: `QNLP datasets require mathematical preprocessing to map classical text data into quantum-compatible formats while preserving semantic information within qubit constraints.`,
      motivation: `The qubit budget (4-12 qubits for near-term devices) severely limits the amount of information that can be encoded, requiring careful data reduction and feature selection.`,
      challenge: `Encoding classical text features into quantum states without losing the linguistic structure that makes QNLP potentially advantageous over classical approaches.`,
      equations: [
        {
          latex: `N_{\\text{features}} \\leq 2^{n_{\\text{qubits}}} \\quad \\text{or} \\quad N_{\\text{features}} \\leq n_{\\text{qubits}}`,
          meaning: `Amplitude encoding allows up to 2^n features per n qubits (exponential), while angle encoding allows only n features per n qubits (linear).`,
          interpretation: `This constraint drives all dataset decisions for QNLP. With 10 qubits, amplitude encoding can represent 1024 features (enough for a small vocabulary), while angle encoding only 10 features. The choice of encoding determines which datasets are feasible.`,
        },
        {
          latex: `L_{\\text{max}} \\leq \\frac{2^{n_{\\text{qubits}}}}{d_{\\text{word}}} \\quad \\text{(amplitude encoding)}, \\quad L_{\\text{max}} \\leq \\frac{n_{\\text{qubits}}}{d_{\\text{word}}} \\quad \\text{(angle encoding)}`,
          meaning: `Maximum sentence length L is bounded by feature budget per word d_word divided by total available features.`,
          interpretation: `Short sentences (up to 10 words) are typically used in QNLP. Longer sentences require truncation, summarisation, or hierarchical encoding schemes that are an active research area.`,
        },
        {
          latex: `\\mathbf{x}_{\\text{q}} = \\text{PCA}_{k}(\\mathbf{x}_{\\text{orig}}) \\quad \\text{where} \\quad k = 2^{n_{\\text{qubits}}} \\text{ or } n_{\\text{qubits}}`,
          meaning: `Dimensionality reduction via PCA maps original features to k quantum-compatible features based on encoding type.`,
          interpretation: `Preprocessing is essential for adapting classical datasets. PCA retains maximum variance but may lose linguistic structure. Alternative methods like autoencoder compression or learned feature selectors are active research topics.`,
        },
      ],
      variables: [
        { symbol: `n_{\\text{qubits}}`, name: `Qubit Count`, description: `Number of available qubits determining maximum encoding capacity` },
        { symbol: `N_{\\text{features}}`, name: `Feature Capacity`, description: `Maximum number of features that can be encoded in the quantum system` },
        { symbol: `L_{\\text{max}}`, name: `Maximum Sentence Length`, description: `Longest sentence that can be encoded given qubit budget and word embedding dimension` },
        { symbol: `d_{\\text{word}}`, name: `Word Embedding Dimension`, description: `Number of features used to represent each word` },
      ],
      charts: [
        {
          title: `QNLP Dataset Sizes and Characteristics`,
          type: `bar`,
          data: [
            { dataset: `SST-2 Subset`, samples: 2000, classes: 2, max_words: 12 },
            { dataset: `TREC-6 Subset`, samples: 1500, classes: 6, max_words: 10 },
            { dataset: `MCQ Benchmark`, samples: 3000, classes: 4, max_words: 8 },
            { dataset: `QNLP-Syn-10q`, samples: 5000, classes: 2, max_words: 15 },
            { dataset: `AG News Tiny`, samples: 1000, classes: 4, max_words: 10 },
            { dataset: `Quantum QA`, samples: 800, classes: 2, max_words: 20 },
          ],
        },
        {
          title: `Encoding Efficiency: Amplitude vs Angle by Qubit Count`,
          type: `line`,
          data: [
            { qubits: 4, amplitude_features: 16, angle_features: 4 },
            { qubits: 6, amplitude_features: 64, angle_features: 6 },
            { qubits: 8, amplitude_features: 256, angle_features: 8 },
            { qubits: 10, amplitude_features: 1024, angle_features: 10 },
            { qubits: 12, amplitude_features: 4096, angle_features: 12 },
            { qubits: 14, amplitude_features: 16384, angle_features: 14 },
          ],
        },
      ],
      advantages: `A growing ecosystem of QNLP-specific datasets is enabling standardised benchmarking. Classical NLP datasets provide a large pool of potential data. Synthetic data generation allows controlled experiments with known quantum structure.`,
      limitations: `Most datasets are small (hundreds to thousands of samples) due to qubit constraints. Adapting classical datasets introduces preprocessing biases. Lack of standardised QNLP benchmarks makes cross-paper comparison difficult.`,
    },
    activities: [
      {
        title: `Dataset Exploration Workshop`,
        description: `Participants explore several QNLP datasets, analysing their statistics and suitability for different tasks.`,
        steps: [
          `Load 3 different QNLP datasets (classical adapted, quantum benchmark, synthetic)`,
          `Compute basic statistics: size, class balance, sentence length distribution`,
          `Determine encoding requirements for each dataset`,
          `Rate each dataset on: size, quality, difficulty, quantum-suitability`,
        ],
        materials: `Jupyter notebook with dataset loading and analysis tools`,
        timeRequired: `12 min`,
        outcomes: `Participants can evaluate datasets for QNLP experiments`,
      },
      {
        title: `Encoding Feasibility Challenge`,
        description: `Given a dataset and qubit budget, teams design an encoding strategy and justify their choices.`,
        steps: [
          `Receive a dataset description and qubit budget (4, 8, or 12 qubits)`,
          `Calculate maximum vocabulary size and sentence length`,
          `Choose an encoding method (amplitude, angle, or hybrid)`,
          `Design the preprocessing pipeline to fit constraints`,
        ],
        timeRequired: `10 min`,
        outcomes: `Participants can design data preprocessing pipelines that respect quantum hardware constraints`,
      },
    ],
    project: {
      scope: `Select, download, preprocess, and document a complete dataset for a QNLP experiment, including encoding feasibility analysis.`,
      objectives: [
        `Select a suitable dataset for a specific QNLP task`,
        `Download and verify the dataset`,
        `Preprocess the data for quantum encoding (4-10 qubits)`,
        `Document all preprocessing steps and encoding decisions`,
      ],
      timeline: [
        { phase: `Dataset Selection`, duration: `3 min`, percent: 20 },
        { phase: `Download and Verify`, duration: `3 min`, percent: 20 },
        { phase: `Preprocessing`, duration: `5 min`, percent: 40 },
        { phase: `Documentation`, duration: `3 min`, percent: 20 },
      ],
      teamRoles: [
        { role: `Data Curator`, responsibility: `Selects and downloads the dataset` },
        { role: `Preprocessor`, responsibility: `Applies encoding-compatible preprocessing` },
        { role: `Documenter`, responsibility: `Records all decisions and parameters` },
      ],
      deliverables: [
        `Preprocessed dataset in quantum-compatible format`,
        `Data card with statistics, encoding parameters, and preprocessing steps`,
        `Feasibility analysis showing the dataset fits the qubit budget`,
      ],
    },
    questions: [
      {
        question: `What is the most significant constraint when choosing a dataset for QNLP experiments?`,
        answer: `The qubit budget determines the maximum feature capacity, which constrains vocabulary size, sentence length, and embedding dimension. Near-term devices (4-12 qubits) severely limit the size of data that can be processed.`,
        explanation: `This constraint is fundamental to current QNLP. With 8 qubits and amplitude encoding, you have 256 features total — to represent 50 words with 5 features each, you can only handle sentences of about 10 words. This is why QNLP currently focuses on short sentences and small vocabularies.`,
        commonMistake: `Assuming more qubits will be available soon — design for current hardware constraints, not future hardware promises.`,
        tip: `Start with angle encoding (simpler, less error-prone) and move to amplitude encoding only when you need the extra capacity.`,
      },
      {
        question: `What is the MCQ benchmark and why is it important for QNLP?`,
        answer: `The MCQ (Meaning Comparison with Quantum) benchmark is the first standardised QNLP evaluation dataset, designed to test quantum models ability to detect entangled linguistic relationships that classical models struggle with.`,
        explanation: `MCQ contains sentence pairs where meaning depends on non-local word correlations (the quantum NLP sweet spot). Classical models perform near chance on hard subsets, while quantum models demonstrate clear advantage, making it a valuable benchmark for demonstrating quantum benefit.`,
        commonMistake: `Only benchmarking on adapted classical datasets like SST-2 — quantum advantage is more likely to appear on quantum-specific tasks like MCQ.`,
        tip: `Benchmark on both classical-adapted and quantum-specific datasets to get a complete picture of your model's capabilities.`,
      },
    ],
    virtualLab: {
      description: `Interactive dataset browser and preprocessing tool that lets participants explore, transform, and encode QNLP datasets.`,
      steps: [
        `Browse the QNLP dataset catalog (10+ datasets available)`,
        `Select a dataset and view its statistics and examples`,
        `Configure preprocessing parameters: vocabulary size, max sentence length, encoding type`,
        `Apply preprocessing and visualise the resulting quantum-ready data`,
        `Export the processed dataset for use in other tools`,
      ],
      stepDetails: [
        `Dataset catalog includes metadata, download links, and example code for each dataset`,
        `Interactive statistics dashboard shows distributions, class balance, and length histograms`,
        `Preprocessing pipeline visualiser shows each transformation step with previews`,
        `Encoding feasibility checker warns if your configuration exceeds qubit budget`,
        `Export formats: NumPy arrays, PyTorch tensors, TensorFlow datasets, or PennyLane-compatible format`,
      ],
      completionMessage: `You can now select, preprocess, and encode datasets for any QNLP experiment!`,
      dataFlow: `flowchart TD
        A[Dataset Catalog] --> B[Select Dataset]
        B --> C[Explore Statistics]
        C --> D[Configure Preprocessing]
        D --> E[Tokenisation]
        E --> F[Dimensionality Reduction]
        F --> G[Encoding Selection]
        G --> H{Feasibility Check}
        H -->|Pass| I[Generate Quantum Data]
        H -->|Fail| D
        I --> J[Export]
        J --> K[QNLP Experiment]`,
    },
    insights: {
      advantages: [
        `Growing collection of QNLP-specific datasets enables rigorous benchmarking`,
        `Synthetic data generation provides unlimited controlled test data`,
        `Classical NLP datasets provide familiar baselines for comparison`,
        `Preprocessing tools are improving, making dataset preparation easier`,
      ],
      disadvantages: [
        `Most datasets are very small by classical NLP standards`,
        `No single standard benchmark exists for comprehensive QNLP evaluation`,
        `Encoding constraints force significant data modification`,
        `Dataset compatibility across frameworks is limited`,
      ],
      futureScope: `The QNLP community is working toward standardised benchmarks (QNLP-100, QNLP-Stanford) and larger datasets enabled by improved encoding schemes and error mitigation. Quantum-specific data augmentation techniques are emerging.`,
      industrialApplications: [
        `Domain-specific QNLP datasets for finance, legal, and medical text`,
        `Synthetic training data generation for quantum model development`,
        `Data preprocessing services for quantum ML pipelines`,
        `Benchmark datasets for evaluating quantum advantage claims`,
      ],
      careerRelevance: `Data preparation for quantum ML is a critical skill. The ability to adapt classical datasets for quantum constraints while preserving the semantic structure needed for advantage is highly valued in both research and industry settings.`,
    },
  },

  '17.4': {
    topicId: `17.4`,
    learningObjective: `Identify and participate in key research communities, forums, and events in the Quantum Natural Language Processing ecosystem.`,
    nextPrep: `Join the QNLP Discord server and introduce yourself in the introductions channel.`,
    dependencyGraph: `flowchart LR
      A[17.3 Datasets] --> B[17.4 Communities]
      B --> C[QNLP Workshop]
      B --> D[Discord & Slack]
      B --> E[GitHub]
      B --> F[Stack Exchange]
      B --> G[Conferences]
      B --> H[17.5 Publication]
      H --> I[17.6 Funding]
      style B fill:#8e44ad,color:#fff`,
    storytelling: {
      story: `A lone scientist in a basement laboratory making world-changing discoveries is a Hollywood myth. Real science happens in communities: at conference coffee breaks where ideas are born, in late-night Slack discussions that resolve bugs, in peer review that sharpens arguments, and in collaborative projects that achieve what no individual could. The QNLP community is small but passionate — spread across quantum computing, NLP, and AI conferences. The most successful researchers in this field are not necessarily the smartest individuals, but those who actively participate in the community. They ask questions on forums, present works-in-progress at workshops, review papers, and mentor newcomers. Your network is your net worth in research.`,
      questions: [
        `What are the main venues for QNLP research discussions?`,
        `How can you effectively participate in research communities as a newcomer?`,
        `Which conferences and workshops should you attend for QNLP?`,
      ],
      connection: `Research communities are the social infrastructure of scientific progress. They provide feedback on ideas, collaboration opportunities, job leads, and the informal education that fills gaps left by formal curricula. In a young field like QNLP, community participation is especially valuable because so much knowledge has not yet made it into textbooks.`,
      technicalIntro: `The QNLP community ecosystem has several layers: (1) The annual QNLP Workshop — the primary dedicated venue, held jointly with major NLP conferences (ACL, EMNLP). Proceedings are open access. Workshop recordings are available on YouTube. (2) Online communities — QNLP Discord server (800+ members, active daily discussions), Quantum Computing Stack Exchange (quantumcomputing.stackexchange.com, QNLP tag), and the Lambeq GitHub discussions. (3) Broader conferences — QIP (Quantum Information Processing), TQC (Theory of Quantum Computation), ACL, EMNLP, NeurIPS quantum ML workshops. (4) Social platforms — Twitter/X (follow #QNLP and #QuantumNLP), LinkedIn groups, and the QNLP mailing list. The community has a strong culture of mentorship and welcomes newcomers through dedicated channels and beginner-focused resources.`,
      lifeSkills: `Community participation is a career accelerant in any field. The people you meet, the questions you ask, and the help you give others compound into opportunities, knowledge, and friendships that persist throughout your career. Join a community before you feel ready — imposter syndrome is universal.`,
    },
    mathModelling: {
      need: `Understanding the structure and dynamics of the QNLP research community helps allocate time effectively across different participation channels.`,
      motivation: `With limited time and attention, researchers need to choose which communities to join, how much to participate, and where to focus their networking efforts.`,
      challenge: `Balancing depth of participation (meaningful contributions to one community) with breadth (awareness of developments across multiple communities).`,
      equations: [
        {
          latex: `\\text{Impact}_{\\text{participant}} = \\sum_{i} w_i \\cdot \\text{Activity}_i \\quad \\text{where} \\quad w_{\\text{present}} > w_{\\text{attend}} > w_{\\text{lurk}}`,
          meaning: `Community impact is a weighted sum of activities: presenting makes the strongest contribution, attending is moderate, and lurking (just reading) has minimal impact.`,
          interpretation: `You get out what you put in. Writing a workshop paper or giving a talk generates far more connections and opportunities than just attending sessions. Active Q&A participation on forums builds reputation faster than passive reading.`,
        },
        {
          latex: `P(\\text{collaboration}) \\propto \\frac{n_{\\text{interactions}}}{d_{\\text{community}}} \\cdot e^{-t_{\\text{since\\_last\\_interaction}}}`,
          meaning: `The probability of forming a research collaboration increases with recent interactions within a community.`,
          interpretation: `Regular, consistent participation matters more than occasional intense involvement. Showing up weekly to a community builds the familiarity and trust needed for collaboration.`,
        },
        {
          latex: `R_{\\text{feedback}}(t) = R_0 \\cdot e^{-\\lambda_{\\text{forums}} \\cdot t} + \\text{Reviews}(t)`,
          meaning: `The quality and speed of feedback on research ideas decreases over time since last community participation, but can be maintained through regular peer review activities.`,
          interpretation: `Active community members get faster, more detailed feedback on their work. Reviewing others work also improves your own research by exposing you to different perspectives and standards.`,
        },
      ],
      variables: [
        { symbol: `\\text{Activity}_i`, name: `Community Activity Type`, description: `Type of participation: presenting, attending, reviewing, or reading` },
        { symbol: `n_{\\text{interactions}}`, name: `Number of Interactions`, description: `Count of meaningful exchanges with community members` },
        { symbol: `d_{\\text{community}}`, name: `Community Density`, description: `Size and activity level of the community network` },
        { symbol: `R_{\\text{feedback}}`, name: `Research Feedback Rate`, description: `Quality of feedback received on research ideas from the community` },
      ],
      charts: [
        {
          title: `QNLP Community Growth (2019-2026)`,
          type: `line`,
          data: [
            { year: `2019`, workshop_participants: 30, discord_members: 0, papers_submitted: 8 },
            { year: `2020`, workshop_participants: 60, discord_members: 120, papers_submitted: 15 },
            { year: `2021`, workshop_participants: 90, discord_members: 250, papers_submitted: 22 },
            { year: `2022`, workshop_participants: 130, discord_members: 400, papers_submitted: 35 },
            { year: `2023`, workshop_participants: 180, discord_members: 550, papers_submitted: 50 },
            { year: `2024`, workshop_participants: 250, discord_members: 750, papers_submitted: 70 },
            { year: `2025`, workshop_participants: 320, discord_members: 900, papers_submitted: 95 },
            { year: `2026`, workshop_participants: 400, discord_members: 1100, papers_submitted: 120 },
          ],
        },
        {
          title: `Community Engagement by Platform`,
          type: `bar`,
          data: [
            { platform: `QNLP Discord`, daily_messages: 45, weekly_active_users: 210 },
            { platform: `Quantum Stack Exchange`, daily_messages: 12, weekly_active_users: 80 },
            { platform: `GitHub Discussions`, daily_messages: 8, weekly_active_users: 120 },
            { platform: `Twitter/X #QNLP`, daily_messages: 25, weekly_active_users: 350 },
            { platform: `Mailing List`, daily_messages: 5, weekly_active_users: 500 },
            { platform: `LinkedIn Group`, daily_messages: 8, weekly_active_users: 180 },
          ],
        },
      ],
      advantages: `The QNLP community is small enough to be welcoming and accessible, with low barriers to participation. Senior researchers are approachable and mentorship is actively encouraged. The community has a culture of constructive feedback and collaboration.`,
      limitations: `The field is small, so the job market is limited. Geographic concentration means in-person events favour certain regions. Time zone differences make synchronous participation challenging for some.`,
    },
    activities: [
      {
        title: `Community Scavenger Hunt`,
        description: `Participants explore QNLP community platforms and complete specific tasks.`,
        steps: [
          `Find and join the QNLP Discord server`,
          `Find and follow 5 QNLP researchers on Twitter/X`,
          `Find the Quantum Computing Stack Exchange QNLP tag`,
          `Find the submission deadline for the next QNLP workshop`,
          `Report your findings back to the group`,
        ],
        timeRequired: `10 min`,
        outcomes: `Participants gain hands-on familiarity with QNLP community platforms`,
      },
      {
        title: `Ask a Question Exercise`,
        description: `Participants craft and post a well-structured question on a QNLP forum and analyse the responses.`,
        steps: [
          `Think of a QNLP question you genuinely want answered`,
          `Draft the question following the community's guidelines`,
          `Post the question on the appropriate platform (Discord, Stack Exchange)`,
          `Review the responses and reflect on what made them helpful or not`,
        ],
        materials: `Guidelines for asking good technical questions`,
        timeRequired: `12 min`,
        outcomes: `Participants learn how to ask effective questions and engage with the community`,
      },
    ],
    project: {
      scope: `Create a personal community engagement plan identifying the communities you will join, how you will participate, and a quarterly schedule.`,
      objectives: [
        `Identify 3 communities to join actively (not just lurk)`,
        `Set a weekly participation schedule (time, platform, activity type)`,
        `Identify 2 conferences or workshops to attend in the next year`,
        `Identify a mentorship or collaboration target`,
      ],
      timeline: [
        { phase: `Community Audit`, duration: `3 min`, percent: 25 },
        { phase: `Schedule Planning`, duration: `3 min`, percent: 25 },
        { phase: `Goal Setting`, duration: `4 min`, percent: 50 },
      ],
      teamRoles: [
        { role: `Auditor`, responsibility: `Researches available communities and platforms` },
        { role: `Planner`, responsibility: `Creates the participation schedule` },
        { role: `Strategist`, responsibility: `Sets goals and identifies opportunities` },
      ],
      deliverables: [
        `Community engagement plan with 3 active communities`,
        `Weekly participation schedule`,
        `Conference attendance and submission goals for the next 12 months`,
      ],
    },
    questions: [
      {
        question: `What is the single most effective way to join the QNLP research community as a newcomer?`,
        answer: `Introduce yourself on the QNLP Discord server, share your background and interests, ask a specific and well-prepared question, and then regularly participate in ongoing discussions.`,
        explanation: `The Discord server is the most active and welcoming QNLP community. A thoughtful introduction signals that you are serious and gives senior members context for helping you. Regular participation builds recognition and relationships.`,
        commonMistake: `Lurking for months without introducing yourself — the community is friendly and actively welcomes newcomers. Introduce yourself on day one.`,
        tip: `Prepare by reading the last week of Discord discussions so you can ask informed follow-up questions that show you have done your homework.`,
      },
      {
        question: `Which conferences should a QNLP researcher prioritise attending?`,
        answer: `The QNLP Workshop (co-located with ACL or EMNLP) is the top priority. Secondarily: QIP for quantum computing theory, NeurIPS quantum ML workshop for the ML perspective, and ACL main conference for the NLP audience.`,
        explanation: `The QNLP Workshop is the only venue exclusively focused on QNLP, making it the best place to meet the entire community. Broader conferences provide exposure to adjacent fields and increase the impact of your work.`,
        commonMistake: `Only attending quantum computing conferences — your work is at the intersection, so you need presence in both quantum and NLP communities.`,
        tip: `Submit a paper or extended abstract to the QNLP Workshop. Even a rejected submission gets you feedback. Accepted submissions get you funding to attend.`,
      },
    ],
    virtualLab: {
      description: `Interactive community explorer showing QNLP events, community platforms, and researcher networks with joining instructions.`,
      steps: [
        `Explore the QNLP community ecosystem visualisation`,
        `Click on any community platform to see details and join links`,
        `View the upcoming events calendar with deadlines`,
        `Explore the researcher collaboration network`,
        `Generate a personalised community participation guide`,
      ],
      stepDetails: [
        `Ecosystem map shows all platforms with connection strengths between them`,
        `Each platform has: description, membership count, activity level, and joining instructions`,
        `Events calendar filters by: type (workshop, conference, meetup), location, and deadline`,
        `Researcher network shows who works with whom, with connection strengths based on co-authorship`,
        `Personalised guide suggests communities based on your interests, time zone, and experience level`,
      ],
      completionMessage: `You have a complete understanding of the QNLP community ecosystem and a plan for participation!`,
      dataFlow: `flowchart TD
        A[Community Explorer] --> B[Ecosystem Map]
        B --> C[Platform Details]
        C --> D[Join Community]
        A --> E[Events Calendar]
        E --> F[Conference Details]
        F --> G[Submit Abstract]
        A --> H[Researcher Network]
        H --> I[Potential Collaborators]
        I --> J[Reach Out]
        A --> K[Personalised Guide]
        K --> L[Participation Schedule]`,
    },
    insights: {
      advantages: [
        `Small, welcoming community with low barrier to entry`,
        `Active mentorship culture — senior researchers help newcomers`,
        `Multiple platforms for different participation styles`,
        `Annual workshop provides a regular gathering point`,
        `Strong presence in both quantum and NLP communities`,
      ],
      disadvantages: [
        `Small community means limited job market`,
        `Geographic concentration in Europe and North America`,
        `Time zone differences limit synchronous participation`,
        `Fewer mentoring opportunities than larger fields`,
      ],
      futureScope: `The QNLP community is growing rapidly and becoming more structured. Formal mentoring programs, regional chapters, and dedicated funding for community activities are being established. The community is also expanding into Asia and South America.`,
      industrialApplications: [
        `Industry researchers participate in academic communities for collaboration`,
        `Corporate teams sponsor workshops and events for recruiting`,
        `Community standards influence industrial best practices`,
        `Open-source tools evolve through community contributions`,
      ],
      careerRelevance: `Active community participation is strongly correlated with career success in QNLP. Most job opportunities are shared through community channels before public posting. Collaborations formed at workshops lead to papers, projects, and job offers.`,
    },
  },

  '17.5': {
    topicId: `17.5`,
    learningObjective: `Identify publication venues, understand the submission and review process, and prepare research contributions for dissemination in QNLP.`,
    nextPrep: `Select one publication venue from the list and review its latest accepted papers to understand current standards.`,
    dependencyGraph: `flowchart LR
      A[17.4 Communities] --> B[17.5 Publication]
      B --> C[Workshop Papers]
      B --> D[Conference Papers]
      B --> E[Journal Articles]
      B --> F[Preprints]
      B --> G[Peer Review]
      G --> H[17.6 Funding]
      style B fill:#c0392b,color:#fff`,
    storytelling: {
      story: `Publishing research is like sending a message in a bottle across an ocean of scientists. You spend months crafting the message, ensuring it is clear, correct, and significant. You seal it in a bottle (your paper format), choose the right ocean current (journal or conference), and wait. Sometimes the bottle reaches a distant shore quickly — your paper is accepted on first submission. More often, it drifts for a while, gets picked up, examined, and sometimes rejected with comments that make your next message stronger. The key is not to optimise for acceptance of a single paper, but to build a body of work that the community values. Every published paper, every preprint, every workshop presentation is a signal that you are a serious contributor to the field. Publication is not the end of research — it is the beginning of scientific conversation.`,
      questions: [
        `What are the different types of publication venues and how do they compare?`,
        `How does the peer review process work and how can you navigate it?`,
        `What makes a QNLP paper impactful beyond just being accepted?`,
      ],
      connection: `Publication is how research enters the permanent scientific record and becomes citable by others. In a young field like QNLP, the publication landscape is still forming — with workshop proceedings, conference tracks, and journals all playing important roles. Understanding this landscape helps you target the right venue for each contribution.`,
      technicalIntro: `QNLP publication venues span several tiers: (1) Workshop proceedings — QNLP Workshop (ACL/EMNLP colocated), Quantum ML workshops at NeurIPS/ICML. Fast review cycles (2-4 weeks), lower acceptance bar, good for early-stage ideas. (2) Conference proceedings — ACL, EMNLP, NAACL (NLP venues with quantum tracks), NeurIPS, ICML (ML venues with quantum workshops), QCE (IEEE Quantum Week). Review cycles of 3-6 months, competitive acceptance (20-30%), the primary career currency. (3) Journals — Quantum (open access, high impact), npj Quantum Information (Nature group), Quantum Science and Technology (IOP), EPJ Quantum Technology. Review cycles of 6-18 months, higher acceptance bar, more space for detailed derivations. (4) Preprints — arXiv.org (quant-ph, cs.CL, cs.LG). Immediate dissemination, no peer review but community filters through endorsements and citations. Best practice: preprint first, then submit to a venue.`,
      lifeSkills: `The ability to communicate complex ideas clearly in writing is a superpower in any career. Learning to structure arguments, present evidence, address counterarguments, and respond constructively to criticism will serve you well beyond academic publishing — in proposal writing, technical documentation, and executive communication.`,
    },
    mathModelling: {
      need: `Understanding publication metrics, impact factors, and review dynamics helps researchers make strategic decisions about where and when to submit their work.`,
      motivation: `The choice of publication venue affects the visibility, credibility, and career impact of your research. A strategic approach maximises return on your research investment.`,
      challenge: `Balancing the desire for rapid dissemination (preprints, workshops) with the career benefits of prestigious venues (conferences, high-impact journals).`,
      equations: [
        {
          latex: `\\text{Impact}_{\\text{paper}} = \\text{Novelty} \\times \\text{Quality} \\times \\text{Timing} \\times \\log(\\text{Audience})`,
          meaning: `The impact of a paper is a multiplicative function of its novelty, quality, timing relative to the field, and the size of the audience reached.`,
          interpretation: `All factors must be positive — a high-quality paper on a solved problem has no impact. A novel idea poorly executed has no impact. A perfect paper submitted too late (someone else published first) has no impact. Audience amplification through venue choice multiplies the other factors.`,
        },
        {
          latex: `P(\\text{Accept}) = \\frac{1}{1 + e^{-(\\beta_0 + \\beta_1 \\cdot \\text{Quality} + \\beta_2 \\cdot \\text{Match} + \\beta_3 \\cdot \\text{Novelty} - \\beta_4 \\cdot \\text{Competition})}}`,
          meaning: `Acceptance probability is a logistic function of paper quality, venue match, novelty, and competitive intensity of the submission cycle.`,
          interpretation: `Quality and venue match are the strongest controllable factors. A well-written paper on a topic directly relevant to the venue's scope has much higher acceptance odds. Novelty matters but novel papers are harder to review fairly. Competition varies by cycle.`,
        },
        {
          latex: `\\tau_{\\text{impact}}(t) = \\frac{c(t)}{\\mu_{\\text{field}}} \\cdot \\left(1 - e^{-\\lambda_{\\text{citation}} \\cdot t}\\right)`,
          meaning: `The impact trajectory tau(t) measures a paper citation count c(t) normalised by field average mu_field, following a characteristic growth curve.`,
          interpretation: `Citations grow fastest in the first 2-3 years after publication. Preprints accelerate this by establishing priority earlier. Papers published in venues with high visibility (conferences, open-access journals) have higher peak citation rates.`,
        },
      ],
      variables: [
        { symbol: `\\text{Novelty}`, name: `Novelty Score`, description: `Degree of original contribution — new ideas, methods, or results` },
        { symbol: `\\text{Quality}`, name: `Paper Quality`, description: `Technical correctness, clarity, completeness, and reproducibility of the paper` },
        { symbol: `\\text{Match}`, name: `Venue Match`, description: `How well the paper's topic aligns with the venue's scope and community` },
        { symbol: `\\tau_{\\text{impact}}`, name: `Impact Trajectory`, description: `Normalised citation growth curve over time since publication` },
      ],
      charts: [
        {
          title: `QNLP Publication Venues: Rejection Rates and Review Times`,
          type: `bar`,
          data: [
            { venue: `QNLP Workshop`, rejection_rate: 0.25, review_weeks: 3 },
            { venue: `ACL`, rejection_rate: 0.78, review_weeks: 16 },
            { venue: `EMNLP`, rejection_rate: 0.75, review_weeks: 14 },
            { venue: `NeurIPS QML`, rejection_rate: 0.60, review_weeks: 8 },
            { venue: `Quantum Journal`, rejection_rate: 0.55, review_weeks: 20 },
            { venue: `npj Quantum Info`, rejection_rate: 0.70, review_weeks: 24 },
          ],
        },
        {
          title: `Impact Factor by Venue Type (2025-2026)`,
          type: `bar`,
          data: [
            { venue_type: `Top NLP Conference`, impact_factor: 8.2, citation_half_life_years: 5 },
            { venue_type: `Quantum Journal`, impact_factor: 6.5, citation_half_life_years: 8 },
            { venue_type: `ML Conference`, impact_factor: 7.8, citation_half_life_years: 4 },
            { venue_type: `Workshop`, impact_factor: 2.1, citation_half_life_years: 3 },
            { venue_type: `arXiv Preprint`, impact_factor: 0, citation_half_life_years: 6 },
          ],
        },
      ],
      advantages: `Multiple venue types serve different purposes: workshops for early feedback, conferences for career impact, journals for definitive reference. The preprint culture ensures immediate dissemination regardless of venue acceptance.`,
      limitations: `Conference review cycles are long and competitive. Journal reviews can take over a year. Workshop papers are sometimes not considered citable for career purposes. The small community means you are likely reviewing close colleagues work, creating potential conflicts.`,
    },
    activities: [
      {
        title: `Paper Structure Workshop`,
        description: `Participants analyse a successful QNLP paper structure and then outline their own.`,
        steps: [
          `Read an accepted QNLP workshop paper (provided)`,
          `Identify the structure: abstract, introduction, related work, method, experiments, conclusion`,
          `Analyse what makes each section effective`,
          `Outline a paper based on your own workshop project or idea`,
        ],
        materials: `Sample accepted QNLP paper, outline template`,
        timeRequired: `12 min`,
        outcomes: `Participants understand the structure of effective QNLP papers`,
      },
      {
        title: `Peer Review Simulation`,
        description: `Participants review a sample paper using real review criteria.`,
        steps: [
          `Receive a sample QNLP paper and review criteria`,
          `Read the paper and write a structured review (strengths, weaknesses, questions)`,
          `Assign a score (accept, revise, reject)`,
          `Compare your review with others and discuss differences`,
        ],
        materials: `Sample paper, review template, scoring rubric`,
        timeRequired: `15 min`,
        outcomes: `Participants learn to write constructive peer reviews and understand reviewer perspectives`,
      },
    ],
    project: {
      scope: `Develop a complete publication strategy for a QNLP research project, including venue selection, timeline, and submission plan.`,
      objectives: [
        `Define the research contribution clearly`,
        `Identify 3 potential publication venues ranked by suitability`,
        `Create a submission timeline including preprint, conference, and journal steps`,
        `Plan for reproducibility: code, data, and documentation release`,
      ],
      timeline: [
        { phase: `Contribution Definition`, duration: `3 min`, percent: 20 },
        { phase: `Venue Analysis`, duration: `5 min`, percent: 35 },
        { phase: `Timeline Creation`, duration: `5 min`, percent: 45 },
      ],
      teamRoles: [
        { role: `Author`, responsibility: `Defines the research contribution` },
        { role: `Strategist`, responsibility: `Analyses venues and recommends targets` },
        { role: `Manager`, responsibility: `Creates the submission timeline` },
      ],
      deliverables: [
        `Research contribution statement`,
        `Venue comparison and recommendation`,
        `12-month publication timeline with milestones`,
      ],
    },
    questions: [
      {
        question: `What is the best strategy for publishing QNLP research in terms of venue sequence?`,
        answer: `Post a preprint on arXiv immediately upon completing the work. Submit an extended abstract or short paper to the QNLP Workshop for early feedback. Then submit the full paper to a top conference (ACL, EMNLP, NeurIPS). Optionally extend for a journal version after conference presentation.`,
        explanation: `This strategy maximises both speed (arXiv establishes priority immediately) and career impact (conference papers are the primary currency). The workshop submission provides valuable feedback before the more competitive conference submission.`,
        commonMistake: `Waiting until a conference paper is accepted before posting a preprint — this delays dissemination by months and risks being scooped.`,
        tip: `Aim to submit to workshops 3-4 months before the conference deadline for your target conference. This gives you time to incorporate feedback.`,
      },
      {
        question: `What makes a QNLP paper reproducible and why does that matter?`,
        answer: `A reproducible paper includes: (1) full code release with documentation, (2) exact dataset version and preprocessing code, (3) hyperparameter configurations and random seeds, (4) hardware specifications and execution details for quantum experiments.`,
        explanation: `Reproducibility is critical in QNLP because hardware-dependent results are hard to verify without exact specifications. Many top venues now require code submission as part of the review process. Reproducible papers receive significantly more citations.`,
        commonMistake: `Only describing the quantum circuit theoretically without providing implementation code — reviewers will request the code.`,
        tip: `Create a GitHub repository for your paper with a README that lets anyone reproduce your results with a single script. Use Docker containers if your environment is complex.`,
      },
    ],
    virtualLab: {
      description: `Interactive publication planning tool that helps researchers select venues, plan submissions, and track the review process.`,
      steps: [
        `Enter your research contribution details and timeline`,
        `Browse recommended venues based on your topic and contribution type`,
        `Create a submission plan with deadlines and milestones`,
        `Simulate the review process with example reviewer comments`,
        `Generate a publication package (paper template, code repo structure, data card)`,
      ],
      stepDetails: [
        `Recommendation engine uses paper topic, contribution type, and target audience to suggest venues`,
        `Calendar view shows all deadlines with countdown notifications`,
        `Review simulator generates realistic reviewer comments for practicing responses`,
        `Publication package includes: LaTeX template, bibliography style, code repo template, and data card format`,
        `Submission tracker monitors the status of all active submissions`,
      ],
      completionMessage: `You have a complete publication strategy and understand the full research dissemination lifecycle!`,
      dataFlow: `flowchart TD
        A[Contribution Input] --> B[Venue Recommender]
        B --> C{Venue Type}
        C --> D[Workshop]
        C --> E[Conference]
        C --> F[Journal]
        D --> G[Submission Plan]
        E --> G
        F --> G
        G --> H[arXiv Preprint]
        H --> I[Submit to Venue]
        I --> J[Review Process]
        J --> K{Decision}
        K -->|Accept| L[Camera Ready]
        K -->|Revise| M[Address Comments]
        M --> I
        K -->|Reject| N[Resubmit Strategy]
        N --> B`,
    },
    insights: {
      advantages: [
        `Preprint culture ensures immediate dissemination`,
        `Multiple venue types serve different career stages and contribution types`,
        `Workshop feedback improves papers before competitive submissions`,
        `Growing acceptance of quantum NLP at top conferences`,
        `Open access is standard across QNLP venues`,
      ],
      disadvantages: [
        `Long review cycles (3-18 months depending on venue)`,
        `High rejection rates at top conferences (75-80%)`,
        `Small reviewer pool leads to inconsistent reviews`,
        `Conference attendance costs can be prohibitive without funding`,
      ],
      futureScope: `QNLP is moving toward dedicated journal sections and special issues. Review standards are improving with shared rubrics. The community is advocating for mandatory code and data release with all QNLP publications.`,
      industrialApplications: [
        `Industry researchers publish to establish credibility and recruit talent`,
        `Corporate research labs publish to attract academic collaborators`,
        `Startups publish to demonstrate technical leadership and attract investment`,
        `Patent filings complement publications for commercial QNLP innovations`,
      ],
      careerRelevance: `Publications are the primary metric for academic careers and increasingly important for industry research positions. A strong publication record in QNLP demonstrates both technical depth and ability to complete research projects.`,
    },
  },

  '17.6': {
    topicId: `17.6`,
    learningObjective: `Identify and apply for funding opportunities in Quantum Natural Language Processing research, including grants, fellowships, and industrial partnerships.`,
    nextPrep: `Identify one funding opportunity relevant to your career stage and note its deadline.`,
    dependencyGraph: `flowchart LR
      A[17.5 Publication] --> B[17.6 Funding]
      B --> C[Government Grants]
      B --> D[Fellowships]
      B --> E[Industrial Funding]
      B --> F[Conference Travel Grants]
      B --> G[Grant Writing]
      B --> H[Career Pathways]
      style B fill:#2ecc71,color:#fff`,
    storytelling: {
      story: `Every great expedition needs funding. When Shackleton set out to cross Antarctica, he spent years securing sponsors, writing proposals, and convincing wealthy patrons that his journey was worth supporting. Research is no different. The best ideas remain unrealised without funding for students, hardware access, travel, and computing time. The QNLP funding landscape has transformed dramatically — from a handful of small grants in 2020 to national quantum strategies in 2026 that allocate billions for quantum technologies. The key is knowing where the money is, how to frame your research to match funder priorities, and how to write proposals that stand out in a competitive landscape. Funding is not just about money — it is validation that the community believes your research direction is worth investing in.`,
      questions: [
        `What are the major funding sources for QNLP research?`,
        `How do you write a competitive grant proposal?`,
        `What non-monetary resources (hardware access, compute time) are available?`,
      ],
      connection: `Funding enables research — from PhD stipends to hardware access to conference travel. Understanding the funding landscape helps researchers at all career stages plan their research programmes and maximise the resources available to them. Quantum NLP sits at an intersection of priorities: quantum technology (government-funded), AI (industry-funded), and fundamental science.`,
      technicalIntro: `QNLP funding comes from multiple sources: (1) Government quantum programmes — EU Quantum Flagship (1B EUR), US National Quantum Initiative (3.6B USD over 10 years), UK National Quantum Strategy (2.5B GBP), China Quantum Projects (estimated 15B USD). These fund large collaborative projects, PhD studentships, and national labs. (2) Research councils — NSF (US), EPSRC (UK), DFG (Germany), ANR (France) all have quantum information science programmes that fund QNLP projects. (3) Fellowships — Marie Curie (EU), Schmidt Futures, IBM Quantum PhD Fellowship, Google PhD Fellowship. (4) Industry partnerships — IBM Quantum Network, Google Quantum AI, Amazon Braket, Microsoft Quantum offer cloud credits and technical support. (5) Conference travel grants — QNLP Workshop travel support, ACL student grants, NSF travel awards. Total annual QNLP-specific funding has grown from approximately 5M USD in 2020 to an estimated 150M USD in 2026.`,
      lifeSkills: `Grant writing is persuasive writing with evidence. It is a skill that transfers to many contexts: business proposals, project pitches, internal resource requests, and even personal goal-setting. The ability to clearly articulate why something matters, how you will do it, and what impact it will have is universally valuable.`,
    },
    mathModelling: {
      need: `Understanding the funding landscape mathematically — success rates, award sizes, and temporal dynamics — helps researchers allocate proposal writing effort efficiently.`,
      motivation: `With limited time for proposal writing, researchers need to target opportunities with the best balance of success probability, award size, and strategic fit.`,
      challenge: `Balancing the time investment in proposal writing (10-100 hours per proposal) against the probability of success (10-30% for most programmes).`,
      equations: [
        {
          latex: `\\text{Expected Return}_{\\text{proposal}} = P(\\text{Award}) \\times \\text{Award Value} - C_{\\text{write}} - C_{\\text{opportunity}}`,
          meaning: `Expected return from writing a proposal is the probability-weighted award value minus the costs of writing and the opportunity cost of time not spent on research.`,
          interpretation: `This cost-benefit analysis helps prioritise proposals. A 10M grant with 10% success rate has an expected value of 1M, which may justify 100 hours of writing. A 5K travel grant with 30% probability has an expected value of 1.5K, which may not justify 20 hours of writing.`,
        },
        {
          latex: `P(\\text{Award}) = \\sigma\\left(\\alpha \\cdot \\text{Quality} + \\beta \\cdot \\text{Track Record} + \\gamma \\cdot \\text{Strategic Alignment} + \\delta \\cdot \\text{Budget Reasonableness}\\right)`,
          meaning: `Award probability depends on proposal quality, applicant track record, alignment with funder priorities, and reasonableness of the budget.`,
          interpretation: `Strategic alignment (match between proposal topic and funder priorities) is often the most important and most controllable factor. A well-written proposal on a topic the funder is not interested in has near-zero success probability.`,
        },
        {
          latex: `F_{\\text{QNLP}}(t) = F_0 \\cdot e^{r \\cdot t} \\quad \\text{where} \\quad r \\approx 0.35 \\text{ (2020-2026)}`,
          meaning: `QNLP-specific funding F(t) has grown exponentially at approximately 35% per year since 2020.`,
          interpretation: `The funding landscape is expanding rapidly. Programmes that were competitive last year may have more budget this year. Being early in a growing field means less competition and more willingness from funders to take risks on new directions.`,
        },
      ],
      variables: [
        { symbol: `P(\\text{Award})`, name: `Award Probability`, description: `Probability that a submitted proposal receives funding` },
        { symbol: `C_{\\text{write}}`, name: `Writing Cost`, description: `Time and effort invested in preparing the proposal (hours, resources)` },
        { symbol: `F_{\\text{QNLP}}(t)`, name: `QNLP Total Funding`, description: `Total annual funding available specifically for QNLP research` },
        { symbol: `r`, name: `Growth Rate`, description: `Annual growth rate of QNLP funding availability` },
      ],
      charts: [
        {
          title: `QNLP Funding Growth by Source (2020-2026)`,
          type: `line`,
          data: [
            { year: `2020`, government: 2, industry: 1, fellowships: 0.5, travel: 0.1 },
            { year: `2021`, government: 5, industry: 3, fellowships: 1, travel: 0.2 },
            { year: `2022`, government: 12, industry: 8, fellowships: 2, travel: 0.3 },
            { year: `2023`, government: 25, industry: 18, fellowships: 4, travel: 0.5 },
            { year: `2024`, government: 50, industry: 35, fellowships: 7, travel: 0.8 },
            { year: `2025`, government: 85, industry: 60, fellowships: 12, travel: 1.0 },
            { year: `2026`, government: 130, industry: 95, fellowships: 18, travel: 1.5 },
          ],
        },
        {
          title: `Funding Success Rates by Programme Type`,
          type: `bar`,
          data: [
            { programme_type: `Government Grants`, success_rate: 0.15, avg_award_k_usd: 500 },
            { programme_type: `Fellowships`, success_rate: 0.08, avg_award_k_usd: 250 },
            { programme_type: `Industry Gifts`, success_rate: 0.30, avg_award_k_usd: 100 },
            { programme_type: `Cloud Credits`, success_rate: 0.60, avg_award_k_usd: 50 },
            { programme_type: `Travel Grants`, success_rate: 0.40, avg_award_k_usd: 3 },
            { programme_type: `Hardware Access`, success_rate: 0.50, avg_award_k_usd: 200 },
          ],
        },
      ],
      advantages: `QNLP funding is growing rapidly (35% CAGR). Multiple funding sources reduce dependence on any single programme. Quantum is a political priority worldwide, ensuring continued government investment. Industry partnerships provide non-dilutive funding and hardware access.`,
      limitations: `Success rates for major grants are low (8-15%). Proposal writing is time-intensive. Funding is concentrated in a few geographic regions. Early-career researchers face higher barriers due to track record requirements.`,
    },
    activities: [
      {
        title: `Grant Call Analysis`,
        description: `Participants analyse a real funding call and identify how to align a QNLP project with the call objectives.`,
        steps: [
          `Receive a funding call document (e.g., EU Quantum Flagship or NSF programme)`,
          `Identify the call objectives, budget, eligibility, and deadline`,
          `Brainstorm how a QNLP project could be framed to match the call`,
          `Write a one-paragraph pitch for the project`,
        ],
        materials: `Real funding call documents, pitch template`,
        timeRequired: `12 min`,
        outcomes: `Participants learn to analyse funding calls and align research projects with funder priorities`,
      },
      {
        title: `Elevator Pitch Practice`,
        description: `Participants practise describing their QNLP research in 60 seconds for a funding audience.`,
        steps: [
          `Write a 60-second pitch: the problem, your approach, the impact`,
          `Deliver the pitch to a partner`,
          `Receive feedback on clarity, enthusiasm, and persuasiveness`,
          `Revise and deliver again`,
        ],
        timeRequired: `10 min`,
        outcomes: `Participants can communicate their research value proposition concisely for funding contexts`,
      },
    ],
    project: {
      scope: `Identify and map funding opportunities relevant to a QNLP research programme, prioritise them, and create a submission plan.`,
      objectives: [
        `Identify 5 funding opportunities across different sources (government, fellowship, industry)`,
        `Assess eligibility, fit, and competitiveness for each`,
        `Create a 6-month proposal submission schedule`,
        `Identify 2 non-monetary resources (hardware access, cloud credits) to apply for`,
      ],
      timeline: [
        { phase: `Opportunity Identification`, duration: `4 min`, percent: 30 },
        { phase: `Eligibility Assessment`, duration: `3 min`, percent: 20 },
        { phase: `Priority Ranking`, duration: `3 min`, percent: 20 },
        { phase: `Schedule Creation`, duration: `4 min`, percent: 30 },
      ],
      teamRoles: [
        { role: `Searcher`, responsibility: `Finds funding opportunities` },
        { role: `Analyst`, responsibility: `Assesses fit and competitiveness` },
        { role: `Planner`, responsibility: `Creates the submission schedule` },
      ],
      deliverables: [
        `Funding opportunity map with 5+ identified sources`,
        `Eligibility and fit assessment for each opportunity`,
        `6-month proposal submission calendar`,
      ],
    },
    questions: [
      {
        question: `What is the most important factor in writing a successful grant proposal?`,
        answer: `Strategic alignment between your proposed research and the funder's explicit priorities and goals. A well-written proposal on a topic the funder does not prioritise has virtually no chance of success.`,
        explanation: `Reviewers evaluate proposals against the call objectives first. Your proposal must clearly and explicitly connect your research to the funder's stated goals within the first page. The best technical proposal will be rejected if it does not address the call.`,
        commonMistake: `Writing a generic research proposal and hoping it matches a call — tailor each proposal to the specific call, using the funder's own language and citing their strategic documents.`,
        tip: `Start your proposal writing by copying the call objectives into a document and directly mapping each objective to a component of your proposed research.`,
      },
      {
        question: `What non-monetary resources are available for QNLP research?`,
        answer: `IBM Quantum Network (free cloud access to quantum hardware for researchers), Amazon Braket credits, Google Quantum AI cloud access, Microsoft Azure Quantum credits, and national quantum computing centres (many offer free compute time for academic research).`,
        explanation: `These resources can be worth 50K-200K USD annually in compute value. Applications are typically simpler than grant proposals (2-5 pages) and have higher success rates (40-60%). They are an excellent starting point for early-career researchers.`,
        commonMistake: `Only applying for monetary grants and ignoring cloud credit programmes — these are easier to get and provide immediate access to the hardware you need for experiments.`,
        tip: `Apply for IBM Quantum Network access and at least one cloud provider credit programme within your first month of starting QNLP research.`,
      },
    ],
    virtualLab: {
      description: `Interactive funding explorer that matches researchers to opportunities, helps draft proposals, and tracks submissions.`,
      steps: [
        `Enter your profile: career stage, location, research focus, and experience level`,
        `Browse matched funding opportunities ranked by fit score`,
        `Explore detailed programme information and past funded projects`,
        `Use the proposal outline generator to structure your application`,
        `Track your submissions and deadlines on the funding calendar`,
      ],
      stepDetails: [
        `Matching algorithm considers career stage, research area, nationality, and institutional affiliation`,
        `Each opportunity includes: eligibility, award size, success rate, deadline, and application template`,
        `Past funded projects database shows what previous awardees proposed`,
        `Proposal outline generator creates section-by-section structure with prompts`,
        `Calendar syncs with Google Calendar and Outlook for deadline reminders`,
      ],
      completionMessage: `You have a complete funding strategy and understand how to secure resources for your QNLP research programme!`,
      dataFlow: `flowchart TD
        A[Researcher Profile] --> B[Funding Matcher]
        B --> C[Matched Opportunities]
        C --> D[Detailed View]
        D --> E[Apply Now?]
        E -->|Yes| F[Proposal Generator]
        F --> G[Section Drafts]
        G --> H[Review & Polish]
        H --> I[Submit]
        E -->|Not Yet| J[Add to Calendar]
        J --> K[Deadline Reminder]
        K --> D
        I --> L[Funding Tracker]
        L --> M{Decision}
        M -->|Awarded| N[Project Start]
        M -->|Rejected| O[Revise & Resubmit]`,
    },
    insights: {
      advantages: [
        `QNLP funding is growing at 35% annually`,
        `Multiple funding sources reduce dependency on any single programme`,
        `Quantum technology is a political priority in most developed nations`,
        `Industry partnerships provide both funding and real-world relevance`,
        `Non-monetary resources (cloud credits) are increasingly available`,
      ],
      disadvantages: [
        `Success rates for major grants remain low (8-15%)`,
        `Proposal writing is extremely time-intensive`,
        `Funding is concentrated in a few geographic regions (EU, US, UK, China)`,
        `Early-career researchers struggle with track record requirements`,
        `Hardware access can have long wait times during peak periods`,
      ],
      futureScope: `QNLP funding is expected to grow further as quantum advantage demonstrations in NLP accumulate. Dedicated QNLP funding programmes are emerging. International consortia funding (EU-US, EU-Japan collaborations) is increasing.`,
      industrialApplications: [
        `Corporate R&D budgets for quantum NLP are growing at major tech companies`,
        `Startup funding for quantum ML companies has reached 500M+ USD in 2025-2026`,
        `Government-funded quantum hubs include QNLP as a key application area`,
        `Defence and intelligence agencies are investing in quantum NLP for security applications`,
      ],
      careerRelevance: `The ability to secure funding is a career-defining skill in academic and research careers. Researchers who can consistently attract funding have more freedom to pursue their research interests and build larger, more impactful programmes.`,
    },
  },
}
