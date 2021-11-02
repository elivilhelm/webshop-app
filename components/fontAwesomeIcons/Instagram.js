import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <a className="social row instagram" href="https://www.instagram.com" >
            <FontAwesomeIcon icon={faInstagram} size="4x" />
        </a>
    );
}