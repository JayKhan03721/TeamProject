import "./cards.css";

const Cards = ({img, children}) => {
  return (
    <div className="cardCon">
      <div className="cardContent">
        <span className="image">{img}</span>
        {children}
      </div>
      <a href="#">Apply</a>
    </div>
  );
};
export default Cards;
