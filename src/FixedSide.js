import React from "react";
import { Icon } from "@iconify/react";

const FixedSide = () => {
    return(
        <div style={{
           
            
            borderRight: "1px solid rgb(214, 217, 222)"
        }}>
            <div style={{display: "flex",
            flexDirection: "column",
            gap: "20px",
            padding: "50px 20px", borderBottom: "1px solid rgb(214, 217, 222)"}}>

            
            <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Icon icon="cuida:dashboard-outline" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
            </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="material-symbols:library-books-outline-rounded" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="ion:book-outline" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="fluent:organization-20-filled" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="clarity:tasks-line" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="ion:people-outline" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="mage:message-dots" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Icon icon="uil:calender" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
        </div>
        </div>
        <div style={{padding: "42px 10px"}}>
            <div style={{width: "50px", height: "50px", display: "flex", alignItems: "center", justifyContent: "center"}}>
            <Icon icon="hugeicons:logout-03" width="32" height="32"  style={{color: "rgb(120, 116, 134)"}} />
            </div>
        </div>
        
       
  
        </div>
    )
}
export default FixedSide