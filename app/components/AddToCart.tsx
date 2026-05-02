"use client";
import React from "react";

interface DataProps {
  data: { content: string; secretKey: string | undefined };
}

const AddToCart: React.FC<DataProps> = ({ data }) => {
  return (
    <div className="rootAddToCart">
      <button style={{ cursor: "pointer" }} onClick={() => alert("Hola")}>
        AddToCart Click
      </button>

      <p>{data.content}: ***** </p>
    </div>
  );
};

export default AddToCart;
