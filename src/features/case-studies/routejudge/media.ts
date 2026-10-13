// Pixel-art gavel from the RouteJudge app, resized with nearest-neighbor
// sampling (keeps the pixel edges crisp) and palette-compressed: 3.2 MB -> 6 KB.
import Logo from "@/Image/RouteJudge/logo.png";
// 21:9 version (gavel centered on its own background) so the full-width
// featured card and the project-list hover preview can crop without cutting the mark.
import Thumbnail from "@/Image/RouteJudge/thumbnail.png";

export { Logo, Thumbnail };

// App screens exported from the RouteJudge Figma file at 2x (2560x1800), so the
// pixel font stays sharp on retina screens. They are designs with sample data,
// not captures of the live app; captions say so (see ScreenFigure).
import ScreenDashboard from "@/Image/RouteJudge/screen-dashboard.png";
import ScreenStats from "@/Image/RouteJudge/screen-stats.png";
import ScreenHistory from "@/Image/RouteJudge/screen-history.png";

export { ScreenDashboard, ScreenStats, ScreenHistory };

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
};
