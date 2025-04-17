import RulesModal from "./RulesModal"
import ScoreBoard from "./ScoreBoard"
import { useState } from "react"
import TriPicker from "./TriPicker"
import UserVsComputer from "./UserVsComputer"

export default function LandingPage(){
    const [showModal, setShowModal] = useState<boolean>(false)
    const [currentScreen, setCurrentScreen] = useState(2)



    return(
        <main className=" relative flex flex-col items-center w-[100vw] h-[100vh] p-8 bg-radial from-[#1f3756] to-[#141539]">
            {showModal && <RulesModal setShowModal={setShowModal}/>}
            <ScoreBoard/>
            <div className="relative w-full h-full flex justify-center items-center">
                {(currentScreen === 1) && <TriPicker/>}
                {(currentScreen === 2) && <UserVsComputer/>}

                <button 
                    className="absolute z-10 bottom-8 right-8 border-2 border-[#606e85] rounded-lg text-xl font-semibold text-[#ffffff] tracking-[2.5px] px-8 py-2 cursor-pointer"
                    onClick={()=>{setShowModal(true)}}
                    >
                    Rules
                </button>
            </div>
            
        </main>
    )
}