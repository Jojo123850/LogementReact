import { useState } from "react";
import "../styles/Detail.scss";

type CollapseEquipementProps = {
    title: string;
    equipments: string[];
};

export default function CollapseEq({ title, equipments }: CollapseEquipementProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="collapse">
            <button type="button" onClick={toggleOpen} aria-expanded={isOpen}>
                {title}{isOpen ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>} 
            </button>

            {isOpen && (
                <ul>
                    {equipments.map((equip) => (
                        <li key={equip}>{equip}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}