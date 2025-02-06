import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const sampleBlogs = [
  {
    title: "Understanding AWS",
    date: "October 10, 2023",
    content: "AWS (Amazon Web Services) is a comprehensive, evolving cloud computing platform provided by Amazon. It offers a mix of infrastructure as a service (IaaS), platform as a service (PaaS), and packaged software as a service (SaaS) offerings."
  },
  {
    title: "Getting Started with Kubernetes",
    date: "September 15, 2023",
    content: "Kubernetes is an open-source container-orchestration system for automating computer application deployment, scaling, and management. It was originally designed by Google and is now maintained by the Cloud Native Computing Foundation."
  },
  {
    title: "CI/CD with GitHub Actions",
    date: "August 20, 2023",
    content: "GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want."
  }
];

const Blogs = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      {sampleBlogs.map((blog, index) => (
        <Card key={index} className="mb-4">
          <CardContent>
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500">{blog.date}</p>
            <p className="mt-2">{blog.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Blogs;