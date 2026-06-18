import type { TopicContent } from './loader'

export const m15Content: Record<string, TopicContent> = {
  '15.1': {
    topicId: `15.1`,
    learningObjective: `Identify real-world problems addressable with QNLP and formulate them as structured project goals.`,
    nextPrep: `Review all previous modules focusing on quantum encoding, variational circuits, and hybrid architectures.`,
    dependencyGraph: `flowchart LR
  A[Module 14: Metrics] --> B[15.1 Problem ID]
  B --> C[15.2 Dataset Selection]
  C --> D[15.3 Solution Design]
  D --> E[15.4 Team Activity]
  E --> F[15.5 Presentation]
  F --> G[15.6 Feedback]
  style B fill:#e74c3c,color:#fff`,
    storytelling: {
      story: `A hospital had thousands of patient records with unstructured clinical notes. Doctors spent hours searching for relevant information. The NLP team tried classical BERT models but computational cost was prohibitive for real-time querying. Could quantum encoding compress these into exponentially smaller spaces? This is the kind of problem you will learn to identify, frame, and solve.`,
      questions: [
        `What problems in your domain feel computationally out of reach?`,
        `How do you determine if a problem benefits from quantum vs classical NLP?`,
        `What makes a QNLP project feasible versus aspirational with current hardware?`,
      ],
      connection: `Problem identification is the most critical phase of any project lifecycle. In QNLP the key is recognising tasks where quantum advantage maps naturally to the problems mathematical structure.`,
      technicalIntro: `The QNLP project lifecycle follows four phases: (1) Problem Identification - recognising NLP challenges where quantum methods offer measurable advantage. (2) Dataset Selection - choosing datasets tractable for NISQ hardware. (3) Solution Design - architecting hybrid pipelines. (4) Validation - rigorous comparison against classical baselines.`,
      lifeSkills: `Learning to ask the right question before jumping to solutions is a superpower in any field. This topic trains critical thinking for problem definition.`,
    },
    mathModelling: {
      need: `A mathematical framework for quantifying QNLP problem suitability is essential before committing resources.`,
      motivation: `Not every NLP problem benefits from quantum computing. We need a decision-theoretic model to evaluate candidates.`,
      challenge: `Formulating a quantitative suitability score that considers Hilbert space dimensionality, linguistic entanglement, and hardware coherence constraints.`,
      equations: [
        {
          latex: `S(\\mathcal{P}) = \\alpha \\cdot \\frac{\\dim(\\mathcal{H}_{\\text{task}})}{\\log_2(text{qubits})} + \\beta \\cdot \\frac{E(\\mathcal{P})}{C_{\\max}} - \\gamma \\cdot \\frac{D(\\mathcal{P})}{T_2}`,
          meaning: `The suitability score balances task Hilbert space dimension, entanglement requirement, circuit depth, and coherence time.`,
          interpretation: `A high score indicates natural mapping to quantum advantages. The first term rewards large representational spaces, the second rewards linguistic entanglement, the third penalises deep circuits.`,
        },
        {
          latex: `\\mathcal{H}_{\\text{task}} = \\bigotimes_{i=1}^{n} \\mathcal{H}_{w_i} \\otimes \\mathcal{H}_{s}`,
          meaning: `The task Hilbert space is the tensor product of word spaces and a sentence-level space for compositional semantics.`,
          interpretation: `This mirrors quantum mechanics tensor product structure. Dimension grows exponentially with vocabulary size where quantum advantage emerges.`,
        },
      ],
      variables: [
        { symbol: `S(\\mathcal{P})`, name: `Suitability Score`, description: `Quantified measure of QNLP problem suitability` },
        { symbol: `\\mathcal{H}_{\\text{task}}`, name: `Task Hilbert Space`, description: `Composite space of all linguistic states` },
        { symbol: `C_{\\max}`, name: `Max Circuit Depth`, description: `Deepest circuit executable on target hardware` },
      ],
      charts: [
        {
          title: `QNLP Problem Suitability by Domain`,
          type: `bar`,
          data: [
            { name: `Sentiment`, Dimension: 3, Entanglement: 2, Feasibility: 4, Overall: 3 },
            { name: `Semantic Parsing`, Dimension: 5, Entanglement: 5, Feasibility: 3, Overall: 4.3 },
            { name: `Machine Translation`, Dimension: 5, Entanglement: 4, Feasibility: 2, Overall: 3.7 },
            { name: `Text Classification`, Dimension: 3, Entanglement: 2, Feasibility: 5, Overall: 3.3 },
            { name: `Relation Extraction`, Dimension: 4, Entanglement: 5, Feasibility: 4, Overall: 4.3 },
          ],
        },
        {
          title: `Project Lifecycle Effort Distribution`,
          type: `pie`,
          data: [
            { name: `Problem Definition`, Effort: 25 },
            { name: `Data Preparation`, Effort: 20 },
            { name: `Solution Design`, Effort: 30 },
            { name: `Implementation`, Effort: 15 },
            { name: `Validation`, Effort: 10 },
          ],
        },
      ],
      advantages: `Systematic problem identification prevents wasted effort and maximises chances of demonstrating quantum advantage.`,
      limitations: `The suitability score is heuristic. Hardware evolves rapidly so assessments need frequent updates.`,
    },
    activities: [
      {
        title: `Problem Brainstorming`,
        description: `Teams brainstorm NLP problems and evaluate them using the suitability framework.`,
        steps: [
          `List 5 NLP problems from daily or professional contexts`,
          `Estimate the task Hilbert space dimension for each`,
          `Score each using the suitability formula`,
          `Select the top candidate for project development`,
        ],
        timeRequired: `15 min`,
        outcomes: `Ranked list of QNLP-suitable problems with justification`,
        rubrics: `Quality of problem framing and scoring correctness`,
      },
      {
        title: `Problem Statement Formulation`,
        description: `Teams refine their problem into a structured statement with scope and success criteria.`,
        steps: [
          `Write a one-paragraph problem statement`,
          `Define 3 measurable success criteria`,
          `List technical constraints (qubit budget, circuit depth)`,
          `Identify 2 classical baselines for comparison`,
        ],
        timeRequired: `10 min`,
        outcomes: `Well-defined problem statement ready for dataset selection`,
        rubrics: `Clarity and measurability of criteria`,
      },
    ],
    project: {
      scope: `Foundation for the mini project. Teams identify, evaluate, and formally define a QNLP problem.`,
      objectives: [
        `Identify a real NLP problem with quantum advantage potential`,
        `Evaluate using the quantitative suitability framework`,
        `Formulate a structured problem statement with success criteria`,
      ],
      timeline: [
        { phase: `Brainstorming`, duration: `10 min`, percent: 30 },
        { phase: `Suitability Evaluation`, duration: `10 min`, percent: 30 },
        { phase: `Problem Statement`, duration: `10 min`, percent: 30 },
        { phase: `Peer Review`, duration: `5 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Project Lead`, responsibility: `Facilitates discussion and ensures progress` },
        { role: `Domain Expert`, responsibility: `Provides domain knowledge about the problem area` },
        { role: `Quantum Analyst`, responsibility: `Evaluates quantum suitability` },
      ],
      deliverables: [
        `Problem statement document`,
        `Suitability score worksheet`,
        `Success criteria list`,
      ],
    },
    questions: [
      {
        question: `What distinguishes a QNLP-suitable problem from a classically-solved one?`,
        answer: `QNLP-suitable problems typically involve high-dimensional semantic spaces, complex linguistic entanglement, or combinatorial optimisation.`,
        explanation: `Quantum advantage comes from representing information in exponentially large Hilbert spaces. Small-vocabulary problems are better classically.`,
        commonMistake: `Assuming any difficult NLP problem benefits from quantum computing.`,
        tip: `Look for problems where linguistic combinations grow exponentially with input size.`,
      },
      {
        question: `How do you formulate a QNLP problem statement?`,
        answer: `Include the NLP task, quantum approach, expected advantage, constraints, and measurable success criteria.`,
        explanation: `A structured problem statement guides all subsequent phases and ensures shared team understanding.`,
        commonMistake: `Defining the problem in terms of the solution rather than the challenge.`,
        tip: `Use SMART: Specific, Measurable, Achievable, Relevant, Time-bound.`,
      },
    ],
    virtualLab: {
      description: `Explore QNLP problem suitability interactively. Select tasks, adjust hardware parameters, see score changes in real time.`,
      steps: [
        `Open the QNLP Problem Suitability Explorer`,
        `Select a predefined NLP task from the gallery`,
        `Adjust hardware parameters (qubits, coherence, fidelity)`,
        `Observe suitability score and recommendation changes`,
      ],
      stepDetails: [
        `10 benchmark NLP tasks with precomputed characteristics`,
        `Hardware params reflect actual NISQ devices (5-100 qubits)`,
        `Score updates in real time with component breakdown`,
        `Custom problems require vocab size, sequence length, task type`,
      ],
      completionMessage: `You can now systematically evaluate NLP problems for QNLP suitability.`,
      dataFlow: `None`,
    },
    insights: {
      advantages: [
        `Systematic selection increases project success rate`,
        `Quantitative scoring removes guesswork from planning`,
        `Early constraint identification prevents roadblocks`,
      ],
      disadvantages: [
        `Suitability scoring is heuristic and may miss novel structures`,
        `Some problems need implementation to discover true suitability`,
      ],
      futureScope: `As hardware matures the range of suitable problems will expand dramatically.`,
      industrialApplications: [
        `Pharmaceutical molecule discovery from literature`,
        `Financial sentiment detection from news feeds`,
        `Healthcare symptom classification from clinical notes`,
      ],
      careerRelevance: `Problem scoping is a core skill for QNLP researchers and engineers.`,
    },
  },
  '15.2': {
    topicId: `15.2`,
    learningObjective: `Select appropriate datasets for QNLP projects considering size, structure, encoding compatibility, and quantum-readiness.`,
    nextPrep: `Familiarise yourself with datasets from Modules 7-12 and their encoding schemes.`,
    dependencyGraph: `flowchart LR
  A[15.1] --> B[15.2 Dataset Selection]
  B --> C[Encoding Strategy]
  B --> D[Quantum Readiness]
  C --> E[15.3]
  D --> E
  style B fill:#3498db,color:#fff`,
    storytelling: {
      story: `A quantum NLP team identified the perfect problem: real-time sentiment for financial news. They designed an 8-qubit circuit. Then they checked the dataset: 500k samples, 200-token sentences. Angle encoding needed 200 qubits per sentence. Back to the drawing board. Dataset selection is a design constraint as fundamental as qubit count.`,
      questions: [
        `How does dataset size affect QNLP project feasibility?`,
        `What makes a dataset quantum-ready versus classically convenient?`,
        `How do you balance representativeness with hardware constraints?`,
      ],
      connection: `In QNLP, dataset selection adds a fourth dimension beyond classical quality/size/relevance: encoding compatibility. It is a constrained optimisation problem.`,
      technicalIntro: `QNLP dataset selection evaluates four criteria: (1) Semantic Richness - does it contain phenomena justifying quantum methods? (2) Dimensionality - does vocab size fit qubit budget? (3) Sequence Length - are sentences within depth limits (<50 tokens for NISQ)? (4) Size - large enough to train without overfitting, small enough for simulators.`,
      lifeSkills: `Constraint-based decision-making is essential everywhere: buying a house, planning a trip, or selecting datasets. Balance multiple factors within real-world limits.`,
    },
    mathModelling: {
      need: `A model to determine optimal dataset size and structure given quantum hardware constraints and encoding overhead.`,
      motivation: `Wrong dataset wastes the quantum advantage. Too small and the model cannot generalise. Too large and training is infeasible.`,
      challenge: `Optimising trade-offs between dataset size N, vocabulary V, sequence length L, and qubit budget Q.`,
      equations: [
        {
          latex: `Q_{\\text{required}} = \\sum_{i=1}^{k} \\lceil \\log_2(\\dim(\\mathcal{H}_{w_i})) \\rceil`,
          meaning: `Total qubits needed equals sum of qubits per word for encoding each words Hilbert space.`,
          interpretation: `For angle encoding with d-dim embeddings, Q = k x d. This quadratic relationship directly constrains dataset selection.`,
        },
        {
          latex: `N_{\\text{min}} = \\frac{P}{\\epsilon} \\cdot \\log\\left(\\frac{1}{\\delta}\\right)`,
          meaning: `Minimum dataset size depends on circuit parameters P, accuracy epsilon, and confidence delta.`,
          interpretation: `A 12-param circuit with 90% accuracy and 95% confidence needs ~360 samples. This guides dataset sizing.`,
        },
        {
          latex: `C_{\\text{dataset}} = N \\cdot (Q_{\\text{enc}} \\cdot D_{\\text{circuit}} + O_{\\text{meas}})`,
          meaning: `Total computational cost depends on samples N, encoding depth, circuit depth, and measurement overhead.`,
          interpretation: `Smaller datasets with shorter sequences may train faster and perform better on NISQ hardware than larger ones.`,
        },
      ],
      variables: [
        { symbol: `Q_{\\text{required}}`, name: `Required Qubits`, description: `Qubits needed to encode dataset features` },
        { symbol: `N_{\\text{min}}`, name: `Minimum Dataset Size`, description: `Smallest dataset for reliable training` },
        { symbol: `P`, name: `Circuit Parameters`, description: `Number of trainable circuit parameters` },
        { symbol: `C_{\\text{dataset}}`, name: `Dataset Cost`, description: `Total computational training cost` },
      ],
      charts: [
        {
          title: `Qubit Requirements by Encoding`,
          type: `line`,
          data: [
            { name: `10 words`, Angle: 10, Amplitude: 4, Basis: 10 },
            { name: `20 words`, Angle: 20, Amplitude: 5, Basis: 20 },
            { name: `50 words`, Angle: 50, Amplitude: 6, Basis: 50 },
            { name: `100 words`, Angle: 100, Amplitude: 7, Basis: 100 },
          ],
        },
        {
          title: `Dataset Size vs Accuracy`,
          type: `scatter`,
          data: [
            { name: `100`, Accuracy: 0.62, Time: 1 },
            { name: `500`, Accuracy: 0.78, Time: 5 },
            { name: `1000`, Accuracy: 0.85, Time: 12 },
            { name: `2000`, Accuracy: 0.89, Time: 30 },
            { name: `5000`, Accuracy: 0.91, Time: 90 },
          ],
        },
      ],
      advantages: `Mathematical selection optimises qubit use, ensures statistical validity, and prevents mid-project data-hardware mismatches.`,
      limitations: `Qubit estimates depend on encoding scheme choice. Minimum size formulas assume ideal conditions.`,
    },
    activities: [
      {
        title: `Dataset Audit`,
        description: `Teams audit three datasets using qubit requirement and cost formulas.`,
        steps: [
          `Obtain 3 candidate datasets for the problem`,
          `Compute Q_required for each`,
          `Estimate N_min based on parameter count`,
          `Compute C_dataset and rank candidates`,
        ],
        timeRequired: `15 min`,
        outcomes: `Optimal dataset selection with quantitative justification`,
        rubrics: `Accuracy of qubit calculations and evaluation thoroughness`,
      },
      {
        title: `Encoding Compatibility Check`,
        description: `Teams verify dataset compatibility with their quantum framework.`,
        steps: [
          `List 3 encoding schemes from the framework`,
          `Compute qubit requirement for each scheme`,
          `Verify circuit depth fits hardware limits`,
          `Test-encode 5 samples`,
        ],
        timeRequired: `10 min`,
        outcomes: `Confirmed encoding compatibility with available tools`,
        rubrics: `Correctness of encoding implementation`,
      },
    ],
    project: {
      scope: `Dataset selection methodology for the mini project.`,
      objectives: [
        `Identify 3 candidate datasets for the problem`,
        `Evaluate using Q_required, N_min, C_dataset formulas`,
        `Select optimal dataset with justification`,
        `Verify encoding compatibility`,
      ],
      timeline: [
        { phase: `Collect Candidates`, duration: `5 min`, percent: 15 },
        { phase: `Quantitative Evaluation`, duration: `15 min`, percent: 40 },
        { phase: `Compatibility Check`, duration: `10 min`, percent: 30 },
        { phase: `Final Selection`, duration: `5 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Data Lead`, responsibility: `Sources and documents datasets` },
        { role: `Quantitative Analyst`, responsibility: `Computes Q_required and N_min` },
        { role: `Encoding Specialist`, responsibility: `Verifies scheme compatibility` },
      ],
      deliverables: [
        `Dataset evaluation matrix`,
        `Encoding compatibility report`,
        `Final dataset selection with justification`,
      ],
    },
    questions: [
      {
        question: `What is the most important factor in QNLP dataset selection?`,
        answer: `The match between encoding requirements and qubit budget. If required qubits exceed available qubits, the project is infeasible.`,
        explanation: `Qubit count is the hardest constraint. Dataset size and quality can be addressed through sampling, but encoding mismatch is fatal.`,
        commonMistake: `Choosing datasets based on classical popularity (full IMDB, AG News) without considering sequence length and vocabulary size.`,
        tip: `Look for pre-tokenised datasets with short sequences (<30 tokens) and small vocabularies (<1000 words).`,
      },
      {
        question: `How does amplitude encoding reduce qubit requirements?`,
        answer: `Amplitude encoding uses log2(d) qubits for a d-dim vector vs d qubits for angle encoding. A 16-dim embedding needs 4 vs 16 qubits.`,
        explanation: `It exploits the 2^n amplitude coefficients of n qubits. This is the most qubit-efficient encoding but requires more complex circuits.`,
        commonMistake: `Defaulting to angle encoding when qubits are scarce.`,
        tip: `Use angle encoding for prototyping, amplitude for production.`,
      },
    ],
    virtualLab: {
      description: `Simulate dataset encoding with different schemes. Select a dataset, choose encoding, verify hardware compatibility.`,
      steps: [
        `Open the QNLP Dataset Encoder Simulator`,
        `Select a dataset from the built-in library`,
        `Choose encoding: angle, amplitude, or basis`,
        `Review qubit requirements and circuit depth`,
        `Run compatibility check against hardware backends`,
      ],
      stepDetails: [
        `10 QNLP-ready datasets with varying characteristics`,
        `Each scheme shows qubit breakdown by layer`,
        `Depth estimator accounts for encoding + variational + measurement layers`,
        `Report provides green/yellow/red rating per backend`,
      ],
      completionMessage: `You can select datasets and encoding schemes with full hardware awareness.`,
      dataFlow: `None`,
    },
    insights: {
      advantages: [
        `Systematic evaluation prevents hardware issues`,
        `Quantitative qubit calculations guide encoding choice`,
        `Early verification saves implementation time`,
      ],
      disadvantages: [
        `Many standard datasets are too large for current simulators`,
        `Subsampling may introduce bias`,
        `Compatibility checks add overhead`,
      ],
      futureScope: `Future QNLP will work with full-scale datasets using quantum methods for specific sub-tasks.`,
      industrialApplications: [
        `Financial sentiment with subsampled headlines`,
        `Medical text classification with short clinical notes`,
        `Scientific literature mining with abstracts`,
      ],
      careerRelevance: `Data engineering for quantum ML is a growing specialisation.`,
    },
  },
  '15.3': {
    topicId: `15.3`,
    learningObjective: `Design a complete QNLP solution architecture including encoding, variational circuit, measurement, and classical postprocessing.`,
    nextPrep: `Review Module 12 on hybrid architectures and Module 13 on training strategies.`,
    dependencyGraph: `flowchart LR
  A[15.2] --> B[15.3 Solution Design]
  B --> C[Encoding]
  B --> D[Circuit]
  B --> E[Postprocessing]
  C --> F[15.4]
  D --> F
  E --> F
  style B fill:#2ecc71,color:#fff`,
    storytelling: {
      story: `A famous architect said a building should look like it grew from its site. The same applies to QNLP. One team chose a tree tensor network because sentences are hierarchical. Another chose a 2D grid ansatz for relation extraction because entity relationships form a graph. Architecture should emerge from the problem.`,
      questions: [
        `How does the problem structure inform quantum architecture choices?`,
        `What design elements are universal vs problem-specific?`,
        `How do you balance expressivity, trainability, and hardware feasibility?`,
      ],
      connection: `Solution design is like software architecture: choose patterns, components, and interfaces. Encoding is the data layer, circuit is processing, measurement is output, postprocessing handles what quantum cannot.`,
      technicalIntro: `QNLP design involves four interdependent choices: (1) Encoding - angle (simple, qubit-heavy), amplitude (logarithmic qubits, complex), basis, or QRAM. (2) Variational Circuit - hardware-efficient, tensor-network, or problem-specific ansatz. (3) Measurement - expectation values, probability distributions, or tomography. (4) Classical Postprocessing - neural network or logistic regression mapping measurements to predictions.`,
      lifeSkills: `Architectural thinking - seeing systems as interconnected components - is valuable everywhere: business strategy, cooking, engineering.`,
    },
    mathModelling: {
      need: `Mathematical modelling of circuit expressivity, encoding fidelity, and trainability is essential for optimal design.`,
      motivation: `Without rigorous modelling, architecture choices are arbitrary. Mathematical analysis identifies optimal designs before implementation.`,
      challenge: `Maximising expressivity while maintaining trainability (avoiding barren plateaus) and hardware feasibility.`,
      equations: [
        {
          latex: `U_{\\text{QNLP}}(\\theta) = U_{\\text{meas}} \\circ U_{\\text{var}}(\\theta) \\circ U_{\\text{enc}}(x)`,
          meaning: `The full QNLP unitary composes encoding, variational processing, and measurement preparation.`,
          interpretation: `Each component has a distinct role: data injection, task-specific learning, and readable output mapping.`,
        },
        {
          latex: `\\mathcal{E}(U_{\\text{var}}) = 1 - \\frac{\\int_{\\text{Haar}} |\\text{Tr}(U_{\\text{var}}^\\dagger V)|^2 dV}{\\int_{\\text{Haar}} |\\text{Tr}(W^\\dagger V)|^2 dV}`,
          meaning: `Expressivity measures how uniformly the ansatz covers the unitary group relative to Haar distribution.`,
          interpretation: `High expressivity means more representational power but higher barren plateau risk. Optimal value depends on problem complexity.`,
        },
        {
          latex: `\\text{Var}[\\partial_{\\theta_i} C] \\propto \\frac{1}{2^{\\mathcal{E} \\cdot n}}`,
          meaning: `Gradient variance decreases exponentially with expressivity times qubit count, causing barren plateaus.`,
          interpretation: `More expressive circuits on more qubits have exponentially flatter landscapes. Shallow circuits often outperform deeper ones.`,
        },
      ],
      variables: [
        { symbol: `U_{\\text{QNLP}}`, name: `QNLP Unitary`, description: `Complete quantum transformation per sentence` },
        { symbol: `U_{\\text{var}}`, name: `Variational Unitary`, description: `Trainable circuit for task-specific transformation` },
        { symbol: `\\mathcal{E}`, name: `Ansatz Expressivity`, description: `Measure of unitary space coverage` },
        { symbol: `\\text{Var}[\\partial_\\theta C]`, name: `Gradient Variance`, description: `Cost gradient variance across parameter landscape` },
      ],
      charts: [
        {
          title: `Expressivity-Trainability Trade-off`,
          type: `line`,
          data: [
            { name: `Hardware-Efficient`, Expressivity: 0.65, Trainability: 0.8, Depth: 10 },
            { name: `Tensor Network`, Expressivity: 0.8, Trainability: 0.6, Depth: 25 },
            { name: `Tree Tensor`, Expressivity: 0.75, Trainability: 0.7, Depth: 18 },
            { name: `Problem-Specific`, Expressivity: 0.85, Trainability: 0.55, Depth: 30 },
          ],
        },
        {
          title: `Component Complexity Comparison`,
          type: `bar`,
          data: [
            { name: `Encoding`, Simple: 3, Complex: 5 },
            { name: `Circuit`, Simple: 4, Complex: 5 },
            { name: `Measurement`, Simple: 4, Complex: 2 },
            { name: `Postprocess`, Simple: 3, Complex: 4 },
          ],
        },
      ],
      advantages: `Systematic architecture selection based on expressivity-trainability analysis produces convergable, performant solutions.`,
      limitations: `Expressivity calculations are approximate. Barren plateau analysis does not account for problem-specific structure.`,
    },
    activities: [
      {
        title: `Architecture Design Studio`,
        description: `Teams design the complete QNLP architecture using a structured template.`,
        steps: [
          `Review problem statement and dataset characteristics`,
          `Select encoding scheme with justification`,
          `Design variational circuit specifying gates and topology`,
          `Define measurement and classical postprocessing`,
          `Present architecture to another team for critique`,
        ],
        timeRequired: `20 min`,
        outcomes: `Complete architecture diagram with component specifications`,
        rubrics: `Design completeness and justification of choices`,
      },
      {
        title: `Expressivity Analysis Lab`,
        description: `Teams analyse expressivity and trainability of different ansatz choices.`,
        steps: [
          `Implement 3 ansatz designs for the same encoding`,
          `Compute expressivity scores for each`,
          `Estimate gradient variance and assess trainability`,
          `Simulate training for 50 iterations and compare`,
        ],
        timeRequired: `15 min`,
        outcomes: `Selected ansatz with quantitative justification`,
        rubrics: `Correctness of analysis and rigour of comparison`,
      },
    ],
    project: {
      scope: `Complete architecture design for the mini project specifying all components and interfaces.`,
      objectives: [
        `Select encoding scheme appropriate for dataset and hardware`,
        `Design variational circuit with appropriate expressivity`,
        `Define measurement strategy and postprocessing`,
        `Validate against hardware constraints`,
      ],
      timeline: [
        { phase: `Architecture Brainstorming`, duration: `10 min`, percent: 25 },
        { phase: `Component Specification`, duration: `15 min`, percent: 35 },
        { phase: `Expressivity Analysis`, duration: `10 min`, percent: 25 },
        { phase: `Documentation`, duration: `5 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Architect`, responsibility: `Oversees overall design and compatibility` },
        { role: `Encoding Specialist`, responsibility: `Designs data encoding scheme` },
        { role: `Circuit Designer`, responsibility: `Designs ansatz and analyses expressivity` },
        { role: `Integration Lead`, responsibility: `Designs measurement and postprocessing` },
      ],
      deliverables: [
        `Architecture diagram with data flow`,
        `Encoding scheme specification`,
        `Variational circuit description`,
        `Classical postprocessing specification`,
      ],
    },
    questions: [
      {
        question: `Angle vs amplitude encoding: which to choose?`,
        answer: `Angle uses d qubits for d-dim embedding (simple, qubit-heavy). Amplitude uses log2(d) qubits (efficient, complex circuits). Choose angle with abundant qubits, amplitude when qubits are scarce.`,
        explanation: `The choice cascades through the architecture. Angle is simpler to train but limits vocabulary size. Amplitude saves qubits but adds depth.`,
        commonMistake: `Choosing amplitude without verifying circuit depth feasibility.`,
        tip: `Prototype with angle encoding, then switch to amplitude for production.`,
      },
      {
        question: `How does hardware connectivity affect ansatz design?`,
        answer: `The connectivity graph determines which qubits can directly interact. Disconnected qubits need SWAP gates, increasing depth and errors. The optimal ansatz respects hardware topology.`,
        explanation: `A hardware-efficient ansatz arranges entangling layers matching device topology, sacrificing some expressivity for dramatically reduced depth.`,
        commonMistake: `Designing ansatze requiring all-to-all connectivity for linear or grid topologies.`,
        tip: `Always design with target hardware connectivity as a constraint.`,
      },
    ],
    virtualLab: {
      description: `Design QNLP architectures in a simulated environment. Choose from a palette of components and run feasibility checks.`,
      steps: [
        `Open the QNLP Architecture Designer`,
        `Select encoding, variational, measurement, postprocessing components`,
        `Connect components to form a complete pipeline`,
        `Run feasibility checker against selected hardware`,
        `Visualise the complete circuit with depths and gate counts`,
      ],
      stepDetails: [
        `Palette includes 5 encodings, 8 ansatz patterns, 3 measurement strategies, 4 postprocessing options`,
        `Components show real-time compatibility indicators`,
        `Feasibility checker simulates transpilation to IBM, Google, IonQ hardware`,
        `Cost estimator predicts total runtime and error rates`,
      ],
      completionMessage: `You can design complete QNLP architectures with confidence they will run on target hardware.`,
      dataFlow: `None`,
    },
    insights: {
      advantages: [
        `Structured design process justifies all decisions`,
        `Expressivity-trainability analysis prevents non-converging architectures`,
        `Modular design enables component reuse and testing`,
      ],
      disadvantages: [
        `Design analysis adds pre-implementation overhead`,
        `Expressivity measurements are computationally expensive`,
        `Optimal architecture may change with hardware improvements`,
      ],
      futureScope: `Automated architecture search using RL will become standard for QNLP design.`,
      industrialApplications: [
        `Custom architectures for enterprise document classification`,
        `Optimised encodings for financial text analytics`,
        `Hardware-aware circuits for cloud quantum NLP`,
      ],
      careerRelevance: `Quantum architecture design is a high-value skill in the QC job market.`,
    },
  },
  '15.4': {
    topicId: `15.4`,
    learningObjective: `Collaborate effectively by dividing responsibilities, managing timelines, and integrating individual contributions.`,
    nextPrep: `Review agile project management principles and their application to quantum computing projects.`,
    dependencyGraph: `flowchart LR
  A[15.3] --> B[15.4 Team Activity]
  B --> C[Task Division]
  B --> D[Parallel Implementation]
  B --> E[Integration Testing]
  C --> F[15.5]
  D --> F
  E --> F
  style B fill:#f39c12,color:#fff`,
    storytelling: {
      story: `The Manhattan Project succeeded not because of a single genius but because hundreds collaborated in parallel, coordinated by clear plans and regular integration. Each team owned a piece. Your QNLP project is a microcosm: one encodes data, another designs circuits, another trains, another evaluates.`,
      questions: [
        `How do you divide a QNLP project into parallel workstreams?`,
        `What prevents teams from building incompatible components?`,
        `How do you handle blocked team members during integration?`,
      ],
      connection: `Team-based QNLP mirrors open-source quantum projects (Qiskit, Cirq, PennyLane). The project management skills here apply directly to real quantum software development.`,
      technicalIntro: `Effective team development follows: (1) Task Decomposition - break pipeline into independent modules with defined interfaces. (2) Dependency Management - identify which tasks block others. (3) Integration Strategy - define how modules connect and validate end-to-end. (4) Timeline Management - assign budgets with frequent checkpoints.`,
      lifeSkills: `Teamwork is the most transferable skill in any career. Learning to divide work, communicate, and integrate prepares you for virtually any professional environment.`,
    },
    mathModelling: {
      need: `Quantitative models for task scheduling, resource allocation, and risk assessment ensure timely completion.`,
      motivation: `Without project management models, teams risk overallocation, missed dependencies, and integration failures.`,
      challenge: `Minimising critical path length given task dependencies, team size, and completion time uncertainty.`,
      equations: [
        {
          latex: `T_{\\text{critical}} = \\max_{\\text{path} \\in P} \\sum_{t \\in \\text{path}} E[t]`,
          meaning: `Critical path duration equals the maximum expected total time along any dependency path.`,
          interpretation: `Tasks on the critical path have zero slack - any delay directly extends the project. Identifying this path is essential.`,
        },
        {
          latex: `R_i(t) = 1 - \\prod_{j=1}^{m_i} (1 - r_{ij}(t))`,
          meaning: `Task risk equals one minus the product of sub-task survival probabilities.`,
          interpretation: `Complex tasks with many sub-tasks have higher cumulative risk. Modular design reduces single points of failure.`,
        },
      ],
      variables: [
        { symbol: `T_{\\text{critical}}`, name: `Critical Path Time`, description: `Minimum project duration given dependencies` },
        { symbol: `R_i(t)`, name: `Task Risk`, description: `Probability of task failure or delay by time t` },
        { symbol: `U`, name: `Team Utilisation`, description: `Workload balance across team members` },
      ],
      charts: [
        {
          title: `Project Risk by Task Type`,
          type: `bar`,
          data: [
            { name: `Data Prep`, Risk: 0.2, Slack: 5 },
            { name: `Encoding Circuit`, Risk: 0.4, Slack: 3 },
            { name: `Variational Circuit`, Risk: 0.5, Slack: 2 },
            { name: `Integration Testing`, Risk: 0.6, Slack: 1 },
          ],
        },
        {
          title: `Team Utilisation Over Phases`,
          type: `line`,
          data: [
            { name: `Design`, M1: 0.8, M2: 0.9, M3: 0.7, M4: 0.6 },
            { name: `Implementation`, M1: 1.0, M2: 0.8, M3: 1.0, M4: 0.9 },
            { name: `Integration`, M1: 0.9, M2: 1.0, M3: 0.8, M4: 1.0 },
            { name: `Testing`, M1: 0.7, M2: 1.0, M3: 0.9, M4: 0.8 },
          ],
        },
      ],
      advantages: `Quantitative project management reduces integration failure risk and provides early delay warnings.`,
      limitations: `Time estimates are inherently uncertain for research projects. Utilisation models miss individual productivity variations.`,
    },
    activities: [
      {
        title: `Task Decomposition Workshop`,
        description: `Teams decompose their project into independent tasks with clear interfaces.`,
        steps: [
          `List all tasks needed for the QNLP solution`,
          `Identify dependencies and draw the dependency graph`,
          `Compute critical path and identify slack`,
          `Assign tasks based on skills`,
        ],
        timeRequired: `15 min`,
        outcomes: `Complete task breakdown with assignments and timeline`,
        rubrics: `Completeness and feasibility of decomposition`,
      },
      {
        title: `Integration Sprint`,
        description: `Teams execute a timed sprint implementing and integrating all components.`,
        steps: [
          `Each member implements their assigned component`,
          `Checkpoint 1 at 10min: verify interface compatibility`,
          `Checkpoint 2 at 20min: integrate encoding + circuit`,
          `Checkpoint 3 at 30min: add measurement + postprocessing`,
          `Final at 40min: end-to-end integration test`,
        ],
        timeRequired: `40 min`,
        outcomes: `Integrated QNLP pipeline with all components connected`,
        rubrics: `Integration completeness and adherence to interfaces`,
      },
    ],
    project: {
      scope: `Implementation phase: parallel development, integration, and collaborative problem-solving.`,
      objectives: [
        `Decompose solution into independent tasks`,
        `Assign tasks based on complementary skills`,
        `Implement in parallel with regular checkpoints`,
        `Integrate into working end-to-end pipeline`,
      ],
      timeline: [
        { phase: `Task Decomposition`, duration: `10 min`, percent: 15 },
        { phase: `Implementation Sprint`, duration: `30 min`, percent: 50 },
        { phase: `Integration Testing`, duration: `15 min`, percent: 25 },
        { phase: `Bug Fixing`, duration: `10 min`, percent: 10 },
      ],
      teamRoles: [
        { role: `Integration Lead`, responsibility: `Manages integration and resolves interface mismatches` },
        { role: `Implementation Lead`, responsibility: `Coordinates parallel implementation` },
        { role: `Quality Lead`, responsibility: `Writes tests and verifies correctness` },
        { role: `Timekeeper`, responsibility: `Tracks milestones and timeline pressure` },
      ],
      deliverables: [
        `Integrated pipeline code`,
        `Integration test results`,
        `Implementation notes with issue resolutions`,
      ],
    },
    questions: [
      {
        question: `What is the most common cause of integration failure?`,
        answer: `Interface mismatches: the encoding module outputs data the circuit does not expect. This happens when components are designed without agreed interface specifications.`,
        explanation: `Each component has specific input/output formats. Without a shared interface document, independently-designed components will not connect.`,
        commonMistake: `Starting coding without defining interface specifications first.`,
        tip: `Agree on interface specs before writing code. Document shared expectations.`,
      },
      {
        question: `How to handle a blocked team member?`,
        answer: `Check if the blocker is on the critical path. If so, reallocate from non-critical tasks. Options include pair programming, task reassignment, or simplifying the component.`,
        explanation: `In a time-constrained workshop, a working simple solution beats a non-working elegant design.`,
        commonMistake: `The whole team stopping to work on one blocker.`,
        tip: `Always have a Plan B for each component.`,
      },
    ],
    virtualLab: {
      description: `Simulate a team QNLP environment with virtual members. Coordinate parallel work and resolve integration conflicts.`,
      steps: [
        `Open the QNLP Team Simulation`,
        `Review project requirements and interface specs`,
        `Assign virtual team members to components`,
        `Monitor parallel completion and resolve conflicts`,
        `Complete integration and run validation tests`,
      ],
      stepDetails: [
        `Virtual members have different skill levels and speeds`,
        `Interface conflicts randomly generated based on spec gaps`,
        `Simulation tracks critical path and alerts on at-risk tasks`,
        `Validation tests verify end-to-end correctness`,
      ],
      completionMessage: `You can lead team-based QNLP projects with effective task decomposition and integration.`,
      dataFlow: `None`,
    },
    insights: {
      advantages: [
        `Parallel implementation reduces time-to-completion`,
        `Clear interfaces prevent integration issues`,
        `Regular checkpoints catch issues early`,
      ],
      disadvantages: [
        `Coordination overhead increases with team size`,
        `Interface specs may need revision`,
        `Skill imbalances cause uneven workload`,
      ],
      futureScope: `CI pipelines will automate interface verification in future QNLP tools.`,
      industrialApplications: [
        `Multi-institutional quantum NLP collaborations`,
        `Enterprise QNLP delivery with cross-functional teams`,
        `Distributed open-source QNLP projects`,
      ],
      careerRelevance: `Teamwork skills are the most sought-after quality in quantum computing.`,
    },
  },
  '15.5': {
    topicId: `15.5`,
    learningObjective: `Present QNLP project results effectively, communicating quantum concepts to diverse audiences and defending design decisions.`,
    nextPrep: `Prepare key results, visualisations, and lessons learned. Practice explaining quantum concepts.`,
    dependencyGraph: `flowchart LR
  A[15.4] --> B[15.5 Presentation]
  B --> C[Results Viz]
  B --> D[Technical Explanation]
  B --> E[Q&A Prep]
  C --> F[15.6]
  D --> F
  E --> F
  style B fill:#9b59b6,color:#fff`,
    storytelling: {
      story: `Feynman said: If you cannot explain it simply, you do not understand it well enough. A team with an impressive QNLP model lost funding because they led with superposition and Hilbert spaces to executives. Another team said: We built a system that processes sentences in parallel universes, achieving 15% better accuracy. They got funded.`,
      questions: [
        `Who is your audience and what do they care about?`,
        `How do you explain quantum concepts without jargon?`,
        `What visualisations best communicate QNLP results?`,
      ],
      connection: `Presentation bridges technical achievement and real-world impact. A brilliant solution nobody understands is worth less than a mediocre solution that is well-understood and adopted.`,
      technicalIntro: `Effective QNLP presentations follow: (1) Problem - what NLP challenge and why it matters. (2) Approach - how the solution works conceptually. (3) Results - achievements with baseline comparisons. (4) Analysis - why it worked and what was learned. (5) Future Work - next steps. Tailor depth to audience: technical audiences get architecture details; business audiences get impact and accuracy gain.`,
      lifeSkills: `Explaining complex ideas to different audiences is a top career skill. Technical communication determines whether your ideas gain traction.`,
    },
    mathModelling: {
      need: `Rigorous statistical models for comparing QNLP vs baselines with confidence intervals and significance testing.`,
      motivation: `Without rigorous statistics, improvements may be dismissed as noise. With error bars and significance tests, results become credible.`,
      challenge: `Presenting QNLP results honestly while accounting for high variance, small sample sizes, and multiple comparisons.`,
      equations: [
        {
          latex: `\\Delta = \\mu_{\\text{QNLP}} - \\mu_{\\text{baseline}} \\pm z_{\\alpha/2} \\cdot \\sqrt{\\frac{\\sigma_{\\text{QNLP}}^2}{n_{\\text{QNLP}}} + \\frac{\\sigma_{\\text{baseline}}^2}{n_{\\text{baseline}}}}`,
          meaning: `Performance difference reported with confidence intervals based on standard error of difference of means.`,
          interpretation: `If the CI excludes zero, the improvement is statistically significant. For NISQ experiments with high variance, CIs may be wide.`,
        },
        {
          latex: `d = \\frac{\\mu_{\\text{QNLP}} - \\mu_{\\text{baseline}}}{\\sigma_{\\text{pooled}}}`,
          meaning: `Cohens d effect size measures the standardised difference between QNLP and baseline.`,
          interpretation: `Effect size of 0.2 is small, 0.5 medium, 0.8+ large. Even a small effect size can be meaningful for QNLP.`,
        },
      ],
      variables: [
        { symbol: `\\Delta`, name: `Performance Difference`, description: `Accuracy/F1 difference between QNLP and baseline` },
        { symbol: `d`, name: `Cohen d`, description: `Standardised effect size measure` },
        { symbol: `\\sigma`, name: `Standard Deviation`, description: `Performance variability across runs` },
      ],
      charts: [
        {
          title: `QNLP vs Baseline with CIs`,
          type: `bar`,
          data: [
            { name: `Accuracy`, QNLP: 0.87, Baseline: 0.81, QNLP_CI: 0.03, Baseline_CI: 0.02 },
            { name: `Precision`, QNLP: 0.85, Baseline: 0.8, QNLP_CI: 0.04, Baseline_CI: 0.03 },
            { name: `Recall`, QNLP: 0.89, Baseline: 0.82, QNLP_CI: 0.03, Baseline_CI: 0.02 },
            { name: `F1 Score`, QNLP: 0.87, Baseline: 0.81, QNLP_CI: 0.03, Baseline_CI: 0.02 },
          ],
        },
        {
          title: `Training Convergence`,
          type: `line`,
          data: [
            { name: `Epoch 1`, QNLP: 0.55, Classical: 0.52 },
            { name: `Epoch 5`, QNLP: 0.7, Classical: 0.63 },
            { name: `Epoch 10`, QNLP: 0.8, Classical: 0.72 },
            { name: `Epoch 20`, QNLP: 0.85, Classical: 0.78 },
            { name: `Epoch 50`, QNLP: 0.87, Classical: 0.81 },
          ],
        },
      ],
      advantages: `Rigorous statistical presentation builds credibility and provides honest assessment of QNLP advantages.`,
      limitations: `Significance tests assume independent samples and normal errors, which may not hold for quantum measurements.`,
    },
    activities: [
      {
        title: `Presentation Preparation`,
        description: `Teams prepare a 5-minute presentation covering problem, approach, results, and lessons.`,
        steps: [
          `Create 1 slide per section: problem, approach, architecture, results, lessons`,
          `Prepare result visualisations with confidence intervals`,
          `Draft a 1-minute elevator pitch for non-technical audiences`,
          `Anticipate 3 likely questions and prepare answers`,
        ],
        timeRequired: `20 min`,
        outcomes: `Complete presentation ready for delivery`,
        rubrics: `Clarity of slides and quality of visualisations`,
      },
      {
        title: `Presentation and Q&A`,
        description: `Teams present followed by technical Q&A and constructive peer feedback.`,
        steps: [
          `Deliver the 5-minute project overview`,
          `Field questions from peers and instructor`,
          `Provide constructive feedback to 2 other teams`,
          `Note improvement suggestions`,
        ],
        timeRequired: `30 min`,
        outcomes: `Actionable feedback and practiced communication`,
        rubrics: `Presentation clarity and Q&A handling`,
      },
    ],
    project: {
      scope: `Final project presentation synthesising all prior work into a coherent narrative.`,
      objectives: [
        `Create a 5-minute presentation (problem, approach, results, lessons)`,
        `Prepare visualisations with statistical rigour`,
        `Practice for both technical and non-technical audiences`,
        `Incorporate peer feedback`,
      ],
      timeline: [
        { phase: `Presentation Outline`, duration: `5 min`, percent: 15 },
        { phase: `Slide Creation and Viz`, duration: `15 min`, percent: 40 },
        { phase: `Rehearsal and Refinement`, duration: `10 min`, percent: 30 },
        { phase: `Final Polish`, duration: `5 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Presenter`, responsibility: `Delivers presentation and handles Q&A` },
        { role: `Visualisation Lead`, responsibility: `Creates charts and diagrams` },
        { role: `Technical Advisor`, responsibility: `Prepares detailed technical answers` },
      ],
      deliverables: [
        `Presentation slides (5-7)`,
        `Results visualisation with CIs`,
        `Q&A preparation document`,
      ],
    },
    questions: [
      {
        question: `How to explain quantum benefits without jargon?`,
        answer: `Use analogies that capture the essence: Classical computers check books one by one; quantum checks all simultaneously like infinite librarians in parallel. Focus on benefits, not mechanisms.`,
        explanation: `Non-technical audiences care about outcomes. Tailor depth to their interest.`,
        commonMistake: `Same technical presentation for executives as for researchers.`,
        tip: `Start every presentation with the problem and result, then offer deeper explanation.`,
      },
      {
        question: `What visualisations are most effective?`,
        answer: `Comparison bar charts with error bars, convergence plots, architecture diagrams, and ablation tables. Each answers a specific question.`,
        explanation: `Different charts serve different purposes: comparison for credibility, convergence for training behaviour, architecture for understanding.`,
        commonMistake: `Showing a single accuracy number without context or error bars.`,
        tip: `Every chart should answer a specific question. If not, remove it.`,
      },
    ],
    virtualLab: {
      description: `Practice presenting QNLP results to virtual audiences who ask different types of questions.`,
      steps: [
        `Open the QNLP Presentation Simulator`,
        `Upload results and visualisations`,
        `Select audience type (executive, technical, mixed)`,
        `Deliver presentation to virtual audience`,
        `Answer dynamically-generated questions`,
      ],
      stepDetails: [
        `Virtual audience includes executive (ROI), researcher (methodology), practitioner (implementation)`,
        `Questions generated based on presentation content`,
        `Feedback on clarity, depth, and audience engagement`,
        `Performance metrics track improvement across sessions`,
      ],
      completionMessage: `You can confidently present QNLP results to any audience.`,
      dataFlow: `None`,
    },
    insights: {
      advantages: [
        `Structured presentations ensure key points communicated`,
        `Statistical rigour builds credibility`,
        `Tailored explanations make QNLP accessible`,
      ],
      disadvantages: [
        `Prep time takes away from technical work`,
        `Simplified analogies may oversimplify`,
        `Results may be misinterpreted by non-technical audiences`,
      ],
      futureScope: `Standardised presentation templates and benchmarking frameworks will emerge as QNLP matures.`,
      industrialApplications: [
        `Presenting to stakeholders for funding`,
        `Communicating claims in publications`,
        `Teaching QNLP in academic and corporate settings`,
      ],
      careerRelevance: `Technical communication is among the highest-paid skills in tech.`,
    },
  },
  '15.6': {
    topicId: `15.6`,
    learningObjective: `Evaluate QNLP project outcomes, provide constructive feedback, identify improvements, and plan next steps.`,
    nextPrep: `Review project performance metrics and prepare observations about what worked and what to improve.`,
    dependencyGraph: `flowchart LR
  A[15.5] --> B[15.6 Feedback]
  B --> C[Peer Eval]
  B --> D[Self-Assessment]
  B --> E[Improvement Plan]
  C --> F[Retrospective]
  D --> F
  E --> F
  style B fill:#1abc9c,color:#fff`,
    storytelling: {
      story: `The Japanese concept of kaizen - continuous improvement - transformed a struggling manufacturer into a global leader. Every worker could stop the production line. Every mistake was analysed to improve the system. Your QNLP project is not the end - it is a data point. The feedback you receive is more valuable than the project itself.`,
      questions: [
        `What would you do differently if starting again?`,
        `What was the most surprising insight from your project?`,
        `How will you apply lessons to your next quantum project?`,
      ],
      connection: `Feedback is the breakfast of champions. In quantum computing, where failures are frequent, extracting lessons from every experiment is what separates improving teams from stagnant ones.`,
      technicalIntro: `The feedback process follows the agile retrospective: (1) What Went Well - identify successful strategies and effective patterns. (2) What Could Improve - analyse design flaws and gaps. (3) Lessons Learned - extract generalisable insights. (4) Action Items - create measurable improvements. Key evaluation dimensions: architecture, encoding, training, results, teamwork.`,
      lifeSkills: `Giving and receiving constructive feedback is the most important meta-skill for professional growth. People who seek feedback improve faster.`,
    },
    mathModelling: {
      need: `A quantitative framework for project evaluation ensures feedback is objective, comparable, and actionable.`,
      motivation: `Subjective feedback is biased and hard to act on. Structured rubrics provide clear improvement guidance.`,
      challenge: `Designing multi-dimensional evaluation that captures technical quality, teamwork, and communication objectively.`,
      equations: [
        {
          latex: `Q_{\\text{project}} = \\sum_{i=1}^{m} w_i \\cdot s_i`,
          meaning: `Overall project quality is the weighted sum of scores across m criteria.`,
          interpretation: `The composite score provides a single metric while showing performance across individual dimensions.`,
        },
        {
          latex: `g_j = \\frac{s_j^{t+1} - s_j^t}{s_j^t}`,
          meaning: `Growth rate measures relative improvement from project t to t+1.`,
          interpretation: `Tracking growth reveals which areas improve and which stagnate. High absolute scores with low growth may indicate coasting.`,
        },
        {
          latex: `I = \\frac{\\sum \\text{ActionItems}_k \\cdot \\text{Completed}_k}{\\sum \\text{ActionItems}_k}`,
          meaning: `Improvement Index measures fraction of action items completed in the next project.`,
          interpretation: `This closes the feedback loop. High I means the team acts on feedback. Aim for I > 0.8.`,
        },
      ],
      variables: [
        { symbol: `Q_{\\text{project}}`, name: `Project Quality Score`, description: `Composite score across all dimensions` },
        { symbol: `w_i`, name: `Criterion Weight`, description: `Relative importance of each evaluation dimension` },
        { symbol: `g_j`, name: `Growth Rate`, description: `Relative improvement between projects` },
        { symbol: `I`, name: `Improvement Index`, description: `Fraction of action items completed` },
      ],
      charts: [
        {
          title: `Team Evaluation Radar`,
          type: `radar`,
          data: [
            { name: `Architecture`, score: 85 },
            { name: `Encoding`, score: 72 },
            { name: `Training`, score: 68 },
            { name: `Results`, score: 78 },
            { name: `Teamwork`, score: 92 },
            { name: `Communication`, score: 80 },
          ],
        },
        {
          title: `Improvement Across Iterations`,
          type: `line`,
          data: [
            { name: `Iter 1`, Architecture: 70, Encoding: 65, Training: 55, Teamwork: 75 },
            { name: `Iter 2`, Architecture: 78, Encoding: 72, Training: 62, Teamwork: 82 },
            { name: `Iter 3`, Architecture: 85, Encoding: 78, Training: 72, Teamwork: 88 },
          ],
        },
      ],
      advantages: `Structured evaluation makes feedback objective. Multi-dimensional scoring reveals specific strengths and weaknesses.`,
      limitations: `Quantitative scores cannot capture all nuances. Weight selection is subjective. Overemphasis on metrics can lead to gaming.`,
    },
    activities: [
      {
        title: `Peer Evaluation Session`,
        description: `Teams exchange detailed feedback using structured rubrics.`,
        steps: [
          `Exchange project documentation with another team`,
          `Review their architecture and encoding choices`,
          `Evaluate result quality and statistical rigour`,
          `Write 3 strengths and 3 improvement suggestions`,
        ],
        timeRequired: `15 min`,
        outcomes: `Detailed peer feedback across all dimensions`,
        rubrics: `Specificity and constructiveness of feedback given`,
      },
      {
        title: `Team Retrospective`,
        description: `Teams conduct an internal retrospective to identify improvements.`,
        steps: [
          `List 3 things that went well and 3 to improve`,
          `Share and group similar items on a board`,
          `Vote on top 3 improvement priorities`,
          `Create action items with owners and deadlines`,
        ],
        timeRequired: `10 min`,
        outcomes: `Prioritised action item list with owners and deadlines`,
        rubrics: `Specificity and feasibility of action items`,
      },
    ],
    project: {
      scope: `Complete project lifecycle with evaluation, feedback, and improvement planning.`,
      objectives: [
        `Evaluate project across multiple dimensions using rubrics`,
        `Provide and receive constructive peer feedback`,
        `Conduct team retrospective`,
        `Create actionable improvement plan`,
      ],
      timeline: [
        { phase: `Peer Evaluation`, duration: `15 min`, percent: 35 },
        { phase: `Team Retrospective`, duration: `10 min`, percent: 25 },
        { phase: `Improvement Planning`, duration: `10 min`, percent: 25 },
        { phase: `Wrap-Up and Reflection`, duration: `5 min`, percent: 15 },
      ],
      teamRoles: [
        { role: `Evaluation Lead`, responsibility: `Manages peer evaluation process` },
        { role: `Retrospective Facilitator`, responsibility: `Ensures all voices heard` },
        { role: `Action Item Owner`, responsibility: `Tracks improvement completion` },
      ],
      deliverables: [
        `Peer evaluation results with scores`,
        `Retrospective board summary`,
        `Prioritised action items with owners and deadlines`,
      ],
    },
    questions: [
      {
        question: `What is constructive feedback vs criticism?`,
        answer: `Constructive feedback is specific, actionable, and focused on the work. It identifies what to improve and suggests how. Criticism is vague, personal, and focused on what is wrong without solutions.`,
        explanation: `Frame feedback around specific observations and alternative approaches. Use I noticed... instead of You failed to...`,
        commonMistake: `Making feedback personal rather than focusing on the work.`,
        tip: `Use the Situation-Behaviour-Impact model: describe the situation, the specific behaviour, and its impact.`,
      },
      {
        question: `How to prioritise improvement actions?`,
        answer: `Score each action on impact (1-5) and effort (1-5). Prioritise high-impact, low-effort items first. Limit to 3-5 actions per iteration to maintain focus.`,
        explanation: `The Eisenhower Matrix (urgent vs important) also works. Apply it to improvement planning for best results.`,
        commonMistake: `Creating too many action items and completing none.`,
        tip: `Limit action items to what the team can realistically complete before the next project.`,
      },
    ],
    virtualLab: {
      description: `Practice giving and receiving feedback in a simulated peer evaluation environment.`,
      steps: [
        `Open the QNLP Feedback Simulator`,
        `Review the sample project submission`,
        `Score each dimension using the rubric`,
        `Write constructive feedback comments`,
        `Receive simulated peer feedback on your own work`,
      ],
      stepDetails: [
        `Sample projects represent different quality levels and challenge areas`,
        `Rubric includes detailed descriptors for each score level`,
        `Feedback comments are evaluated for constructiveness by the simulator`,
        `Receiving feedback teaches how to process and act on it`,
      ],
      completionMessage: `You can give and receive constructive feedback that drives real improvement.`,
      dataFlow: `None`,
    },
    insights: {
      advantages: [
        `Structured feedback is more actionable than subjective opinions`,
        `Multi-dimensional evaluation reveals specific strengths`,
        `Growth tracking celebrates improvement over absolute performance`,
      ],
      disadvantages: [
        `Quantitative scores miss nuances`,
        `Weight selection is subjective`,
        `Feedback quality depends on reviewer effort`,
      ],
      futureScope: `Future QNLP platforms will include automated project evaluation and personalised improvement recommendations.`,
      industrialApplications: [
        `Performance reviews in quantum computing teams`,
        `Academic paper review and rebuttal processes`,
        `Agile retrospectives in software engineering`,
      ],
      careerRelevance: `Feedback literacy is a meta-skill that compounds over a career.`,
    },
  },
}
