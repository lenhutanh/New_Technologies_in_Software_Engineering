import React from "react";

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary";
};

export const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: "8px 16px",
                background: variant === "primary" ? "#007bff" : "#6c757d",
                border: "none",
                borderRadius: "4px",
                color: "#fff",
                cursor: "pointer"
            }}
        >
            {children}
        </button>
    );
};
