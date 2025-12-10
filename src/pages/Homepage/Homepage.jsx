import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navbar from "../../components/Navbar/Navbar";
import UserCard from "../../components/UserCard";
import "./Homepage.css";
import { useState, useEffect } from "react";
import UserContext from "../../components/UserContext";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [userData, setUserData] = useState([
    { id: 1, name: "Ada" },
    { id: 2, name: "Tolu" },
    { id: 3, name: "Emeka" },
  ]);

  useEffect(()=>{
    setTimeout(()=>{
      setCount(count => count + 1)
    }, 1000)
  }, [count])
  const users = ["Alice", "Bob", "Donald"];
  const handleDecrement = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const name = "Over the var";
  let number = 0;

  const handleDelete = (id) => {
    // console.log(id)
    const updatedUser = userData.filter((user, index)=> {
      return index !== id
    })
    setUserData(updatedUser)
  }
  return (
    <div className="homepage-container">
      <Navbar firstItem="Jumia" secondItem="About" />
      return <h1>I've rendered {count} times!</h1>;
      <div className="homepage-card-div">
        {/* <Card title={'Card 1'} text='you need to add text' btn={'Join'} btnBg='red' color={'white'}/>
        <Card title='Card 2' text='If it is a variable' btn='Click' btnBg='blue' color={'white'}/>
        <Card title='Card 3' text='is a variable' btn='Click me' btnBg='green' color={'white'}/> */}
        {users.map((user, index, arr) => (
          <Card
            key={index}
            title={user}
            text="you need to add text"
            btn={"Join"}
            btnBg="red"
            color={"white"}
          />
        ))}
      </div>
      <ul>
        <li>{users[0]}</li>
        <li>{users[1]}</li>
        <li>{users[2]}</li>
        <li>{users[3]}</li>
      </ul>

      <ul>
        {users.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>

      {/* <h2 style={{fontSize: '40px', color: 'red'}}>Count: {number}</h2>
      <button onClick={()=> number += 1}>Increase</button>
      <button onClick={()=> number -= 1}>Decrease</button>
      <button onClick={()=> number = 0}>Reset</button> */}
      <h2 style={{ fontSize: "40px", color: "red" }}>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
      <button onClick={() => setCount(0)}>Reset</button>

      <>
        <h2>User List</h2>
        {userData.map((user, i) => (
          // <div key={i}>
          //   <p>{user.name}</p>
          //   <button onClick={()=> handleDelete(i)}>Delete</button>
          // </div>
          <UserCard key={i} user={user} onDelete={()=>handleDelete(i)}/>
        ))}
      </>
      <Hero />
      <Footer />
    </div>
  );
};

export default Homepage;
