"use client";
import React from "react";

const AddToCart: React.FC = () => {
  return (
    <div className="rootAddToCart">
      <button style={{ cursor: "pointer" }} onClick={() => alert("Hola")}>
        {" "}
        AddToCart Click
      </button>
    </div>
  );
};

export default AddToCart;
