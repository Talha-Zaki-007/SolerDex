import React from 'react'
import background from '../assets/background.png';
import { Container, Grid, Box, useMediaQuery } from '@mui/material'
import line from '../assets/line.png';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';


export default function MediaMention() {
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
                            MEDIA MENTION
                            <Box>
                                <img src={line} alt="" />
                            </Box>
                        </Box>
                   
                </Container>

                <Grid
                    sx={{
                        backgroundColor: "#240070",
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        padding: '5%',
                    }}
                >
                    
                    <Box
                        sx={{
                            margin: myMargin ? '10%' : null
                        }}
                    >
                        <img src={image1} />
                    </Box>
                    

                   
                    <Box
                        sx={{
                            margin: myMargin ? '10%' : null
                        }}
                    >
                        <img src={image2} />
                    </Box>
                    

                    
                    <Box
                        sx={{
                            margin: myMargin ? '10%' : null
                        }}
                    >
                        <img src={image3} />

                    </Box>
                    
                    
                   
                    <Box
                        sx={{
                            margin: myMargin ? '10%' : null
                        }}
                    >
                        <img src={image4} />

                    </Box>
                    

                    
                    <Box
                        sx={{
                            margin: myMargin ? '10%' : null,
                            justifyContent: myMargin ? "center" : null,
                        }}
                    >
                        <img src={image5} />
                    </Box>
                    
                </Grid>
            </Box>
        </Box>

    )
}
