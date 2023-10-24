import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { AiFillCaretRight, AiFillCaretLeft } from "react-icons/ai";

import {
  BACKGROUNDS,
  SKINS,
  SHIRTS,
  EYES,
  MOUTHS,
  HEADS,
  ACCESSORIES,
} from "../../constants/suoc-whitelist";

interface Metadata {
  img: any;
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
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Shell"
            imgs={SKINS}
            setVal={setValSkins}
            flag={1}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Eyes"
            imgs={EYES}
            setVal={setValEyes}
            flag={2}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Mouth"
            imgs={MOUTHS}
            setVal={setValMouths}
            flag={3}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Shirt"
            imgs={SHIRTS}
            setVal={setValShirt}
            flag={4}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Head"
            imgs={HEADS}
            setVal={setValHead}
            flag={5}
          />
          <SwiperOption
            rndFlag={rndFlag}
            title="Accessories"
            imgs={ACCESSORIES}
            setVal={setValAccessoires}
            flag={6}
          />

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
