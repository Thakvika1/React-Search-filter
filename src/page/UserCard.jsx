import Card from "../component/CardComponent";
import { userData } from "../data/userData";
import { useState } from "react";

function UserCard() {
  const [value, setValue] = useState("");

  // make value change everytime
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  // Filter data
  const fiterUser = userData.filter((item) => {
    return item.userName.toLowerCase().includes(value.toLowerCase());
  });

  // Map data
  const mapUser = fiterUser.map((item) => {
    return (
      <Card key={item.userId} userId={item.userId} userName={item.userName} />
    );
  });

  return (
    <>
      <div className="container">
        <input
          className="input"
          onChange={handleOnChange}
          type="text"
          placeholder="Search"
        />
        <div className="card-container">{mapUser}</div>
      </div>
    </>
  );
}

export default UserCard;
