import React from "react";
import Ecertificate from "../assets/ecertificate.png";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  


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
    <div className="flex justify-start items-center flex-col text-white zain-regular min-h-[80vh] w-full gap-5">
      <h2 className="text-6xl">Generate Your Certificate</h2>
      <Input  type="text" id="name" placeholder="Enter your name" required className="lg:max-w-xl md:max-w-xs h-10 p-2 lg:text-3xl md:text-2xl sm:text-xl text-lg"/>
      <br />
      <select
        name="game"
        id="game"
        title="Select the game"
        className="text-black lg:text-2xl md:text-xl sm:text-lg text-sm"
      >
        <option value="Shaan-e-technomantra">Shaan-e-technomantra</option>
        <option value="Tech Rangoli">Tech Rangoli</option>
        <option value="Guess the Mess">Guess the Mess</option>
      </select>
      <br />
      <Button onClick={generateCertificate} className="text-3xl px-7 py-5" >Download Certificate</Button>

      <canvas id="certificateCanvas" className="hidden"></canvas>
    </div>
  );
}

export default Certificate;
