import Logo from "@/components/logo";
import Banner from "@/components/banner";
import { Button } from "@/components/ui/button";
import { InputField } from "@/components/ui/input-field";
import { QuantityInput } from "@/components/ui/quantity-input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Radio } from "@/components/ui/radio";
import { Slider } from "@/components/ui/slider";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SearchOverlay } from "@/components/search-overlay";
import { Pagination } from "@/components/ui/pagination";
import ArrowTopRight from "@/components/icons/arrow-top-right";
import VariantSelectorDemo from "@/components/variant-selector-demo";
import Header from "@/components/header";
import NavMegaMenu from "@/components/nav-mega-menu";
import Footer from "@/components/footer";
import PaymentIcons from "@/components/payment-icons";
import {
  Hamburger,
  Plus,
  Minus,
  Close,
  Check,
  Delete,
  Replay,
  Search,
  Edit,
  ArrowTopLeft,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  StarFull,
  StarHalf,
  StarEmpty,
  Verified,
  VerifiedOutline,
  ThumbUp,
  ThumbDown,
  Download,
  Upload,
  LocationOn,
  LocationOutline,
  Eye,
  EyeOff,
  Bag,
  Storefront,
  Truck,
  Gift,
  CheckCircle,
  Mail,
  Phone,
} from "@/components/icons";

/* ─── Section wrapper ─── */
function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={className}>
      <div className="border-b border-black px-6 py-4 lg:px-10">
        <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
          {title}
        </p>
      </div>
      <div className="px-6 py-10 lg:px-10 lg:py-14">{children}</div>
    </section>
  );
}

/* ─── Color swatch ─── */
function Swatch({
  name,
  cssVar,
  className,
}: {
  name: string;
  cssVar: string;
  className?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div
        className={`h-16 w-full rounded border border-black/10 ${className ?? ""}`}
        style={{ backgroundColor: `var(${cssVar})` }}
      />
      <p className="body-sm">{name}</p>
      <p className="text-[11px] text-[#787878] font-mono">{cssVar}</p>
    </div>
  );
}

/* ─── Page ─── */
export default function StyleGuidePage() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* ── Header ── */}
      <div className="border-b border-black px-6 py-10 lg:px-10 lg:py-16">
        <h2>Style Guide</h2>
        <p className="body-lg text-[#787878] mt-3">
          Track&nbsp;&amp;&nbsp;Tread Design System — all tokens, typography,
          colors, components &amp; patterns.
        </p>
      </div>

      {/* ══════════════════════════════════
          1. LOGO
      ══════════════════════════════════ */}
      <Section title="Logo">
        <div className="flex flex-col gap-12">
          {/* Black */}
          <div className="flex flex-col gap-4">
            <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
              Black variant
            </p>
            <div className="border border-black/10 rounded p-8 flex items-center justify-center bg-white">
              <Logo className="relative w-[400px] h-[48px] overflow-hidden" />
            </div>
          </div>

          {/* White */}
          <div className="flex flex-col gap-4">
            <p className="body-sm uppercase tracking-[0.2em] text-[#787878]">
              White variant
            </p>
            <div className="border border-black/10 rounded p-8 flex items-center justify-center bg-black">
              <Logo
                variant="white"
                className="relative w-[400px] h-[48px] overflow-hidden"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════
          2. TYPOGRAPHY
      ══════════════════════════════════ */}
      <Section title="Typography — Headings">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] w-20 shrink-0">H1</p>
            <h1 className="!text-[56px] lg:!text-[80px]">Heading One</h1>
            <p className="body-sm text-[#787878]">56px → 128px</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] w-20 shrink-0">H2</p>
            <h2>Heading Two</h2>
            <p className="body-sm text-[#787878]">48px → 96px</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] w-20 shrink-0">H3</p>
            <h3>Heading Three</h3>
            <p className="body-sm text-[#787878]">40px → 64px</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] w-20 shrink-0">H4</p>
            <h4>Heading Four</h4>
            <p className="body-sm text-[#787878]">32px → 48px</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6 border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] w-20 shrink-0">H5</p>
            <h5>Heading Five</h5>
            <p className="body-sm text-[#787878]">24px → 32px</p>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-6">
            <p className="body-sm text-[#787878] w-20 shrink-0">H6</p>
            <h6>Heading Six</h6>
            <p className="body-sm text-[#787878]">16px → 24px</p>
          </div>
        </div>
      </Section>

      <Section title="Typography — Body Text">
        <div className="flex flex-col gap-8">
          <div className="border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] mb-2">.body-xl — 24px</p>
            <p className="body-xl">
              The quick brown fox jumps over the lazy dog. Every great design
              begins with intention.
            </p>
          </div>
          <div className="border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] mb-2">.body-lg — 20px</p>
            <p className="body-lg">
              The quick brown fox jumps over the lazy dog. Every great design
              begins with intention.
            </p>
          </div>
          <div className="border-b border-black/10 pb-6">
            <p className="body-sm text-[#787878] mb-2">.body-md — 16px</p>
            <p className="body-md">
              The quick brown fox jumps over the lazy dog. Every great design
              begins with intention.
            </p>
          </div>
          <div>
            <p className="body-sm text-[#787878] mb-2">.body-sm — 12px</p>
            <p className="body-sm">
              The quick brown fox jumps over the lazy dog. Every great design
              begins with intention.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Typography — Font Details">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="border border-black/10 rounded p-5 flex flex-col gap-2">
            <p className="body-sm text-[#787878]">Family</p>
            <p className="body-lg">Inter Tight</p>
          </div>
          <div className="border border-black/10 rounded p-5 flex flex-col gap-2">
            <p className="body-sm text-[#787878]">Weight</p>
            <p className="body-lg">500 (Medium)</p>
          </div>
          <div className="border border-black/10 rounded p-5 flex flex-col gap-2">
            <p className="body-sm text-[#787878]">Line Height</p>
            <p className="body-lg">1.1</p>
          </div>
          <div className="border border-black/10 rounded p-5 flex flex-col gap-2">
            <p className="body-sm text-[#787878]">Letter Spacing</p>
            <p className="body-lg">-0.04em (headings)</p>
          </div>
        </div>
      </Section>

      {/* ══════════════════════════════════
          3. COLORS
      ══════════════════════════════════ */}
      <Section title="Colors — Brand">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <div className="flex flex-col gap-2">
            <div className="h-16 w-full rounded border border-black/10 bg-black" />
            <p className="body-sm">Black</p>
            <p className="text-[11px] text-[#787878] font-mono">#000000</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 w-full rounded border border-black/10 bg-white" />
            <p className="body-sm">White</p>
            <p className="text-[11px] text-[#787878] font-mono">#FFFFFF</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 w-full rounded border border-black/10 bg-[#c5fa1f]" />
            <p className="body-sm">Electric Green</p>
            <p className="text-[11px] text-[#787878] font-mono">#C5FA1F</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 w-full rounded border border-black/10 bg-[#f2f2f2]" />
            <p className="body-sm">Gray 100</p>
            <p className="text-[11px] text-[#787878] font-mono">#F2F2F2</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-16 w-full rounded border border-black/10 bg-[#787878]" />
            <p className="body-sm">Gray 600</p>
            <p className="text-[11px] text-[#787878] font-mono">#787878</p>
          </div>
        </div>
      </Section>

      <Section title="Colors — Semantic (Light theme)">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          <Swatch name="Background" cssVar="--background" />
          <Swatch name="Foreground" cssVar="--foreground" />
          <Swatch name="Primary" cssVar="--primary" />
          <Swatch
            name="Primary Foreground"
            cssVar="--primary-foreground"
          />
          <Swatch name="Secondary" cssVar="--secondary" />
          <Swatch name="Muted" cssVar="--muted" />
          <Swatch name="Muted Foreground" cssVar="--muted-foreground" />
          <Swatch name="Accent" cssVar="--accent" />
          <Swatch name="Destructive" cssVar="--destructive" />
          <Swatch name="Border" cssVar="--border" />
        </div>
      </Section>

      <Section title="Colors — Chart Palette">
        <div className="grid grid-cols-5 gap-6">
          <Swatch name="Chart 1" cssVar="--chart-1" />
          <Swatch name="Chart 2" cssVar="--chart-2" />
          <Swatch name="Chart 3" cssVar="--chart-3" />
          <Swatch name="Chart 4" cssVar="--chart-4" />
          <Swatch name="Chart 5" cssVar="--chart-5" />
        </div>
      </Section>

      {/* ══════════════════════════════════
          4. BUTTONS
      ══════════════════════════════════ */}
      <Section title="Buttons — White / Large">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default" size="default">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="default" size="default" className="bg-[#dcdcdc] border-black text-black inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] gap-2 px-8 py-6 text-[24px]">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="default" size="default" disabled>
              Button label <ArrowTopRight />
            </Button>
          </div>
          <p className="body-sm text-[#787878]">
            Default · Hover · Disabled — bg-[#f2f2f2], border-black, text-black, 24px text, px-8 py-6
          </p>
        </div>
      </Section>

      <Section title="Buttons — White / Small">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default" size="sm">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="default" size="sm" className="bg-[#dcdcdc] border-black text-black inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] gap-2 px-6 py-4 text-[20px]">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="default" size="sm" disabled>
              Button label <ArrowTopRight />
            </Button>
          </div>
          <p className="body-sm text-[#787878]">
            Default · Hover · Disabled — 20px text, px-6 py-4
          </p>
        </div>
      </Section>

      <Section title="Buttons — Black / Large">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="dark" size="default">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="dark" size="default" className="bg-[#5a5a5a] border-[#f2f2f2] text-white inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] gap-2 px-8 py-6 text-[24px]">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="dark" size="default" disabled>
              Button label <ArrowTopRight />
            </Button>
          </div>
          <p className="body-sm text-[#787878]">
            Default · Hover · Disabled — bg-black, border-[#f2f2f2], text-white, 24px text
          </p>
        </div>
      </Section>

      <Section title="Buttons — Black / Small">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="dark" size="sm">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="dark" size="sm" className="bg-[#5a5a5a] border-[#f2f2f2] text-white inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] gap-2 px-6 py-4 text-[20px]">
              Button label <ArrowTopRight />
            </Button>
            <Button variant="dark" size="sm" disabled>
              Button label <ArrowTopRight />
            </Button>
          </div>
          <p className="body-sm text-[#787878]">
            Default · Hover · Disabled — 20px text, px-6 py-4
          </p>
        </div>
      </Section>

      <Section title="Buttons — Icon Only">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            {/* White Large */}
            <Button variant="default" size="icon">
              <ArrowTopRight />
            </Button>
            <Button variant="default" size="icon" className="bg-[#dcdcdc] border-black inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] p-6">
              <ArrowTopRight />
            </Button>
            <Button variant="default" size="icon" disabled>
              <ArrowTopRight />
            </Button>
            {/* White Small */}
            <Button variant="default" size="icon-sm">
              <ArrowTopRight />
            </Button>
            <Button variant="default" size="icon-sm" className="bg-[#dcdcdc] border-black inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] p-4">
              <ArrowTopRight />
            </Button>
            <Button variant="default" size="icon-sm" disabled>
              <ArrowTopRight />
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            {/* Black Large */}
            <Button variant="dark" size="icon">
              <ArrowTopRight />
            </Button>
            <Button variant="dark" size="icon" className="bg-[#5a5a5a] border-[#f2f2f2] text-white inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] p-6">
              <ArrowTopRight />
            </Button>
            <Button variant="dark" size="icon" disabled>
              <ArrowTopRight />
            </Button>
            {/* Black Small */}
            <Button variant="dark" size="icon-sm">
              <ArrowTopRight />
            </Button>
            <Button variant="dark" size="icon-sm" className="bg-[#5a5a5a] border-[#f2f2f2] text-white inline-flex shrink-0 items-center justify-center border border-solid font-medium whitespace-nowrap leading-[1.1] p-4">
              <ArrowTopRight />
            </Button>
            <Button variant="dark" size="icon-sm" disabled>
              <ArrowTopRight />
            </Button>
          </div>
          <p className="body-sm text-[#787878]">
            White &amp; Black — Large (p-6, 26px icon) &amp; Small (p-4, 22px icon) — Default · Hover · Disabled
          </p>
        </div>
      </Section>

      <Section title="Buttons — Player">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="default" size="icon-sm">
              <Play className="size-[22px]" />
            </Button>
            <Button variant="default" size="icon-sm">
              <Pause className="size-[22px]" />
            </Button>
          </div>
          <p className="body-sm text-[#787878]">
            Player buttons — Play &amp; Pause icons on White icon-sm variant
          </p>
        </div>
      </Section>

      <Section title="Buttons — All Variants">
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default">Default</Button>
          <Button variant="dark">Dark</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </Section>

      <Section title="Buttons — All Sizes">
        <div className="flex flex-wrap items-end gap-4">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      {/* ══════════════════════════════════
          4b. INPUT FIELDS
      ══════════════════════════════════ */}
      <Section title="Input Fields — Black (Light Background)">
        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              icon
            />
            <InputField
              label="Label"
              defaultValue="typ"
              hint="Hint Text"
              icon
            />
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              icon
              className="flex flex-col gap-2 w-full [&_input]:bg-black [&_input]:text-white [&_div]:bg-black"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              icon
              disabled
            />
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              icon
              error
            />
          </div>
          <p className="body-sm text-[#787878]">
            Default · Typing · Filled · Disabled · Error — border-black, 20px text, p-4
          </p>
        </div>
      </Section>

      <Section title="Input Fields — White (Dark Background)">
        <div className="bg-black rounded p-8 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              color="white"
              icon
            />
            <InputField
              label="Label"
              defaultValue="typ"
              hint="Hint Text"
              color="white"
              icon
            />
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              color="white"
              icon
              disabled
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              color="white"
              icon
            />
            <InputField
              label="Label"
              placeholder="Placeholder"
              hint="Hint Text"
              color="white"
              icon
              error
            />
          </div>
        </div>
        <p className="body-sm text-[#787878] mt-4">
          White variant on dark background — border-white, white text, 20px
        </p>
      </Section>

      <Section title="Quantity Input">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-8">
            <QuantityInput defaultValue={0} />
            <QuantityInput defaultValue={5} />
            <QuantityInput defaultValue={12} />
          </div>
          <p className="body-sm text-[#787878]">
            Minus · Value (2-digit padded) · Plus — 18px icons, 16px text, interactive
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════
          4c. BADGES
      ══════════════════════════════════ */}
      <Section title="Badges">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-4">
            <Badge color="white">Label</Badge>
            <Badge color="black">Label</Badge>
            <Badge color="red">Label</Badge>
            <Badge color="purple">Label</Badge>
            <Badge color="green">Label</Badge>
          </div>
          <p className="body-sm text-[#787878]">
            White · Black · Red (#E01715) · Purple (#623CEA) · Green (#C5FA1F) — 16px text, px-2 py-1
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════
          4d. CHECKBOXES & RADIOS
      ══════════════════════════════════ */}
      <Section title="Checkboxes">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-10">
            <Checkbox label="Checkbox Label" />
            <Checkbox label="Checkbox Label" disabled />
          </div>
          <div className="flex flex-wrap items-center gap-10">
            <Checkbox label="Checkbox Label" defaultChecked />
            <Checkbox label="Checkbox Label" defaultChecked disabled />
          </div>
          <p className="body-sm text-[#787878]">
            Unchecked · Disabled — Checked · Checked Disabled — 20px box, 16px label, hover darkens bg
          </p>
        </div>
      </Section>

      <Section title="Radio Buttons">
        <div className="flex flex-col gap-8">
          <div className="flex flex-wrap items-center gap-10">
            <Radio label="Radiobutton Label" name="demo-unchecked" />
            <Radio label="Radiobutton Label" name="demo-disabled-unchecked" disabled />
          </div>
          <div className="flex flex-wrap items-center gap-10">
            <Radio label="Radiobutton Label" name="demo-checked" defaultChecked />
            <Radio label="Radiobutton Label" name="demo-disabled-checked" defaultChecked disabled />
          </div>
          <p className="body-sm text-[#787878]">
            Unchecked · Disabled — Checked · Checked Disabled — 20px circle, 5px inner border when checked
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════
          4e. SLIDERS
      ══════════════════════════════════ */}
      <Section title="Sliders">
        <div className="flex flex-col gap-8 max-w-[500px]">
          <Slider label="Slider Label" defaultValue={0} />
          <Slider label="Slider Label" defaultValue={25} />
          <Slider label="Slider Label" defaultValue={50} />
          <Slider label="Slider Label" defaultValue={75} />
          <Slider label="Slider Label" defaultValue={100} />
        </div>
        <p className="body-sm text-[#787878] mt-6">
          Interactive — drag or use arrow keys. 6px track, bg-[#dcdcdc] background, bg-black fill, 16px label
        </p>
      </Section>

      {/* ══════════════════════════════════
          4f. BREADCRUMBS
      ══════════════════════════════════ */}
      <Section title="Breadcrumbs">
        <div className="flex flex-col gap-6">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Category", href: "/" },
              { label: "Sub-Category", href: "/" },
              { label: "Current Page" },
            ]}
          />
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Products" },
            ]}
          />
          <p className="body-sm text-[#787878]">
            ChevronRight separator (18px) · 16px labels · 8px gap · last item is plain text, others are links
          </p>
        </div>
      </Section>

      {/* ══════════════════════════════════
          4g. SEARCH OVERLAY
      ══════════════════════════════════ */}
      <Section title="Search — Default" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Empty state — search icon (32px), text input (20px), close button
          </p>
          <SearchOverlay />
        </div>
      </Section>

      <Section title="Search — With Results" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Product grid with images, color variants, prices, sale badges &amp; &ldquo;View all results&rdquo;
          </p>
          <SearchOverlay
            products={[
              {
                name: "Nimbus Glide Icecore",
                price: "$529.99",
                image: "/images/products/nimbus-glide.png",
                variants: [
                  { color: "#c3c6c5", selected: true },
                  { color: "#e1e4e3" },
                ],
              },
              {
                name: "Carbon Pulse Blackout",
                price: "$343.99",
                compareAtPrice: "$529.99",
                image: "/images/products/carbon-pulse.png",
                badge: "-20%",
                variants: [
                  { color: "#3c3c3c", selected: true },
                  { color: "#bdc7d1" },
                  { color: "#f9eb3d" },
                  { color: "#f3efe9" },
                ],
              },
              {
                name: "Voltstorm Radiance",
                price: "$529.99",
                image: "/images/products/voltstorm.png",
                variants: [
                  { color: "#dbd5d0", selected: true },
                  { color: "#f92131" },
                  { color: "#f9eb3d" },
                ],
              },
              {
                name: "Lunar Flow Hyperlime",
                price: "$529.99",
                image: "/images/products/lunar-flow.png",
                variants: [
                  { color: "#f9eb3d", selected: true },
                  { color: "#f92131" },
                ],
              },
            ]}
          />
        </div>
      </Section>

      <Section title="Search — No Results" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Error state with helpful message
          </p>
          <SearchOverlay products={[]} />
        </div>
      </Section>

      {/* ══════════════════════════════════
          4h. PAGINATION
      ══════════════════════════════════ */}
      <Section title="Pagination">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878]">
            Arrow navigation, numbered pages, active page in purple (#623CEA), 42px items, 24px text
          </p>
          <Pagination totalPages={5} currentPage={3} />
          <Pagination totalPages={8} currentPage={1} />
          <Pagination totalPages={3} currentPage={3} />
        </div>
      </Section>

      {/* ══════════════════════════════════
          5. ICONS
      ══════════════════════════════════ */}
      <Section title="Icons — Sizes">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { size: "size-4", label: "16px" },
            { size: "size-[22px]", label: "22px" },
            { size: "size-8", label: "32px" },
            { size: "size-12", label: "48px" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center">
                <ArrowTopRight className={s.size} />
              </div>
              <p className="body-sm text-[#787878]">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="body-sm text-[#787878] mt-6">
          All icons use currentColor and are fully scalable via className
        </p>
      </Section>

      <Section title="Icons — Arrows">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <ArrowUp className="size-6" />, name: "ArrowUp" },
            { icon: <ArrowDown className="size-6" />, name: "ArrowDown" },
            { icon: <ArrowLeft className="size-6" />, name: "ArrowLeft" },
            { icon: <ArrowRight className="size-6" />, name: "ArrowRight" },
            { icon: <ArrowTopLeft className="size-6" />, name: "ArrowTopLeft" },
            { icon: <ArrowTopRight className="size-6" />, name: "ArrowTopRight" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Chevrons">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <ChevronUp className="size-6" />, name: "ChevronUp" },
            { icon: <ChevronDown className="size-6" />, name: "ChevronDown" },
            { icon: <ChevronLeft className="size-6" />, name: "ChevronLeft" },
            { icon: <ChevronRight className="size-6" />, name: "ChevronRight" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Player">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <Play className="size-6" />, name: "Play" },
            { icon: <Pause className="size-6" />, name: "Pause" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Stars & Ratings">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <StarFull className="size-6" />, name: "StarFull" },
            { icon: <StarHalf className="size-6" />, name: "StarHalf" },
            { icon: <StarEmpty className="size-6" />, name: "StarEmpty" },
            { icon: <Verified className="size-6" />, name: "Verified" },
            { icon: <VerifiedOutline className="size-6" />, name: "VerifiedOutline" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Feedback">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <ThumbUp className="size-6" />, name: "ThumbUp" },
            { icon: <ThumbDown className="size-6" />, name: "ThumbDown" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Files">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <Download className="size-6" />, name: "Download" },
            { icon: <Upload className="size-6" />, name: "Upload" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Location & Visibility">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <LocationOutline className="size-6" />, name: "LocationOutline" },
            { icon: <LocationOn className="size-6" />, name: "LocationOn" },
            { icon: <Eye className="size-6" />, name: "Eye" },
            { icon: <EyeOff className="size-6" />, name: "EyeOff" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Actions">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <Hamburger className="size-6" />, name: "Hamburger" },
            { icon: <Close className="size-6" />, name: "Close" },
            { icon: <Check className="size-6" />, name: "Check" },
            { icon: <Delete className="size-6" />, name: "Delete" },
            { icon: <Replay className="size-6" />, name: "Replay" },
            { icon: <Plus className="size-6" />, name: "Plus" },
            { icon: <Minus className="size-6" />, name: "Minus" },
            { icon: <Search className="size-6" />, name: "Search" },
            { icon: <Edit className="size-6" />, name: "Edit" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Commerce">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <Bag className="size-6" />, name: "Bag" },
            { icon: <Storefront className="size-6" />, name: "Storefront" },
            { icon: <Truck className="size-6" />, name: "Truck" },
            { icon: <Gift className="size-6" />, name: "Gift" },
            { icon: <CheckCircle className="size-6" />, name: "CheckCircle" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Icons — Communication">
        <div className="flex flex-wrap items-end gap-8">
          {[
            { icon: <Mail className="size-6" />, name: "Mail" },
            { icon: <Phone className="size-6" />, name: "Phone" },
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center gap-3">
              <div className="border border-black/10 rounded p-4 flex items-center justify-center size-14">
                {item.icon}
              </div>
              <p className="body-sm text-[#787878]">{item.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ══════════════════════════════════
          6. BANNERS
      ══════════════════════════════════ */}
      <Section title="Banners — Marquee" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Infinite scrolling announcement bar — scales text at 1024px
            breakpoint
          </p>
          <Banner variant="marquee" />
        </div>
      </Section>

      <Section title="Banners — Email Signup Form" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Newsletter subscription — stacks vertically on mobile, horizontal on
            desktop
          </p>
          <Banner variant="form" />
        </div>
      </Section>

      {/* ══════════════════════════════════
          7. VARIANT SELECTORS
      ══════════════════════════════════ */}
      <Section title="Variant Selectors">
        <VariantSelectorDemo />
      </Section>

      {/* ══════════════════════════════════
          8. GLOBAL NAVIGATION
      ══════════════════════════════════ */}
      <Section title="Header — Desktop & Mobile" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Desktop navbar (1024px+) and mobile navbar with hamburger menu
          </p>
          <Header />
        </div>
      </Section>

      <Section title="Navigation Mega Menu — Desktop" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            4-column mega menu: Shop links, Category links, 2 promo cards with images (visible on desktop only)
          </p>
          <NavMegaMenu />
        </div>
      </Section>

      <Section title="Footer" className="!px-0">
        <div className="flex flex-col gap-6">
          <p className="body-sm text-[#787878] px-6 lg:px-10">
            Full footer with newsletter banner, link columns, payment icons &amp; large logo
          </p>
          <Footer />
        </div>
      </Section>

      <Section title="Payment Icons">
        <div className="flex flex-col gap-4">
          <p className="body-sm text-[#787878]">
            Visa, Mastercard, Amex, Discover, Apple Pay, PayPal, Shop Pay
          </p>
          <PaymentIcons />
        </div>
      </Section>


      {/* ══════════════════════════════════
          9. SPACING & RADIUS
      ══════════════════════════════════ */}
      <Section title="Spacing Scale">
        <div className="flex flex-wrap items-end gap-4">
          {[
            { name: "4px", size: "w-1 h-8" },
            { name: "8px", size: "w-2 h-8" },
            { name: "12px", size: "w-3 h-8" },
            { name: "16px", size: "w-4 h-8" },
            { name: "24px", size: "w-6 h-8" },
            { name: "32px", size: "w-8 h-8" },
            { name: "48px", size: "w-12 h-8" },
            { name: "64px", size: "w-16 h-8" },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-2">
              <div className={`${s.size} bg-black rounded-sm`} />
              <p className="body-sm text-[#787878]">{s.name}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Border Radius">
        <div className="flex flex-wrap items-end gap-6">
          {[
            { name: "sm", cls: "rounded-sm" },
            { name: "md", cls: "rounded-md" },
            { name: "lg", cls: "rounded-lg" },
            { name: "xl", cls: "rounded-xl" },
            { name: "2xl", cls: "rounded-2xl" },
            { name: "full", cls: "rounded-full" },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div
                className={`size-16 border-2 border-black ${r.cls}`}
              />
              <p className="body-sm text-[#787878]">{r.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Footer ── */}
      <div className="border-t border-black px-6 py-8 lg:px-10">
        <p className="body-sm text-[#787878]">
          Track&nbsp;&amp;&nbsp;Tread — Style Guide ·
          Inter&nbsp;Tight&nbsp;Medium · Built with Next.js, Tailwind&nbsp;CSS &amp;
          shadcn/ui
        </p>
      </div>
    </div>
  );
}
