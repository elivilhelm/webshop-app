import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <a className="social row youtube" href="https://www.youtube.com/c/jamesqquick" >
            <FontAwesomeIcon icon={faYoutube} size="4x" />
        </a>
    );
}