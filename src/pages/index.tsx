import { Trans, useTranslation } from "react-i18next";
import { Card } from "../components/card";
import { Separator } from "../components/ui/separator";

export function HomePage() {
  const { t } = useTranslation("home");
  const cardsArr = [0, 1, 2];

  return (
    <div className="text-foreground">
      <div className="min-h-[calc(100dvh-5rem)] flex flex-col items-center">
        <div className="flex flex-col items-center w-full justify-center md:w-3/4">
          <div className="bg-linear-to-br from-background from-50% p-4 to-primary/20 min-h-[calc(100dvh-5rem)] flex flex-col gap-12 w-full justify-center md:p-8">
            <div className="flex flex-col-reverse items-center w-full justify-center md:flex-row">
              <div className="flex flex-col gap-8">
                <h1 className="text-3xl font-quicksand text-primary block leading-tight md:text-6xl">
                  <Trans
                    defaults={t("first-section.title")}
                    components={{ bold: <strong /> }}
                  />
                </h1>
                <h2 className="text-lg text-primary/80 block">
                  <Trans
                    defaults={t("first-section.description")}
                    components={{ bold: <strong /> }}
                  />
                </h2>
              </div>
              <img
                className="object-contain md:w-1/2"
                src={import.meta.env.BASE_URL + "/images/graphs.avif"}
                height={1080}
                width={1920}
              />
            </div>
            <div className="w-full flex flex-col gap-4 items-center md:flex-row">
              <span className="text-accent font-bold">
                {t("first-section.free")}
              </span>
              <a className="transition-all duration-300 text-foreground bg-primary rounded-lg border border-input px-3 py-1.5 font-bold cursor-pointer shadow-sm hover:shadow-md hover:bg-primary/80">
                {t("first-section.plans")}
              </a>
            </div>
          </div>
          <Separator />
          <div className="bg-linear-to-bl from-primary/20 to-background to-50% p-4 flex flex-col gap-12 w-full md:p-8">
            <h1 className="text-2xl text-center md:text-5xl">
              <Trans
                defaults={t("second-section.title")}
                components={{
                  title: (
                    <span className="bg-linear-to-tr font-bold bg-clip-text from-primary to-secondary text-transparent" />
                  ),
                }}
              />
            </h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {cardsArr.map((i) => (
                <Card>
                  <Card.Content>
                    <Card.Title>
                      {t(`second-section.cards.${i}.title`)}
                    </Card.Title>
                    <span>{t(`second-section.cards.${i}.description`)}</span>
                  </Card.Content>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
