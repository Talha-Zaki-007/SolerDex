import React from 'react'
import { Box } from '@mui/system'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import solar from '../assets/solar.png';
import background from '../assets/background.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import meteor from '../assets/meteor.png'


// import Typewriter from 'typewriter-effect';




export default function Main() {
    const random = useMediaQuery("(max-width: 900px)")

    const myfontsize = useMediaQuery("(max-width: 900px)")

    return (
            <Box id='main'
                style={{
                    background: '#02062c',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 100%',
                    backgroundSize: 'cover'
                }}>
                <Box
                    sx={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        ackgroundPosition: "bottom right",
                    }}>
                    <Container>
                        <Grid container direction='column' textAlign='center' alignItems= 'center' 
                        sx={{
                            pt: '10%',
                        }}
                        >

{/* <Typewriter 
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/> */}
                            <Box item >
                                
                               
                                <Typography>
                                    <span  
                                        style={{
                                            color: '#FFFFFF',
                                            fontFamily: 'Bangers',
                                            // fontSize: '47px',
                                            fontSize: myfontsize? '22px' : '47px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '50px',
                                            letterSpacing: '0.16em',
                                            textAlign: 'center',
                                        }}> Defi Exchange 
                                        </span>


                                    <span

                                        style={{
                                            color: '#EF32FF',
                                            fontFamily: 'Bangers',
                                            // fontSize: '47px',
                                            fontSize: myfontsize? '22px' : '47px',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '50px',
                                            letterSpacing: '0.16em',
                                            textAlign: 'center',
                                            marginLeft: '4px'
                                        }}> coming soon! </span>
                                </Typography>
                                
                            </Box>


                            <Box item>
                            
                                <img src={solar} 
                                style={{
                                    width: '100%'
                                }}
                                />
                              
                                <Box>

                                
                                <Button 
                                style={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontWeight: 700,
                                    padding: '2%',
                                    background: 'linear-gradient(85deg, rgba(173,0,255,1) 0%, rgba(173,0,255,1) 26%, rgba(161,19,251,1) 48%, rgba(132,63,241,1) 100%, rgba(38,210,209,1) 100%)',
                                    fontSize: random ? '12px' : "18px",
                                    borderRadius: '10px',
                                }}
                                >
                                SolarPresale
                                </Button>
                              
                                </Box>
                                {/* <Box>
                                <img 
                                style={{
                                    width: '100%'
                                }}
                                src={meteor} alt="meteor" />
                                </Box> */}
                            </Box>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        
    )
}
