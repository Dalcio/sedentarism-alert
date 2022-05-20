import { useEffect, useState } from 'react';

const DEFAULT_DURACTION = 3 * 1000; // 3 seconds

const usePlaySound = (duraction: number = DEFAULT_DURACTION) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const playAudio = async () =>
    new Promise((resolve) => {
      if (audio) {
        audio.loop = true;
        audio.play();

        setTimeout(() => {
          resolve(audio.pause());
        }, duraction);
      }
    });

  useEffect(() => {
    if (!audio) {
      setAudio(new Audio('alert-sound.mp3'));
    }
  }, [audio]);

  return {
    playAudio,
  };
};

export default usePlaySound;
