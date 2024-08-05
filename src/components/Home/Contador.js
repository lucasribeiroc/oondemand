import React, { useState, useEffect } from "react";
import Image from "next/image";

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-center">{label}</div>
    <div
      style={{
        fontSize: "59.42px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: "400",
        color: "white",
      }}
    >
      {value}
    </div>
  </div>
);

const TimerDisplay = ({ time }) => (
  <div className="flex flex-col items-center justify-center ml-auto text-white text-[11.55px] font-light font-poppins pr-5 mr-12">
    <div className="flex space-x-4">
      <TimeUnit label="Dias" value={time.days} />
      <div className="flex items-center">
        <div
          style={{
            fontSize: "59.42px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            color: "white",
            marginTop: "10px",
          }}
        >
          :
        </div>
      </div>
      <TimeUnit label="Horas" value={time.hours} />
      <div className="flex items-center">
        <div
          style={{
            fontSize: "59.42px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            color: "white",
            marginTop: "10px",
          }}
        >
          :
        </div>
      </div>
      <TimeUnit label="Minutos" value={time.minutes} />
      <div className="flex items-center">
        <div
          style={{
            fontSize: "59.42px",
            fontFamily: "Poppins, sans-serif",
            fontWeight: "400",
            color: "white",
            marginTop: "10px",
          }}
        >
          :
        </div>
      </div>
      <TimeUnit label="Segundos" value={time.seconds} />
    </div>
    <div
      className="mt-1 text-[#00E2F4] font-semibold"
      style={{
        fontSize: "19.81px",
        fontFamily: "Montserrat, sans-serif",
        letterSpacing: "0.105em",
        marginLeft: "10px",
      }}
    >
      DE BUROCRACIA DESAPARECERAM
    </div>
  </div>
);

const Contador = () => {
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const incrementTime = () => {
      setTime((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        seconds = parseInt(seconds) + 1;
        if (seconds === 60) {
          seconds = 0;
          minutes = parseInt(minutes) + 1;
        }
        if (minutes === 60) {
          minutes = 0;
          hours = parseInt(hours) + 1;
        }
        if (hours === 24) {
          hours = 0;
          days = parseInt(days) + 1;
        }

        return {
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        };
      });
    };

    const intervalId = setInterval(incrementTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="flex items-center justify-start p-8"
      style={{ backgroundColor: "#001E27" }}
    >
      <div className="flex items-center w-full">
        <Image src="/cartola.png" alt="Cartola" width={362} height={362} />
        <div
          className="ml-[55px] pl-4 text-[#00E2F4] font-bold text-[36px] uppercase leading-none"
          style={{ letterSpacing: "0.105em" }}
        >
          <div>Num Passe</div>
          <div>De Mágica</div>
        </div>
        <TimerDisplay time={time} />
      </div>
    </div>
  );
};

export default Contador;
