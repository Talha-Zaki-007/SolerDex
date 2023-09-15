import React from 'react'
import { Container, Grid, Box, useMediaQuery } from '@mui/material'
import background from '../assets/background.png';
import ourPartner from '../assets/ourPartner.png'
import line from '../assets/line.png';



export default function OurPartners() {
    const myfontsize = useMediaQuery("(max-width: 900px)")
    const myMargin = useMediaQuery("(max-width: 600px)");


    return (
            <Box
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
                        <Grid>
                           
                        <Box
                            style={{
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                fontSize: myfontsize ? '18px' : '36px',
                                fontStyle: 'normal',
                                fontWeight: 700,
                                lineHeight: '51px',
                                letterSpacing: '0.27em',
                                textAlign: 'center',
                                paddingBottom: '10%',
                            }}
                        >
                            OUR PARTNERS
                            <Box>
                                <img src={line} alt="" />
                            </Box>
                        </Box>
                      
                        </Grid>



                       
                        <Grid 
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            flexWrap: 'wrap',
                            textAlign: 'center',
                        }}
                        >
                            <Box>
                                <img
                                style={{
                                    width: myMargin? '90%' : "100%",
                                }}
                                src={ourPartner}  />
                            </Box>
                            <Box >
                                <img 
                                style={{
                                    width: myMargin? '90%' : "100%",
                                }}
                                src={ourPartner} alt="" />
                            </Box>
                            <Box >
                                <img 
                                style={{
                                    width: myMargin? '90%' : "100%",

                                }}
                                src={ourPartner} alt="" />
                            </Box>
                        </Grid>
                        
                    </Container>
                </Box>
            </Box>
    )
}
