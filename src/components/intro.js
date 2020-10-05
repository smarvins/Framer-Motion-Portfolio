import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame, Stack } from "framer";
import { motion, AnimatePresence } from "framer-motion";
import '../App.scss';

export default function Intro(props) {
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/Intro'), [history]);
  return (
    <AnimatePresence>
        <Frame
          center
          background={'black'}
          >
          <Frame
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{ duration: 0.5 }}
            center
            style={{
              width:'100%',
              height:'100%',
              fontSize:50,
              color:'white'
            }}
            >
            Hello! page 2
          </Frame>
        </Frame>
    </AnimatePresence>
  );
}
