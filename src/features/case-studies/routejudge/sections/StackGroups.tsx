import { useTranslation } from "react-i18next";
import {
  EchartsLogo,
  FastApiLogo,
  FigmaLogo,
  GsapLogo,
  HuggingFaceLogo,
  LlamaCppLogo,
  ModalLogo,
  OllamaLogo,
  PeftLogo,
  PythonLogo,
  ReactLogo,
  SqliteLogo,
  TailwindLogo,
  TypescriptLogo,
  VllmLogo,
} from "@/features/case-studies/routejudge/media";

type Tool = {
  name: string;
  logo?: string;
  /** The logo already spells the name (FastAPI, GSAP), so the caption would repeat it. */
  wordmark?: boolean;
  /** Per-logo size: some files carry lots of empty space around the mark. */
  logoClass?: string;
};

// Only what RouteJudge actually runs, checked against its requirements.txt,
// training jobs and frontend/package.json. Brand names aren't translated.
const GROUPS: { key: "training" | "serving" | "frontend"; tools: Tool[] }[] = [
  {
    key: "training",
    tools: [
      { name: "Modal", logo: ModalLogo },
      { name: "Transformers", logo: HuggingFaceLogo },
      { name: "PEFT (LoRA)", logo: PeftLogo },
      { name: "vLLM", logo: VllmLogo },
      { name: "llama.cpp", logo: LlamaCppLogo },
    ],
  },
  {
    key: "serving",
    tools: [{ name: "FastAPI", logo: FastApiLogo, wordmark: true, logoClass: "h-7" }, { name: "Python", logo: PythonLogo }, { name: "Ollama", logo: OllamaLogo }, { name: "SQLite", logo: SqliteLogo }],
  },
  {
    // Figma leads this group: the app was designed there before any frontend code (chapter 9).
    key: "frontend",
    tools: [
      { name: "Figma", logo: FigmaLogo },
      { name: "React", logo: ReactLogo },
      { name: "TypeScript", logo: TypescriptLogo },
      { name: "Tailwind CSS", logo: TailwindLogo },
      { name: "GSAP", logo: GsapLogo, wordmark: true, logoClass: "h-7" },
      { name: "ECharts", logo: EchartsLogo },
    ],
  },
];

/**
 * What RouteJudge is built with, grouped by where it runs. Tools with a logo
 * in the repo show it; the rest are text tiles of the same size rather than
 * an invented icon. The name is always written, so no logo has to be recognized.
 */
export const StackGroups = () => {
  const { t } = useTranslation("routejudge");

  return (
    <div className="space-y-10">
      {GROUPS.map((group) => (
        <div key={group.key}>
          <p className="font-body text-xs tracking-widest text-muted-foreground uppercase mb-4">{t(`shipping.stack.${group.key}`)}</p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {group.tools.map((tool) => (
              <li key={tool.name} className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-border/30 bg-card px-3 py-5 min-h-28 text-center">
                {tool.logo && (
                  <img
                    src={tool.logo}
                    // A wordmark is the only place the name appears, so it carries it as alt text.
                    alt={tool.wordmark ? tool.name : ""}
                    loading="lazy"
                    decoding="async"
                    className={`${tool.logoClass ?? "h-8"} w-auto max-w-full object-contain`}
                  />
                )}
                {!tool.wordmark && <span className="font-body text-sm text-foreground">{tool.name}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default StackGroups;
