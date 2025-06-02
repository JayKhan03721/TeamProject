import "./cards.css";

const Cards = ({ img, children, className }) => {
  return (
    <div className={`cardCon ${className}`}>
      <div className="cardContent">
        <div className="image-container">{img}</div>  
        {children}
      </div>
      <a href="#">Apply</a>
    </div>
  );
};
export default Cards;
