import React, { useState, useEffect } from "react";

const TimeUnit = ({ label, value }) => (
  <div className="flex flex-col items-center text-center md:text-left">
    <div>{label}</div>
    <div className="text-[40px] md:text-[59.42px] font-poppins font-normal text-white">
      {value}
    </div>
  </div>
);

const TimerDisplay = ({ time }) => (
  <div className="flex flex-col items-center justify-center mt-5 md:mt-0 text-white text-[11.55px] font-light font-poppins text-center">
    <div className="flex space-x-4">
      <TimeUnit label="Dias" value={time.days} />
      <div className="flex items-center">
        <div className="text-[40px] md:text-[59.42px] font-poppins font-normal text-white mt-[10px]">
          :
        </div>
      </div>
      <TimeUnit label="Horas" value={time.hours} />
      <div className="flex items-center">
        <div className="text-[40px] md:text-[59.42px] font-poppins font-normal text-white mt-[10px]">
          :
        </div>
      </div>
      <TimeUnit label="Minutos" value={time.minutes} />
      <div className="flex items-center">
        <div className="text-[40px] md:text-[59.42px] font-poppins font-normal text-white mt-[10px]">
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
      className="flex flex-col items-center justify-center p-8 pt-16 pb-16 md:pt-8 md:pb-8"
      style={{ backgroundColor: "#001E27" }}
    >
      <div className="flex flex-col items-center w-full text-center mt-8">
        <div className="text-[#00E2F4] font-bold text-[24px] md:text-[36px] uppercase leading-none tracking-[0.105em] mb-8">
          Num Passe De Mágica
        </div>
        <TimerDisplay time={time} />
      </div>
    </div>
  );
};

export default Contador;
