import {
  Activity,
  Camera,
  ChevronLeft,
  HeartPulse,
  Moon,
  Sparkles,
  Upload,
} from "lucide-react";
import type { Page } from "../App";
import { Card, IconBubble } from "../components/Card";

type AICareUploadProps = {
  onNavigate: (page: Page) => void;
};

const abnormalTypes = ["Vomiting", "Appetite", "Stool Issue", "Low Energy", "Skin Issue", "Other"];

export function AICareUpload({ onNavigate }: AICareUploadProps) {
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
        <h1 className="text-[24px] font-semibold text-ink-900">AI Health Assistant</h1>
      </header>

      <Card className="mt-[22px] px-[18px] py-[20px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <Sparkles className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[20px] font-semibold text-ink-900">What happened to Bangbang?</h2>
        </div>

        <div className="mt-[20px]">
          <p className="mb-[10px] text-[13px] font-medium text-ink-500">Unusual Behavior</p>
          <div className="grid grid-cols-3 gap-[8px]">
            {abnormalTypes.map((type) => (
              <button
                key={type}
                type="button"
                className={`h-[36px] rounded-full border text-[13px] ${
                  type === "Vomiting"
                    ? "border-citrus-500 bg-citrus-50 font-medium text-citrus-500"
                    : "border-[#f0e5d7] bg-white/70 text-ink-500"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-[20px]">
          <p className="mb-[10px] text-[13px] font-medium text-ink-500">Upload Photo</p>
          <button
            type="button"
            className="flex h-[150px] w-full flex-col items-center justify-center rounded-[22px] border border-dashed border-citrus-300 bg-[#fffaf3] text-citrus-500"
          >
            <Camera className="h-[36px] w-[36px]" strokeWidth={1.5} />
            <span className="mt-[10px] text-[14px] font-medium">Tap to upload a photo</span>
            <span className="mt-[5px] text-[12px] text-ink-500">Vomit, stool, skin, or related photos</span>
          </button>
        </div>

        <div className="mt-[20px]">
          <p className="mb-[10px] text-[13px] font-medium text-ink-500">Description</p>
          <textarea
            className="h-[94px] w-full resize-none rounded-[18px] border border-[#f0e5d7] bg-white/74 px-[15px] py-[13px] text-[13px] leading-[1.6] text-ink-700 outline-none placeholder:text-ink-300"
            placeholder="Example: Vomited once about 20 minutes after dinner"
            defaultValue="Vomited once about 20 minutes after dinner"
          />
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <Activity className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Current Status Reference</h2>
        </div>
        <div className="mt-[16px] grid grid-cols-3 gap-[10px]">
          <div className="rounded-[18px] bg-white/68 p-[13px]">
            <HeartPulse className="h-[22px] w-[22px] text-citrus-500" strokeWidth={1.7} />
            <p className="mt-[10px] text-[12px] text-ink-500">Heart Rate</p>
            <p className="mt-[4px] text-[17px] font-semibold text-ink-900">138 bpm</p>
          </div>
          <div className="rounded-[18px] bg-white/68 p-[13px]">
            <Activity className="h-[22px] w-[22px] text-citrus-500" strokeWidth={1.7} />
            <p className="mt-[10px] text-[12px] text-ink-500">Activity</p>
            <p className="mt-[4px] text-[15px] font-semibold text-ink-900">Slightly Low</p>
          </div>
          <div className="rounded-[18px] bg-white/68 p-[13px]">
            <Moon className="h-[22px] w-[22px] text-citrus-500" strokeWidth={1.7} />
            <p className="mt-[10px] text-[12px] text-ink-500">Rest</p>
            <p className="mt-[4px] text-[17px] font-semibold text-ink-900">Normal</p>
          </div>
        </div>
      </Card>

      <button
        type="button"
        onClick={() => onNavigate("aiAnalysis")}
        className="mt-[18px] flex h-[52px] w-full items-center justify-center gap-[8px] rounded-full bg-citrus-500 text-[16px] font-semibold text-white shadow-[0_14px_28px_rgba(255,122,0,0.24)]"
      >
        <Upload className="h-[20px] w-[20px]" strokeWidth={1.8} />
        Start Analysis
      </button>
    </div>
  );
}
