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
width: 100%;
height:150vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
flex-direction: column;
padding: 6rem 0;

`


const Main = styled.div`

color: ${props => props.theme.text};
padding: 1rem;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;


font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

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
margin-right: rem;
}
`



const MySkillsPage = () => {
    return (
        
        <ThemeProvider theme={DarkTheme}>
<Box>
    

<LogoComponent theme='light'/>
<SocialIcons theme='light'/>
<PowerButton />
<ParticleComponent theme='light' />


            <Main>
<Title>
    <Design width={0} height={40} />Jamming
</Title>
<img className="pic" src={Jamming} alt="Profile Pic" 
style={{ width: '180px', height: '90%', objectFit: 'cover', }} />


            </Main>
            <Main>
<Title>
    <Develope width={0} height={40} /> Crescendo
</Title>
<img className="pic" src={Cresendo} alt="Profile Pic" 
style={{ width: '180px', height: '90%', objectFit: 'cover', }} />

            </Main>
            
            
            
            <Main>
<Title>
    <Design width={0} height={40} /> Rangratri
</Title>
<img className="pic" src={Rangratri} alt="Profile Pic" 
style={{ width: '180px', height: '90%', objectFit: 'cover', }} />


            </Main>
            <Main>
<Title>
    <Develope width={0} height={40} /> Aaravam
</Title>
<img className="pic" src={Aaravam1} alt="Profile Pic" 
style={{ width: '180px', height: '90%', objectFit: 'cover', }} />

            </Main>
            
       
            

            <BigTitle text="GALLERY" top="80%" right="30%" />

        </Box>

        </ThemeProvider>
        
    )
}

export default MySkillsPage
