import React from 'react'
import styled from 'styled-components'
import { Container} from '../globalStyles';



function Info() {
    return (
      <>
        <InfoSec >
          <Container>
            <InfoRow >
              <InfoColumn>
                <TextWrapper>
                  {/* <Heading >Hi Mortal!</Heading>
                  <TopLine >How are you?</TopLine> */}
                  <Subtitle > <b>I</b> wonder have you ever noticed our minds are very rarely <b>Quite</b>. Have you ever tried to find out the reason behind it?<br /><br />Have you ever experienced "Free Mind" ? Have you ever tried to know what is happening in the world of ones own?<br /> <br /> Many questions right? Yes, life is full of questions. In other words we can say that life is a Question. Have you ever tried to answer the questions of <b>"Life"</b>. </Subtitle>
                </TextWrapper>
              </InfoColumn>
              <InfoColumn>
                <ImgWrapper >
                  <Img src="/images/walking.svg" alt="hi" />
                </ImgWrapper>
              </InfoColumn>
            </InfoRow>
            <InfoM>
                    <h1>Now we will go through some questions.</h1>
                
                    <p>You will feel questions are tough because this subject was never taught in our schools/colleges.
                    <br /> Think freely and Break the pattern.</p>
                    <br />
                    <br />
                    <br />
                    <h4>What is thought?</h4>
                    <br />
                    <h4>What is love?</h4>
                    <br />
                    <h4>What is hate?</h4>
                    <br />
                    <h4>What is pleasure?</h4>
                    <br />
                    <h4>What is life?</h4>
                    <br />
                    <h4>What is death?</h4>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p>Try to see things as the way they are.<br />Example: You might know the dicotonary defination of anger. But it is a predefined defination which someone felt has wrote it.<br /> It is someones defination about anger and you are blindly beliving and following it. Try to find out what anger is without any predefined thoughts about it. Then you will get to know what really anger means.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <ImgWrapper >
                  <Img src="/images/mindfulness.svg" alt="hi" />
                </ImgWrapper>
                    
            </InfoM>
            
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
  margin: 2rem;
  
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
 const InfoM =styled.div`
 padding: 50px;
 margin-top: 2rem;
 `
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



const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;



 const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  padding-top: 25px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? 'black' : 'black')};
`;


export default Info;
