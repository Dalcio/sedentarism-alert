import { useState, useEffect } from 'react';
import usePlaySound from './usePlaySound';

const useCounter = (DEFAULT_TIME: number) => {
  const [seconds, setSeconds] = useState<number>(DEFAULT_TIME);
  const [time, setTime] = useState<number>(DEFAULT_TIME);
  const [started, setStarted] = useState<boolean>(false);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  const [repeat, setRepeat] = useState<boolean>(false);

  const { playAudio } = usePlaySound();

  const handleReapeat = () => {
    setRepeat((prev) => !prev);
  };

  const stopCounter = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setSeconds(time);
      setIntervalId(null);
      setStarted(false);
    }
  };

  const startCounter = () => {
    setSeconds(time);
    setStarted(true);
  };

  useEffect(() => {
    if (started && !intervalId) {
      const interval = setInterval(() => {
        setSeconds((prevSec) => (prevSec - 1 <= 0 ? 0 : prevSec - 1));
      }, 1000); // 1second

      setIntervalId(interval);
    }
  }, [started, intervalId]);

  useEffect(() => {
    if (intervalId && seconds === 0) {
      if (repeat) {
        const restartCounter = async () => {
          await playAudio();
          setSeconds(time);
          setStarted(true);
        };
        restartCounter();
      } else {
        const stopCounter = async () => {
          clearInterval(intervalId);
          await playAudio();
          setIntervalId(null);
          setSeconds(time);
          setStarted(false);
        };
        stopCounter();
      }
    }
  }, [seconds, DEFAULT_TIME, repeat, time, intervalId, playAudio]);

  return {
    stopCounter,
    startCounter,
    seconds,
    started,
    setSeconds,
    setTime,
    repeat,
    handleReapeat,
  };
};

export default useCounter;
