interface Props {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function RulesModal( {setShowModal}:Props ){
   
    return(
        <div className="fixed inset-0  w-full h-full">
            <div className="absolute z-20 inset-0 flex flex-col items-center justify-center h-[400px] p-8 max-w-[400px] w-full gap-8 rounded-2xl top-[50%] left-[50%] translate-[-50%]  bg-[#ffffff] ">
                <span className=" flex items-center justify-between w-full cursor-pointer">
                    <span className=" text-2xl font-bold text-[#3b4363]">RULES</span>
                     <img 
                        src="/images/icon-close.svg" 
                        alt="" className="close-icon w-6 h-6" 
                        onClick={()=>{setShowModal(false)}}
                     />
                </span>
                <img src="/images/image-rules.svg" alt=" game guide" className=" w-[300px]"/>
             </div>
             <div className="absolute w-full h-full bg-black opacity-30">

             </div>
        </div>
        
        
    )
}