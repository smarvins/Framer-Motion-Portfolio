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


export default function Services(props) {
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
          <Frame variants={item} background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>These are the <span style={{color:'#00fff5'}}>cool</span> stuff I can do for <span style={{color:'#00fff5'}}>you</span>.</span></Frame>
        </Stack>

        <Frame top={250} left={70} width={1150} height={500} background="black">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame radius="5%" background="#3FBDAD" width={250} height={450} style={{color:'white', fontSize:30}}>Back-end</Frame>
              <Frame radius="5%" background="#278ea5" width={250} height={450} style={{color:'white', fontSize:30}}>me</Frame>
              <Frame radius="5%" background="#3FBDAD" width={250} height={450} style={{color:'white', fontSize:30}}>Front-end</Frame>
              <Frame radius="5%" background="#3FBDAD" width={250} height={450} style={{color:'white', fontSize:30}}>Back-end</Frame>
          </Stack>
        </Frame>
      </Frame>
    </AnimatePresence>
  );
}
