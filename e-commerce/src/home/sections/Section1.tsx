import React from 'react';
import styled from 'styled-components';
import sparkle from "../../assets/Vector.svg"
const Section1: React.FC = () => {
    return (
        <Section1Container>
            <Section1Title>FIND CLOTHES THAT MATCHES YOUR STYLE</Section1Title>
            <Section1Text>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</Section1Text>
            <SectionButton>Shop Now</SectionButton>
            <Section1Stats>
                <Stat>
                    <StatNumber>200+</StatNumber>
                    <StatText>International Brands</StatText>
                </Stat>
                <Line></Line>
                <Stat>
                    <StatNumber>2,000+</StatNumber>
                    <StatText>High-Quality Products</StatText>
                </Stat>
                <Stat>
                    <StatNumber>30000+</StatNumber>
                    <StatText >Happy Customers</StatText>
                </Stat>
            </Section1Stats>
            <ImageContainer>
                <Sparkle1 src={sparkle} />
                {/* <Section1Img src={image} /> */}
                <Sparkle2 src={sparkle} />
            </ImageContainer>
        </Section1Container>
    );
};

export default Section1;

const Section1Container = styled.section`
background-color: #F2F0F1;
padding: 9px;
display: flex;
flex-direction: column;
gap: 20px;

`
const Section1Title = styled.h1`
font-family: FONTSPRING DEMO - Integral CF Bold;
font-weight: 700;
font-size: 36px;
leading-trim: Cap height;
line-height: 34px;
letter-spacing: 0%;
vertical-align: middle;
color: #000000`

const Section1Text = styled.p`
font-weight: 400;
font-size: 14px;
leading-trim: Cap height;
line-height: 20px;
letter-spacing: 0%;
margin-top: 10px;
`
const SectionButton = styled.button`
background-color: #000000;
color: #FFFFFF;
border: none;
font-size: 16px;
cursor: pointer;
width: 100%;
border-radius: 62px;
padding-top: 16px;
padding-right: 54px;
padding-bottom: 16px;
padding-left: 54px;
gap: 12px;

transition: background-color 0.3s;
&:hover {
    background-color: #333333;
}

`
const Section1Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas:
    "stat1 stat2 stat3"
    ".     stat4  .";
   row-gap: 20px;
  justify-items: center;
  text-align: center;
  width: fit-content;
  align-self: center;
`;



const Stat = styled.div`
    &:nth-of-type(1) {
    grid-area: stat1;
  }
    &:nth-of-type(3) {
   grid-area: stat3;
  }
      &:nth-of-type(4) {
   grid-area: stat4;
  }
  
`;
const StatNumber = styled.h3`
font-weight: 700;
font-size: 24px;
line-height: 100%;
letter-spacing: 0%;
vertical-align: middle;
`
const StatText = styled.p` 
font-weight: 400;
font-size: 12px;
line-height: 22px;
letter-spacing: 0%;
 `
const Line = styled.div`
width: 1px;
height: 50px;
grid-area: stat2;
background-color: rgba(0, 0, 0, 0.1)`

const Sparkle1 = styled.img`
width: 44px;
height: 44px;
position: absolute;
  top: 20%;
    left: 10%;
`;


const Sparkle2 = styled.img`
width: 76px;
height: 76px;
position: absolute;
    z-index: 2;
 top: 0;
right: 0%;
`;


const ImageContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("/b26fea69ccfd8aa5825862cdb9604a4fb4930464.jpg");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    min-height: 448px;
    max-width: 375px;
`;


