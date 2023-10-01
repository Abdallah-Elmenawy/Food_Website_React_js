import React from "react";
import './Header.css';
const Header = () => {
    return(
        <header>
            <div className="overlay"></div>
            <div className="container">
                <div className="box col-md-6">
                    <h2>Good Food Choices Are Good Investments.</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <button>Order Now</button>
                    <button>learn more</button>
                </div>
                <div className="col-md-6">
                </div>
            </div>
        </header>
    )
}
export default Header;