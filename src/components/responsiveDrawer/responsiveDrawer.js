import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import { Avatar, Tooltip } from '@mui/material';
import solarlogo from '../assets/solarlogo.png';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import InfoIcon from '@mui/icons-material/Info';



const drawerWidth = 200;

function ResponsiveDrawer(props) {



   


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            {/* <Divider /> */}
            <Avatar alt="Uz" src={solarlogo}
                    sx={{

                        margin: 'auto',
                        my: '3%'
                    }}
                ></Avatar>
            <List>
            <Tooltip title="Follow us on Twitter">
                <ListItem button >
                    <ListItemIcon >
                        <TwitterIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>
                            Twitter
                        </Typography>

                    </ListItemText>
                </ListItem>
                </Tooltip>

            <Tooltip title="Like us on FaceBook">
                <ListItem button >
                    <ListItemIcon >
                        <FacebookIcon />
                    </ListItemIcon>

                    <ListItemText>
                        <Typography>
                            Facebook
                        </Typography>
                    </ListItemText>
                </ListItem>
                </Tooltip>

            <Tooltip title="Find us on LinkedIn">
                <ListItem button >
                    <ListItemIcon >
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>
                        LinkedIn
                        </Typography>
                    </ListItemText>
                </ListItem>
                </Tooltip>

            <Tooltip title="Subscribe ">
                <ListItem button >
                    <ListItemIcon >
                        <TelegramIcon />
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>
                        Telegram
                        </Typography>
                    </ListItemText>
                </ListItem>
                </Tooltip>

                {/* {['FaceBook' ,  'Twitter', 'Instagram', 'Telegram'].map((text, index) => (
                    <ListItem button key={text}>

                        {[<TwitterIcon/> , <FacebookIcon/>, <LinkedInIcon/>, <TelegramIcon/>].map((icone, index) => (
                            <ListItemIcon key={icone}>
                               {icone} 
                            </ListItemIcon>
                            ))}

                        <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}

            </List>

            <Divider />

            <List>
            <Tooltip title="Have a meeting with us">
            <ListItem button >
                    <ListItemIcon >
                    <RequestQuoteIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>
                        Get a Quote !
                        </Typography>
                    </ListItemText>
                </ListItem>
                </Tooltip>

            <Tooltip title="What we are? What we do?">
                <ListItem button >
                    <ListItemIcon >
                    <InfoIcon/>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>
                        About Us !
                        </Typography>
                    </ListItemText>
                </ListItem>
                </Tooltip>



                {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}

            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar
                    sx={{
                        backgroundColor: "#02062c"
                    }}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Tooltip title="You Profile">
                    <Avatar alt="Uzair" src="/static/images/avatar/2.jpg"
                        sx={{
                            mr: '4%'
                        }}
                    >

                    </Avatar>
                    </Tooltip>

                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Typography paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                    enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                    imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                    Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                    Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                    adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                    nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                    leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                    feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                    consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                    sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                    Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                    eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                    neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                    tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                    sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                    tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                    gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                    et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                    tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                    eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                    posuere sollicitudin aliquam ultrices sagittis orci a.
                </Typography>
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;