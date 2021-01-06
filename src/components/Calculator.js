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
  

function Calculator() {
    const classes = useStyles();

    const [answer,setAnswer] = useState("0");
    const [memory,setMemory] = useState("0");
    const [activeOperation, setActiveOperation] = useState("");
    const [opActive, setOpActive] = useState(false);
    const [isPrevEventOperator, setIsPrevEventOperator] = useState(false);

    const clearAnswer = () => {
        setAnswer("0");
        setMemory("0");
        setActiveOperation("");
        setOpActive(false);
        setIsPrevEventOperator(false);
       }

    

    const setNumber = (event ) => {
        event.preventDefault();
        let currentNum = event.currentTarget.dataset['number'];

        if (isPrevEventOperator){
          setIsPrevEventOperator(false);
          setAnswer(currentNum);
          return;
        }
        
          if (answer === "0"){
              setAnswer(currentNum);
          }
          else {
            if ( currentNum === '.' ){
            if(!(answer.includes('.'))) {
              setAnswer(answer + currentNum);
              }
            }
          else {
            setAnswer(answer + currentNum);
          }
        }
            
        
    }

    const action = (event) => {
      event.preventDefault();
      let operation = event.currentTarget.dataset['operator']
      if (
        operation === '+' ||
        operation === '-' ||
        operation === '*' ||
        operation === '/' ||
        operation === '%'
      ) {
        if(!opActive){
          setMemory(answer)
          setAnswer("0")
          setActiveOperation(operation)
          setOpActive(true);
          setIsPrevEventOperator(true);
        }
        else {

        const number1 = memory;
        const operator = activeOperation; 
        const number2 = answer;
        
        const result = calculate(number1, operator, number2);
        setAnswer(result)
        
        setMemory(result);
        setActiveOperation(operation);
        setOpActive(true)
        setIsPrevEventOperator(true);
        }
      }
      else if (operation === '='){
        const number1 = memory;
        const operator = activeOperation;
        const number2 = answer;

        const result = calculate(number1, operator, number2);
        setAnswer(result)
        setMemory(result);
        
      }
      
        
    }
    const calculate = (number1, operator, number2 ) => {
      setOpActive(false);
      // setIsPrevEventOperator(false);
      switch(operator){
        case '+': 
          return (parseFloat(number1) + parseFloat(number2)).toString();
        case '-':
          return (parseFloat(number1) - parseFloat(number2)).toString();
        case '*':
          return (parseFloat(number1) * parseFloat(number2)).toString();    
        case '/':
          return (parseFloat(number1) / parseFloat(number2)).toString();  
        case '%':
          return (parseFloat(number1) % parseFloat(number2)).toString();  
        default:
          return "0" ;
        }
    
    }
    return (
        <div className={classes.root}>
        <Container maxWidth="xs">
        
        <Typography  component="h2" variant="h2"  color="textSecondary" gutterBottom>
        Calculator
        </Typography>
        {/* <Typography  component="body1" color="textSecondary" gutterBottom>
        answer : {answer}
        , memory : {memory}
        , operator : { activeOperation}
        , isOpActive : {opActive.toString()}
        , isPrevEventOperator : {isPrevEventOperator.toString()}
        </Typography> */}
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
          
          <Grid item xs={3} onClick={action} data-operator="%">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                %
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3} onClick={action} data-operator="/">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                /
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setNumber} data-number="7">
            <Paper className={classes.paper} >
                <Typography  component="h4" variant="h6"  gutterBottom>
                7
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setNumber} data-number="8">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                8
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setNumber} data-number="9">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                9
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3} onClick={action} data-operator="*">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"   gutterBottom>
                x
                </Typography>
            </Paper>
          </Grid>
          
          <Grid item xs={3}  onClick={setNumber} data-number="4">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                4
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setNumber} data-number="5">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                5
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setNumber} data-number="6">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                6
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={action} data-operator="-">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                -
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setNumber} data-number="1">  
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                1
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setNumber} data-number="2">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                2
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}  onClick={setNumber} data-number="3">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                3
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={action} data-operator="+">
            <Paper className={classes.symbols}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                +
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}  onClick={setNumber} data-number="0">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                0
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={setNumber} data-number=".">
            <Paper className={classes.paper}>
                <Typography  component="h4" variant="h6"  gutterBottom>
                .
                </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3} onClick={action} data-operator="=">
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

export default Calculator
