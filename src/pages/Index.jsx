import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Home, Info, Mail } from "lucide-react";

const Index = () => {
  return (
    <div>
      <header className="sticky top-0 flex items-center justify-between bg-background p-4 shadow-md">
        <div className="flex items-center space-x-4">
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-10 h-10" />
          <nav className="hidden md:flex space-x-4">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">Home</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
        <div className="flex items-center space-x-2">
          <Input type="text" placeholder="Search..." className="w-48" />
          <Button variant="outline" size="icon">
            <Search className="h-5 w-5" />
          </Button>
        </div>
      </header>
      <main className="text-center mt-8">
        <h1 className="text-3xl">Your Blank Canvas</h1>
        <p>Chat with the agent to start making edits.</p>
      </main>
    </div>
  );
};

export default Index;