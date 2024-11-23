import React from "react";
import { Icon } from "@iconify/react";
import { useDrag } from "react-dnd";

// SidebarItem Component
const SidebarItem = ({ type, label }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "FIELD",
    item: { type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        padding: "10px",
        marginTop: "20px",
        border: "1px solid #ccc",
        backgroundColor: isDragging ? "#f0f0f0" : "#fff",
        cursor: "grab",
        width: "300px",
        height: "35px",
        display: "flex",
        alignItems: "center",
        color: "#212529",
        fontSize: "16px",
      }}
    >
      {label}
    </div>
  );
};

// IconWithLabel Component
const IconWithLabel = ({ icon, label, type }) => (
  <div style={{ display: "flex", alignItems: "center", marginTop: "20px" }}>
    <div
      style={{
        border: "1px solid rgb(214, 217, 222)",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "35px",
        width: "35px",
        borderRight: "0px",
        marginTop: "20px",
      }}
    >
      <Icon icon={icon} width="32" height="32" style={{ color: "black" }} />
    </div>
    <SidebarItem type={type} label={label} />
  </div>
);

// Sidebar Component
const Sidebar = () => {
  const fields = [
    { icon: "uil:letter-english-a", label: "Text", type: "text", options:[
        "Require field", "Single Line", "Multi Line", "Add help text"
    ] },
    { icon: "mdi-light:menu", label: "Category", type: "category", options:[
        "Require field", "Single Choice", "Multiple Choice", "Inline",
        "List", "Drop-down list", "Add help text"
    ] },
    { icon: "uil:calender", label: "Date", type: "date", options: [
        "Required field", "Show in calelender", "Show time entry",
        "Hide time entry", "Require time entry", "Show end date",
        "Hide end date", "Require end date", "Add help text"
    ] },
    { icon: "clarity:organization-line", label: "Relationship", type: "relationship" },
    { icon: "octicon:person-16", label: "Member", type: "member" },
    { icon: "solar:phone-bold", label: "Phone", type: "phone" },
    { icon: "mdi-light:email", label: "Email", type: "email" },
    { icon: "bi:123", label: "Number", type: "number" },
    { icon: "solar:link-bold", label: "Link", type: "link" },
    { icon: "mdi-light:image", label: "Image", type: "image" },
    { icon: "marketeq:money-dollar", label: "Money", type: "money" },
    { icon: "iwwa:divide", label: "Progress", type: "progress" },
    { icon: "carbon:calculation-alt", label: "Calculation", type: "calculation" },
    { icon: "mi:location", label: "Location", type: "location" },
    { icon: "mingcute:time-duration-line", label: "Duration", type: "duration" },
  ];

  return (
    <div
      style={{
        borderRight: "1px solid rgb(214, 217, 222)",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: "10px 30px",
          height: "60px",
          borderBottom: "1px solid rgb(214, 217, 222)",
          fontWeight: "500",
          fontSize: "15px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3>Fields</h3>
        <Icon icon="ic:baseline-search" width="16" height="16" style={{ color: "#212529" }} />
      </div>

      {/* Fields List */}
      <div
        style={{
          padding: "30px",
          flex: 1,
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollbarColor: "#888 #f1f1f1",
        }}
      >
        {fields.map((field, index) => (
          <IconWithLabel key={index} icon={field.icon} label={field.label} type={field.type} />
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid rgb(214, 217, 222)",
          padding: "60px 0px",
        }}
      >
        <button
          style={{
            borderStyle: "none",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgb(39, 82, 231)",
            borderRadius: "5px",
            width: "300px",
            height: "55px",
            margin: "auto",
            padding: "25px",
            fontSize: "20px",
            color: "white",
            fontWeight: "bold",
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
