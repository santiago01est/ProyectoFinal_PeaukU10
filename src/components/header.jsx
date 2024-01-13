import '../styles/header.css';
import { ButtonCommon } from './buttons';


const Header= () => {
    return (
        <header>
        <nav className="container-fluid">
            <div className="row">
                <div className="col-3 d-flex justify-content-space-between align-items-center">
                    <span id="subtitle"><a href="#" className="nav-link">Trabook</a></span>
                    <img src="/img/logo.png" alt="logo" className="logo"></img>
                </div>

                <div className="options col-6 d-flex justify-content-center align-items-center">
                    <ul>
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Destination</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Tour</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                    </ul>
                </div>


                <div className="col-3 d-flex justify-content-end align-items-center gap-3">
                    <ButtonCommon text={'Login'} type={'outline'}/>
                    <ButtonCommon text={'Sign Up'} type={'fill'}/>
                </div>

            </div>
        </nav>
    </header>
    )
}

export default Header