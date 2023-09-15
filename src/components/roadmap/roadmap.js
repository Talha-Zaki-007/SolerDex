import { Container, Grid, useMediaQuery } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import background from '../assets/background.png';
import line from '../assets/line.png';
import roadmapRing from '../assets/roadmapRing.png'
import './roadmap.css'

export default function Roadmap() {
    const myfontsize = useMediaQuery("(max-width: 900px)")

    const coin = [
        'Coinmarketcap [DONE]',

        'Yahoo Finance [DONE]',

        'Bloomberg [DONE]',

        'PR Releases [DONE]',

        'Pre Sale [Pending]',

        'Solar Token Launch [Pending]',
    ]

    return (
            <Box id='Roadmap'
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
                            ROADMAP
                            <Box>
                                <img src={line} alt="" />
                            </Box>
                        </Box>
                        

                        
                        <Box>
                            <span
                                style={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '24px' : '42px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    lineHeight: '63px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',

                                }}
                            >2021</span>
                            <span
                                style={{
                                    color: 'rgba(255, 255, 255, 0.41)',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '18px' : '30px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '45px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    marginLeft: '4%'
                                }}
                            >2022</span>
                            <span
                                style={{
                                    color: 'rgba(255, 255, 255, 0.41)',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '13px' : '23px',
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '45px',
                                    letterSpacing: '0em',
                                    textAlign: 'left',
                                    marginLeft: '4%',

                                }}
                            >2023</span>
                        </Box>
                       
                    </Container>

                    <Grid container justifyContent='space-between' alignItems='center'>

                    
                        <Grid item lg={4} sm={12} xs={12} md={4} >
                           
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    clipPath: "polygon(0 0, 60% 0, 100% 31%, 100% 100%, 90% 100%, 0 100%, 0% 20%)",
                                    backgroundColor: "#4600DA",
                                    padding:"1.5rem 4rem",
                                    color: '#26D2D1',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '14px' : '18',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    marginBottom: '8%'

                                }}
                            >
                                November 2021
                            </Box>
                            

                            
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    clipPath: "polygon(0 0, 60% 0, 100% 31%, 100% 100%, 90% 100%, 0 100%, 0% 20%)",
                                    backgroundColor: "rgba(100, 73, 215, 0.1)",
                                    border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                    padding:"1.5rem 4rem",
                                    color: '#26D2D1',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '14px' : '18',
                                    fontStyle: 'normal',
                                    fontWeight: 700, 
                                    marginBottom: '8%'

                                }}
                            >
                                December 2021
                            </Box>
                            

                            
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    clipPath: "polygon(0 0, 60% 0, 100% 31%, 100% 100%, 90% 100%, 0 100%, 0% 20%)",
                                    backgroundColor: "rgba(100, 73, 215, 0.1)",
                                    border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                    padding:"1.5rem 4rem",
                                    color: '#26D2D1',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '14px' : '18',
                                    fontStyle: 'normal',
                                    fontWeight: 700,  
                                    marginBottom: '8%'

                                }}
                            >
                                January 2022
                            </Box>
                            

                            
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    clipPath: "polygon(0 0, 60% 0, 100% 31%, 100% 100%, 90% 100%, 0 100%, 0% 20%)",
                                    backgroundColor: "rgba(100, 73, 215, 0.1)",
                                    border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                    padding:"1.5rem 4rem",
                                    color: '#26D2D1',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '14px' : '18',
                                    fontStyle: 'normal',
                                    fontWeight: 700, 
                                    marginBottom: '8%'

                                }}
                            >
                                February 2022
                            </Box>
                           

                            
                            <Box
                                sx={{
                                    textAlign: 'center',
                                    clipPath: "polygon(0 0, 60% 0, 100% 31%, 100% 100%, 90% 100%, 0 100%, 0% 20%)",
                                    backgroundColor: "rgba(100, 73, 215, 0.1)",
                                    border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                    padding:"1.5rem 4rem",
                                    color: '#26D2D1',
                                    fontFamily: 'Poppins',
                                    fontSize: myfontsize ? '14px' : '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,  
                                    marginBottom: '8%'

                                }}
                            >
                                March - December 2022

                            </Box>
                            

                        </Grid>
                       


                        <Grid item  lg={4} md={4} sm={12} xs={12} >
                            {/* <ul>
                                {coin.map((item)=>{
                                    return
                                    <li>{item}</li>
                                })}
                            </ul> */}
                            
                            <ul
                            style={{
                                color: '#FFFFFF',
                                fontFamily: 'Poppins',
                                fontSize: myfontsize ? '14px' : '16px',
                                fontStyle: 'normal',
                                fontWeight: 400,
                                lineHeight: '24px',
                                letterSpacing: '0em',
                                textAlign: 'left',
                            }}
                            >
                                <li>
                                    Coinmarketcap [DONE]

                                </li>
                                <li>
                                    Yahoo Finance [DONE]
                                </li>
                                <li>
                                    Bloomberg [DONE]
                                </li>
                                <li>
                                    PR Releases [DONE]
                                </li>
                                <li>
                                    Pre Sale [Pending]

                                </li>
                                <li>
                                    Solar Token Launch [Pending]
                                </li>
                            </ul>
                            
                        </Grid>
                        <Grid item lg={4} md={4} 
                        sx={{
                            display: { xs: 'none' , sm: 'none',  md: 'block' }
                        }}
                        >
                            
                            <img width='100%' src={roadmapRing} alt="" />
                            
                        </Grid>

                    </Grid>
                    <Box>

                    </Box>
                </Box>
            </Box>
    )
}
