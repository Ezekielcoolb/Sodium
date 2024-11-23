import React from "react";
import { Icon } from "@iconify/react";
import logo from './logo_black.svg';

const Nav = () => {
    return(
        <div style={{display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: "30px",
        borderBottom: "1px solid rgb(214, 217, 222)"}}>
            <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
            <Icon width="50px" height="50px" icon="mdi-light:menu" />
             <img style={{width: "116px", height: "30px"}} sty src={logo} className="App-logo" alt="logo" />
            </div>
            <div style={{display: "flex", alignItems: "center", gap: "30px"}}>
                <div style={{width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Icon icon="uil:calender" width="24" height="24"  style={{color: "black"}} />
                </div>
                <div style={{width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Icon icon="mage:message-question-mark" width="24" height="24"  style={{color: "black"}} />
                </div>
                <div style={{width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Icon icon="mi:notification" width="24" height="24"  style={{color: "black"}} />
                </div>
                <div style={{width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Icon icon="line-md:account" width="24" height="24"  style={{color: "black"}} />
                </div>
            </div>
        </div>
    )
}
export default Nav