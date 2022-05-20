import { useState, useEffect } from 'react';
import usePlaySound from './usePlaySound';

const useCounter = (DEFAULT_TIME: number) => {
  const [seconds, setSeconds] = useState<number>(DEFAULT_TIME);
  const [started, setStarted] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);

  const { playAudio } = usePlaySound();

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
      const stopCounter = async () => {
        clearInterval(intervalId);
        await playAudio();
        setIntervalId(null);
        setSeconds(DEFAULT_TIME);
        setStarted(false);
      };

      stopCounter();
    }
  }, [seconds, DEFAULT_TIME, intervalId, playAudio]);

  return {
    stopCounter,
    startCounter,
    seconds,
    started,
  };
};

export default useCounter;
