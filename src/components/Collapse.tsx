import { useState} from "react";
import "../styles/Detail.scss";


type CollapseProps = {
  title: string;
  children: React.ReactNode;
};

// fonction pour le collapse
export default function Collapse({ title, children }: CollapseProps) {

// variable par défaut false et fonction pour changer l'état du collapse
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse" onClick={() => setIsOpen(!isOpen)}>
      <div className="collapsediv">
        <p aria-expanded={isOpen}>{title}</p>
        <i className={`fa-solid fa-arrow-${isOpen ? "up" : "down"}`}></i>
      </div>

      {isOpen && <div className="content">{children}</div>}
    </div>
  );
}