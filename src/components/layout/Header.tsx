import './Header.css';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import pencilIcon from '../../assets/pencil.png';

export default function Header() {
    return(
        <header className="header">
            {/* Left Section */}
            <div className="header-left">
                <a href="/" className="header-logo">
                    UOSLIFE FE
                </a>
                <nav className="header-nav">
                    <a href="#">홈</a>
                    <a href="#">메뉴1</a>
                    <a href="#">메뉴2</a>
                </nav>
            </div>

            {/* Right Section */}
            <div className="header-right">
                {/* GitHub */}
                <a href="https://github.com/greengrape777" target="_blank" rel="noopener noreferrer" className="header-icon">
                    <img
                        src={githubIcon} 
                        alt="GitHub"
                    />
                </a>

                {/* Instagram */}
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="header-icon">
                    <img
                        src={instagramIcon} 
                        alt="Instagram"
                    />
                </a>

                {/* Pencil */}
                <div className="header-icon">
                    <img
                        src={pencilIcon} 
                        alt="Pencil"
                    />
                </div>
            </div>
        </header>
    )
}