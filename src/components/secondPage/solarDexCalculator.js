import { Box, Button, Container, useMediaQuery } from '@mui/material';
import React from 'react'
import solarDexRing from '../assets/solarDexRing.png'
import background from '../assets/background.png';
import line from '../assets/line.png';


import pic2 from '../assets/pic2.png'
import pic3 from '../assets/pic3.png'
import pic4 from '../assets/pic4.png'
import { height } from '@mui/system';


export default function SolarDexCalculator() {
    const mywidth = useMediaQuery("(max-width: 600px)");
    const myfontsize = useMediaQuery("(max-width: 900px)")


    return (
        <Box id="Solar Token"
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
                        backgroundImage: `url(${solarDexRing})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'bottom right',

                    }}
                >
                    <Container>
                   
                        <Box
                            style={{
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                fontSize: myfontsize ? '24px' : '36px',
                                fontWeight: 700,
                                lineHeight: '51px',
                                letterSpacing: '0.27em',
                            }}
                        >
                            Solardex Calculator
                            <Box>
                                <img src={line} alt="" />
                            </Box>
                        </Box>
                        

                        <Box
                            sx={{
                                clipPath: "polygon(0 0, 74% 0, 100% 37%, 100% 100%, 0 100%, 0% 50%)",
                                backgroundColor: "rgba(100, 73, 215, 0.1)",
                                border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                textAlign: 'center',
                                fontFamily: 'Poppins',
                                color: "white",
                                display: 'flex',
                                flexDirection: 'column',
                                py: '3%',
                                width: '70%'
                            }}
                        >
                            <Box m="15%">

                           
                                <Box py='3%'>
                                    Calculate your solardex depending on the amount of staked tokens and your lock time.
                                </Box>

                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            background: '#15124E',
                                            border: ' 1px solid rgba(111, 100, 255, 0.45)',
                                            p: '2%',
                                        }}>
                                        <Box flexGrow='1'> SOLAR </Box>
                                        <Box flexGrow='1' backgroundColor='white' color='black' p='1%' mr="35%" ml="10%" > 5000 </Box>
                                    </Box>
                                </Box>
                                <Box py='3%' >
                                    <img src={pic2} alt="" />
                                </Box>
                                <Box py='3%' >
                                    Lock tokens for Days
                                </Box>
                                <Box >
                                    <img width='100%' src={pic3} alt="" />
                                </Box>
                                <Box py='3%' >
                                    <img src={pic4} alt="" />
                                </Box>
                                <Box>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            background: '#15124E',
                                            border: ' 1px solid rgba(111, 100, 255, 0.45)',
                                            p: '2%',
                                        }}>
                                        <Box flexGrow='1'> $SolarDex </Box>
                                        <Box flexGrow='1' backgroundColor='white' color='black' p='1%' mr="35%" ml="10%" > 5000 </Box>
                                    </Box>
                                </Box>
                                <Box py='3%'>
                                    locked until 9/1/2022
                                </Box>

                                
                                    <Button
                                        sx={{
                                            background: 'linear-gradient(85deg, rgba(173,0,255,1) 0%, rgba(173,0,255,1) 26%, rgba(161,19,251,1) 48%, rgba(132,63,241,1) 100%, rgba(38,210,209,1) 100%)',
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontSize: myfontsize ? '12px' : '20px',
                                            fontWeight: 700,
                                            borderRadius: '30px',
                                            px: '10%'
                                        }}> Connect Wallet
                                    </Button>
                                
                            </Box>
                        </Box>
                    </Container>




                </Box>
            </Box>
        </Box>




    )
}
