import React from "react";
import { Code } from "@mui/icons-material";
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Colors from "../utils/Colors";

const Header = () => {
    return (
        <AppBar style={{ background: Colors.GRAY3, paddingLeft: '11.5%', paddingRight: '11.5%', height: 54, justifyContent: 'center' }} 
            position="static" 
            component="nav"
            elevation={1}
        >
            <Toolbar disableGutters sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Code sx={{ marginRight: 1, color: '#757575' }} />
                    <Typography sx={{ fontWeight: 700, color: '#757575', textDecoration: 'none' }}
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                    >
                        UPCODING
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Button sx={{ color: Colors.GRAY2, marginRight: 2, textTransform: 'none', fontSize: 16 }}>
                        <Link to="/" style={{textDecoration: 'none', color: Colors.GRAY1}}>
                            Upcoming
                        </Link>
                    </Button>
                    <Button sx={{ color: '#757575', textTransform: 'none', fontSize: 16 }}>
                        <Link to="/ongoing" style={{textDecoration: 'none', color: Colors.GRAY1}}>
                            Ongoing
                        </Link>
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header