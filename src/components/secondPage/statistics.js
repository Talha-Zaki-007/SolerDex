import { Box, Container, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import background from '../assets/background.png';
import ourPartner from '../assets/ourPartner.png'
import line from '../assets/line.png';


export default function Statistics() {
    const myfontsize = useMediaQuery("(max-width: 900px)")

    return (
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
                        Your Statistics
                        <Box>
                            <img src={line} alt="" />
                        </Box>
                    </Box>
               

                <Box
                    sx={{
                        backgroundColor: '#240070',
                        width: '100%',

                    }}
                >
                    <Container>
                        <Grid
                            sx={{ py: '10%' }} >

                            <Grid container>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                                
                                    <Box
                                        sx={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                            textAlign: 'center',
                                            backgroundColor: "rgba(100, 73, 215, 0.1)",
                                            border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                            // px: '20%',
                                            py: '6%',
                                            color: '#FFFFFF',
                                            fontSize: myfontsize ? '14px' : '18px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                lineHeight: '21px',
                                            }}
                                        >
                                            Your Solardex EARN
                                        </Typography>
                                        <br />
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '30px',
                                                fontWeight: 700,
                                                lineHeight: '45px',
                                            }}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                
                                </Grid>

                                <Grid item lg={6} md={6} sm={12} xs={12}>
                               
                                    <Box
                                        sx={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                            textAlign: 'center',
                                            backgroundColor: "rgba(100, 73, 215, 0.1)",
                                            border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                            color: '#FFFFFF',
                                            // px: '20%',
                                            py: '6%',
                                            fontSize: myfontsize ? '14px' : '18px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                color: '#FFFFFF',
                                                fontFamily: 'Poppins',
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                lineHeight: '21px',
                                            }}
                                        >
                                            Your Wallet Balance
                                        </Typography>
                                        <br />
                                        <Typography
                                            sx={{
                                                color: '#FFFFFF',
                                                fontFamily: 'Poppins',
                                                fontSize: '30px',
                                                fontWeight: 700,
                                                lineHeight: '45px',
                                            }}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                    
                                </Grid>
                            </Grid>




                            <Grid container
                                sx={{
                                    // display: 'flex',
                                    // justifyContent: "space-evenly",
                                    my: '5%'
                                }}
                            >
                                <Grid item lg={3} md={6} sm={12} xs={12}>
                                
                                    <Box
                                        sx={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                            textAlign: 'center',
                                            backgroundColor: "rgba(100, 73, 215, 0.1)",
                                            border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontSize: myfontsize ? '10px' : '14px',
                                            lineHeight: '21px',
                                            fontWeight: 400,
                                            py: '5%',

                                        }}
                                    >
                                        <Typography>Claimed Reward</Typography>
                                        <br />
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '30px',
                                                fontWeight: 700,
                                                lineHeight: '45px',
                                            }}>
                                            0
                                        </Typography>
                                    </Box>
                                 
                                </Grid>

                                <Grid item lg={3} md={6} sm={12} xs={12}>
                                
                                    <Box
                                        sx={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                            textAlign: 'center',
                                            backgroundColor: "rgba(100, 73, 215, 0.1)",
                                            border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontSize: myfontsize ? '10px' : '14px',
                                            py: '5%',

                                        }}
                                    >
                                        <Typography>
                                            Current Staked
                                        </Typography>
                                        <br />
                                        <Typography
                                            sx={{
                                                color: '#FFFFFF',
                                                fontFamily: 'Poppins',
                                                fontSize: '30px',
                                                fontWeight: 700,
                                                lineHeight: '45px',
                                            }}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                   
                                </Grid>

                                <Grid item lg={3} md={6} sm={12} xs={12}>
                                
                                    <Box
                                        sx={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                            textAlign: 'center',
                                            backgroundColor: "rgba(100, 73, 215, 0.1)",
                                            border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontSize: myfontsize ? '10px' : '14px',
                                            py: '5%',
                                        }}
                                    >
                                        <Typography>Total Staked</Typography>
                                        <br />
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '30px',
                                                fontWeight: 700,
                                                lineHeight: '45px',
                                            }}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                    
                                </Grid>

                                <Grid item lg={3} md={6} sm={12} xs={12}>
                               
                                    <Box
                                        sx={{
                                            clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                            textAlign: 'center',
                                            backgroundColor: "rgba(100, 73, 215, 0.1)",
                                            border: ' 2px solid rgba(111, 100, 255, 0.45)',
                                            color: '#FFFFFF',
                                            fontFamily: 'Poppins',
                                            fontSize: myfontsize ? '10px' : '14px',
                                            py: '5%',
                                        }}
                                    >
                                        <Typography> Total UnStaked</Typography>
                                        <br />
                                        <Typography
                                            sx={{
                                                fontFamily: 'Poppins',
                                                fontSize: '30px',
                                                fontWeight: 700,
                                                lineHeight: '45px',
                                            }}
                                        >
                                            0
                                        </Typography>
                                    </Box>
                                    

                                </Grid>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </Box>
    )
}
