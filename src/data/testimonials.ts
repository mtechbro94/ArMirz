export interface Testimonial {
  id: string;
  name: string;
  role: string;
  organization: string;
  content: string;
  highlight: string;
  category: "Student" | "Faculty & Research" | "Corporate Engineer";
  avatarInitials: string;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Vikramaditya Rao",
    role: "AI Engineer (Former Capstone Student)",
    organization: "Guru Nanak Institutions Technical Campus",
    content:
      "Aaqib Sir's approach to teaching Artificial Intelligence is completely hands-on. While most college courses remained locked in basic formulas, his labs had us building actual vector stores, implementing Grad-CAM from scratch, and deploying containerized FastAPI backends. That capstone experience directly helped me land my first AI Engineering role.",
    highlight: "Completely hands-on. Built actual vector stores & Grad-CAM from scratch.",
    category: "Student",
    avatarInitials: "VR",
  },
  {
    id: "test-2",
    name: "Dr. K. Srinivas",
    role: "Senior Academician & Head of Department",
    organization: "School of Engineering & Technology",
    content:
      "Aaqib Rashid Mir brought rare industry realism into the classroom. His ability to synthesize complex mathematical paradigms into accessible, production-oriented engineering modules in Large Language Models and Explainable AI set an exceptional pedagogical benchmark for our institution.",
    highlight: "Brought rare industry realism into the classroom and advanced our AI curriculum.",
    category: "Faculty & Research",
    avatarInitials: "KS",
  },
  {
    id: "test-3",
    name: "Pooja Reddy",
    role: "Data Analyst & Bootcamp Graduate",
    organization: "The Coding Science Cohort",
    content:
      "I attended Aaqib's 6-week intensive Data Science and Python bootcamp. His patience with first-principles problem solving and step-by-step code walkthroughs turned machine learning from an intimidating subject into practical intuition. Every single exercise solved a real business dataset problem.",
    highlight: "Turned machine learning from intimidating math into practical intuition.",
    category: "Corporate Engineer",
    avatarInitials: "PR",
  },
  {
    id: "test-4",
    name: "Saurabh Mishra",
    role: "MLOps Engineer & Workshop Attendee",
    organization: "Generative AI Systems Workshop",
    content:
      "The Ollama tool-calling and LangGraph multi-agent workshop was one of the most practical sessions I've attended. No slide decks of vague marketing buzzwords — we wrote cyclic state graphs, handled tool schemas with Pydantic, and verified model reasoning within hours.",
    highlight: "No vague buzzwords — we wrote stateful graphs and handled real tool schemas.",
    category: "Corporate Engineer",
    avatarInitials: "SM",
  },
];
