export default function AnimatedButton(props){
    return(
        <button className="hover:animate-shake hover:animate-infinite hover:animate-duration-[1500ms] hover:animate-ease-linear">
            {props.button}
        </button>
    )
}