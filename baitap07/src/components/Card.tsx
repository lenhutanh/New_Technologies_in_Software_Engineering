import React from "react";

type CardProps = {
    children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ children }) => {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "16px",
            marginBottom: "8px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
            {children}
        </div>
    );
};
