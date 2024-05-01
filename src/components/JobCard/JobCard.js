// JobCard.js

import React, { useState } from 'react';
// import { makeStyles } from '@mui/material/styles';
import { withStyles } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FlashOnIcon from '@mui/icons-material/FlashOn';

const useStyles = withStyles((theme) => ({
    jobCard: {
        padding: theme.spacing(2),
        marginBottom: theme.spacing(2),
        position: 'relative',
        borderRadius: theme.spacing(1),
    },
    badge: {
        position: 'absolute',
        top: theme.spacing(1),
        left: theme.spacing(1),
        backgroundColor: '#FFFFFF',
        color: '#000000',
        padding: theme.spacing(0.5, 1),
        borderRadius: theme.spacing(1),
        border: '1px solid #000000',
    },
    header: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(1),
        paddingTop: '40px',
    },
    logo: {
        width: theme.spacing(7),
        height: theme.spacing(7),
        marginRight: theme.spacing(2),
        borderRadius: '50%',
    },
    companyInfo: {
        '& > *': {
            textAlign: 'left',
            margin: theme.spacing(0.5, 0),
            fontWeight: 'bold',
            color: '#000000',
        },
    },
    companyName: { // Style for Company Name
        fontSize: '13px',
        fontWeight: 600,
        letterSpacing: '1px',
        marginBottom: '3px',
        color: '#8b8b8b',
    },
    jobRole: { // Style for jobRole
        fontSize: '14px',
        lineHeight: 1.5,
    },
    location: { // Style for Location
        fontSize: '14px',
        fontWeight: 500,
    },
    salary: {
        textAlign: 'left',
        margin: theme.spacing(1, 0),
        fontWeight: 400,
        color: '#000000',
    },
    jobDesc: {
        textAlign: 'left',
        margin: theme.spacing(1, 0),
        fontWeight: 400,
        color: '#000000',
    },
    aboutUs: {
        textAlign: 'left',
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 'bold',
        color: '#000000',
    },
    aboutCompany: {
        textAlign: 'left',
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 600,
        color: '#000000',
    },
    experience: {
        textAlign: 'left',
        margin: theme.spacing(1, 0),
        fontWeight: 'bold',
        color: '#000000',
    },
    applyButton: {
        textAlign: 'center',
        marginTop: theme.spacing(2),
        backgroundColor: '#55EFC4',
        color: '#000000',
    },
}));

const JobCard = ({ job }) => {
    const classes = useStyles();
    const [openDialog, setOpenDialog] = useState(false);

    const handleViewJob = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <Paper elevation={3} className={classes.jobCard}>
            <div className={classes.badge}><span role="img" aria-label="time icon">⏰</span> Posted 10 days ago</div>
            <div className={classes.header}>
                <img src={"https://dummyimage.com/300"} alt={job.company} className={classes.logo} />
                <div className={classes.companyInfo}>
                    <Typography variant="h6" className={classes.companyName}>{"Company Name"}</Typography>
                    <Typography variant="subtitle1" className={classes.jobRole}>{job.jobRole}</Typography>
                    <Typography variant="body2" className={classes.location}>{job.location}</Typography>
                </div>
            </div>
            <Typography variant="body2" className={classes.salary}>
                Estimated Salary Range: {job.salary || "10 - 20 LPA"} ✅
            </Typography>
            <Typography variant="body2" className={classes.jobDesc}>
                <span className={classes.aboutCompany}> About Company:</span>
                <br />
                <span className={classes.aboutUs}> About Us:</span>
                <br />
                <span className={classes.jobDesc}>{job.jobDetailsFromCompany.substring(0, 150)}...</span>

                <Button color="primary" onClick={handleViewJob}>View Job</Button>
            </Typography>
            <Typography variant="body2" className={classes.experience}>
                Minimum Experience
                <div>{"5+ years"}</div>
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className={classes.applyButton}
                startIcon={<FlashOnIcon />} // Adding the lightning icon as the start icon
            >
                Easy Apply
            </Button>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Job Details</DialogTitle>
                <DialogContent>
                    <Typography>{job.jobDetailsFromCompany}</Typography>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </Paper>
    );
};

export default JobCard;
