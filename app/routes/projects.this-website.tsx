import "~/index.css";
import ProjectPageTemplate from "../templates/ProjectPageTemplate";
import { renderWebsiteDesc } from "../texts/projects/this-website";
import PopUp from "../templates/PopUp";
import { useState } from "react";

export default function ThisWebsite() {
    const [isPopUpOpen, setIsPopUpOpen] = useState(false);

    return (
        <>
            <PopUp
                isOpen={isPopUpOpen}
                setIsOpen={setIsPopUpOpen}
            >
                <iframe src="https://tyler-diloreto-portfolio.fly.dev/" style={{ width: "100%", height: "100%", borderRadius: "17px" }} />
            </PopUp>

            <ProjectPageTemplate
                title="This Website"
                description={() => renderWebsiteDesc(setIsPopUpOpen)}
            />
        </>
    )
}