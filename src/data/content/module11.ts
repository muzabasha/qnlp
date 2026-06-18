import type { TopicContent } from './loader'

export const m11Content: Record<string, TopicContent> = {
  '11.1': {
    topicId: '11.1',
    learningObjective: `Understand the fundamentals of text classification, its applications, and how quantum computing can enhance classification tasks.`,
    nextPrep: `Review basic NLP concepts from Module 2 and word embeddings from Module 6. Familiarity with vector representations will be essential.`,
    dependencyGraph: `flowchart LR
      A[M6: Word Vectors] --> B[11.1 Intro to Text Classification]
      B --> C[11.2 Classical Approaches]
      C --> D[11.3 Quantum Workflow]
      D --> E[11.4 Data Preparation]
      E --> F[11.5 Sentiment Model]
      F --> G[11.6 Training & Validation]
      G --> H[11.7 Sentiment Lab]
      style B fill:#4a90d9,color:#fff`,
    storytelling: {
      story: `You are the chief librarian of a massive digital library that receives 10,000 new documents every day. Each document needs to be sorted into categories: Science, History, Fiction, or Biography. Your assistant can read a document in one second but cannot tell which category it belongs to. You need to build an automatic sorting machine. This is text classification — one of the most fundamental and valuable tasks in NLP, used everywhere from spam filtering to medical diagnosis. Now imagine your sorting machine could use quantum phenomena to process all possible categories simultaneously.`,
      questions: [
        `How do you currently decide which category a piece of text belongs to? What clues do you use?`,
        `What happens when a document could belong to multiple categories?`,
        `How might processing all categories simultaneously change the accuracy of classification?`,
      ],
      connection: `Text classification is about mapping high-dimensional text data to discrete categories. Quantum computing offers the ability to explore the classification decision space in superposition, potentially finding optimal decision boundaries more efficiently than classical methods.`,
      technicalIntro: `Text classification is a supervised learning task where we assign predefined categories to free-text documents. The pipeline typically involves preprocessing, feature extraction (bag-of-words, TF-IDF, or embeddings), and a classifier (Naive Bayes, SVM, or neural networks). Quantum text classification replaces the classical classifier with a quantum circuit that processes encoded word vectors through parameterized quantum gates, leveraging superposition to evaluate multiple classification hypotheses simultaneously.`,
      lifeSkills: `Classification is a fundamental cognitive skill. From sorting emails to prioritizing tasks, we constantly classify information. Understanding how automated classification works helps you think more systematically about decision-making and pattern recognition in daily life.`,
    },
    mathModelling: {
      need: `Text classification requires mapping from a high-dimensional input space (vocabulary or embedding space) to a discrete output space (class labels).`,
      motivation: `The decision boundary in high-dimensional spaces can be extremely complex. Quantum models can potentially represent more complex boundaries than classical models of comparable size.`,
      challenge: `Finding a function f: X -> Y that minimizes classification error on unseen data, where X is the space of text representations and Y is the set of class labels.`,
      equations: [
        {
          latex: `f(\\mathbf{x}) = \\arg\\max_{c \\in C} P(c|\\mathbf{x})`,
          meaning: `The classifier selects the class c that maximises the posterior probability given input x.`,
          interpretation: `Given a document represented as vector x, we compute the probability of each class and pick the most likely one.`,
        },
        {
          latex: `L(\\theta) = -\\sum_{i=1}^{N} \\log P(y_i|\\mathbf{x}_i; \\theta)`,
          meaning: `Cross-entropy loss measures how well the predicted probabilities match the true labels.`,
          interpretation: `Minimising this loss during training pushes the predicted probability distribution toward the true label distribution.`,
        },
        {
          latex: `\\text{Accuracy} = \\frac{TP + TN}{TP + TN + FP + FN}`,
          meaning: `Accuracy is the fraction of correctly classified instances over all instances.`,
          interpretation: `A baseline metric that measures overall correctness but can be misleading for imbalanced datasets.`,
        },
      ],
      variables: [
        { symbol: `\\mathbf{x}`, name: `Input Vector`, description: `Vector representation of a text document` },
        { symbol: `C`, name: `Class Set`, description: `The set of all possible category labels` },
        { symbol: `P(c|\\mathbf{x})`, name: `Posterior Probability`, description: `Probability that document x belongs to class c` },
        { symbol: `\\theta`, name: `Model Parameters`, description: `Trainable parameters of the classification model` },
        { symbol: `TP, TN, FP, FN`, name: `Confusion Matrix Counts`, description: `True positives, true negatives, false positives, false negatives` },
      ],
      interactive: {
        equation: `f(\\mathbf{x}) = \\arg\\max_c P(c|\\mathbf{x})`,
        description: `Explore how the decision boundary changes with different input distributions:`,
        variables: [
          { symbol: `\\mathbf{x}`, name: `Input Feature`, description: `Document feature vector` },
          { symbol: `P`, name: `Class Probability`, description: `Probability distribution over classes` },
        ],
        sliders: [
          { name: `threshold`, label: `Decision Threshold`, min: 0, max: 1, step: 0.05, default: 0.5 },
          { name: `overlap`, label: `Class Overlap`, min: 0, max: 1, step: 0.1, default: 0.3 },
        ],
      },
      charts: [
        {
          title: `Classical vs Quantum Classification Accuracy by Dataset Size`,
          type: `line`,
          data: [
            { name: `100`, Classical: 0.72, Quantum: 0.74 },
            { name: `500`, Classical: 0.81, Quantum: 0.85 },
            { name: `1000`, Classical: 0.86, Quantum: 0.91 },
            { name: `5000`, Classical: 0.90, Quantum: 0.94 },
            { name: `10000`, Classical: 0.92, Quantum: 0.96 },
          ],
        },
      ],
      advantages: `Quantum classifiers can potentially represent more complex decision boundaries due to the exponentially larger Hilbert space, and may require fewer parameters to achieve comparable or better accuracy.`,
      limitations: `Quantum classifiers are currently limited by noisy hardware, small qubit counts, and the overhead of encoding classical data into quantum states. The advantage is theoretical for most practical datasets.`,
    },
    activities: [
      {
        title: `Text Classification Brainstorm`,
        description: `Groups brainstorm real-world text classification applications and discuss how they would approach each one.`,
        steps: [
          `Form groups of 4-5 students`,
          `List 10 real-world text classification problems (spam, sentiment, topic labelling, etc.)`,
          `For each problem, identify key features that would distinguish classes`,
          `Discuss which problems might benefit most from quantum approaches`,
        ],
        materials: `Whiteboard or digital collaboration tool`,
        timeRequired: `8 min`,
        outcomes: `Students connect text classification theory to real-world applications`,
        rubrics: `Breadth and creativity of examples, quality of feature identification`,
      },
      {
        title: `Classification Pipeline Diagramming`,
        description: `Students draw the complete text classification pipeline and identify where quantum components could replace classical ones.`,
        steps: [
          `Draw the classical text classification pipeline end-to-end`,
          `Label each component: preprocessing, feature extraction, classifier, evaluation`,
          `Identify which components could be replaced or enhanced by quantum algorithms`,
          `Present your hybrid pipeline design to the class`,
        ],
        timeRequired: `7 min`,
        outcomes: `Students understand the full classification pipeline and quantum integration points`,
      },
      {
        title: `Accuracy vs Interpretability Debate`,
        description: `Students debate the trade-off between classification accuracy and model interpretability.`,
        steps: [
          `Split into two groups: "Accuracy First" and "Interpretability First"`,
          `Each group prepares arguments for their position`,
          `Conduct a 3-minute structured debate`,
          `Class votes on which position is more convincing`,
        ],
        timeRequired: `6 min`,
        outcomes: `Students critically evaluate trade-offs in model design`,
      },
    ],
    project: {
      scope: `Design a text classification system for a real-world use case, identifying where quantum methods could provide advantages.`,
      objectives: [
        `Identify a suitable text classification problem`,
        `Design the classical baseline pipeline`,
        `Identify quantum enhancement opportunities`,
        `Estimate potential performance improvements`,
      ],
      timeline: [
        { phase: `Problem Selection`, duration: `2 min`, percent: 20 },
        { phase: `Pipeline Design`, duration: `3 min`, percent: 40 },
        { phase: `Quantum Integration Plan`, duration: `3 min`, percent: 40 },
      ],
      teamRoles: [
        { role: `Domain Expert`, responsibility: `Understands the business problem and data` },
        { role: `NLP Engineer`, responsibility: `Designs the classical pipeline` },
        { role: `Quantum Specialist`, responsibility: `Identifies quantum enhancements` },
      ],
      deliverables: [
        `Problem definition document`,
        `Classification pipeline diagram`,
        `Quantum integration proposal with expected benefits`,
      ],
    },
    questions: [
      {
        question: `What is text classification and why is it important in NLP?`,
        answer: `Text classification is the task of assigning predefined categories to unstructured text. It is important because it enables automated organisation of massive text collections, from spam filtering to medical record categorisation.`,
        explanation: `Text classification is one of the most widely deployed NLP applications, directly impacting productivity in email, search, content moderation, and customer support.`,
        commonMistake: `Confusing text classification with clustering — classification uses labelled data (supervised), while clustering is unsupervised.`,
        tip: `Think of text classification as the automated version of what you do when you organise files into folders.`,
      },
      {
        question: `What is the cross-entropy loss function and why is it used for classification?`,
        answer: `Cross-entropy loss measures the difference between the predicted probability distribution and the true distribution (one-hot encoded label). It is used because it penalises confident wrong predictions heavily, driving faster convergence.`,
        explanation: `Minimising cross-entropy is equivalent to maximising the likelihood of the correct class under the model's probability estimates.`,
        commonMistake: `Using accuracy as a loss function — accuracy is non-differentiable and cannot be used directly for gradient-based optimisation.`,
        tip: `Cross-entropy works well with softmax output layers because the gradients are well-behaved.`,
      },
    ],
    virtualLab: {
      description: `Explore a simple text classification pipeline and see how different features affect classification decisions.`,
      steps: [
        `Load the sample document set with labelled categories`,
        `Choose a feature extraction method (bag-of-words, TF-IDF, or embeddings)`,
        `Train a classical classifier and observe the decision boundary`,
        `Switch to a simulated quantum classifier and compare boundaries`,
        `Analyse which classifier performs better on the test set`,
      ],
      stepDetails: [
        `Loading 50 pre-labelled documents across 3 categories`,
        `Each method produces a different representation of the same documents`,
        `Classical SVM finds a linear decision boundary in feature space`,
        `Quantum circuit classifier uses parameterised gates to define non-linear boundaries`,
        `Comparison table showing precision, recall, and F1-score for both classifiers`,
      ],
      completionMessage: `You have successfully compared classical and quantum text classification approaches!`,
      dataFlow: `flowchart LR
        A[Raw Text] --> B[Preprocessing]
        B --> C[Feature Extraction]
        C --> D{Classifier}
        D --> E[Classical SVM]
        D --> F[Quantum Circuit]
        E --> G[Predictions]
        F --> G
        G --> H[Evaluation]`,
    },
    insights: {
      advantages: [
        `Text classification is intuitive and widely applicable across industries`,
        `Clear performance metrics make it easy to evaluate improvements`,
        `Well-understood classical baselines exist for comparison`,
        `Quantum classifiers show promise for complex decision boundaries`,
      ],
      disadvantages: [
        `Requires large labelled datasets for training`,
        `Imbalanced classes can significantly degrade performance`,
        `Current quantum advantage is theoretical and hardware-limited`,
      ],
      futureScope: `As quantum hardware matures, quantum text classification could become practical for real-time applications in high-volume settings such as social media monitoring, automated customer support routing, and large-scale document organisation.`,
      industrialApplications: [
        `Automated email spam filtering at internet scale`,
        `Customer support ticket categorisation and routing`,
        `Medical record classification for clinical decision support`,
        `Social media content moderation and hate speech detection`,
      ],
      careerRelevance: `Text classification is a foundational NLP skill required for roles in data science, machine learning engineering, and NLP research. Understanding quantum-enhanced approaches positions you at the cutting edge of next-generation NLP systems.`,
    },
  },

  '11.2': {
    topicId: '11.2',
    learningObjective: `Understand classical text classification approaches including Naive Bayes, SVMs, and neural networks, and identify their strengths and limitations.`,
    nextPrep: `Review probability basics (Bayes' theorem) and the concept of margin maximisation.`,
    dependencyGraph: `flowchart LR
      A[11.1 Text Classification] --> B[11.2 Classical Approaches]
      B --> C[11.3 Quantum Workflow]
      B --> D[Naive Bayes]
      B --> E[SVM]
      B --> F[Neural Networks]
      style B fill:#4a90d9,color:#fff`,
    storytelling: {
      story: `Imagine you are a detective trying to identify a suspect based on witness descriptions. One approach is to count how often each feature appears for different suspects (like Naive Bayes). Another is to find the clearest dividing line between suspects (like SVM). A third is to build a complex network of reasoning that learns from examples (like neural networks). Each approach works well in different situations. Understanding their strengths and weaknesses helps you choose the right tool — and more importantly, helps you understand why quantum approaches might eventually surpass them all.`,
      questions: [
        `When would you use a simple rule-based classifier versus a complex neural network?`,
        `What are the computational bottlenecks in each classical approach?`,
        `Which classical approach do you think would benefit most from quantum enhancement?`,
      ],
      connection: `Each classical approach maps text to categories through a different mathematical lens. Naive Bayes uses probability, SVM uses geometry, and neural networks use distributed representations. Quantum classifiers add a fourth lens: quantum interference and superposition, which can combine strengths of all three.`,
      technicalIntro: `Three dominant classical approaches exist: Multinomial Naive Bayes models P(c|d) using word count probabilities under a strong independence assumption. Support Vector Machines find the maximum-margin hyperplane separating classes in a high-dimensional feature space (optionally using the kernel trick). Neural networks, from simple feed-forward to Transformers, learn hierarchical feature representations through backpropagation. Each has O(n) to O(n²) complexity in inference, and all face fundamental limits in expressivity for fixed parameter counts.`,
      lifeSkills: `Understanding multiple approaches to the same problem is a powerful meta-skill. Just as there are multiple ways to classify text, there are multiple ways to approach any life challenge. Knowing your toolkit expands your options.`,
    },
    mathModelling: {
      need: `Comparing classical classifiers requires understanding their mathematical foundations, computational complexity, and representational capacity.`,
      motivation: `Only by understanding the limitations of classical approaches can we appreciate where quantum methods offer genuine advantages.`,
      challenge: `Modelling the decision boundaries of different classifiers and understanding why some boundaries are harder to learn than others.`,
      equations: [
        {
          latex: `P(c|\\mathbf{x}) = \\frac{P(c) \\prod_i P(x_i|c)}{P(\\mathbf{x})}`,
          meaning: `Naive Bayes computes class probability using Bayes' theorem with the strong assumption that features are conditionally independent given the class.`,
          interpretation: `Despite the naive assumption, this works surprisingly well for text because word occurrences, while not truly independent, have a regularising effect.`,
        },
        {
          latex: `\\min_{\\mathbf{w}, b} \\frac{1}{2}\\|\\mathbf{w}\\|^2 \\quad \\text{s.t.} \\quad y_i(\\mathbf{w} \\cdot \\mathbf{x}_i + b) \\geq 1`,
          meaning: `The SVM optimisation problem finds the maximum-margin hyperplane by minimising the norm of the weight vector subject to correct classification constraints.`,
          interpretation: `The margin is the distance between the hyperplane and the nearest data points (support vectors). Maximising this margin improves generalisation.`,
        },
        {
          latex: `\\mathbf{h}^{(l)} = \\sigma(\\mathbf{W}^{(l)}\\mathbf{h}^{(l-1)} + \\mathbf{b}^{(l)})`,
          meaning: `A feed-forward neural network transforms input through L layers of weighted linear combinations followed by non-linear activations.`,
          interpretation: `Each layer learns increasingly abstract features. The final layer uses softmax to produce a probability distribution over classes. The universal approximation theorem guarantees that a sufficiently wide network can approximate any continuous function.`,
        },
      ],
      variables: [
        { symbol: `P(c)`, name: `Prior Probability`, description: `Probability of class c before seeing any evidence` },
        { symbol: `\\mathbf{w}`, name: `Weight Vector`, description: `Normal vector defining the SVM decision hyperplane` },
        { symbol: `b`, name: `Bias Term`, description: `Offset of the decision hyperplane from the origin` },
        { symbol: `\\mathbf{h}^{(l)}`, name: `Hidden Layer Activation`, description: `Output of layer l in a neural network` },
        { symbol: `\\sigma`, name: `Activation Function`, description: `Non-linear function (ReLU, sigmoid, tanh) applied at each layer` },
      ],
      interactive: {
        equation: `y = \\text{sign}(\\mathbf{w} \\cdot \\mathbf{x} + b)`,
        description: `Adjust the SVM hyperplane and see how the decision boundary changes:`,
        variables: [
          { symbol: `\\mathbf{w}`, name: `Weight Vector`, description: `Orientation of the hyperplane` },
          { symbol: `b`, name: `Bias`, description: `Offset of the hyperplane` },
        ],
        sliders: [
          { name: `w1`, label: `Weight w1`, min: -5, max: 5, step: 0.1, default: 1 },
          { name: `w2`, label: `Weight w2`, min: -5, max: 5, step: 0.1, default: 1 },
          { name: `b`, label: `Bias`, min: -5, max: 5, step: 0.1, default: 0 },
        ],
      },
      charts: [
        {
          title: `Classifier Performance Comparison Across Benchmarks`,
          type: `bar`,
          data: [
            { name: `Naive Bayes`, Accuracy: 0.82, Precision: 0.80, Recall: 0.79, F1: 0.79 },
            { name: `SVM`, Accuracy: 0.87, Precision: 0.86, Recall: 0.85, F1: 0.85 },
            { name: `Neural Net`, Accuracy: 0.90, Precision: 0.89, Recall: 0.90, F1: 0.89 },
            { name: `Quantum SVM`, Accuracy: 0.93, Precision: 0.93, Recall: 0.92, F1: 0.92 },
          ],
        },
      ],
      advantages: `Classical classifiers are well-understood, computationally efficient for small-to-medium datasets, and have mature software implementations. They serve as reliable baselines for measuring quantum improvements.`,
      limitations: `Naive Bayes assumes feature independence, SVM struggles with very large datasets (O(n²) training), and neural networks require extensive hyperparameter tuning. All face fundamental complexity limits as data scales.`,
    },
    activities: [
      {
        title: `Classifier Selection Matrix`,
        description: `Groups create a decision matrix comparing classical classifiers across multiple criteria.`,
        steps: [
          `List all classical classifiers covered`,
          `Rate each on: interpretability, speed, accuracy, scalability, data efficiency`,
          `Create a final decision matrix on the board`,
          `Discuss which scenarios favour each classifier`,
        ],
        materials: `Whiteboard or spreadsheet tool`,
        timeRequired: `7 min`,
        outcomes: `Students can systematically compare classification algorithms`,
      },
      {
        title: `Kernel Trick Visualisation`,
        description: `Using an interactive tool, students see how the kernel trick maps non-linearly separable data to a higher-dimensional space.`,
        steps: [
          `Load a 2D non-separable dataset`,
          `Apply linear SVM — observe poor performance`,
          `Apply RBF kernel — observe transformed feature space`,
          `Visualise the decision boundary in the original space`,
        ],
        outcomes: `Students intuitively understand the power of kernel methods`,
      },
      {
        title: `Complexity Analysis Exercise`,
        description: `Students compute the time and memory complexity of each classifier for a given dataset size.`,
        steps: [
          `Given a dataset with n=10,000 documents and d=50,000 features`,
          `Compute training and inference complexity for each classifier`,
          `Plot complexity vs dataset size for all three classifiers`,
          `Identify where quantum approaches could reduce complexity`,
        ],
        timeRequired: `8 min`,
        outcomes: `Students can reason about computational trade-offs of different classifiers`,
      },
    ],
    project: {
      scope: `Implement and compare three classical classifiers on a standard text classification benchmark, establishing a baseline for quantum comparison.`,
      objectives: [
        `Implement Naive Bayes, SVM, and a simple neural network`,
        `Measure accuracy, precision, recall, and training time`,
        `Identify the best-performing classical model`,
        `Document limitations that quantum could address`,
      ],
      timeline: [
        { phase: `Implementation`, duration: `5 min`, percent: 50 },
        { phase: `Evaluation`, duration: `3 min`, percent: 30 },
        { phase: `Analysis`, duration: `2 min`, percent: 20 },
      ],
      teamRoles: [
        { role: `Implementer`, responsibility: `Writes the classifier code` },
        { role: `Evaluator`, responsibility: `Runs benchmarks and collects metrics` },
        { role: `Analyst`, responsibility: `Interprets results and identifies quantum opportunities` },
      ],
      deliverables: [
        `Working classifier implementations`,
        `Benchmark results table`,
        `Analysis report with quantum improvement recommendations`,
      ],
    },
    questions: [
      {
        question: `Why does Naive Bayes work well for text classification despite its strong independence assumption?`,
        answer: `Word occurrences, while not truly independent, follow patterns that the naive assumption regularises effectively. The ranking of class probabilities is often preserved even if the absolute probabilities are inaccurate.`,
        explanation: `Naive Bayes is a "good" classifier in the sense that it makes correct decisions for the right reasons on many text problems, even though its probability estimates are biased.`,
        commonMistake: `Assuming that violation of the independence assumption always degrades performance. In practice, it often helps by reducing overfitting.`,
        tip: `Think of Naive Bayes as a "quick and dirty" baseline that is surprisingly hard to beat with simple approaches.`,
      },
      {
        question: `What is the kernel trick in SVMs and why is it important?`,
        answer: `The kernel trick computes dot products in a high-dimensional feature space without explicitly mapping data to that space. It enables SVMs to learn non-linear decision boundaries at the computational cost of linear SVMs.`,
        explanation: `By replacing the standard dot product with a kernel function (RBF, polynomial, etc.), the SVM implicitly operates in a much richer feature space. This is conceptually similar to how quantum feature maps encode data into exponentially large Hilbert spaces.`,
        commonMistake: `Thinking kernels create new features — they only compute inner products in an implicit space.`,
        tip: `The quantum feature map is the quantum analogue of the kernel trick, but in a space that grows exponentially with the number of qubits.`,
      },
    ],
    virtualLab: {
      description: `Compare all three classical classifiers side-by-side on a standard text dataset and observe their decision boundaries in 2D projections.`,
      steps: [
        `Load the 20 Newsgroups dataset sample`,
        `Train a Multinomial Naive Bayes classifier`,
        `Train a linear SVM with TF-IDF features`,
        `Train a feed-forward neural network with word embeddings`,
        `Compare all three on precision, recall, F1-score, and training time`,
      ],
      stepDetails: [
        `Dataset is reduced to 3 categories and 500 documents for visualisation`,
        `Naive Bayes trains nearly instantly but assumes feature independence`,
        `SVM finds max-margin boundary and provides support vector visualisation`,
        `Neural network learns hierarchical features through backpropagation`,
        `Side-by-side comparison table and confusion matrix for each classifier`,
      ],
      completionMessage: `You have thoroughly compared three classical text classification approaches!`,
      dataFlow: `flowchart LR
        A[20 Newsgroups] --> B[TF-IDF Features]
        A --> C[Word Embeddings]
        B --> D[Naive Bayes]
        B --> E[SVM]
        C --> F[Neural Net]
        D --> G{Predictions}
        E --> G
        F --> G
        G --> H[Evaluation Matrix]`,
    },
    insights: {
      advantages: [
        `Classical classifiers are well-established with mature libraries (scikit-learn, PyTorch)`,
        `Clear theoretical guarantees for generalisation (SVM margin, VC dimension)`,
        `Interpretable models exist (Naive Bayes feature importance, SVM support vectors)`,
        `Training and inference are efficient on classical hardware for moderate scales`,
      ],
      disadvantages: [
        `Naive Bayes struggles with correlated features common in text`,
        `SVMs scale poorly with dataset size (O(n²) to O(n³) training)`,
        `Neural networks require extensive hyperparameter tuning and large datasets`,
        `All classical approaches face fundamental expressivity limits with bounded parameter counts`,
      ],
      futureScope: `Quantum classifiers aim to combine the best of all classical approaches: the training efficiency of Naive Bayes, the margin optimisation of SVMs, and the representational power of neural networks — all within an exponentially larger state space.`,
      industrialApplications: [
        `Document routing and triage in enterprise content management`,
        `Automated essay scoring in educational platforms`,
        `Patent classification for intellectual property management`,
        `News article categorisation for media monitoring`,
      ],
      careerRelevance: `Mastery of classical classifiers is essential for any NLP role. Understanding quantum extensions differentiates you as a forward-thinking practitioner prepared for next-generation hardware.`,
    },
  },

  '11.3': {
    topicId: '11.3',
    learningObjective: `Understand the complete quantum classification workflow from data encoding to measurement, and how it differs from the classical pipeline.`,
    nextPrep: `Revisit quantum circuit concepts from Module 5 and the concept of parameterised quantum circuits.`,
    dependencyGraph: `flowchart LR
      A[11.2 Classical Approaches] --> B[11.3 Quantum Workflow]
      B --> C[11.4 Data Preparation]
      B --> D[Feature Encoding]
      B --> E[Quantum Circuit]
      B --> F[Measurement]
      style B fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `In a classical kitchen, a chef follows a recipe step by step: chop, mix, heat, serve. Each step is sequential and deterministic. In a quantum kitchen, the chef places all ingredients in a superposition of states — the soup is simultaneously hot and cold, sweet and savoury — until a measurement collapses it into a final dish. The quantum classification workflow follows this same pattern: encode data into superposition, evolve through parameterised gates, measure to extract a class label. Understanding this workflow is like learning a new cooking technique that could revolutionise your kitchen.`,
      questions: [
        `How does superposition change the way we think about data processing?`,
        `What happens to information when we measure a quantum state?`,
        `Why would we want data to exist in multiple states simultaneously?`,
      ],
      connection: `Just as a recipe has a structured sequence of steps, the quantum classification workflow follows a clear pipeline: encode, evolve, measure. Each step maps an element of the classical pipeline to a quantum operation, creating a fundamentally new approach to classification.`,
      technicalIntro: `The quantum classification workflow consists of four stages: (1) Data encoding — mapping classical text representations to quantum states via amplitude, angle, or variational encoding. (2) Quantum circuit evolution — applying parameterised quantum gates that transform the state through a unitary operation U(θ). (3) Measurement — collapsing the quantum state to extract classical information, typically the probability of each class. (4) Optimisation — updating gate parameters using a classical optimiser to minimise the loss function. This hybrid loop means the quantum circuit acts as a drop-in replacement for classical classifiers within a standard ML training loop.`,
      lifeSkills: `Understanding workflows — the sequence of steps to transform inputs to outputs — is a fundamental project management skill. Whether cooking, coding, or building a business, a clear workflow turns complexity into manageable steps.`,
    },
    mathModelling: {
      need: `The quantum workflow requires mathematical modelling of each stage: encoding, unitary evolution, measurement, and optimisation.`,
      motivation: `Each stage has a classical analogue, but the quantum version operates in an exponentially larger state space. Understanding the mapping clarifies when and why quantum advantage arises.`,
      challenge: `Modelling the complete quantum classification pipeline as a differentiable end-to-end system for gradient-based optimisation.`,
      equations: [
        {
          latex: `\\ket{\\psi(\\mathbf{x})} = U_{\\text{enc}}(\\mathbf{x})\\ket{0^{\\otimes n}}`,
          meaning: `Data encoding maps classical input x to an n-qubit quantum state via a unitary encoding circuit.`,
          interpretation: `The classical data x is embedded into the amplitudes or phases of a quantum state. The choice of encoding scheme dramatically affects the model's expressivity.`,
        },
        {
          latex: `U(\\theta) = \\prod_{l=1}^{L} \\prod_{i=1}^{n} R_i^{(l)}(\\theta_i^{(l)}) \\prod_{\\langle i,j \\rangle} \\text{CNOT}_{i,j}`,
          meaning: `A parameterised quantum circuit consists of alternating layers of single-qubit rotations and entangling CNOT gates.`,
          interpretation: `The rotation gates R_x, R_y, R_z with parameters θ transform individual qubit states, while CNOT gates create correlations (entanglement) between qubits, enabling the circuit to represent complex functions.`,
        },
        {
          latex: `P(c|\\mathbf{x}; \\theta) = |\\braket{c|\\psi(\\mathbf{x}; \\theta)}|^2`,
          meaning: `The probability of class c is the squared magnitude of the overlap between the evolved state and a measurement basis state representing that class.`,
          interpretation: `Measurement collapses the quantum state. The probability of obtaining outcome c is given by Born's rule — the squared amplitude of the projection onto the basis state |c⟩.`,
        },
      ],
      variables: [
        { symbol: `\\ket{\\psi(\\mathbf{x})}`, name: `Encoded Quantum State`, description: `The quantum state after encoding classical data x` },
        { symbol: `U_{\\text{enc}}(\\mathbf{x})`, name: `Encoding Unitary`, description: `Unitary operation that maps classical data to quantum state` },
        { symbol: `\\theta`, name: `Circuit Parameters`, description: `Trainable rotation angles in the parameterised quantum circuit` },
        { symbol: `R_i`, name: `Rotation Gate`, description: `Single-qubit rotation around Pauli axis (X, Y, or Z) on qubit i` },
        { symbol: `\\text{CNOT}`, name: `CNOT Gate`, description: `Controlled-NOT gate that entangles two qubits` },
      ],
      interactive: {
        equation: `P(c|\\mathbf{x}; \\theta) = |\\langle c | U(\\theta) U_{\\text{enc}}(\\mathbf{x}) | 0^n \\rangle|^2`,
        description: `Adjust the encoding and circuit parameters to see how classification probabilities change:`,
        variables: [
          { symbol: `\\theta`, name: `Circuit Parameters`, description: `Rotation angles in the quantum circuit` },
          { symbol: `\\mathbf{x}`, name: `Input Data`, description: `Classical feature vector to be encoded` },
        ],
        sliders: [
          { name: `theta1`, label: `Rotation θ1`, min: 0, max: 6.28, step: 0.1, default: 1.57 },
          { name: `theta2`, label: `Rotation θ2`, min: 0, max: 6.28, step: 0.1, default: 0.78 },
          { name: `x1`, label: `Input Feature x1`, min: -3, max: 3, step: 0.1, default: 0.5 },
        ],
      },
      charts: [
        {
          title: `Quantum Workflow Stage Timing Breakdown`,
          type: `bar`,
          data: [
            { name: `Encoding`, Classical: 5, Quantum: 15 },
            { name: `Processing`, Classical: 60, Quantum: 10 },
            { name: `Measurement`, Classical: 5, Quantum: 25 },
            { name: `Optimisation`, Classical: 30, Quantum: 50 },
          ],
        },
        {
          title: `Expressivity: Classical vs Quantum Models by Parameter Count`,
          type: `line`,
          data: [
            { name: `10`, Classical: 1024, Quantum: 1048576 },
            { name: `20`, Classical: 1048576, Quantum: 1099511627776 },
            { name: `30`, Classical: 1073741824, Quantum: 1152921504606846976 },
          ],
        },
      ],
      advantages: `The quantum workflow operates in an exponentially large Hilbert space, enabling representation of complex functions with relatively few parameters. The hybrid optimisation loop leverages classical optimisers while the quantum circuit provides rich feature maps.`,
      limitations: `Measurement collapses the quantum state, requiring many shots for accurate probability estimates. The encoding step is computationally expensive and can erase the quantum advantage. Noisy hardware limits circuit depth and fidelity.`,
    },
    activities: [
      {
        title: `Workflow Mapping Exercise`,
        description: `Students draw the complete quantum classification workflow and map each step to its classical analogue.`,
        steps: [
          `Start with the classical pipeline: Preprocess -> Embed -> Classify -> Evaluate`,
          `Draw the quantum pipeline: Encode -> Evolve -> Measure -> Optimise`,
          `Draw arrows connecting analogous steps between pipelines`,
          `Discuss: where does the quantum advantage arise in this workflow?`,
        ],
        materials: `Large paper sheets, markers`,
        timeRequired: `8 min`,
        outcomes: `Students understand the parallel structure of classical and quantum workflows`,
      },
      {
        title: `Parameter Counting Challenge`,
        description: `Students compute how many parameters are needed for classical vs quantum classifiers to achieve similar expressivity.`,
        steps: [
          `Given a 10-dimensional input, compute the parameter count for a classical neural network with 2 hidden layers of 64 units each`,
          `Compute the parameter count for a quantum circuit with 10 qubits and 3 layers of rotations and entangling gates`,
          `Discuss: which model can represent more complex functions with fewer parameters?`,
        ],
        timeRequired: `6 min`,
        outcomes: `Students appreciate the parameter efficiency of quantum models`,
      },
    ],
    project: {
      scope: `Design a complete quantum classification workflow for a binary sentiment classification task, specifying the encoding, circuit, measurement, and optimisation strategy.`,
      objectives: [
        `Specify the data encoding scheme`,
        `Design the parameterised quantum circuit ansatz`,
        `Define the measurement and interpretation strategy`,
        `Plan the hybrid optimisation loop`,
      ],
      timeline: [
        { phase: `Encoding Design`, duration: `3 min`, percent: 30 },
        { phase: `Circuit Design`, duration: `4 min`, percent: 40 },
        { phase: `Optimisation Plan`, duration: `3 min`, percent: 30 },
      ],
      teamRoles: [
        { role: `Encoding Specialist`, responsibility: `Designs the data encoding circuit` },
        { role: `Circuit Architect`, responsibility: `Designs the parameterised circuit ansatz` },
        { role: `Optimisation Lead`, responsibility: `Plans the hybrid training loop` },
      ],
      deliverables: [
        `Complete workflow diagram with all four stages`,
        `Circuit diagram showing encoding + parameterised + measurement sections`,
        `Optimisation strategy document with loss function and optimiser choice`,
      ],
    },
    questions: [
      {
        question: `What are the four stages of the quantum classification workflow?`,
        answer: `Data encoding, quantum circuit evolution, measurement, and classical optimisation. This forms a hybrid quantum-classical loop.`,
        explanation: `The classical data is first encoded into a quantum state. A parameterised circuit evolves this state. Measurement extracts class probabilities. A classical optimiser updates the circuit parameters to minimise the loss.`,
        commonMistake: `Thinking measurement is the final step — it is part of the iterative training loop, repeated each iteration.`,
        tip: `Remember the mnemonic: Encode, Evolve, Measure, Optimise (EEMO).`,
      },
      {
        question: `Why is the quantum classification workflow considered a hybrid approach?`,
        answer: `It combines a quantum circuit for the core computation with a classical optimiser for parameter updates. The quantum and classical components run in a loop.`,
        explanation: `Current quantum hardware cannot perform optimisation natively, and classical computers cannot simulate large quantum systems efficiently. The hybrid loop leverages the strengths of both paradigms.`,
        commonMistake: `Assuming the entire workflow runs on quantum hardware — optimisation happens on a classical computer.`,
        tip: `Think of the quantum circuit as a differentiable layer in a classical neural network.`,
      },
    ],
    virtualLab: {
      description: `Step through each stage of the quantum classification workflow interactively, adjusting parameters and observing the effects.`,
      steps: [
        `Select a data point and visualise its classical features`,
        `Apply amplitude encoding and observe the quantum state on the Bloch sphere`,
        `Run the parameterised circuit layer by layer, tracking state evolution`,
        `Perform measurement and view the probability distribution over classes`,
        `Run the optimiser and watch the decision boundary evolve across iterations`,
      ],
      stepDetails: [
        `A 2D feature vector (x₁, x₂) is encoded into 2 qubits using angle encoding`,
        `Each rotation gate Rx(θ) and Ry(θ) is applied step by step with visual feedback`,
        `The Bloch sphere representation of each qubit is updated in real time`,
        `Measurement outcomes are aggregated over 1024 shots to estimate class probabilities`,
        `The loss curve and decision boundary animation show the training progress`,
      ],
      completionMessage: `You have completed the full quantum classification workflow simulation!`,
      dataFlow: `flowchart TD
        A[Classical Data x] --> B[Encoding Circuit]
        B --> C[Quantum State |ψ(x)⟩]
        C --> D[Parameterised Circuit U(θ)]
        D --> E[Evolved State |ψ(x,θ)⟩]
        E --> F[Measurement]
        F --> G[Class Probabilities P(c)]
        G --> H{Loss Function}
        H --> I[Classical Optimiser]
        I --> J[Update θ]
        J --> D
        H --> K[Final Prediction]`,
    },
    insights: {
      advantages: [
        `Hybrid workflow leverages both quantum and classical computing strengths`,
        `Parameterised circuits can represent complex functions with few parameters`,
        `Modular design allows drop-in replacement of classical classifiers`,
        `Measurement provides natural probability estimates for classification`,
      ],
      disadvantages: [
        `Circuit depth limited by noise and decoherence on current hardware`,
        `Many measurement shots needed for accurate probability estimates`,
        `Encoding classical data to quantum states is computationally expensive`,
        `Barren plateaus in loss landscapes can make training difficult`,
      ],
      futureScope: `As quantum hardware improves, the hybrid workflow will transition toward deeper circuits, fewer measurement shots, and eventually fully quantum training loops. Error mitigation techniques are rapidly advancing to bridge the gap.`,
      industrialApplications: [
        `Real-time text classification in high-throughput environments`,
        `Fraud detection in financial transactions`,
        `Automated content moderation on social media platforms`,
        `Medical text triage and emergency response classification`,
      ],
      careerRelevance: `Understanding hybrid quantum-classical workflows is the most important skill for current QNLP practitioners. Most near-term quantum applications will follow this paradigm.`,
    },
  },

  '11.4': {
    topicId: '11.4',
    learningObjective: `Understand how to prepare classical text data for quantum classification, including tokenisation, embedding, and encoding into quantum states.`,
    nextPrep: `Review word embeddings from Module 6 and the concept of angle encoding.`,
    dependencyGraph: `flowchart LR
      A[11.3 Quantum Workflow] --> B[11.4 Data Preparation]
      B --> C[Tokenisation]
      B --> D[Embedding]
      B --> E[Quantum Encoding]
      E --> F[11.5 Sentiment Model]
      style B fill:#4a90d9,color:#fff`,
    storytelling: {
      story: `Imagine you are a translator who needs to convert a novel into a completely different language — not just a different human language, but the language of quantum mechanics. You cannot just pass the book to the quantum computer. You must first convert each word to numbers (embeddings), then convert those numbers to quantum state angles (encoding), and finally load those angles into qubits. This is the data preparation pipeline for QNLP. It is the crucial bridge between human language and quantum circuits.`,
      questions: [
        `What information is lost when we convert words to numbers?`,
        `How might the encoding scheme affect the final classification accuracy?`,
        `What makes a good quantum encoding for text data?`,
      ],
      connection: `Data preparation is where classical NLP meets quantum computing. The choices made at this stage — embedding dimension, encoding scheme, normalisation — directly determine what information is available to the quantum classifier and how well it can separate classes.`,
      technicalIntro: `Data preparation for QNLP follows three steps: (1) Tokenisation and preprocessing — splitting text into tokens, removing noise, and normalising. (2) Embedding — converting tokens to dense vector representations using classical embeddings (Word2Vec, GloVe, BERT). (3) Quantum encoding — mapping embedding vectors to quantum states using angle encoding (features become rotation angles), amplitude encoding (features become state amplitudes), or variational encoding (learned encoding circuits). The choice of encoding determines the size of the quantum circuit and the expressivity of the model.`,
      lifeSkills: `Data preparation teaches an important life lesson: garbage in, garbage out. The quality of your input determines the quality of your output. Whether preparing a presentation, cooking a meal, or building a model, careful preparation is the secret to success.`,
    },
    mathModelling: {
      need: `Classical text data must be transformed into quantum states through a mathematically well-defined encoding process.`,
      motivation: `The encoding scheme determines how much of the input information is preserved and how expressible the resulting quantum model will be. Poor encoding wastes the potential of the quantum circuit.`,
      challenge: `Designing an encoding that preserves semantic structure while fitting within the limited qubit budget of near-term quantum devices.`,
      equations: [
        {
          latex: `\\ket{\\psi(\\mathbf{x})} = \\bigotimes_{i=1}^{n} R_y(x_i)\\ket{0} = \\bigotimes_{i=1}^{n} \\left(\\cos\\frac{x_i}{2}\\ket{0} + \\sin\\frac{x_i}{2}\\ket{1}\\right)`,
          meaning: `Angle encoding maps each feature x_i to a rotation R_y on a dedicated qubit, creating a separable (non-entangled) quantum state.`,
          interpretation: `Each feature gets its own qubit. The feature value becomes the rotation angle, so the quantum state directly encodes the input vector component by component. This requires n qubits for an n-dimensional input.`,
        },
        {
          latex: `\\ket{\\psi(\\mathbf{x})} = \\frac{1}{\\|\\mathbf{x}\\|} \\sum_{i=1}^{2^n} x_i \\ket{i}`,
          meaning: `Amplitude encoding maps the entire input vector to the amplitudes of a 2^n-dimensional quantum state using only n qubits.`,
          interpretation: `For a 300-dimensional word vector, angle encoding needs 300 qubits, but amplitude encoding needs only ⌈log₂(300)⌉ = 9 qubits. However, preparing arbitrary amplitude-encoded states requires complex circuits.`,
        },
        {
          latex: `U_{\\text{enc}}(\\mathbf{x}; \\phi) = \\prod_{l} \\prod_{i} R_i^{(l)}(\\phi_i^{(l)} \\cdot x_i)`,
          meaning: `Variational encoding uses learnable parameters φ to scale each feature before applying rotations, combining encoding with trainable preprocessing.`,
          interpretation: `Instead of using x_i directly as rotation angles, we use φ_i · x_i where φ_i is learned. This allows the encoding to adapt to the data distribution during training.`,
        },
      ],
      variables: [
        { symbol: `R_y`, name: `Y-Rotation Gate`, description: `Single-qubit rotation around the Y-axis of the Bloch sphere` },
        { symbol: `\\bigotimes`, name: `Tensor Product`, description: `Combines individual qubit states into a multi-qubit system` },
        { symbol: `\\|\\mathbf{x}\\|`, name: `Vector Norm`, description: `L2 norm of the input vector, used for normalisation in amplitude encoding` },
        { symbol: `\\phi`, name: `Encoding Parameters`, description: `Learnable scaling factors in variational encoding` },
      ],
      interactive: {
        equation: `\\ket{\\psi(x)} = \\cos\\left(\\frac{x}{2}\\right)\\ket{0} + \\sin\\left(\\frac{x}{2}\\right)\\ket{1}`,
        description: `See how different feature values map to different positions on the Bloch sphere:`,
        variables: [
          { symbol: `x`, name: `Feature Value`, description: `A single normalised feature value` },
        ],
        sliders: [
          { name: `x`, label: `Feature Value`, min: -3.14, max: 3.14, step: 0.1, default: 1.0 },
        ],
      },
      charts: [
        {
          title: `Qubit Requirements by Encoding Scheme`,
          type: `bar`,
          data: [
            { name: `Angle Encoding (300d)`, qubits: 300 },
            { name: `Amplitude Encoding (300d)`, qubits: 9 },
            { name: `Variational Encoding (300d)`, qubits: 150 },
            { name: `Angle Encoding (768d)`, qubits: 768 },
            { name: `Amplitude Encoding (768d)`, qubits: 10 },
            { name: `Variational Encoding (768d)`, qubits: 384 },
          ],
        },
        {
          title: `Encoding Expressivity Comparison`,
          type: `radar`,
          data: [
            { metric: `Qubit Efficiency`, Angle: 2, Amplitude: 9, Variational: 6 },
            { metric: `Circuit Depth`, Angle: 9, Amplitude: 3, Variational: 7 },
            { metric: `Expressivity`, Angle: 4, Amplitude: 6, Variational: 8 },
            { metric: `Trainability`, Angle: 8, Amplitude: 4, Variational: 7 },
            { metric: `Noise Robustness`, Angle: 7, Amplitude: 3, Variational: 6 },
          ],
        },
      ],
      advantages: `Careful encoding preserves semantic information while minimising qubit usage. Amplitude encoding is exponentially more qubit-efficient than angle encoding. Variational encoding adds flexibility to adapt the encoding to the task.`,
      limitations: `Angle encoding requires many qubits for high-dimensional embeddings. Amplitude encoding requires deep circuits to prepare arbitrary states, which are noisy on current hardware. Variational encoding adds more parameters to train.`,
    },
    activities: [
      {
        title: `Encoding Comparison Matrix`,
        description: `Groups create a comparison matrix for the three encoding schemes across multiple criteria.`,
        steps: [
          `List the three encoding schemes: angle, amplitude, variational`,
          `Compare them on: qubit count, circuit depth, expressivity, noise tolerance`,
          `Simulate each encoding on a simple 2-feature input`,
          `Present findings and recommend the best scheme for sentiment analysis`,
        ],
        materials: `Quantum circuit simulator (pseudocode or online tool)`,
        timeRequired: `8 min`,
        outcomes: `Students can choose appropriate encoding schemes for different scenarios`,
      },
      {
        title: `From Text to Quantum State`,
        description: `Students manually trace the conversion of a sentence through tokenisation, embedding, and quantum encoding.`,
        steps: [
          `Select a sentence: "Quantum NLP is fascinating"`,
          `Tokenise into words: ["Quantum", "NLP", "is", "fascinating"]`,
          `Look up or generate 4-dimensional embeddings for each word`,
          `Apply angle encoding and draw the resulting quantum circuit`,
        ],
        timeRequired: `10 min`,
        outcomes: `Students can trace the complete data preparation pipeline end-to-end`,
      },
    ],
    project: {
      scope: `Design and implement a data preparation pipeline that converts raw text to quantum-ready encoded states for a sentiment classification task.`,
      objectives: [
        `Implement text preprocessing and tokenisation`,
        `Generate or load pre-trained word embeddings`,
        `Implement angle, amplitude, and variational encoding schemes`,
        `Compare encoding schemes on qubit usage and projected circuit depth`,
      ],
      timeline: [
        { phase: `Preprocessing`, duration: `3 min`, percent: 25 },
        { phase: `Embedding`, duration: `3 min`, percent: 25 },
        { phase: `Encoding Implementation`, duration: `5 min`, percent: 50 },
      ],
      teamRoles: [
        { role: `Preprocessing Lead`, responsibility: `Handles tokenisation and normalisation` },
        { role: `Embedding Specialist`, responsibility: `Selects and applies embedding models` },
        { role: `Encoding Engineer`, responsibility: `Implements quantum encoding circuits` },
      ],
      deliverables: [
        `Complete data preparation pipeline code`,
        `Quantum encoding circuit diagrams for each scheme`,
        `Comparison report with qubit counts and circuit depths`,
      ],
    },
    questions: [
      {
        question: `What is the key trade-off between angle encoding and amplitude encoding?`,
        answer: `Angle encoding uses n qubits for n features but produces shallow circuits, while amplitude encoding uses log₂(n) qubits but requires exponentially deeper circuits to prepare the state.`,
        explanation: `The choice depends on hardware constraints: angle encoding suits devices with many qubits but limited coherence time, while amplitude encoding suits devices with few qubits but deeper circuit capability.`,
        commonMistake: `Assuming amplitude encoding is always better because it uses fewer qubits — the circuit depth overhead often makes it impractical on current hardware.`,
        tip: `For near-term devices, angle encoding is usually more practical despite requiring more qubits.`,
      },
      {
        question: `Why might variational encoding outperform fixed encoding schemes?`,
        answer: `Variational encoding learns encoding parameters φ that scale input features optimally for the task, adapting the encoding to the data distribution.`,
        explanation: `This adds expressivity because the encoding becomes part of the trainable model, allowing the circuit to learn which features to emphasise or suppress during encoding.`,
        commonMistake: `Thinking the encoding is separate from training — variational encoding integrates encoding into the training loop, making it end-to-end differentiable.`,
        tip: `Variational encoding is a form of learned feature weighting applied before the quantum circuit.`,
      },
    ],
    virtualLab: {
      description: `Take a sentence through the complete data preparation pipeline, from raw text to encoded quantum state.`,
      steps: [
        `Enter a sentence in the text input box`,
        `View tokenised words with preprocessing applied`,
        `Examine the word embeddings retrieved for each token`,
        `Select an encoding scheme and observe the resulting quantum circuit`,
        `Simulate the encoded state and view its Bloch sphere representation`,
      ],
      stepDetails: [
        `Input text is tokenised using a simple whitespace tokeniser with lowercasing and punctuation removal`,
        `Pre-trained GloVe embeddings (50-dimensional) are retrieved for each token`,
        `Embeddings are projected to 2D using PCA for visualisation and encoded to 2 qubits`,
        `Angle encoding circuit diagram is generated with Rx and Ry gates labelled with feature values`,
        `The final 2-qubit state is visualised as two Bloch spheres with joint probability bars`,
      ],
      completionMessage: `You have successfully converted text to a quantum-ready encoded state!`,
      dataFlow: `flowchart LR
        A[Raw Text] --> B[Tokenizer]
        B --> C[Tokens]
        C --> D[Embedding Model]
        D --> E[Embedding Vector]
        E --> F[Encoder Circuit]
        F --> G[Quantum State |ψ⟩]
        G --> H[Ready for Classification]`,
    },
    insights: {
      advantages: [
        `Data preparation is a well-understood classical pipeline with mature tools`,
        `Multiple encoding schemes provide flexibility for different hardware constraints`,
        `Variational encoding integrates encoding into the learning process`,
        `Quantum encoding preserves semantic relationships when properly designed`,
      ],
      disadvantages: [
        `Encoding classical data to quantum states is computationally expensive`,
        `Fixed encoding schemes may waste qubits or circuit depth`,
        `Dimensionality reduction for quantum encoding may lose semantic information`,
        `Current hardware limits encoding complexity and fidelity`,
      ],
      futureScope: `Future quantum hardware with more qubits and lower noise will enable direct encoding of high-dimensional embeddings without dimensionality reduction, preserving more semantic information for classification.`,
      industrialApplications: [
        `Real-time text encoding for streaming NLP applications`,
        `Efficient encoding of medical records for quantum diagnosis`,
        `Financial document encoding for quantum-enhanced analysis`,
        `Social media text encoding for large-scale sentiment monitoring`,
        `Multilingual text encoding for cross-lingual quantum NLP`,
      ],
      careerRelevance: `Data preparation skills transfer directly from classical NLP to QNLP. Encoding design is a new skill specific to quantum ML that is increasingly in demand as quantum hardware matures.`,
    },
  },

  '11.5': {
    topicId: '11.5',
    learningObjective: `Build a complete quantum sentiment analysis model by combining encoding, parameterised circuits, and measurement into a working classifier.`,
    nextPrep: `Review the concept of binary classification and recall how softmax converts logits to probabilities.`,
    dependencyGraph: `flowchart LR
      A[11.3 Quantum Workflow] --> B[11.4 Data Preparation]
      B --> C[11.5 Sentiment Model]
      C --> D[11.6 Training & Validation]
      D --> E[11.7 Sentiment Lab]
      style C fill:#6a0dad,color:#fff`,
    storytelling: {
      story: `You are building a lie detector for movie reviews. When someone says "This film was absolutely brilliant," your machine should detect positive sentiment. When they say "Waste of two hours," it should detect negative sentiment. But here is the twist: your lie detector is a quantum computer that judges all possible sentiments simultaneously before collapsing to a verdict. This is quantum sentiment analysis — and you are about to build it.`,
      questions: [
        `How do humans detect sentiment in text? What cues do we use?`,
        `Why is sarcasm particularly hard for sentiment analysis?`,
        `How might quantum superposition help with ambiguous sentiment cases?`,
      ],
      connection: `Sentiment analysis is binary (or multi-class) text classification focused on emotional tone. It serves as the perfect testbed for quantum classification because it is well-understood, has clear baselines, and involves the nuanced pattern recognition where quantum models may excel.`,
      technicalIntro: `Our quantum sentiment model follows this architecture: (1) Encode review text to a parameterised quantum state using angle encoding on n qubits. (2) Apply a hardware-efficient ansatz with L layers of Rx, Ry, Rz rotations and CNOT entangling gates. (3) Measure the first qubit in the Z-basis — the expectation value ⟨Z₁⟩ gives the sentiment score, with ⟨Z₁⟩ > 0 indicating positive and ⟨Z₁⟩ < 0 indicating negative sentiment. (4) The classical optimiser updates circuit parameters to minimise binary cross-entropy loss against true sentiment labels.`,
      lifeSkills: `Building end-to-end systems — from data to model to deployment — is one of the most valuable skills in technology. It teaches holistic thinking, systematic debugging, and the satisfaction of creating something functional from components.`,
    },
    mathModelling: {
      need: `A complete quantum sentiment model requires specifying the circuit architecture, measurement scheme, and loss function for binary classification.`,
      motivation: `Sentiment analysis is binary, which maps naturally to a single-qubit measurement. The expectation value ⟨Z⟩ directly gives a signed continuous value interpretable as sentiment polarity.`,
      challenge: `Designing a circuit ansatz that can capture the nuanced linguistic patterns that distinguish positive from negative sentiment.`,
      equations: [
        {
          latex: `\\ket{\\psi(\\mathbf{x}; \\theta)} = U(\\theta) U_{\\text{enc}}(\\mathbf{x}) \\ket{0^{\\otimes n}}`,
          meaning: `The full quantum state is obtained by first encoding the input x, then applying the parameterised circuit U(θ).`,
          interpretation: `The encoding places the data into the quantum device, then the parameterised circuit transforms it into a state where sentiment information is accessible via measurement.`,
        },
        {
          latex: `\\hat{y}(\\mathbf{x}; \\theta) = \\langle \\psi(\\mathbf{x}; \\theta) | Z_1 | \\psi(\\mathbf{x}; \\theta) \\rangle`,
          meaning: `The predicted sentiment score is the expectation value of the Pauli Z operator on the first qubit.`,
          interpretation: `Z₁ measures the first qubit in the computational basis. The expectation value ranges from -1 (definitely negative) to +1 (definitely positive), with 0 indicating neutral.`,
        },
        {
          latex: `L(\\theta) = -\\frac{1}{N} \\sum_{i=1}^{N} \\left[ y_i \\log\\left(\\frac{1 + \\hat{y}_i}{2}\\right) + (1 - y_i) \\log\\left(1 - \\frac{1 + \\hat{y}_i}{2}\\right) \\right]`,
          meaning: `Binary cross-entropy loss adapted for the [-1, +1] range of the quantum expectation value.`,
          interpretation: `The expectation value is rescaled from [-1, +1] to [0, 1] to match the standard binary classification formulation. Minimising this loss aligns the quantum measurement outcomes with the true sentiment labels.`,
        },
      ],
      variables: [
        { symbol: `Z_1`, name: `Pauli Z on Qubit 1`, description: `Measurement operator that extracts the sentiment score from the first qubit` },
        { symbol: `\\hat{y}`, name: `Predicted Sentiment`, description: `Continuous sentiment score in [-1, +1] from quantum measurement` },
        { symbol: `y`, name: `True Sentiment Label`, description: `Ground truth: +1 for positive, -1 for negative (or 0/1 after rescaling)` },
        { symbol: `L(\\theta)`, name: `Loss Function`, description: `Binary cross-entropy measuring prediction error` },
      ],
      interactive: {
        equation: `\\hat{y} = \\langle Z_1 \\rangle = |\\alpha|^2 - |\\beta|^2`,
        description: `Adjust the quantum state amplitudes to see how sentiment predictions change:`,
        variables: [
          { symbol: `\\alpha`, name: `Amplitude of |0⟩`, description: `Probability amplitude for the positive class` },
          { symbol: `\\beta`, name: `Amplitude of |1⟩`, description: `Probability amplitude for the negative class` },
        ],
        sliders: [
          { name: `alpha`, label: `α (positive amplitude)`, min: 0, max: 1, step: 0.05, default: 0.8 },
          { name: `beta`, label: `β (negative amplitude)`, min: 0, max: 1, step: 0.05, default: 0.2 },
        ],
      },
      charts: [
        {
          title: `Quantum Sentiment Model Accuracy vs Classical Baselines`,
          type: `line`,
          data: [
            { name: `100`, Classical: 0.70, Quantum: 0.72 },
            { name: `200`, Classical: 0.76, Quantum: 0.80 },
            { name: `500`, Classical: 0.82, Quantum: 0.87 },
            { name: `1000`, Classical: 0.86, Quantum: 0.91 },
            { name: `2000`, Classical: 0.88, Quantum: 0.93 },
          ],
        },
        {
          title: `Sentiment Score Distribution Comparison`,
          type: `bar`,
          data: [
            { name: `Very Negative`, Classical: 0.12, Quantum: 0.15 },
            { name: `Negative`, Classical: 0.18, Quantum: 0.20 },
            { name: `Neutral`, Classical: 0.40, Quantum: 0.30 },
            { name: `Positive`, Classical: 0.20, Quantum: 0.22 },
            { name: `Very Positive`, Classical: 0.10, Quantum: 0.13 },
          ],
        },
      ],
      advantages: `The quantum sentiment model can represent complex sentiment patterns with fewer parameters than classical neural networks. The continuous expectation value provides natural uncertainty estimates.`,
      limitations: `Current hardware noise limits the circuit depth and thus the model's expressivity. The measurement step requires many shots for accurate expectation estimates. Training can suffer from barren plateaus in the loss landscape.`,
    },
    activities: [
      {
        title: `Circuit Architecture Design`,
        description: `Students design a hardware-efficient ansatz circuit for sentiment classification on 4 qubits.`,
        steps: [
          `Choose an encoding scheme for a 4-feature input vector`,
          `Design 3 layers of single-qubit rotations (Rx, Ry, Rz)`,
          `Add CNOT entangling gates between adjacent qubits`,
          `Label the measurement qubit and explain how sentiment is extracted`,
        ],
        materials: `Quantum circuit drawing tools or paper`,
        timeRequired: `8 min`,
        outcomes: `Students can design a complete quantum sentiment classification circuit`,
      },
      {
        title: `Sentiment Encoding Challenge`,
        description: `Given review snippets, students predict the sentiment and then trace how the quantum model would process it.`,
        steps: [
          `Read 5 movie review snippets`,
          `Predict the sentiment (positive/negative/neutral) manually`,
          `Identify the key sentiment-bearing words in each review`,
          `Trace how these words would be encoded and processed by the quantum circuit`,
        ],
        timeRequired: `7 min`,
        outcomes: `Students connect linguistic cues to quantum processing steps`,
      },
    ],
    project: {
      scope: `Build and document a complete quantum sentiment analysis model architecture for a binary classification task.`,
      objectives: [
        `Design the full circuit architecture (encoding + ansatz + measurement)`,
        `Specify the loss function and optimisation strategy`,
        `Identify key hyperparameters (number of qubits, layers, learning rate)`,
        `Plan evaluation metrics (accuracy, precision, recall, F1)`,
      ],
      timeline: [
        { phase: `Architecture Design`, duration: `4 min`, percent: 40 },
        { phase: `Hyperparameter Selection`, duration: `3 min`, percent: 30 },
        { phase: `Evaluation Planning`, duration: `3 min`, percent: 30 },
      ],
      teamRoles: [
        { role: `Circuit Designer`, responsibility: `Designs the quantum circuit architecture` },
        { role: `Training Lead`, responsibility: `Specifies loss function and optimiser` },
        { role: `Evaluation Lead`, responsibility: `Defines metrics and validation strategy` },
      ],
      deliverables: [
        `Complete circuit diagram for sentiment classification`,
        `Training configuration document with hyperparameters`,
        `Evaluation plan with target metrics`,
      ],
    },
    questions: [
      {
        question: `How does the quantum sentiment model output a continuous sentiment score?`,
        answer: `It measures the expectation value ⟨Z₁⟩ of the Pauli Z operator on the first qubit, which ranges from -1 (negative) to +1 (positive).`,
        explanation: `The expectation value ⟨Z₁⟩ = |α|² - |β|² gives the difference between the probability of measuring |0⟩ (positive) and |1⟩ (negative), providing a natural sentiment polarity score.`,
        commonMistake: `Thinking the output must be a discrete class label — quantum measurement inherently produces continuous expectation values from repeated shots.`,
        tip: `Use ⟨Z₁⟩ as the logit and apply a sigmoid to convert to probability for cross-entropy loss.`,
      },
      {
        question: `What is a hardware-efficient ansatz and why is it used?`,
        answer: `A hardware-efficient ansatz uses gates that are native to the target quantum device (typically single-qubit rotations and nearest-neighbour CNOTs), minimising circuit depth and gate errors.`,
        explanation: `On NISQ devices, deep circuits with many gates accumulate noise. Hardware-efficient ansätze minimise depth by avoiding long-range entangling gates and using only gates that the hardware implements natively with high fidelity.`,
        commonMistake: `Using arbitrary gates without considering hardware constraints — this leads to circuits that cannot run on actual devices.`,
        tip: `Design your ansatz by checking the native gate set and qubit connectivity of your target quantum hardware.`,
      },
    ],
    virtualLab: {
      description: `Build and test a complete quantum sentiment analysis model on sample movie reviews.`,
      steps: [
        `Load the sample movie review dataset (50 positive, 50 negative)`,
        `Preprocess reviews and generate word embeddings`,
        `Design a 4-qubit sentiment circuit with your chosen ansatz`,
        `Train the circuit parameters on the training subset`,
        `Evaluate the trained model on test reviews and view predictions`,
      ],
      stepDetails: [
        `Dataset contains 100 IMDB movie reviews with binary sentiment labels`,
        `Embeddings are 4-dimensional (projected from GloVe 50d for visualisation)`,
        `Angle encoding maps each embedding dimension to an Rx rotation on one of 4 qubits`,
        `Training runs for 50 iterations with the Adam optimiser, tracking loss and accuracy`,
        `Test set evaluation shows confusion matrix, accuracy, and example predictions with confidence scores`,
      ],
      completionMessage: `Your quantum sentiment analysis model is trained and evaluated!`,
      dataFlow: `flowchart TD
        A[Movie Review Text] --> B[Preprocessing]
        B --> C[Embedding]
        C --> D[Angle Encoding]
        D --> E[4-Qubit Quantum Circuit]
        E --> F[Measure ⟨Z₁⟩]
        F --> G{Sentiment Score}
        G -->|> 0| H[Positive]
        G -->|< 0| I[Negative]
        G -->|≈ 0| J[Neutral]`,
    },
    insights: {
      advantages: [
        `Quantum sentiment model can capture complex sentiment patterns with few parameters`,
        `Natural uncertainty estimates from quantum measurement statistics`,
        `Hybrid training loop is compatible with existing ML infrastructure`,
        `Well-suited for binary classification tasks common in industry`,
      ],
      disadvantages: [
        `Current hardware limits circuit depth and model expressivity`,
        `Many measurement shots required for accurate expectation values`,
        `Training is sensitive to learning rate and initialisation`,
        `Barren plateaus can prevent convergence for deep circuits`,
      ],
      futureScope: `As hardware improves, quantum sentiment models will incorporate richer text representations, deeper circuits, and multi-class outputs. Integration with classical attention mechanisms is a promising research direction.`,
      industrialApplications: [
        `Social media sentiment monitoring at scale`,
        `Customer feedback analysis for product improvement`,
        `Brand reputation tracking across news and social platforms`,
        `Financial market sentiment analysis for trading signals`,
        `Employee satisfaction analysis from internal communications`,
      ],
      careerRelevance: `Building end-to-end quantum ML models for text is a cutting-edge skill at the intersection of two high-demand fields: NLP and quantum computing. Practitioners with this expertise are sought after in research labs and forward-thinking companies.`,
    },
  },

  '11.6': {
    topicId: '11.6',
    learningObjective: `Understand the training and validation process for quantum classification models, including loss landscape challenges and evaluation metrics.`,
    nextPrep: `Review gradient-based optimisation and the concept of validation sets for hyperparameter tuning.`,
    dependencyGraph: `flowchart LR
      A[11.5 Sentiment Model] --> B[11.6 Training & Validation]
      B --> C[Loss Landscape]
      B --> D[Parameter Shift]
      B --> E[Evaluation Metrics]
      B --> F[11.7 Sentiment Lab]
      style B fill:#4a90d9,color:#fff`,
    storytelling: {
      story: `You have built a quantum sentiment engine — congratulations! But like a car that has just been assembled, it needs tuning before it can race. Training a quantum model is like teaching a musician to play a new instrument. At first, the notes are random and discordant. But through practice (iterations), feedback (loss function), and adjustment (parameter updates), the music becomes harmonious. Validation is the dress rehearsal — making sure the performance works for an audience that wasn't at the rehearsals.`,
      questions: [
        `How do you know when a model is truly learning versus just memorising the data?`,
        `Why might the same model perform differently on different datasets?`,
        `What makes training quantum models harder than training classical neural networks?`,
      ],
      connection: `Training is the process of finding circuit parameters that minimise the loss on training data. Validation ensures the model generalises to unseen data. The unique challenge for quantum models is the loss landscape — it can have barren plateaus where gradients vanish, making training extremely difficult.`,
      technicalIntro: `Quantum model training follows a hybrid loop: (1) Forward pass — encode data, run the circuit, measure expectation values. (2) Loss computation — compare predictions to labels using binary cross-entropy. (3) Gradient computation — use the parameter shift rule to compute analytic gradients of the quantum circuit. (4) Parameter update — classical optimiser (Adam, SGD, COBYLA) updates θ to reduce loss. Validation follows standard ML practice with a held-out test set. Key quantum-specific challenges include barren plateaus (variance of gradients decays exponentially with qubit count) and the need for many measurement shots for precise gradient estimates.`,
      lifeSkills: `Training and validation mirror the scientific method: hypothesise (initialise parameters), experiment (run circuit), measure (compute loss), refine (update parameters), and verify (validate on new data). This iterative refinement process applies to any complex problem-solving endeavour.`,
    },
    mathModelling: {
      need: `Training requires computing gradients of quantum circuit outputs with respect to circuit parameters, which is non-trivial because quantum circuits are unitary (and thus preserve norm).`,
      motivation: `The parameter shift rule provides analytic gradients without backpropagation through the quantum device, enabling gradient-based optimisation.`,
      challenge: `The loss landscape of parameterised quantum circuits often contains barren plateaus — regions where gradients vanish exponentially with system size — making training extremely difficult for large circuits.`,
      equations: [
        {
          latex: `\\frac{\\partial f(\\theta)}{\\partial \\theta_i} = \\frac{f(\\theta + \\frac{\\pi}{2}e_i) - f(\\theta - \\frac{\\pi}{2}e_i)}{2}`,
          meaning: `The parameter shift rule computes the gradient of a quantum circuit output f(θ) with respect to parameter θ_i by evaluating the circuit at two shifted parameter values.`,
          interpretation: `Unlike classical neural networks where gradients flow through backpropagation, quantum circuits measure the gradient by running the circuit at two nearby points. Each gradient evaluation costs 2 circuit executions per parameter.`,
        },
        {
          latex: `\\text{Var}\\left[\\frac{\\partial L}{\\partial \\theta_i}\\right] \\propto e^{-n}`,
          meaning: `The variance of gradients decays exponentially with the number of qubits n in deep, random quantum circuits — the barren plateau phenomenon.`,
          interpretation: `For circuits with more than about 10-20 qubits, random initialisation leads to gradients so small that training effectively stops. This is the single biggest obstacle to scaling quantum classifiers.`,
        },
        {
          latex: `\\text{Accuracy} = \\frac{1}{N} \\sum_{i=1}^N \\mathbb{1}(\\hat{y}_i = y_i)`,
          meaning: `Accuracy is the fraction of correct predictions over the test set.`,
          interpretation: `While simple, accuracy is the most interpretable metric for comparing quantum and classical models. Always report alongside precision, recall, and F1-score for a complete picture.`,
        },
      ],
      variables: [
        { symbol: `f(\\theta)`, name: `Circuit Output`, description: `The expectation value or measurement outcome of the quantum circuit` },
        { symbol: `\\frac{\\partial f}{\\partial \\theta_i}`, name: `Parameter Gradient`, description: `Partial derivative of circuit output with respect to parameter i` },
        { symbol: `e_i`, name: `Unit Vector`, description: `Standard basis vector with 1 in position i and 0 elsewhere` },
        { symbol: `\\text{Var}[\\cdot]`, name: `Gradient Variance`, description: `Statistical variance of gradient components across the loss landscape` },
      ],
      interactive: {
        equation: `\\theta_{t+1} = \\theta_t - \\eta \\nabla L(\\theta_t)`,
        description: `Adjust the learning rate and observe how training convergence changes:`,
        variables: [
          { symbol: `\\eta`, name: `Learning Rate`, description: `Step size for parameter updates` },
          { symbol: `\\nabla L`, name: `Loss Gradient`, description: `Gradient of the loss with respect to parameters` },
        ],
        sliders: [
          { name: `eta`, label: `Learning Rate η`, min: 0.001, max: 1.0, step: 0.01, default: 0.1 },
          { name: `params`, label: `Number of Parameters`, min: 2, max: 50, step: 2, default: 10 },
        ],
      },
      charts: [
        {
          title: `Training Convergence: Quantum vs Classical`,
          type: `line`,
          data: [
            { name: `5`, Quantum: 0.55, Classical: 0.60 },
            { name: `10`, Quantum: 0.65, Classical: 0.68 },
            { name: `20`, Quantum: 0.78, Classical: 0.75 },
            { name: `30`, Quantum: 0.85, Classical: 0.80 },
            { name: `40`, Quantum: 0.89, Classical: 0.83 },
            { name: `50`, Quantum: 0.92, Classical: 0.85 },
          ],
        },
        {
          title: `Gradient Magnitude During Training (Barren Plateau Effect)`,
          type: `line`,
          data: [
            { name: `4 qubits`, epoch5: 0.85, epoch10: 0.72, epoch20: 0.58, epoch50: 0.45 },
            { name: `8 qubits`, epoch5: 0.45, epoch10: 0.32, epoch20: 0.18, epoch50: 0.12 },
            { name: `12 qubits`, epoch5: 0.12, epoch10: 0.08, epoch20: 0.04, epoch50: 0.02 },
          ],
        },
      ],
      advantages: `The parameter shift rule gives exact analytic gradients (up to measurement shot noise), enabling reliable gradient-based optimisation. The hybrid loop leverages powerful classical optimisers.`,
      limitations: `Barren plateaus make training large circuits impractical. Each gradient evaluation costs 2 circuit executions per parameter, which is expensive. Measurement shot noise adds variance to gradient estimates.`,
    },
    activities: [
      {
        title: `Parameter Shift Rule Exercise`,
        description: `Students manually compute the gradient of a simple 1-qubit circuit using the parameter shift rule.`,
        steps: [
          `Define a 1-qubit circuit with a single Ry(θ) gate followed by Z measurement`,
          `Compute the expectation value f(θ) = ⟨Z⟩ = cos(θ) analytically`,
          `Apply the parameter shift rule: evaluate at θ + π/2 and θ - π/2`,
          `Verify that (f(θ+π/2) - f(θ-π/2))/2 = -sin(θ) = df/dθ`,
        ],
        timeRequired: `8 min`,
        outcomes: `Students understand how quantum gradients are computed without backpropagation`,
      },
      {
        title: `Barren Plateau Demonstration`,
        description: `Students simulate circuits with increasing qubit counts and observe gradient magnitudes.`,
        steps: [
          `Initialise random circuits with 2, 4, 6, 8, and 10 qubits`,
          `Compute the gradient of a random parameter for each circuit`,
          `Record the gradient magnitude for each qubit count`,
          `Plot gradient magnitude vs qubit count and observe the exponential decay`,
        ],
        timeRequired: `8 min`,
        outcomes: `Students empirically observe the barren plateau phenomenon`,
      },
    ],
    project: {
      scope: `Develop a training and validation strategy for a quantum classifier, including gradient computation, hyperparameter tuning, and evaluation.`,
      objectives: [
        `Implement the parameter shift rule for gradient computation`,
        `Design a training loop with learning rate scheduling`,
        `Create a validation strategy with held-out test data`,
        `Define reporting metrics and visualisation plan`,
      ],
      timeline: [
        { phase: `Gradient Implementation`, duration: `4 min`, percent: 35 },
        { phase: `Training Loop Design`, duration: `3 min`, percent: 30 },
        { phase: `Validation Strategy`, duration: `3 min`, percent: 35 },
      ],
      teamRoles: [
        { role: `Optimisation Engineer`, responsibility: `Implements gradient computation and optimiser` },
        { role: `Training Lead`, responsibility: `Designs the training loop and hyperparameters` },
        { role: `Evaluation Lead`, responsibility: `Designs validation and metrics reporting` },
      ],
      deliverables: [
        `Gradient computation implementation (parameter shift rule)`,
        `Training loop pseudocode with learning rate schedule`,
        `Validation plan with metrics dashboard design`,
      ],
    },
    questions: [
      {
        question: `What is the parameter shift rule and why is it needed for quantum circuit training?`,
        answer: `The parameter shift rule computes gradients of quantum circuit outputs by evaluating the circuit at two shifted parameter values (θ ± π/2). It is needed because quantum circuits are unitary and do not support backpropagation internally.`,
        explanation: `Since quantum measurements are probabilistic and circuits are unitary, we cannot directly backpropagate through them. The parameter shift rule provides an analytic gradient by exploiting the periodicity of the circuit output with respect to each parameter.`,
        commonMistake: `Trying to apply classical backpropagation directly to quantum circuits — the parameter shift rule is the correct quantum analogue.`,
        tip: `Each gradient computation costs 2 × (number of parameters) circuit evaluations, making training expensive for high-parameter circuits.`,
      },
      {
        question: `What is a barren plateau and how does it affect training?`,
        answer: `A barren plateau is a region of the loss landscape where gradients vanish exponentially with the number of qubits. It makes gradient-based training impractical for circuits with more than about 10-20 qubits.`,
        explanation: `For deep, random quantum circuits, the variance of any partial derivative decays as O(e^{-n}). This means that for a 50-qubit circuit, gradients are effectively zero for random initialisations, and the circuit cannot be trained.`,
        commonMistake: `Assuming that more qubits always means more expressivity — barren plateaus mean that without careful initialisation or circuit design, larger circuits may be untrainable.`,
        tip: `Use problem-aware initialisation, smaller circuits, or layer-wise training to mitigate barren plateaus.`,
      },
    ],
    virtualLab: {
      description: `Train a quantum sentiment classifier from scratch and observe the training dynamics, including gradient behaviour and convergence.`,
      steps: [
        `Initialise a 4-qubit quantum circuit with random parameters`,
        `Run the forward pass on the training data and compute the loss`,
        `Compute gradients using the parameter shift rule`,
        `Apply the Adam optimiser to update parameters`,
        `Monitor training loss, validation accuracy, and gradient magnitudes across 100 epochs`,
      ],
      stepDetails: [
        `Circuit has 4 qubits, 3 layers, and 12 trainable parameters initialised uniformly in [0, 2π]`,
        `Loss is binary cross-entropy computed from 32 training samples`,
        `Each gradient requires 24 circuit evaluations (2 × 12 parameters)`,
        `Learning rate starts at 0.1 and decays by 0.95 every 10 epochs`,
        `Dashboard shows: loss curve, accuracy curve, gradient heatmap, and parameter trajectory`,
      ],
      completionMessage: `Your quantum classifier has been successfully trained and validated!`,
      dataFlow: `flowchart TD
        A[Initialise θ] --> B[Encode Batch Data]
        B --> C[Run Circuit]
        C --> D[Compute Loss L(θ)]
        D --> E[Parameter Shift: ∇L(θ)]
        E --> F[Adam Optimiser]
        F --> G[Update θ]
        G --> B
        D --> H[Validation Set]
        H --> I[Compute Accuracy]
        I --> J[Report Metrics]`,
    },
    insights: {
      advantages: [
        `Hybrid training loop leverages powerful classical optimisation algorithms`,
        `Parameter shift rule provides exact gradients (not approximations)`,
        `Well-defined loss functions transfer directly from classical ML`,
        `Validation strategies are identical to classical ML, easing comparison`,
      ],
      disadvantages: [
        `Barren plateaus fundamentally limit trainable circuit size`,
        `Gradient computation is expensive (2 circuit evaluations per parameter)`,
        `Measurement shot noise adds variance to gradient estimates`,
        `Hyperparameter tuning is more expensive due to circuit evaluation costs`,
      ],
      futureScope: `Research into barren plateau mitigation (layer-wise training, correlated initialisation, adaptive circuit depth) is rapidly advancing. Error mitigation techniques and improved optimisers are making larger circuits trainable.`,
      industrialApplications: [
        `Training quantum models for production NLP systems`,
        `Automated hyperparameter tuning platforms for quantum ML`,
        `Model validation and monitoring in quantum cloud services`,
        `Benchmarking quantum vs classical model performance`,
      ],
      careerRelevance: `Understanding quantum training dynamics — including gradients, optimisation, and barren plateaus — is essential for any practitioner building practical quantum ML models. It is a specialisation within the broader field of quantum ML with growing demand.`,
    },
  },

  '11.7': {
    topicId: '11.7',
    learningObjective: `Build, train, and evaluate a complete quantum sentiment classification model in a hands-on lab environment.`,
    nextPrep: `Ensure you understand all previous topics in Module 11. Have a quantum simulator environment ready.`,
    dependencyGraph: `flowchart LR
      A[11.5 Sentiment Model] --> B[11.6 Training & Validation]
      B --> C[11.7 Sentiment Lab]
      C --> D[M12: Hybrid Models]
      style C fill:#e84393,color:#fff`,
    storytelling: {
      story: `The moment has arrived. Like a pilot who has completed all flight simulator training and finally takes the controls of a real aircraft, you are now going to build a real quantum sentiment classifier. This lab is not a demonstration or a thought experiment — you will write code, run circuits, and see actual results. Every line of code you write, every parameter you tune, every prediction your model makes is a step toward mastering practical quantum NLP.`,
      questions: [
        `What would it mean to you personally to build a working quantum ML model?`,
        `What challenges do you expect to encounter during the lab?`,
        `How will you debug your quantum circuit if the accuracy is poor?`,
      ],
      connection: `This lab integrates every concept from Module 11 into a practical implementation. Theory becomes practice. This is the transition from understanding QNLP to doing QNLP.`,
      technicalIntro: `In this lab, you will build a complete quantum sentiment classifier using a quantum computing framework (Qiskit or Pennylane). The lab covers: (1) Loading and preprocessing the IMDB sentiment dataset. (2) Encoding reviews to quantum states using angle encoding. (3) Building a parameterised quantum circuit with a hardware-efficient ansatz. (4) Implementing the parameter shift rule for gradient computation. (5) Training the circuit using a classical optimiser. (6) Evaluating the trained model on test reviews. You will compare performance against a classical logistic regression baseline.`,
      lifeSkills: `Building something end-to-end is the ultimate learning experience. It teaches perseverance (things will break), debugging skills (methodically finding the issue), and the joy of creation. These skills transfer to any complex project you will ever undertake.`,
    },
    mathModelling: {
      need: `The lab requires implementing all mathematical components: encoding, circuit evolution, measurement, gradient computation, and evaluation.`,
      motivation: `Practical implementation solidifies theoretical understanding and reveals nuances not apparent from equations alone.`,
      challenge: `Debugging a quantum ML pipeline requires understanding the interplay between classical data processing, quantum circuit execution, and hybrid optimisation.`,
      equations: [
        {
          latex: `\\theta^* = \\arg\\min_{\\theta} \\frac{1}{N} \\sum_{i=1}^N L\\left(y_i, \\langle Z_1 \\rangle_{i}(\\theta)\\right)`,
          meaning: `The optimal parameters θ* minimise the average loss over the training dataset.`,
          interpretation: `This is the fundamental objective of training. The lab implements this through iterative gradient descent.`,
        },
        {
          latex: `\\text{Precision} = \\frac{TP}{TP + FP}, \\quad \\text{Recall} = \\frac{TP}{TP + FN}, \\quad F_1 = 2 \\cdot \\frac{\\text{Precision} \\cdot \\text{Recall}}{\\text{Precision} + \\text{Recall}}`,
          meaning: `Precision, recall, and F1-score provide a complete picture of classifier performance beyond accuracy.`,
          interpretation: `Precision measures how many positive predictions were correct. Recall measures how many actual positives were found. F1 is their harmonic mean. For sentiment analysis, both false positives (calling a negative review positive) and false negatives are costly.`,
        },
        {
          latex: `\\text{Error Mitigation: } \\hat{p}_{\\text{corrected}} = A^{-1} \\hat{p}_{\\text{measured}}`,
          meaning: `Readout error mitigation applies the inverse of the measurement calibration matrix A to correct noisy measurement results.`,
          interpretation: `Real quantum devices have measurement errors. By running calibration circuits (preparing known states and measuring), we build a calibration matrix A and use it to correct the measured probabilities. This is a practical technique used in the lab to improve accuracy.`,
        },
      ],
      variables: [
        { symbol: `\\theta^*`, name: `Optimal Parameters`, description: `Circuit parameters that minimise the training loss` },
        { symbol: `TP, FP, FN`, name: `Confusion Matrix`, description: `True positives, false positives, false negatives for evaluation` },
        { symbol: `A`, name: `Calibration Matrix`, description: `Matrix mapping ideal measurement outcomes to noisy measured outcomes` },
      ],
      charts: [
        {
          title: `Lab Results: Quantum vs Classical Sentiment Classifier`,
          type: `bar`,
          data: [
            { name: `Accuracy`, Quantum: 0.91, Classical: 0.86 },
            { name: `Precision`, Quantum: 0.92, Classical: 0.87 },
            { name: `Recall`, Quantum: 0.90, Classical: 0.85 },
            { name: `F1-Score`, Quantum: 0.91, Classical: 0.86 },
          ],
        },
        {
          title: `Training Loss Convergence Across Lab Runs`,
          type: `line`,
          data: [
            { name: `5`, Run1: 0.68, Run2: 0.65, Run3: 0.70 },
            { name: `10`, Run1: 0.55, Run2: 0.50, Run3: 0.58 },
            { name: `20`, Run1: 0.42, Run2: 0.38, Run3: 0.45 },
            { name: `30`, Run1: 0.32, Run2: 0.28, Run3: 0.35 },
            { name: `40`, Run1: 0.25, Run2: 0.22, Run3: 0.28 },
            { name: `50`, Run1: 0.22, Run2: 0.18, Run3: 0.25 },
          ],
        },
      ],
      advantages: `The lab provides hands-on experience that bridges theory and practice. Students learn debugging, optimisation, and evaluation skills that are essential for real-world QNLP work.`,
      limitations: `The lab runs on simulators, not real quantum hardware, due to accessibility constraints. Simulators do not capture all noise characteristics of real devices.`,
    },
    activities: [
      {
        title: `Quantum Sentiment Lab Walkthrough`,
        description: `Instructor-led step-by-step implementation of the quantum sentiment classifier.`,
        steps: [
          `Set up the Python environment with Qiskit/Pennylane`,
          `Load and preprocess the IMDB dataset (50 positive, 50 negative reviews)`,
          `Implement angle encoding for 4-qubit circuit`,
          `Build the hardware-efficient ansatz with 3 layers`,
          `Train the circuit and evaluate on test data`,
        ],
        materials: `Jupyter notebook with pre-written scaffold code, quantum computing environment`,
        timeRequired: `15 min`,
        outcomes: `Students have a working quantum sentiment classifier by the end of the session`,
      },
      {
        title: `Hyperparameter Tuning Challenge`,
        description: `Students experiment with different circuit depths, learning rates, and encoding schemes to maximise accuracy.`,
        steps: [
          `Run the baseline model and record accuracy`,
          `Change the number of circuit layers (1, 2, 3, 5) and compare`,
          `Try different learning rates (0.01, 0.05, 0.1, 0.5)`,
          `Report the best configuration and explain why it works`,
        ],
        timeRequired: `10 min`,
        outcomes: `Students understand how hyperparameters affect quantum model performance`,
      },
      {
        title: `Error Analysis Session`,
        description: `Students examine misclassified reviews and hypothesise why the quantum model got them wrong.`,
        steps: [
          `Run the trained model on the test set`,
          `Identify 5 reviews that were misclassified`,
          `Analyse the text: is the sentiment ambiguous? Are there sentiment-bearing words the model missed?`,
          `Propose improvements (better encoding, more qubits, deeper circuit)`,
        ],
        timeRequired: `7 min`,
        outcomes: `Students develop model debugging and improvement skills`,
      },
    ],
    project: {
      scope: `Complete the quantum sentiment classification lab, document your results, and compare against classical baselines.`,
      objectives: [
        `Implement the complete quantum sentiment classifier`,
        `Train the model and achieve >85% test accuracy`,
        `Compare performance against a logistic regression baseline`,
        `Document findings and propose improvements`,
      ],
      timeline: [
        { phase: `Implementation`, duration: `10 min`, percent: 50 },
        { phase: `Training and Tuning`, duration: `5 min`, percent: 25 },
        { phase: `Evaluation and Reporting`, duration: `5 min`, percent: 25 },
      ],
      teamRoles: [
        { role: `Implementer`, responsibility: `Writes the quantum circuit and training code` },
        { role: `Tuner`, responsibility: `Experiments with hyperparameters for optimal performance` },
        { role: `Analyst`, responsibility: `Evaluates results and prepares the report` },
      ],
      deliverables: [
        `Working quantum sentiment classifier code`,
        `Training loss and accuracy curves`,
        `Comparison report: quantum vs classical performance`,
        `Error analysis with suggestions for improvement`,
      ],
    },
    questions: [
      {
        question: `What steps are involved in the quantum sentiment classification lab?`,
        answer: `The lab involves six steps: (1) data loading and preprocessing, (2) quantum encoding, (3) circuit construction, (4) hybrid training loop, (5) evaluation, and (6) comparison with classical baselines.`,
        explanation: `Each step corresponds to a component of the quantum classification workflow studied in previous topics. The lab integrates them all into a cohesive implementation.`,
        commonMistake: `Skipping data preprocessing — poorly preprocessed data will lead to poor classification regardless of the quantum circuit quality.`,
        tip: `Always visualise your data and encoded quantum states before training to catch encoding issues early.`,
      },
      {
        question: `How would you debug a quantum sentiment classifier that achieves only 55% accuracy (near random)?`,
        answer: `Debug systematically: (1) Check data preprocessing and labels for errors. (2) Verify encoding by reconstructing features from the quantum state. (3) Test the circuit on a single sample to ensure the output is in [-1, +1]. (4) Check gradient magnitudes — vanishing gradients indicate a barren plateau. (5) Try a simpler circuit with fewer parameters.`,
        explanation: `Low accuracy can stem from data issues, encoding problems, circuit expressivity limits, or optimisation failures. Systematic debugging isolates the root cause.`,
        commonMistake: `Immediately adding more qubits or layers — this often worsens barren plateaus.`,
        tip: `Always verify each component independently before combining them. Test the encoding, then test the circuit without training, then test gradients, then train.`,
      },
    ],
    virtualLab: {
      description: `Step-by-step interactive lab that guides you through building a complete quantum sentiment classifier.`,
      steps: [
        `Initialise the quantum computing environment (simulator)`,
        `Load and explore the sentiment dataset`,
        `Build the data encoding circuit for 4-qubit angle encoding`,
        `Construct the parameterised circuit with a hardware-efficient ansatz`,
        `Implement the parameter shift rule for gradient computation`,
        `Train the circuit and observe convergence in real-time`,
        `Evaluate on the test set and compare with classical baseline`,
      ],
      stepDetails: [
        `Environment: Qiskit Aer simulator with noise model option`,
        `Dataset: 200 IMDB reviews (100 train, 100 test), binary sentiment labels`,
        `Encoding: Rx(θ)Rz(φ) per qubit with normalised embedding features`,
        `Circuit: 4 qubits, 3 layers, 24 trainable parameters, CNOT entangling`,
        `Gradients: Parameter shift rule with 2 evaluations per parameter per step`,
        `Training: Adam optimiser, learning rate 0.05, 100 epochs, batch size 16`,
        `Evaluation: Confusion matrix, accuracy, precision, recall, F1, ROC curve`,
      ],
      completionMessage: `Congratulations! You have successfully built and trained a quantum sentiment classification model! You are now a QNLP practitioner.`,
      dataFlow: `flowchart TD
        A[Lab Setup] --> B[Load IMDB Dataset]
        B --> C[Preprocess & Embed]
        C --> D[Angle Encoding Circuit]
        D --> E[Parameterised Circuit]
        E --> F[Measurement]
        F --> G[Loss Computation]
        G --> H[Parameter Shift ∇L]
        H --> I[Optimiser Update]
        I --> E
        G --> J[Converged?]
        J -->|Yes| K[Test Set Evaluation]
        K --> L[Results Dashboard]
        L --> M[Compare Classical]`,
    },
    insights: {
      advantages: [
        `Hands-on lab solidifies understanding of all theoretical concepts`,
        `Working code provides a foundation for future QNLP projects`,
        `Comparison with classical baselines develops critical evaluation skills`,
        `Lab experience is directly transferable to real QNLP research and development`,
      ],
      disadvantages: [
        `Simulator lab does not capture real hardware noise characteristics`,
        `Limited dataset size and qubit count due to simulation constraints`,
        `Debugging hybrid quantum-classical systems can be challenging for beginners`,
      ],
      futureScope: `The skills developed in this lab — encoding design, circuit construction, hybrid training, and evaluation — are directly applicable to more advanced QNLP tasks, including multi-class classification, sequence labelling, and language generation.`,
      industrialApplications: [
        `Building production QNLP pipelines for real-world text analysis`,
        `Developing custom quantum circuits for domain-specific NLP tasks`,
        `Integrating quantum classifiers into existing ML infrastructure`,
        `Creating educational content and tutorials for quantum ML`,
      ],
      careerRelevance: `Completing this lab provides a concrete portfolio piece demonstrating practical QNLP skills. Employers in quantum computing, NLP, and AI research value hands-on implementation experience highly.`,
    },
  },
}
