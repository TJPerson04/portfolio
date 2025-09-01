import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderAlarmSystem } from "~/texts/projects/alarm-system";

export default function AlarmSystem() {
  return (
    <ProjectPageTemplate title="Alarm System" description={renderAlarmSystem} />
  );
}
