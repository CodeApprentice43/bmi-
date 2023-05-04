interface Result {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
  }
  
  const calculateExercises = (exerciseHours: Array<number>, target: number): Result => {
    const periodLength = exerciseHours.length;
    const trainingDays = exerciseHours.filter(hours => hours > 0).length;
    const totalHours = exerciseHours.reduce((a, b) => a + b);
    const average = totalHours / periodLength;
    const success = average >= target;
    const ratio = average / target;
    let rating = 1;
    let ratingDescription = 'could do better';
  
    if (ratio >= 1) {
      rating = 3;
      ratingDescription = 'excellent job!';
    } else if (ratio >= 0.5) {
      rating = 2;
      ratingDescription = 'not too bad but could be better';
    }
  
    return {
      periodLength,
      trainingDays,
      success,
      rating,
      ratingDescription,
      target,
      average,
    };
  };
  
  const exerciseHours = [3, 0, 2, 4.5, 0, 3, 1];
  const target = 2;
  const result = calculateExercises(exerciseHours, target);
  console.log(result);

 