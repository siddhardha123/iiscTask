import { useState } from "react";
import {useNavigate} from 'react-router-dom'
import CustomRadio from "../components/shared/CustomRadio";
const Home = () => {
    const navigate = useNavigate();
    //state variables 
  const [travelMode, setTravelMode] = useState("");
  const [distance, setDistance] = useState("");
  const [error,setError] = useState(false);

  //handle functions for button,radiobutton
  const handleTravelModeChange = (event) => {
    setTravelMode(event.target.value);
  };

  const handleDistanceChange = (event) => {
    setDistance(event.target.value);
  };
  const clickHandle = () =>{
      if(travelMode && distance){
         
        const data = {
            "travelMode" : travelMode,
            "distance" : distance
        }
        navigate("/modechoice",{state: data}) 
      }else{
         setError(true)  
      }
     
  }
  // options for travelmode and distance
  const travelModeOptions = [
    {
      value: "0",
      label: "Bus",
    },
    {
      value: "1",
      label: "Metro",
    },
    {
      value: "2",
      label: "Own Two-wheeler",
    },
    {
      value: "3",
      label: "Own Car",
    },
    {
      value: "4",
      label: "Walk / Bicycle",
    },
    {
      value: "5",
      label: "Auto",
    },
    {
      value: "6",
      label: "App based ride hailing cab services like Ola / Uber",
    },
  ];

  const distanceOptions = [
    {
      value: "0",
      label: "< 5 km",
    },
    {
      value: "1",
      label: "5 - 10 km",
    },
    {
      value: "2",
      label: "10- 15 km",
    },
    {
      value: "3",
      label: "15- 20 km",
    },
    {
      value: "4",
      label: "20- 25 km",
    },
    {
      value: "5",
      label: "> 25 km",
    },
  ];

 

  return (
    <div className="bg-gray-300 py-6">
   
    <div className="bg-gray-100 rounded-lg shadow-lg mx-auto max-w-xl  p-8">
    <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">Respondent Travel Profile</h2>
    <div className="my-8">
      <span className="font-bold text-lg mb-4 block text-gray-800">Q1: What is your most frequently used means of travel from your home to work location?</span>
      <CustomRadio options={travelModeOptions} name={"travelMode"} value={travelMode} onChange={handleTravelModeChange} buttonClassName="h-6 w-6 mr-4" labelClassName="text-lg" />
    </div>
    <div className="my-8">
      <span className="font-bold text-lg mb-4 block text-gray-800">Q2: What is the total distance between your home and workplace?</span>
      <CustomRadio options={distanceOptions} name={"distance"} value={distance} onChange={handleDistanceChange} buttonClassName="h-6 w-6 mr-4" labelClassName="text-lg" />
    </div>
    {error ? <p className="text-red-500 text-center mt-8 font-bold text-lg">Please answer both questions.</p> : ""}
    <div className="flex justify-center mt-10">
      <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 px-8 py-3 rounded-md text-white text-lg font-bold tracking-wide transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={clickHandle}>Next</button>
    </div>
   
  </div>
  </div>
  
  );
};

export default Home;
