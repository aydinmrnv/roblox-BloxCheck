import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Shield, ArrowLeft, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";

export default function VerifyCode() {
  const [code, setCode] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [verificationResult, setVerificationResult] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleVerify = async () => {
    if (!code.trim()) {
      setVerificationResult({
        success: false,
        message: "Please enter a verification code"
      });
      return;
    }

    setIsVerifying(true);
    setVerificationResult(null);

    // Simulate verification process
    setTimeout(() => {
      // For demo purposes, we'll show success for any non-empty code
      setVerificationResult({
        success: true,
        message: "Your Roblox developer account has been successfully verified!"
      });
      setIsVerifying(false);
    }, 2000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleVerify();
    }
  };

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
            <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          <Card className="border-roblox-blue/20 shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-roblox-blue/10 rounded-full">
                  <Shield className="h-8 w-8 text-roblox-blue" />
                </div>
              </div>
              <CardTitle className="text-2xl">Enter Verification Code</CardTitle>
              <CardDescription>
                Please enter the verification code you received
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="verification-code">Verification Code</Label>
                <Input
                  id="verification-code"
                  type="text"
                  placeholder="Enter your code..."
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="text-center text-lg font-mono"
                  disabled={isVerifying}
                />
              </div>

              {verificationResult && (
                <Alert className={verificationResult.success ? "border-roblox-green bg-roblox-green/5" : "border-roblox-red bg-roblox-red/5"}>
                  <div className="flex items-center gap-2">
                    {verificationResult.success ? (
                      <CheckCircle className="h-4 w-4 text-roblox-green" />
                    ) : (
                      <AlertCircle className="h-4 w-4 text-roblox-red" />
                    )}
                    <AlertDescription className={verificationResult.success ? "text-roblox-green" : "text-roblox-red"}>
                      {verificationResult.message}
                    </AlertDescription>
                  </div>
                </Alert>
              )}

              <Button 
                onClick={handleVerify}
                disabled={isVerifying}
                className="w-full bg-roblox-blue hover:bg-roblox-blue-dark text-white font-semibold py-3 text-lg transition-all duration-200"
              >
                {isVerifying ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Verifying...
                  </>
                ) : (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Verify Account
                  </>
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Don't have a code?
                  </span>
                </div>
              </div>

              <a 
                href="https://roblox-verification.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline" 
                  className="w-full border-roblox-blue/30 text-roblox-blue hover:bg-roblox-blue/5 font-semibold transition-all duration-200"
                >
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Get Verification Code
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </CardContent>
          </Card>

          {/* Help Section */}
          <Card className="mt-6 bg-muted/50">
            <CardContent className="pt-6">
              <div className="text-center space-y-2">
                <h3 className="font-semibold text-sm">Need Help?</h3>
                <p className="text-xs text-muted-foreground">
                  If you're having trouble with verification, make sure you have the correct code from your Roblox developer dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
