import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Github, Menu, Moon, Star, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { SiteData } from "@/lib/const";

type navItem = {
  href: string;
  label: string;
};

export const navItems: navItem[] = [
  { href: `${SiteData.url}`, label: "Home" },
  { href: `${SiteData.url}/transcribe`, label: "Transcribe" },
  { href: `${SiteData.url}/caption-studio`, label: "Caption Studio" },
  { href: "https://voice.privro.com", label: "AI Voice" },
];

function BrandMark({ className }: { className?: string }) {
  return (
    <a
      href={SiteData.url}
      className={cn(
        "flex items-center gap-2 text-foreground no-underline",
        className,
      )}
    >
      <span
        className="size-2 shrink-0 rounded-full bg-brand"
        aria-hidden="true"
      />
      <span className="text-[15px] font-semibold tracking-tight">
        {SiteData.shortName}
      </span>
    </a>
  );
}

export default function SiteHeaderNav() {
  return (
    <header className="relative z-10 px-4 py-3 md:px-6">
      <div className="mx-auto flex max-w-screen-lg items-center gap-4">
        <BrandMark className="shrink-0" />
        <MainNav />
        <div className="ml-auto flex items-center gap-2">
          <GitHubButton />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function GitHubButton() {
  return (
    <a
      href={SiteData.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Star on GitHub"
      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-md border border-brand px-2.5 text-sm font-medium tracking-tight text-foreground no-underline transition-colors duration-150 hover:bg-accent"
    >
      <Github className="size-4" aria-hidden="true" />
      GitHub
      <Star className="size-3.5 fill-brand text-brand" aria-hidden="true" />
    </a>
  );
}

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      className="size-9 border-brand text-foreground hover:bg-accent"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}

function MainNav() {
  return (
    <nav
      aria-label="Main"
      className="hidden min-w-0 flex-1 items-center gap-0.5 md:flex"
    >
      {navItems.map(item => (
        <a
          key={item.href}
          href={item.href}
          className="rounded-md px-3 py-1.5 text-sm text-muted-foreground no-underline transition-colors duration-150 hover:text-foreground"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="size-6" strokeWidth={2} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="sr-only">Mobile Navigation</SheetTitle>
          <SheetDescription className="sr-only">
            {SiteData.siteName} Mobile Navigation Menu
          </SheetDescription>
        </SheetHeader>
        <div className="px-5 pt-8">
          <BrandMark />
        </div>
        <nav className="mt-8 flex flex-col space-y-1 px-5">
          {navItems.map(item => (
            <SheetClose asChild key={item.href}>
              <a
                href={item.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-muted-foreground no-underline transition-colors duration-150 hover:text-foreground"
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
