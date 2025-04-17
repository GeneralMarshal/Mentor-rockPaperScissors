
import BubbleButton from "../../components/BubbleButton"

export default function UserVsComputer(){
    return(
        <div className=" relative flex">
            <div className="flex flex-col">
                <p>YOU PICKED</p>
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
            <div className="flex flex-col">
                <p>THE HOUSE PICKED</p>
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
            
        </div>
    )
}