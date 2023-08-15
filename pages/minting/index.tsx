import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

// Background Images
import Img_back_1 from "../../components/assets/image/aspects/backgrounds/1.png";
import Img_back_2 from "../../components/assets/image/aspects/backgrounds/2.png";
import Img_back_3 from "../../components/assets/image/aspects/backgrounds/3.png";
import Img_back_4 from "../../components/assets/image/aspects/backgrounds/4.png";
import Img_back_5 from "../../components/assets/image/aspects/backgrounds/5.png";
import Img_back_6 from "../../components/assets/image/aspects/backgrounds/6.png";
import Img_back_7 from "../../components/assets/image/aspects/backgrounds/7.png";
import Img_back_8 from "../../components/assets/image/aspects/backgrounds/8.png";
import Img_back_9 from "../../components/assets/image/aspects/backgrounds/9.png";
import Img_back_10 from "../../components/assets/image/aspects/backgrounds/10.png";
import Img_back_11 from "../../components/assets/image/aspects/backgrounds/11.png";
import Img_back_12 from "../../components/assets/image/aspects/backgrounds/12.png";
import Img_back_13 from "../../components/assets/image/aspects/backgrounds/13.png";
import Img_back_14 from "../../components/assets/image/aspects/backgrounds/14.png";
import Img_back_15 from "../../components/assets/image/aspects/backgrounds/15.png";
import Img_back_16 from "../../components/assets/image/aspects/backgrounds/16.png";
import Img_back_17 from "../../components/assets/image/aspects/backgrounds/17.png";
import Img_back_18 from "../../components/assets/image/aspects/backgrounds/18.png";
import Img_back_19 from "../../components/assets/image/aspects/backgrounds/19.png";
import Img_back_20 from "../../components/assets/image/aspects/backgrounds/20.png";
import Img_back_21 from "../../components/assets/image/aspects/backgrounds/21.png";

// Skins
import Img_skin_1 from "../../components/assets/image/aspects/skins/1.png";
import Img_skin_2 from "../../components/assets/image/aspects/skins/2.png";
import Img_skin_3 from "../../components/assets/image/aspects/skins/3.png";
import Img_skin_4 from "../../components/assets/image/aspects/skins/4.png";
import Img_skin_5 from "../../components/assets/image/aspects/skins/5.png";
import Img_skin_6 from "../../components/assets/image/aspects/skins/6.png";
import Img_skin_7 from "../../components/assets/image/aspects/skins/7.png";
import Img_skin_8 from "../../components/assets/image/aspects/skins/8.png";
import Img_skin_9 from "../../components/assets/image/aspects/skins/9.png";
import Img_skin_10 from "../../components/assets/image/aspects/skins/10.png";
import Img_skin_11 from "../../components/assets/image/aspects/skins/11.png";
import Img_skin_12 from "../../components/assets/image/aspects/skins/12.png";
import Img_skin_13 from "../../components/assets/image/aspects/skins/13.png";
import Img_skin_14 from "../../components/assets/image/aspects/skins/14.png";
import Img_skin_15 from "../../components/assets/image/aspects/skins/15.png";
import Img_skin_16 from "../../components/assets/image/aspects/skins/16.png";
import Img_skin_17 from "../../components/assets/image/aspects/skins/17.png";
import Img_skin_18 from "../../components/assets/image/aspects/skins/18.png";
import Img_skin_19 from "../../components/assets/image/aspects/skins/19.png";
import Img_skin_20 from "../../components/assets/image/aspects/skins/20.png";

// Eyes
import Img_eye_1 from "../../components/assets/image/aspects/Eyes/1.png";
import Img_eye_2 from "../../components/assets/image/aspects/Eyes/2.png";
import Img_eye_3 from "../../components/assets/image/aspects/Eyes/3.png";
import Img_eye_4 from "../../components/assets/image/aspects/Eyes/4.png";
import Img_eye_5 from "../../components/assets/image/aspects/Eyes/5.png";
import Img_eye_6 from "../../components/assets/image/aspects/Eyes/6.png";
import Img_eye_7 from "../../components/assets/image/aspects/Eyes/7.png";
import Img_eye_8 from "../../components/assets/image/aspects/Eyes/8.png";
import Img_eye_9 from "../../components/assets/image/aspects/Eyes/9.png";
import Img_eye_10 from "../../components/assets/image/aspects/Eyes/10.png";
import Img_eye_11 from "../../components/assets/image/aspects/Eyes/11.png";
import Img_eye_12 from "../../components/assets/image/aspects/Eyes/12.png";
import Img_eye_13 from "../../components/assets/image/aspects/Eyes/13.png";
import Img_eye_14 from "../../components/assets/image/aspects/Eyes/14.png";
import Img_eye_15 from "../../components/assets/image/aspects/Eyes/15.png";
import Img_eye_16 from "../../components/assets/image/aspects/Eyes/16.png";
import Img_eye_17 from "../../components/assets/image/aspects/Eyes/17.png";
import Img_eye_18 from "../../components/assets/image/aspects/Eyes/18.png";
import Img_eye_19 from "../../components/assets/image/aspects/Eyes/19.png";
import Img_eye_20 from "../../components/assets/image/aspects/Eyes/20.png";

// Mouth
import Img_mouth_1 from "../../components/assets/image/aspects/mouth/1.png";
import Img_mouth_2 from "../../components/assets/image/aspects/mouth/2.png";
import Img_mouth_3 from "../../components/assets/image/aspects/mouth/3.png";
import Img_mouth_4 from "../../components/assets/image/aspects/mouth/4.png";
import Img_mouth_5 from "../../components/assets/image/aspects/mouth/5.png";
import Img_mouth_6 from "../../components/assets/image/aspects/mouth/6.png";
import Img_mouth_7 from "../../components/assets/image/aspects/mouth/7.png";
import Img_mouth_8 from "../../components/assets/image/aspects/mouth/8.png";
import Img_mouth_9 from "../../components/assets/image/aspects/mouth/9.png";
import Img_mouth_10 from "../../components/assets/image/aspects/mouth/10.png";

// Shirt
import Img_shirt_1 from "../../components/assets/image/aspects/shirt/1.png";
import Img_shirt_2 from "../../components/assets/image/aspects/shirt/2.png";
import Img_shirt_3 from "../../components/assets/image/aspects/shirt/3.png";
import Img_shirt_4 from "../../components/assets/image/aspects/shirt/4.png";
import Img_shirt_5 from "../../components/assets/image/aspects/shirt/5.png";
import Img_shirt_6 from "../../components/assets/image/aspects/shirt/6.png";
import Img_shirt_7 from "../../components/assets/image/aspects/shirt/7.png";
import Img_shirt_8 from "../../components/assets/image/aspects/shirt/8.png";
import Img_shirt_9 from "../../components/assets/image/aspects/shirt/9.png";
import Img_shirt_10 from "../../components/assets/image/aspects/shirt/10.png";
import Img_shirt_11 from "../../components/assets/image/aspects/shirt/11.png";
import Img_shirt_12 from "../../components/assets/image/aspects/shirt/12.png";
import Img_shirt_13 from "../../components/assets/image/aspects/shirt/13.png";
import Img_shirt_14 from "../../components/assets/image/aspects/shirt/14.png";
import Img_shirt_15 from "../../components/assets/image/aspects/shirt/15.png";
import Img_shirt_16 from "../../components/assets/image/aspects/shirt/16.png";
import Img_shirt_17 from "../../components/assets/image/aspects/shirt/17.png";
import Img_shirt_18 from "../../components/assets/image/aspects/shirt/18.png";
import Img_shirt_19 from "../../components/assets/image/aspects/shirt/19.png";
import Img_shirt_20 from "../../components/assets/image/aspects/shirt/20.png";
import Img_shirt_21 from "../../components/assets/image/aspects/shirt/21.png";
import Img_shirt_22 from "../../components/assets/image/aspects/shirt/22.png";
import Img_shirt_23 from "../../components/assets/image/aspects/shirt/23.png";
import Img_shirt_24 from "../../components/assets/image/aspects/shirt/24.png";
import Img_shirt_25 from "../../components/assets/image/aspects/shirt/25.png";

// Head
import Img_head_1 from "../../components/assets/image/aspects/head/1.png";
import Img_head_2 from "../../components/assets/image/aspects/head/2.png";
import Img_head_3 from "../../components/assets/image/aspects/head/3.png";
import Img_head_4 from "../../components/assets/image/aspects/head/4.png";
import Img_head_5 from "../../components/assets/image/aspects/head/5.png";
import Img_head_6 from "../../components/assets/image/aspects/head/6.png";
import Img_head_7 from "../../components/assets/image/aspects/head/7.png";
import Img_head_8 from "../../components/assets/image/aspects/head/8.png";
import Img_head_9 from "../../components/assets/image/aspects/head/9.png";
import Img_head_10 from "../../components/assets/image/aspects/head/10.png";
import Img_head_11 from "../../components/assets/image/aspects/head/11.png";
import Img_head_12 from "../../components/assets/image/aspects/head/12.png";
import Img_head_13 from "../../components/assets/image/aspects/head/13.png";
import Img_head_14 from "../../components/assets/image/aspects/head/14.png";
import Img_head_15 from "../../components/assets/image/aspects/head/15.png";
import Img_head_16 from "../../components/assets/image/aspects/head/16.png";
import Img_head_17 from "../../components/assets/image/aspects/head/17.png";
import Img_head_18 from "../../components/assets/image/aspects/head/18.png";
import Img_head_19 from "../../components/assets/image/aspects/head/19.png";
import Img_head_20 from "../../components/assets/image/aspects/head/20.png";
import Img_head_21 from "../../components/assets/image/aspects/head/21.png";
import Img_head_22 from "../../components/assets/image/aspects/head/22.png";
import Img_head_23 from "../../components/assets/image/aspects/head/23.png";
import Img_head_24 from "../../components/assets/image/aspects/head/24.png";
import Img_head_25 from "../../components/assets/image/aspects/head/25.png";
import Img_head_26 from "../../components/assets/image/aspects/head/26.png";
import Img_head_27 from "../../components/assets/image/aspects/head/27.png";
import Img_head_28 from "../../components/assets/image/aspects/head/28.png";
import Img_head_29 from "../../components/assets/image/aspects/head/29.png";
import Img_head_30 from "../../components/assets/image/aspects/head/30.png";
import Img_head_31 from "../../components/assets/image/aspects/head/31.png";
import Img_head_32 from "../../components/assets/image/aspects/head/32.png";
import Img_head_33 from "../../components/assets/image/aspects/head/33.png";
import Img_head_34 from "../../components/assets/image/aspects/head/34.png";
import Img_head_35 from "../../components/assets/image/aspects/head/35.png";
import Img_head_36 from "../../components/assets/image/aspects/head/36.png";
import Img_head_37 from "../../components/assets/image/aspects/head/37.png";
import Img_head_38 from "../../components/assets/image/aspects/head/38.png";
import Img_head_39 from "../../components/assets/image/aspects/head/39.png";
import Img_head_40 from "../../components/assets/image/aspects/head/40.png";

// accessories
import Img_accessories_1 from "../../components/assets/image/aspects/accessories/1.png";
import Img_accessories_2 from "../../components/assets/image/aspects/accessories/2.png";
import Img_accessories_3 from "../../components/assets/image/aspects/accessories/3.png";
import Img_accessories_4 from "../../components/assets/image/aspects/accessories/4.png";
import Img_accessories_5 from "../../components/assets/image/aspects/accessories/5.png";
import Img_accessories_6 from "../../components/assets/image/aspects/accessories/6.png";
import Img_accessories_7 from "../../components/assets/image/aspects/accessories/7.png";
import Img_accessories_8 from "../../components/assets/image/aspects/accessories/8.png";
import Img_accessories_9 from "../../components/assets/image/aspects/accessories/9.png";
import Img_accessories_10 from "../../components/assets/image/aspects/accessories/10.png";
import Img_accessories_11 from "../../components/assets/image/aspects/accessories/11.png";
import Img_accessories_12 from "../../components/assets/image/aspects/accessories/12.png";
import Img_accessories_13 from "../../components/assets/image/aspects/accessories/13.png";

const BACKGROUNDS = [
  {
    img: Img_back_1,
    property: "",
  },
  {
    img: Img_back_2,
    property: "",
  },
  {
    img: Img_back_3,
    property: "",
  },
  {
    img: Img_back_4,
    property: "",
  },
  {
    img: Img_back_5,
    property: "",
  },
  {
    img: Img_back_6,
    property: "",
  },
  {
    img: Img_back_7,
    property: "",
  },
  {
    img: Img_back_8,
    property: "",
  },
  {
    img: Img_back_9,
    property: "",
  },
  {
    img: Img_back_10,
    property: "",
  },
  {
    img: Img_back_11,
    property: "",
  },
  {
    img: Img_back_12,
    property: "",
  },
  {
    img: Img_back_13,
    property: "",
  },
  {
    img: Img_back_14,
    property: "",
  },
  {
    img: Img_back_15,
    property: "",
  },
  {
    img: Img_back_16,
    property: "",
  },
  {
    img: Img_back_17,
    property: "",
  },
  {
    img: Img_back_18,
    property: "",
  },
  {
    img: Img_back_19,
    property: "",
  },
  {
    img: Img_back_20,
    property: "",
  },
  {
    img: Img_back_21,
    property: "",
  },
];

const SKINS = [
  {
    img: Img_skin_1,
    property: "",
  },
  {
    img: Img_skin_2,
    property: "",
  },
  {
    img: Img_skin_3,
    property: "",
  },
  {
    img: Img_skin_4,
    property: "",
  },
  {
    img: Img_skin_5,
    property: "",
  },
  {
    img: Img_skin_6,
    property: "",
  },
  {
    img: Img_skin_7,
    property: "",
  },
  {
    img: Img_skin_8,
    property: "",
  },
  {
    img: Img_skin_9,
    property: "",
  },
  {
    img: Img_skin_10,
    property: "",
  },
  {
    img: Img_skin_11,
    property: "",
  },
  {
    img: Img_skin_12,
    property: "",
  },
  {
    img: Img_skin_13,
    property: "",
  },
  {
    img: Img_skin_14,
    property: "",
  },
  {
    img: Img_skin_15,
    property: "",
  },
  {
    img: Img_skin_16,
    property: "",
  },
  {
    img: Img_skin_17,
    property: "",
  },
  {
    img: Img_skin_18,
    property: "",
  },
  {
    img: Img_skin_19,
    property: "",
  },
  {
    img: Img_skin_20,
    property: "",
  },
];

const EYES = [
  {
    img: Img_eye_1,
    property: "",
  },
  {
    img: Img_eye_2,
    property: "",
  },
  {
    img: Img_eye_3,
    property: "",
  },
  {
    img: Img_eye_4,
    property: "",
  },
  {
    img: Img_eye_5,
    property: "",
  },
  {
    img: Img_eye_6,
    property: "",
  },
  {
    img: Img_eye_7,
    property: "",
  },
  {
    img: Img_eye_8,
    property: "",
  },
  {
    img: Img_eye_9,
    property: "",
  },
  {
    img: Img_eye_10,
    property: "",
  },
  {
    img: Img_eye_11,
    property: "",
  },
  {
    img: Img_eye_12,
    property: "",
  },
  {
    img: Img_eye_13,
    property: "",
  },
  {
    img: Img_eye_14,
    property: "",
  },
  {
    img: Img_eye_15,
    property: "",
  },
  {
    img: Img_eye_16,
    property: "",
  },
  {
    img: Img_eye_17,
    property: "",
  },
  {
    img: Img_eye_18,
    property: "",
  },
  {
    img: Img_eye_19,
    property: "",
  },
  {
    img: Img_eye_20,
    property: "",
  },
];

const MOUTHS = [
  {
    img: Img_mouth_1,
    property: "",
    css: {
      backgroundPosition: `45px -30px`,
    },
  },
  {
    img: Img_mouth_2,
    property: "",
    css: {
      backgroundPosition: `45px -30px`,
    },
  },
  {
    img: Img_mouth_3,
    property: "",
    css: {
      backgroundPosition: `25px -80px`,
    },
  },
  {
    img: Img_mouth_4,
    property: "",
    css: {
      backgroundPosition: `20px -40px`,
    },
  },
  {
    img: Img_mouth_5,
    property: "",
    css: {
      backgroundPosition: `60px -50px`,
    },
  },
  {
    img: Img_mouth_6,
    property: "",
    css: {
      backgroundPosition: `60px -80px`,
    },
  },
  {
    img: Img_mouth_7,
    property: "",
    css: {
      backgroundPosition: `60px -50px`,
    },
  },
  {
    img: Img_mouth_8,
    property: "",
    css: {
      backgroundPosition: `30px -60px`,
    },
  },
  {
    img: Img_mouth_9,
    property: "",
    css: {
      backgroundPosition: `20px -40px`,
    },
  },
  {
    img: Img_mouth_10,
    property: "",
    css: {
      backgroundPosition: `10px -80px`,
    },
  },
];

const SHIRTS = [
  {
    img: Img_shirt_1,
    property: "",
  },
  {
    img: Img_shirt_2,
    property: "",
  },
  {
    img: Img_shirt_3,
    property: "",
  },
  {
    img: Img_shirt_4,
    property: "",
  },
  {
    img: Img_shirt_5,
    property: "",
  },
  {
    img: Img_shirt_6,
    property: "",
  },
  {
    img: Img_shirt_7,
    property: "",
  },
  {
    img: Img_shirt_8,
    property: "",
  },
  {
    img: Img_shirt_9,
    property: "",
  },
  {
    img: Img_shirt_10,
    property: "",
  },
  {
    img: Img_shirt_11,
    property: "",
  },
  {
    img: Img_shirt_12,
    property: "",
  },
  {
    img: Img_shirt_13,
    property: "",
  },
  {
    img: Img_shirt_14,
    property: "",
  },
  {
    img: Img_shirt_15,
    property: "",
  },
  {
    img: Img_shirt_16,
    property: "",
  },
  {
    img: Img_shirt_17,
    property: "",
  },
  {
    img: Img_shirt_18,
    property: "",
  },
  {
    img: Img_shirt_19,
    property: "",
  },
  {
    img: Img_shirt_20,
    property: "",
  },
  {
    img: Img_shirt_21,
    property: "",
  },
  {
    img: Img_shirt_22,
    property: "",
  },
  {
    img: Img_shirt_23,
    property: "",
  },
  {
    img: Img_shirt_24,
    property: "",
  },
  {
    img: Img_shirt_25,
    property: "",
  },
];

const HEADS = [
  {
    img: Img_head_1,
    property: "",
  },
  {
    img: Img_head_2,
    property: "",
  },
  {
    img: Img_head_3,
    property: "",
  },
  {
    img: Img_head_4,
    property: "",
  },
  {
    img: Img_head_5,
    property: "",
  },
  {
    img: Img_head_6,
    property: "",
  },
  {
    img: Img_head_7,
    property: "",
  },
  {
    img: Img_head_8,
    property: "",
  },
  {
    img: Img_head_9,
    property: "",
  },
  {
    img: Img_head_10,
    property: "",
  },
  {
    img: Img_head_11,
    property: "",
  },
  {
    img: Img_head_12,
    property: "",
  },
  {
    img: Img_head_13,
    property: "",
  },
  {
    img: Img_head_14,
    property: "",
  },
  {
    img: Img_head_15,
    property: "",
  },
  {
    img: Img_head_16,
    property: "",
  },
  {
    img: Img_head_17,
    property: "",
  },
  {
    img: Img_head_18,
    property: "",
  },
  {
    img: Img_head_19,
    property: "",
  },
  {
    img: Img_head_20,
    property: "",
  },
  {
    img: Img_head_21,
    property: "",
  },
  {
    img: Img_head_22,
    property: "",
  },
  {
    img: Img_head_23,
    property: "",
  },
  {
    img: Img_head_24,
    property: "",
  },
  {
    img: Img_head_25,
    property: "",
  },
  {
    img: Img_head_26,
    property: "",
  },
  {
    img: Img_head_27,
    property: "",
  },
  {
    img: Img_head_28,
    property: "",
  },
  {
    img: Img_head_29,
    property: "",
  },
  {
    img: Img_head_30,
    property: "",
  },

  {
    img: Img_head_31,
    property: "",
  },
  {
    img: Img_head_32,
    property: "",
  },
  {
    img: Img_head_33,
    property: "",
  },
  {
    img: Img_head_34,
    property: "",
  },
  {
    img: Img_head_35,
    property: "",
  },
  {
    img: Img_head_36,
    property: "",
  },
  {
    img: Img_head_37,
    property: "",
  },
  {
    img: Img_head_38,
    property: "",
  },
  {
    img: Img_head_39,
    property: "",
  },
  {
    img: Img_head_40,
    property: "",
  },
];

const ACCESSORIES = [
  {
    img: Img_accessories_1,
    property: "",
  },
  {
    img: Img_accessories_2,
    property: "",
  },
  {
    img: Img_accessories_3,
    property: "",
  },
  {
    img: Img_accessories_4,
    property: "",
  },
  {
    img: Img_accessories_5,
    property: "",
  },
  {
    img: Img_accessories_6,
    property: "",
  },
  {
    img: Img_accessories_7,
    property: "",
  },
  {
    img: Img_accessories_8,
    property: "",
  },
  {
    img: Img_accessories_9,
    property: "",
  },
  {
    img: Img_accessories_10,
    property: "",
  },
  {
    img: Img_accessories_11,
    property: "",
  },
  {
    img: Img_accessories_12,
    property: "",
  },
  {
    img: Img_accessories_13,
    property: "",
  },
];

interface Metadata {
  img: object;
  property: string;
  css?: object;
}

const SwiperOption = ({
  rndFlag,
  imgs,
  flag,
  setVal,
  title,
}: {
  rndFlag: boolean;
  title: string;
  imgs: Array<Metadata>;
  flag: number;
  setVal: (newValue: number) => void;
}) => {
  const [swiper, setSwiper] = useState<any>();
  const [snapIndex, setSnapIndex] = useState(0);
  const [sliceLengh, setSliceLength] = useState(0);

  useEffect(() => {
    setVal(snapIndex);
  }, [snapIndex]);

  useEffect(() => {
    swiper?.slideTo(Math.round(Math.random() * 100) % sliceLengh, 0);
  }, [rndFlag]);

  return (
    <SwiperOptionDiv>
      <div className="main-div">
        <AiFillCaretLeft
          className="ctl-icon left"
          onClick={() => {
            swiper.slidePrev();
          }}
        ></AiFillCaretLeft>
        <h2 style={{ textAlign: "center", margin: 0 }}> {title} </h2>
        <Swiper
          slidesPerView={1}
          onSwiper={(s) => {
            setSwiper(s);
            setSnapIndex(s.snapIndex);
            setSliceLength(s.slides.length);
          }}
          modules={[Pagination, Navigation]}
          onSlideChange={(event) => {
            const ind = event.snapIndex;
            setSnapIndex(ind);
          }}
          style={{
            width: "200px",
            height: "150px",
            border: "2px solid grey",
          }}
        >
          {imgs.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                style={
                  flag === 0
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        ...item.css,
                      }
                    : flag === 1
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "0 -50px",
                        ...item.css,
                      }
                    : flag === 2
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: `200% 200%`,
                        backgroundPosition: "305px 285px",
                        ...item.css,
                      }
                    : flag === 3
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "cover",
                        backgroundRepeat: `no-repeat`,
                        ...item.css,
                      }
                    : flag === 4
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "200% 200%",
                        backgroundPosition: "635px -450px",
                      }
                    : flag === 5
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "contain",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "10px",
                      }
                    : flag === 6
                    ? {
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${item.img.src})`,
                        backgroundSize: "200% 200%",
                        backgroundPosition: "635px -450px",
                      }
                    : undefined
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <AiFillCaretRight
          className="ctl-icon right"
          onClick={() => {
            swiper.slideNext();
          }}
        ></AiFillCaretRight>
      </div>
      <div className="info">
        <span>
          {snapIndex + 1} / {sliceLengh}
        </span>
      </div>
    </SwiperOptionDiv>
  );
};

const Minting = () => {
  const [valBackground, setValBackground] = useState(0);
  const [valSkins, setValSkins] = useState(0);
  const [valEyes, setValEyes] = useState(0);
  const [valMouths, setValMouths] = useState(0);
  const [valShirt, setValShirt] = useState(0);
  const [valHead, setValHead] = useState(0);
  const [valAccessiores, setValAccessoires] = useState(0);

  const [rndFlag, setRndFlag] = useState(true);

  return (
    <Wrapper>
      <Container>
        <OptionsDiv>
          <SwiperOption
            rndFlag={rndFlag}
            title="Background"
            imgs={BACKGROUNDS}
            setVal={setValBackground}
            flag={0}
          ></SwiperOption>
          <SwiperOption
            rndFlag={rndFlag}
            title="Shell"
            imgs={SKINS}
            setVal={setValSkins}
            flag={1}
          ></SwiperOption>
          <SwiperOption
            rndFlag={rndFlag}
            title="Eyes"
            imgs={EYES}
            setVal={setValEyes}
            flag={2}
          ></SwiperOption>
          <SwiperOption
            rndFlag={rndFlag}
            title="Mouth"
            imgs={MOUTHS}
            setVal={setValMouths}
            flag={3}
          ></SwiperOption>
          <SwiperOption
            rndFlag={rndFlag}
            title="Shirt"
            imgs={SHIRTS}
            setVal={setValShirt}
            flag={4}
          ></SwiperOption>
          <SwiperOption
            rndFlag={rndFlag}
            title="Head"
            imgs={HEADS}
            setVal={setValHead}
            flag={5}
          ></SwiperOption>
          <SwiperOption
            rndFlag={rndFlag}
            title="Accessories"
            imgs={ACCESSORIES}
            setVal={setValAccessoires}
            flag={6}
          ></SwiperOption>

          <ControlButtons>
            <button onClick={() => setRndFlag(!rndFlag)}>Random</button>

            <button>Mint</button>
          </ControlButtons>
        </OptionsDiv>

        <PreviewDiv>
          <h2 style={{ textAlign: "center", margin: 0 }}>Outcome</h2>
          <div>
            <img src={BACKGROUNDS[valBackground].img.src}></img>
            <img src={SKINS[valSkins].img.src}></img>
            <img src={EYES[valEyes].img.src}></img>
            <img src={MOUTHS[valMouths].img.src}></img>
            <img src={SHIRTS[valShirt].img.src}></img>
            <img src={HEADS[valHead].img.src}></img>
            <img src={ACCESSORIES[valAccessiores].img.src}></img>
          </div>
        </PreviewDiv>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  flex: 1;
  color: #5b463f;
  padding: 30px;

  margin: auto;
  max-width: 1300px;
`;

const SwiperOptionDiv = styled.div`
  width: min-content;

  .main-div {
    position: relative;
    width: min-content;
    .ctl-icon {
      position: absolute;
      font-size: 30px;
      cursor: pointer;
    }

    .left {
      top: 50%;
      left: -20px;
    }

    .right {
      top: 50%;
      right: -20px;
    }
  }

  .info {
    text-align: center;
    margin-top: 5px;
  }
`;

const OptionsDiv = styled.div`
  display: flex;
  align-content: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 50px;
  flex: 1;

  @media screen and (max-width: 532px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 532px) {
    align-items: center;
  }
  justify-content: space-around;

  @media screen and (max-width: 810px) {
    flex-direction: column;
  }
`;

const PreviewDiv = styled.div`
  div {
    position: relative;
    width: 250px;
    height: 300px;
    img {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    border: 3px solid #5b463f;
  }
`;

const ControlButtons = styled.div`
  button {
    display: block;
    margin: 10px auto;
  }
  margin-top: 20px;
`;

export default Minting;
