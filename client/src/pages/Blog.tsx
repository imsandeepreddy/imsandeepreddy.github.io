import { Card, CardContent } from "@/components/ui/card";

export default function Blog() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold mb-4">Blog Coming Soon</h1>
          <p className="text-muted-foreground">
            Technical articles and insights will be available here shortly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
