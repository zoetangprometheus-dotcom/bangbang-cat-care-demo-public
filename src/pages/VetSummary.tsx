import { Camera, ChevronLeft, HeartPulse, Share2, Stethoscope, UserRound } from "lucide-react";
import type { Page } from "../App";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

type VetSummaryProps = {
  onNavigate: (page: Page) => void;
};

function DetailLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-[16px] border-b border-[#f0e5d8] py-[10px] last:border-b-0">
      <span className="text-[13px] text-ink-500">{label}</span>
      <span className="max-w-[220px] text-right text-[13px] font-medium leading-[1.6] text-ink-900">{value}</span>
    </div>
  );
}

function BulletList({ title, items }: { title: string; items: string[] }) {
  return (
    <Card className="px-[18px] py-[18px]">
      <h2 className="text-[18px] font-semibold text-ink-900">{title}</h2>
      <ul className="mt-[12px] space-y-[8px] text-[13px] leading-[1.65] text-ink-500">
        {items.map((item) => (
          <li key={item} className="flex gap-[8px]">
            <span className="mt-[8px] h-[6px] w-[6px] shrink-0 rounded-full bg-citrus-500" />
            {item}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function VetSummary({ onNavigate }: VetSummaryProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => onNavigate("more")}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="Back to pet and device"
        >
          <ChevronLeft className="h-[25px] w-[25px] text-ink-900" strokeWidth={1.9} />
        </button>
        <h1 className="text-[24px] font-semibold text-ink-900">Vet Summary</h1>
      </header>

      <Card className="mt-[22px] flex items-center gap-[16px] px-[16px] py-[16px]">
        <BangBangCatImage variant="avatar" />
        <div>
          <h2 className="text-[25px] font-semibold text-ink-900">Bangbang</h2>
          <p className="mt-[5px] text-[15px] text-ink-500">1 yr · Male · 4.5 kg</p>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <Stethoscope className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Event Information</h2>
        </div>
        <div className="mt-[12px]">
          <DetailLine label="Source" value="Owner note" />
          <DetailLine label="Event Type" value="Vomiting" />
          <DetailLine label="Time" value="2026.04.28 20:35" />
          <DetailLine label="Owner Note" value="Vomited once about 20 minutes after dinner" />
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <Camera className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Uploaded Photo</h2>
        </div>
        <div className="mt-[14px] flex h-[110px] items-center justify-center rounded-[20px] border border-dashed border-citrus-300 bg-[#fffaf3] text-center text-[13px] text-ink-500">
          <div>
            <Camera className="mx-auto h-[30px] w-[30px] text-citrus-500" strokeWidth={1.6} />
            <p className="mt-[8px]">Photo thumbnail placeholder</p>
          </div>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <HeartPulse className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Status Around Event</h2>
        </div>
        <div className="mt-[12px]">
          <DetailLine label="Heart Rate" value="126–138 bpm" />
          <DetailLine label="Activity" value="Slightly below usual" />
          <DetailLine label="Rest" value="Normal" />
          <DetailLine label="Soothing Device" value="Not started" />
        </div>
      </Card>

      <BulletList
        title="AI Suggestion Summary"
        items={["Pause feeding for 4–6 hours", "Offer small amounts of water often", "Watch for repeated vomiting", "Contact a vet if symptoms continue or worsen"]}
      />

      <BulletList title="Follow-Up Notes" items={["No repeated vomiting within 2 hours", "Energy level normal"]} />

      <button
        type="button"
        className="mt-[18px] flex h-[52px] w-full items-center justify-center gap-[8px] rounded-full bg-citrus-500 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(255,122,0,0.24)]"
      >
        <Share2 className="h-[20px] w-[20px]" strokeWidth={1.8} />
        Share with Vet
      </button>
    </div>
  );
}
