import { useTranslation } from "react-i18next";
import {
  FastApiLogo,
  ModalLogo,
  ReactLogo,
  TailwindLogo,
  TransformersLogo,
  TypescriptLogo,
} from "@/features/case-studies/routejudge/media";

type Tool = {
  name: string;
  logo?: string;
  /** The logo already spells the name (FastAPI, Transformers), so the caption would repeat it. */
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
      { name: "Transformers", logo: TransformersLogo, wordmark: true, logoClass: "h-14" },
      { name: "PEFT (LoRA)" },
      { name: "vLLM" },
      { name: "llama.cpp" },
    ],
  },
  {
    key: "serving",
    tools: [{ name: "FastAPI", logo: FastApiLogo, wordmark: true, logoClass: "h-7" }, { name: "Python" }, { name: "Ollama" }, { name: "SQLite" }, { name: "sentence-transformers" }],
  },
  {
    key: "frontend",
    tools: [
      { name: "React", logo: ReactLogo },
      { name: "TypeScript", logo: TypescriptLogo },
      { name: "Tailwind CSS", logo: TailwindLogo },
      { name: "GSAP" },
      { name: "ECharts" },
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
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
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
