import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

export default function Index() {
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
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Hero Section */}
          <div className="space-y-4">
            <div className="flex justify-center">
              <div className="p-3 bg-roblox-blue/10 rounded-full">
                <CheckCircle className="h-12 w-12 text-roblox-blue" />
              </div>
            </div>
            <h2 className="text-4xl font-bold tracking-tight">
              Verify Your Roblox Developer Account
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Secure and reliable verification system for Roblox developers.
              Confirm your account status with our official verification
              process.
            </p>
          </div>

          {/* Main Action Card */}
          <Card className="border-roblox-blue/20 shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Ready to Verify?</CardTitle>
              <CardDescription>
                Choose your verification method below
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Verify Button */}
              <Link to="/verify" className="block">
                <Button
                  size="lg"
                  className="w-full bg-roblox-blue hover:bg-roblox-blue-dark text-white font-semibold py-3 text-lg transition-all duration-200 hover:scale-105"
                >
                  <Shield className="mr-2 h-5 w-5" />
                  Verify My Account
                </Button>
              </Link>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    or
                  </span>
                </div>
              </div>

              {/* No Code Button */}
              <a
                href="https://roblox-verification.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-roblox-blue/30 text-roblox-blue hover:bg-roblox-blue/5 font-semibold py-3 text-lg transition-all duration-200"
                >
                  <AlertCircle className="mr-2 h-5 w-5" />
                  I Don't Have a Code
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <Shield className="h-8 w-8 text-roblox-green" />
              </div>
              <h3 className="font-semibold">Secure</h3>
              <p className="text-sm text-muted-foreground">
                Bank-level security for your verification process
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <CheckCircle className="h-8 w-8 text-roblox-blue" />
              </div>
              <h3 className="font-semibold">Fast</h3>
              <p className="text-sm text-muted-foreground">
                Quick verification in just a few simple steps
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="flex justify-center">
                <AlertCircle className="h-8 w-8 text-roblox-red" />
              </div>
              <h3 className="font-semibold">Reliable</h3>
              <p className="text-sm text-muted-foreground">
                Trusted by thousands of Roblox developers
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2024 BloxCheck. Secure Roblox Developer Verification.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
