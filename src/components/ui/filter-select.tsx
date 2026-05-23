import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FilterSelectOption {
  label: string;
  value: string;
}

interface FilterSelectProps {
  id: string;
  label: string;
  value: string | null;
  onChange: (value: string | null) => void;
  options: FilterSelectOption[];
  placeholder?: string;
  className?: string;
  capitalize?: boolean;
  allLabel?: string;
}

export function FilterSelect({ id, label, value, onChange, options, placeholder = "Select an option", className, capitalize = false, allLabel = "All" }: FilterSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const allOptions: FilterSelectOption[] = [{ label: allLabel, value: "__all__" }, ...options];

  const selectedOption = allOptions.find((opt) => opt.value === (value ?? "__all__"));

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close on Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Scroll highlighted item into view
  useEffect(() => {
    if (isOpen && highlightedIndex >= 0 && listRef.current) {
      const items = listRef.current.querySelectorAll("li");
      items[highlightedIndex]?.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex, isOpen]);

  const handleSelect = (optionValue: string) => {
    onChange(optionValue === "__all__" ? null : optionValue);
    setIsOpen(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "Enter":
      case " ":
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          handleSelect(allOptions[highlightedIndex].value);
        } else {
          setIsOpen(true);
          setHighlightedIndex(allOptions.findIndex((opt) => opt.value === (value ?? "__all__")));
        }
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(0);
        } else {
          setHighlightedIndex((prev) => (prev < allOptions.length - 1 ? prev + 1 : 0));
        }
        break;
      case "ArrowUp":
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : allOptions.length - 1));
        }
        break;
      case "Escape":
        setIsOpen(false);
        break;
      case "Tab":
        setIsOpen(false);
        break;
    }
  };

  return (
    <div className={cn("space-y-2", className)} ref={containerRef}>
      {/* Label */}
      <label htmlFor={id} className="block text-sm font-medium text-church-text">
        {label}
      </label>

      {/* Trigger */}
      <div className="relative">
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-labelledby={id}
          onClick={() => {
            setIsOpen((prev) => !prev);
            if (!isOpen) {
              setHighlightedIndex(allOptions.findIndex((opt) => opt.value === (value ?? "__all__")));
            }
          }}
          onKeyDown={handleKeyDown}
          className={cn("flex w-full items-center justify-between rounded-lg border border-border bg-background px-4 py-2.5 text-left text-sm transition-all", "hover:border-church-gold/50", "focus:border-church-gold focus:outline-none focus:ring-2 focus:ring-church-gold/30", isOpen && "border-church-gold ring-2 ring-church-gold/30", capitalize && "capitalize")}
        >
          <span className={cn(selectedOption?.value === "__all__" ? "text-church-text-light" : "text-church-text")}>{selectedOption?.label ?? placeholder}</span>

          <ChevronDown className={cn("ml-2 h-4 w-4 shrink-0 text-church-text-light transition-transform duration-200", isOpen && "rotate-180")} />
        </button>

        {/* Dropdown Panel */}
        {isOpen && (
          <ul ref={listRef} role="listbox" aria-labelledby={id} className={cn("absolute z-50 mt-2 max-h-60 w-full overflow-auto rounded-lg border border-border bg-background py-1 shadow-lg", "duration-150 animate-in fade-in-0 zoom-in-95")}>
            {allOptions.map((option, index) => {
              const isSelected = option.value === (value ?? "__all__");
              const isHighlighted = index === highlightedIndex;

              return (
                <li
                  key={option.value}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => handleSelect(option.value)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={cn(
                    "flex cursor-pointer items-center justify-between px-4 py-2.5 text-sm transition-colors",
                    isHighlighted && "bg-church-gold/10",
                    isSelected ? "font-medium text-church-gold" : "text-church-text",
                    !isSelected && !isHighlighted && "hover:bg-muted",
                    capitalize && "capitalize",
                    // Divider after "All" option
                    index === 0 && "mb-1 border-b border-border pb-2.5",
                  )}
                >
                  <span>{option.label}</span>

                  {isSelected && <Check className="h-4 w-4 shrink-0 text-church-gold" />}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
