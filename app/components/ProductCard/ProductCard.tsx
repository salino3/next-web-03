import React from "react";
import { getDataFromDB } from "@/lib/database-logic";
import AddToCart from "../AddToCart";
import styles from "./ProductCard.module.css";

const ProductCard: React.FC = async () => {
  const data = await getDataFromDB();
  return (
    <div className={styles.card}>
      ProductCard
      <AddToCart data={data} />
    </div>
  );
};

export default ProductCard;
