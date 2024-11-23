import React, { useEffect, useRef, useState } from "react";
import { useDrop } from "react-dnd";
import { Icon } from "@iconify/react";
import { useDrag } from "react-dnd";

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

const FieldRenderer = ({ type }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showField, setShowField] = useState(true); 

  const handleRemoveField = () => {
    setShowField(false); // Hide the field when the cancel button is clicked
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  const textOptions = [
    { title: "Require field", border: true },
    { title: "Single Line", border: false },
    { title: "Multi Line", border: true },
    { title: "Add help text", border: false },
  ];
  const categoryOptions = [
    { title: "Require field", border: true },
    { title: "Single choice", border: false },
    { title: "Multiple choice", border: true },
    { title: "Inline", border: false },
    { title: "List", border: false },
    { title: "Drop-down list", border: true },
    { title: "Add help text", border: false },
  ];
  const dateOptions = [
    { title: "Require field", border: true },
    { title: "Show in calendars", border: true },
    { title: "Show time entry", border: false },
    { title: "Hide time entry", border: false },
    { title: "Require time entry", border: true },
    { title: "Show end date", border: false },
    { title: "Hide end date", border: false },
    { title: "Require end date", border: true },
    { title: "Add help text", border: false },
  ];
  const relationOptions = [
    { title: "Require field", border: true },
    { title: "Choose an app", border: true },
    { title: "Multiple references", border: false },
    { title: "Only one refrence", border: true },
   
    { title: "Add help text", border: false },
  ];
  const memberOptions = [
    { title: "Require field", border: true },
    { title: "Allow sharing this item with non-workspace members and/or email addresses added to this field.", 
        border: true },,
   
    { title: "Add help text", border: false },
  ];
  const phoneOptions = [
    { title: "Require field", border: true },
    { title: "Call link protocol", border: true },
    { title: "Callto", border: false },
    { title: "Tel", border: true },
   
    { title: "Add help text", border: false },
  ];
  const emailOptions = [
    { title: "Require field", border: true },
    { title: "Add help text", border: false },
  ];
  const numberOptions = [
    { title: "Require field", border: true },
    { title: "Display whole number 1000", border: false },
    { title: "Display two decimals 1000.50", border: false },
    { title: "Display four decimals 1000.50", border: true },
   
    { title: "Add help text", border: false },
  ];
  const linkOptions = [
    { title: "Require field", border: true },
    { title: "Add help text", border: false },
  ];
  const imageOptions = [
    { title: "Require field", border: true },
    { title: "Add help text...", border: false },
  ];
  const moneyOptions = [
    { title: "Require field", border: true },
    { title: "Set currency...", border: true },
    { title: "Add help text...", border: false },
  ];
  const progressOptions = [
    { title: "Require field", border: true },
    { title: "Add help text...", border: false },
  ];
  const calOptions = [
    { title: "Require field", border: true },
    { title: "Add help text...", border: false },
  ];
  const locationOptions = [
    { title: "Require field", border: true },
    { title: "Single line address", border: false },
    { title: "Multi-line address", border: true },
    { title: "show map", border: true },
    { title: "Add help text", border: false },
  ];
  const durationOptions = [
    { title: "Require field", border: true },
    { title: "Display days", border: false },
    { title: "Display hours", border: false },
    { title: "Display minutes", border: false },
    { title: "Display seconds", border: true },
    { title: "Add help text", border: false },
  ];


  


  const closeDropdown = (event) => {
    // Check if the click is outside the dropdown
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Attach click event listener to the document
    document.addEventListener("mousedown", closeDropdown);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  const placeholder = (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        background: "white",
        justifyContent: "space-between",
        padding: "10px 5px",
        color: "rgb(33, 37, 41)",
      }}
    >
      <div style={{ display: "flex", gap: "4px", alignItems: "center" }}>
        <Icon
          icon="nimbus:drag-dots"
          width="28"
          height="28"
          style={{ color: "black" }}
        />
        <p style={{ fontSize: "20px", fontWeight: "600" }}>
          Enter category option
        </p>
      </div>
      <div
        style={{ width: "28px", height: "28px", background: "#7e038740" }}
      ></div>
    </div>
  );

  const fieldStyle = {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(to right, white 30%, #e7e7e7 30%)",
    padding: "0 10px",
    gap: "50px",
    height: "100px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    margin: "0px",
    borderBottom: "1px solid rgb(214, 217, 222)",
  };
  
  const categoryField = {
    display: "flex",
    alignItems: "center",
    background: "linear-gradient(to right, white 30%, #e7e7e7 30%)",
    padding: "0 10px",
    gap: "50px",
    height: "134px",
    position: "relative",
    display: "flex",
    alignItems: "center",
    margin: "0px",
    borderBottom: "1px solid rgb(214, 217, 222)",
  }

  const iconContainerStyle = {
    border: "1px solid rgb(214, 217, 222)",
    marginTop: "20px",
    padding: "10px",
    borderRight: "0px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "35px",
    width: "35px",
  };

  const dropStyle = {
    position: "absolute",
    top: "40px",
    color: "rgb(33, 37, 41)",
    left: "0",
    backgroundColor: "rgb(255, 255, 255)",
    border: "1px solid #ccc",
    borderRadius: "10px",
    maxWidth: "300px",
    minWidth: "300px",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 0px 15px 0px",
    zIndex: 1000,
    webkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  };
  const btn = {
    position: "absolute",
    background: "#e7e7e7",
    top: "0px",
    right: "0px",
    borderStyle: "none",
    display: "none", // Hidden by default
    cursor: "pointer",
  }
  switch (type) {
    case "text":
      return (
        <>
        {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
           <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
              <div style={{ position: "relative" }}>
                <Icon
                  onClick={toggleDropdown}
                  width="20px"
                  height="20px"
                  icon="uil:letter-english-a"
                  style={{ color: "black" }}
                />
                {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {textOptions.map((option, index) => {
                      
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === 1 || index === 2) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === textOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="text" label="Text" />
          </div>
        </div>
        )}
        </>
      );
    case "category":
      return (
        <>
        {showField && (
            <div style={categoryField}
            onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
              onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
            >
                 {/* Cancel Button */}
              <button
                className="cancel-btn"
                style={btn}
                onClick={handleRemoveField}
              >
                <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
              </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
              <div style={{ position: "relative" }}>
                <Icon
                  onClick={toggleDropdown}
                  width="20px"
                  height="20px"
                  icon="mdi-light:menu"
                  style={{ color: "black" }}
                />
                {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {categoryOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index >= 1 && index <= 5) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === categoryOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="category" label="Category" />
          </div>
          <div
            style={{
              padding: "25px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: "8px"
            }}
          >
            {isFocused || value ? (
              <input
                style={{
                  borderStyle: "none",
                  padding: "10px",
                  background: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                type="text"
                value={value}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setValue(e.target.value)}
                placeholder=""
              />
            ) : (
              placeholder
            )}
            <button style={{
                background: "rgb(39, 82, 231)",
                display: "flex",
                justifyContent: "center",
                alignItems:"center",
                fontWeight: "bold",
                fontSize: "16px",
                color: "rgb(255, 255, 255)",
                borderStyle: "none",
                borderRadius: "5px",
                padding: "16px"
            }}>+ Add More</button>
          </div>
        </div>
        )}
        </>
      );
    case "date":
      return (
        <>
        {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
            <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="uil:calender"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
              {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {dateOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index >= 2 && index <= 7) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === dateOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="date" label="Date" />
          </div>
        </div>
        )}
        </>
      );
    case "relationship":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>

                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="clarity:organization-line"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {relationOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      } else if (index >= 2 && index <= 3) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === relationOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="relationship" label="Relationship" />
          </div>
        </div>
         )}
         </>
      );
    case "member":
      return (
        <>
        {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="octicon:person-16"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {memberOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === memberOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="member" label="Member" />
          </div>
        </div>
        )}
        </>
      );
    case "phone":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="solar:phone-bold"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {phoneOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                               // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      } else if (index >= 2 && index <= 3) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === phoneOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="phone" label="Phone" />
          </div>
        </div>
         )}
         </>
      );
    case "email":
      return (
        <>
        {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="mdi-light:email"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {emailOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === emailOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="email" label="Email" />
          </div>
        </div>
        )}
        </>
      );
    case "number":
      return (
        <>
        {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position:"relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="bi:123"
                width="32"
                height="32"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {numberOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index >= 1 && index <= 3) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === numberOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="number" label="Number" />
          </div>
        </div>
        )}
        </>
      );
    case "link":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="solar:link-bold"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {linkOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      }  else if (index === linkOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="link" label="Link" />
          </div>
        </div>
         )}
         </>
      );
    case "image":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="mdi-light:image"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {imageOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === imageOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="image" label="Image" />
          </div>
        </div>
         )}
         </>
      );
    case "money":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="marketeq:money-dollar"
                width="32"
                height="32"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {moneyOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      }  else if (index >= 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                               // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="money" label="Money" />
          </div>
        </div>
         )}
         </>
      );
    case "progress":
      return (
        <>
        {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon 
              onClick={toggleDropdown}
                icon="iwwa:divide"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {progressOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      }  else if (index === progressOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="progress" label="Progress" />
          </div>
        </div>
        )}
        </>
      );
    case "calculation":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon 
              onClick={toggleDropdown}
                icon="carbon:calculation-alt"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {calOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === calOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="calculation" label="Calculation" />
          </div>
          <div
            style={{
              padding: "25px",
              width: "100%",
              display: "flex",
              flexDirection: "column",
            justifyContent: "flex-end",
              alignItems: "flex-end",
              gap: "8px"
            }}
          >
              <input
                style={{
                  borderStyle: "none",
                  padding: "10px",
                  background: "white",
                  width: "100%",
                  boxSizing: "border-box",
                }}
                type="text"
                value=""
                placeholder="Write your calculation here. Use @ to search for your variables"
              />
              <p style={{
                color: "#787486", textAlign: "end"
              }}>Tip: Type @ to reference other fields.</p>
          </div>
        </div>
         )}
         </>
      );
    case "location":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon 
              onClick={toggleDropdown}
                icon="mi:location"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {locationOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index >= 1 && index <= 2) {
                        // Radio inputs for the second and third elements
                        return (
                          <div style={sharedStyle}>
                            <div key={index}>
                              <label>
                                <input
                                  type="radio"
                                  name="textOptionsGroup" // Grouping the radio inputs
                                  style={{ marginRight: "10px" }}
                                />
                                {option.title}
                              </label>
                            </div>
                          </div>
                        );
                      } else if (index === 3) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      } else if (index === locationOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="location" label="Location" />
          </div>
        </div>
         )}
         </>
      );
    case "duration":
      return (
        <>
         {showField && (
        <div style={fieldStyle}
        onMouseEnter={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "block")}
          onMouseLeave={(e) => (e.currentTarget.querySelector(".cancel-btn").style.display = "none")}
        >
             {/* Cancel Button */}
          <button
            className="cancel-btn"
            style={btn}
            onClick={handleRemoveField}
          >
            <Icon icon="clarity:times-line" width="32" height="32"  style={{color: "black"}} />
          </button>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div style={iconContainerStyle}>
                <div style={{position: "relative"}}>
              <Icon
              onClick={toggleDropdown}
                icon="mingcute:time-duration-line"
                width="20"
                height="20"
                style={{ color: "black" }}
              />
               {isOpen && (
                  <div ref={dropdownRef} style={dropStyle}>
                    {durationOptions.map((option, index) => {
                      // Shared styles for consistent border-bottom
                      const sharedStyle = {
                        padding: "10px",
                        cursor: "pointer",
                        borderBottom:
                          option.border === true ? "1px solid #ddd" : "none", // Add border-bottom for all elements
                      };

                      // Render based on the index of the option
                      if (index === 0) {
                        // Checkbox for the first element
                        return (
                          <div key={index} style={sharedStyle}>
                            <label>
                              <input
                                type="checkbox"
                                style={{ marginRight: "10px" }}
                              />
                              {option.title}
                            </label>
                          </div>
                        );
                      }  else if (index === durationOptions.length - 1) {
                        // Text input for the last element
                        return (
                          <div
                            key={index}
                            style={{
                              ...sharedStyle,
                              borderBottom: "none", // Remove border-bottom for the last element if needed
                            }}
                          >
                            {option.title}
                          </div>
                        );
                      }
                    })}
                  </div>
                )}
              </div>
            </div>
            <SidebarItem type="duration" label="Duration" />
          </div>
        </div>
         )}
         </>
      );
    default:
      return null;
  }
};

const DropArea = ({ fields, onDrop }) => {
    const [showPopup, setShowPopup] = useState(false)
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "FIELD",
    drop: (item) => {
        if(item.type === "relationship") {
            setShowPopup(true)
        }
        onDrop(item.type) 
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        flex: 1,
        // padding: "20px",
        background: isOver ? "white" : "white",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "auto",
      }}
    >
      {fields.map((field, index) => (
        <div key={index} style={{}}>
          <FieldRenderer type={field} />
        </div>
      ))}
      {showPopup && (
        <div style={{display: "flex", justifyContent: "center",
            alignItems: "center", width: "100vw", 
            background: "rgba(0, 0, 0, 0.3)", // Transparent dark overlay
            backdropFilter: "blur(2px)",
            height: "100vh", 
            position: "fixed", zIndex: "9999",
            left: "0", top: "0", right: "0"}}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            position: "fixed",
            width: "600px",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "rgb(255, 255, 255)",
            padding: "30px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
          }}
        >
          <p style={{
            borderBottom: "1px solid rgb(214, 217, 222)",
          width: "100%",
          textAlign: "center",
            fontWeight: "600",
            paddingTop: "36px",
            paddingBottom: "20px"
          }}>Select apps to reference</p>
          <p style={{
            background: "rgba(204, 204, 204, 0.357)",
            padding: "13px",
            color: "rgb(23, 23, 23)",
            borderRadius: "5px"
          }}>Relationship fields help you link up 
            related items - between apps and even 
            workspaces. For example, you can link 
            your projects to your clients, 
            so one is accessible from the other.</p>
            <input style={{
                border: "1px solid rgb(214, 217, 222)",
                borderRadius: "6px",
                color: "rgb(33, 37, 41)",
                width:  "100%",
                padding: "15px"
            }}  type="text" placeholder="" />
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "20px"
            }}>
          <button
            onClick={() => setShowPopup(false)}
            style={{
                background: "rgb(255, 255, 255)",
                color: "rgb(39, 82, 231)",
                border: "1px solid rgb(255, 255, 255)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              width: "150px",
             padding: "15px",
             fontSize: "16px",
            
             borderRadius: "5px",
             
             
              cursor: "pointer",
            }}
          >
            Cancle
          </button>
          <button
            onClick={() => setShowPopup(false)}
            style={{
                background: "rgb(39, 82, 231)",
                color: "rgb(255, 255, 255)",
                border: "1px solid rgb(255, 255, 255)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              width: "150px",
             padding: "15px",
             fontSize: "16px",
             borderStyle: "none",
             borderRadius: "5px",
             
             
              cursor: "pointer",
            }}
          >
            Save
          </button>
          </div>
        </div>
        </div>
      )}
    </div>
  );
};

export default DropArea;
