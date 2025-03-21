import React from "react";
import Ecertificate from "../ecertificate.png";
import { Button } from "@/components/ui/button";

function Certificate() {
  const generateCertificate = () => {
    console.log("function invoked ", Ecertificate);
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape" });
    const canvas = document.getElementById("certificateCanvas");
    const ctx = canvas.getContext("2d");
    // const name = document.getElementById("name").value;
    const name = "Jitesh";
    const game = document.getElementById("game").value;

    if (!game) {
      alert("Please select the game");
      return;
    }
    if (!name) {
      alert("Please enter your name");
      return;
    }

    const img = new Image();
    img.src = Ecertificate; // Replace with your exported Figma image
    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);

      ctx.font = "40px Arial";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.fillText(name, canvas.width / 2, canvas.height / 2 + 15);
      ctx.fillText(game, canvas.width / 2, canvas.height / 2 + 85);

      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 10, 280, 200);
      doc.save(`${name}_Certificate.pdf`);
    };
  };
  return (
    <div className="flex justify-start items-center flex-col text-white zain-regular min-h-[80vh] w-full gap-5 px-4">
      <marquee behavior="" direction="rtl" className="text-red-500 bg-white">NOTE:Certificate will be downloadable after Technomantra</marquee>
      <h2 className=" text-2xl md:text-3xl mt-3">
        Generate Your Certificate
      </h2>

      <input
        type="text"
        id="name"
        placeholder="Enter your name"
        className="h-8 p-2 w-60 bg-black text-white border border-white rounded-md"
      />
      <br />
      <select
        name="game"
        id="game"
        title="Select the game"
        className="text-black md:text-xl sm:text-lg text-sm"
      >
        <option value="Shaan-e-technomantra">Shaan-e-technomantra</option>
        <option value="Tech Rangoli">Tech Rangoli</option>
        <option value="Guess the Mess">Guess the Mess</option>
      </select>
      <br />
      <button onClick={generateCertificate} className="px-5 p-2 border text-2xl border-slate-400 bg-gray-950 text-gray-300 zain-bold rounded-xl">
        Download Certificate
      </button>

      <canvas id="certificateCanvas" className="hidden"></canvas>
    </div>
  );
}

export default Certificate;
