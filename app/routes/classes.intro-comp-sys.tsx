import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderIntroCompSys } from "~/texts/classes/intro-comp-sys";

export default function IntroCompSys() {
  return (
    <ProjectPageTemplate
      title="Intro to Computer Systems"
      description={renderIntroCompSys}
    />
  );
}
