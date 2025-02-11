import Card from '../component/CardComponent';
import { userData } from '../data/userData';
import { useState } from 'react';


function UserCard() {

const [value, setValue] = useState('')

const handleOnChange = (event) => {
    // make value change everytime
    setValue(event.target.value);
  };
  
  const fiterUser = userData.filter((item) => {
    return item.userName.toLowerCase().includes(value.toLowerCase())
  })
  
  const mapUser = fiterUser.map((item) => {
    return (
      <Card 
        key={item.userId} 
        userId={item.userId} 
        userName={item.userName}
      />
    )
  })


  return (
    <>
        <input 
            onChange={handleOnChange} 
            type="text" value={value} 
            placeholder="Search" 
        />

     {mapUser}
    </>
  )
}

export default UserCard
