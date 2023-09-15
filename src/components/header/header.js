import React from 'react'
import { Box } from '@mui/system'
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import background from '../assets/background.png';
import logo from '../assets/logo.png';
import DrawerMui from '../drawer/drawer'
import { Grid, Typography, useMediaQuery } from '@mui/material';
import { HashLink } from 'react-router-hash-link';





export default function Header() {

    const myDisplay = useMediaQuery("(max-width: 900px)");

    const headerContent = [
        "About",
        "Tokonomics",
        "Roadmap",
        "Team",
        "Solar Token",
    ];
    return (
            <Box
                style={{
                    background: '#02062c',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '100% 100%',
                    backgroundSize: 'cover',
                }}
            >
                <Box id= "header"
                    sx={{
                        backgroundImage: `url(${background})`,
                        backgroundRepeat: 'no-repeat',
                        ackgroundPosition: "bottom right",
                    }}
                >
                    <Container>


                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'row', }}>
                            <Box sx={{ flexGrow: 1, }}>
                                <DrawerMui data={headerContent} />
                            </Box>
                        </Box>

                        <Grid container 
                        // align='center'
                           sx={{
                                alignItems:"center",
                                p: '5%'
                               }}
                               >

                            <Grid item lg={3} md={3}
                            sx= {{
                                display:{ sm: 'none', xs: 'none',  md: 'block'}
                            }}
                            >
                                
                                <img src={logo} alt="logo" />
                                
                            </Grid>

                            <Grid item lg={6} md={6}  >
                            

                                <Box sx={{

                                    display: myDisplay?  { sm: 'none', xs: 'none',  md: 'block'} : "flex",
                                    cursor: 'pointer',
                                    color: "white",
                                    justifyContent: "space-around",
                                    color: '#FFFFFF',
                                    fontFamily: 'Poppins',
                                    }}>
                                   
                                    <Box>
                                        <HashLink to="#About" smooth 
                                        style={{
                                            textDecoration: 'none',
                                            color: '#FFFFFF'
                                        }}
                                        >
                                        About
                                        </HashLink>
                                        </Box>

                                    <Box>
                                        <HashLink to='#Tokonomics' smooth
                                        style={{
                                            textDecoration: 'none',
                                            color: '#FFFFFF'
                                        }}
                                        >
                                        Tokonomics
                                        </HashLink>
                                        </Box>

                                    <Box>
                                        <HashLink to="#Roadmap" smooth
                                        style={{
                                            textDecoration: 'none',
                                            color: '#FFFFFF'
                                        }}
                                        >
                                        Roadmap
                                        </HashLink>
                                        </Box>
                                    <Box>
                                        <HashLink to="#Team" smooth
                                        style={{
                                            textDecoration: 'none',
                                            color: '#FFFFFF'
                                        }}
                                        >
                                        Team
                                        </HashLink>
                                        </Box>
                                    <Box>
                                        <HashLink to="#Solar Token" smooth
                                        style={{
                                            textDecoration: 'none',
                                            color: '#FFFFFF'
                                        }}
                                        >
                                        Solar Token
                                        </HashLink>
                                        </Box>
                                </Box>
                                
                            </Grid>

                            <Grid item lg={3} md={3}
                                align="right"
                                sx={{
                                    display:{ xs: 'none', sm: 'none' ,  md: 'block' },
                                }}
                            >
                                
                                <Box>
                                <Button
                                    sx={{
                                        border: '1px solid #FFFFFF ',
                                        color: '#FFFFFF',
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        lineHeight: '19px',
                                        p: '3%',
                                        borderRadius: '10px',

                                    }}>
                                    SolarPresale
                                </Button>
                                <Button
                                    sx={{
                                        color: '#FFFFFF',
                                        fontFamily: 'Poppins',
                                        fontSize: '12px',
                                        fontWeight: 700,
                                        lineHeight: '19px',
                                        background: 'linear-gradient(85deg, rgba(173,0,255,1) 0%, rgba(173,0,255,1) 26%, rgba(161,19,251,1) 48%, rgba(132,63,241,1) 100%, rgba(38,210,209,1) 100%)',
                                        p: '3%',
                                        ml: '10px',
                                        borderRadius: '10px',
                                        
                                    }}>
                                    Connect Wallet
                                </Button>
                                </Box>
                                
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
    )
}
