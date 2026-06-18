import type { TopicContent } from './loader'

export const m9Content: Record<string, TopicContent> = {
  '9.1': {
    topicId: '9.1',
    learningObjective: `Understand the complete QNLP ecosystem, including the roles of major frameworks (Qiskit, PennyLane, Lambeq) and how they interconnect to build quantum language models.`,
    nextPrep: `Review Module 8 on linguistic categories and pregroup grammars, as these are the input to the QNLP pipeline.`,
    dependencyGraph: `flowchart LR
      A[M8: Linguistics] --> B[9.1 QNLP Ecosystem]
      B --> C[9.2 Qiskit]
      B --> D[9.3 PennyLane]
      B --> E[9.4 Lambeq]
      C --> F[9.5 Setup]
      D --> F
      E --> F
      F --> G[9.6 Lab]`,
    storytelling: {
      story: `Imagine you are building a high-speed train. You need tracks (the infrastructure), an engine (the computation), control systems (the optimisation), and a scheduling platform (the high-level interface). Each component comes from a different specialised manufacturer, but they must all work together seamlessly. The QNLP ecosystem is exactly this: Qiskit provides the quantum hardware access and low-level circuit construction like the tracks and wheels. PennyLane handles optimisation and automatic differentiation like the engine control unit. Lambeq is the train driver's cockpit — the high-level interface that takes linguistic descriptions and turns them into quantum circuits. Together, they form a complete pipeline from language to quantum computation.`,
      questions: [
        `Why is it beneficial to have separate specialised frameworks instead of one monolithic tool?`,
        `What challenges arise when integrating tools from different ecosystems?`,
        `If you were designing a QNLP framework from scratch, what features would you prioritise?`,
      ],
      connection: `Just as a train requires multiple specialised subsystems working together, QNLP requires multiple frameworks: one for quantum hardware access (Qiskit), one for optimisation (PennyLane), and one for linguistic-to-quantum translation (Lambeq). Understanding how these pieces fit together is essential for building practical QNLP systems.`,
      technicalIntro: `The QNLP ecosystem consists of three primary layers. At the hardware layer, quantum computing providers like IBM (Qiskit) give access to real quantum processors and simulators. At the optimisation layer, PennyLane provides automatic differentiation of quantum circuits — essential for training quantum machine learning models. At the linguistic layer, Lambeq (by Quantinuum) translates pregroup grammar derivations into parameterised quantum circuits. Additional tools include IBM's Qiskit Nature for chemistry-inspired language models and Strawberry Fields for continuous-variable quantum computing approaches to NLP.`,
      lifeSkills: `Understanding how specialised tools integrate into a larger system teaches systems thinking — the ability to see how components interact to produce emergent behaviour. This skill is invaluable in software architecture, project management, and any field requiring coordination of complex systems.`,
    },
    mathModelling: {
      need: `The QNLP ecosystem involves multiple computational layers, each with its own mathematical formalism that must be compatible with the others.`,
      motivation: `Different frameworks use different mathematical representations — Qiskit uses unitary matrices and circuits, PennyLane uses differentiable quantum operations, and Lambeq uses categorical quantum mechanics. Ensuring compatibility requires understanding these formalisms.`,
      challenge: `Modelling the complete pipeline from linguistic pregroup grammar through quantum circuit construction to measurement and optimisation requires a unified mathematical framework.`,
      equations: [
        {
          latex: `\\mathcal{C} = U_{\\text{Lambeq}}(\\text{Parse}) \\circ U_{\\text{Qiskit}}(\\theta) \\circ U_{\\text{PennyLane}}(\\text{Opt})`,
          meaning: `The complete QNLP pipeline: Lambeq generates the circuit structure from a parse, Qiskit executes the circuit with parameters \\theta, and PennyLane optimises those parameters.`,
          interpretation: `Each framework contributes a different mathematical operation. The composition symbol represents the sequential application of these operations to transform input language into a classification outcome.`,
        },
        {
          latex: `\\mathcal{L}(\\theta) = \\frac{1}{N} \\sum_{i=1}^{N} \\ell(f_\\theta(x_i), y_i)`,
          meaning: `The loss function evaluated over N training examples, where f_\\theta is the quantum model with parameters \\theta.`,
          interpretation: `PennyLane computes gradients \\nabla_\\theta \\mathcal{L} using the parameter-shift rule, enabling gradient-based optimisation of quantum circuits — a capability Qiskit alone does not natively provide.`,
        },
        {
          latex: `\\text{Accuracy} = \\frac{1}{M} \\sum_{j=1}^{M} \\mathbb{1}(\\hat{y}_j = y_j)`,
          meaning: `Classification accuracy over M test examples, where \\hat{y}_j is the predicted label.`,
          interpretation: `After training, the combined QNLP pipeline is evaluated on test data. Lambeq's circuit structure, Qiskit's execution, and PennyLane's optimisation together determine performance.`,
        },
      ],
      variables: [
        { symbol: `\\theta`, name: `Circuit Parameters`, description: `Trainable rotation angles in the quantum circuit` },
        { symbol: `\\mathcal{L}`, name: `Loss Function`, description: `Measures prediction error, minimised during training` },
        { symbol: `\\mathcal{C}`, name: `Complete Pipeline`, description: `Composition of all framework operations end-to-end` },
        { symbol: `\\nabla_\\theta`, name: `Gradient Operator`, description: `Vector of partial derivatives used for optimisation` },
      ],
      interactive: {
        equation: `\\mathcal{L}(\\theta) = \\frac{1}{N} \\sum_i \\ell(f_{\\theta}(x_i), y_i)`,
        description: `Adjust the learning rate and number of training epochs to see how the QNLP pipeline converges:`,
        variables: [
          { symbol: `\\eta`, name: `Learning Rate`, description: `Step size for gradient descent updates` },
          { symbol: `E`, name: `Epochs`, description: `Number of complete passes through training data` },
        ],
        sliders: [
          { name: `lr`, label: `Learning Rate (\\eta)`, min: 0.001, max: 0.1, step: 0.001, default: 0.01 },
          { name: `epochs`, label: `Training Epochs (E)`, min: 1, max: 50, step: 1, default: 10 },
        ],
      },
      charts: [
        {
          title: `Training Loss Convergence Across Frameworks`,
          type: `line`,
          data: [
            { name: `Epoch 1`, Loss: 0.85 },
            { name: `Epoch 5`, Loss: 0.62 },
            { name: `Epoch 10`, Loss: 0.41 },
            { name: `Epoch 15`, Loss: 0.28 },
            { name: `Epoch 20`, Loss: 0.19 },
            { name: `Epoch 25`, Loss: 0.14 },
            { name: `Epoch 30`, Loss: 0.11 },
            { name: `Epoch 40`, Loss: 0.08 },
            { name: `Epoch 50`, Loss: 0.06 },
          ],
        },
        {
          title: `Framework Comparison: Feature Coverage`,
          type: `radar`,
          data: [
            { feature: `Circuit Construction`, Qiskit: 5, PennyLane: 4, Lambeq: 3 },
            { feature: `Automatic Differentiation`, Qiskit: 2, PennyLane: 5, Lambeq: 1 },
            { feature: `Linguistic Parsing`, Qiskit: 1, PennyLane: 1, Lambeq: 5 },
            { feature: `Hardware Access`, Qiskit: 5, PennyLane: 4, Lambeq: 2 },
            { feature: `Simulator Support`, Qiskit: 5, PennyLane: 5, Lambeq: 3 },
            { feature: `Documentation Quality`, Qiskit: 4, PennyLane: 4, Lambeq: 3 },
            { feature: `Community Size`, Qiskit: 5, PennyLane: 3, Lambeq: 2 },
          ],
        },
      ],
      advantages: `The modular ecosystem allows each framework to focus on its core strength. Users can mix and match components, swap backends, and leverage the best tools for each stage of the QNLP pipeline.`,
      limitations: `Integration complexity increases with each additional framework. Version compatibility issues, differing APIs, and debugging across framework boundaries pose significant challenges for beginners.`,
    },
    activities: [
      {
        title: `Ecosystem Mapping Exercise`,
        description: `Students collaboratively create a visual map of the QNLP ecosystem showing frameworks, their functions, and how they connect.`,
        steps: [
          `Form groups of 4-5 students`,
          `On a large sheet of paper, draw boxes for Qiskit, PennyLane, Lambeq, and supporting tools`,
          `Draw arrows showing data and control flow between frameworks`,
          `Label each arrow with the type of information passed (circuit, parameters, gradients, etc.)`,
          `Present your map to the class and explain your design choices`,
        ],
        materials: `Large paper sheets, markers, sticky notes`,
        timeRequired: `12 min`,
        outcomes: `Students develop a mental model of how the QNLP ecosystem fits together.`,
        rubrics: `Accuracy of framework roles, clarity of connections, completeness of pipeline, quality of presentation`,
      },
      {
        title: `Research Brief: Framework Comparison`,
        description: `Groups research and compare Qiskit, PennyLane, and Lambeq across a standard set of criteria.`,
        steps: [
          `Each group is assigned one framework to research`,
          `Use the workshop materials and online documentation to find information`,
          `Complete a standard comparison template (5 criteria)`,
          `Present findings to the class in a 2-minute pitch`,
          `Class votes on which framework is best suited for each task`,
        ],
        materials: `Comparison template handout, access to documentation`,
        timeRequired: `10 min`,
        outcomes: `Students understand the unique value proposition of each framework.`,
        rubrics: `Depth of research, accuracy of information, persuasiveness of pitch`,
      },
      {
        title: `Pipeline Design Challenge`,
        description: `Given a simple QNLP task (sentiment classification on 2-word sentences), design the optimal pipeline using the three frameworks.`,
        steps: [
          `Read the task description: classify sentences as positive or negative`,
          `Identify which framework handles each stage (parsing, circuit generation, execution, optimisation)`,
          `Sketch the data flow through the pipeline`,
          `Identify potential integration challenges`,
          `Share your design with another group for feedback`,
        ],
        materials: `Task description handout, blank pipeline templates`,
        timeRequired: `10 min`,
        outcomes: `Students apply ecosystem knowledge to a concrete design problem.`,
        rubrics: `Correct identification of framework roles, realistic data flow, thoughtful discussion of challenges`,
      },
      {
        title: `Group Discussion: Build vs Integrate`,
        description: `Debate whether it is better to build a monolithic QNLP framework or integrate existing specialised tools.`,
        steps: [
          `Half the class argues for monolithic design, half for modular integration`,
          `Each side prepares 3 arguments (3 min)`,
          `Structured debate: opening statements, rebuttals, closing`,
          `Class votes on which approach is more practical`,
          `Instructor reveals the real-world trade-offs`,
        ],
        timeRequired: `8 min`,
        outcomes: `Students understand the engineering trade-offs in framework design.`,
      },
    ],
    project: {
      scope: `Create a comprehensive ecosystem guide showing the QNLP pipeline from linguistic input to classification output, with each framework's role clearly documented.`,
      objectives: [
        `Identify at least 3 frameworks in the QNLP ecosystem`,
        `Explain the primary function of each framework`,
        `Draw the data flow through the complete pipeline`,
        `Compare the frameworks across 5 dimensions`,
      ],
      timeline: [
        { phase: `Framework research`, duration: `5 min`, percent: 30 },
        { phase: `Pipeline diagram`, duration: `5 min`, percent: 30 },
        { phase: `Comparison matrix`, duration: `4 min`, percent: 25 },
        { phase: `Writeup and review`, duration: `3 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Qiskit Specialist`, responsibility: `Document Qiskit's role, APIs, and hardware support` },
        { role: `PennyLane Specialist`, responsibility: `Document optimisation and differentiation capabilities` },
        { role: `Lambeq Specialist`, responsibility: `Document linguistic parsing and circuit generation` },
        { role: `Integration Lead`, responsibility: `Create the unified pipeline diagram showing data flow` },
      ],
      deliverables: [
        `Ecosystem guide with framework descriptions`,
        `Pipeline diagram showing data and control flow`,
        `Framework comparison matrix (5+ criteria)`,
      ],
    },
    questions: [
      {
        question: `What are the three main frameworks in the QNLP ecosystem and their primary roles?`,
        answer: `Qiskit provides quantum circuit construction and hardware access. PennyLane handles automatic differentiation and optimisation. Lambeq translates linguistic parses into quantum circuits.`,
        explanation: `These three frameworks form a complete pipeline: Lambeq creates the circuit structure from language, Qiskit executes it on quantum hardware or simulators, and PennyLane trains the parameters through gradient-based optimisation.`,
        commonMistake: `Thinking any single framework can do everything — in practice, each has its own strengths and they work best together.`,
        tip: `Remember: Lambeq for language-to-circuit, Qiskit for execution, PennyLane for training.`,
      },
      {
        question: `Why is automatic differentiation important for training QNLP models?`,
        answer: `Automatic differentiation computes gradients of the loss function with respect to circuit parameters, enabling gradient-based optimisation algorithms like Adam or SGD.`,
        explanation: `Without gradients, we would need to use gradient-free optimisation methods (like Nelder-Mead), which scale poorly with the number of parameters. PennyLane's parameter-shift rule provides exact quantum gradients efficiently.`,
        tip: `Think of PennyLane as the "training engine" that Qiskit and Lambeq do not natively provide.`,
      },
      {
        question: `What is the data flow when processing a sentence through the QNLP pipeline?`,
        answer: `Sentence -> Lambeq parser (pregroup derivation) -> Lambeq circuit generator (parameterised circuit) -> Qiskit simulator/backend (execution) -> PennyLane (gradient computation and parameter update)`,
        explanation: `The flow starts with linguistic parsing, moves to quantum circuit construction, then to execution, and finally to optimisation. The optimised parameters feed back into the circuit for the next iteration.`,
        commonMistake: `Thinking the pipeline is a single forward pass — in training, it is an iterative loop with feedback from PennyLane to update circuit parameters.`,
      },
    ],
    virtualLab: {
      description: `Explore an interactive visualisation of the QNLP ecosystem. Click on each framework to see its role, API examples, and how it connects to other frameworks in the pipeline.`,
      steps: [
        `Load the ecosystem visualisation dashboard`,
        `Click on the Lambeq node to see its functions`,
        `Click on the Qiskit node to explore hardware backends`,
        `Click on the PennyLane node to examine optimisation workflows`,
        `Trace a complete sentence through the pipeline with the animated data flow`,
      ],
      stepDetails: [
        `Dashboard shows three framework nodes connected by labelled arrows in a pipeline layout`,
        `Lambeq panel shows: pregroup parser, diagram generator, circuit factory with example code`,
        `Qiskit panel shows: transpiler stages, backend list (aer simulator, ibm hardware), circuit drawer`,
        `PennyLane panel shows: QNode creation, parameter-shift rule visualisation, optimisation loop animation`,
        `Animation traces "John loves Mary" through parse -> diagram -> circuit -> measurement -> update`,
      ],
      completionMessage: `You have explored the complete QNLP ecosystem and understand how Lambeq, Qiskit, and PennyLane work together!`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[Lambeq Parser]
        B --> C[Pregroup Derivation]
        C --> D[Lambeq Circuit Generator]
        D --> E[Parameterised Quantum Circuit]
        E --> F[Qiskit Backend]
        F --> G[Measurement Outcomes]
        G --> H[PennyLane Optimiser]
        H --> I[Updated Parameters]
        I --> E
        G --> J[Classification Result]`,
    },
    insights: {
      advantages: [
        `Modular ecosystem allows using the best tool for each task`,
        `Each framework has a strong community and active development`,
        `Lambeq is purpose-built for QNLP, reducing complexity significantly`,
        `PennyLane's automatic differentiation enables efficient training of quantum circuits`,
      ],
      disadvantages: [
        `Integration complexity increases with each additional framework`,
        `Version compatibility issues between frameworks can break pipelines`,
        `Debugging across framework boundaries is challenging`,
        `Requires knowledge of multiple APIs and programming paradigms`,
      ],
      futureScope: `The ecosystem is converging — IBM is adding more ML capabilities to Qiskit while PennyLane is adding hardware access. Lambeq is expected to support more quantum backends natively, reducing integration friction.`,
      industrialApplications: [
        `Enterprise QNLP systems for document classification`,
        `Quantum-enhanced sentiment analysis for customer feedback`,
        `Drug discovery where linguistic descriptions of molecular properties are classified`,
        `Automated legal document analysis with quantum speedup`,
      ],
      careerRelevance: `Experience with multiple quantum computing frameworks is highly valued in the quantum software industry. Roles like "Quantum ML Engineer" and "Quantum Software Developer" specifically require cross-framework expertise.`,
    },
  },

  '9.2': {
    topicId: '9.2',
    learningObjective: `Understand IBM's Qiskit framework — its architecture, core components, how to build and execute quantum circuits, and how it serves as the backend execution layer for QNLP.`,
    nextPrep: `Install Qiskit using pip (pip install qiskit qiskit-aer) and verify the installation before this session. Alternatively, use the IBM Quantum Lab online environment.`,
    dependencyGraph: `flowchart LR
      A[9.1 QNLP Ecosystem] --> B[9.2 Qiskit]
      B --> C[9.5 Setup]
      B --> D[9.6 Lab]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you are a master chef who has invented a revolutionary recipe. But you do not have a kitchen — no stove, no oven, no utensils. You need a place to cook. Qiskit is that kitchen for quantum computing. It provides all the tools: the stove (quantum simulator), the oven (real quantum hardware), the measuring cups (quantum gates), and the recipe book (circuit library). IBM has been building this kitchen since 2017, and it now serves millions of quantum recipes every day. For QNLP, Qiskit is where our quantum circuits — designed by Lambeq and optimised by PennyLane — actually run.`,
      questions: [
        `What features would you expect from a quantum programming framework?`,
        `Why might IBM open-source Qiskit instead of keeping it proprietary?`,
        `How does having access to real quantum hardware change the way you design algorithms?`,
      ],
      connection: `Qiskit is the execution layer of the QNLP pipeline. Lambeq generates circuits, PennyLane optimises them, but Qiskit is the framework that actually runs them — whether on a simulated quantum computer on your laptop or on IBM's real quantum processors in the cloud.`,
      technicalIntro: `Qiskit (Quantum Information Science Kit) is IBM's open-source quantum computing framework. Its architecture has four key components: Terra (circuit construction and optimisation), Aer (high-performance simulators), Ignis (noise characterisation and error mitigation), and Nature (quantum chemistry and physics). For QNLP, Terra and Aer are the most relevant: Terra for building and transpiling circuits, and Aer for simulating them efficiently on classical hardware. Qiskit also provides the IBM Quantum Experience — cloud access to IBM's fleet of superconducting quantum processors.`,
      lifeSkills: `Learning Qiskit teaches you to work with real engineering constraints — qubit connectivity, gate fidelities, and coherence times are not abstract concepts but practical limitations you must navigate. This constraint-based thinking is valuable in any engineering discipline.`,
    },
    mathModelling: {
      need: `Qiskit represents quantum circuits as sequences of unitary operations on qubits, requiring mathematical modelling of gates, circuits, and measurements.`,
      motivation: `Understanding how Qiskit models circuits mathematically is essential for debugging, optimising, and reasoning about quantum programs.`,
      challenge: `Modelling the effect of noise and hardware constraints on Qiskit circuit execution requires understanding both ideal unitary evolution and realistic noise models.`,
      equations: [
        {
          latex: `U_{\\text{circuit}} = U_L U_{L-1} \\cdots U_2 U_1`,
          meaning: `A quantum circuit is a sequence of unitary operations U_i applied to the initial state |0...0⟩.`,
          interpretation: `Each gate in Qiskit corresponds to a unitary matrix. The circuit is their product, applied from right to left. The final state is |\\psi\\rangle = U_{\\text{circuit}}|0\\dots0\\rangle.`,
        },
        {
          latex: `P(y) = |\\langle y | \\psi \\rangle|^2 = |\\langle y | U_{\\text{circuit}} | 0\\dots0 \\rangle|^2`,
          meaning: `The probability of measuring outcome y (a bitstring) is the squared magnitude of the amplitude of |y⟩ in the final state.`,
          interpretation: `Qiskit's Aer simulator computes these probabilities exactly by simulating the state vector. On real hardware, repeated measurement samples approximate the distribution.`,
        },
        {
          latex: `\\mathcal{E}(\\rho) = \\sum_k E_k \\rho E_k^\\dagger`,
          meaning: `A quantum channel representing noise: the density matrix \\rho evolves under Kraus operators E_k.`,
          interpretation: `Qiskit's noise models use quantum channels to simulate realistic hardware behaviour, including depolarising noise, thermal relaxation, and readout errors.`,
        },
      ],
      variables: [
        { symbol: `U_i`, name: `Unitary Gate`, description: `The i-th quantum gate in the circuit` },
        { symbol: `P(y)`, name: `Measurement Probability`, description: `Probability of observing measurement outcome y` },
        { symbol: `\\rho`, name: `Density Matrix`, description: `Mixed state representation including noise` },
        { symbol: `\\mathcal{E}`, name: `Quantum Channel`, description: `Noise process represented by Kraus operators` },
      ],
      interactive: {
        equation: `|\\psi\\rangle = H|0\\rangle = \\frac{1}{\\sqrt{2}}|0\\rangle + \\frac{1}{\\sqrt{2}}|1\\rangle`,
        description: `Build a simple Qiskit circuit interactively — add gates and observe the state vector and measurement probabilities:`,
        variables: [
          { symbol: `H`, name: `Hadamard Gate`, description: `Creates superposition from |0⟩` },
          { symbol: `CNOT`, name: `CNOT Gate`, description: `Entangles two qubits` },
        ],
        sliders: [
          { name: `num_qubits`, label: `Number of Qubits`, min: 1, max: 4, step: 1, default: 2 },
          { name: `shots`, label: `Measurement Shots`, min: 100, max: 10000, step: 100, default: 1000 },
        ],
      },
      charts: [
        {
          title: `Measurement Outcome Distribution (2-qubit Bell State)`,
          type: `bar`,
          data: [
            { name: `00`, 'Ideal (Aer)': 50, 'Noisy (Hardware)': 47, Count: 50 },
            { name: `01`, 'Ideal (Aer)': 0, 'Noisy (Hardware)': 2, Count: 0 },
            { name: `10`, 'Ideal (Aer)': 0, 'Noisy (Hardware)': 3, Count: 0 },
            { name: `11`, 'Ideal (Aer)': 50, 'Noisy (Hardware)': 48, Count: 50 },
          ],
        },
        {
          title: `Qiskit Components: Code Contribution Distribution`,
          type: `bar`,
          data: [
            { name: `Terra`, Contributions: 45 },
            { name: `Aer`, Contributions: 25 },
            { name: `Ignis`, Contributions: 18 },
            { name: `Nature`, Contributions: 12 },
          ],
        },
      ],
      advantages: `Qiskit provides access to real IBM quantum hardware with up to 127 qubits. Its Aer simulator is highly optimised, supporting GPU acceleration and parallel simulation. The extensive community and documentation make it the most accessible quantum computing framework.`,
      limitations: `Qiskit is Python-only, which limits performance for large-scale simulations. The API has undergone significant changes across versions (especially the 0.x to 1.x transition), creating code migration challenges. IBM hardware access requires queue times.`,
    },
    activities: [
      {
        title: `Qiskit Circuit Builder Workshop`,
        description: `Students use Qiskit to build and visualise quantum circuits step by step, starting with single-qubit gates and building up to multi-qubit circuits.`,
        steps: [
          `Import Qiskit modules: QuantumCircuit, Aer, execute`,
          `Create a QuantumCircuit with 2 qubits and 2 classical bits`,
          `Add Hadamard gate to qubit 0`,
          `Add CNOT gate with control=0, target=1`,
          `Add measurement operations and visualise the circuit using circuit.draw()`,
        ],
        materials: `Jupyter notebook with Qiskit installed, circuit visualisation examples`,
        timeRequired: `10 min`,
        outcomes: `Students can construct and visualise basic quantum circuits in Qiskit.`,
        rubrics: `Correct circuit construction, accurate visualisation, ability to modify circuit`,
      },
      {
        title: `Simulator vs Hardware Comparison`,
        description: `Students run the same circuit on Qiskit's Aer simulator and compare with noise models that emulate real hardware.`,
        steps: [
          `Build a simple 2-qubit circuit`,
          `Run on Aer simulator with 1000 shots and record results`,
          `Add a noise model using NoiseModel.from_backend()`,
          `Run with noise and compare the measurement distributions`,
          `Calculate the error rate between ideal and noisy results`,
        ],
        materials: `Pre-built noise model examples, comparison worksheet`,
        timeRequired: `10 min`,
        outcomes: `Students understand the impact of noise on quantum computations and how Qiskit models it.`,
        rubrics: `Correct noise model setup, accurate comparison, thoughtful analysis of results`,
      },
      {
        title: `Qiskit Transpiler Exploration`,
        description: `Students explore Qiskit's transpiler, which optimises circuits for specific hardware backends with different qubit connectivity.`,
        steps: [
          `Build a circuit with gates between non-adjacent qubits`,
          `Set up a coupling map representing a linear chain of qubits`,
          `Apply the transpiler to map the circuit to the coupling map`,
          `Compare gate count and depth before and after transpilation`,
          `Discuss why transpilation is necessary for real hardware`,
        ],
        materials: `Transpiler code examples, coupling map diagrams`,
        timeRequired: `8 min`,
        outcomes: `Students understand how circuits are adapted to hardware constraints.`,
        rubrics: `Correct transpilation setup, meaningful comparison metrics, understanding of coupling map constraints`,
      },
      {
        title: `Quiz: Qiskit Fundamentals`,
        description: `Short quiz on Qiskit concepts including gates, circuits, simulators, and measurements.`,
        steps: [
          `Answer 5 multiple-choice questions on Qiskit API`,
          `One short coding question: create a Bell state circuit`,
          `Peer review answers`,
          `Instructor resolves common misconceptions`,
        ],
        materials: `Quiz handout or digital form`,
        timeRequired: `5 min`,
        outcomes: `Reinforce Qiskit knowledge through recall and application.`,
      },
    ],
    project: {
      scope: `Build a Qiskit circuit library with 5 essential circuits that serve as building blocks for QNLP: Bell state, GHZ state, quantum teleportation, parameterised rotation, and a simple variational circuit.`,
      objectives: [
        `Implement each circuit using Qiskit QuantumCircuit`,
        `Visualise each circuit using circuit.draw()`,
        `Run each on the Aer simulator and verify correct behaviour`,
        `Document the purpose of each circuit for QNLP applications`,
      ],
      timeline: [
        { phase: `Build Bell state and GHZ circuits`, duration: `5 min`, percent: 20 },
        { phase: `Implement teleportation circuit`, duration: `5 min`, percent: 25 },
        { phase: `Build parameterised rotation circuit`, duration: `3 min`, percent: 15 },
        { phase: `Create variational circuit template`, duration: `5 min`, percent: 25 },
        { phase: `Documentation and testing`, duration: `3 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Circuit Builder`, responsibility: `Implement circuits in Qiskit` },
        { role: `Tester`, responsibility: `Verify circuit outputs match expected results` },
        { role: `Documenter`, responsibility: `Write documentation explaining each circuit's purpose` },
      ],
      deliverables: [
        `Python script with 5 circuits and test harness`,
        `Circuit diagrams for each circuit`,
        `Documentation explaining QNLP relevance of each circuit`,
      ],
    },
    questions: [
      {
        question: `What are the four main components of Qiskit and which two are most relevant for QNLP?`,
        answer: `Terra (circuit construction), Aer (simulators), Ignis (noise mitigation), Nature (chemistry/physics). Terra and Aer are most relevant for QNLP.`,
        explanation: `Terra provides the QuantumCircuit API for building circuits, while Aer provides the high-performance simulators needed to execute them. Ignis helps when running on noisy hardware, and Nature is more relevant for quantum chemistry applications.`,
        commonMistake: `Using Ignis for circuit construction — it is specialised for noise characterisation, not circuit design.`,
      },
      {
        question: `What is a noise model in Qiskit and why is it important?`,
        answer: `A noise model simulates the effects of real hardware imperfections — gate errors, decoherence, and readout errors — on quantum computations.`,
        explanation: `Noise models are crucial for bridging the gap between ideal simulation and real hardware. They allow developers to test error mitigation strategies and set realistic expectations before running on actual quantum processors.`,
        tip: `Always test your circuits with a noise model before deploying to real hardware to estimate performance.`,
      },
      {
        question: `What does the Qiskit transpiler do?`,
        answer: `The transpiler optimises and maps quantum circuits to match the constraints of a specific hardware backend, including qubit connectivity, native gate set, and noise characteristics.`,
        explanation: `A circuit using CNOT between qubits 0 and 3 may need to be rewritten using SWAP gates if those qubits are not directly connected on the hardware. The transpiler handles this automatically.`,
        commonMistake: `Ignoring the transpiler and assuming any circuit runs on any hardware unchanged.`,
      },
    ],
    virtualLab: {
      description: `Interactive Qiskit Circuit Lab where you can drag and drop gates onto a circuit canvas, see the state vector update in real time, and run on a simulated backend with optional noise.`,
      steps: [
        `Open the Qiskit Circuit Composer (drag-and-drop interface)`,
        `Add a Hadamard gate to qubit 0 and observe the state vector change`,
        `Add a CNOT gate and watch the qubits become entangled`,
        `Add measurement gates and configure 1000 shots`,
        `Run the circuit and analyse the measurement histogram`,
      ],
      stepDetails: [
        `Circuit canvas shows qubit wires with gate slots. Drag gates from the palette onto wires`,
        `State vector panel updates in real time: |0⟩ becomes (|0⟩ + |1⟩)/√2 after H gate`,
        `Entanglement panel shows the two-qubit state after CNOT: (|00⟩ + |11⟩)/√2`,
        `Measurement configuration: select number of shots (100-10000) and optional noise model`,
        `Results show histogram of counts, probability distribution, and comparison with ideal`,
      ],
      completionMessage: `You have mastered Qiskit circuit construction! You can build, visualise, and execute quantum circuits with noise awareness.`,
      dataFlow: `flowchart LR
        A[QuantumCircuit] --> B[Gate Operations]
        B --> C[Circuit Visualisation]
        C --> D[Transpiler]
        D --> E[Optimised Circuit]
        E --> F{Aer Simulator}
        E --> G[IBM Hardware]
        F --> H[Measurement Results]
        G --> H
        H --> I[Counts & Histogram]`,
    },
    insights: {
      advantages: [
        `Free and open-source with extensive documentation and tutorials`,
        `Access to real IBM quantum hardware with up to 127 qubits`,
        `High-performance Aer simulator supporting GPU acceleration`,
        `Large community with textbooks, courses, and Qiskit Advocate programme`,
      ],
      disadvantages: [
        `Python-only — limited performance for large-scale simulation`,
        `API has changed significantly between versions (0.x to 1.x migration)`,
        `Hardware access requires internet connection and queue times`,
        `Steep learning curve for the transpiler and optimisation pipeline`,
      ],
      futureScope: `IBM is integrating Qiskit with its 1000+ qubit Condor processor roadmap. The Qiskit Patterns initiative aims to simplify common quantum workflows, making QNLP pipelines easier to deploy.`,
      industrialApplications: [
        `Quantum chemistry simulation for drug discovery`,
        `Financial portfolio optimisation`,
        `Quantum machine learning for classification tasks`,
        `Supply chain logistics and routing problems`,
      ],
      careerRelevance: `Qiskit is the most widely used quantum computing framework. IBM Qiskit certification is a recognised credential. Most quantum computing job postings list Qiskit experience as a requirement.`,
    },
  },

  '9.3': {
    topicId: '9.3',
    learningObjective: `Understand Xanadu's PennyLane framework — its automatic differentiation engine, the parameter-shift rule for quantum gradients, and how it optimises parameterised quantum circuits for QNLP applications.`,
    nextPrep: `Install PennyLane using pip install pennylane and review basic calculus concepts (partial derivatives, chain rule).`,
    dependencyGraph: `flowchart LR
      A[9.1 QNLP Ecosystem] --> B[9.3 PennyLane]
      B --> C[9.5 Setup]
      B --> D[9.6 Lab]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you are trying to tune a complex musical instrument with hundreds of dials. Each dial changes the sound in subtle ways, and you want to find the perfect setting for a beautiful melody. Turning dials at random would take forever. You need a way to know: if I turn this dial slightly, does the music get better or worse? That is exactly what PennyLane does for quantum circuits. It computes the gradient — the direction each dial should be turned to improve the result. Without PennyLane, training quantum models would be like tuning that instrument in the dark, guessing randomly at each dial. With PennyLane, you have a precise measurement of exactly how to adjust every parameter.`,
      questions: [
        `Why is knowing the gradient better than random search for optimisation?`,
        `What challenges arise when computing gradients of quantum circuits?`,
        `How does automatic differentiation of quantum circuits differ from classical neural networks?`,
      ],
      connection: `PennyLane fills the critical training gap in the QNLP pipeline. While Lambeq generates the circuit structure and Qiskit executes it, neither provides native gradient computation. PennyLane's parameter-shift rule enables efficient, exact gradient computation for quantum circuits, making gradient-based training of QNLP models possible.`,
      technicalIntro: `PennyLane is Xanadu's open-source framework for differentiable quantum computing. Its core innovation is the parameter-shift rule: a method for computing exact gradients of quantum expectation values without requiring a quantum computer to evaluate infinitesimal changes. PennyLane treats quantum circuits as differentiable computation nodes in a computational graph, enabling seamless integration with classical machine learning through PyTorch, TensorFlow, and JAX interfaces. The QNode abstraction wraps a quantum circuit into a callable function that returns expectation values and supports automatic differentiation through any of the supported classical frameworks.`,
      lifeSkills: `PennyLane's philosophy of differentiable programming teaches you to think of everything as a computation graph where gradients flow backward. This mindset — understanding how changes in one part of a system affect the output — is valuable in optimisation problems across business, engineering, and science.`,
    },
    mathModelling: {
      need: `Training parameterised quantum circuits requires computing gradients of expectation values with respect to circuit parameters — a task that is not possible with classical automatic differentiation alone.`,
      motivation: `Classical neural networks use backpropagation, which relies on the chain rule and analytic derivatives. Quantum circuits involve unitary operations and measurements, requiring a different approach to gradient computation.`,
      challenge: `Computing gradients of quantum circuit outputs without disturbing the quantum state or requiring an unphysical "infinitesimal" change to parameters.`,
      equations: [
        {
          latex: `\\partial_\\theta \\langle O \\rangle = \\frac{\\langle O \\rangle(\\theta + \\pi/2) - \\langle O \\rangle(\\theta - \\pi/2)}{2}`,
          meaning: `The parameter-shift rule: the gradient of an expectation value with respect to \\theta is computed from two circuit evaluations with shifted parameters.`,
          interpretation: `Instead of an infinitesimal change \\epsilon, we evaluate the circuit with parameter shifts of \\pm\\pi/2. This gives the exact gradient for gates of the form e^{-i\\theta G} where G has eigenvalues \\pm 1/2.`,
        },
        {
          latex: `\\nabla_\\theta \\mathcal{L} = \\begin{bmatrix} \\partial_{\\theta_1} \\mathcal{L} \\\\ \\partial_{\\theta_2} \\mathcal{L} \\\\ \\vdots \\\\ \\partial_{\\theta_m} \\mathcal{L} \\end{bmatrix}`,
          meaning: `The gradient of the loss function \\mathcal{L} is a vector of partial derivatives with respect to each parameter.`,
          interpretation: `PennyLane computes this gradient vector using the parameter-shift rule for each parameter, then passes it to an optimiser (Adam, SGD, etc.) to update all parameters.`,
        },
        {
          latex: `\\theta_{t+1} = \\theta_t - \\eta \\nabla_\\theta \\mathcal{L}(\\theta_t)`,
          meaning: `Gradient descent update rule: parameters are adjusted in the opposite direction of the gradient.`,
          interpretation: `PennyLane's optimisers implement this update automatically. The learning rate \\eta controls step size. PennyLane also supports advanced optimisers like Adam, AdaGrad, and RMSProp.`,
        },
      ],
      variables: [
        { symbol: `\\theta`, name: `Circuit Parameter`, description: `Trainable rotation angle in a quantum gate` },
        { symbol: `\\langle O \\rangle`, name: `Expectation Value`, description: `Average value of observable O over measurement outcomes` },
        { symbol: `\\partial_\\theta`, name: `Partial Derivative`, description: `Rate of change of output w.r.t. parameter \\theta` },
        { symbol: `\\eta`, name: `Learning Rate`, description: `Step size multiplier for gradient descent updates` },
      ],
      interactive: {
        equation: `\\partial_\\theta \\langle Z \\rangle = \\frac{\\langle Z \\rangle(\\theta + \\pi/2) - \\langle Z \\rangle(\\theta - \\pi/2)}{2}`,
        description: `Visualise the parameter-shift rule: adjust \\theta and see how the expectation value and its gradient change:`,
        variables: [
          { symbol: `\\theta`, name: `Rotation Angle`, description: `Parameter value in radians` },
          { symbol: `\\langle Z \\rangle`, name: `Expectation of Pauli Z`, description: `Measured expectation value in range [-1, 1]` },
        ],
        sliders: [
          { name: `theta`, label: `Rotation Angle (\\theta)`, min: 0, max: 6.28, step: 0.01, default: 1.57 },
          { name: `shift`, label: `Shift Value (s)`, min: 0.5, max: 3.14, step: 0.01, default: 1.57 },
        ],
      },
      charts: [
        {
          title: `Parameter-Shift Rule Visualisation`,
          type: `scatter`,
          data: [
            { name: `f(\\theta)`, theta: 0.0, value: 1.0 },
            { name: `f(\\theta)`, theta: 0.79, value: 0.707 },
            { name: `f(\\theta)`, theta: 1.57, value: 0.0 },
            { name: `f(\\theta)`, theta: 2.36, value: -0.707 },
            { name: `f(\\theta)`, theta: 3.14, value: -1.0 },
            { name: `f(\\theta)`, theta: 3.93, value: -0.707 },
            { name: `f(\\theta)`, theta: 4.71, value: 0.0 },
            { name: `f(\\theta)`, theta: 5.50, value: 0.707 },
            { name: `f(\\theta)`, theta: 6.28, value: 1.0 },
            { name: `gradient`, theta: 0.0, value: 0.0 },
            { name: `gradient`, theta: 0.79, value: -0.707 },
            { name: `gradient`, theta: 1.57, value: -1.0 },
            { name: `gradient`, theta: 2.36, value: -0.707 },
            { name: `gradient`, theta: 3.14, value: 0.0 },
            { name: `gradient`, theta: 3.93, value: 0.707 },
            { name: `gradient`, theta: 4.71, value: 1.0 },
            { name: `gradient`, theta: 5.50, value: 0.707 },
            { name: `gradient`, theta: 6.28, value: 0.0 },
          ],
        },
        {
          title: `Optimiser Comparison: Training Loss Over Epochs`,
          type: `line`,
          data: [
            { name: `Epoch 1`, SGD: 0.85, Adam: 0.82, RMSProp: 0.83 },
            { name: `Epoch 5`, SGD: 0.61, Adam: 0.51, RMSProp: 0.53 },
            { name: `Epoch 10`, SGD: 0.42, Adam: 0.28, RMSProp: 0.31 },
            { name: `Epoch 15`, SGD: 0.31, Adam: 0.16, RMSProp: 0.19 },
            { name: `Epoch 20`, SGD: 0.24, Adam: 0.09, RMSProp: 0.12 },
            { name: `Epoch 25`, SGD: 0.19, Adam: 0.06, RMSProp: 0.08 },
            { name: `Epoch 30`, SGD: 0.16, Adam: 0.04, RMSProp: 0.06 },
          ],
        },
      ],
      advantages: `PennyLane provides exact gradients for quantum circuits via the parameter-shift rule, integrates seamlessly with PyTorch/TensorFlow/JAX, and supports multiple quantum backends (including Qiskit, Cirq, and hardware).`,
      limitations: `The parameter-shift rule requires 2 circuit evaluations per parameter per gradient step, making it expensive for circuits with many parameters. It only applies to gates with generators that have two unique eigenvalues.`,
    },
    activities: [
      {
        title: `Parameter-Shift Rule Demo`,
        description: `Students implement the parameter-shift rule manually in Python to see exactly how quantum gradients are computed.`,
        steps: [
          `Define a simple quantum function: f(θ) = ⟨0|R_y(θ)† Z R_y(θ)|0⟩`,
          `Compute f(θ) for θ = 0, π/4, π/2, 3π/4, π`,
          `Apply the parameter-shift rule: ∂f ≈ [f(θ + π/2) - f(θ - π/2)] / 2`,
          `Verify against analytic derivative: ∂f(θ) = -sin(θ)`,
          `Discuss: why does this work for any quantum gate?`,
        ],
        materials: `Python notebook with PennyLane (or numpy-only version), worksheet`,
        timeRequired: `10 min`,
        outcomes: `Students understand the mechanics of the parameter-shift rule for quantum gradients.`,
        rubrics: `Correct implementation, accurate comparison with analytic derivative, clear explanation of the rule`,
      },
      {
        title: `PennyLane QNode Construction`,
        description: `Students build parameterised quantum circuits using PennyLane's QNode abstraction and compute gradients.`,
        steps: [
          `Import pennylane and define a quantum device (default.qubit)`,
          `Define a quantum function with @qml.qnode decorator`,
          `Add parameterised RX and RY gates`,
          `Return the expectation value of Pauli Z`,
          `Compute the gradient using PennyLane's gradient function`,
        ],
        materials: `Jupyter notebook with PennyLane installed, code examples`,
        timeRequired: `10 min`,
        outcomes: `Students can create differentiable quantum circuits with PennyLane.`,
        rubrics: `Correct QNode definition, appropriate gate selection, successful gradient computation`,
      },
      {
        title: `Training Loop Construction`,
        description: `Students build a complete training loop combining PennyLane with PyTorch for a simple classification task.`,
        steps: [
          `Define a parameterised quantum circuit as a PyTorch layer`,
          `Create a synthetic binary classification dataset`,
          `Define a loss function (binary cross-entropy)`,
          `Run the training loop with Adam optimiser for 50 epochs`,
          `Plot the loss curve and decision boundary`,
        ],
        materials: `Jupyter notebook with PennyLane and PyTorch, synthetic dataset generator`,
        timeRequired: `12 min`,
        outcomes: `Students can train a quantum model end-to-end using PennyLane.`,
        rubrics: `Correct integration of PennyLane with PyTorch, decreasing loss curve, reasonable accuracy`,
      },
      {
        title: `Gradient-Free vs Gradient-Based Optimisation Comparison`,
        description: `Students compare the convergence speed of gradient-free (Nelder-Mead) and gradient-based (Adam) optimisation.`,
        steps: [
          `Define the same circuit and task for both methods`,
          `Run Nelder-Mead optimiser for 100 iterations`,
          `Run Adam optimiser for 100 iterations`,
          `Plot convergence curves side by side`,
          `Discuss the trade-offs in different optimisation strategies`,
        ],
        materials: `Comparison notebook with both optimisers`,
        timeRequired: `8 min`,
        outcomes: `Students understand why gradient-based optimisation is preferred for QNLP.`,
        rubrics: `Correct setup of both optimisers, meaningful comparison, insightful discussion`,
      },
    ],
    project: {
      scope: `Create a PennyLane-based training module that can optimise a parameterised quantum circuit for a binary classification task, with configurable circuit depth, learning rate, and optimiser choice.`,
      objectives: [
        `Define a parameterised quantum circuit as a QNode`,
        `Integrate with PyTorch for automatic differentiation`,
        `Implement a training loop with configurable hyperparameters`,
        `Visualise the training loss curve and decision boundary`,
      ],
      timeline: [
        { phase: `Define quantum circuit architecture`, duration: `5 min`, percent: 20 },
        { phase: `Integrate PennyLane with PyTorch`, duration: `5 min`, percent: 25 },
        { phase: `Implement training loop`, duration: `5 min`, percent: 25 },
        { phase: `Visualisation and testing`, duration: `5 min`, percent: 20 },
        { phase: `Hyperparameter tuning`, duration: `3 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Circuit Designer`, responsibility: `Design the parameterised quantum circuit architecture` },
        { role: `Integration Lead`, responsibility: `Connect PennyLane with the classical optimisation framework` },
        { role: `Training Engineer`, responsibility: `Implement the training loop and hyperparameter tuning` },
      ],
      deliverables: [
        `Python module with PennyLane circuit and training loop`,
        `Loss curve plot from a training run`,
        `Hyperparameter sensitivity analysis report`,
      ],
    },
    questions: [
      {
        question: `What is the parameter-shift rule and why is it important?`,
        answer: `The parameter-shift rule computes exact gradients of quantum expectation values by evaluating the circuit at two shifted parameter values, enabling gradient-based optimisation of quantum circuits.`,
        explanation: `For a gate of the form e^{-iθG} where G has eigenvalues ±1/2, the gradient ∂⟨O⟩/∂θ = (⟨O⟩(θ + π/2) - ⟨O⟩(θ - π/2))/2. This is exact, not an approximation.`,
        commonMistake: `Thinking gradients in quantum computing require infinitesimal changes — the parameter-shift rule uses finite shifts of π/2.`,
        tip: `The π/2 shift works for any gate whose generator has eigenvalues ±1/2. For other generators, generalised parameter-shift rules exist.`,
      },
      {
        question: `How does PennyLane integrate with classical machine learning frameworks?`,
        answer: `PennyLane provides interfaces to PyTorch, TensorFlow, and JAX, allowing quantum circuits to be used as differentiable layers in classical neural networks.`,
        explanation: `The QNode wrapper converts a quantum circuit into a callable that returns expectation values. When used with PyTorch's nn.Module, gradients flow through the quantum circuit via PennyLane's gradient computation.`,
        tip: `Use qml.qnn.TorchLayer to wrap a QNode as a PyTorch layer for seamless integration.`,
      },
      {
        question: `What is the main limitation of the parameter-shift rule for gradient computation?`,
        answer: `It requires 2 circuit evaluations per parameter per gradient step, making it computationally expensive for circuits with many parameters.`,
        explanation: `For a circuit with P parameters, each gradient step evaluates the circuit 2P times (plus 1 for the loss value). This linear scaling can become a bottleneck. Techniques like shot-based gradients and stochastic parameter-shift can reduce this cost.`,
      },
    ],
    virtualLab: {
      description: `Interactive PennyLane training lab where you can design a parameterised quantum circuit, configure hyperparameters, and watch the training process in real time with live gradient visualisation.`,
      steps: [
        `Select the number of qubits and circuit depth for your model`,
        `Choose the observable to measure (Z, Y, X, or custom)`,
        `Configure optimiser (Adam, SGD, RMSProp) and learning rate`,
        `Run training and watch the loss curve and parameter values update in real time`,
        `Examine the gradient values at each step to see how the parameter-shift rule works`,
      ],
      stepDetails: [
        `Circuit designer panel: drag RX, RY, RZ, CNOT gates to build layers. Each rotation gate gets a trainable parameter`,
        `Observable selector: choose Pauli Z (default), custom Hermitian, or multiple observables`,
        `Optimiser panel: select from Adam, SGD, RMSProp, or Nelder-Mead; set learning rate (0.001-0.1) and batch size`,
        `Training dashboard: real-time loss curve, parameter trackers showing θ values over epochs, gradient heatmap`,
        `Gradient inspector: click any parameter to see the two shifted circuit evaluations that compute its gradient via parameter-shift rule`,
      ],
      completionMessage: `You have mastered PennyLane training! You can design, train, and optimise parameterised quantum circuits for QNLP tasks.`,
      dataFlow: `flowchart LR
        A[Circuit Architecture] --> B[PennyLane QNode]
        B --> C[Forward Pass]
        C --> D[Expectation Values]
        D --> E[Loss Computation]
        E --> F[Parameter-Shift Rule]
        F --> G[Gradients]
        G --> H[Optimiser]
        H --> I[Updated Parameters]
        I --> B
        D --> J[Classification Output]`,
    },
    insights: {
      advantages: [
        `Exact gradient computation via parameter-shift rule — no finite-difference approximation`,
        `Seamless integration with PyTorch, TensorFlow, and JAX`,
        `Support for multiple quantum backends (Qiskit, Cirq, Braket, hardware)`,
        `Rich library of built-in quantum templates and cost functions`,
      ],
      disadvantages: [
        `2 circuit evaluations per parameter per gradient step`,
        `Steep learning curve for the quantum-classical integration API`,
        `Limited support for mid-circuit measurements and dynamic circuits`,
        `Documentation examples often use toy problems, making real-world applications harder to implement`,
      ],
      futureScope: `PennyLane is developing support for quantum error mitigation, dynamic circuit execution, and integration with trapped-ion and photonic quantum hardware — all relevant for scaling QNLP.`,
      industrialApplications: [
        `Quantum machine learning for classification and regression`,
        `Variational quantum eigensolvers for chemistry`,
        `Quantum optimisation for logistics and scheduling`,
        `Quantum generative models for drug discovery`,
      ],
      careerRelevance: `PennyLane is the leading framework for quantum machine learning. Expertise in quantum gradient computation and hybrid quantum-classical models is highly sought after in quantum AI research and development roles.`,
    },
  },

  '9.4': {
    topicId: '9.4',
    learningObjective: `Understand Quantinuum's Lambeq framework — how it translates pregroup grammar derivations into parameterised quantum circuits, its core components, and its role as the linguistic-to-quantum bridge in QNLP.`,
    nextPrep: `Review Module 8 on pregroup grammars and linguistic categories. Ensure you understand how words map to types like n, s, and their adjoints.`,
    dependencyGraph: `flowchart LR
      A[9.1 QNLP Ecosystem] --> B[9.4 Lambeq]
      B --> C[9.5 Setup]
      B --> D[9.6 Lab]
      B --> E[M10: Building QLMs]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you have a brilliant engineer who speaks only Mandarin and a brilliant architect who speaks only Spanish. They need to build a bridge together, but they cannot communicate directly. You need a translator who speaks both languages fluently. Lambeq is that translator — but between linguistics and quantum computing. It takes the language of pregroup grammar — noun phrases, sentence types, adjoint types — and translates them into the language of quantum circuits — qubits, gates, and measurements. Without Lambeq, you would need to manually design quantum circuits for each sentence structure. With Lambeq, the translation is automatic, correct by construction, and grounded in the mathematics of category theory.`,
      questions: [
        `What makes translating between linguistics and quantum mechanics possible?`,
        `Why is category theory useful for bridging such different domains?`,
        `What would it mean to have a "correct by construction" quantum circuit for a sentence?`,
      ],
      connection: `Lambeq is the central bridge in the QNLP pipeline. It converts the linguistic structure (pregroup grammar derivations from Module 8) into quantum circuits that can be executed by Qiskit and optimised by PennyLane. Without Lambeq, we would have a gap between language and quantum computation.`,
      technicalIntro: `Lambeq (named after Joachim Lambek, the mathematician who introduced pregroup grammars) is Quantinuum's open-source QNLP toolkit. Its architecture follows the DisCoCat (Distributional Compositional Categorical) model: words are represented as quantum states, grammatical structure determines how they combine, and the sentence meaning is read from measurement outcomes. Lambeq's core components include the BobcatParser (converts sentences to pregroup diagrams), the Diagram class (graphical representation of grammatical structure), and the CircuitFactory (converts diagrams to parameterised quantum circuits). Lambeq supports both rewrite rules for diagram simplification and ansatz choices for circuit depth.`,
      lifeSkills: `Lambeq exemplifies the power of abstraction — building a universal translation layer between two seemingly unrelated domains. This skill — finding underlying structure that connects different fields — is the essence of interdisciplinary innovation.`,
    },
    mathModelling: {
      need: `Translating linguistic structure into quantum circuits requires a rigorous mathematical framework connecting pregroup grammar to quantum mechanics.`,
      motivation: `The DisCoCat model provides this framework using category theory: words are vectors in a Hilbert space, grammatical reductions are tensor contractions, and sentence meaning is the resulting quantum state.`,
      challenge: `Modelling the translation from pregroup derivation diagram to quantum circuit requires representing each grammatical reduction as a quantum operation (either a Bell state preparation or a partial trace/measurement).`,
      equations: [
        {
          latex: `\\text{word}: \\text{type} \\rightarrow \\ket{\\psi}_{\\text{type}}`,
          meaning: `Each word is mapped to a quantum state in a Hilbert space labelled by its grammatical type.`,
          interpretation: `A noun (type n) becomes a state in H_n. An adjective (type n·n^l) becomes a linear map from H_n to H_n. The type determines the number of qubits needed.`,
        },
        {
          latex: `\\text{sentence}: \\text{subject} \\otimes \\text{verb} \\otimes \\text{object} \\rightarrow \\ket{\\psi}_s`,
          meaning: `The meaning of a sentence is the quantum state resulting from applying grammatical reductions to the tensor product of word states.`,
          interpretation: `For "John loves Mary", we form |John⟩_n ⊗ |loves⟩_{n^r·s·n^l} ⊗ |Mary⟩_n, then contract the noun types with the verb via cup operations (Bell state preparations followed by partial traces).`,
        },
        {
          latex: `\\text{Diagram} \\xrightarrow{\\text{Lambeq}} \\text{Circuit}(\\theta)`,
          meaning: `Lambeq converts a grammatical diagram into a parameterised quantum circuit with rotation angles \\theta.`,
          interpretation: `Each wire in the diagram becomes a qubit. Each cup (grammatical reduction) becomes a Bell state preparation and partial trace. Each word box becomes a parameterised unitary.`,
        },
      ],
      variables: [
        { symbol: `\\ket{\\psi}_{\\text{type}}`, name: `Word Quantum State`, description: `Quantum state representation of a word in a Hilbert space labelled by its grammatical type` },
        { symbol: `\\otimes`, name: `Tensor Product`, description: `Combines word states into a composite sentence state` },
        { symbol: `n, s`, name: `Grammatical Types`, description: `Noun and sentence types in pregroup grammar` },
        { symbol: `n^l, n^r`, name: `Adjoint Types`, description: `Left and right adjoints enabling type reduction` },
      ],
      interactive: {
        equation: `\\text{Meaning}(\\text{SVO}) = \\text{Cups} \\circ (|\\text{Subject}\\rangle \\otimes |\\text{Verb}\\rangle \\otimes |\\text{Object}\\rangle)`,
        description: `Explore how different sentence structures produce different quantum circuit topologies in Lambeq:`,
        variables: [
          { symbol: `S`, name: `Subject`, description: `Noun type word (subject position)` },
          { symbol: `V`, name: `Verb`, description: `Transitive verb with type n^r·s·n^l` },
          { symbol: `O`, name: `Object`, description: `Noun type word (object position)` },
        ],
        sliders: [
          { name: `param`, label: `Circuit Parameter (rotation angle)`, min: 0, max: 6.28, step: 0.01, default: 1.57 },
        ],
      },
      charts: [
        {
          title: `Lambeq Pipeline Stages — Circuit Size Progression`,
          type: `bar`,
          data: [
            { Stage: `Parse Diagram`, Qubits: 0, Gates: 0 },
            { Stage: `Rewritten Diagram`, Qubits: 4, Gates: 0 },
            { Stage: `Quantum Circuit`, Qubits: 4, Gates: 12 },
            { Stage: `Simplified Circuit`, Qubits: 3, Gates: 8 },
          ],
        },
        {
          title: `Supported Diagram Types in Lambeq`,
          type: `bar`,
          data: [
            { Type: `Pregroup Diagram`, Usage: 40 },
            { Type: `Spider Diagram`, Usage: 25 },
            { Type: `Quantum Circuit`, Usage: 20 },
            { Type: `String Diagram`, Usage: 15 },
          ],
        },
      ],
      advantages: `Lambeq automates the translation from linguistic structure to quantum circuits, ensuring grammatical correctness. It supports multiple ansatzes for circuit depth flexibility, provides diagram rewriting for optimisation, and integrates with Qiskit and PennyLane.`,
      limitations: `Lambeq is relatively new with a smaller community than Qiskit or PennyLane. The documentation, while improving, has fewer real-world examples. Complex sentence structures can produce deep circuits requiring many qubits.`,
    },
    activities: [
      {
        title: `Lambeq Pipeline Walkthrough`,
        description: `Students use Lambeq to parse a simple sentence and trace it through the entire pipeline from text to quantum circuit.`,
        steps: [
          `Import lambeq modules: BobcatParser, Rewriter, CircuitFactory`,
          `Parse the sentence "Dogs chase cats" using BobcatParser`,
          `Visualise the pregroup derivation diagram using .draw()`,
          `Apply rewrite rules using Rewriter to simplify the diagram`,
          `Convert to quantum circuit using IQPAnsatz and visualise the circuit`,
        ],
        materials: `Jupyter notebook with Lambeq installed, example sentences worksheet`,
        timeRequired: `12 min`,
        outcomes: `Students can run the full Lambeq pipeline from sentence to quantum circuit.`,
        rubrics: `Correct parsing, meaningful diagram simplification, successful circuit generation`,
      },
      {
        title: `Diagram Rewriting Exploration`,
        description: `Students experiment with different rewrite rules to see how they affect circuit depth and complexity.`,
        steps: [
          `Parse a sentence and display the original diagram`,
          `Apply the "cup" rewrite rule and observe changes`,
          `Apply the "spider" rewrite rule`,
          `Apply all rewrite rules and compare the original vs rewritten diagram`,
          `Generate circuits from both diagrams and compare gate counts`,
        ],
        materials: `Rewrite rule documentation, comparison worksheet`,
        timeRequired: `10 min`,
        outcomes: `Students understand how rewrite rules optimise diagrams for quantum execution.`,
        rubrics: `Correct application of rewrite rules, meaningful comparison metrics, understanding of optimisation trade-offs`,
      },
      {
        title: `Circuit Ansatz Comparison`,
        description: `Students generate circuits using different ansatz options in Lambeq and compare their properties.`,
        steps: [
          `Parse the same sentence for all comparisons`,
          `Generate a circuit using IQPAnsatz (default)`,
          `Generate a circuit using Sim14Ansatz (sim14)`,
          `Generate a circuit using MPSAnsatz (Matrix Product State)`,
          `Compare qubit counts, gate counts, and circuit depth across ansatzes`,
        ],
        materials: `Ansatz documentation, comparison table template`,
        timeRequired: `10 min`,
        outcomes: `Students understand how ansatz choice affects circuit complexity for QNLP.`,
        rubrics: `Correct ansatz configuration, accurate comparison data, thoughtful analysis of trade-offs`,
      },
      {
        title: `Group Debugging: Fix the Parse`,
        description: `Given a sentence that Lambeq parses incorrectly, identify the issue and adjust the sentence or parser settings.`,
        steps: [
          `Receive a "broken" sentence: "The dog chase cat" (subject-verb agreement error)`,
          `Parse it and observe the incorrect diagram`,
          `Use the wrong_parse attribute to see alternative parses`,
          `Correct the grammar and re-parse`,
          `Discuss: what kinds of grammatical errors break Lambeq's parser?`,
        ],
        materials: `Worksheet with error sentences, Lambeq parser documentation`,
        timeRequired: `8 min`,
        outcomes: `Students develop debugging skills for Lambeq parsing issues.`,
        rubrics: `Correct identification of parse errors, successful fix, insightful discussion of parser limitations`,
      },
    ],
    project: {
      scope: `Create a Lambeq pipeline script that takes a sentence, generates a parameterised quantum circuit, and outputs both the diagram visualisation and circuit summary statistics (qubits, gates, depth).`,
      objectives: [
        `Implement the full Lambeq pipeline: parse, rewrite, circuit generation`,
        `Visualise both the pregroup diagram and the quantum circuit`,
        `Experiment with at least two different ansatzes`,
        `Report circuit statistics for different sentence structures`,
      ],
      timeline: [
        { phase: `Set up parser and test sentences`, duration: `3 min`, percent: 15 },
        { phase: `Implement diagram rewrite pipeline`, duration: `5 min`, percent: 25 },
        { phase: `Circuit generation and ansatz comparison`, duration: `7 min`, percent: 35 },
        { phase: `Visualisation and reporting`, duration: `5 min`, percent: 25 },
      ],
      teamRoles: [
        { role: `Parser Specialist`, responsibility: `Configure BobcatParser and handle different sentence structures` },
        { role: `Circuit Engineer`, responsibility: `Generate circuits with different ansatzes and compare` },
        { role: `Visualisation Lead`, responsibility: `Create clear visualisations of diagrams and circuits` },
      ],
      deliverables: [
        `Python script implementing the complete Lambeq pipeline`,
        `Visualisation files (diagram and circuit images) for 3 test sentences`,
        `Comparison table of circuit statistics across ansatzes`,
      ],
    },
    questions: [
      {
        question: `What is the primary function of Lambeq in the QNLP pipeline?`,
        answer: `Lambeq translates pregroup grammar derivations of sentences into parameterised quantum circuits that can be executed on quantum computers.`,
        explanation: `Lambeq implements the DisCoCat model: words become quantum states, grammatical structure determines how they combine via cup operations, and the resulting sentence meaning is encoded in the output quantum state.`,
        commonMistake: `Thinking Lambeq executes circuits — it only generates them. Execution is handled by Qiskit or another backend.`,
      },
      {
        question: `What are rewrite rules in Lambeq and why are they useful?`,
        answer: `Rewrite rules transform the grammatical diagram into simpler forms without changing the meaning, reducing the complexity of the resulting quantum circuit.`,
        explanation: `Rules like "cup rewriting" and "spider rewriting" remove redundant operations, reducing the number of qubits and gates needed. This is essential for running on limited NISQ hardware.`,
        tip: `Always apply rewrite rules before converting to a circuit — they can dramatically reduce resource requirements.`,
      },
      {
        question: `What is an ansatz in Lambeq and how does it affect the circuit?`,
        answer: `An ansatz determines how word boxes in the diagram are converted into parameterised quantum gates, affecting circuit depth, qubit count, and expressivity.`,
        explanation: `IQPAnsatz uses a simple IQP-style circuit. Sim14Ansatz provides a more expressive 14-parameter template. MPSAnsatz uses matrix product state structure. The ansatz choice trades off expressivity against circuit complexity.`,
      },
    ],
    virtualLab: {
      description: `Interactive Lambeq pipeline explorer. Enter a sentence, see the pregroup derivation, apply rewrite rules interactively, and watch the quantum circuit take shape step by step.`,
      steps: [
        `Enter a sentence (e.g., "Cats purr" or "John loves Mary")`,
        `View the pregroup derivation diagram with word types displayed`,
        `Click "Apply Rewrites" to see diagram simplification in real time`,
        `Select an ansatz from the dropdown (IQP, Sim14, MPS)`,
        `Generate the quantum circuit and inspect qubits, gates, and depth`,
      ],
      stepDetails: [
        `Input panel: text box for sentence entry with example buttons. Parse tree shown on the right with types n, s, n^r, n^l on each word`,
        `Diagram viewer: interactive zoom/pan. Each word box is clickable to see its type. Cup wires show grammatical reductions between types`,
        `Rewrite panel: toggle buttons for each rewrite rule (cup, spider, functorial). Changes animate the diagram transformation`,
        `Ansatz selector: dropdown with IQPAnsatz, Sim14Ansatz, MPSAnsatz. Each shows a preview of the circuit template`,
        `Circuit panel: generated circuit with parameterised gates. Hover over any gate to see its unitary matrix. Statistics bar shows qubit count, gate count, depth, and parameter count`,
      ],
      completionMessage: `You have mastered Lambeq! You can translate any sentence into a parameterised quantum circuit ready for QNLP tasks.`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[BobcatParser]
        B --> C[Pregroup Derivation]
        C --> D[Rewrite Rules]
        D --> E[Simplified Diagram]
        E --> F[CircuitFactory + Ansatz]
        F --> G[Parameterised Quantum Circuit]
        G --> H[Qiskit Backend]
        H --> I[Measurement Results]
        G --> J[PennyLane Optimiser]
        J --> K[Updated Parameters]
        K --> G`,
    },
    insights: {
      advantages: [
        `Purpose-built for QNLP — no other framework converts grammar directly to quantum circuits`,
        `Grounded in rigorous category theory (DisCoCat model)`,
        `Multiple ansatz options for different hardware constraints`,
        `Integrates with Qiskit and PennyLane for execution and optimisation`,
      ],
      disadvantages: [
        `Relatively new and smaller community compared to Qiskit/PennyLane`,
        `Limited to pregroup grammar — other linguistic formalisms not supported`,
        `Complex sentences produce large circuits beyond current NISQ hardware capacity`,
        `Documentation has limited real-world examples beyond toy sentences`,
      ],
      futureScope: `Lambeq is actively developed by Quantinuum with plans for more ansatzes, better rewrite optimisation, native support for error mitigation, and integration with Quantinuum's H-series trapped-ion quantum computers.`,
      industrialApplications: [
        `Quantum-native sentiment analysis for social media monitoring`,
        `Automated document classification in legal and financial sectors`,
        `Question answering systems with quantum-enhanced reasoning`,
        `Natural language interfaces for quantum computing platforms`,
      ],
      careerRelevance: `Lambeq is the only purpose-built QNLP framework in existence. Early expertise in Lambeq is a distinctive skill that positions you at the forefront of the intersection of quantum computing and NLP.`,
    },
  },

  '9.5': {
    topicId: '9.5',
    learningObjective: `Set up a complete QNLP development environment with Python, Qiskit, PennyLane, Lambeq, and supporting libraries, and verify the installation with a test pipeline.`,
    nextPrep: `Ensure Python 3.9+ is installed on your machine. Create a fresh virtual environment for the QNLP workshop to avoid dependency conflicts.`,
    dependencyGraph: `flowchart LR
      A[9.2 Qiskit] --> D[9.5 Dev Setup]
      B[9.3 PennyLane] --> D
      C[9.4 Lambeq] --> D
      D --> E[9.6 Lab]
      style D fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Imagine you are an astronaut preparing for a mission to Mars. Before you can explore the red planet, you must build the rocket, install the navigation system, pack the supplies, and run countless tests on the ground. The launch pad is your development environment — if it is not built correctly, the mission fails before it begins. Setting up your QNLP development environment is like preparing that launch pad. You need Python (the rocket frame), Qiskit (the engines), PennyLane (the navigation computer), and Lambeq (the Mars rover itself). Installing and configuring each component correctly, with compatible versions, is the essential groundwork for the exciting quantum NLP explorations ahead.`,
      questions: [
        `Why is it important to use a virtual environment for Python projects?`,
        `What problems can arise from incompatible package versions?`,
        `How would you diagnose and fix a broken installation?`,
      ],
      connection: `A properly configured development environment is the foundation of all practical QNLP work. No matter how well you understand the theory, if your environment is not set up correctly, you cannot execute circuits, run experiments, or build models. This topic turns theoretical knowledge into practical capability.`,
      technicalIntro: `A complete QNLP development environment requires: Python 3.9+ as the base runtime; Qiskit 1.0+ (qiskit and qiskit-aer) for circuit construction and simulation; PennyLane with the Qiskit plugin (pennylane and pennylane-qiskit) for differentiable quantum computing; Lambeq (lambeq) for linguistic-to-quantum translation. Supporting libraries include numpy, scipy, matplotlib for data analysis and visualisation, and jupyter for interactive development. Version compatibility is critical — each framework evolves independently, and breaking changes are common. A dedicated virtual environment (conda or venv) isolates these dependencies from other projects.`,
      lifeSkills: `Setting up development environments teaches dependency management, troubleshooting, and systematic debugging — skills that transfer directly to software engineering, data science, and any technical field where multiple tools must work together.`,
    },
    mathModelling: {
      need: `Verifying a correct installation requires running test computations that exercise each framework's core functionality.`,
      motivation: `A silent installation failure (e.g., wrong version, missing plugin) can waste hours of debugging later. Systematic verification saves time.`,
      challenge: `Modelling the dependency graph of QNLP packages to understand version constraints and compatibility requirements.`,
      equations: [
        {
          latex: `\\text{Compatible}(A, B) \\iff \\text{version}(A) \\in \\text{supported}(B)`,
          meaning: `Two packages A and B are compatible if A's version is within the range supported by B.`,
          interpretation: `For example, PennyLane 0.35 may only support Qiskit 1.0+. The compatibility relationship is not symmetric and changes with each release.`,
        },
        {
          latex: `\\text{Verify}(\\text{env}) = \\mathbb{1}_{\\text{Qiskit}}(\\text{circuit}) \\land \\mathbb{1}_{\\text{PennyLane}}(\\text{gradient}) \\land \\mathbb{1}_{\\text{Lambeq}}(\\text{parse})`,
          meaning: `Environment verification succeeds if and only if all three frameworks pass their smoke tests.`,
          interpretation: `A smoke test creates a simple circuit in Qiskit, computes a gradient in PennyLane, and parses a sentence in Lambeq. If all three succeed, the environment is ready.`,
        },
        {
          latex: `t_{\\text{setup}} = t_{\\text{install}} + t_{\\text{config}} + t_{\\text{verify}}`,
          meaning: `Total setup time is the sum of installation, configuration, and verification time.`,
          interpretation: `Using a package manager (pip/conda) minimises t_install. Using a requirements.txt file with pinned versions ensures reproducibility and reduces t_config.`,
        },
      ],
      variables: [
        { symbol: `\\text{env}`, name: `Development Environment`, description: `Complete Python environment with all QNLP packages` },
        { symbol: `\\mathbb{1}_{\\text{test}}`, name: `Indicator Function`, description: `Returns 1 if the test passes, 0 otherwise` },
        { symbol: `t_{\\text{setup}}`, name: `Setup Time`, description: `Total time to prepare a working environment` },
      ],
      interactive: {
        equation: `\\text{Verify} = \\text{Qiskit} \\;\\land\\; \\text{PennyLane} \\;\\land\\; \\text{Lambeq}`,
        description: `Click each framework to run its smoke test and check your environment status:`,
        variables: [
          { symbol: `Q`, name: `Qiskit Test`, description: `Creates a Bell state circuit and runs on Aer simulator` },
          { symbol: `P`, name: `PennyLane Test`, description: `Creates a QNode and computes a gradient` },
          { symbol: `L`, name: `Lambeq Test`, description: `Parses a sentence and generates a circuit` },
        ],
        sliders: [],
      },
      charts: [
        {
          title: `Package Dependencies in QNLP Environment`,
          type: `bar`,
          data: [
            { Package: `Python`, Dependencies: 0, Size_MB: 30 },
            { Package: `numpy`, Dependencies: 0, Size_MB: 15 },
            { Package: `scipy`, Dependencies: 2, Size_MB: 25 },
            { Package: `matplotlib`, Dependencies: 4, Size_MB: 12 },
            { Package: `qiskit`, Dependencies: 8, Size_MB: 40 },
            { Package: `pennylane`, Dependencies: 6, Size_MB: 35 },
            { Package: `lambeq`, Dependencies: 5, Size_MB: 20 },
            { Package: `jupyter`, Dependencies: 10, Size_MB: 50 },
          ],
        },
        {
          title: `Installation Success Rate by Method`,
          type: `bar`,
          data: [
            { Method: `pip (requirements.txt)`, Success: 85 },
            { Method: `conda environment`, Success: 90 },
            { Method: `docker container`, Success: 95 },
            { Method: `manual install`, Success: 60 },
          ],
        },
      ],
      advantages: `A properly set up environment ensures reproducibility, avoids version conflicts, and provides a stable foundation for QNLP development. Using pinned versions guarantees that code works the same way across different machines.`,
      limitations: `Dependency conflicts are common, especially between Qiskit and PennyLane which both depend on different versions of common packages. Hardware-specific drivers (e.g., for GPU simulation) add additional complexity.`,
    },
    activities: [
      {
        title: `Guided Installation`,
        description: `Step-by-step guided installation of the QNLP development environment with live troubleshooting.`,
        steps: [
          `Create a virtual environment: python -m venv qnlp_env`,
          `Activate the environment and upgrade pip`,
          `Install Qiskit: pip install qiskit qiskit-aer`,
          `Install PennyLane with Qiskit support: pip install pennylane pennylane-qiskit`,
          `Install Lambeq: pip install lambeq`,
        ],
        materials: `Installation guide handout, requirements.txt file with pinned versions`,
        timeRequired: `10 min`,
        outcomes: `All students have a working QNLP development environment.`,
        rubrics: `Successful installation of all packages, ability to import all frameworks without errors`,
      },
      {
        title: `Smoke Test Workstation`,
        description: `Students run a comprehensive smoke test script that verifies each framework's core functionality.`,
        steps: [
          `Run the Qiskit smoke test: create a Bell state circuit, simulate, verify counts`,
          `Run the PennyLane smoke test: define a QNode, compute a gradient, check numerical correctness`,
          `Run the Lambeq smoke test: parse "Dogs chase cats", generate circuit, check qubit count`,
          `Run the integration test: pass Lambeq's circuit to Qiskit, simulate, get results`,
          `Report any failures to the instructor for debugging`,
        ],
        materials: `Smoke test script (smoke_test.py), troubleshooting guide`,
        timeRequired: `10 min`,
        outcomes: `All students verify their environment is fully functional.`,
        rubrics: `All 4 tests pass, successful troubleshooting of any failures`,
      },
      {
        title: `Version Compatibility Check`,
        description: `Students check installed versions against known-compatible combinations and resolve any mismatches.`,
        steps: [
          `Run python -c to print versions of qiskit, pennylane, lambeq`,
          `Compare against the compatibility matrix in the handout`,
          `If versions are mismatched, create a new environment with correct pinned versions`,
          `Document the working version combination for future reference`,
        ],
        materials: `Version compatibility matrix, requirements.txt template`,
        timeRequired: `8 min`,
        outcomes: `Students understand version compatibility requirements.`,
        rubrics: `Correct version identification, successful resolution of any mismatches, documentation`,
      },
      {
        title: `Installation Troubleshooting Workshop`,
        description: `Common installation problems and their solutions are presented and practiced.`,
        steps: [
          `Review the top 5 installation errors and their solutions`,
          `Each student intentionally introduces a version mismatch, then diagnoses and fixes it`,
          `Practice using pip's dependency resolver: pip check`,
          `Learn to read error messages to identify the root cause`,
        ],
        materials: `Troubleshooting guide, common error examples`,
        timeRequired: `8 min`,
        outcomes: `Students can independently diagnose and fix installation issues.`,
      },
    ],
    project: {
      scope: `Create a Dockerfile or conda environment.yml file that sets up a reproducible QNLP development environment with pinned versions, along with a comprehensive smoke test script.`,
      objectives: [
        `Specify pinned versions for all packages`,
        `Include all dependencies (numpy, scipy, matplotlib, jupyter)`,
        `Create a smoke test that verifies the complete pipeline`,
        `Document the setup process in a README`,
      ],
      timeline: [
        { phase: `Research compatible versions`, duration: `5 min`, percent: 20 },
        { phase: `Create environment specification`, duration: `5 min`, percent: 25 },
        { phase: `Write smoke test script`, duration: `5 min`, percent: 25 },
        { phase: `Test and document`, duration: `5 min`, percent: 30 },
      ],
      teamRoles: [
        { role: `Environment Architect`, responsibility: `Create the reproducible environment specification` },
        { role: `Test Engineer`, responsibility: `Write the comprehensive smoke test` },
        { role: `Documentation Lead`, responsibility: `Write clear setup instructions` },
      ],
      deliverables: [
        `environment.yml or Dockerfile`,
        `smoke_test.py script`,
        `Setup documentation with troubleshooting section`,
      ],
    },
    questions: [
      {
        question: `Why should you use a virtual environment for QNLP development?`,
        answer: `A virtual environment isolates QNLP package versions from other Python projects, preventing dependency conflicts and ensuring reproducibility.`,
        explanation: `Different projects may require different versions of the same package. A virtual environment creates an isolated Python installation where you can install specific versions without affecting other projects.`,
        commonMistake: `Installing all packages globally — this inevitably leads to version conflicts when working on multiple projects.`,
        tip: `Use conda or python -m venv for every project. It takes 30 seconds and saves hours of debugging.`,
      },
      {
        question: `What should you do if pip install lambeq fails with a dependency error?`,
        answer: `Check the error message for the specific conflict, create a fresh virtual environment, and install with pinned compatible versions from the QNLP compatibility matrix.`,
        explanation: `Dependency errors usually mean a required package version is outside the supported range. Using pinned versions from the compatibility matrix ensures all packages work together.`,
        tip: `Always check the official documentation for each framework to find the recommended version combinations.`,
      },
      {
        question: `What is a smoke test and why is it useful for environment setup?`,
        answer: `A smoke test is a minimal script that verifies each component works correctly, quickly confirming that the environment is properly configured.`,
        explanation: `Instead of discovering installation issues hours into development, a 30-second smoke test immediately catches problems. It tests imports, basic functionality, and framework integration.`,
      },
    ],
    virtualLab: {
      description: `Interactive environment setup assistant that guides you through installation, checks your configuration, and provides real-time feedback and troubleshooting suggestions.`,
      steps: [
        `Select your operating system (Windows, macOS, Linux)`,
        `Follow the step-by-step installation wizard`,
        `Click "Run Smoke Test" after each framework installation`,
        `View the compatibility report showing all installed versions and their status`,
        `If issues are detected, the assistant suggests specific fixes`,
      ],
      stepDetails: [
        `OS selector customises installation commands for your platform. Shows Python version check first`,
        `Installation wizard presents one command at a time with a "Copy & Run" button and "Done" confirmation`,
        `Smoke test button runs a lightweight check: import + basic operation. Green check or red X feedback`,
        `Compatibility report shows each package, its version, the expected version range, and a pass/fail status`,
        `Troubleshooting panel: click any failed test to see common causes and suggested fixes with command examples`,
      ],
      completionMessage: `Your QNLP development environment is fully set up and verified! You are ready to start building quantum language models.`,
      dataFlow: `flowchart LR
        A[Python Installation] --> B[Virtual Environment]
        B --> C[pip install qiskit]
        C --> D{Qiskit Smoke Test}
        D -->|Pass| E[pip install pennylane]
        D -->|Fail| F[Debug Qiskit]
        F --> C
        E --> G{PennyLane Smoke Test}
        G -->|Pass| H[pip install lambeq]
        G -->|Fail| I[Debug PennyLane]
        I --> E
        H --> J{Lambeq Smoke Test}
        J -->|Pass| K[Integration Test]
        J -->|Fail| L[Debug Lambeq]
        L --> H
        K --> M{All Tests Pass}
        M -->|Yes| N[Environment Ready]
        M -->|No| O[Report Issues]`,
    },
    insights: {
      advantages: [
        `Reproducible environment ensures code works across different machines`,
        `Virtual environment prevents dependency conflicts with other projects`,
        `Smoke tests provide immediate verification of correct setup`,
        `Pinned versions protect against breaking changes in future releases`,
      ],
      disadvantages: [
        `Initial setup takes 10-15 minutes`,
        `Framework version compatibility requires ongoing maintenance`,
        `Some packages may not be available on all platforms (e.g., Windows)`,
        `GPU-accelerated simulation (Qiskit-Aer GPU) requires additional CUDA setup`,
      ],
      futureScope: `Containerisation (Docker) and cloud-based development environments (IBM Quantum Lab, Google Colab with PennyLane) are making QNLP environment setup increasingly accessible without local installation.`,
      industrialApplications: [
        `Reproducible ML pipelines in production environments`,
        `CI/CD testing for quantum software projects`,
        `Educational environments for quantum computing courses`,
        `Cross-platform development for hybrid quantum-classical applications`,
      ],
      careerRelevance: `Environment setup and dependency management are fundamental software engineering skills. Quantum computing adds an extra layer of complexity due to rapidly evolving frameworks — making this expertise particularly valuable.`,
    },
  },

  '9.6': {
    topicId: '9.6',
    learningObjective: `Apply the three QNLP frameworks (Qiskit, PennyLane, Lambeq) in a hands-on lab session, running simulated workflows that demonstrate the complete pipeline from sentence to classification.`,
    nextPrep: `Ensure your development environment from 9.5 is working. Review the Lambeq parser examples and Qiskit circuit basics.`,
    dependencyGraph: `flowchart LR
      A[9.2 Qiskit] --> D[9.6 Lab]
      B[9.3 PennyLane] --> D
      C[9.4 Lambeq] --> D
      E[9.5 Setup] --> D
      style D fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `Think of this lab as a flight simulator for quantum NLP pilots. Before you fly a real plane (deploy a QNLP model on quantum hardware), you practice in a simulator where there are no risks, you can pause and examine every system, and you can repeat exercises until they become second nature. This lab simulates the complete QNLP workflow: you will load sentences, parse them with Lambeq, generate circuits, run them on Qiskit's simulator, and optimise parameters with PennyLane — all without needing an actual quantum computer. By the end of this lab, you will have flown the complete QNLP mission in the simulator, ready to take on real quantum hardware.`,
      questions: [
        `How does working in a simulated environment prepare you for real quantum hardware?`,
        `What parts of the QNLP pipeline can you explore without a real quantum computer?`,
        `What insights from this lab will transfer directly to real quantum hardware experiments?`,
      ],
      connection: `This lab ties together everything from Modules 9.1-9.5 into a concrete, hands-on experience. You will use each framework for its specialised role, see how data flows between them, and debug issues in a safe simulated environment. This is the practical culmination of all the theoretical concepts covered so far.`,
      technicalIntro: `In this lab, you will work with a simulated QNLP pipeline. The lab environment provides mock implementations that behave identically to the real frameworks but run locally without requiring IBM Quantum API keys or internet access. You will classify simple sentences (e.g., "Cats purr" as positive, "Dogs bark" as neutral) using a complete pipeline: Lambeq parses the sentence, generates a parameterised quantum circuit; Qiskit Aer simulates the circuit execution; PennyLane computes gradients and updates parameters. A visual dashboard shows the circuit, the measurement results, and the training progress.`,
      lifeSkills: `This lab develops end-to-end thinking — understanding how components interact in a complete system. This holistic perspective is essential for any field where you build complex systems from multiple parts.`,
    },
    mathModelling: {
      need: `The lab demonstrates the complete mathematical pipeline from linguistic input to classification output through quantum circuit execution and optimisation.`,
      motivation: `Seeing the theoretical concepts work together in a concrete implementation bridges the gap between abstract knowledge and practical capability.`,
      challenge: `Modelling the end-to-end information flow: how a sentence like "Cats purr" becomes a quantum circuit, a measurement result, and finally a classification label.`,
      equations: [
        {
          latex: `y = \\text{argmax}_k \\; \\text{Counts}_k(\\text{Qiskit.run}(\\text{Lambeq.circuit}(\\text{sentence}, \\theta)))`,
          meaning: `Classification: measure the circuit generated by Lambeq for the sentence, run on Qiskit, and pick the class with the highest count.`,
          interpretation: `The sentence is parsed by Lambeq into a parameterised circuit. Qiskit runs the circuit multiple times (shots). The measurement outcome with the highest frequency determines the predicted class.`,
        },
        {
          latex: `\\mathcal{L}(\\theta) = -\\sum_k y_k \\log p_k(\\theta)`,
          meaning: `Cross-entropy loss between true labels y_k and predicted probabilities p_k(\\theta).`,
          interpretation: `PennyLane minimises this loss by computing gradients via the parameter-shift rule and updating \\theta. The predicted probabilities p_k come from the normalised measurement counts.`,
        },
        {
          latex: `\\text{Accuracy} = \\frac{\\text{Correct predictions}}{\\text{Total predictions}} \\times 100\\%`,
          meaning: `Classification accuracy on the test set after training.`,
          interpretation: `A well-trained QNLP model should achieve > 80% accuracy on simple binary sentiment classification tasks, demonstrating that the quantum circuit has learned to distinguish sentence meanings.`,
        },
      ],
      variables: [
        { symbol: `y`, name: `Predicted Class`, description: `The classification label predicted by the QNLP model` },
        { symbol: `p_k(\\theta)`, name: `Probability of Class k`, description: `Softmax-normalised measurement counts for class k` },
        { symbol: `\\text{Counts}_k`, name: `Measurement Counts`, description: `Raw counts of measurement outcome k from circuit execution` },
      ],
      interactive: {
        equation: `p(\\text{positive}) = \\frac{\\text{Counts}_{00} + \\text{Counts}_{01}}{\\text{Total shots}}`,
        description: `Adjust the circuit parameters and observe how the classification probabilities change in real time:`,
        variables: [
          { symbol: `\\theta_1`, name: `First Parameter`, description: `Rotation angle for first word embedding` },
          { symbol: `\\theta_2`, name: `Second Parameter`, description: `Rotation angle for second word embedding` },
        ],
        sliders: [
          { name: `theta1`, label: `\\theta_1 (word 1 rotation)`, min: 0, max: 6.28, step: 0.01, default: 1.57 },
          { name: `theta2`, label: `\\theta_2 (word 2 rotation)`, min: 0, max: 6.28, step: 0.01, default: 3.14 },
        ],
      },
      charts: [
        {
          title: `Lab Experiment: Training Accuracy Over Epochs`,
          type: `line`,
          data: [
            { name: `Epoch 1`, Accuracy: 52, Loss: 0.69 },
            { name: `Epoch 5`, Accuracy: 58, Loss: 0.65 },
            { name: `Epoch 10`, Accuracy: 65, Loss: 0.58 },
            { name: `Epoch 15`, Accuracy: 71, Loss: 0.51 },
            { name: `Epoch 20`, Accuracy: 76, Loss: 0.45 },
            { name: `Epoch 25`, Accuracy: 80, Loss: 0.40 },
            { name: `Epoch 30`, Accuracy: 83, Loss: 0.36 },
          ],
        },
        {
          title: `Measurement Outcome Distribution for "Cats purr"`,
          type: `bar`,
          data: [
            { outcome: `00`, Negative: 20, Neutral: 15, Positive: 5 },
            { outcome: `01`, Negative: 10, Neutral: 20, Positive: 10 },
            { outcome: `10`, Negative: 5, Neutral: 10, Positive: 20 },
            { outcome: `11`, Negative: 15, Neutral: 5, Positive: 15 },
          ],
        },
      ],
      advantages: `The simulated lab provides a safe environment for experimentation, instant feedback, and the ability to inspect every intermediate step of the QNLP pipeline without the overhead of real quantum hardware access.`,
      limitations: `Simulation does not capture real hardware noise, decoherence, or gate errors. Models that work perfectly in simulation may need significant adaptation for real quantum processors.`,
    },
    activities: [
      {
        title: `Lab 1: Lambeq Parsing and Circuit Generation`,
        description: `Students parse a set of sentences and generate their corresponding quantum circuits, exploring how different sentence structures produce different circuits.`,
        steps: [
          `Open the lab Jupyter notebook (lab1_lambeq.ipynb)`,
          `Parse 5 given sentences using BobcatParser`,
          `Visualise the pregroup derivation for each sentence`,
          `Generate circuits using IQPAnsatz`,
          `Compare circuit diagrams for sentences with different grammatical structures`,
        ],
        materials: `Lab notebook, example sentences, circuit comparison worksheet`,
        timeRequired: `10 min`,
        outcomes: `Students can automatically generate quantum circuits from sentences using Lambeq.`,
        rubrics: `Correct parsing of all 5 sentences, successful circuit generation, meaningful diagram comparison`,
      },
      {
        title: `Lab 2: Qiskit Circuit Execution and Analysis`,
        description: `Students take Lambeq-generated circuits and execute them on Qiskit's Aer simulator, analysing measurement outcomes.`,
        steps: [
          `Import Lambeq-generated circuit into Qiskit format`,
          `Set up Aer simulator with 1000 shots`,
          `Execute the circuit and collect measurement counts`,
          `Plot the measurement histogram`,
          `Repeat with different numbers of shots (100, 500, 2000) and compare stability`,
        ],
        materials: `Lab notebook, circuits from Lab 1, Qiskit analysis template`,
        timeRequired: `10 min`,
        outcomes: `Students can execute quantum circuits and analyse measurement outcomes.`,
        rubrics: `Correct circuit execution, meaningful histogram analysis, understanding of shot statistics`,
      },
      {
        title: `Lab 3: PennyLane Parameter Optimisation`,
        description: `Students train the circuit parameters using PennyLane to perform binary sentiment classification on a small dataset.`,
        steps: [
          `Load the synthetic dataset: 10 positive sentences, 10 negative sentences`,
          `Initialise circuit parameters randomly`,
          `Define cross-entropy loss function`,
          `Run 50 epochs of Adam optimisation`,
          `Plot the loss curve and evaluate final accuracy`,
        ],
        materials: `Lab notebook, synthetic dataset, PennyLane training template`,
        timeRequired: `15 min`,
        outcomes: `Students train a QNLP model end-to-end using PennyLane optimisation.`,
        rubrics: `Decreasing loss curve, > 70% final accuracy, correct training loop implementation`,
      },
      {
        title: `Lab 4: Complete Pipeline — Sentence to Classification`,
        description: `Students run the complete integrated pipeline, combining Lambeq, Qiskit, and PennyLane for end-to-end sentence classification.`,
        steps: [
          `Import all three frameworks in a single notebook`,
          `Define the pipeline function: sentence -> parse -> circuit -> execute -> classify`,
          `Test on 5 new sentences not seen during training`,
          `Visualise the complete pipeline with intermediate outputs at each stage`,
          `Discuss: how would you improve the pipeline?`,
        ],
        materials: `Integration notebook template, test sentences worksheet`,
        timeRequired: `15 min`,
        outcomes: `Students can run the complete QNLP pipeline from sentence to classification.`,
        rubrics: `Successful end-to-end pipeline, correct classification of test sentences, insightful improvement suggestions`,
      },
    ],
    project: {
      scope: `Build a complete QNLP sentence classifier using Lambeq, Qiskit, and PennyLane that can classify sentences into positive/negative sentiment with > 75% accuracy on a synthetic test set.`,
      objectives: [
        `Implement Lambeq parsing and circuit generation`,
        `Integrate with Qiskit for circuit execution`,
        `Train circuit parameters with PennyLane optimisation`,
        `Evaluate on a held-out test set`,
        `Document the complete pipeline architecture`,
      ],
      timeline: [
        { phase: `Set up data and parsing`, duration: `5 min`, percent: 15 },
        { phase: `Implement circuit generation`, duration: `5 min`, percent: 20 },
        { phase: `Training loop implementation`, duration: `10 min`, percent: 30 },
        { phase: `Evaluation and analysis`, duration: `5 min`, percent: 20 },
        { phase: `Documentation`, duration: `5 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Pipeline Architect`, responsibility: `Design and implement the end-to-end pipeline integration` },
        { role: `Training Engineer`, responsibility: `Implement and tune the PennyLane optimisation loop` },
        { role: `Evaluation Lead`, responsibility: `Design test set, evaluate accuracy, analyse errors` },
      ],
      deliverables: [
        `Complete pipeline Python script or notebook`,
        `Training loss and accuracy plots`,
        `Test set evaluation report with confusion matrix`,
        `Pipeline architecture diagram`,
      ],
    },
    questions: [
      {
        question: `What is the purpose of using a simulated environment instead of real quantum hardware in this lab?`,
        answer: `Simulation provides instant feedback, allows inspection of all intermediate states, eliminates queue times, and enables rapid prototyping without requiring quantum hardware access or API keys.`,
        explanation: `Simulators like Qiskit Aer compute the exact state vector, giving perfect measurement statistics. This is ideal for learning and debugging, though it does not capture real hardware noise.`,
        commonMistake: `Assuming simulation results will match hardware results exactly — noise and decoherence add significant complications on real quantum processors.`,
        tip: `Use simulation for development and debugging, then test on real hardware when you need to account for noise.`,
      },
      {
        question: `Why does the lab use a synthetic dataset instead of real sentences?`,
        answer: `A synthetic dataset with controlled properties allows focused testing of the QNLP pipeline without the complexities of real-world language variation.`,
        explanation: `Synthetic data ensures the parser works correctly, the classes are balanced, and the learning signal is clear. Once the pipeline works on synthetic data, it can be extended to real datasets.`,
        tip: `Start simple (synthetic, binary, short sentences) and gradually increase complexity as the pipeline matures.`,
      },
      {
        question: `What is the most common source of error when running the complete QNLP pipeline?`,
        answer: `Type mismatches between frameworks — Lambeq outputs a certain circuit format that may need conversion before it can be executed by Qiskit or differentiated by PennyLane.`,
        explanation: `Each framework has its own circuit representation. Lambeq uses lambeq.Circuit, Qiskit uses qiskit.QuantumCircuit, and PennyLane uses pennylane templates. Conversion functions handle these translations but can introduce errors if versions are incompatible.`,
      },
    ],
    virtualLab: {
      description: `Full QNLP pipeline simulator. Enter a sentence, click "Run Pipeline", and watch the sentence flow through Lambeq parsing, circuit generation, Qiskit execution, and PennyLane optimisation — all with interactive visualisations at every step.`,
      steps: [
        `Enter a sentence or select from predefined examples (e.g., "Cats purr")`,
        `Click "Parse" to see the pregroup derivation diagram from Lambeq`,
        `Click "Generate Circuit" to convert the diagram into a parameterised quantum circuit`,
        `Click "Simulate" to run the circuit on Qiskit Aer and see the measurement histogram`,
        `Click "Train" to run PennyLane optimisation and watch the loss decrease and parameters update`,
      ],
      stepDetails: [
        `Input panel: text box with autocomplete from a predefined word bank. Example buttons for quick loading. Shows the parse tree with grammatical types (n, s, n^r, n^l)`,
        `Parse visualisation: interactive diagram showing word boxes, cup/string connections, and type reductions. Zoom and pan controls`,
        `Circuit panel: generated circuit with coloured gate blocks. Parameter values shown on each rotation gate. Animated circuit depth and qubit count indicators`,
        `Simulation panel: measurement histogram with counts for each outcome. Probability distribution bar chart. Comparison with ideal expected distribution`,
        `Training panel: real-time loss curve (epoch vs loss), parameter trackers showing each θ's value over time, gradient magnitude plot. Accuracy meter showing current validation accuracy`,
      ],
      completionMessage: `You have successfully completed the QNLP lab! You ran the complete pipeline from sentence to classification using Lambeq, Qiskit, and PennyLane in a simulated environment.`,
      dataFlow: `flowchart LR
        A[Input Sentence] --> B[BobcatParser]
        B --> C[Pregroup Diagram]
        C --> D[Rewriter]
        D --> E[Simplified Diagram]
        E --> F[IQPAnsatz]
        F --> G[Parameterised Circuit]
        G --> H[Qiskit Aer Simulator]
        H --> I[Measurement Counts]
        I --> J[Classification Result]
        G --> K[PennyLane Optimiser]
        K --> L{Training Loop}
        L --> M[Loss Computation]
        M --> N{Gradient Check}
        N --> O[Parameter Update]
        O --> G
        L --> P[Converged?]
        P -->|Yes| Q[Final Model]
        P -->|No| M`,
    },
    insights: {
      advantages: [
        `Complete hands-on experience with all three QNLP frameworks in an integrated pipeline`,
        `Safe simulated environment for experimentation without hardware constraints`,
        `Immediate visual feedback at every stage of the pipeline`,
        `Builds confidence for transitioning to real quantum hardware`,
      ],
      disadvantages: [
        `Simulation hides noise and hardware-specific challenges`,
        `Synthetic datasets may not generalise to real language data`,
        `Lab exercises are guided — students may struggle with open-ended exploration`,
        `Limited to small circuits that fit within simulator memory constraints`,
      ],
      futureScope: `This lab experience directly transfers to real quantum hardware experiments. The same pipeline code, with minor modifications for noise mitigation, can run on IBM Quantum processors or Quantinuum's H-series trapped-ion systems.`,
      industrialApplications: [
        `Prototyping QNLP models before cloud hardware deployment`,
        `Educational training for quantum NLP practitioners`,
        `Benchmarking different circuit architectures and ansatzes`,
        `Developing and testing noise mitigation strategies offline`,
      ],
      careerRelevance: `End-to-end QNLP pipeline experience is the most practically relevant skill from this workshop. It demonstrates the ability to integrate multiple quantum computing frameworks and build working quantum NLP systems — a rare and valuable capability.`,
    },
  },
}
