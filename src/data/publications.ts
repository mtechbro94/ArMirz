export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: number;
  type: "Journal Article" | "Conference Paper" | "Preprint / In Submission";
  status: "Published" | "Accepted" | "Under Review";
  impactFactor?: string;
  paperId?: string;
  abstract: string;
  tags: string[];
  bibtex?: string;
  links?: {
    label: string;
    url: string;
  }[];
}

export const publicationsData: Publication[] = [
  {
    title: "Adaptive Multi-Model LBPH with Temporal Stability Validation for Real-Time Attendance Recognition",
    authors: "Mir, A. R., Pandit, R. U. Z., Guruphale, S. D., Athira Pradeep K., Kumar, A., & Pushkar, S. K.",
    journal: "International Journal For Multidisciplinary Research (IJFMR)",
    year: 2026,
    type: "Journal Article",
    status: "Published",
    impactFactor: "9.24",
    paperId: "84195",
    abstract:
      "Presents an adaptive multi-model Local Binary Pattern Histograms (LBPH) framework augmented with temporal stability validation for high-accuracy, real-time facial recognition under non-uniform illumination and pose variations.",
    tags: ["Computer Vision", "Facial Recognition", "LBPH", "Real-Time Systems", "Temporal Validation"],
    bibtex: `@article{mir2026adaptive,
  title={Adaptive Multi-Model LBPH with Temporal Stability Validation for Real-Time Attendance Recognition},
  author={Mir, Aaqib Rashid and Pandit, R. U. Z. and Guruphale, S. D. and Athira Pradeep, K. and Kumar, A. and Pushkar, S. K.},
  journal={International Journal For Multidisciplinary Research (IJFMR)},
  volume={8},
  number={4},
  pages={1--12},
  year={2026},
  publisher={IJFMR}
}`,
    links: [
      { label: "Journal Volume 8, Issue 4", url: "https://www.ijfmr.com" },
    ],
  },
  {
    title: "VGG16-Based Explainable Brain Tumor Detection Using Grad-CAM",
    authors: "Mir, A. R.",
    journal: "International Journal of Scientific Research (IJSR)",
    year: 2025,
    type: "Journal Article",
    status: "Published",
    abstract:
      "Investigates the application of fine-tuned VGG16 deep convolutional neural networks combined with Gradient-weighted Class Activation Mapping (Grad-CAM) to deliver interpretable, visually faithful localized tumor detection across cranial MRI scans.",
    tags: ["Explainable AI (XAI)", "Grad-CAM", "Deep Learning", "Medical Imaging", "VGG16"],
    bibtex: `@article{mir2025vgg16,
  title={VGG16-Based Explainable Brain Tumor Detection Using Grad-CAM},
  author={Mir, Aaqib Rashid},
  journal={International Journal of Scientific Research (IJSR)},
  year={2025},
  publisher={IJSR}
}`,
    links: [
      { label: "Peer-Reviewed & Indexed", url: "https://www.ijsr.net" },
    ],
  },
  {
    title: "Faithful by Design: A Cross-Modal Concept Bottleneck Framework for Trustworthy Multimodal Clinical Decision Support",
    authors: "Mir, A. R., et al.",
    journal: "Targeting IEEE Journal of Biomedical and Health Informatics (JBHI) / Computers in Biology and Medicine",
    year: 2026,
    type: "Preprint / In Submission",
    status: "Under Review",
    abstract:
      "Proposes XM-CBM, an interpretable multimodal architecture integrating tabular EHR vitals and chest X-ray images through an explicit physiological concept bottleneck layer. Evaluated with Deletion-AUC, Insertion-AUC, and test-time clinical interventions.",
    tags: ["Multimodal AI", "Concept Bottleneck Models", "Clinical Decision Support", "Vision Transformers", "MIMIC-IV"],
    bibtex: `@article{mir2026faithful,
  title={Faithful by Design: A Cross-Modal Concept Bottleneck Framework for Trustworthy Multimodal Clinical Decision Support},
  author={Mir, Aaqib Rashid and others},
  journal={Preprint / Targeting IEEE JBHI},
  year={2026}
}`,
    links: [
      { label: "Colab Pipeline", url: "https://colab.research.google.com/github/mtechbro94/Multimodal-Explainable-AI-for-Clinical-Decision-Support/blob/main/notebooks/XM_CBM_Full_Pipeline.ipynb" },
      { label: "GitHub Codebase", url: "https://github.com/mtechbro94/Multimodal-Explainable-AI-for-Clinical-Decision-Support" },
    ],
  },
  {
    title: "Stress-Testing Longitudinal Synthetic EHR and ICU Waveform Generation: An Adversarial Benchmarking Framework for Privacy, Utility, and Algorithmic Fairness",
    authors: "Mir, A. R.",
    journal: "Targeting IEEE Journal of Biomedical and Health Informatics (JBHI) / JAMIA",
    year: 2026,
    type: "Preprint / In Submission",
    status: "Under Review",
    abstract:
      "Establishes a principled empirical benchmark suite to stress-test synthetic longitudinal Electronic Health Records (EHR) and ICU waveforms along three critical clinical axes: privacy (shadow-model membership inference and attribute inference attacks), utility (Train-on-Synthetic-Test-on-Real and Train-on-Real-Test-on-Synthetic pipelines), and algorithmic fairness (demographic subgroup disparities) across 42,110 MIMIC-IV adult ICU cohorts.",
    tags: ["Synthetic EHR", "MIMIC-IV", "Membership Inference", "Differential Privacy", "Healthcare Fairness", "Waveforms"],
    bibtex: `@article{mir2026syntheticehr,
  title={Stress-Testing Longitudinal Synthetic EHR and ICU Waveform Generation: An Adversarial Benchmarking Framework for Privacy, Utility, and Algorithmic Fairness},
  author={Mir, Aaqib Rashid},
  journal={Targeting IEEE JBHI / JAMIA},
  year={2026}
}`,
    links: [
      { label: "1-Click Google Colab Pipeline", url: "https://colab.research.google.com/github/mtechbro94/synthetic-ehr-benchmark/blob/main/notebooks/Synthetic_EHR_Benchmark_Walkthrough.ipynb" },
      { label: "GitHub Benchmark Suite", url: "https://github.com/mtechbro94/synthetic-ehr-benchmark" },
    ],
  },
];
