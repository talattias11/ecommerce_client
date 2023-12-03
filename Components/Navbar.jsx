const iconUrl =
    'https://fscourse.shaharbest.com/img/avi/1.webp';

export default function Navbar() {
    return <nav>
        <div className="icon">
            <img src={iconUrl} alt="" />
        </div>
        <ul className="menu">
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Catalog</a></li>
        </ul>
    </nav>
}