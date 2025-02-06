import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState } from "react";
import BlogContent from "@/components/ui/BlogContent";

const sampleBlogs = [
  {
    title: "Understanding AWS",
    date: "October 10, 2023",
    gistUrl: "https://raw.githubusercontent.com/imsandeepreddy/imsandeepreddy.github.io/refs/heads/main/Kubernetes/StatefulSets/README.md"
  },
  {
    title: "Getting Started with Kubernetes",
    date: "September 15, 2023",
    gistUrl: "https://raw.githubusercontent.com/imsandeepreddy/imsandeepreddy.github.io/refs/heads/main/Kubernetes/StatefulSets/README.md"
  },
  {
    title: "CI/CD with GitHub Actions",
    date: "August 20, 2023",
    gistUrl: "https://raw.githubusercontent.com/imsandeepreddy/imsandeepreddy.github.io/refs/heads/main/Kubernetes/StatefulSets/README.md"
  }
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openDialog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeDialog = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Blogs</h1>
      {sampleBlogs.map((blog, index) => (
        <Card key={index} className="mb-4 cursor-pointer" onClick={() => openDialog(blog)}>
          <CardContent>
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text-gray-500">{blog.date}</p>
            <p className="mt-2">Click to read more...</p>
          </CardContent>
        </Card>
      ))}

      {selectedBlog && (
        <Dialog open={true} onClose={closeDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedBlog.title}</DialogTitle>
              <DialogDescription>{selectedBlog.date}</DialogDescription>
            </DialogHeader>
            <BlogContent gistUrl={selectedBlog.gistUrl} />
            <button onClick={closeDialog} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Blogs;