import './index.css';


const Navbar = () => {
    return(
        <nav className="navbar">
            <h1> MeTime</h1>
            <div className="links">
                <a href="/"> Home </a>
                <a href="/create" > New Entry</a>
                <a href="/about">Schedule</a>
            </div>
        </nav>
    );
}

export default Navbar;
