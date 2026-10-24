export interface Course {
  id: string;
  title: string;
  category: "Generative AI" | "Data Science & ML" | "Core Programming" | "Agentic AI";
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  description: string;
  curriculum: string[];
  prerequisites: string;
  targetAudience: string;
  associatedOrg?: string;
  badge?: string;
}

export const coursesData: Course[] = [
  {
    id: "practical-genai-rag-llms",
    title: "Mastering Generative AI, RAG & LLM Application Engineering",
    category: "Generative AI",
    level: "Intermediate",
    duration: "8 Weeks (Live Labs + Projects)",
    description:
      "A hands-on, engineering-focused curriculum taking you from foundational transformer theory to building enterprise RAG pipelines, fine-tuning models, and deploying locally with Ollama.",
    curriculum: [
      "Module 1: Transformer Foundations & Attention Mechanisms",
      "Module 2: Embeddings, Vector Stores (ChromaDB/FAISS) & Semantic Search",
      "Module 3: Advanced RAG: Hybrid Search, Reranking & Context Compression",
      "Module 4: Prompt Engineering & Structured Outputs with Pydantic",
      "Module 5: Local LLMs with Ollama, GGUF Quantization & Self-Hosted APIs",
      "Module 6: Capstone: Deploying a Multi-Document Financial/Clinical Assistant",
    ],
    prerequisites: "Working knowledge of Python and basic machine learning concepts.",
    targetAudience: "Software developers, data scientists, and engineers wanting to build production LLM systems.",
    associatedOrg: "AIwithMir & The Coding Science",
    badge: "Flagship Curriculum",
  },
  {
    id: "autonomous-ai-agents-langgraph",
    title: "Building Autonomous AI Agents with LangGraph & Multi-Agent Systems",
    category: "Agentic AI",
    level: "Advanced",
    duration: "6 Weeks (Intensive Hands-on)",
    description:
      "Design and deploy production-ready multi-agent workflows. Learn stateful cyclic graphs, supervisor patterns, tool execution, human-in-the-loop validation, and self-healing error recovery.",
    curriculum: [
      "Module 1: Agentic Architectures: ReAct, Plan-and-Solve & Supervisor Patterns",
      "Module 2: State Management & Cyclic Graph Design with LangGraph",
      "Module 3: Dynamic Tool Calling, Schema Validation & Database Operations",
      "Module 4: Multi-Agent Collaboration: Specialized Sub-Agents & Orchestration",
      "Module 5: Human-in-the-Loop Interventions & Audit Trails",
      "Module 6: Capstone: Building an Autonomous Healthcare/Enterprise Scheduling Agent",
    ],
    prerequisites: "Python proficiency and familiarity with LangChain or OpenAI/Anthropic APIs.",
    targetAudience: "AI engineers and senior developers architecting autonomous business automations.",
    associatedOrg: "AIwithMir",
    badge: "Advanced Specialization",
  },
  {
    id: "applied-data-science-machine-learning",
    title: "Applied Data Science, Machine Learning & Statistical Analysis",
    category: "Data Science & ML",
    level: "Beginner",
    duration: "10 Weeks (Comprehensive)",
    description:
      "A rigorous, project-based journey through exploratory data analysis, hypothesis testing, predictive modeling with Scikit-learn, and production deployment with Streamlit.",
    curriculum: [
      "Module 1: Python for Data Science (NumPy, Pandas, Vectorization)",
      "Module 2: Exploratory Data Analysis & Publication-Grade Visualizations",
      "Module 3: Probability, Statistics, and Hypothesis Testing",
      "Module 4: Classical Supervised Learning (Regression, Trees, Ensemble Methods)",
      "Module 5: Unsupervised Learning (Clustering, PCA, Dimensionality Reduction)",
      "Module 6: Model Evaluation, Cross-Validation & Streamlit Deployment",
    ],
    prerequisites: "High school mathematics and basic computer literacy.",
    targetAudience: "Undergraduate students, career transitioners, and analysts aiming for Data Science roles.",
    associatedOrg: "Guru Nanak Institutions & The Coding Science",
    badge: "Career Track",
  },
  {
    id: "python-dsa-software-engineering",
    title: "Python for Engineers: Data Structures, Algorithms & Clean Code",
    category: "Core Programming",
    level: "Beginner",
    duration: "8 Weeks",
    description:
      "Master programmatic problem-solving with Python. Covers object-oriented programming, data structures, algorithm complexity, and modern testing practices.",
    curriculum: [
      "Module 1: Modern Python Syntax, Typing & Object-Oriented Principles",
      "Module 2: Big-O Notation, Space & Time Complexity Analysis",
      "Module 3: Linear Data Structures: Arrays, Linked Lists, Stacks, Queues",
      "Module 4: Non-Linear Data Structures: Trees, Binary Search Trees, Heaps",
      "Module 5: Search & Sorting Algorithms, Recursion & Dynamic Programming",
      "Module 6: Capstone: Building a Command-Line Application with Unit Tests",
    ],
    prerequisites: "None. Designed for beginners.",
    targetAudience: "Engineering students, GATE aspirants, and programmers strengthening foundations.",
    associatedOrg: "The Coding Science — School of Technology",
    badge: "Foundation Course",
  },
];
