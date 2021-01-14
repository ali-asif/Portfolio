import React from 'react'
import { Typography, makeStyles, withStyles, Box } from "@material-ui/core"
import hello from "../images/hello.png";
import useWebAnimations from '@wellyshen/use-web-animations'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        height: "90.8vh",
        marginTop: '-20px',
    },
    sharp: {
        marginTop: "-28rem",
    },
    leftSide: {
        margin: '120px',
        width: "60%",
        height: '350px',
        color: "#fff",
        padding: "40px",
        "& h4": {
            fontSize: "3.125rem",
        },
        "& p": {
            fontSize: "1.1rem",
            padding: "0px",
            marginBottom: "12px",
        },
     

    },
}))

function Header() {
    const classes = useStyles()
    const header = useWebAnimations({
        keyframes: {
            transform: "translateY(100px)" ,
            top: "10%", 

        },
        timing: {
            duration: 3000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"

        }
    
    })


    return (
        <Box component="section" className={classes.root}>
            <Box component="div" className={classes.leftSide}>
                <Typography variant="h1" >
                    Portfolio
                </Typography>
                <Typography variant="h5" > Greetings to you all </Typography>
               
            </Box>
            <Box component="div">
                <img src={hello} ref={header.ref} alt="brain" height="70%" width="80%"/>
                {/* <img src={sharpImg} alt="sharp" height="500px" className={classes.sharp} /> */}

            </Box>
            <br></br>

        </Box>
    )
}

export default withStyles(useStyles)(Header)
