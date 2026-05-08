import {
  CircleHelp,
  FlameKindling,
  HeartPulse,
  Leaf,
  Link,
  Moon,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Thermometer,
  Waves,
  Zap,
} from "lucide-react";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

function Toggle() {
  return (
    <div className="flex h-[28px] w-[54px] items-center justify-end rounded-full bg-citrus-500 p-[3px]">
      <span className="h-[22px] w-[22px] rounded-full bg-white shadow-sm" />
    </div>
  );
}

function Slider({ labels, position = "62%" }: { labels: [string, string, string?]; position?: string }) {
  return (
    <div className="w-full">
      <div className="range-track relative h-[3px] rounded-full">
        <span
          className="absolute top-1/2 h-[17px] w-[17px] -translate-y-1/2 rounded-full border-2 border-citrus-500 bg-white"
          style={{ left: position }}
        />
      </div>
      <div className="mt-[13px] flex justify-between text-[10px] font-normal text-ink-300">
        <span>{labels[0]}</span>
        {labels[2] && <span>{labels[1]}</span>}
        <span>{labels[2] ?? labels[1]}</span>
      </div>
    </div>
  );
}

function QuickCard({
  icon,
  title,
  time,
  detail,
}: {
  icon: React.ReactNode;
  title: string;
  time: string;
  detail: string;
}) {
  return (
    <div className="flex h-[88px] min-w-0 flex-col items-center justify-center rounded-[15px] bg-white/72 px-[7px] py-[12px] text-center shadow-[0_8px_24px_rgba(214,184,145,0.10)]">
      <div className="mb-[9px] flex min-w-0 items-center justify-center gap-[5px]">
        <span className="shrink-0 text-citrus-500">{icon}</span>
        <h3 className="whitespace-nowrap text-[12px] font-semibold text-ink-900">{title}</h3>
      </div>
      <p className="text-[11px] font-medium leading-none text-citrus-500">{time}</p>
      <p className="mt-[8px] whitespace-nowrap text-[9px] font-normal leading-none text-ink-500">{detail}</p>
    </div>
  );
}

function ControlCard({
  icon,
  title,
  children,
  slider,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  slider: React.ReactNode;
}) {
  return (
    <div className="rounded-[19px] border border-[#f3e8da] bg-white/58 px-[18px] py-[19px]">
      <div className="flex items-start gap-[15px]">
        <IconBubble className="h-[40px] w-[40px]">{icon}</IconBubble>
        <div className="flex-1">
          <div className="flex items-start justify-between gap-[16px]">
            <div>
              <h3 className="text-[16px] font-semibold text-ink-900">{title}</h3>
              {children}
            </div>
            <Toggle />
          </div>
          <p className="mt-[18px] max-w-[230px] text-[12px] font-normal leading-[1.55] text-ink-500">
            {title === "Gentle Heating"
              ? "Provides steady, gentle warmth."
              : "Helps create a familiar, calming scent."}
          </p>
          <div className="mt-[18px] pb-[2px] pl-[2px] pr-[6px]">
            {slider}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SoothingControl() {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center justify-between">
        <h1 className="text-[28px] font-semibold text-ink-900">Comfort Control</h1>
        <CircleHelp className="h-[24px] w-[24px] text-ink-900" strokeWidth={1.9} />
      </header>

      <Card className="relative mt-[20px] min-h-[148px] overflow-hidden px-[20px] py-[20px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble>
            <ShieldCheck className="h-[22px] w-[22px]" strokeWidth={1.8} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Current Recommendation</h2>
        </div>
        <p className="relative z-10 mt-[20px] max-w-[176px] text-[22px] font-medium leading-[1.35] text-[#7FA36B]">
          Calm
        </p>
        <p className="relative z-10 mt-[8px] max-w-[178px] text-[13px] leading-[1.6] text-ink-500">
          No soothing is needed now. Keep the device on standby.
        </p>
        <button
          type="button"
          className="relative z-10 mt-[16px] h-[34px] rounded-full border border-citrus-500 px-[18px] text-[13px] font-medium text-citrus-500"
        >
          Standby
        </button>
        <BangBangCatImage variant="card" className="absolute bottom-[6px] right-[6px] h-[145px] w-[145px]" />
      </Card>

      <Card className="mt-[14px] px-[12px] py-[14px]">
        <div className="flex items-center gap-[8px]">
          <IconBubble className="h-[28px] w-[28px]">
            <Zap className="h-[14px] w-[14px]" strokeWidth={1.9} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Quick Comfort</h2>
        </div>
        <div className="mt-[14px] grid grid-cols-[repeat(3,minmax(0,1fr))] gap-[10px]">
          <QuickCard
            icon={<Leaf className="h-[16px] w-[16px]" strokeWidth={1.8} />}
            title="Gentle"
            time="10–15 min"
            detail="For mild stress"
          />
          <QuickCard
            icon={<Waves className="h-[16px] w-[16px]" strokeWidth={1.8} />}
            title="Soothing"
            time="20–30 min"
            detail="For tension"
          />
          <QuickCard
            icon={<Moon className="h-[16px] w-[16px]" strokeWidth={1.8} />}
            title="Night"
            time="Sleep time"
            detail="Quiet and gentle"
          />
        </div>
      </Card>

      <Card className="mt-[14px] px-[12px] py-[17px]">
        <div className="mb-[14px] flex items-center gap-[10px] px-[4px]">
          <IconBubble className="h-[34px] w-[34px]">
            <SlidersHorizontal className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Feature Controls</h2>
        </div>
        <div className="space-y-[10px]">
          <ControlCard
            icon={<Thermometer className="h-[24px] w-[24px]" strokeWidth={1.8} />}
            title="Gentle Heating"
            slider={<Slider labels={["28°C", "36°C"]} position="58%" />}
          >
            <p className="mt-[8px] text-[12px] font-normal leading-[1.45] text-ink-500">
              Current temp: <span className="text-[13px] font-medium text-citrus-500">30°C</span>
            </p>
            <p className="mt-[7px] flex items-center gap-[6px] text-[12px] font-normal leading-[1.45] text-ink-500">
              <span className="h-[7px] w-[7px] rounded-full bg-green-500" />
              Within safe range
            </p>
          </ControlCard>
          <ControlCard
            icon={<FlameKindling className="h-[24px] w-[24px]" strokeWidth={1.8} />}
            title="Pheromone Release"
            slider={<Slider labels={["Low", "Med", "High"]} position="49%" />}
          >
            <p className="mt-[8px] text-[12px] font-normal leading-[1.45] text-ink-500">
              Release level: <span className="text-[13px] font-medium text-citrus-500">Medium</span>
            </p>
            <p className="mt-[7px] text-[12px] font-normal leading-[1.45] text-ink-500">
              Refill left: <span className="text-[13px] font-medium text-citrus-500">6 days</span>
            </p>
          </ControlCard>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[19px]">
        <div className="flex items-start gap-[10px]">
          <IconBubble className="h-[34px] w-[34px]">
            <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <div className="flex-1">
            <h2 className="whitespace-nowrap text-[16px] font-semibold text-ink-900">Auto Soothing Rules</h2>
            <p className="mt-[13px] text-[12px] leading-[1.75] text-ink-500">
              If stress persists
              <br />
              during work hours,
              <br />
              the owner is alerted
              <br />
              to try gentle soothing.
            </p>
            <p className="mt-[6px] text-[13px] text-ink-500">
              Status: <span className="font-medium text-green-600">On</span>
            </p>
          </div>
          <button className="mt-[36px] flex h-[34px] min-w-[96px] items-center justify-center gap-[6px] whitespace-nowrap rounded-full border border-citrus-500 px-[14px] text-[13px] font-medium text-citrus-500">
            View Rules
          </button>
        </div>
      </Card>

      <Card className="mt-[14px] px-[18px] py-[18px]">
        <div className="flex items-center gap-[10px]">
          <IconBubble className="h-[34px] w-[34px]">
            <ShieldCheck className="h-[18px] w-[18px]" strokeWidth={1.9} />
          </IconBubble>
          <h2 className="text-[18px] font-semibold text-ink-900">Safety Status</h2>
        </div>
        <div className="mt-[14px] grid grid-cols-2 gap-[12px]">
          <div className="soft-card flex items-center gap-[12px] rounded-[18px] px-[16px] py-[16px]">
            <IconBubble>
              <Thermometer className="h-[24px] w-[24px]" strokeWidth={1.8} />
            </IconBubble>
            <div>
              <p className="text-[12px] text-ink-900">Device Temp</p>
              <p className="mt-[3px] text-[20px] font-medium text-citrus-500">38°C</p>
              <p className="mt-[2px] flex items-center gap-[5px] whitespace-nowrap text-[10px] text-ink-500">
                <span className="h-[6px] w-[6px] rounded-full bg-green-500" />
                Safe range
              </p>
            </div>
          </div>
          <div className="soft-card flex items-center gap-[12px] rounded-[18px] px-[16px] py-[16px]">
            <IconBubble>
              <Link className="h-[24px] w-[24px]" strokeWidth={1.8} />
            </IconBubble>
            <div>
              <p className="text-[12px] text-ink-900">Connection</p>
              <p className="mt-[3px] text-[20px] font-medium text-citrus-500">Normal</p>
              <p className="mt-[2px] flex items-center gap-[5px] text-[10px] text-ink-500">
                <span className="h-[6px] w-[6px] rounded-full bg-green-500" />
                Stable
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
