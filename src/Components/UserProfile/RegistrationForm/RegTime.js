import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Registration.css";

const RegTime = ({ setIsTimeOver, isTimeOver }) => {
  //   const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds

  const token = JSON.parse(localStorage.getItem("UserDetails"));

  const minuteSeconds = 60;
  const hourSeconds = 3600;
  const daySeconds = 86400;
  const timerProps = {
    isPlaying: true,
    size: 90,
    strokeWidth: 6,
  };
  const renderTime = (dimension, time) => {
    return (
      <div className="time-wrapper">
        <div className="time">{time}</div>
        <div>{dimension}</div>
      </div>
    );
  };

  const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
  const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
  const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
  const getTimeDays = (time) => (time / daySeconds) | 0;

  let endDate = token?.student?.RegDate?.endtDate;
  let endDateArray = endDate?.split("-");
  let year = parseInt(endDate ? endDateArray[0] : 0);
  let month = parseInt(endDate ? endDateArray[1] : 0);
  let day = parseInt(endDate ? endDateArray[2] : 0);
  const d = new Date();
  const d1 = new Date();
  d1.setFullYear(year);
  d1.setMonth(month - 1);
  d1.setDate(day);
  d1.setHours(0);
  d1.setMinutes(0);
  d1.setSeconds(0);
  d1.setMilliseconds(0);
  let remainingTime = 0;
  if (d1 - d > 0 && endDate) {
    remainingTime = d1 / 1000 - d / 1000;
    setIsTimeOver(false);
  } else if (d1 - d < 0 && endDate) {
    setIsTimeOver(true);
  }

  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  return (
    <div className="timeSec mx-10">
      <CountdownCircleTimer
        {...timerProps}
        colors="#7E2E84"
        duration={daysDuration}
        initialRemainingTime={remainingTime}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Days", getTimeDays(daysDuration - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#D14081"
        duration={daySeconds}
        initialRemainingTime={remainingTime % daySeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > hourSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Hours", getTimeHours(daySeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#EF798A"
        duration={hourSeconds}
        initialRemainingTime={remainingTime % hourSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > minuteSeconds,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Min", getTimeMinutes(hourSeconds - elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
      <CountdownCircleTimer
        {...timerProps}
        colors="#218380"
        duration={minuteSeconds}
        initialRemainingTime={remainingTime % minuteSeconds}
        onComplete={(totalElapsedTime) => ({
          shouldRepeat: remainingTime - totalElapsedTime > 0,
        })}
      >
        {({ elapsedTime, color }) => (
          <span style={{ color }}>
            {renderTime("Sec", getTimeSeconds(elapsedTime))}
          </span>
        )}
      </CountdownCircleTimer>
    </div>
  );
};

export default RegTime;
