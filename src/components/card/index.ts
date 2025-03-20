import { CardContent } from "./content";
import { CardRoot } from "./root";
import { CardTitle } from "./title";

export const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Content: CardContent,
});
