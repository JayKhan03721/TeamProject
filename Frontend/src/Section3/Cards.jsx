import "./cards.css";

const Cards = ({ img, children }) => {
  return (
    <div className="cardCon">
      <div className="cardContent">
        <div className="image-container">{img}</div>  
        {children}
      </div>
      <a href="#">Apply</a>
    </div>
  );
};
export default Cards;
