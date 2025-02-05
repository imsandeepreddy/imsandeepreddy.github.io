import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/ui/navbar";
import Home from "@/pages/Home";
import Blog from "@/pages/Blog";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/blog" component={Blog} />
          <Route path="/resume" component={Resume} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
