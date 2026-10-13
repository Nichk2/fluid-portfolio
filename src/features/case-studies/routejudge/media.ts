// Pixel-art gavel from the RouteJudge app, resized with nearest-neighbor
// sampling (keeps the pixel edges crisp) and palette-compressed: 3.2 MB -> 6 KB.
import Logo from "@/Image/RouteJudge/logo.png";
// "RouteJudge" in the app's stat style (Press Start 2P, 30px), exported from the
// Figma Foundations typography as an outlined path, so no font has to load.
import Wordmark from "@/Image/RouteJudge/wordmark.svg";
// 21:9 version (gavel centered on its own background) so the full-width
// featured card and the project-list hover preview can crop without cutting the mark.
import Thumbnail from "@/Image/RouteJudge/thumbnail.png";

export { Logo, Wordmark, Thumbnail };

// App screens exported from the RouteJudge Figma file at 2x (2560x1800), so the
// pixel font stays sharp on retina screens. They are designs with sample data,
// not captures of the live app; captions say so (see ScreenFigure).
import ScreenDashboard from "@/Image/RouteJudge/screen-dashboard.png";
import ScreenStats from "@/Image/RouteJudge/screen-stats.png";
import ScreenHistory from "@/Image/RouteJudge/screen-history.png";

export { ScreenDashboard, ScreenStats, ScreenHistory };

// Design-system foundations from the same Figma file (2x), trimmed to their
// content on the file's own board color (#282A36).
import FoundationsColors from "@/Image/RouteJudge/foundations-colors.png";
import FoundationsType from "@/Image/RouteJudge/foundations-type.png";
import FoundationsTokens from "@/Image/RouteJudge/foundations-tokens.png";

export { FoundationsColors, FoundationsType, FoundationsTokens };

// Stack logos. These four are reused from the VisaBuddy case study's assets
// (same files, so both pages show identical marks).
import ModalLogo from "@/Image/VisaBuddy/Modal-Primary-Logo.svg";
import FastApiLogo from "@/Image/VisaBuddy/FastAPI_logo.svg";
import TypescriptLogo from "@/Image/VisaBuddy/typescript.svg";
import TailwindLogo from "@/Image/VisaBuddy/tailwindcss.svg";

// Added for this page (white Ollama variant, for the dark surface).
import ReactLogo from "@/Image/RouteJudge/react.svg";
import PythonLogo from "@/Image/RouteJudge/python.svg";
import OllamaLogo from "@/Image/RouteJudge/ollama-dark.svg";
import VllmLogo from "@/Image/RouteJudge/vllm.svg";
import GsapLogo from "@/Image/RouteJudge/gsap.svg";
import HuggingFaceLogo from "@/Image/RouteJudge/hf-logo.svg";
import PeftLogo from "@/Image/RouteJudge/Peft.svg";
import LlamaCppLogo from "@/Image/RouteJudge/llama-cpp.svg";
import SqliteLogo from "@/Image/RouteJudge/sqlite-svgrepo-com.svg";
import EchartsLogo from "@/Image/RouteJudge/apacheecharts.svg";
import FigmaLogo from "@/Image/RouteJudge/figma.svg";

export {
  ModalLogo,
  FastApiLogo,
  ReactLogo,
  TypescriptLogo,
  TailwindLogo,
  PythonLogo,
  OllamaLogo,
  VllmLogo,
  GsapLogo,
  HuggingFaceLogo,
  PeftLogo,
  LlamaCppLogo,
  SqliteLogo,
  EchartsLogo,
  FigmaLogo,
};
