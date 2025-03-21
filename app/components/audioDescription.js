"use client";
import { PiSpeakerHighFill, PiSpeakerXFill } from "react-icons/pi";
import { useEffect, useState } from "react";
import { Button } from "@heroui/react";

export function AudioDescription() {
  const [text, setText] = useState(null);
  const [speaking, setSpeaking] = useState(false);
  const [synth, setSynth] = useState(null);

  useEffect(() => {
    setSynth(window.speechSynthesis);
    setText(document.body.innerText);
  }, []);

  const startSpeech = () => {
    const utterThis = new SpeechSynthesisUtterance(text);
    synth.speak(utterThis);
    setSpeaking(true);
  };

  const stopSpeech = () => {
    synth.cancel();
    setSpeaking(false);
  };

  return (
    <>
      {speaking ? (
        <Button
          isIconOnly
          onPress={() => stopSpeech()}
          className="absolute top-0 right-0 bg-transparent"
          is
        >
          <PiSpeakerXFill size={48} className="text-eywnavy-1000" />
        </Button>
      ) : (
        <Button
          isIconOnly
          onPress={() => startSpeech()}
          className="absolute top-0 right-0 bg-transparent"
          is
        >
          <PiSpeakerHighFill size={48} className="text-eywnavy-1000" />
        </Button>
      )}
    </>
  );
}
