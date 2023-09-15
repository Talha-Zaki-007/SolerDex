import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import background from '../assets/background.png';
import hillLine from '../assets/hillLine.png';
import hillContent from '../assets/hillContent.png';
import hill from '../assets/hill.png';




export default function EndHill() {
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
                <Grid
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    
                }}
                >
                    <Box 
                    sx={{
                        padding: '1%'
                    }}>
                        <img width='100%' src={hillLine} />
                    </Box>
                    <br/>
                    <Box
                    sx={{
                        display:{xs: "none", sm:"none" , md:'block'}
                    }}
                    >
                        <img width='100%' src={hillContent}/>
                    </Box>
                    <br/>
                    <br/>
                    
                    <Box>
                        <img width='100%' src={hill} />
                    </Box>
                    
                </Grid>
            </Box>
        </Box>

    )
}
