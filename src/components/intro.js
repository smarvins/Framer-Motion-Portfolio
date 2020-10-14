import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame, Stack, Scroll } from "framer";
import Services from './services';
import Skills from './skills';
import Work from './work';
import ContactUs from './contact';
import Fit from './fit';
import { motion, AnimatePresence, useMotionValue  } from "framer-motion";
import Responsive from 'react-responsive';
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
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 }
}

const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

export default function Intro(props) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/'), [history]);
  return (
    <AnimatePresence>
      <Desktop>
      <Scroll height={700} width={'100%'} direction="vertical" dragEnabled={false}>
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
            paddingTop={40}
            paddingLeft={70}
            alignment="start"
            variants={container}
            initial="hidden"
            animate="show"
            >
            <Frame variants={item} background="black" width={500} height={60} radius="5%" style={{color:'white', fontSize:70}}><span>I'm Steve</span></Frame>
            <Frame variants={item} background="black" width={1200} height={50} radius="5%" style={{color:'white', fontSize:70}}><span>and I love writing <span style={{color:'#00fff5'}}>beautiful</span> code.</span></Frame>
          </Stack>

          <Frame top={300} left={70} width={1150} height={350} background="black" variants={item} >
            <Stack
              center
              distribution="space-evenly"
              direction="horizontal"
              width={1100} height={300}
              padding={20}
              >
              <Frame background="black" width={550} height={220} style={{color:'white', fontSize:25, fontWeight:'100', wordSpacing: '3px', lineHeight:'45px'}}>
                As a <span style={{color:'#00fff5'}}>full-stack developer</span>, I bridge the gap between the front and back-end to create a robust, versatile application. Making it easy to communicate between <span style={{color:'white'}}>teams</span> and grasp the <span style={{color:'white'}}>idea</span> to one common <span style={{color:'white'}}>cause</span>.
              </Frame>
              <Frame background="black" width={550} height={330}>
                <Frame background="#3FBDAD" size={100}  center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:60, y:-60, borderRadius:'5%' }} transition={{ delay:1 }}>Back-end</Frame>
                <Frame background="#278ea5" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:0, y:0, borderRadius:'5%' }} transition={{ delay:1 }}>me</Frame>
                <Frame background="#3FBDAD" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:-60, y:60, borderRadius:'5%' }} transition={{ delay:1 }}>Front-end</Frame>
              </Frame>
            </Stack>
          </Frame>

          <Frame top={800} background={'transparent'} variants={item}>
            <Services/>
          </Frame>

          <Frame top={1800} background={'transparent'} variants={item}>
            <Work/>
          </Frame>

          <Frame top={2800} background={'transparent'} variants={item}>
            <Skills/>
          </Frame>

          <Frame top={3800} background={'transparent'} variants={item}>
            <Fit/>
          </Frame>

          <Frame top={4600} background={'transparent'} variants={item}>
            <ContactUs/>
          </Frame>
      </Frame>
      </Scroll>
    </Desktop>


    <Tablet>
    <Scroll height={1024} width={'100%'} direction="vertical" dragEnabled={false}>
    <Frame
      background={'black'}
      variants={container}
      initial="hidden"
      animate="show"
      >
        <Stack
          style={{ fontWeight: 'bold'}}
          size={300}
          gap={20}
          paddingTop={40}
          paddingLeft={40}
          alignment="start"
          variants={container}
          initial="hidden"
          animate="show"
          >
          <Frame variants={item} background="black" width={500} height={60} radius="5%" style={{color:'white', fontSize:70}}><span>I'm Steve</span></Frame>
          <Frame variants={item} background="black" width={768} height={50} radius="5%" style={{color:'white', fontSize:70}}><span>and I love writing <span style={{color:'#00fff5'}}>beautiful</span> code.</span></Frame>
        </Stack>

        <Frame top={550} left={40} width={650} height={350} background="black" variants={item} >
          <Stack
            center
            distribution="space-evenly"
            direction="vertical"
            width={1100} height={300}
            padding={20}
            >
            <Frame background="black" width={550} height={320} style={{color:'white', fontSize:30, fontWeight:'100', wordSpacing: '3px', lineHeight:'45px'}}>
              As a <span style={{color:'#00fff5'}}>full-stack developer</span>, I bridge the gap between the front and back-end to create a robust, versatile application. Making it easy to communicate between <span style={{color:'white'}}>teams</span> and grasp the <span style={{color:'white'}}>idea</span> to one common <span style={{color:'white'}}>cause</span>.
            </Frame>
            <Frame background="black" width={550} height={430}>
              <Frame background="#3FBDAD" size={100}  center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:60, y:-60, borderRadius:'5%' }} transition={{ delay:1 }}>Back-end</Frame>
              <Frame background="#278ea5" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:0, y:0, borderRadius:'5%' }} transition={{ delay:1 }}>me</Frame>
              <Frame background="#3FBDAD" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:-60, y:60, borderRadius:'5%' }} transition={{ delay:1 }}>Front-end</Frame>
            </Frame>
          </Stack>
        </Frame>

        <Frame top={1200} background={'transparent'} variants={item}>
          <Services/>
        </Frame>

        <Frame top={2200} background={'transparent'} variants={item}>
          <Work/>
        </Frame>

        <Frame top={3200} background={'transparent'} variants={item}>
          <Skills/>
        </Frame>

        <Frame top={4200} background={'transparent'} variants={item}>
          <Fit/>
        </Frame>

        <Frame top={5200} background={'transparent'} variants={item}>
          <ContactUs/>
        </Frame>
    </Frame>
    </Scroll>
    </Tablet>


  <Mobile>
  <Scroll height={700} width={'100%'} direction="vertical" dragEnabled={false}>
  <Frame
    background={'black'}
    variants={container}
    initial="hidden"
    animate="show"
    >
      <Stack
        style={{ fontWeight: 'bold'}}
        size={300}
        gap={10}
        paddingTop={40}
        paddingLeft={40}
        alignment="start"
        variants={container}
        initial="hidden"
        animate="show"
        >
        <Frame variants={item} background="black" width={300} height={60} radius="5%" style={{color:'white', fontSize:60}}><span>I'm Steve</span></Frame>
        <Frame variants={item} background="black" width={300} height={50} radius="5%" style={{color:'white', fontSize:60}}><span>and I love writing <span style={{color:'#00fff5'}}>beautiful</span> code.</span></Frame>
      </Stack>

      <Frame top={500} left={40} width={320} height={650} background="black" variants={item} >
        <Stack
          center
          distribution="space-evenly"
          direction="vertical"
          width={400} height={300}
          padding={20}
          >
          <Frame background="black" top={30} width={300} height={520} style={{color:'white', fontSize:25, fontWeight:'100', wordSpacing: '3px', lineHeight:'45px'}}>
            As a <span style={{color:'#00fff5'}}>full-stack developer</span>, I bridge the gap between the front and back-end to create a robust, versatile application. Making it easy to communicate between <span style={{color:'white'}}>teams</span> and grasp the <span style={{color:'white'}}>idea</span> to one common <span style={{color:'white'}}>cause</span>.
          </Frame>
          <Frame background="black" width={550} height={330}>
            <Frame background="#3FBDAD" size={100}  center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:60, y:-60, borderRadius:'5%' }} transition={{ delay:1 }}>Back-end</Frame>
            <Frame background="#278ea5" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:0, y:0, borderRadius:'5%' }} transition={{ delay:1 }}>me</Frame>
            <Frame background="#3FBDAD" size={100} center initial={{ x:0, y:0, borderRadius:'50%' }} animate={{ x:-60, y:60, borderRadius:'5%' }} transition={{ delay:1 }}>Front-end</Frame>
          </Frame>
        </Stack>
      </Frame>

      <Frame top={1400} background={'transparent'} variants={item}>
        <Services/>
      </Frame>

      <Frame top={2600} background={'transparent'} variants={item}>
        <Work/>
      </Frame>

      <Frame top={3800} background={'transparent'} variants={item}>
        <Skills/>
      </Frame>

      <Frame top={4800} background={'transparent'} variants={item}>
        <Fit/>
      </Frame>

      <Frame top={5800} background={'transparent'} variants={item}>
        <ContactUs/>
      </Frame>
  </Frame>
  </Scroll>
  </Mobile>
  </AnimatePresence>
  );
}
