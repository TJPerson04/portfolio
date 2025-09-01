import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderDiscordBot } from "~/texts/projects/discord-bot";

export default function DiscordBot() {
  return (
    <ProjectPageTemplate title="Discord Bot" description={renderDiscordBot} />
  );
}
