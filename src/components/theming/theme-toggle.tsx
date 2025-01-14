"use client";

import { Moon, Sun, Computer } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <ToggleGroup
      type="single"
      value={theme}
      onValueChange={(value) => setTheme(value)}
    >
      <ToggleGroupItem value="light" aria-label="Toggle bold">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle italic">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle strikethrough">
        <Computer className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
