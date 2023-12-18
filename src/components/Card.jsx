import { Link } from "react-router-dom";
import "./styles/card.css";

const Card = ({ path, icon, text, img, isIcon }) => {
  return (
    <div className="card">
      <Link to={path} className="text-center">
        {isIcon ? (
          <span className="block w-fit mx-auto text-center text-3xl">{icon}</span>
        ) : (
          img && <img src={img} alt={text} className="card_img" />
        )}
        <p className="text-2xl font-bold">{text}</p>
      </Link>
    </div>
  );
};

export default Card;
