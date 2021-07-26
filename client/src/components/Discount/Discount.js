import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./Discount.css";
const Discount = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const countdownDate = new Date("August 08, 2021 00:00:00").getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <section className="discount">
      <div className="discount_details">
        <div className="timer">
          <div className="days">
            <span>{timerDays} </span> Days
          </div>
          <div className="hours">
            <span>{timerHours}</span>Hours
          </div>
          <div className="minutes">
            <span>{timerMinutes}</span> Minutes
          </div>
          <div className="seconds">
            <span>{timerSeconds}</span> Seconds
          </div>
        </div>
        <h2>20% OFF FOR ALL T-SHIRT COLLECTION</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro
          quisquam, odit assumenda sit modi commodi esse necessitatibus
          temporibus aperiam veritatis eveniet!
        </p>
        <button>view more</button>
      </div>
    </section>
  );
};

export default Discount;
