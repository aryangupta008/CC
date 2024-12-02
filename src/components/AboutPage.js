import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import {DarkTheme} from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import astronaut from '../assets/Images/spaceman.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw ;
height: 100vh;
position: relative;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const pulse = keyframes`
0% { transform: scale(1); }
50% { transform: scale(1.05); }
100% { transform: scale(1); }
`

const Spaceman = styled.div`
position: absolute;
top: 25%;
right: 1%;
width: 40vw;
animation: ${float} 4s ease infinite, ${pulse} 2s ease-in-out infinite;
img{
    width: 100%;
    height: auto;
}
`

const Main =  styled.div`
  border: 2px solid transparent;
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);
  
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'dynapuff', monospace;
  font-style: italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>    

                <Main>
                    We’re a diverse student group dedicated to celebrating culture and enhancing student life with events that promote unity and diversity, like festivals, concerts, and exhibitions.
                    <br /> <br/>
                    Believing culture enriches education, we create opportunities for students to explore and appreciate different backgrounds..
                    <br/> <br/>
                    Our club welcomes all XIME students to participate, share ideas, and join us in fostering an inclusive community.
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage
