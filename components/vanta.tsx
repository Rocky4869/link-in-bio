"use client";

import { useState, useEffect, useRef } from "react";

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script ${src}`));
    document.body.appendChild(script);
  });
};

const Vanta = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);

  useEffect(() => {
    const loadVanta = async () => {
      try {
        await loadScript(
          "https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        );
        await loadScript(
          "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"
        );

        setVantaEffect(
          // @ts-ignore
          VANTA.BIRDS({
            el: myRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundAlpha: 0.0,
            wingSpan: 40.0,
            separation: 20.0,
            alignment: 60.0,
            cohesion: 5.0,
            quantity: 3.0,
          })
        );
      } catch (error) {
        console.error(error);
      }
    };

    if (!vantaEffect) {
      loadVanta();
    }
  }, [vantaEffect]);

  return (
    <div
      ref={myRef}
      id="vanta"
      style={{ width: "100%", height: "100vh" }}
    ></div>
  );
};

export default Vanta;
