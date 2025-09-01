import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderMCBlackjack } from "~/texts/projects/mc-blackjack";

export default function MCBlackjack() {
  return (
    <ProjectPageTemplate
      title="Blackjack in Minecraft"
      description={renderMCBlackjack}
    />
  );
}
