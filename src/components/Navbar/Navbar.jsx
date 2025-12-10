import { useState } from "react";
import "./Navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = (props) => {
  const [showNav, setShowNav] = useState(false)
  const [user, setUser] = useState({ name: 'John', age: 25 });

//   user.age = 26;
// setUser(user);

// setUser(prev => 
//   ({...prev, age: 26})
// )

    const handleClick = () => {
        // setShowNav(!showNav)
        setShowNav(prev => !prev)
    }
  return (
    <header>
        <nav className='main-container'>
            <p className='logo'>MyLogo</p>
            <ul className='list-container'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
            <p className='hamburger' onClick={handleClick}><RxHamburgerMenu /></p>
        </nav>
        {showNav && <ul className='mobile-list-container'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Login</li>
        </ul>}
    </header>
  );
};

export default Navbar;
