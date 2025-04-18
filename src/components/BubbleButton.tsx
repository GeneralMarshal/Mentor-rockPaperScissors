interface Props{
    fromGradient: string,
    toGradient: string,
    baseGradient: string,
    icon: string,
    type: string
}

export default function BubbleButton(props:Props){
    let {fromGradient, toGradient, baseGradient, icon, type} = props
    return(
        <div className="relative w-full h-full cursor-pointer">
            <span 
                className={`absolute w-full h-full rounded-[50%] translate-y-2 `}
                style={{
                    background: ` ${baseGradient}`
                }}
            ></span>


            <span 
                className={`absolute w-full h-full bg-gradient-to-b rounded-[50%]`}
                style={{
                    background: ` linear-gradient(to bottom, ${fromGradient}, ${toGradient} )`
                }}
            ></span>

            
            <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#ffffff] h-[75%] w-[75%] rounded-[50%] opacity-70">
            </span>

            <span className=" absolute flex justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] bg-[#ffffff] h-[75%] w-[75%] rounded-[50%] ">
                <img className="h-[60%]" src={icon} alt="pick-icon" />
            </span>
        </div>
    )
}