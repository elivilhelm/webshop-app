import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <a className="social row facebook" href="https://www.facebook.com" >
            <FontAwesomeIcon icon={faFacebook} size="4x" />
        </a>
    );
}