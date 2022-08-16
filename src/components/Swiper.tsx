import { useRef, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import "./swiper.css";

interface idProps {
  detailImg?: string[];
}

function Swiper({ detailImg }: idProps) {
  const swiperList = [1, 2, 3, 4];
  console.log(detailImg);
  console.log(typeof detailImg);
  console.log(typeof swiperList);
  console.log(Array.isArray(detailImg));
  console.log(Array.isArray(swiperList));
  // const swiperRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  if (detailImg?.length) {
  }
  function handleSlide(current: number) {
    if (current >= detailImg?.length) {
      current = 0;
    } else if (current < 0) {
      current = detailImg?.length - 1;
    }
    setCurrent(current);
  }

  console.log(current);
  return (
    <div className="swiper-container">
      <div className="swiper-inner">
        <div className="btn-group">
          <div className="btn-prev">
            <ArrowBackIcon />
          </div>
          <div className="btn-next">
            <ArrowForwardIcon />
          </div>
        </div>
        {detailImg &&
          detailImg.map((item) => (
            <div className="swiper-item" key={item}>
              <img src={`../assets/${item}.png`} alt={item} className="img" />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Swiper;
