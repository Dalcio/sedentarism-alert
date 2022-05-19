import { useState, useEffect } from 'react';

const useCounter = (DEFAULT_TIME: number) => {
  const [seconds, setSeconds] = useState<number>(DEFAULT_TIME);
  const [started, setStarted] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  const stopCounter = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setSeconds(DEFAULT_TIME);
      setIntervalId(null);
      setStarted(false);
    }
  };

  const startCounter = () => {
    setSeconds(DEFAULT_TIME);
    setStarted(true);
  };

  useEffect(() => {
    if (started && !intervalId) {
      const interval = setInterval(() => {
        setSeconds((prevSec) => prevSec - 1);
      }, 1000); // 1second

      setIntervalId(interval);
    }
  }, [started, intervalId]);

  useEffect(() => {
    if (intervalId && seconds === 0) {
      clearInterval(intervalId);
      setSeconds(DEFAULT_TIME);
      setIntervalId(null);
      setStarted(false);
    }
  }, [seconds, DEFAULT_TIME, intervalId]);

  return {
    stopCounter,
    startCounter,
    seconds,
    started,
  };
};

export default useCounter;
