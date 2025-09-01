import "~/index.css";
import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import { renderElecEng } from "~/texts/classes/elec-eng";

export default function ElecEng() {
    return (
        <ProjectPageTemplate 
            title="Electronic Engineering"
            description={renderElecEng}
        />
    )
}