import { Link } from "react-router-dom";
import { LanguageSwitcher } from "../language-switcher";
import { ThemeSwitcher } from "../theme-switcher";
import { MobileNavigation } from "./mobile-navigation";

export function MobileNavbar() {
  return (
    <div className="flex w-full justify-between items-center sm:hidden">
      <div className="flex flex-row gap-4 items-center">
        <Link to="/" className="relative group" aria-label="Go to the main page">
          <span className="font-comfortaa text-4xl font-bold text-primary">
            M
          </span>
        </Link>
        <MobileNavigation />
        <a
          aria-label="Go to MAYOM website"
          className="text-white bg-linear-to-tr from-emerald-500 to-cyan-500 rounded-lg px-1.5 py-2 font-semibold text-lg border border-input"
        >
          MAYOM
        </a>
      </div>

      <div className="flex gap-4 items-center">
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
