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
          <Frame variants={item} background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>These are the <span style={{color:'rgb(156, 26, 255)'}}>cool</span> stuff I can do for <span style={{color:'rgb(156, 26, 255)', fontStyle: 'italic'}}>you</span>.</span></Frame>
        </Stack>

        <Frame top={250} left={70} width={1150} height={500} background="black">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame radius="3%" background="linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Responsive Design</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Go on and resize the window, see for yourself.</Frame></Frame>
              <Frame radius="3%" background="linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Web Development</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Having experience on creating both front and backend applications, I'm confident in my skills to get the job done.</Frame></Frame>
              <Frame radius="3%" background="linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Debugging</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>After spending many sleepless nights solving bugs and errors, I've got hawk eyes to go solve them and documenting for future reference.</Frame></Frame>
              <Frame radius="3%" background="linear-gradient(180deg, #d309e1 0%, rgb(156, 26, 255) 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Deployment</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Having deployed from singular to hybrid apps. I have a knack for delivering applications to different hosting sites.</Frame></Frame>
          </Stack>
        </Frame>
      </Frame>
    </AnimatePresence>
  );
}
