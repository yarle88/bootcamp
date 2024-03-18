export default function Total({parts}){
   

     const totalSum=()=> parts.reduce((sum, part)=>{
      return sum+part.exercises;
     },0);
     
    return(
        <p>total of {totalSum()} exercises </p>
    );
}