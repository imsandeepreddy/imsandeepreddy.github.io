import { Card, CardContent } from "@/components/ui/card";

export default function Resume() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-background">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <h1 className="text-2xl font-bold mb-4">Resume Coming Soon</h1>
          <p className="text-muted-foreground">
            Professional experience and skills will be listed here shortly.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
