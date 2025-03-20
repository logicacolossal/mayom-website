import { Card } from "../components/card";

export function HomePage() {
  return (
    <div className="text-foreground">
      <div className="min-h-[calc(100vh-5rem)] flex flex-col items-center p-4 md:p-8">
        <div className="flex flex-col items-center gap-16 w-full justify-center md:w-3/4">
          <div className="flex items-center w-full justify-center">
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl font-quicksand text-primary block leading-tight">
                <strong>Manage Your Own Money</strong>, track your expenses,
                achieve your goals!
              </h1>
              <h2 className="text-lg text-primary/80 block">
                <strong>MAYOM</strong> will help you manage your money better
                than the government
              </h2>
            </div>
            <img
              className="w-1/2 object-contain"
              src="/images/graphs.avif"
              height={1080}
              width={1920}
            />
          </div>
          <div className="w-full flex gap-4 items-center">
            <span className="text-accent font-bold">Free and easy to use.</span>
            <a className="transition-all duration-300 text-foreground bg-primary rounded-lg border border-input px-3 py-1.5 font-bold cursor-pointer shadow-sm hover:shadow-md hover:bg-primary/80">
              See Plans & Pricing
            </a>
          </div>
          <div className="flex flex-col gap-12 w-full">
            <h1 className="text-5xl text-center">
              How{" "}
              <span className="bg-gradient-to-tr font-bold bg-clip-text from-primary to-secondary text-transparent">
                MAYOM
              </span>{" "}
              is going to help you
            </h1>
            <div className="flex flex-row gap-4">
              <Card className="flex-1">
                <Card.Content>
                  <Card.Title>
                    Control your money on debit, credit cards, brokers and
                    physical money
                  </Card.Title>
                  <span>
                    With MAYOM you can track all of your cards expenses and even
                    your physical money expenses with releases. You can also
                    classify an account as a broker to keep tracking the money
                    you are investing.
                  </span>
                </Card.Content>
              </Card>
              <Card className="flex-1">
                <Card.Content>
                  <Card.Title>With multicurrency accounts</Card.Title>
                  <span>
                    We support multicurrencies, you can even see a summary of
                    your accounts in a different currency of your choice, have
                    more than one currency for each account and change the
                    currency summary whenever you want.
                  </span>
                </Card.Content>
              </Card>
              <Card className="flex-1">
                <Card.Content>
                  <Card.Title>Track your goals</Card.Title>
                  <span>
                    Create and achieve your goals in a short, medium or long
                    deadline and get a step closer to your financial growth
                    every day!
                  </span>
                </Card.Content>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
