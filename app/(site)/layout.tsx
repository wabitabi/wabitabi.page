import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-paper font-serif-jp text-ink">
      <SiteHeader />
      <main className="min-h-[60vh]">{children}</main>
      <SiteFooter />
    </div>
  );
}
