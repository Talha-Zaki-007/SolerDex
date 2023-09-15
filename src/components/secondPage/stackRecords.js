import { Container, useMediaQuery } from '@mui/material'
import { Box, padding } from '@mui/system'
import React from 'react'
import background from '../assets/background.png';
import solarDexLogo from '../assets/solarDexLogo.png'

import stackAmount from '../assets/stackAmount.png'
import withdrawlTime from '../assets/withdrawlTime.png'
import unstake from '../assets/unstake.png'
import claim from '../assets/claim.png'



export default function StackRecords() {
    const myfontsize = useMediaQuery("(max-width: 900px)")

    return (
        <>
            <Box
                style={{
                    background: '#02062c',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 100%',
                    backgroundSize: 'cover',
                    paddingTop: '15%',
                }}>
                <Box
                    sx={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        ackgroundPosition: "100% 100%",
                    }}>

                    <Container>
                        <Box
                            sx={{
                                backgroundColor: 'rgba(36, 0, 112, 0.2)',
                                padding: '5%'
                            }}
                        >

                            <Box
                                sx={{
                                    textAlign: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        py: '10%'
                                    }}
                                >
                                    
                                        <img src={solarDexLogo} alt="" />
                                    
                                </Box>


                                <Box
                                    sx={{
                                        border: '1px solid rgba(111, 100, 255, 0.45)',
                                        padding: '5%',
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        flexWrap: 'wrap'

                                    }}
                                >
                                    
                                        <Box>
                                            <img src={stackAmount} alt="" />
                                        </Box>
                                    

                                    
                                        <Box>
                                            <img src={withdrawlTime} alt="" />
                                        </Box>
                                    

                                  
                                        <Box>
                                            <img src={unstake} alt="" />
                                        </Box>
                                   

                                  
                                        <Box>
                                            <img src={claim} alt="" />
                                        </Box>
                                   


                                </Box>
                                
                                <Box
                                    sx={{
                                        color: '#FFFFFF',
                                        fontFamily: 'Roboto',
                                        fontSize: myfontsize ? '16px' : '22px',
                                        fontWeight: 400,
                                        lineHeight: '26px',
                                        textAlign: 'center',
                                        py: '10%',
                                    }}
                                >
                                    You have no stake record yet.
                                </Box>
                               

                            </Box>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
