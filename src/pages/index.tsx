import { Trans, useTranslation } from "react-i18next";
import { Card } from "../components/card";

export function HomePage() {
  const { t } = useTranslation("home");
  const cardsArr = [0, 1, 2];

  return (
    <div className="text-foreground">
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center p-4 md:p-8">
        <div className="flex flex-col items-center gap-16 w-full justify-center md:w-3/4">
          <div className="flex items-center w-full justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl font-quicksand text-primary block leading-tight">
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
              className="w-1/2 object-contain"
              src={import.meta.env.BASE_URL + "/images/graphs.avif"}
              height={1080}
              width={1920}
            />
          </div>
          <div className="w-full flex gap-4 items-center">
            <span className="text-accent font-bold">
              {t("first-section.free")}
            </span>
            <a className="transition-all duration-300 text-foreground bg-primary rounded-lg border border-input px-3 py-1.5 font-bold cursor-pointer shadow-sm hover:shadow-md hover:bg-primary/80">
              {t("first-section.plans")}
            </a>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <h1 className="text-5xl text-center">
              <Trans
                defaults={t("second-section.title")}
                components={{
                  title: (
                    <span className="bg-gradient-to-tr font-bold bg-clip-text from-primary to-secondary text-transparent" />
                  ),
                }}
              />
            </h1>
            <div className="flex flex-row gap-4">
              {cardsArr.map((i) => (
                <Card className="flex-1">
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
