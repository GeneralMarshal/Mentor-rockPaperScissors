interface Props{
    fromGradient: string,
    toGradient: string,
    icon: string
}

export default function BubbleButton(props:Props){
    const {fromGradient, toGradient} = props
    return(
        <div className="relative w-[150px] h-[150px]">
            <span className={`absolute w-full h-full bg-linear-to-b from-[${fromGradient}] to-[${toGradient}] rounded-[50%]`}></span>

            <span className={`absolute w-full h-full bg-linear-to-b from-[${fromGradient}] to-[${toGradient}] rounded-[50%] translate-y-2.5 opacity-70`}></span>

            <span className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#ffffff] h-[75%] w-[75%] rounded-[50%] opacity-70">
            </span>

            <span className=" absolute flex justify-center items-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-45%] bg-[#ffffff] h-[75%] w-[75%] rounded-[50%] ">
                <img className="h-[60%]" src="/images/icon-paper.svg" alt="" />
            </span>
        </div>
    )
}