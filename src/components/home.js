import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame, Stack } from "framer";
import { motion, AnimatePresence } from "framer-motion";
import '../App.scss';


export default function Home(props) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/Intro'), [history]);
  return (
    <AnimatePresence>
      <Frame
        background={'white'}
        width={"100%"}
        height={"100%"}
        >
        <Frame
          background={'black'}
          center
          animate={{
            width: ['0%', '10%', '30%', '50%', '130%'],
            height: ['0%', '10%', '50%', '50%', '150%'],
            borderRadius: ["5%", "5%", "5%", "5%", "5%"]
          }}
          transition={{
            delay:1.5,
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
          }}
          style={{fontSize:50, color:'white'}}
          onClick={handleOnClick}
          >
            <Frame
              center
              background={'black'}
              initial={{ opacity: 0}}
              animate={{ opacity: 1}}
              transition={{ duration: 0.5, delay:3.5 }}
              >
                Hello!
              </Frame>
        </Frame>
      </Frame>
    </AnimatePresence>
  );
}
