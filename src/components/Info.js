import React from 'react'
import styled from 'styled-components'
import { Container, Button} from '../globalStyles';
import { Link } from 'react-router-dom';


function Info() {
    return (
      <>
        <InfoSec >
          <Container>
            <InfoRow >
              <InfoColumn>
                <TextWrapper>
                  <Heading >Hi Mortal!</Heading>
                  <TopLine >How are you?</TopLine>
                  <Subtitle >Here we are going to discuss a topic that became so underrated these days.
It is the most complicated and sophisticated one. Any guesses? </Subtitle>
            
                 
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper >
                  <Img src="/images/suburbs.svg" alt="hi" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
          </InfoSec>
          
          <InfoSec >
          <Container>
            <InfoRow >
              <InfoColumn>
                <TextWrapper>
                  <Heading >"Life"</Heading>
                  <Subtitle >Yes, we are going to discuss life. I hope you guessed it right :) . To start this journey you should have one thing with you ' it is the most valuable and one without limits..'</Subtitle>
                  <TopLine >'Courage'</TopLine>
                  <Subtitle >Yes, many people will not have the courage to enquire what life is.</Subtitle>
            
                  <Link to='/validate'>
                    <Button big fontBig>
                     Lets Get started
                    </Button>
                  </Link>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper >
                  <Img src="/images/park.svg" alt="home" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
          </Container>
        </InfoSec>
      </>
    );
  }
const InfoSec = styled.div `
 color: black;
 padding: 160px 0;
 top: 70px;
 margin-top: 4.5rem;


  background: ${({ lightBg }) => (lightBg ? 'black' : 'white')};
`

const InfoRow = styled.div`
  display: flex;
  margin: 0 -75px -15px -15px;
  flex-wrap: wrap;
  
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

 const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

 const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? 'black' : 'black')};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;

 const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? 'black' : 'black')};
`;

 const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? 'black' : 'black')};
`;


export default Info;
