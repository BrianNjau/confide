import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { inter, lexendDeca } from "@/app/fonts";
import { cn } from "@/utils/class-names";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Confide App",
  description:
    "Confide — A robust whistleblowing management system to fortify compliance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      // 💡 Prevent next-themes hydration warning
      suppressHydrationWarning
    >
      <body
        // 💡 Prevent hydration warnings caused by third-party extensions, such as Grammarly.
        suppressHydrationWarning
        className={cn(inter.variable, lexendDeca.variable, "font-inter")}
      >
        <ThemeProvider>
          {/* <HydrogenLayout> */}

          {children}

          {/* </HydrogenLayout> */}
          {/* <GlobalDrawer />
          <GlobalModal /> */}
        </ThemeProvider>
      </body>
    </html>
  );
}
