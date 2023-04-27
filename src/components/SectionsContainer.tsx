import catalog from "../utils/data";
import Section from "./Section";
import { v4 as uuid } from 'uuid';


const SectionsContainer = () => {
    const data = catalog;
    return (
            <div className="catalog">
                {
                    data.map((section) =>
                        <Section sectionId={section.sectionId} sectionName={section.sectionName} sectionImg={section.sectionImg} key={uuid()} />
                    )
                }
            </div>
    )
}

export default SectionsContainer;