// src/pages/Home.js
import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Home() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundImage: 'url(https://img.lovepik.com/bg/20231213/green-train-passes-on-the-tracks-with-hills-behind-it_2457332_wh1200.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <Paper elevation={3} sx={{ padding: '30px', width: '400px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Book Your Train Ticket</h2>
        <BookingForm />
      </Paper>
    </Box>
  );
}

function BookingForm() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Departure Station"
            select
            SelectProps={{ native: true }}
            defaultValue=""
          >
            
            <option value="StationA">Station A</option>
            <option value="StationB">Station B</option>
            <option value="StationC">Station C</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Arrival Station"
            select
            SelectProps={{ native: true }}
            defaultValue=""
          >
            
            <option value="StationA">Station A</option>
            <option value="StationB">Station B</option>
            <option value="StationC">Station C</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Travel Date"
            type="date"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Class"
            select
            SelectProps={{ native: true }}
            defaultValue=""
          >
            
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>
            <option value="FirstClass">First Class</option>
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            Search Trains
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default Home;
