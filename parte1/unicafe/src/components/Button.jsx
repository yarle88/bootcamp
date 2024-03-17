export default function Button({handleClick,text}){
    return(
        <button type="submit" onClick={handleClick} >{text}</button>
    )
}