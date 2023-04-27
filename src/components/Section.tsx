import { Link } from "react-router-dom";


type Props = {
    sectionName: string;
    sectionImg: string;
    sectionId: number
}

const Section = ({ sectionName, sectionImg, sectionId }: Props) => {

    return (
        <Link to={`/${sectionId}`} className="main-menu">{sectionName}
            <img src={sectionImg} alt={sectionName} />
        </Link>
    )
}

export default Section;