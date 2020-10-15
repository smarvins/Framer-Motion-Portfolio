import React from 'react';
import { Frame, Stack, Scroll } from "framer";
import { AnimatePresence } from "framer-motion";
import '../App.scss';
import Responsive from 'react-responsive';

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

export default function Services(props) {
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
          <Frame background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>These are the <span style={{color:'#7F00FF'}}>cool</span> stuff I can do for <span style={{color:'#7F00FF', fontStyle: 'italic'}}>you</span>.</span></Frame>
        </Stack>

        <Frame top={250} left={70} width={1150} height={500} background="black">
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Responsive Design</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Go on and resize the window, see for yourself.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Web Development</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Having experience on creating both front and backend applications, I'm confident in my skills to get the job done.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Debugging</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>After spending many sleepless nights solving bugs and errors, I've grown to know how to resolve them and documenting for future reference.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Deployment</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Having deployed from singular to hybrid apps. I have a knack for delivering applications to different hosting sites.</Frame></Frame>
          </Stack>
        </Frame>
      </Frame>
      </Desktop>

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
          <Frame background="transparent" width={768} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>These are the <span style={{color:'#7F00FF'}}>cool</span> stuff I can do for <span style={{color:'#7F00FF', fontStyle: 'italic'}}>you</span>.</span></Frame>
        </Stack>

        <Scroll direction="horizontal" height={500} width={768} background="transparent" top={300}>
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={300}
            padding={20}
            >
          <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Responsive Design</span><Frame center background="transparent" style={{color:'white', fontSize:25}}>Go on and resize the window, see for yourself. Told you:)</Frame></Frame>
          <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Web Development</span><Frame center background="transparent" style={{color:'white', fontSize:25}}>Having experience on creating both front and backend applications, I'm confident in my skills to get the job done.</Frame></Frame>
          <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Debugging</span><Frame center background="transparent" style={{color:'white', fontSize:25}}>After spending many sleepless nights solving bugs and errors, I've grown to know how to resolve them and documenting for future reference.</Frame></Frame>
          <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Deployment</span><Frame center background="transparent" style={{color:'white', fontSize:25}}>Having deployed from singular to hybrid apps. I have a knack for delivering applications to different hosting sites.</Frame></Frame>
        </Stack>
        </Scroll>

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
          <Frame background="black" width={300} height={60} radius="5%" style={{color:'white', fontSize:60}}><span>These are the <span style={{color:'#7F00FF'}}>cool</span> stuff I can do for <span style={{color:'#7F00FF'}}>you</span>.</span></Frame>
        </Stack>

        <Scroll direction="horizontal" height={500} width={400} background="transparent" top={400}>
          <Stack
            center
            distribution="space-evenly"
            direction="horizontal"
            width={1100} height={500}
            padding={20}
            >
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Responsive Design</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Go on and resize the window, see for yourself.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Web Development</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Having experience on creating both front and backend applications, I'm confident in my skills to get the job done.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Debugging</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>After spending many sleepless nights solving bugs and errors, I've grown to know how to resolve them and documenting for future reference.</Frame></Frame>
              <Frame borderRadius={10} background="linear-gradient(180deg, #E100FF 0%, #7F00FF 100%)" width={250} height={450} style={{color:'white', paddingLeft:'10px', fontSize:30}}><span>Deployment</span><Frame center background="transparent" style={{color:'white', fontSize:20}}>Having deployed from singular to hybrid apps. I have a knack for delivering applications to different hosting sites.</Frame></Frame>
          </Stack>
        </Scroll>
      </Frame>
      </Mobile>
    </AnimatePresence>
  );
}
