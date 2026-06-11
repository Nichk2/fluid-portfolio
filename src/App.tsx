import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import ClarityRouteTracker from "./components/ClarityRouteTracker";
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VisaBuddy from "./pages/VisaBuddy";
import Photox from "./pages/Photox";
import HybrasCollab from "./pages/HybrasCollab";
import MyHolyBooks from "./pages/MyHolyBooks";
import P3MPlatform from "./pages/P3MPlatform";
import AwesomeGames from "./pages/AwesomeGames";
import './lib/i18n';


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <ClarityRouteTracker />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/case-study/visabuddy" element={<VisaBuddy />} />
          <Route path="/case-study/photox" element={<Photox />} />
          <Route path="/case-study/hybras-collab" element={<HybrasCollab />} />
          <Route path="/case-study/myholybooks" element={<MyHolyBooks />} />
          <Route path="/case-study/p3m-platform" element={<P3MPlatform />} />
          <Route path="/case-study/awesome-games" element={<AwesomeGames />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
