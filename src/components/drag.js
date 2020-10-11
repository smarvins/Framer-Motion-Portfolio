import React from 'react';
import { Frame, useMotionValue, useTransform } from "framer";
import { motion, AnimatePresence } from "framer-motion";
import '../App.scss';

export default function Drag(props) {
  const x = useMotionValue(0)
  const xInput = [-100, 0, 100];
  const background = useTransform(x, xInput, [
    "linear-gradient(90deg, #fe346e 0%, #493240 100%)",
    "linear-gradient(180deg, #000000 0%, rgb(0, 0, 0) 100%)",
    "linear-gradient(270deg, #fe346e 0%, #493240 100%)"
  ]);

  return (
    <AnimatePresence>
      <Frame
        background={'transform'}
        >
          <Frame top={330} background="black" width={550} height={220} style={{color:'white', fontSize:25, fontWeight:'100', wordSpacing: '3px', lineHeight:'45px'}}>
            And proud of the work I <span style={{color:'#fe346e'}}>do</span>.
          </Frame>

          <Frame
              style={{ background }}
              top={370}
              left={800}
              width={600}
              height={200}
              borderRadius={20}
              center
          >
              <Frame
                style={{ x }}
                center
                background="white"
                borderRadius={20}
                size={50}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
              />
          </Frame>
      </Frame>
    </AnimatePresence>
  );
}
