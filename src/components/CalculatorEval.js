import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    answer: {
      backgroundColor: "#433437",
      padding: theme.spacing(1),
      textAlign: 'right',
      color: '#FFFFFF',
    },
    paper: {
        backgroundColor: "#eceff1",
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
      },
      
    symbols: {
        backgroundColor: '#D12C4D',
        padding: theme.spacing(1),
        textAlign: 'center',
        color: '#FFFFFF',
    }
  }));
  

function CalculatorEval() {
    const classes = useStyles();

    const [answer,setAnswer] = useState("0");
    
    const clearAnswer = () => {
        setAnswer("0");
    }

    const setDisplay = (event ) => {
        event.preventDefault();

        if (answer === "0"){
            setAnswer(event.currentTarget.dataset['value']);
        }
        else {
            setAnswer(answer + event.currentTarget.dataset['value'])
        }
    }

    const calculate = (event) => {
      try {
        setAnswer(eval(answer));
      }
      catch(err) {
        setAnswer("Err");
      }
      
    }
    return (
        <div className={classes.root}>
        <Container maxWidth="xs">
        
        <Typography  component="h3" variant="h3"  color="textSecondary" gutterBottom>
        Calculator with Eval
        </Typography>
        <Grid container spacing={0}>
          <Grid item xs={12} >
            <Paper className={classes.answer}>
                <Typography  component="h4" variant="h4"   gutterBottom>
                {answer}
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6} onClick={clearAnswer}>
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                Clear
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3} onClick={setDisplay} data-value="%">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                %
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3} onClick={setDisplay} data-value="/">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                /
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setDisplay} data-value="7">
            <Paper className={classes.paper} >
                <Typography  component="h4" variant="h6"  gutterBottom>
                7
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setDisplay} data-value="8">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                8
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setDisplay} data-value="9">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                9
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3} onClick={setDisplay} data-value="*">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                x
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3}  onClick={setDisplay} data-value="4">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                4
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setDisplay} data-value="5">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                5
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setDisplay} data-value="6">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                6
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setDisplay} data-value="-">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                -
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setDisplay} data-value="1">  
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                1
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setDisplay} data-value="2">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                2
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setDisplay} data-value="3">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                3
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setDisplay} data-value="+">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                +
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}  onClick={setDisplay} data-value="0">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                0
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setDisplay} data-value=".">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                .
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={calculate} data-value="=">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                =
                </Typography>
            </Paper>
          </Grid>
          
        </Grid>
        </Container>
      </div>
  
    )
}

export default CalculatorEval
