import { useEffect, useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import styles from "./Slider.module.css";

interface idProps {
  detailImg?: string[];
}
let slideLength: number;
function Slider({ detailImg }: idProps) {
  const [current, setCurrent] = useState<number>(0);
  const slideRef = useRef<HTMLDivElement>(null);

  // undefined
  if (detailImg?.length != undefined) {
    slideLength = detailImg.length;
  }
  console.log(slideLength);

  function prevSlide() {
    if (current === 0) {
      setCurrent(slideLength);
    } else {
      setCurrent(current - 1);
    }
  }
  function nextSlide() {
    if (current >= slideLength) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }
  console.log(current);

  // useEffect(() => {
  //   slideRef.current.style.transition = "all 0.5s ease-in-out";
  //   slideRef.current.style.transform = `translateX(-${current}00vw)`;
  // }, [current]);

  return (
    <div className={styles.container}>
      <div className={styles.btn_group}>
        <div className={styles.btn_prev} onClick={prevSlide}>
          <ArrowBackIcon />
        </div>
        <div className={styles.btn_next} onClick={nextSlide}>
          <ArrowForwardIcon />
        </div>
      </div>
      <div className={styles.slider_container} ref={slideRef}>
        <div className={styles.slider_inner}>
          {detailImg &&
            detailImg.map((item) => (
              <div className={styles.slider_item} key={item}>
                <img
                  src={`../assets/${item}.png`}
                  alt={item}
                  className={styles.img}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
