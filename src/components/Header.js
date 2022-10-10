import {React} from "react";
import { Code, GitHub } from "@mui/icons-material";
import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Colors from "../utils/Colors";
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
        margin: 1,
        padding: 0,
        transform: "translateX(6px)",
        "&.Mui-checked": {
            color: "#fff",
            transform: "translateX(22px)",
            "& .MuiSwitch-thumb:before": {
                backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
                    "#fff"
                )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
            },
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
        width: 32,
        height: 32,
        "&:before": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            left: 0,
            top: 0,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
            )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
        },
    },
    "& .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        borderRadius: 20 / 2,
    },
}));

const Header = ({ darkmode, toggle }) => {

    const location = useLocation()

    return (
        <AppBar
            style={{
                background: darkmode ? "" : Colors.GRAY3,
                paddingLeft: "7.5%",
                paddingRight: "5.5%",
                height: 55,
                justifyContent: "center",
            }}
            position="static"
            component="nav"
            elevation={1}
        >
            <Toolbar disableGutters sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Code sx={{ marginRight: 1, color: darkmode ? "white" : Colors.DARK }} />
                    <Typography sx={{
                            fontWeight: 700,
                            color: darkmode ? "white" : Colors.DARK,
                            textDecoration: "none",
                        }}
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                    >
                        UPCODING
                    </Typography>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                <Tooltip title="View all Upcoming contests" arrow enterDelay={500}>
                        <Button sx={{color: Colors.GRAY1, textTransform: "none", fontSize: 16}}>
                            <Link 
                                to="/" 
                                style={{ 
                                    textDecoration: "none",
                                    color: location.pathname==="/" ? darkmode ? 
                                            Colors.WHITE : Colors.DARK : Colors.GRAY1 
                                }}
                            >
                                Upcoming
                            </Link>
                        </Button>
                    </Tooltip>
                    <Tooltip title="View all Ongoing contests" arrow enterDelay={500}>
                        <Button sx={{color: Colors.GRAY1, textTransform: "none", fontSize: 16}}>
                            <Link 
                                to="/ongoing" 
                                style={{ 
                                    textDecoration: "none", 
                                    color: location.pathname==="/ongoing" ? darkmode ? 
                                            Colors.WHITE : Colors.DARK : Colors.GRAY1
                                }}
                            >
                                Ongoing
                            </Link>
                        </Button>
                    </Tooltip>
                    <Tooltip title="View user statistics" arrow enterDelay={500}>
                        <Button sx={{color: Colors.GRAY1, textTransform: "none", fontSize: 16}}>
                            <Link 
                                to="/userstats" 
                                style={{ 
                                    textDecoration: "none", 
                                    color: location.pathname==="/userstats" ? darkmode ? 
                                            Colors.WHITE : Colors.DARK : Colors.GRAY1
                                }}
                            >
                                User Stats
                            </Link>
                        </Button>
                    </Tooltip>
                    <Tooltip title="Contribute" arrow enterDelay={500}>
                        <IconButton 
                            sx={{color: Colors.GRAY1, marginRight: 1}}
                            onClick={() => window.open('https://github.com/sahanmndl/UpCoding-Web', "_blank")}
                        >
                            <GitHub />
                        </IconButton>
                    </Tooltip>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <MaterialUISwitch
                                    sx={{ m: 1 }}
                                    checked={darkmode}
                                    onChange={toggle}
                                />
                            }
                        />
                    </FormGroup>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header