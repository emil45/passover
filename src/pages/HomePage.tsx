import type React from "react";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, XCircle } from "lucide-react";
import { ToolData } from "@/types/tool";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ToolCard } from "@/components/ToolCard";

interface HomePageProps {
  searchQuery: string;
  onSearch: (query: string) => void;
  tools: ToolData[];
  searchPerformed: boolean;
  openContactDialog: () => void;
}

export function HomePage({
  searchQuery,
  onSearch,
  tools,
  searchPerformed,
}: HomePageProps) {
  const [localSearch, setLocalSearch] = useState(searchQuery);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearch(value);
    setIsTyping(value.length > 0);
    onSearch(value); // Trigger search on every keystroke
  };

  const handleInputFocus = () => {
    setIsTyping(localSearch.length > 0);
  };

  const clearSearch = () => {
    setLocalSearch("");
    setIsTyping(false);
    onSearch("");
  };

  return (
    <div className="absolute inset-0 w-full">
      <main className="flex justify-center w-full min-h-screen p-4 md:p-8 pt-20">
        <div className="w-full max-w-2xl">
          <motion.div
            className={`w-full mx-auto ${
              searchPerformed || isTyping
                ? "mt-4 md:mt-16 mb-2"
                : "flex flex-col items-center justify-center min-h-[60vh]"
            }`}
            initial={false}
            animate={{
              y: searchPerformed || isTyping ? -20 : 0,
              scale: searchPerformed || isTyping ? 0.95 : 1,
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative w-full">
              <div className="relative">
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="חפש כלי (לדוגמה: סיר, מחבת, כוס)"
                  className="h-14 pr-12 pl-12 text-lg rounded-full shadow-md"
                  value={localSearch}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                {localSearch && (
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                    onClick={clearSearch}
                  >
                    <XCircle className="h-5 w-5" />
                    <span className="sr-only">נקה חיפוש</span>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>

          <AnimatePresence>
            {(searchPerformed || isTyping) && localSearch.trim() !== "" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 w-full"
              >
                {tools.length > 0 ? (
                  tools.map((tool, index) => (
                    <motion.div
                      key={tool.tool + index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <ToolCard tool={tool} />
                    </motion.div>
                  ))
                ) : (
                  <div className="text-center p-8 bg-muted rounded-lg">
                    <p className="text-xl">
                      לא נמצאו תוצאות עבור &quot;{localSearch}&quot;
                    </p>
                    <p className="text-muted-foreground mt-2">
                      נסה לחפש מונח אחר
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
