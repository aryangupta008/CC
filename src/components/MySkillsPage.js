import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import {DarkTheme, lightTheme} from './Themes';
import { Design, Develope} from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'
import Aaravam1 from '../assets/Images/Aaravam1.png'
import Cresendo from '../assets/Images/Cresendo.png'
import Rangratri from '../assets/Images/RangRatri.png'
import Jamming from '../assets/Images/Jamming1.png'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
min-height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
padding: 6rem 0;
`
const Header = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 15vh; /* 30% of viewport height */
  background-color: ${props => props.theme.body};
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  display: flex; /* Use flexbox to arrange boxes horizontally */
  justify-content: space-evenly; /* Space between boxes */
  width: 100%; /* Take full width */
  padding: 0 2rem; /* Optional padding on the sides */
  grid-template-columns: repeat(2, 1fr);
`;

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
margin: 1rem 0;
height: 50vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'dynapuff',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.6em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        
        <ThemeProvider theme={DarkTheme}>
<Box>
    
<Header>
<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />
</Header>
<Container>
            <Main>
<Title>
    <Design width={0} height={40} /> Jamming
</Title>
<img className="pic" src={Jamming} alt="Profile Pic" 
style={{ width: '100%', height: '90%', objectFit: 'cover', }} />


            </Main>
            <Main>
<Title>
    <Develope width={0} height={40} /> Crescendo
</Title>
<img className="pic" src={Cresendo} alt="Profile Pic" 
style={{ width: '100%', height: '90%', objectFit: 'cover', }} />

            </Main>
            
            </Container>
            <Container>
            <Main>
<Title>
    <Design width={0} height={40} /> Rangratri
</Title>
<img className="pic" src={Rangratri} alt="Profile Pic" 
style={{ width: '100%', height: '90%', objectFit: 'cover', }} />


            </Main>
            <Main>
<Title>
    <Develope width={0} height={40} /> Aaravam
</Title>
<img className="pic" src={Aaravam1} alt="Profile Pic" 
style={{ width: '100%', height: '90%', objectFit: 'cover', }} />

            </Main>
            
            </Container>
            

            <BigTitle text="GALLERY" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
