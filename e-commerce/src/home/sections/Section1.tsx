import React from 'react';
import styled from 'styled-components';

const Section1: React.FC = () => {
    return (
        <Section1Container>
            <Section1Title>FIND CLOTHES THAT MATCHES YOUR STYLE</Section1Title>
            <Section1Text>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</Section1Text>

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