import {
  Bell,
  Bot,
  Box,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FlameKindling,
  HelpCircle,
  HeartPulse,
  Lock,
  Settings,
  ShieldCheck,
  Stethoscope,
  Waves,
} from "lucide-react";
import type { Page } from "../App";
import { BangBangCatImage } from "../components/BangBangCatImage";
import { Card, IconBubble } from "../components/Card";

type MoreInfoProps = {
  onNavigate: (page: Page) => void;
};

type RowProps = {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
  onClick?: () => void;
};

function SectionTitle({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="mt-[20px] flex items-center gap-[10px]">
      <IconBubble className="h-[36px] w-[36px]">{icon}</IconBubble>
      <h2 className="text-[18px] font-semibold text-ink-900">{title}</h2>
    </div>
  );
}

function Row({ icon, title, subtitle, onClick }: RowProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-[15px] border-b border-[#eee5da] px-[14px] py-[15px] text-left last:border-b-0"
    >
      <span className="text-citrus-500">{icon}</span>
      <span className="min-w-0 flex-1">
        <span className="block text-[16px] font-semibold text-ink-900">{title}</span>
        {subtitle && <span className="mt-[4px] block text-[12px] leading-[1.5] text-ink-500">{subtitle}</span>}
      </span>
      <ChevronRight className="h-[20px] w-[20px] shrink-0 text-ink-500" strokeWidth={1.9} />
    </button>
  );
}

export function MoreInfo({ onNavigate }: MoreInfoProps) {
  return (
    <div className="pt-[42px]">
      <header className="flex items-center gap-[16px]">
        <button
          type="button"
          onClick={() => onNavigate("home")}
          className="flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white shadow-card"
          aria-label="Back to home"
        >
          <ChevronLeft className="h-[25px] w-[25px] text-ink-900" strokeWidth={1.9} />
        </button>
        <h1 className="text-[22px] font-semibold text-ink-900">Pet and Device</h1>
      </header>

      <Card className="mt-[22px] flex items-center gap-[20px] px-[16px] py-[18px]">
        <BangBangCatImage variant="avatar" />
        <div className="min-w-0 flex-1">
          <h2 className="text-[24px] font-semibold text-ink-900">Bangbang</h2>
          <p className="mt-[5px] whitespace-nowrap text-[14px] text-ink-500">1y · M · 4.5 kg</p>
        </div>
        <button
          type="button"
          className="ml-[14px] flex shrink-0 items-center gap-[4px] text-[12px] font-medium text-citrus-500"
        >
          View Profile
          <ChevronRight className="h-[16px] w-[16px]" strokeWidth={2.1} />
        </button>
      </Card>

      <SectionTitle icon={<Box className="h-[21px] w-[21px]" strokeWidth={1.8} />} title="Devices and Supplies" />
      <Card className="mt-[10px] overflow-hidden">
        <Row
          icon={<HeartPulse className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="Smart Collar"
          subtitle="Connected · Battery 78%"
        />
        <Row
          icon={<FlameKindling className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="Soothing Device"
          subtitle="Connected · Battery 92%"
        />
        <Row
          icon={<Waves className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="Pheromone Refill"
          subtitle="6 days left"
        />
      </Card>

      <SectionTitle icon={<HeartPulse className="h-[21px] w-[21px]" strokeWidth={1.8} />} title="Health and Records" />
      <Card className="mt-[10px] overflow-hidden">
        <Row
          icon={<Bot className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="AI Health Assistant"
          subtitle="Upload photos for initial observation suggestions"
          onClick={() => onNavigate("aiUpload")}
        />
        <Row
          icon={<CalendarDays className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="Health Event Records"
          subtitle="View owner-logged vomiting, appetite, and other events"
        />
        <Row
          icon={<ClipboardList className="h-[31px] w-[31px]" strokeWidth={1.55} />}
          title="Vet Summary"
          subtitle="Organize events, photos, and status data for your vet"
          onClick={() => onNavigate("vetSummary")}
        />
      </Card>

      <SectionTitle icon={<Settings className="h-[21px] w-[21px]" strokeWidth={1.8} />} title="Settings and Privacy" />
      <Card className="mt-[10px] overflow-hidden">
        <Row icon={<Bell className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="Notification Settings" />
        <Row icon={<HeartPulse className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="Auto Soothing Rules" />
        <Row icon={<ShieldCheck className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="Safety Settings" />
        <Row icon={<Lock className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="Data and Privacy" />
        <Row icon={<HelpCircle className="h-[28px] w-[28px]" strokeWidth={1.55} />} title="Help and Support" />
      </Card>
    </div>
  );
}
