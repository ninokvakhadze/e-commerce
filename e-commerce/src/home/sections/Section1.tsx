import React from 'react';
import styled from 'styled-components';

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

                <Stat center>
                    <StatNumber>30000+</StatNumber>
                    <StatText >Happy Customers</StatText>
                </Stat>
            </Section1Stats>
        </Section1Container>
    );
};

export default Section1;

const Section1Container = styled.section`
background-color: #F2F0F1;
padding: 9px;
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
  grid-template-columns: auto 1px auto
  grid-template-rows: auto auto;
  gap: 16px;
  justify-content: center;
  align-items: center;
  max-width: fit-content;
  margin: 0 auto;
`;



const Stat = styled.div<{ center?: boolean }>`
  ${({ center }) =>
    center &&
    `
    grid-column: 1 / -1; /* Span entire row */
    justify-self: center;
    margin-top: 16px;
  `}
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
background-color: rgba(0, 0, 0, 0.1)`