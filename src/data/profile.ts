export interface Education {
  degree: string;
  field: string;
  institution: string;
  period: string;
  score: string;
  highlights: string[];
}

export interface Experience {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: "academic" | "industry" | "training";
  responsibilities: string[];
}

export const profileData = {
  name: "Aaqib Rashid Mir",
  title: "Data Science & AI Trainer | AI Researcher | AI Engineer",
  summary:
    "Assistant Professor and Technical Educator with over 3 years of experience delivering cutting-edge Artificial Intelligence, Machine Learning, Generative AI, and Data Science education at undergraduate and postgraduate levels. Holds an M.Tech in Data Science & Artificial Intelligence (CGPA 8.15) and B.Tech in Computer Science & Engineering. AWS Certified Cloud Practitioner (CLF-C02) and Microsoft Certified Azure AI Fundamentals (AI-900). Progressed from Technical Trainer to Assistant Professor at Guru Nanak Institutions Technical Campus, pioneering hands-on LLM, RAG, and Prompt Engineering curricula. Published researcher in Explainable AI (XAI) and Computer Vision, mentor to 100+ capstone projects, and passionate educator committed to turning complex AI research into real-world production engineering skills.",
  
  philosophy: [
    {
      title: "Code-First, Zero Fluff",
      description:
        "Theoretical foundations are essential, but true intuition is forged by writing code, analyzing logs, debugging gradients, and deploying working models to production.",
    },
    {
      title: "From Foundations to Agentic Systems",
      description:
        "Guiding learners from linear algebra and gradient descent through transformers, retrieval-augmented generation (RAG), and multi-agent systems.",
    },
    {
      title: "Explainable & Trustworthy AI",
      description:
        "Building models isn't enough; validating model reasoning, interpretability (Grad-CAM, Concept Bottleneck Models), and auditability are non-negotiable for real-world impact.",
    },
  ],

  education: [
    {
      degree: "Master of Technology (M.Tech)",
      field: "Data Science & Artificial Intelligence",
      institution: "Mewar University, Rajasthan",
      period: "2023 – 2025",
      score: "CGPA: 8.15 / 10",
      highlights: [
        "Specialization in Deep Learning, Explainable AI (XAI), and Large Language Models",
        "Master's Thesis: VGG16-Based Explainable Brain Tumor Detection Using Grad-CAM",
        "Conducted extensive research on multimodal clinical decision support frameworks",
      ],
    },
    {
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science & Engineering",
      institution: "Islamic University of Science & Technology (IUST), Jammu & Kashmir",
      period: "2017 – 2021",
      score: "CGPA: 7.33 / 10",
      highlights: [
        "Rigorous foundation in Algorithms, Data Structures, Operating Systems, and Distributed Computing",
        "Developed full-stack web and database applications with automated pipelines",
        "Active leader in technical coding clubs and hackathons",
      ],
    },
  ] as Education[],

  experience: [
    {
      role: "Assistant Professor – AI & Data Science Department",
      organization: "Guru Nanak Institutions Technical Campus (Autonomous), Hyderabad",
      location: "Hyderabad, India",
      period: "May 2025 – May 2026",
      type: "academic",
      responsibilities: [
        "Full academic ownership and lecture delivery for Data Science, Deep Learning, Machine Learning, Natural Language Processing, and DevOps at UG/PG levels.",
        "Architected outcome-based learning curricula featuring comprehensive hands-on labs in Python, PyTorch/TensorFlow, Docker, and CI/CD automation.",
        "Pioneered and formalized coursework in LLMs, Retrieval-Augmented Generation (RAG), Agentic AI, and Prompt Engineering — among the earliest in the region to institutionalize GenAI education.",
        "Mentored 100+ capstone and research projects across ML and GenAI, directly guiding 15+ real-world deployments and peer-reviewed publications.",
        "Contributed to NBA/NAAC accreditation processes and OBE mapping; led the departmental AI research cell.",
      ],
    },
    {
      role: "Technical Trainer – CS & AI",
      organization: "Guru Nanak Institutions Technical Campus, Hyderabad",
      location: "Hyderabad, India",
      period: "Oct 2023 – May 2025",
      type: "training",
      responsibilities: [
        "Conducted intensive hands-on labs in Python, Machine Learning, Data Analytics, and Cloud Computing for undergraduate engineering students.",
        "Delivered 15+ specialized technical workshops and bootcamps (GenAI & LLM Boot Camp, Prompt Engineering Masterclass, Docker & Containerization Workshop, MLOps Seminar) to 500+ students and faculty.",
        "Pioneered practical AI/DS labs covering LangChain, Docker, and AWS/Azure tooling ahead of formal curriculum updates.",
        "Led project-based training modules from ideation to production deployment, producing portfolio-ready AI capstones.",
      ],
    },
    {
      role: "Data Analyst (Part-Time, Remote)",
      organization: "InnoByte Services",
      location: "Remote",
      period: "2021 – 2023",
      type: "industry",
      responsibilities: [
        "Engineered automated ETL data extraction and transformation pipelines using Python and SQL for Amazon e-commerce analytics clients.",
        "Designed and published high-impact interactive Power BI and Tableau KPI dashboards, reducing recurring manual reporting overhead by ~40%.",
        "Performed cohort retention analysis and revenue attribution modeling.",
      ],
    },
    {
      role: "Data Science & AI Intern",
      organization: "OneTruWeb / Coincent.ai",
      location: "Bangalore, India",
      period: "Oct 2022 – Mar 2023",
      type: "industry",
      responsibilities: [
        "Constructed unsupervised customer segmentation algorithms (K-Means, DBSCAN) resulting in a 10% uplift in target audience engagement.",
        "Fine-tuned BERT-based NLP pipelines for an automated financial conversational agent.",
      ],
    },
  ] as Experience[],
};
