import React from 'react';
import Navigation from './Navigation';
import styled from 'styled-components';
import burger from '../assets/menu.svg'
import search from '../assets/search.svg'
import cart from '../assets/cart.svg'
import user from '../assets/user.svg'

const HeaderComponent: React.FC = () => {
    return (
        <>
            <Banner><BannerText>Sign up and get 20% off to your first order. <BannerLink href="#">Sign Up Now</BannerLink></BannerText></Banner>
            <StyledHeader>
                <Nav>
                    <Logo src={burger} />
                    <Title>SHOP.CO</Title>
                    <Navigation />
                </Nav>
                <Nav>
                    <Logo src={search} />
                    <Logo src={cart} />
                    <Logo src={user} />
                </Nav>
            </StyledHeader>
        </>
    );
};

const Banner = styled.div`
    background-color: #000000;
    height: 34px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BannerText = styled.p`
    font-weight: 400;
    font-size: 12px;
    line-height: 100%;
    letter-spacing: 0%;
    color: #FFFFFF;
`;

const BannerLink = styled.a`
    color: #fff;
`;

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    width: 100vw;
    padding: 9px
`;
const Nav = styled.nav`
    display: flex;    
    gap: 12px
    `;

const Title = styled.h1`
    font-weight: bold;
    font-size: 25.2px;
    line-height: 100%;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #000000;
`;
const Logo = styled.img`
    width: 20px;
    height: 20px;
    margin-top: 3;
    `
export default HeaderComponent;