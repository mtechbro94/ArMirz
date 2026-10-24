export interface Certification {
  id: string;
  name: string;
  issuer: string;
  code?: string;
  category: "Cloud" | "AI & ML" | "Analytics";
  description: string;
  skills: string[];
  status: "Active & Verified";
  badgeColor: string;
  verificationUrl?: string;
}

export const certificationsData: Certification[] = [
  {
    id: "aws-clf-c02",
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    code: "CLF-C02",
    category: "Cloud",
    description:
      "Validates overall understanding of AWS Cloud platform, global infrastructure, security and compliance, compute (EC2/Lambda), storage (S3), and cloud economics.",
    skills: ["AWS Cloud Architecture", "Cloud Security", "Cost Optimization", "IAM", "Serverless"],
    status: "Active & Verified",
    badgeColor: "from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-400",
    verificationUrl: "https://www.credly.com/organizations/amazon-web-services/badges",
  },
  {
    id: "azure-ai-900",
    name: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    code: "AI-900",
    category: "AI & ML",
    description:
      "Validates foundational knowledge of machine learning, computer vision, natural language processing, and generative AI workloads implemented on Microsoft Azure.",
    skills: ["Azure Cognitive Services", "Azure AI Studio", "Computer Vision", "Responsible AI"],
    status: "Active & Verified",
    badgeColor: "from-blue-500/20 to-cyan-500/20 border-blue-500/30 text-blue-400",
    verificationUrl: "https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-fundamentals/",
  },
  {
    id: "deep-learning-specialization",
    name: "Deep Learning Specialization",
    issuer: "DeepLearning.AI / Coursera (Instructed by Andrew Ng)",
    category: "AI & ML",
    description:
      "Comprehensive 5-course series covering Neural Networks and Deep Learning, Improving Deep Neural Networks, Structuring ML Projects, Convolutional Neural Networks, and Sequence Models (RNNs/Transformers).",
    skills: ["Backpropagation", "CNNs", "RNNs & LSTMs", "Optimization (Adam, Dropout)", "Hyperparameter Tuning"],
    status: "Active & Verified",
    badgeColor: "from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-400",
    verificationUrl: "https://www.coursera.org/specializations/deep-learning",
  },
  {
    id: "google-analytics-certification",
    name: "Google Analytics Certification",
    issuer: "Google",
    category: "Analytics",
    description:
      "Demonstrates expertise in digital measurement, web telemetry data collection, event tracking, user cohort analysis, and funnel conversion optimization.",
    skills: ["Web Telemetry", "Funnel Analytics", "Data-Driven Attribution", "Audience Segmentation"],
    status: "Active & Verified",
    badgeColor: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-400",
    verificationUrl: "https://skillshop.exceedlms.com/student/catalog",
  },
];
