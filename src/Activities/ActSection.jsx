import Activity from "./Activity.jsx";
import { useState, useRef } from "react";
import style from "./ActSection.module.css"; // Importing CSS module

function ActSection(props) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.mainDiv}>
      <h2 onClick={toggleAccordion} className={style.accordionHeader}>
        {props.title}
        <span className={style.accordionIcon}>{isOpen ? "-" : "+"}</span>
      </h2>

      <div
        ref={contentRef}
        className={`${style.accordionContent} ${
          isOpen ? style.accordionContentOpen : ""
        }`}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        {props.content.map((child, index) => (
          <div key={index}>
            <Activity
              image={child.img}
              title={child.title}
              description={child.description}
              link={child.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActSection;
