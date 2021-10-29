/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
import SocialFollow from './SocialFollow';


function Footer() {
    return (
        <footer className="page-footer font-small blue pt-4 FooterContainer">
            <div className="container-fluid text-center text-md-left">
                <div className="row">

                    <div className="col-md-7 mt-md-0  col-sm-12 col-xs-2">
                        <h5 className="text-uppercase">Digimon Card</h5>
                        <p className="footer-description">Digimon  is a popular Japanese series of media and merchandise created by Akiyoshi Hongo, which is comprised of anime, manga, toys, video games, trading card games and other media.</p>
                    </div>

                    <div className="col-md-2 mt-md-0 col-sm-2 col-xs-2 socials ">
                        <h5 className="text-uppercase">Social Media</h5>
                        <div className="social-icons">
                            <SocialFollow />
                        </div>
                    </div>

                    <div className="col-md-2 mb-md-0 col-sm-2 col-xs-2 ">
                        <h5 className="text-uppercase">Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="https://digimon.fandom.com/wiki/Digimon">Digimon Wiki</a></li>
                            <li><a href="https://www.youtube.com/watch?v=FUE_rsMvqYU&ab_channel=Crunchyroll">Digimon History</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-copyright text-center py-2 footer-size">© 2021 Copyright:
                <a href="https://digimon.fandom.com/wiki/Digimon"> Digimon.fandom.com</a>
            </div>

        </footer>
    );
}

export default Footer;