"use client";
import React from "react";
import AddToCart from "./AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard: React.FC = () => {
  return (
    <div className={styles.card}>
      ProductCard
      <AddToCart />
    </div>
  );
};

export default ProductCard;
