import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';


const GrayLink = styled.a`
  color: gray;
  font-weight: 800;
`

function Header() {

    return (
        <header>
            <nav className="navbar navbar-expand navbar-light ">
                <div className="container-fluid">
                    <div >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item active">

                                <Link href="/" passHref>
                                    Home
                                </Link>

                            </li>
                            <li className="nav-item">
                                <Link href="/features">
                                    Features
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    About
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/Cart" passHref>
                                    Cart
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <div className="p-5 text-center bg-image">
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                        <h2 className="mb-3 header-title">Digi Webb</h2>
                        <a className="btn btn-outline-dark btn-md btn-text" href="https://digimon.fandom.com/wiki/Digimon">
                            Go to Digimon-Wiki
                        </a>
                    </div>
                </div>
            </div>
        </header >

    );
}

export default Header;