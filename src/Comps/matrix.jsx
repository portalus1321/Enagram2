import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const canvasRef = useRef(null);

  useEffect(() => {
    /* SETTINGS */
    const baseFontSize = 10;
    const speedMin = 1;
    const speedMax = 2;
    const tailMin = 2;
    const tailMax = 10;
    const headColor = "rgba(16, 185, 129, 1)";
    const tailColorBase = "0, 0, 0";
    const frameDelay = 10;
    const fontScaleFactor = 6.8;
    const scaleFontWithSpeed = true;

    const streamActiveProbability = 0.1;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const cols = Math.floor(w / baseFontSize);

    // yvela qolumniiiistvis aray
    const streams = Array.from({ length: cols }, () => {
      const speed = speedMin + Math.random() * (speedMax - speedMin);
      const fontSize = scaleFontWithSpeed
        ? baseFontSize + (speed - speedMin) * fontScaleFactor
        : baseFontSize;
      return {
        y: Math.random() * h,
        speed,
        tail: tailMin + Math.floor(Math.random() * (tailMax - tailMin + 1)),
        fontSize,
        active: Math.random() < streamActiveProbability,
      };
    });

    function draw() {
      ctx.clearRect(0, 0, w, h);
      ctx.textBaseline = "top";

      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

      streams.forEach((stream, i) => {
        if (!stream.active) return; // Skip inactive streams

        ctx.font = `${stream.fontSize}px 'protos', monospace`;

        for (let j = stream.tail; j >= 0; j--) {
          const char = letters.charAt(Math.floor(Math.random() * letters.length));
          const opacity = 1 - j / (stream.tail + 1);

          if (j === 0) {
            ctx.fillStyle = headColor;
          } else {
            ctx.fillStyle = `rgba(${tailColorBase}, ${opacity})`;
          }

          const y = stream.y - j * stream.fontSize;
          if (y >= 0) ctx.fillText(char, i * baseFontSize, y);
        }

        stream.y += stream.speed;

        if (stream.y > h + stream.tail * stream.fontSize) {
          stream.speed = speedMin + Math.random() * (speedMax - speedMin);
          stream.fontSize = scaleFontWithSpeed
            ? baseFontSize + (stream.speed - speedMin) * fontScaleFactor
            : baseFontSize;
          stream.tail = tailMin + Math.floor(Math.random() * (tailMax - tailMin + 1));
          stream.y = -Math.random() * 200;

          // Reactivate stream based on probability
          stream.active = Math.random() < streamActiveProbability;
        }
      });
    }

    const interval = setInterval(draw, frameDelay);

    const handleResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: "block",
        position: "relative",
        top: 0,
        left: 0,
        pointerEvents: "none",
        
      }}
    />
  );
}
