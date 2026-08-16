import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className={cn("border-church-gold-400/30 h-9 w-9 shrink-0 rounded-lg border", "bg-light-200 dark:bg-dark-300", "focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0", className)} aria-hidden disabled>
        <Sun className="h-5 w-5 opacity-0" />
      </Button>
    );
  }

  const themes = [
    { id: "light", icon: Sun, label: "Light" },
    { id: "dark", icon: Moon, label: "Dark" },
    { id: "system", icon: Monitor, label: "System" },
  ] as const;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Toggle theme" className={cn("relative h-9 w-9 shrink-0 cursor-pointer rounded-lg border", "border-church-gold-400/30", "bg-background", "text-text dark:text-light", "hover:bg-background/30", "focus-visible:shadow-none focus-visible:ring-0 focus-visible:ring-offset-0", className)}>
          <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute inset-0 m-auto h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className={cn("mt-2.5 flex min-w-40 flex-col gap-1 rounded-lg border", "border-church-gold-400/25", "bg-background", "shadow-soft", "outline-none focus-visible:shadow-none focus-visible:ring-0")}>
        {themes.map(({id, icon: Icon, label}) => (
          <DropdownMenuItem key={id} onClick={() => setTheme(id)} className={cn("cursor-pointer gap-2 rounded-md", "text-foreground/40", "hover:bg-foreground/30", "focus:bg-foreground/10", "focus-visible:shadow-none focus-visible:ring-0", theme === id && "bg-church-gold-50 dark:bg-church-gold-900 text-church-gold-500 dark:text-church-gold-300")}>
            <Icon className="h-4 w-4" />
            {label}
            {theme === id && <span className="text-church-gold-400 ml-auto text-xs">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
