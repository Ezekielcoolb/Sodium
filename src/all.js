import React, { useState } from "react";
import './App.css';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Sidebar from "./Sidebar";
import DropArea from "./DropArea";

const  Home = () => {
  const [fields, setFields] = useState([]);

  const handleDrop = (fieldType) => {
    setFields((prev) => [...prev, fieldType]);
  };

  return (
    <DndProvider backend={HTML5Backend}>
        <div style={{display: "flex", flexDirection: "column", width: "100vw", height: "100vh"}}>

        <div style={{ display: "flex", alignItems: 'center',
            height: "100px", width: "100%",  padding: "20px", borderBottom: "1px solid rgb(214, 217, 222)"}}>
            <h2>Bolu</h2>
        </div>
      <div style={{ display: "flex", height: "100vh" }}>
        <Sidebar />
        <DropArea fields={fields} onDrop={handleDrop} />
      </div>
        </div>
    </DndProvider>
  );
}

export default Home;
