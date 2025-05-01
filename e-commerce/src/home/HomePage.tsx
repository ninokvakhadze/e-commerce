import React from 'react';
import styled from 'styled-components';
import Section1 from "./sections/Section1";
const HomePage: React.FC = () => {
    return (
        <Home>
            <Section1 />
        </Home>
    );
};

export default HomePage;

const Home = styled.main`

`