import {useState} from "react";
import './burgerBarStyles.css'

const BurgerMenu = () => {
    const [isMenuClicked, setIsMenuClicked] = useState(false);
    const className = isMenuClicked ? 'burger-bar clicked' : 'burger-bar';

    return (
        <div className="burger-menu" onClick={() => setIsMenuClicked(!isMenuClicked)}>
            <div className={className} ></div>
            <div className={className} ></div>
            <div className={className} ></div>
        </div>
    )
}

export default BurgerMenu
