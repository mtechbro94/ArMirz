export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: "GenAI & LLMs" | "AI Agents" | "Computer Vision & XAI" | "Data Science & ML" | "Automation";
  summary: string;
  problemStatement: string;
  solution: string;
  techStack: string[];
  features: string[];
  datasetOrScope?: string;
  githubUrl?: string;
  demoUrl?: string;
  colabUrl?: string;
  paperUrl?: string;
  featured: boolean;
  status: "Completed" | "In Active Development" | "Production Deployed";
}

export const projectsData: Project[] = [
  {
    id: "xm-cbm-clinical-decision-support",
    title: "Faithful by Design: Cross-Modal Concept Bottleneck Framework (XM-CBM)",
    tagline: "Trustworthy Multimodal Clinical Decision Support with Real-Time Human-in-the-Loop Interventions",
    category: "Computer Vision & XAI",
    summary:
      "A state-of-the-art multimodal clinical AI architecture fusing tabular vitals/labs with chest X-ray imaging through an interpretable concept bottleneck layer for transparent mortality risk estimation.",
    problemStatement:
      "Standard deep learning clinical decision models are opaque black boxes. In high-stakes intensive care environments, clinicians require actionable explanations and the ability to intervene on faulty reasoning before patient decisions are finalized.",
    solution:
      "Engineered XM-CBM: a cross-modal concept bottleneck framework that maps imaging features (via ViT-B/16 & DenseNet-121) and EHR tabular vitals to human-interpretable physiological concepts (e.g., cardiomegaly, pulmonary edema, metabolic acidosis) prior to risk estimation. Backed by rigorous faithfulness evaluations (Deletion-AUC, Insertion-AUC, Infidelity).",
    techStack: ["PyTorch 2.1+", "DenseNet-121", "Vision Transformers (ViT)", "MIMIC-IV", "Streamlit", "XGBoost", "Python"],
    features: [
      "Real-time patient mortality risk calculation with physiological concept attribution",
      "Interactive Streamlit Clinical Decision Support Dashboard with human-in-the-loop test-time interventions",
      "1-Click reproducible Google Colab pipeline with automated cohort synthesis and loss ablation",
      "Evaluation against 7 competitive baselines on AUROC, AUPRC, Brier, and ECE calibration",
    ],
    datasetOrScope: "MIMIC-IV clinical cohort + Chest X-Ray (CXR) multimodal tensors",
    githubUrl: "https://github.com/mtechbro94/Multimodal-Explainable-AI-for-Clinical-Decision-Support",
    colabUrl: "https://colab.research.google.com/github/mtechbro94/Multimodal-Explainable-AI-for-Clinical-Decision-Support/blob/main/notebooks/XM_CBM_Full_Pipeline.ipynb",
    featured: true,
    status: "Completed",
  },
  {
    id: "smilesync-ai-agent-system",
    title: "SmileSync-AI: Multi-Agent Clinical Appointment Orchestration",
    tagline: "Autonomous Conversational AI System Powered by LangGraph, Grok-4 & FastAPI",
    category: "AI Agents",
    summary:
      "An advanced multi-agent architecture that autonomously handles clinic appointment inquiries, bookings, cancellations, and reschedules through natural language with zero human intervention.",
    problemStatement:
      "Front-desk healthcare workflows suffer from telephone bottlenecks, double-booking errors, and rigid automated phone systems that cannot handle nuanced user requests.",
    solution:
      "Constructed a supervisor-worker agent network in LangGraph. The supervisor parses natural language intent and routes execution to specialized sub-agents (Info, Booking, Cancellation, Rescheduling) equipped with structured database tools.",
    techStack: ["LangGraph", "LangChain", "Grok-4 / LLMs", "FastAPI", "Docker", "Python", "CSV DB Engine"],
    features: [
      "Hierarchical supervisor multi-agent pattern with dynamic conversational context preservation",
      "Tool-augmented intelligence executing validated database operations with concurrency safeguards",
      "Asynchronous FastAPI backend with clean endpoints ready for web and mobile frontends",
      "Production-ready multi-stage Docker containerization with cross-platform OS compatibility",
    ],
    githubUrl: "https://github.com/mtechbro94/Dental_Appointment_System",
    featured: true,
    status: "Completed",
  },
  {
    id: "vgg16-xai-brain-tumor-detection",
    title: "VGG16-Based Explainable Brain Tumor Detection Using Grad-CAM",
    tagline: "Interpretable Medical Diagnostic Pipeline Deployed on Hugging Face",
    category: "Computer Vision & XAI",
    summary:
      "Master's thesis research implementing deep convolutional neural networks combined with Gradient-weighted Class Activation Mapping (Grad-CAM) to visualize tumor boundaries on cranial MRI scans.",
    problemStatement:
      "Radiologists face high cognitive loads when inspecting brain MRI scans. Automated classifiers frequently fail clinical trust tests without spatial verification of what image regions triggered the diagnosis.",
    solution:
      "Developed a fine-tuned VGG16 architecture integrated with Grad-CAM heatmaps to generate transparent visual saliency overlays pinpointing gliomas, meningiomas, and pituitary tumors. Published in peer-reviewed International Journal of Scientific Research (IJSR).",
    techStack: ["TensorFlow", "Keras", "VGG16", "Grad-CAM", "OpenCV", "Hugging Face Spaces", "Python"],
    features: [
      "Visual heatmaps highlighting exact cranial MRI regions informing model inference",
      "Over 96% diagnostic accuracy across multi-class brain tumor validation sets",
      "Hosted interactive inference web app on Hugging Face Spaces for public research access",
      "Peer-reviewed academic publication in IJSR (2025)",
    ],
    githubUrl: "https://github.com/mtechbro94",
    demoUrl: "https://huggingface.co/spaces",
    featured: true,
    status: "Production Deployed",
  },
  {
    id: "genai-financial-rag-chatbot",
    title: "Financial Intelligence RAG Agent over SEC 10-K & 10-Q Filings",
    tagline: "Context-Aware Financial Analysis with ChromaDB, LangChain & Streamlit",
    category: "GenAI & LLMs",
    summary:
      "Enterprise-grade Retrieval-Augmented Generation (RAG) system ingesting hundreds of pages of complex SEC quarterly and annual corporate reports for semantic query and quantitative table retrieval.",
    problemStatement:
      "Financial analysts spend hours combing through dense 100+ page SEC filings to verify risk factors, liquidity disclosures, and GAAP reconciliations.",
    solution:
      "Built a RAG pipeline utilizing recursive character text splitting with table-aware chunking, dense vector embeddings stored in ChromaDB, and a LangChain orchestration agent capable of citing source paragraphs.",
    techStack: ["LangChain", "ChromaDB", "Streamlit", "HuggingFace Embeddings", "OpenAI / Claude APIs", "Python"],
    features: [
      "Multi-document indexing with citation metadata and exact page number references",
      "Tabular data extraction and structured financial KPI comparison across fiscal years",
      "Low-latency vector similarity retrieval with MMR (Maximal Marginal Relevance) re-ranking",
      "Interactive Streamlit analyst interface with chat history persistence",
    ],
    githubUrl: "https://github.com/mtechbro94",
    featured: true,
    status: "Completed",
  },
  {
    id: "big-x-genai-model-suite",
    title: "BIG X: Multi-Modal GenAI Suite for Enterprise Knowledge",
    tagline: "Unified Multi-Modal Semantic Search, Summarization & Local LLM Workflows",
    category: "GenAI & LLMs",
    summary:
      "A comprehensive multi-modal generative AI suite integrating local LLMs (via Ollama) and cloud models for offline-capable document intelligence, semantic summarization, and query execution.",
    problemStatement:
      "Organizations handling proprietary documentation cannot transmit sensitive data to third-party public cloud endpoints, requiring robust on-premise generative AI capabilities.",
    solution:
      "Engineered BIG X using LangChain, LlamaIndex, and Ollama to deliver local, private LLM execution with hardware-optimized quantization (GGUF) and semantic indexing.",
    techStack: ["Ollama", "LlamaIndex", "LangChain", "Python", "Local LLMs", "REST API", "FastAPI"],
    features: [
      "100% offline, privacy-first local LLM execution via Ollama runtime integration",
      "Dynamic prompt routing between fast local models and frontier cloud models",
      "Semantic document summarization with hierarchical index retrieval",
      "Modular REST API interface for seamless enterprise software integration",
    ],
    githubUrl: "https://github.com/mtechbro94/LearnWithMir",
    featured: false,
    status: "Completed",
  },
  {
    id: "n8n-ai-automation-masterclass",
    title: "Production Agentic Automation & Webhook Pipelines",
    tagline: "Autonomous Business Process Workflows with n8n & LangChain",
    category: "Automation",
    summary:
      "A production suite of automated agent workflows connecting webhooks, data lakes, notification services, and LLM reasoning steps for hands-off enterprise task execution.",
    problemStatement:
      "Repetitive business processes (customer onboarding, report generation, incident triage) generate massive friction and human error when conducted manually across disconnected SaaS platforms.",
    solution:
      "Architected event-driven workflows leveraging n8n, custom Python microservices, and AI nodes to process inputs, invoke LLM evaluation, and trigger downstream APIs.",
    techStack: ["n8n", "Python", "LangChain", "Webhooks", "REST APIs", "Docker"],
    features: [
      "Self-healing workflows with automated retry logic and exception routing",
      "Multi-model verification steps to validate outputs before triggering external writes",
      "Containerized deployment supporting zero-downtime webhook listeners",
    ],
    githubUrl: "https://github.com/mtechbro94",
    featured: false,
    status: "Completed",
  },
];
