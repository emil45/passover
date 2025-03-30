import { Settings, MessageCircle, X, Book, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tribes } from "@/lib/data";
import { Link } from "react-router";

interface SidebarProps {
  selectedTribe: string;
  onTribeChange: (tribe: string) => void;
  isOpen: boolean;
  toggleSidebar: () => void;
  openContactDialog: () => void;
  currentPath: string;
}

export function Sidebar({
  selectedTribe,
  onTribeChange,
  isOpen,
  toggleSidebar,
  openContactDialog,
  currentPath,
}: SidebarProps) {
  const isGlossaryActive = currentPath === "/glossary";

  return (
    <>
      {/* Sidebar backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          w-64 bg-card border-l border-border shadow-lg z-50
          fixed top-0 right-0 h-full
          transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col h-full p-4 pt-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold">הגדרות</h2>
            <Button
              variant="outline"
              size="icon"
              onClick={toggleSidebar}
              className="hover:bg-muted"
            >
              <X className="h-5 w-5" />
              <span className="sr-only">סגור</span>
            </Button>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">עמודים</h3>
            <div className="space-y-2">
              <Button
                variant={currentPath === "/" ? "default" : "outline"}
                className="w-full justify-start"
                asChild
              >
                <Link to="/">
                  <Home className="h-4 w-4 ml-2" />
                  דף הבית
                </Link>
              </Button>
              <Button
                variant={isGlossaryActive ? "default" : "outline"}
                className="w-full justify-start"
                asChild
              >
                <Link to="/glossary">
                  <Book className="h-4 w-4 ml-2" />
                  <span>מילון מונחים</span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-3">בחר מנהג</h3>
            <div className="space-y-2">
              {tribes.map((tribe) => (
                <Button
                  key={tribe.id}
                  disabled={tribe.disabled}
                  variant={selectedTribe === tribe.id ? "default" : "outline"}
                  className="w-full justify-start"
                  onClick={() => onTribeChange(tribe.id)}
                >
                  {tribe.name}
                </Button>
              ))}
            </div>
          </div>

          <div className="mt-auto space-y-2">
            <Button
              variant="outline"
              className="w-full flex items-center gap-2"
              onClick={openContactDialog}
            >
              <MessageCircle className="h-4 w-4" />
              <span>צור קשר</span>
            </Button>

            <Button
              variant="ghost"
              className="w-full mt-2 flex items-center gap-2"
            >
              <Settings className="h-4 w-4" />
              <span>הגדרות נוספות</span>
            </Button>
          </div>
        </div>
      </aside>
    </>
  );
}
