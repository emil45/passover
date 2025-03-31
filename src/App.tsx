import { useState } from "react";
import { tribesData } from "@/lib/data";
import { Sidebar } from "@/components/SideBar";
import { HomePage } from "@/pages/HomePage";
import { ContactDialog } from "@/components/ContactDialog";
import { TopBar } from "@/components/TopBar";
import { ScrollToTopButton } from "@/components/ScrollToTopButton";
import { Route, Routes, useLocation } from "react-router";
import GlossaryPage from "@/pages/GlossaryPage";
import { Footer } from "@/components/Footer";

function App() {
  const [selectedTribe, setSelectedTribe] = useState<string>("east");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);
  const location = useLocation();

  // Get the tools for the selected tribe
  const tribeTools = tribesData[selectedTribe] || [];

  // Filter tools based on search query
  const filteredTools =
    searchQuery.trim() === ""
      ? []
      : tribeTools.filter((tool) => {
          const query = searchQuery.trim().toLowerCase();
          const toolName = tool.tool.toLowerCase();
          const aliases = tool.aliases.map((alias) => alias.toLowerCase());

          return (
            toolName.includes(query) ||
            aliases.some((alias) => alias.includes(query))
          );
        });

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSearchPerformed(query.trim().length > 0);
  };

  const handleTribeChange = (tribe: string) => {
    setSelectedTribe(tribe);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const openContactDialog = () => {
    setContactOpen(true);
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      <TopBar toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />
      <Sidebar
        selectedTribe={selectedTribe}
        onTribeChange={handleTribeChange}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        openContactDialog={openContactDialog}
        currentPath={location.pathname}
      />

      <div className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                searchQuery={searchQuery}
                onSearch={handleSearch}
                tools={filteredTools}
                searchPerformed={searchPerformed}
                openContactDialog={openContactDialog}
              />
            }
          />
          <Route path="/glossary" element={<GlossaryPage />} />
        </Routes>
      </div>

      <Footer />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
