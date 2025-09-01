import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderSpeechTherapy } from "~/texts/projects/speech-therapy";

export default function SpeechTherapy() {
  return (
    <ProjectPageTemplate
      title="Speech Therapy Website"
      description={renderSpeechTherapy}
    />
  );
}
