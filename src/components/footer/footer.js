import React from 'react'
import background from '../assets/background.png';
import { Container, Grid, Box, useMediaQuery, Button } from '@mui/material';
import solarlogo from '../assets/solarlogo.png';
import solerdexBlur from '../assets/solerdexBlur.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { makeStyles } from '@mui/styles';
import TextField from '@mui/material/TextField';


const useStyles = makeStyles({
    cssLabel: {
        color: "#FFFFFF !important",
    },
    notchedOutline: {
        borderWidth: "1px",
        borderColor: "#FFFFFF !important",
        color: "#FFFFFF",
    },
});


export default function Footer() {
    const mywidth = useMediaQuery("(max-width: 600px)");

    const classes = useStyles();


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
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}
                    >
                        <Box>
                            
                            <Box>
                                <img width='100%' src={solarlogo} />
                            </Box>
                           
                           
                            <Box>
                                <img width='100%' src={solerdexBlur} />
                            </Box>
                            
                        </Box>
                    </Box>






                    <Grid
                    container spacing={5}

                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            paddingTop: '10%',
                        }}
                    >
                        <Grid item md={4} sm={12} xs={12} >
                            
                        <Box
                            sx={{
                                // width: '25%',
                                // width: mywidth ? '100%' : '25%',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                            }}
                        >
                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Bangers',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '25px',
                                    letterSpacing: '0.12em',
                                }}
                            >
                                ABOUT
                            </Box>
                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    fontSize: '13px',
                                    fontWeight: 400,
                                    lineHeight: '19px',
                                    letterSpacing: '0.015em',
                                }}
                            >
                                Solar is the first US based Solana Defi exchange that enables users to trade tokens
                                on the 	Solano network. Solar plans to eliminate rug pulls by having our smart
                                contracts automatically 	lock liquidity at a minimum of 6 months. Any token not
                                using Solar…. Is most likely a scam
                            </Box>

                        </Box>
                   
                        </Grid>


                        <Grid item  md={4} sm={12} xs={12} >
                           
                        <Box
                            lg={4} md={4} sm={12} xs={12}
                            sx={{
                                // width: mywidth ? '100%' : '25%',
                                py: mywidth ? "10%" : null,
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',

                            }}
                        >
                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Bangers',
                                    // fontSize: myfontsize ? '18px' : '36px',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '25px',
                                    letterSpacing: '0.12em',

                                }}
                            >
                                FOLLOW US
                            </Box>
                            <Box
                                sx={{
                                    color: '#26D2D1',
                                    display: 'flex',
                                    // justifyContent: 'space-between',
                                    textAlign: 'left',
                                    py: "10%"

                                }}
                            >
                                <Box>        <TwitterIcon  /> </Box>
                                <Box ml={2}> <FacebookIcon /> </Box>
                                <Box ml={2}> <LinkedInIcon /> </Box>
                                <Box ml={2}> <TelegramIcon /> </Box>
                            </Box>
                                <Box
                                    sx={{
                                        color: '#FFFFFF',
                                        fontFamily: 'Poppins',
                                        fontSize: '13px',
                                        fontWeight: 400,
                                        lineHeight: '19px',
                                    }}
                                >
                                    All rights reserved @solardex 2021
                                </Box>
                        </Box>
                        
                        </Grid>


                        <Grid item md={4} sm={12} xs={12} >
                           
                        <Box
                            
                            sx={{
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box
                                sx={{
                                    color: '#FFFFFF',
                                    fontFamily: 'Bangers',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    lineHeight: '25px',
                                    letterSpacing: '0.12em',

                                }}
                            >
                                SUBSCRIBE NOW
                            </Box>

                            <Box my={2} position="relative">
                                <TextField
                                    label="Write Your Email"
                                    sx={{ color: "#FFFFFF", fontFamily: "Roboto", fontSize: '10px' }}
                                    InputLabelProps={{
                                        classes: {
                                            root: classes.cssLabel,
                                            focused: classes.cssLabel,
                                        },
                                    }}
                                    InputProps={{
                                        classes: {
                                            root: classes.notchedOutline,
                                            focused: classes.notchedOutline,
                                            notchedOutline: classes.notchedOutline,
                                        },
                                    }}
                                    //   focused
                                    fullWidth

                                />

                                <Button
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: "16px",
                                        background: '#26D2D1',
                                        borderRadius: "28px 3px 3px 28px",
                                        color: "#190436",
                                        width: "110px",
                                        height: "56px",
                                        position: "absolute",
                                        marginLeft: "-110px",
                                        cursor: "pointer",
                                        fontFamily: "Bangers",
                                        p: '5%',
                                        "&:hover": {backgroundColor:"#26D2D1a1"}
                                    }}
                                >
                                    SEND
                                </Button> 
                            </Box>

                        </Box>
                    
                        </Grid>


                    </Grid>


                </Container>
            </Box>
        </Box>


    )
}
