import { useState} from "react";
import "../styles/Detail.scss";


type CollapseProps = {
  title: string;
  children: React.ReactNode;
};


export default function Collapse({ title, children }: CollapseProps) {
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