import React from 'react';
import { Frame, Stack, Scroll, useMotionValue, useTransform } from "framer";
import { motion, AnimatePresence } from "framer-motion";
import Drag from './drag';
import '../App.scss';


export default function Fit(props) {

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [60, -60])
  const rotateY = useTransform(x, [-100, 100], [-60, 60])
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
          <Frame background="black" width={1200} height={70} radius="5%" style={{color:'white', fontSize:70}}><span>Why would I be a good <span style={{color:'#fe346e'}}>Fit</span>?</span></Frame>
        </Stack>

        <Frame top={100} left={70} width={1150} height={500} background="transparent">
          <Frame top={110} background="black" width={550} height={220} style={{color:'white', fontSize:25, fontWeight:'100', wordSpacing: '3px', lineHeight:'45px'}}>
            I'm always on the lookout for new <span style={{color:'#fe346e'}}>tech</span>.
          </Frame>

          <Frame
              top={150}
              left={800}
              size={100}
              borderRadius="50%"
              center
              style={{ perspective: 2000, background: "radial-gradient(rgba(255,255,255,0), rgba(255,255,255,0.3))",}}
          >
              <Frame
                  // Visual & layout
                  size={150}
                  borderRadius={20}
                  backgroundColor="#fe346e"
                  center
                  // Dragging
                  drag
                  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  dragElastic={0.6}
                  // Transformation
                  x={x}
                  y={y}
                  z={100}
                  rotateX={rotateX}
                  rotateY={rotateY}
              />
          </Frame>
          <Frame top={50} background={'transparent'}>
            <Drag/>
          </Frame>
        </Frame>
      </Frame>
    </AnimatePresence>
  );
}
