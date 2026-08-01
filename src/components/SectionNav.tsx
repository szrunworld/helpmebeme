import * as ScrollArea from "@radix-ui/react-scroll-area";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useEffect, useState } from "react";

const sections = [
  { id: "sec-why", number: "00", label: "产品理念", english: "Why" },
  { id: "sec-logo", number: "01", label: "品牌标识", english: "Identity" },
  { id: "sec-ds", number: "02", label: "设计系统", english: "System" },
  { id: "sec-wf", number: "03", label: "产品设计", english: "Product" },
  { id: "sec-gtm", number: "04", label: "市场验证", english: "GTM" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const isSectionId = (value: string): value is SectionId =>
  sections.some((section) => section.id === value);

const getSectionFromLocation = (): SectionId => {
  if (typeof window === "undefined") return "sec-why";

  const hash = window.location.hash.slice(1);
  return isSectionId(hash) ? hash : "sec-why";
};

function activateSection(id: SectionId, scrollToTop = false) {
  document.documentElement.dataset.docSection = id;
  document.querySelectorAll<HTMLElement>(".doc-section").forEach((section) => {
    const active = section.id === id;
    section.classList.toggle("active", active);
    section.setAttribute("aria-hidden", String(!active));
  });

  if (scrollToTop) {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

export default function SectionNav() {
  const [activeSection, setActiveSection] = useState<SectionId>(getSectionFromLocation);

  useEffect(() => {
    const syncFromLocation = () => {
      const hash = window.location.hash.slice(1);
      const nextSection = isSectionId(hash) ? hash : "sec-why";
      setActiveSection(nextSection);
      activateSection(nextSection);
    };

    syncFromLocation();
    window.addEventListener("hashchange", syncFromLocation);
    window.addEventListener("popstate", syncFromLocation);
    return () => {
      window.removeEventListener("hashchange", syncFromLocation);
      window.removeEventListener("popstate", syncFromLocation);
    };
  }, []);

  const handleSectionChange = (nextValue: string) => {
    if (!isSectionId(nextValue)) return;

    setActiveSection(nextValue);
    activateSection(nextValue, true);
    window.history.pushState(null, "", `#${nextValue}`);
  };

  return (
    <nav className="docs-nav-shell" aria-label="文档章节">
      <div className="docs-nav-frame">
        <ScrollArea.Root className="docs-nav-scroll-area">
          <ScrollArea.Viewport className="docs-nav-viewport">
            <ToggleGroup.Root
              type="single"
              value={activeSection}
              onValueChange={handleSectionChange}
              className="docs-nav-list"
              aria-label="选择文档章节"
            >
              {sections.map((section) => (
                <ToggleGroup.Item
                  key={section.id}
                  value={section.id}
                  className="docs-nav-item"
                  aria-label={`查看${section.label}章节`}
                >
                  <span className="docs-nav-number">{section.number}</span>
                  <span className="docs-nav-copy">
                    <strong>{section.label}</strong>
                    <small>{section.english}</small>
                  </span>
                </ToggleGroup.Item>
              ))}
            </ToggleGroup.Root>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar orientation="horizontal" className="docs-nav-scrollbar">
            <ScrollArea.Thumb className="docs-nav-thumb" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Root>
      </div>
    </nav>
  );
}
