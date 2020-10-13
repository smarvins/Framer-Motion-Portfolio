import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame, Stack, Scroll } from "framer";
import { motion, AnimatePresence } from "framer-motion";
import '../App.scss';


const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}


export default function Work(props) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);
  return (
    <AnimatePresence>
      <Frame
        background={'black'}
        variants={container}
        initial="hidden"
        animate="show"
        >
        <Stack
          style={{ fontWeight: 'bold'}}
          size={300}
          gap={40}
          paddingBottom={60}
          paddingLeft={70}
          alignment="start"
          variants={container}
          initial="hidden"
          animate="show"
          >
          <Frame href='https://stevemarvins-web-design-guidlines.netlify.app/' variants={item} background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>The <span style={{color:'#28df99'}}>projects</span> and <span style={{color:'#28df99'}}>articles</span> under my name.</span></Frame>
        </Stack>

        <Frame top={250} left={70} width={1150} height={500} background="black">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Kazi</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>A Django+React hybrid site to set up task lists for your activities.<p><a style={{color:'white', fontSize:20}} href='https://kazi-list.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Forex-Bot</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that uses simple moving averages to trade currencies in the FX market.<p><a style={{color:'white', fontSize:20}} href='https://github.com/Shavolski/Forex-Bot' target="_blank" className="link_site">see the code</a></p></Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>IG-Bot</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that automates likes for your account through various hashtags.<p><a style={{color:'white', fontSize:20}} href='https://github.com/Shavolski/IG-bot' target="_blank" className="link_site">see the code</a></p></Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>GuidLines</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>This is a minimalistic site to showcase the guidelines that I follow when designing a project.<p><a style={{color:'white', fontSize:20}} href='https://stevemarvins-web-design-guidlines.netlify.app/' target="_blank" className="link_site">visit the site</a></p></Frame></Frame>
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
    </AnimatePresence>
  );
}
