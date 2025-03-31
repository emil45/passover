import { Menu, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

interface TopBarProps {
  toggleSidebar: () => void;
  sidebarOpen: boolean;
}

export function TopBar({ toggleSidebar, sidebarOpen }: TopBarProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-16 bg-card border-b border-border z-40 flex items-center px-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-4">
          <Button variant="outline" size="icon" onClick={toggleSidebar}>
            {sidebarOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
        <div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-muted"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
            <span className="sr-only">
              {theme === "dark" ? "מצב יום" : "מצב לילה"}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
}
