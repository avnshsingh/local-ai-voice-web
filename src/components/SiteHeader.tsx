import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
import { Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

type navItem = {
  href: string;
  label: string;
};

const BASEURL = "https://privideo.xyz";

export const navItems: navItem[] = [
  { href: `${BASEURL}`, label: "Home" },
  { href: `${BASEURL}/about-us`, label: "About Us" },
  // { href: "/blog", label: "Blog" },
  // { href: "/disclaimer", label: "Disclaimer" },
  { href: `${BASEURL}/transcribe`, label: "Transcribe" },
  { href: `${BASEURL}/sub-editor`, label: "Sub Editor" },
];

export default function SiteHeaderNav() {
  return (
    <header className="container mx-auto py-2 z-10">
      <MainNav />
      <MobileNav />
    </header>
  );
}

function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}

// Non-mobile (like tablet, desktop) navigation menu
function MainNav() {
  const pathname = "usePathname();";

  return (
    <NavigationMenu className="hidden md:flex max-w-max-[1500px] mx-auto">
      <NavigationMenuList>
        {navItems.map(item => (
          <NavigationMenuItem key={item.href}>
            <a href={item.href}>
              <NavigationMenuLink
                className={cn(
                  navigationMenuTriggerStyle(),
                  pathname === item.href && "bg-accent text-accent-foreground"
                )}
              >
                {item.label}
              </NavigationMenuLink>
            </a>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <ThemeToggle />
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

// Mobile navigation menu
function MobileNav() {
  const pathname = "usePathname();";
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex items-center justify-start w-full">
          <Button variant="ghost" className="md:hidden" size="icon">
            <Menu size={36} strokeWidth={2} />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <h1 className="font-bold pl-2 md:hidden">PriVideo</h1>
        </div>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="hidden">
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>PriVideo Mobile Navigation Menu</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 px-5 mt-10">
          {navItems.map(item => (
            <SheetClose asChild key={item.href}>
              <a
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === item.href
                    ? "text-black dark:text-white"
                    : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </SheetClose>
          ))}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
