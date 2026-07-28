import { useState} from "react";
import "../styles/Detail.scss";

type CollapseCard = {
    description: string;
    title: string

}
export default function Collapse({ description, title }: CollapseCard) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse"  onClick={toggleOpen} >
        <div className="collapsediv">
            <p aria-expanded={isOpen}>{title}</p>
            {isOpen ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>} 
        </div>


        {isOpen && (<div className="desc" >{description}</div>
      )}
    </div>
  );
}