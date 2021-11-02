import Link from 'next/Link';
import styled from 'styled-components';

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
                                    <a><GrayLink>Home</GrayLink></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/features">
                                    <a> <GrayLink>Features</GrayLink></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/about">
                                    <a> <GrayLink>About</GrayLink></a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/cart" passHref>
                                    <a><GrayLink>Cart</GrayLink></a>
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