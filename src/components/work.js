import React from 'react';
import { Frame, Stack, Scroll } from "framer";
import {AnimatePresence } from "framer-motion";
import '../App.scss';
import Responsive from 'react-responsive';

// Screen sizes for responsive design
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;


export default function Work(props) {
  return (
    <AnimatePresence>
      <Desktop>
      <Frame
        background={'black'}
        >
        <Stack
          style={{ fontWeight: 'bold'}}
          size={300}
          gap={40}
          paddingBottom={60}
          paddingLeft={70}
          alignment="start"
          >
          <Frame href='https://stevemarvins-web-design-guidlines.netlify.app/' background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>The <span style={{color:'#28df99'}}>projects</span> and <span style={{color:'#28df99'}}>articles</span> under my name.</span></Frame>
        </Stack>

        <Frame top={250} left={70} width={1150} height={500} background="black">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Kazi</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>A Django+React hybrid site to set up task lists for your activities.<p><a style={{color:'white', fontSize:20}} href='https://kazi-list.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Forex-Bot</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that uses simple moving averages to trade currencies in the FX market.<p><a style={{color:'white', fontSize:20}} href='https://github.com/Shavolski/Forex-Bot' target="_blank" className="link_site">see the code</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>IG-Bot</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that automates likes for your account through various hashtags.<p><a style={{color:'white', fontSize:20}} href='https://github.com/Shavolski/IG-bot' target="_blank" className="link_site">see the code</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>GuidLines</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>This is a minimalistic site to showcase the guidelines that I follow when designing a project.<p><a style={{color:'white', fontSize:20}} href='https://stevemarvins-web-design-guidlines.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame>
              </Frame>
          </Stack>
          <Frame borderRadius={10} background="#52c234" width={1075} height={50} top={440} left={35}>
            <Frame background="transparent" borderRadius={10} width={1075} height={50} style={{color:'white', paddingLeft:'10px', fontSize:20}}>Object-Oriented Programming…simplified. [ Medium ]</Frame>
            <a style={{color:'white', padding:'10px', fontSize:20}} href='https://medium.com/@stevemarvins.dev/object-oriented-programming-simplified-ddf0e3a628ef' target="_blank" className="link_site">Read</a>
          </Frame>

          <Frame borderRadius={10} background="#52c234" width={1075} height={50} top={500} left={35}>
            <Frame background="transparent" borderRadius={10} width={1075} height={50} style={{color:'white', paddingLeft:'10px', fontSize:20}}>Responsive Grommet-UI grids in React. [ Medium ]</Frame>
            <a style={{color:'white', padding:'10px', fontSize:20}} href='https://medium.com/@stevemarvins.dev/responsive-grommet-ui-grids-in-react-31892103c207' target="_blank" className="link_site">Read</a>
          </Frame>

        </Frame>
      </Frame>
      </Desktop>

      // Tablet view
      <Tablet>
      <Frame
        background={'black'}
        >
        <Stack
          style={{ fontWeight: 'bold'}}
          size={300}
          gap={40}
          paddingBottom={60}
          paddingLeft={40}
          alignment="start"
          >
          <Frame background="black" width={700} height={70} radius="5%" style={{color:'white', fontSize:60}}><span>The <span style={{color:'#28df99'}}>projects</span> and <span style={{color:'#28df99'}}>articles</span> under my name.</span></Frame>
        </Stack>

        <Frame top={200} width={700} height={500} background="black">
          <Scroll direction="horizontal" height={500} width={767} background="transparent">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Kazi</span>
                <Frame center background="transparent" style={{color:'white', fontSize:25}}>A Django+React hybrid site to set up task lists for your activities.<p><a style={{color:'white', fontSize:25}} href='https://kazi-list.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Forex-Bot</span>
                <Frame center background="transparent" style={{color:'white', fontSize:25}}>A bot that uses simple moving averages to trade currencies in the FX market.<p><a style={{color:'white', fontSize:25}} href='https://github.com/Shavolski/Forex-Bot' target="_blank" className="link_site">see the code</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>IG-Bot</span>
                <Frame center background="transparent" style={{color:'white', fontSize:25}}>A bot that automates likes for your account through various hashtags.<p><a style={{color:'white', fontSize:25}} href='https://github.com/Shavolski/IG-bot' target="_blank" className="link_site">see the code</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>GuidLines</span>
                <Frame center background="transparent" style={{color:'white', fontSize:25}}>This is a minimalistic site to showcase the guidelines that I follow when designing a project.<p><a style={{color:'white', fontSize:25}} href='https://stevemarvins-web-design-guidlines.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame>
              </Frame>
          </Stack>
          </Scroll>
          <Frame borderRadius={10} background="#52c234" width={710} height={70} top={440} left={35}>
            <Frame background="transparent" borderRadius={10} width={710} height={70} style={{color:'white', paddingLeft:'10px', fontSize:25}}>Object-Oriented Programming…simplified. [ Medium ]</Frame>
            <a style={{color:'white', padding:'10px', fontSize:20}} href='https://medium.com/@stevemarvins.dev/object-oriented-programming-simplified-ddf0e3a628ef' target="_blank" className="link_site">Read</a>
          </Frame>

          <Frame borderRadius={10} background="#52c234" width={710} height={70} top={520} left={35}>
            <Frame background="transparent" borderRadius={10} width={710} height={70} style={{color:'white', paddingLeft:'10px', fontSize:25}}>Responsive Grommet-UI grids in React. [ Medium ]</Frame>
            <a style={{color:'white', padding:'10px', fontSize:20}} href='https://medium.com/@stevemarvins.dev/responsive-grommet-ui-grids-in-react-31892103c207' target="_blank" className="link_site">Read</a>
          </Frame>

        </Frame>
      </Frame>
      </Tablet>

      <Mobile>
      <Frame
        background={'black'}
        >
        <Stack
          style={{ fontWeight: 'bold'}}
          size={300}
          gap={40}
          paddingBottom={60}
          paddingLeft={40}
          alignment="start"
          >
          <Frame background="black" width={320} height={60} radius="5%" style={{color:'white', fontSize:60}}><span>The <span style={{color:'#28df99'}}>projects</span> and <span style={{color:'#28df99'}}>articles</span> under my name.</span></Frame>
        </Stack>

        <Frame top={400} width={1150} height={500} background="transparent">
          <Scroll direction="horizontal" height={500} width={400} background="transparent">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Kazi</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>A Django+React hybrid site to set up task lists for your activities.<p><a style={{color:'white', fontSize:20}} href='https://kazi-list.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Forex-Bot</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that uses simple moving averages to trade currencies in the FX market.<p><a style={{color:'white', fontSize:20}} href='https://github.com/Shavolski/Forex-Bot' target="_blank" className="link_site">see the code</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>IG-Bot</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that automates likes for your account through various hashtags.<p><a style={{color:'white', fontSize:20}} href='https://github.com/Shavolski/IG-bot' target="_blank" className="link_site">see the code</a></p></Frame>
              </Frame>

              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>GuidLines</span>
                <Frame center background="transparent" style={{color:'white', fontSize:20}}>This is a minimalistic site to showcase the guidelines that I follow when designing a project.<p><a style={{color:'white', fontSize:20}} href='https://stevemarvins-web-design-guidlines.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame>
              </Frame>
          </Stack>
        </Scroll>
          <Frame borderRadius={10} background="#52c234" width={350} height={100} top={440} left={10}>
            <Frame background="transparent" borderRadius={10} width={350} height={100} style={{color:'white', paddingLeft:'10px', fontSize:20}}>Object-Oriented Programming…simplified. [ Medium ]</Frame>
            <a style={{color:'white', padding:'10px', fontSize:20}} href='https://medium.com/@stevemarvins.dev/object-oriented-programming-simplified-ddf0e3a628ef' target="_blank" className="link_site">Read</a>
          </Frame>

          <Frame borderRadius={10} background="#52c234" width={350} height={100} top={560} left={10}>
            <Frame background="transparent" borderRadius={10} width={350} height={100} style={{color:'white', paddingLeft:'10px', fontSize:20}}>Responsive Grommet-UI grids in React. [ Medium ]</Frame>
            <a style={{color:'white', padding:'10px', marginTop:'30px', fontSize:20}} href='https://medium.com/@stevemarvins.dev/responsive-grommet-ui-grids-in-react-31892103c207' target="_blank" className="link_site">Read</a>
          </Frame>

        </Frame>
      </Frame>
      </Mobile>

    </AnimatePresence>
  );
}
