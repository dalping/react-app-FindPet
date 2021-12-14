import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "black",
    padding: "20px",
    fontSize: "0.8rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div style={footerStyle}>
      COPYRIGHT 2021 KBK | DATA FROM 농림축산식품부 농림축산검역본부
    </div>
  );
}

export default Footer;
