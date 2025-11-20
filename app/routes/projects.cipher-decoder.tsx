import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderCipherDecoder } from "../texts/projects/cipher-decoder";

export default function DiscordBot() {
  return (
    <ProjectPageTemplate title="Cipher Decoder" description={renderCipherDecoder} />
  );
}
