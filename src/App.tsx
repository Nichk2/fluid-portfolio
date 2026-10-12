import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import ClarityRouteTracker from "./features/shell/ClarityRouteTracker";
import ScrollToTop from "./features/shell/ScrollToTop";
import CustomCursor from "./features/shell/CustomCursor";
import ErrorBoundary from "./features/shell/ErrorBoundary";
import { SmoothScrollProvider } from "./contexts/SmoothScrollContext";
import HomePage from "./features/home/HomePage";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import VisaBuddy from "./features/case-studies/visabuddy/VisaBuddyPage";
import Photox from "./features/case-studies/photox/PhotoxPage";
import HybrasCollab from "./features/case-studies/hybras-collab/HybrasCollabPage";
import MyHolyBooks from "./features/case-studies/my-holy-books/MyHolyBooksPage";
import P3MPlatform from "./features/case-studies/p3m-platform/P3MPlatformPage";
import AwesomeGames from "./features/case-studies/awesome-games/AwesomeGamesPage";
import './lib/i18n';


const queryClient = new QueryClient();

/** Keyed by pathname so a crash on one route doesn't stay stuck once the user navigates away. */
const RoutesWithBoundary = () => {
  const location = useLocation();
  return (
    <ErrorBoundary key={location.pathname}>
      <Routes>
        <Route path="/" element={<HomePage />} />
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
    </ErrorBoundary>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <MotionConfig reducedMotion="user">
        <HashRouter>
          <SmoothScrollProvider>
            <ClarityRouteTracker />
            <ScrollToTop />
            <CustomCursor />
            <RoutesWithBoundary />
          </SmoothScrollProvider>
        </HashRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
