import { Box, Container, useMediaQuery } from '@mui/material';
import React from 'react'
import background from '../assets/background.png';
import line from '../assets/line.png';
import { Carousel } from '3d-react-carousal';
import carousel1 from '../assets/carousel1.png'




export default function OurTeam() {
    const myfontsize = useMediaQuery("(max-width: 900px)")

    let slides = [
        <img src={carousel1} alt="1" />,
        <img src={carousel1} alt="1" />,
        <img src={carousel1} alt="1" />,
        // <img src={carousel2} alt="2" />,
        // <img src={carousel2} alt="3" />,
    ];

    return (
            <Box id='Team'
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
                            OUR TEAM
                            <Box>
                                <img src={line} alt="" />
                            </Box>
                        </Box>
                       
                        <Box py= " 8%"
                        >
                        <Carousel slides={slides} autoplay={false} interval={1000} />
                        </Box>
                    </Container>
                </Box>
            </Box>
    )
}
