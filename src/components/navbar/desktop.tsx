import { ThemeSwitcher } from "../theme-switcher";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { LanguageSwitcher } from "../language-switcher";
import { useTranslation } from "react-i18next";

export function DesktopNavbar() {
  const { t } = useTranslation("navbar");

  return (
    <div className="justify-between hidden sm:flex sm:w-full text-foreground">
      <div className="h-full flex gap-4 items-center">
        <a href="/" className="relative group" aria-label="Go to the main page">
          <span className="font-comfortaa text-4xl font-bold text-primary">
            M
          </span>
        </a>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://google.com"
                className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
              >
                {t("plans")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://google.com"
                className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
              >
                {t("features")}
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href="https://google.com"
                className={`${navigationMenuTriggerStyle()} text-xl bg-transparent`}
              >
                {t("about")}
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      <div className="flex gap-32 items-center">
        <div className="flex gap-8">
          <a
            href="https://mayom.app/auth/sign-up"
            target="_blank"
            className="transition-colors duration-200 text-bold text-foreground bg-primary border border-input rounded-lg py-1.5 px-3 font-bold hover:bg-primary/80"
          >
            {t("sign-up")}
          </a>
          <a
            href="https://mayom.app/auth/sign-in"
            target="_blank"
            className="transition-colors duration-200 text-foreground border border-input rounded-lg py-1.5 px-3 hover:bg-accent"
          >
            {t("sign-in")}
          </a>
        </div>
        <div className="flex gap-2 items-center">
          <LanguageSwitcher />
          <div className="h-12 w-[1px] bg-border" />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
