import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
    return (
        <div
            className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
};

export default Card;
