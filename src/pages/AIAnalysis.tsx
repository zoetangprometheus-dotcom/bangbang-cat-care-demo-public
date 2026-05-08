import { AlertTriangle, ChevronLeft, HeartPulse, ListChecks, Save, Sparkles } from "lucide-react";
import type { Page } from "../App";
import { Card, IconBubble } from "../components/Card";

type AIAnalysisProps = {
  onNavigate: (page: Page) => void;
};

function ListCard({
  icon,
  title,
  items,
  tone = "normal",
}: {
  icon: React.ReactNode;
  title: string;
  items: string[];
  tone?: "normal" | "warning";
}) {
  return (
    <Card className="px-[18px] py-[18px]">
      <div className="flex items-center gap-[10px]">
        <IconBubble>{icon}</IconBubble>
        <h2 className="text-[18px] font-semibold text-ink-900">{title}</h2>
      </div>
      <ul className="mt-[14px] space-y-[9px] text-[13px] leading-[1.65] text-ink-500">
        {items.map((item) => (
          <li key={item} className="flex gap-[8px]">
            <span
              className={`mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full ${
                tone === "warning" ? "bg-[#ef4444]" : "bg-citrus-500"
              }`}
            />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function AIAnalysis({ onNavigate }: AIAnalysisProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => onNavigate("aiUpload")}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="Back to photo upload"
        >
          <ChevronLeft className="h-[25px] w-[25px] text-ink-900" strokeWidth={1.9} />
        </button>
        <h1 className="text-[24px] font-semibold text-ink-900">AI Initial Analysis</h1>
      </header>

      <div className="mt-[22px] space-y-[14px]">
        <Card className="px-[18px] py-[20px]">
          <div className="flex items-center gap-[10px]">
            <IconBubble>
              <Sparkles className="h-[22px] w-[22px]" strokeWidth={1.8} />
            </IconBubble>
            <h2 className="text-[18px] font-semibold text-ink-900">Current Situation</h2>
          </div>
          <p className="mt-[15px] text-[14px] leading-[1.8] text-ink-500">
            The photo suggests the vomit may contain undigested food.
            <br />
            Bangbang’s heart rate and activity show no ongoing abnormal signs.
          </p>
        </Card>

        <ListCard
          icon={<HeartPulse className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="Possible Causes"
          items={["Eating too quickly", "Hairball irritation", "Short-term stomach discomfort", "Environmental stress"]}
        />

        <ListCard
          icon={<ListChecks className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="Immediate Care Suggestions"
          items={[
            "Pause feeding for 4–6 hours and watch for more vomiting.",
            "Offer small amounts of water often. Avoid heavy drinking at once.",
            "Avoid treats, canned food, or sudden food changes for now.",
            "Watch energy, appetite, and stool.",
          ]}
        />

        <ListCard
          icon={<AlertTriangle className="h-[22px] w-[22px]" strokeWidth={1.8} />}
          title="When to Contact a Vet"
          tone="warning"
          items={[
            "Repeated vomiting in a short time",
            "Blood or coffee-colored material in vomit",
            "Clear lethargy or low responsiveness",
            "Continued refusal to drink or eat",
            "Abdominal pain, abnormal breathing, or weakness",
          ]}
        />

        <Card className="border-citrus-100 bg-citrus-50/70 px-[18px] py-[16px]">
          <h2 className="text-[16px] font-semibold text-ink-900">Disclaimer</h2>
          <p className="mt-[8px] text-[13px] leading-[1.7] text-ink-500">
            This is only for initial observation and urgent reference. It does not replace a veterinary diagnosis.
          </p>
        </Card>
      </div>

      <button
        type="button"
        onClick={() => onNavigate("trend")}
        className="mt-[18px] flex h-[52px] w-full items-center justify-center gap-[8px] rounded-full bg-citrus-500 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(255,122,0,0.24)]"
      >
        <Save className="h-[20px] w-[20px]" strokeWidth={1.8} />
        Save as Health Event
      </button>
    </div>
  );
}
