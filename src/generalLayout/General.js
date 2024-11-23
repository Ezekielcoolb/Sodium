import React from "react";
import Nav from "../Nav";
import FixedSide from "../FixedSide";
import Home from "../all";

const General = () => {
    return (
        <div style={{height: "100vh !important"}}>
          <Nav />
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <FixedSide />
                <Home />
            </div>
        </div>
    )
}
export default General