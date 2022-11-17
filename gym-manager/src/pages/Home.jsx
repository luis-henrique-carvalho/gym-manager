import React from "react";
import Treino from '../assets/home.gif'


const Home = () => {
  return (
    <div className="flex flex-col items-center justify-evenly bg-white min-h-screen align-middle ">
     
        <h2 className="text-2xl text-green-500 font-bold">Bem Vindo ao Gym-Manager</h2>
        <div>
          <img src={Treino} alt="" />
          
        </div>
      
    </div>
  );
};

export default Home;
