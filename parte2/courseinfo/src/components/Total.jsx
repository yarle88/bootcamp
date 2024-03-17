export default function Total({parts}){
    let sum=0;
    parts.map(part=>{
      sum+=part.exercises;
    })
    return(
        <p>total of {sum} exercises </p>
    );
}