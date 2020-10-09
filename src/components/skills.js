import React from 'react';
import { useHistory } from 'react-router-dom';
import { Frame, Stack, Scroll, useCycle } from "framer";
import { motion, AnimatePresence } from "framer-motion";
import '../App.scss';

export default function Skills() {
  const [animate, cycle] = useCycle(
      { width: 50, height: 60, background:"white", color:"transparent" },
      { width: 800, height: 60, background:"orange", color:"white" }
  )
  const [animate1, cycle1] = useCycle(
      { width: 50, height: 60, background:"white", color:"transparent" },
      { width: 500, height: 60, background:"orange", color:"white" }
  )
  return (
    <AnimatePresence>
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
          <Frame background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>The <span style={{color:'#ffc500'}}>super powers</span> I got.</span></Frame>
        </Stack>

        <Frame background="black" width={550} left={73} height={100} top={150} style={{color:'white', fontSize:25, fontWeight:'100', wordSpacing: '3px', lineHeight:'45px'}}>
          Here's a list of <span style={{color:'#ffc500'}}>skills</span> that I learned over the past years as a developer.
        </Frame>

        <Frame top={300} left={70} width={1150} height={500} background="black" borderRadius={30}>

          <Frame width={250} height={60} borderRadius={10} backgroundColor="orange" >
              [ Web Frameworks ]
          </Frame>
          <Frame left={230} backgroundColor="#fff" borderRadius={10} animate={animate} onTap={() => cycle()} style={{ fontSize:20}}>
              React / Django
          </Frame>

          <Frame top={100} width={250} height={60} borderRadius={10} backgroundColor="orange" >
              [ UI Frameworks ]
          </Frame>
          <Frame top={100} left={230} backgroundColor="#fff" borderRadius={10} animate={animate} onTap={() => cycle()} style={{ fontSize:20}}>
              Bootstrap / Material UI / Bulma / Framer Motion / Grommet UI
          </Frame>

          <Frame top={200} width={250} height={60} borderRadius={10} backgroundColor="orange" >
              [ Markup & Style Sheets ]
          </Frame>
          <Frame top={200} left={230} backgroundColor="#fff" borderRadius={10} animate={animate} onTap={() => cycle()} style={{ fontSize:20}}>
              HTML / JSX / CSS / SCSS / JSS
          </Frame>
          <Frame top={300} width={250} height={60} borderRadius={10} backgroundColor="orange" >
              [ Languages ]
          </Frame>
          <Frame top={300} left={230} backgroundColor="#fff" borderRadius={10} animate={animate} onTap={() => cycle()} style={{ fontSize:20}}>
              Python / JavaScript
          </Frame>
          <Frame top={400} width={250} height={60} borderRadius={10} backgroundColor="orange" >
              [ Hosting Sites ]
          </Frame>
          <Frame top={400} left={230} backgroundColor="#fff" borderRadius={10} animate={animate} onTap={() => cycle()} style={{ fontSize:20}}>
              GitHub / Netlify / Heroku
          </Frame>
          <Frame top={500} width={250} height={60} borderRadius={10} backgroundColor="orange" >
              [ YouTube ]
          </Frame>
          <Frame top={500} left={230} backgroundColor="#fff" borderRadius={10} animate={animate} onTap={() => cycle()} style={{ fontSize:20}}>
              Channel Management / Video Editing / SEO / Thumbnail Creation
          </Frame>
        </Frame>

      </Frame>
    </AnimatePresence>
  );
}
