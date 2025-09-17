import React, { useRef, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

type Mega = { label: string; href: string };
type Group = { title?: string; items: Mega[] };
type MenuNode =
  | { label: string; href: string }
  | { label: string; groups?: Group[]; mega?: Mega[] };

function isLink(node: MenuNode): node is { label: string; href: string } {
  return !!(node as any).href && !(node as any).groups && !(node as any).mega;
}

function chunkInto<T>(arr: T[], n: number): T[][] {
  const size = Math.ceil(arr.length / n);
  return Array.from({ length: n }, (_, i) => arr.slice(i * size, (i + 1) * size));
}

function asGroups(node: Extract<MenuNode, { mega?: Mega[]; groups?: Group[] }>): Group[] {
  if (node.groups && node.groups.length) return node.groups;
  const items = node.mega ?? [];
  const cols = chunkInto(items, 3);
  return cols.map((col) => ({ title: undefined, items: col }));
}

const MENUS: MenuNode[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    groups: [
      {
        title: "Explore Services",
        items: [
          { label: "Digital", href: "/services/digital" },
          { label: "Tech", href: "/services/tech" },
          { label: "Data", href: "/services/data" },
          { label: "Creatives", href: "/services/creatives" },
          { label: "AI", href: "/services/ai" },
          { label: "Agile", href: "/services/agile" },
          { label: "Sustainability", href: "/services/sustainability" },
          { label: "Legal", href: "/services/legal" },
        ],
      },
      {
        title: "Work With Us",
        items: [
          { label: "Discovery Call", href: "/contact" },
          { label: "Projects", href: "/contact?type=project" },
          { label: "Dedicated Teams", href: "/contact?type=team" },
          { label: "Advisory", href: "/contact?type=advisory" },
        ],
      },
      {
        title: "More From Us",
        items: [
          { label: "Case Studies", href: "/insights/case-studies" },
          { label: "Whitepapers", href: "/insights/whitepapers" },
          { label: "Reports", href: "/insights/reports" },
          { label: "Events / Webinars", href: "/insights/events" },
        ],
      },
    ],
  },

 {
  label: "Insights",
  mega: [
    { label: "Blog", href: "/insights/blog" },
    { label: "Project Work", href: "/insights/project-work" }, // <- renamed from Case Studies
    { label: "Whitepapers", href: "/insights/whitepapers" },
    { label: "Reports", href: "/insights/reports" },
    { label: "Events / Webinars", href: "/insights/events" },
  ],
},



  {
    label: "About",
    mega: [
      { label: "About Us", href: "/about" },
      { label: "Team", href: "/team" },
      { label: "Leadership", href: "/company/leadership" },
      { label: "Clients & Partners", href: "/company/clients-partners" },
      { label: "Careers", href: "/career" },
      { label: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Programs",
    mega: [
      { label: "Internships & Training", href: "/programs/internships-training" },
      { label: "The ProEducator (Study Abroad)", href: "/programs/the-proeducator" },
      { label: "Digital for Humanity CIC", href: "/programs/digital-for-humanity" },
      { label: "BIHAAN Initiative", href: "/programs/bihaan" },
    ],
  },
];

const Header: React.FC = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);

  const container = "mx-auto max-w-[120rem] px-6 lg:px-10";

  const closeTimer = useRef<number | null>(null);
  const openMenu = (label: string) => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setOpenMega(label);
  };
  const scheduleClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setOpenMega(null), 140);
  };
  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <nav className={container} aria-label="Main">
        {/* Desktop: grid with column gap so items don't touch */}
        <div className="hidden lg:grid grid-cols-[auto_1fr_auto] gap-x-8 items-center h-16">
          {/* Left: Logo */}
          <a href="/" className="flex items-center min-w-0">
            <div>
             <span className="font-extrabold ">PrashantKumarLTD</span>
            </div>
          </a>

          {/* Center: Nav */}
          <div className="flex justify-center items-center gap-8 min-w-0">
            {MENUS.map((m) =>
              isLink(m) ? (
                <a
                  key={m.label}
                  href={m.href}
                  className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-tight whitespace-nowrap"
                >
                  {m.label}
                </a>
              ) : (
                <div
                  key={m.label}
                  className="relative"
                  onMouseEnter={() => openMenu(m.label)}
                  onMouseLeave={scheduleClose}
                >
                  <button
                    className="text-sm font-medium text-gray-700 hover:text-black transition-colors tracking-tight whitespace-nowrap"
                    aria-haspopup="true"
                    aria-expanded={openMega === m.label}
                    onClick={() =>
                      openMega === m.label ? setOpenMega(null) : openMenu(m.label)
                    }
                  >
                    {m.label}
                  </button>

                  {/* Mega menu */}
                  {openMega === m.label && (
                    <div
                      className="fixed inset-x-0 top-16 z-[60]"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="w-full border-t border-gray-200 bg-white shadow-lg">
                        <div className={container}>
                          <div className="py-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {asGroups(m).map((g, idx) => (
                                <div key={`${m.label}-${idx}`}>
                                  {g.title && (
                                    <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-4">
                                      {g.title}
                                    </div>
                                  )}
                                  <ul className="space-y-2">
                                    {g.items.map((it) => (
                                      <li key={it.label}>
                                        <a
                                          href={it.href}
                                          className={`block px-3 py-2 text-sm rounded-md transition ${
                                            idx === 0
                                              ? "text-gray-900 font-semibold hover:bg-gray-50"
                                              : "text-gray-700 hover:text-black hover:bg-gray-50"
                                          }`}
                                        >
                                          {it.label}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>

          {/* Right: CTA */}
          <div className="flex items-center gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold bg-black text-white hover:bg-gray-900 transition-colors whitespace-nowrap"
            >
              Let's Talk
            </a>
          </div>
        </div>

        {/* Mobile header row */}
        <div className="lg:hidden flex items-center justify-between h-16">
          <a href="/" className="flex items-center min-w-0">
            <div className="w-[120px] h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-md flex items-center justify-center text-white font-bold">
              LOGO
            </div>
          </a>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/447435773972?text=Hi%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
            <button
              aria-label="Toggle menu"
              aria-expanded={openMobile}
              onClick={() => setOpenMobile((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-100 transition-colors"
            >
              {openMobile ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            openMobile ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-gray-200">
            <ul className="divide-y divide-gray-100">
              {MENUS.map((m) =>
                isLink(m) ? (
                  <li key={m.label}>
                    <a
                      href={m.href}
                      onClick={() => setOpenMobile(false)}
                      className="block px-2 py-3 text-base font-medium text-gray-900 hover:text-black transition-colors"
                    >
                      {m.label}
                    </a>
                  </li>
                ) : (
                  <MobileGroup
                    key={m.label}
                    label={m.label}
                    groups={asGroups(m)}
                    onNavigate={() => setOpenMobile(false)}
                  />
                )
              )}
            </ul>

            <div className="mt-6 px-2">
              <a
                href="/contact"
                onClick={() => setOpenMobile(false)}
                className="block text-center rounded-full px-6 py-3 text-sm font-semibold bg-black text-white hover:bg-gray-900 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

const MobileGroup: React.FC<{
  label: string;
  groups: Group[];
  onNavigate: () => void;
}> = ({ label, groups, onNavigate }) => {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        className="w-full flex items-center justify-between px-2 py-3 text-base font-medium text-gray-900 hover:text-black transition-colors"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {label}
        <span className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-4 pr-2 pb-2 space-y-4">
          {groups.map((g, i) => (
            <div key={`${label}-m-${i}`}>
              {g.title && (
                <div className="text-xs uppercase tracking-wide text-gray-500 font-semibold mb-2">
                  {g.title}
                </div>
              )}
              <ul className="space-y-1">
                {g.items.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      onClick={onNavigate}
                      className="block pl-2 pr-1 py-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                    >
                      {c.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Header;
