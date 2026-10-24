export interface Workshop {
  title: string;
  category: "GenAI & LLMs" | "Cloud & DevOps" | "Data Science & Python" | "Agentic Systems";
  audience: string;
  duration: string;
  institution: string;
  description: string;
  keyTopics: string[];
  deliverables: string[];
}

export const workshopsData: Workshop[] = [
  {
    title: "Generative AI & Large Language Models Boot Camp",
    category: "GenAI & LLMs",
    audience: "Undergraduate/Postgraduate Engineers & Tech Professionals (500+ participants)",
    duration: "Intensive 3-Day Boot Camp",
    institution: "Guru Nanak Institutions Technical Campus (Autonomous)",
    description:
      "A flagship comprehensive training bridging transformer theory to practical deployment. Participants build real-time RAG applications and multimodal assistants from scratch.",
    keyTopics: [
      "Transformer mechanics, attention, and tokenization",
      "Retrieval-Augmented Generation (RAG) with vector databases (ChromaDB/FAISS)",
      "Prompt engineering patterns (Chain-of-Thought, ReAct, Few-Shot)",
      "Local LLM runtime deployment using Ollama and GGUF quantization",
    ],
    deliverables: ["Full GitHub starter repo", "Interactive Colab notebooks", "Production RAG Streamlit app"],
  },
  {
    title: "Prompt Engineering & AI Alignment Masterclass",
    category: "GenAI & LLMs",
    audience: "Faculty, Researchers & Software Engineers",
    duration: "Full-Day Masterclass",
    institution: "GNITC AI Research Cell & Industry Webinars",
    description:
      "Deep dive into system prompt engineering, output structuring, hallucination mitigation, and ethical AI alignment strategies for mission-critical enterprise systems.",
    keyTopics: [
      "Structured output generation via Pydantic & JSON schema constraints",
      "Hallucination mitigation and verification chains",
      "System prompt architecture and persona steering",
      "Evaluation benchmarks and automated prompt regression testing",
    ],
    deliverables: ["Curated prompt engineering cheat sheet", "Automated evaluation notebook", "Certificate of completion"],
  },
  {
    title: "Hands-On Docker & Containerization Workshop",
    category: "Cloud & DevOps",
    audience: "Computer Science Students & Aspiring DevOps Engineers",
    duration: "2-Day Hands-on Lab",
    institution: "Department of AI & Data Science, Hyderabad",
    description:
      "Practical, lab-intensive workshop on modern application packaging, multi-stage Docker builds, container networking, and CI/CD automation for machine learning services.",
    keyTopics: [
      "Dockerfile authoring and image layer optimization",
      "Multi-container orchestration with Docker Compose",
      "Deploying FastAPI and Streamlit apps in containers",
      "CI/CD integration via GitHub Actions",
    ],
    deliverables: ["Production-ready Dockerfiles", "Compose templates", "Hands-on lab manual"],
  },
  {
    title: "Hands-On Python Programming & Data Structures Training",
    category: "Data Science & Python",
    audience: "B.Tech Students & Career Switchers",
    duration: "6-Week Applied Training Program",
    institution: "Guru Nanak Institutions & The Coding Science",
    description:
      "From zero to algorithmic problem-solving and software engineering practices in Python. Emphasizes clean code, object-oriented design, algorithmic complexity, and real-world project development.",
    keyTopics: [
      "Core Python idioms, generators, decorators, and OOP",
      "Data structures: dynamic arrays, linked lists, hash tables, trees",
      "Algorithmic design: search, sorting, divide & conquer",
      "Applied data manipulation using NumPy and Pandas",
    ],
    deliverables: ["100+ solved practice problems", "Capstone project portfolio", "Lab manual and code repository"],
  },
  {
    title: "MLOps & Cloud Deployment Seminar",
    category: "Cloud & DevOps",
    audience: "Final-Year Students, Capstone Researchers & Faculty",
    duration: "Full-Day Interactive Seminar",
    institution: "GNITC Hyderabad",
    description:
      "Demystifying the gap between training a model on Jupyter notebooks and hosting high-availability prediction APIs on AWS and Azure cloud infrastructures.",
    keyTopics: [
      "Model serialization (ONNX, Pickle, TorchScript)",
      "FastAPI inference microservices with asynchronous endpoints",
      "Cloud hosting on AWS EC2/S3 and Azure AI Studio",
      "Performance monitoring, logging, and drift detection",
    ],
    deliverables: ["Deployable microservice template", "Cloud architecture blueprint", "Session recordings"],
  },
  {
    title: "Online Project Training Programme: End-to-End AI Engineering",
    category: "Agentic Systems",
    audience: "Remote Working Professionals & Aspiring AI Engineers",
    duration: "8-Week Cohort-Based Program",
    institution: "The Coding Science — School of Technology & AI Innovations",
    description:
      "An intensive mentorship track where learners conceptualize, architect, test, and deploy end-to-end full-stack AI and Data Science solutions with live code reviews and career coaching.",
    keyTopics: [
      "Problem formulation and dataset curation",
      "Model training, tuning, and explainability (Grad-CAM, SHAP)",
      "Agentic workflows with LangGraph and tool calling",
      "Production deployment and technical portfolio presentation",
    ],
    deliverables: ["Production-grade portfolio capstone", "1-on-1 code reviews", "Interview prep dossier"],
  },
];
