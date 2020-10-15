import React from 'react';
import {useCallback} from 'react';
import { useHistory } from 'react-router-dom';
import { Frame } from "framer";
import { AnimatePresence } from "framer-motion";
import Responsive from 'react-responsive';
import '../App.scss';

{/* declaratives for different media queries */}
const Desktop = props => <Responsive {...props} minWidth={992} />;
const Tablet = props => <Responsive {...props} minWidth={768} maxWidth={991} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

export default function Home(props) {
  {/* using hooks as a means to link other pages */}
  const history = useHistory();
  const handleOnClick = useCallback(() => history.push('/Intro'), [history]);
  return (
    <AnimatePresence>
      <Frame
        background={'white'}
        width={"100%"}
        height={"100%"}
        >
        {/* Desktop view */}
        <Desktop>
          <Frame
            background={'black'}
            center
            animate={{
              width: ['0%', '10%', '30%', '50%', '100%'],
              height: ['0%', '10%', '50%', '50%', '100%'],
              borderRadius: ["5%", "5%", "5%", "5%", "0%"]
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
        </Desktop>

        {/* Mobile view */}
        <Mobile>
          <Frame
            background={'black'}
            center
            animate={{
              width: ['0%', '20%', '50%', '50%', '100%'],
              height: ['0%', '5%', '20%', '50%', '100%'],
              borderRadius: ["5%", "5%", "5%", "5%", "0%"]
            }}
            transition={{
              delay:1.5,
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            style={{ fontSize:70, color:'white' }}
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
        </Mobile>

        {/* Tablet view */}
        <Tablet>
          <Frame
            background={'black'}
            center
            animate={{
              width: ['0%', '20%', '50%', '70%', '100%'],
              height: ['0%', '5%', '50%', '50%', '100%'],
              borderRadius: ["5%", "5%", "5%", "5%", "0%"]
            }}
            transition={{
              delay:1.5,
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
            }}
            style={{ fontSize:90, color:'white' }}
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
        </Tablet>
      </Frame>
    </AnimatePresence>
  );
}
