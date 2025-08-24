import { useState, useEffect } from "react";
import './Carousel.css';
import Slcomm from "./Slcomm";

export default function ScrollSlider() {
   const [current, setCurrent] = useState(1000);
   let members = 10;
   useEffect(() => {
      const tickSpeed = 50;
      const tickAmount = 1;
      const interval = setInterval(() => {
         setCurrent((prev) => prev + tickAmount);
      }, tickSpeed);
      return () => clearInterval(interval);
   }, []);


   useEffect(() => {
      const scrollSpeed = 2;

      const handleScroll = (event) => {
         if (event.deltaY > 0) {
            setCurrent((prev) => prev + scrollSpeed);
         } else {
            setCurrent((prev) => (prev - scrollSpeed * 2 > 0 ? prev - scrollSpeed * 2 : 0));//i am so goated literally 
         }
      };

      window.addEventListener("wheel", handleScroll);
      return () => window.removeEventListener("wheel", handleScroll);
   }, []);




   function getPosition(id, crpos) {
      let len = 220;
      let t = crpos - id * len
      let dif = 900
      let per = 20
      if (t >= 20 && t <= per + dif) {
         return per;
      } else if (t > per + dif) {
         return t - dif;
      } else {
         return t;
      }
   }
   function getRotation(id, crpos) {
      let len = 220;
      let t = crpos - id * len
      let dif = 900
      let per = 20
      if (t >= 20 && t <= per + dif) {
         return (per + dif - t) * (-180 / dif);
      } else if (t > per + dif) {
         return 0;
      } else {
         return -180;
      }
   }
   function getTransparency(id, crpos) {
      let len = 220;
      let t = crpos - id * len
      let dif = 900
      let per = 20
      if (t >= 20 + len * 2 && t <= per + dif) {
         return (-per + t) * (1 / dif);
      } else if (t > per + dif) {
         return 1;
      } else {
         return 0;
      }
   }


   return (
      <section className="container">
         <div id="carousel">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
               <figure className=" bg-slate-50/10 rounded-[10px] p-2 bg-gradient-to-b from-black/50 to-black/0 origin-top "
                  key={id}
                  style={{
                     WebkitTransform: `rotateY(${getRotation(id, current)}deg) translateX(${getPosition(id, current)}px) translateZ(288px)`,
                     transform: `rotateY(${getRotation(id, current)}deg) translateX(${getPosition(id, current)}px) translateZ(288px)`,
                     opacity: `${getTransparency(id, current)}`,
                     background: "linear-gradient(to bottom, rgba(0,10,0,0.6) 10%, rgba(0,255,0,0) 50%)",
                     scale: `0.7`,

                  }}
               >
                  <div
                     className="absolute inset-0 rounded-[10px] pointer-events-none border-2 border-emerald-500/20"
                     style={{
                        WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
                        WebkitMaskRepeat: "no-repeat",
                        WebkitMaskSize: "100% 100%",
                        maskImage: "linear-gradient(to bottom, rgba(255,255,255,1) 10%, rgba(0,0,0,0) 70%)",
                        maskRepeat: "no-repeat",
                        maskSize: "100% 100%",
                     }}
                  />


                  <Slcomm id={id + 1}  />
               </figure>
            ))}
         </div>
      </section>
   );
}