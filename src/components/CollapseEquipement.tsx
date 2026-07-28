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
        <div className="collapse"  onClick={toggleOpen}>
            <div className="collapsediv">
                <p aria-expanded={isOpen}>{title}</p>
                {isOpen ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}  
            </div>

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