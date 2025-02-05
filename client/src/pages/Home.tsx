import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";

const skills = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "Azure", "Terraform", "Kubernetes", "Docker"],
  },
  {
    category: "CI/CD & Automation",
    items: ["Jenkins", "GitLab CI", "GitHub Actions", "Ansible", "Shell Scripting"],
  },
  {
    category: "Monitoring & Security",
    items: ["Prometheus", "Grafana", "ELK Stack", "Vault", "Security Best Practices"],
  },
];

const devopsImages = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
    title: "Cloud Infrastructure",
    description: "Designed and implemented a multi-region AWS infrastructure using Terraform, achieving 99.99% uptime and 40% cost reduction through optimal resource utilization.",
    technologies: ["AWS", "Terraform", "CloudFormation", "AWS Lambda"],
  },
  {
    src: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    title: "CI/CD Pipeline",
    description: "Built a comprehensive CI/CD pipeline handling 200+ deployments per week, reducing deployment time from hours to minutes while ensuring zero-downtime deployments.",
    technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes"],
  },
  {
    src: "https://raw.githubusercontent.com/kubernetes/kubernetes/master/logo/logo.svg",
    title: "Container Orchestration",
    description: "Architected a Kubernetes cluster managing 100+ microservices, implementing auto-scaling and self-healing capabilities for improved reliability.",
    technologies: ["Kubernetes", "Docker", "Helm", "Prometheus"],
  },
];

export default function Home() {
  const [selectedWork, setSelectedWork] = useState<(typeof devopsImages)[0] | null>(
    null
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 text-center"
        >
          <div className="mb-8">
            <img
              src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7"
              alt="Developer Profile"
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-primary bg-white"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent leading-normal">
            DevOps Engineer
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto px-4 mb-6">
            Passionate about automating, optimizing, and securing cloud infrastructure
          </p>
        </motion.div>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
          }}
        />
      </section>

      {/* About Me Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">About Me</h2>
          <p className="text-muted-foreground leading-relaxed">
            A seasoned DevOps Engineer with 8+ years of experience in designing and implementing scalable cloud infrastructure, CI/CD pipelines, and automated deployment solutions. I specialize in containerization, infrastructure as code, and implementing DevSecOps practices to enhance development workflows and system reliability.
          </p>
        </motion.div>
      </section>

      {/* Professional Summary */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Professional Summary</h2>
            <ul className="space-y-4">
              {[
                "Led cloud migration projects resulting in 40% cost reduction and improved scalability",
                "Implemented automated CI/CD pipelines reducing deployment time by 60%",
                "Designed and maintained Kubernetes clusters handling millions of requests daily",
                "Established monitoring and alerting systems achieving 99.99% uptime",
              ].map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-lg mb-4">{category.category}</h3>
                    <ul className="space-y-2">
                      {category.items.map((skill, skillIndex) => (
                        <li key={skillIndex} className="text-muted-foreground flex items-center gap-2">
                          <Check className="h-4 w-4 text-primary" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Work */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Featured Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {devopsImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card
                    className="overflow-hidden group cursor-pointer"
                    onClick={() => setSelectedWork(image)}
                  >
                    <CardContent className="p-0 relative">
                      <img
                        src={image.src}
                        alt={image.title}
                        className="w-full h-48 object-contain p-4 bg-white transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center px-4">
                          <h3 className="text-white text-xl font-semibold mb-2">
                            {image.title}
                          </h3>
                          <p className="text-white/80 text-sm">Click to view details</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Work Details Dialog */}
      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              {selectedWork?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedWork?.src}
              alt={selectedWork?.title}
              className="w-full aspect-video object-cover rounded-md mb-4"
            />
            <DialogDescription className="text-base leading-relaxed mb-4">
              {selectedWork?.description}
            </DialogDescription>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm text-muted-foreground">
                Technologies Used:
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedWork?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-primary/10 text-primary rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}