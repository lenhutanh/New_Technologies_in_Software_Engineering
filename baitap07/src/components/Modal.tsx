import React from "react";

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
    return (
        <div style={{
            position: "fixed",
            top: 0, left: 0, right: 0, bottom: 0,
            background: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{ background: "#fff", padding: "20px", borderRadius: "8px", minWidth: "300px" }}>
                {children}
                <button onClick={onClose} style={{ marginTop: "10px" }}>Đóng</button>
            </div>
        </div>
    );
};
