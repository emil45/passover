import { useState } from "react";
import { toolsData } from "@/lib/data";
import { Sidebar } from "@/components/SideBar";
import { HomePage } from "@/pages/HomePage";
import { ContactDialog } from "@/components/ContactDialog";

function App() {
  const [selectedTribe, setSelectedTribe] = useState<string>("east");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchPerformed, setSearchPerformed] = useState<boolean>(false);
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const filteredTools = toolsData.filter((tool) => {
    // Filter by tribe
    if (tool.tribe !== selectedTribe && tool.tribe !== "all") return false;

    // Filter by search query
    if (!searchQuery.trim()) return false;

    const query = searchQuery.trim().toLowerCase();
    const toolName = tool.tool.toLowerCase();
    const aliases = tool.aliases.map((alias) => alias.toLowerCase());

    return (
      toolName.includes(query) || aliases.some((alias) => alias.includes(query))
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
    <div className="relative min-h-screen">
      <Sidebar
        selectedTribe={selectedTribe}
        onTribeChange={handleTribeChange}
        isOpen={sidebarOpen}
        toggleSidebar={toggleSidebar}
        openContactDialog={openContactDialog}
      />
      <HomePage
        searchQuery={searchQuery}
        onSearch={handleSearch}
        tools={filteredTools}
        searchPerformed={searchPerformed}
        toggleSidebar={toggleSidebar}
        sidebarOpen={sidebarOpen}
        openContactDialog={openContactDialog}
      />
      <ContactDialog open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}

export default App;
