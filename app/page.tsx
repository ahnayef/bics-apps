"use client";
import { useState } from "react";
import Image from "next/image";

const demoApps = [
  { id: 1, name: "নবীন", theme: "blue", icon: "/logo/nabin.webp", downloadLink: "https://github.com/ahnayef/bics-apps/raw/refs/heads/main/public/apps/nobin.apk" },
  { id: 2, name: "তরুণ", theme: "orange", icon: "/logo/tarun.png", downloadLink: "https://github.com/ahnayef/bics-apps/raw/refs/heads/main/public/apps/tarun.apk" },
  { id: 3, name: "অগ্রদূত", theme: "green", icon: "/logo/ogrodut.webp", downloadLink: "https://github.com/ahnayef/bics-apps/raw/refs/heads/main/public/apps/ogrodut.apk" },
];

const themeBackgrounds: { blue: string, orange: string, green: string } = {
  blue: "bg-gradient-to-br from-blue-100 to-blue-300",
  orange: "bg-gradient-to-br from-orange-100 to-orange-300",
  green: "bg-gradient-to-br from-green-100 to-green-300",
};

const themeClasses: { blue: { border: string, title: string, button: string, gradientDefault: string }, orange: { border: string, title: string, button: string, gradientDefault: string }, green: { border: string, title: string, button: string, gradientDefault: string } } = {
  blue: {
    border: "border-blue-500",
    title: "text-blue-700",
    button: "bg-blue-600 hover:bg-blue-700",
    gradientDefault: "from-blue-500 to-blue-700",
  },
  orange: {
    border: "border-orange-500",
    title: "text-orange-700",
    button: "bg-orange-600 hover:bg-orange-700",
    gradientDefault: "from-orange-500 to-orange-700",
  },
  green: {
    border: "border-green-500",
    title: "text-green-700",
    button: "bg-green-600 hover:bg-green-700",
    gradientDefault: "from-green-500 to-green-700",
  },
};

export default function Home() {
  const [hoveredTheme, setHoveredTheme] = useState<keyof typeof themeBackgrounds | null>(null);

  const mainBackground = hoveredTheme
    ? themeBackgrounds[hoveredTheme as keyof typeof themeBackgrounds]
    : "bg-white";

  return (
    <main className={`min-h-screen transition-colors duration-300 flex justify-center align-middle items-center ${mainBackground}`}>
      <div className="container mx-auto px-4">
        <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-12">
          {demoApps.map((app) => {
            const theme = themeClasses[app.theme as keyof typeof themeClasses];
            return (
              <div
                key={app.id}
                className={`relative group rounded-md overflow-hidden sm:shadow-xl lg:shadow-2xl transition hover:scale-105 ${theme.border} cursor-help`}
                onMouseEnter={() => setHoveredTheme(app.theme as keyof typeof themeBackgrounds)}
                onMouseLeave={() => setHoveredTheme(null)}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${theme.gradientDefault} opacity-20 transition duration-300`}
                />
                <div className="relative z-10 backdrop-blur-sm bg-white/70 p-8 rounded-md flex flex-col items-center">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={64}
                    height={64}
                    className="mb-4 rounded-lg"
                  />
                  <h2 className={`mb-6 text-2xl font-bold ${theme.title}`}>
                    {app.name}
                  </h2>
                  <a
                    className={`mt-auto flex items-center rounded-md ${theme.button} px-4 py-3 font-semibold text-white transition hover:shadow-lg cursor-pointer flex gap-2 flex-row`}
                    href={app.downloadLink} type="download"
                  >
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4" />
                    </svg>

                    <span>
                      ডাউনলোড
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}