
import { useState } from "react"
import BubbleButton from "../../components/BubbleButton"

interface OptionType {
  name:string,
  fromColor: string,
  toColor: string,
  baseColor: string,
  src: string
}
    
interface Props {
    options: OptionType[]
    status: null | string
    setCurrentScreen: (screen: number) => void
    userOption: string
}
export default function UserVsComputer({status, setCurrentScreen, userOption, options}:Props){

    const [userBubble, setUserBubble] = useState({})
    return(
        <div className=" relative flex gap-12">
            <div className="flex flex-col items-center gap-12">
                <p className=" text-xl font-semibold text-[#ffffff] tracking-[2px]">YOU PICKED</p>
                <div className="w-[200px] h-[200px] rounded-[50%] bg-[#131687]">
                    <BubbleButton 
                        baseGradient="#81580c" 
                        fromGradient="#ec9e0e"
                        toGradient="#eca922" 
                        icon="images/icon-scissors.svg"
                        type="scissors"
                    />
                    
                </div>
            </div>
           {
                status &&
                <div className="flex justify-center items-center flex-col gap-4">
                    <p className=" text-3xl text-[#ffffff] font-bold uppercase">{"you "+status}</p>
                    <button 
                        className=" text-md tracking-[2px] font-semibold py-4 px-8 bg-[#ffffff] rounded-lg text-red-500"
                        onClick={ ()=>{
                            setCurrentScreen(1)
                        }}
                    >
                        PLAY AGAIN
                    </button>
                </div>
           }
            
            <div className="flex flex-col items-center gap-12">
                <p className=" text-xl font-semibold text-[#ffffff] tracking-[2px]">THE HOUSE PICKED</p>
                <div className="w-[200px] h-[200px] rounded-[50%] bg-[#24254f]">
                    {/* <BubbleButton 
                        baseGradient="#81580c" 
                        fromGradient="#ec9e0e"
                        toGradient="#eca922" 
                        icon="images/icon-scissors.svg"
                        type="scissors"
                    /> */}
                </div>
            </div>
            
        </div>
    )
}