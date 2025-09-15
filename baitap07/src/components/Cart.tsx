import React, { createContext, useContext, useState } from "react";

type Item = { id: string; name: string; price: number; quantity: number };

type CartContextType = {
    items: Item[];
    addItem: (item: Item) => void;
    removeItem: (id: string) => void;
    updateItem: (id: string, quantity: number) => void;
};

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [items, setItems] = useState<Item[]>([]);

    const addItem = (item: Item) => setItems([...items, item]);
    const removeItem = (id: string) => setItems(items.filter(i => i.id !== id));
    const updateItem = (id: string, quantity: number) =>
        setItems(items.map(i => i.id === id ? { ...i, quantity } : i));

    return (
        <CartContext.Provider value={{ items, addItem, removeItem, updateItem }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const ctx = useContext(CartContext);
    if (!ctx) throw new Error("useCart phải được dùng trong CartProvider");
    return ctx;
};
