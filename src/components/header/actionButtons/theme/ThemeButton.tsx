import { useContext, useEffect, useRef, useState } from "react";
import { themeContext } from "../../../../context/themeContext";
import { ThemeDropDown } from "./ThemeDropDown";

export const ThemeButton = () => {
  const [displayThemeDropDown, setDisplayThemeDropDown] =
    useState<boolean>(false);

  const isShopOpen = useRef<HTMLDivElement | null>(null);
  const { theme } = useContext(themeContext);

  const closeShop = (event: MouseEvent) => {
    if (!isShopOpen.current?.contains(event.target as Node)) {
      setDisplayThemeDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeShop);
  }, []);
  return (
    <div className="relative">
      <button
        onClick={() => setDisplayThemeDropDown(true)}
        className="relative w-24 h-12 flex items-center justify-center gap-1 font-DanaMedium bg-transparent border-2 border-gray-400 rounded-xl text-zinc-700 dark:text-white dark:border-white/80 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-300 dark:hover:border-indigo-300 transition-all desktop:text-sm desktop:w-20 desktop:h-11"
      >
        تم
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 mobile:size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-5 mobile:size-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
      {displayThemeDropDown && <ThemeDropDown isShopOpen={isShopOpen} />}
    </div>
  );
};
