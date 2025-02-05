import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/">
            <a className="text-xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Sandeep Reddy
            </a>
          </Link>
          <div className="flex gap-6">
            <Link href="/blog">
              <a
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  location === "/blog" ? "text-primary" : "text-muted-foreground"
                )}
              >
                Blog
              </a>
            </Link>
            <Link href="/resume">
              <a
                className={cn(
                  "text-sm transition-colors hover:text-primary",
                  location === "/resume"
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                Resume
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}