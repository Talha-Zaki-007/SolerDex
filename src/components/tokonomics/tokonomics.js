import { Box, Container, Grid, useMediaQuery } from '@mui/material'
import React from 'react'
import './tokonomics.css'
import background from '../assets/background.png';
import line from '../assets/line.png';
import tokonomics from '../assets/tokonomics.png'


export default function Tokonomics() {
  const myfontsize = useMediaQuery("(max-width: 900px)")

  return (
    <Box id="Tokonomics"
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
        <Container>
          
            <Box
              style={{
                color: '#FFFFFF',
                fontFamily: 'Poppins',
                fontSize: myfontsize ? '18px' : '36px',
                fontStyle: 'normal',
                fontWeight: 700,
                lineHeight: '51px',
                letterSpacing: '0.27em',
              }}
            >
              Tokonomics
              <Box>
                <img src={line} alt="" />
              </Box>
            </Box>
         


          <Grid container justifyContent='space-around' >
            <Grid item>
              
                <img width='100%' src={tokonomics} alt="" />
              
            </Grid>

            
              <Grid item>
                <ul>
                  <li className='first'> <span
                    style={{
                      color: '#25B8BD',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.345em',
                      textAlign: 'left',
                    }}
                  >TOKEN FOR SALE</span> <sapn
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >55.71%</sapn></li>
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Poppins',
                      fontSize: myfontsize ? '14px' : '24px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '34px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >55,714,286 </span>


                  <li className='second'> <span
                    style={{
                      color: '#25B8BD',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.345em',
                      textAlign: 'left',
                    }}
                  >LIQUIDITY</span> <sapn
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >20%</sapn></li>
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Poppins',
                      fontSize: myfontsize ? '14px' : '24px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '34px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >20,000,000 </span>


                  <li className='third'> <span
                    style={{
                      color: '#25B8BD',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.345em',
                      textAlign: 'left',
                    }}
                  >STACKING</span> <sapn
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >4.29%</sapn></li>
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Poppins',
                      fontSize: myfontsize ? '14px' : '24px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '34px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >4,285,714 </span>


                  <li className='forth'> <span
                    style={{
                      color: '#25B8BD',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.345em',
                      textAlign: 'left',
                    }}
                  >TEAM</span> <sapn
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >5%</sapn></li>
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Poppins',
                      fontSize: myfontsize ? '14px' : '24px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '34px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >5,000,000 </span>


                  <li className='fifth'> <span
                    style={{
                      color: '#25B8BD',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.345em',
                      textAlign: 'left',
                    }}
                  >CENTRALIZED EXCHANGES</span> <sapn
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Bangers',
                      fontSize: myfontsize ? '12px' : '18px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: '25px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >15%</sapn></li>
                  <span
                    style={{
                      color: '#FFFFFF',
                      fontFamily: 'Poppins',
                      fontSize: myfontsize ? '14px' : '24px',
                      fontStyle: 'normal',
                      fontWeight: 700,
                      lineHeight: '34px',
                      letterSpacing: '0.12em',
                      textAlign: 'center',
                    }}
                  >15,000,000</span>
                </ul>
              </Grid>
            
          </Grid>


        </Container>
      </Box>
    </Box>
  )
}
