import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";


export default function SocialFollow() {
    return (
        <div className="social-container">
            <a className="youtube social row" href="https://www.youtube.com/c/jamesqquick" >

                <div className="col-4">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                </div>
                <div className="col-4">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                </div>

            </a>
        </div>
    );
}