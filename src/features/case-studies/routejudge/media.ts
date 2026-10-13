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

// Stack logos, reused from the VisaBuddy case study's assets (same files, so
// both pages show identical marks). Tools without a logo file in the repo are
// shown as text labels instead of an invented icon.
import ModalLogo from "@/Image/VisaBuddy/Modal-Primary-Logo.svg";
import FastApiLogo from "@/Image/VisaBuddy/FastAPI_logo.svg";
import TransformersLogo from "@/Image/VisaBuddy/HG transfomers.svg";
import ReactLogo from "@/Image/VisaBuddy/react.svg";
import TypescriptLogo from "@/Image/VisaBuddy/typescript.svg";
import TailwindLogo from "@/Image/VisaBuddy/tailwindcss.svg";

export { ModalLogo, FastApiLogo, TransformersLogo, ReactLogo, TypescriptLogo, TailwindLogo };
