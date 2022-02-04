import React from "react";
import { FaCocktail } from "react-icons/fa";

const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p className="p__cormorant">{title}</p>
      <FaCocktail size={32} style={{ color: "var(--color-golden)" }} />
    </div>
  );
};

export default SubHeading;
