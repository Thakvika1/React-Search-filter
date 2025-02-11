
import "../style/card.css"

function Card({ userName, userId }) {
    return (
      <div className="card">
        <h2>{userName}</h2>
        <p>ID: {userId}</p>
      </div>
    );
  }
  
  export default Card;