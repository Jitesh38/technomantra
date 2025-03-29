import React from "react";
import Ecertificate from "../ecertificate.png";
import data from "./participants";

function Certificate() {
  const [game, setGame] = React.useState("Shaan-e-Technomantra");
  const [name, setName] = React.useState("");
  const igame = data.find((idata) => idata.game === game);
  const generateCertificate = () => {
    console.log("function invoked ", Ecertificate);
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape" });
    const canvas = document.getElementById("certificateCanvas");
    const ctx = canvas.getContext("2d");
    const participant = name;
    const gamename = game;

    if (!gamename) {
      alert("Please select the game");
      return;
    }
    if (!participant) {
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
      ctx.fillText(participant, canvas.width / 2, canvas.height / 2 + 15);
      ctx.fillText(gamename, canvas.width / 2, canvas.height / 2 + 85);

      const imgData = canvas.toDataURL("image/png");
      doc.addImage(imgData, "PNG", 10, 10, 280, 200);
      doc.save(`${name}_Certificate.pdf`);
    };
  };
  return (
    <div className="flex justify-start items-center flex-col text-white zain-regular min-h-[80vh] w-full gap-5 px-4">

      <h2 className=" text-2xl md:text-3xl m-3">Generate Your Certificate</h2>

      <select
        name="game"
        id="game"
        title="Select the game"
        className="text-black md:text-xl sm:text-lg rounded-md px-2 py-1"
        onChange={(e) => setGame(e.target.value)}
      >
        {data.map((idata) => (
          <option value={idata.game} key={idata.id}>
            {idata.game}
          </option>
        ))}
      </select>

      <select
        name="participant"
        id="participant"
        title="Select name"
        className="text-black md:text-xl sm:text-lg rounded-md px-2 py-1 mt-4"
        onChange={(e) => setName(e.target.value)}
      >
        {igame.participant.map((idata) => (
          <option value={idata} key={idata}>
            {idata}
          </option>
        ))}
      </select>

      <br />
      <button
        onClick={generateCertificate}
        className="px-5 p-2 border text-2xl border-slate-400 bg-gray-950 text-gray-300 zain-bold rounded-xl"
      >
        Download Certificate
      </button>

      <canvas id="certificateCanvas" className="hidden"></canvas>
      <p>Developed by <a href="https://portfolio-jitesh.vercel.app/"><code> &lt;Jitesh /&gt;</code></a></p>
    </div>
  );
}

export default Certificate;
