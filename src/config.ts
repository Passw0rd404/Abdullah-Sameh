export const siteConfig = {
  name: "Abdullah Sameh",
  title: "DevOps Engineer",
  description: "Computer Science student and DevOps Engineer focused on Kubernetes, GitOps, and Cloud Automation.",
  accentColor: "#1a56db",
  social: {
    email: "me@abdullahsameh.qzz.io",
    linkedin: "https://linkedin.com/in/abdullah-sameh-0a3063366",
    twitter: "", 
    github: "https://github.com/Passw0rd404",
  },
  cvPdfPath: "/final.pdf", 
  cvHtmlPath: "/final.html",
  aboutMe: "Computer Science student with hands-on DevOps experience in Kubernetes orchestration, GitOps, CI/CD pipelines, cloud infrastructure automation, and containerization. Built full-stack applications from scratch and deployed a MERN stack to a multi-tier AWS architecture. Currently deploying a federated social media platform as microservices on Kubernetes. Focused on cloud-agnostic, maintainable infrastructure and automation-first practices.",
  skills: ["AWS", "Kubernetes", "Docker", "Terraform", "Prometheus", "Grafana", "ArgoCD", "GitHub Actions", "Python", "Bash", "Helm", "Packer"],
  projects: [
    {
      name: "Mastodon — Production Kubernetes Deployment",
      description: "Deployed a federated social media platform on Kubernetes with microservices for web, streaming, and workers. Features high availability PostgreSQL via CloudNativePG and GitOps via ArgoCD.",
      link: "https://github.com/Passw0rd404/mastodon-DevOps-version",
      skills: ["Kubernetes", "GitOps", "PostgreSQL", "Longhorn"]
    },
    {
      name: "MERN E-Commerce — AWS 3-Tier Architecture",
      description: "A production-grade AWS deployment using CloudFront, NLB, and ASGs in private subnets. Infrastructure managed via Terraform with AMIs baked by Packer.",
      link: "https://github.com/Passw0rd404/mern-ecommerce-DevOps-version",
      skills: ["AWS", "Terraform", "Packer", "OIDC"]
    },
    {
      name: "HiveBox — IoT Temperature API",
      description: "Aggregating live IoT sensor data using FastAPI; deployed on kind with Valkey caching and full Prometheus/Grafana observability.",
      link: "https://github.com/Passw0rd404/HiveBox",
      skills: ["FastAPI", "Prometheus", "Valkey"]
    },
    {
      name: "HealthAI Labs — AI-Powered Platform",
      description: "Integrated 4 AI models including Gemini API; containerized with Docker Compose for multi-service orchestration.",
      link: "https://github.com/co-op-projects-to-boost-my-experience/HealthAI-Labs",
      skills: ["Docker Compose", "AI", "Gemini API"]
    }
  ],
  experience: [
    {
      company: "DevOps & Cloud Infrastructure",
      title: "Seeking New Opportunities",
      dateRange: "Present",
      bullets: [
        "Currently focusing on advanced Kubernetes patterns and cloud-native security.",
        "Available for internships or DevOps roles."
      ],
    }
  ],
  education: [
    {
      school: "Minoufia University, Egypt",
      degree: "Bachelor of Science in Data Science",
      dateRange: "Expected 2028",
      achievements: [
        "GPA: 3.01",
        "Focused on AI and Data Science"
      ],
    },
    {
      school: "Cloud Native Base Camp",
      degree: "AWS DevOps 90%",
      dateRange: "Issued 2026",
      achievements: [
        "Validated skills in AWS & DevOps"
      ],
    },
    {
      school: "McKinsey & Company",
      degree: "McKinsey Forward Program",
      dateRange: "2024",
      achievements: [
        "Advanced leadership, business, and digital skills"
      ],
    },
  ],
};

