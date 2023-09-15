import { Container, Grid, useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'

import aboutRings from '../assets/aboutRings.png';
import background from '../assets/background.png';
import line from '../assets/line.png';


export default function About() {
  const myfontsize = useMediaQuery("(max-width: 900px)")

  const mywidth = useMediaQuery("(max-width: 600px)");

  return (
      <Box id='About'
      style={{
        background: '#02062c',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '100% 100%',
        backgroundSize: 'cover',
        paddingTop: '15%',  
    }}
      >
          <Box
           sx={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            ackgroundPosition: "100% 100%",

        }}
          >
            <Box
           sx={{
            backgroundImage: `url(${aboutRings})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: mywidth? 'top right' : "top left",
            // backgroundSize:"100% 100%",
            height:"80vh"
        }}
          >
              <Container> 
              <Box 
                sx={{
                  width: '100%',
                }}
                >
                <Box
                sx={{
                  width: mywidth? "100%": '50%',
                  float: 'right',
                  
                }}
                >
                  
                   <Box
                   style={{                    
                    color: '#FFFFFF',
                    fontFamily: 'Poppins',
                    fontSize: myfontsize? '18px' : '36px',  
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '51px',
                    letterSpacing: '0.27em',
                }}
                   >
                     About
                     <Box>
                     <img src={line} alt="" />
                   </Box>
                   </Box>
                   
                   
                   
                   <Box
                   style={{   
                    color: '#FFFFFF',
                    fontFamily: 'Poppins',
                    fontSize: myfontsize? '14px' : '22px',
                    textAlign: 'justify',
                    fontWeight: 400,
                    letterSpacing: '0.27em',
                    p: 5,
                }}
                   >
                   Solar is the first US based Solana Defi exchange that enables users to trade tokens on the
                    	Solano network. Solar plans to eliminate rug pulls by having our smart contracts automatically
                       	lock liquidity at a minimum of 6 months. Any token not using Solar…. Is most likely a scam.
                   </Box>
                   
                 </Box>
                 </Box>
                
              </Container>
              </Box>
          </Box>
      </Box>
  )}

