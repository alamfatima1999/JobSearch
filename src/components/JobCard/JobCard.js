import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { styled as muiStyled } from '@mui/system';

const styles = {
    jobCard: {
        padding: 2,
        marginBottom: 2,
        position: 'relative',
        borderRadius: 5,
        transition: 'transform 0.3s', 
        '&:hover': {
            transform: 'scale(1.05)',
        },
    },
    badge: {
        position: 'absolute',
        top: 1,
        left: 1,
        backgroundColor: '#FFFFFF',
        color: '#000000',
        padding: '4px 8px',
        borderRadius: 20,
        border: '1px solid #000000',
        margin: '12px 0px 0px 12px'
    },
    header: {
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        marginBottom: 1,
        paddingTop: '40px',
    },
    logo: {
        width: 56,
        height: 56,
        marginRight: 2,
        borderRadius: '50%',
    },
    companyInfo: {
        textAlign: 'left',
        paddingLeft: 10,
        '& > *': {
            margin: '0.5rem 0',
            fontWeight: 'bold',
            color: '#000000',
        },
    },
    aboutUs: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 'bold',
        color: '#000000',
    },
    aboutCompany: {
        fontSize: '1rem',
        lineHeight: 1.5,
        fontWeight: 600,
        color: '#000000',
    },
    salary: {
        textAlign: 'left',
        margin: '8px 0',
        fontWeight: 400,
        color: '#000000',
    },
    jobDesc: {
        textAlign: 'left',
        margin: '8px 0',
        fontWeight: 400,
        color: '#000000',
    },
    experience: {
        textAlign: 'left',
        margin: '8px 0',
        fontWeight: 'bold',
        color: '#000000',
    },
};

const ColorButton = muiStyled(Button)({
    color: '#000000',
    backgroundColor: 'rgb(85, 239, 196)',
    '&:hover': {
        backgroundColor: 'rgb(56, 186, 157)',
    },
});

const JobCard = ({ job }) => {
    const [openDialog, setOpenDialog] = useState(false);

    const handleViewJob = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };
    const getCurrencySymbol = (currencyCode) => {
        switch (currencyCode.toUpperCase()) {
            case 'USD':
                return ' $ ';
            case 'INR':
                return ' ₹ ';
            default:
                return currencyCode; // Return code itself if symbol is not found
        }
    };

    return (
        <div>
            <Paper elevation={3} sx={styles.jobCard}>
                <div style={styles.badge}><span role="img" aria-label="time icon">⏰</span> Posted 10 days ago</div>
                <div style={styles.header}>
                    {/* { Dummy Image consider as placeholder for company Logo} */}
                    <img src={"https://dummyimage.com/300"} alt={job.company} style={styles.logo} />
                    <div style={styles.companyInfo}>
                        <Typography variant="h6" sx={{ fontSize: '13px', fontWeight: 800, letterSpacing: '1px', marginBottom: '3px', color: '#8b8b8b' }}>{"Company Name"}</Typography>
                        <Typography variant="subtitle1" sx={{ fontSize: '14px', lineHeight: 1.5 }}>{job.jobRole}</Typography>
                        <Typography variant="body2" sx={{ fontSize: '14px', fontWeight: 800 }}>{job.location}</Typography>
                    </div>
                </div>
                <Typography variant="body2" sx={styles.salary}>
                    Estimated Salary Range: {job.minJdSalary ? job.minJdSalary + " - " + job.maxJdSalary : "-"}{getCurrencySymbol(job.salaryCurrencyCode)}✅
                </Typography>
                <Typography variant="body2" sx={styles.jobDesc}>
                    <div style={styles.aboutCompany}> About Company:</div>
                    <div style={styles.aboutUs}> About Us:</div>
                    <div style={styles.jobDesc}>{job.jobDetailsFromCompany.substring(0, 150)}...</div> 
                </Typography>
                <Button color="primary" onClick={handleViewJob}>View Job</Button>
                <Typography variant="body2" sx={styles.experience}>
                    Minimum Experience
                    <div>{job.minExp || "-"}{" years"}</div>
                </Typography>
                <ColorButton variant="contained" startIcon={<FlashOnIcon />}>Easy Apply</ColorButton>

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
        </div>
    );
};

export default JobCard;
