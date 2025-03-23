import react from 'react';
import '../css/header.css';

const Header = ({ editing, setEditing }) => {
    return (
        <header>
            <div className="logo-section">
                <img src="./public/imgs/CIALOGO.svg" width="70" alt="ERROR" />

                <div className="input-field">
                    <img src="./public/imgs/search.svg" alt="" width="30" />
                    <input type="text" placeholder="Search" id="searchInput" />
                    <div id="clearButton">&times;</div>
                </div>

                <div className="editing-container">
                    <div className="switch-container">
                        <span>{editing ? "EDITING" : "READONLY"}</span>
                        <label className="switch">
                            <input
                                type="checkbox"
                                checked={editing}
                                onChange={() => setEditing(!editing)}
                            />
                            <span className="slider"></span>
                        </label>
                    </div>

                    <a className="lcr-a" href="">LCR LALA</a>
                </div>
            </div>

            <hr />

            <nav>
                <a className="active-nav" href="#certificates">Certificates</a>
                <a href="#petitions">Petitions</a>
                <a href="#birth">Birth</a>
                <a href="#death">Death</a>
                <a href="#marriage">Marriage</a>
                <a href="#mun_id">Municipal ID</a>
                <a href="#pic_id">Picture ID</a>
                <a href="#about">About</a>

                <div className="nav-indicator"></div>

            </nav>
        </header>
    );
}

export default Header;