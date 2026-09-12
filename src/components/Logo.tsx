import React from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "dark" | "light";
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  variant = "dark",
  showTagline = false,
}) => {
  const isDark = variant === "dark";
  const navyColor = isDark ? "#102A43" : "#FFFFFF";
  const blueColor = "#0958D9";

  const sizeClasses = {
    sm: "h-7",
    md: "h-9",
    lg: "h-12",
  };

  const textClasses = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-3xl",
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Travsior Geometric T-Fold Symbol */}
      <svg
        className={`${sizeClasses[size]} w-auto aspect-[1.1/1]`}
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Top Horizontal Bar (Navy) */}
        <path
          d="M10 16C10 12.6863 12.6863 10 16 10H104C108.5 10 110.5 14.5 107.5 18L92 34C90.5 35.5 88.5 36 86 36H16C12.6863 36 10 33.3137 10 30V16Z"
          fill={navyColor}
        />
        {/* Dynamic Angled Ribbon (Electric Blue) */}
        <path
          d="M106 20L58 56C53 60 48 64 48 72V90C48 93.5 45.5 96 42 96H28C24.5 96 22 93 22 89.5V56C22 47 28 40 36 36L102 14C106 12.5 108 17 106 20Z"
          fill={blueColor}
        />
        {/* Lower Navy Stem Accent */}
        <path
          d="M22 68L36 58C39 56 42 58 42 62V88C42 91.5 39.5 94 36 94H26C23.5 94 22 92 22 89.5V68Z"
          fill={navyColor}
        />
      </svg>

      {/* Wordmark */}
      <div className="flex flex-col">
        <span
          className={`font-sans font-bold tracking-tight lowercase leading-none ${textClasses[size]} ${
            isDark ? "text-travsior-navy" : "text-white"
          }`}
        >
          travsior
        </span>
        {showTagline && (
          <span
            className={`text-[10px] tracking-wider uppercase font-medium mt-1 ${
              isDark ? "text-travsior-navyMuted" : "text-slate-300"
            }`}
          >
            Your Way Abroad.
          </span>
        )}
      </div>
    </div>
  );
};
