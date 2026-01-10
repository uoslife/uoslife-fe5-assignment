import gitIcon from '../../assets/git-icon.png'
import editIcon from '../../assets/edit-icon.png'

export function Header() {
    return (
        <header className="header">
            <div className="headerLeft">
                <div className="logo">UOSLIFE</div>
                <nav className="nav">
                    <span>홈</span>
                    <span>메뉴1</span>
                    <span>메뉴2</span>
                </nav>
            </div>

            <div className="headerRight">
                <img src={gitIcon} alt="Github" />
                <img src={editIcon} alt="Edit" />
            </div>
        </header>
    )
}