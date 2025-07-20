import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Home, AlertTriangle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-roblox-blue/10 via-background to-roblox-green/5">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-roblox-blue" />
              <h1 className="text-2xl font-bold text-foreground">BloxCheck</h1>
            </div>
            <div className="text-sm text-muted-foreground">
              Roblox Developer Verification
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-roblox-red/20 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-roblox-red/10 rounded-full">
                  <AlertTriangle className="h-8 w-8 text-roblox-red" />
                </div>
              </div>
              <CardTitle className="text-2xl">Page Not Found</CardTitle>
              <CardDescription>
                Sorry, the page you're looking for doesn't exist.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <p className="text-6xl font-bold text-roblox-red/20 mb-4">
                  404
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  The requested page "{location.pathname}" could not be found.
                </p>
              </div>

              <Link to="/">
                <Button className="w-full bg-roblox-blue hover:bg-roblox-blue-dark text-white font-semibold">
                  <Home className="mr-2 h-4 w-4" />
                  Return to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
