import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, Search, BookOpen, XCircle, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { glossaryTerms } from "@/lib/glossaryData";
import { GlossaryTerm } from "@/types/glossary";

export default function GlossaryPage() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTerms, setFilteredTerms] = useState(glossaryTerms);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredTerms(glossaryTerms);
      return;
    }

    const query = searchQuery.trim().toLowerCase();

    // Group terms by match type
    const exactMatches: GlossaryTerm[] = [];
    const partialMatches: GlossaryTerm[] = [];
    const otherMatches: GlossaryTerm[] = [];

    glossaryTerms.forEach((term) => {
      const termLower = term.term.toLowerCase();

      if (termLower === query) {
        exactMatches.push(term);
      } else if (termLower.includes(query)) {
        partialMatches.push(term);
      } else if (
        term.definition.toLowerCase().includes(query) ||
        term.examples?.some((ex) => ex.toLowerCase().includes(query)) ||
        term.relatedTerms?.some((rel) => rel.toLowerCase().includes(query))
      ) {
        otherMatches.push(term);
      }
    });

    // Combine groups in priority order
    setFilteredTerms([...exactMatches, ...partialMatches, ...otherMatches]);
  }, [searchQuery, glossaryTerms]);

  const handleClearSearch = () => {
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <div className="min-h-screen bg-background pt-16">
      <title>מילון מונחים להכשרת כלים לפסח | הכשרת כלים לפסח</title>
      <meta
        name="description"
        content="מילון מונחים מקיף להכשרת כלים לפסח. למדו על מושגים כמו הגעלה, ליבון קל, ליבון חמור, עירוי ועוד."
      />
      <meta
        name="keywords"
        content="הגעלה, ליבון קל, ליבון חמור, עירוי, חמץ, הכשרת כלים, פסח, מילון מונחים"
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: glossaryTerms.map((term) => ({
            "@type": "Question",
            name: term.term,
            acceptedAnswer: {
              "@type": "Answer",
              text: term.definition,
            },
          })),
        })}
      </script>

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            <ArrowRight className="h-5 w-5" />
            <span className="sr-only">חזרה לדף הבית</span>
          </Button>
          <h1 className="text-3xl font-bold mr-3">מילון מונחים לפסח</h1>
        </div>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="חפש מונח..."
              className="h-12 pr-12 pl-12 text-lg rounded-2xl shadow-md"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-8 w-8 text-muted-foreground hover:text-foreground"
                onClick={handleClearSearch}
              >
                <XCircle className="h-5 w-5" />
                <span className="sr-only">נקה חיפוש</span>
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredTerms.map((term) => (
            <motion.div
              key={term.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl">{term.term}</CardTitle>
                  <CardDescription className="text-lg mt-2 text-foreground/80">
                    {term.definition}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  {term.examples && term.examples.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">דוגמאות:</h3>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {term.examples.map((example, index) => (
                          <li key={index} className="text-sm">
                            {example}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {term.sources && term.sources.length > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <BookOpen className="h-4 w-4 text-primary" />
                        <h3 className="text-sm font-medium">מקורות:</h3>
                      </div>
                      <ul className="space-y-1">
                        {term.sources.map((source, index) => (
                          <li
                            key={index}
                            className="text-sm relative pr-4 before:absolute before:content-['•'] before:right-0 before:text-primary text-muted-foreground"
                          >
                            {source}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>

                {term.relatedTerms && term.relatedTerms.length > 0 && (
                  <CardFooter className="border-t pt-4">
                    <div>
                      <h3 className="text-sm font-medium mb-2">
                        מונחים קשורים:
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {term.relatedTerms.map((relatedTerm, index) => (
                          <Badge key={index} variant="secondary">
                            {relatedTerm}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardFooter>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredTerms.length === 0 && (
          <div className="text-center p-8 bg-muted rounded-lg max-w-md mx-auto mt-8">
            <p className="text-xl">
              לא נמצאו מונחים עבור &quot;{searchQuery}&quot;
            </p>
            <p className="text-muted-foreground mt-2">נסה לחפש מונח אחר</p>
          </div>
        )}
      </div>
    </div>
  );
}
