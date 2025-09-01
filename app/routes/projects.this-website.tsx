import ProjectPageTemplate from "~/templates/ProjectPageTemplate";
import {renderWebsiteDesc} from "~/texts/projects/this-website";

export default function ThisWebsite() {
    return (
        <ProjectPageTemplate 
            title="This Website"
            description={renderWebsiteDesc}
        />
    )
}