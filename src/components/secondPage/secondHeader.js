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



export default function SecondHeader() {
    const random = useMediaQuery("(max-width: 900px)")

    const myfontsize = useMediaQuery("(max-width: 900px)")

    return (
        <>
            <Box
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
                            pt: '15%',
                        }}
                        >
                            <Box item>
                            <Box>
                                
                                <img src={solar} alt=""
                                style={{
                                    width: '100%'
                                }}
                                />
                                
                                </Box>
                            <br/>

                            
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
                                        }}> STACKING </span>
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
                                        }}> DASHBOARD </span>
                                </Typography>
                                
                            </Box>
                            <br/>
                            <br/>

                            <Box item>
                                
                                <Box>
                                <Button
                                style={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: '18px',
                                    fontStyle: 'normal',
                                    fontWeight: 700,
                                    // lineHeight: '27px',
                                    letterSpacing: '0.045em',
                                    textAlign: 'left',
                                    padding: '10px',
                                    background: 'linear-gradient(85deg, rgba(173,0,255,1) 0%, rgba(173,0,255,1) 26%, rgba(161,19,251,1) 48%, rgba(132,63,241,1) 100%, rgba(38,210,209,1) 100%)',
                                    cursor: 'pointer',
                                    fontSize: random ? '12px' : "17px",
                                }}
                                >
                                Solar Stack
                                </Button>
                                </Box>
                                
            
                            </Box>
                        </Grid>

                        <Grid container mt={30}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',

                        }}
                        >
                            <Grid item lg={3} md={3} sm={12} xs={12}
                            sx={{
                                clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                width: '15%',
                                textAlign: 'center',
                                backgroundColor: "rgba(100, 73, 215, 0.1)",
                                border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                padding:"1.5rem 4rem",
                                color: '#FFFFFF',
                                fontSize: myfontsize ? '14px' : '18',
                            }}
                            >
                           
                                <Box>
                                <Typography
                                 sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    lineHeight: '21px',
                                }}
                                >
                                TOTAL VALUE STAKED
                                </Typography>
                                <br/>
                                <Typography
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: '30px',
                                    fontWeight: 700,
                                    lineHeight: '45px',                                    
                                }}
                                >
                                $21,610,291
                                </Typography>
                                </Box>
                            
                            </Grid>
                            

                            <Grid  item lg={3} md={3} sm={12} xs={12}
                            sx={{
                                clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                width: '15%',
                                textAlign: 'center',
                                backgroundColor: "rgba(100, 73, 215, 0.1)",
                                border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                padding:"1.5rem 4rem",
                                color: '#FFFFFF',
                                fontSize: myfontsize ? '14px' : '18',
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
                                SolarDex STACKED
                                </Typography>
                                <br/>
                                <Typography
                                 sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: '30px',
                                    fontWeight: 700,
                                    lineHeight: '45px',                                    
                                }}
                                >
                                $11,610,291
                                </Typography>
                               
                            </Grid>


                            <Grid item lg={3} md={3} sm={12} xs={12}
                            sx={{
                                clipPath: 'polygon(0% 0%, 75% 0%, 100% 37%, 100% 98%, 0% 100%)',
                                width: '15%',
                                textAlign: 'center',
                                backgroundColor: "rgba(100, 73, 215, 0.1)",
                                border: ' 2px solid rgba(111, 100, 255, 0.45)', 
                                padding:"1.5rem 4rem",
                                color: '#FFFFFF',
                                fontSize: myfontsize ? '14px' : '18',
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
                                Average API
                                </Typography>
                                <br/>
                                <Typography
                                 sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: '30px',
                                    fontWeight: 700,
                                    lineHeight: '45px',                                    
                                }}
                                >
                                50%
                                </Typography>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </>
    )
}
