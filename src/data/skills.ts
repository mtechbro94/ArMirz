export interface SkillItem {
  name: string;
  level: "Advanced" | "Proficient" | "Working Knowledge";
  context: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  description: string;
  iconName: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "genai",
    name: "Generative AI & LLMs",
    description: "Production RAG architectures, local inference, embeddings, and prompt engineering.",
    iconName: "BrainCircuit",
    skills: [
      { name: "LangChain & LlamaIndex", level: "Advanced", context: "Multi-document RAG, vector stores & query pipelines" },
      { name: "Local LLMs (Ollama)", level: "Advanced", context: "Local deployment, quantization, REST APIs & tool calling" },
      { name: "RAG Architectures", level: "Advanced", context: "Dense retrieval, hybrid search, semantic chunking" },
      { name: "Prompt Engineering", level: "Advanced", context: "Few-shot, chain-of-thought, system prompt orchestration" },
      { name: "Vector Databases", level: "Proficient", context: "ChromaDB, FAISS, vector indexing and similarity search" },
      { name: "Hugging Face Ecosystem", level: "Proficient", context: "Transformers, model hub, fine-tuning and inference pipelines" },
    ],
  },
  {
    id: "agents",
    name: "AI Agents & Automation",
    description: "Autonomous multi-agent orchestration, tool routing, and workflow automations.",
    iconName: "Bot",
    skills: [
      { name: "LangGraph", level: "Advanced", context: "Stateful multi-agent workflows, supervisor pattern (SmileSync-AI)" },
      { name: "Tool Calling & Function Calling", level: "Advanced", context: "Structured tool execution, dynamic DB schema queries" },
      { name: "n8n Workflow Automation", level: "Proficient", context: "Automated webhook pipelines, multi-step LLM chains" },
      { name: "Autonomous Supervisor Agents", level: "Advanced", context: "Intent classification and delegation across specialized workers" },
    ],
  },
  {
    id: "ml-dl",
    name: "Machine Learning & Deep Learning",
    description: "Supervised, unsupervised, neural architectures, and model explainability.",
    iconName: "Cpu",
    skills: [
      { name: "PyTorch & TensorFlow", level: "Advanced", context: "Custom training loops, CNNs, ViTs, transfer learning" },
      { name: "Explainable AI (XAI)", level: "Advanced", context: "Grad-CAM, Concept Bottleneck Models (XM-CBM, VGG16 thesis)" },
      { name: "Scikit-learn", level: "Advanced", context: "Classical ML, clustering, regression, ensemble algorithms" },
      { name: "Computer Vision", level: "Proficient", context: "Medical imaging, tumor segmentation, LBPH face recognition" },
      { name: "Natural Language Processing", level: "Proficient", context: "BERT, tokenization, sentiment analysis, embeddings" },
    ],
  },
  {
    id: "languages",
    name: "Languages & Frameworks",
    description: "Core programming languages for data science, backend, and production systems.",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced", context: "NumPy, Pandas, PyTorch, FastAPI, Streamlit, OOP, concurrency" },
      { name: "SQL", level: "Advanced", context: "Complex joins, CTEs, window functions, analytics indexing" },
      { name: "FastAPI & Flask", level: "Proficient", context: "RESTful microservices, asynchronous request handling" },
      { name: "Streamlit & Gradio", level: "Advanced", context: "Rapid deployment of interactive AI & ML web applications" },
      { name: "JavaScript / TypeScript", level: "Working Knowledge", context: "Modern web interfaces, API integrations, Next.js" },
      { name: "R, C & Java", level: "Working Knowledge", context: "Statistical analysis, systems fundamentals, OOP" },
    ],
  },
  {
    id: "cloud-devops",
    name: "Cloud, DevOps & MLOps",
    description: "Certified cloud infrastructure, containerization, and reproducible deployments.",
    iconName: "Cloud",
    skills: [
      { name: "AWS (Certified Cloud Practitioner)", level: "Proficient", context: "EC2, S3, IAM, Lambda, CloudWatch, Bedrock" },
      { name: "Azure (Certified AI Fundamentals)", level: "Proficient", context: "Azure AI Studio, Cognitive Services, ML Workspace" },
      { name: "Docker & Containerization", level: "Proficient", context: "Multi-stage builds, container networking, volume mounts" },
      { name: "Git & GitHub Actions", level: "Advanced", context: "CI/CD pipelines, automated testing, repository management" },
      { name: "Linux / UNIX & Shell Scripting", level: "Proficient", context: "Environment configuration, automation scripts, server admin" },
    ],
  },
  {
    id: "data-analytics",
    name: "Data Analytics & Engineering",
    description: "End-to-end data processing, exploratory data analysis, and executive dashboards.",
    iconName: "BarChart3",
    skills: [
      { name: "Pandas & NumPy", level: "Advanced", context: "Data munging, time-series, vectorized operations" },
      { name: "Power BI & Tableau", level: "Proficient", context: "Executive dashboards, DAX queries, e-commerce KPIs" },
      { name: "Data Visualization", level: "Advanced", context: "Matplotlib, Seaborn, Plotly publication-grade visual design" },
      { name: "Relational & Vector DBs", level: "Proficient", context: "PostgreSQL, MySQL, SQLite, ChromaDB" },
      { name: "ETL Pipeline Automation", level: "Proficient", context: "Automated ingestion, validation, and scheduled transformation" },
    ],
  },
];
