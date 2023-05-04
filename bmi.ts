import axios from 'axios'

export const calculateBmi = (height: number, weight: number): string => {
    const bmi = weight / ((height / 100) ** 2);
  
    if (bmi < 18.5) {
      return 'Underweight';
    } else if (bmi < 25) {
      return 'Normal (healthy weight)';
    } else if (bmi < 30) {
      return 'Overweight';
    } else {
      return 'Obese';
    }
  };
  //define the return type of the function
  interface params {
    num1:number,
    num2:number
  }
  const parseArguments = (argv: string[]): params => 
  {
    if(argv.length<4){throw new Error ('Not enough arguments')}
    if(argv.length>4){throw new Error ('Too many arguments')}

    if(!isNaN(Number(argv[2])) && !isNaN(Number(argv[3])))
    {
     
     return {
      num1:Number(argv[2]),
      num2:Number(argv[3])
     }
    }
    else {
      throw new Error('provided arguments were not numbers')
    }

  }
 try {
    const {num1,num2} = parseArguments(process.argv) //object destructuring
    axios.get(`http://localhost:3003/bmi?height=${num1}&weight=${num2}`).then(response=>{
      console.log(response.data)
    })
 }
 catch(error) 
 {
  let errormessage = 'Something went wrong: '
  if(error instanceof Error)
  {
    errormessage+= error.message
    
  }
  console.log(errormessage)
 }
 
