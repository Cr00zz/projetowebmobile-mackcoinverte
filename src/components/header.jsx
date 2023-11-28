import React from "react";
import Logo from "../imgs/coinverter.png"

export default function Header(){
    return(
        <div className="pageTitle">
            <div>
                Mack <br />
                CoinVerte
            </div>
            <img src={Logo} alt="mackcoinverte" />
        </div>
    );
}