import React, { useState, useEffect } from "react";
import Image from "next/image";

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center">
    <div className="text-center">{label}</div>
    <div className="text-[59.42px] font-poppins font-normal text-white">
      {value}
    </div>
  </div>
);

const TimerDisplay = ({ time }) => (
  <div className="flex flex-col items-center justify-center ml-auto text-white text-[11.55px] font-light font-poppins pr-5 md:mr-12">
    <div className="flex space-x-4">
      <TimeUnit label="Dias" value={time.days} />
      <div className="flex items-center">
        <div className="text-[59.42px] font-poppins font-normal text-white mt-[10px]">
          :
        </div>
      </div>
      <TimeUnit label="Horas" value={time.hours} />
      <div className="flex items-center">
        <div className="text-[59.42px] font-poppins font-normal text-white mt-[10px]">
          :
        </div>
      </div>
      <TimeUnit label="Minutos" value={time.minutes} />
      <div className="flex items-center">
        <div className="text-[59.42px] font-poppins font-normal text-white mt-[10px]">
          :
        </div>
      </div>
      <TimeUnit label="Segundos" value={time.seconds} />
    </div>
    <div
      className="mt-1 text-[#00E2F4] font-semibold whitespace-nowrap"
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
      className="flex flex-col md:flex-row items-center justify-center md:justify-start p-8 h-[calc(100vh-100px)] md:h-auto"
      style={{ backgroundColor: "#001E27" }}
    >
      <div className="flex flex-col md:flex-row items-center w-full">
        <div className="hidden md:block">
          <Image src="/cartola.png" alt="Cartola" width={362} height={362} />
        </div>
        <div className="ml-0 md:ml-[55px] pl-4 text-[#00E2F4] font-bold text-[36px] uppercase leading-none tracking-[0.105em] text-center md:text-left whitespace-nowrap">
          <div>Num Passe</div>
          <div>De Mágica</div>
        </div>
        <TimerDisplay time={time} />
      </div>
    </div>
  );
};

export default Contador;
