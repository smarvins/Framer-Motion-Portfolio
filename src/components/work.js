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
          <Frame variants={item} background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>The <span style={{color:'#28df99'}}>projects</span> and <span style={{color:'#28df99'}}>publications</span> under my name.</span></Frame>
        </Stack>

        <Frame top={250} left={70} width={1150} height={500} background="black">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Kazi</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>A Django+React hybrid site to set up task lists for your activities.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Forex-Bot</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that uses simple moving averages to trade currencies in the FX market.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>IG-Bot</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>A bot that automates likes for your account through various hashtags</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #28df99 0%, #52c234 100%)" width={250} height={350} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>GuidLines</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>This is a simple minimalistic site to showcase the guidelines that I follow when designing a project.</Frame></Frame>
          </Stack>
          <Frame borderRadius={10} background="#52c234" width={1075} height={50} top={440} left={35} style={{color:'white', paddingLeft:'10px', fontSize:20}}>Object-Oriented Programming…simplified. [ Medium ]</Frame>
          <Frame borderRadius={10} background="#52c234" width={1075} height={50} top={500} left={35} style={{color:'white', paddingLeft:'10px', fontSize:20}}>Responsive Grommet-UI grids in React. [ Medium ]</Frame>
        </Frame>
      </Frame>
    </AnimatePresence>
  );
}
