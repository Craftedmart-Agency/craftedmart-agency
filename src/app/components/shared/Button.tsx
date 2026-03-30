"use client"
import React from "react";
import "./Button.css";

type ButtonProps = {
  text?: string;
  disabled?: boolean;
};

const Button = ({ text = 'Proceed', disabled } : ButtonProps) => {
  return (
    <button
      className={`custom-button`}
      style={{ "--content": `'${text}'` } as React.CSSProperties}
      disabled={disabled}
    >
      <div className="left"></div>
        {text}
      <div className="right"></div>
    </button>
  );
};

export default Button;

