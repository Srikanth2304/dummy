import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileCard from './ProfileCard'
import Sample from './sample'
import Count from './Count'
import FormFill from './FormFill'
import ColourPicker from './ColourPicker'

function App() {
  // const person = {name: "Alice", age: 21}
  // const{name, age} = person;
  // const hobbie1 = ["Reading", "Swimming", "Coding"];
  const onclickalert = (hobby) =>{
    alert(`You clicked on: ${hobby}`);
  };

  const Aliceprofile ={
    name :"ALice",
     age:21,
      num:6,
       hobbies:["swimming","cooking"],
        onHobbyClick:{onclickalert}
  }

  const Johnprofile ={
    name :"John Doe",
     age:22,
      num:2,
       hobbies:["coding","reading"],
        onHobbyClick:{onclickalert}
  }
  return (
    <div>
      {/* <ProfileCard {...Aliceprofile}/> */}
      {/* <ProfileCard {...Johnprofile}/> */}
      {/* <Sample/> */}
      {/* <Count/> */}
      {/* <FormFill/> */}
      <ColourPicker/>
    </div>  
  );
}

export default App
 