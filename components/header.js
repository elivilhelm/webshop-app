import 'bootstrap/dist/css/bootstrap.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>


function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand navbar-light ">
                <div className="container-fluid">
                    <div >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="p-5 text-center bg-image">
                <div className="mask" /*style="background-color: rgba(0, 0, 0, 0.6);"*/>
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <div>
                            <h2 className="mb-3 header-title">Digi Webb</h2>
                            <a className="btn btn-outline-dark btn-md btn-text" href="https://digimon.fandom.com/wiki/Digimon">
                                Go to Digimon-Wiki
                            </a>
                        </div>
                    </div>
                </div>
            
            </div>
        </header>
    );
}

export default Header;