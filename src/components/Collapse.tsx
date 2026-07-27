import { useState} from "react";

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
    <div className="collapse">
    <button type="button" onClick={toggleOpen} aria-expanded={isOpen}>
                {title}{isOpen ? <i className="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>} 
    </button>

      {isOpen && (
        <div >
          {description}
        </div>
      )}
    </div>
  );
}