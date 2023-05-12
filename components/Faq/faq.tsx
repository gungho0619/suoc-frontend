import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { Column, Row } from "../element";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import PropTypes from "prop-types";
import autoAnimate from "@formkit/auto-animate";


interface FaqProps {
  title: string;
  text: React.ReactNode;
}

const FaqComponent = (props: FaqProps) => {
  const [open, setOpen] = useState(false);
  const { title, text } = props;
  // const parentRef = useRef<HTMLDivElement>();
  // useEffect(() => {
  //   if (parentRef.current) {
  //     autoAnimate(parentRef.current);
  //   }
  // }, [parentRef]);
  return (
    <Wrapper 
      // ref={parentRef}
    >
      <WrapperContent
        onClick={() => {
          open === false ? setOpen(true) : setOpen(false);
        }}
      >
        <DropContent>
          <Row>{title}</Row>
          <Row>{!open ? <FaChevronDown /> : <FaChevronUp />}</Row>
        </DropContent>
      </WrapperContent>
      {open && <DropText>{text}</DropText>}
    </Wrapper>
  );
};

FaqComponent.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
};
const Wrapper = styled(Column)`
  width: 100%;
  font-family: Arial, Helvetica, sans-serif;
  border: 1px solid #707070;
  background-color: #ffffff;
  align-items: flex-start;
`;

const WrapperContent = styled(Row)`
  color: #5b463f;
  font-size: 20px;
  width: 100%;
  font-weight: 900;
`;

const DropText = styled(Row)`
  padding: 0px 20px 20px 20px;
  font-size: 16px;
`;
const DropContent = styled(Row)`
  justify-content: space-between;
  margin: 10px;
  width: 100%;
  padding: 10px;
`;

export default FaqComponent;
