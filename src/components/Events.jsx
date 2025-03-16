import React from "react";
import events from "./event_detail"
import { motion } from "framer-motion";

function Events() {
  const technical_games = events[0];
  const nontechnical_games = events[1];

  return (
   <>
   <div className="bg-black text-white py-12 px-4">
   <h1 className="text-center text-7xl md:text-5xl text-yellow-500 zain-bold">Events </h1>
   <div className="max-w-6xl mx-auto text-center zain-regular">
        <h3 className="text-2xl font-semibold text-yellow-500 mt-12 mb-6 ">Technical Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {technical_games.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-300"
            >
              <img src={game.image} alt={game.name} className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-lg font-semibold">{game.name}</h4>
            </motion.div>
          ))}
        </div>

        <h3 className="text-2xl font-semibold text-yellow-500 mt-12 mb-6">Non Technical Events</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {nontechnical_games.map((game, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center justify-center transition-all duration-300"
            >
              <img src={game.image} alt={game.name} className="w-20 h-20 mb-4 rounded-full" />
              <h4 className="text-lg font-semibold">{game.name}</h4>
            </motion.div>
          ))}
        </div>
        </div>
        </div>
   
   </>
  );
}

export default Events;
