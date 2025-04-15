export default function ScoreBoard(){
    return (
        <>
            <div className=" flex max-w-[700px] w-full items-center justify-between h-36 py-4 px-6 border-2 border-[#606e85] rounded-2xl">
                <div className=" text-3xl font-bold leading-6 text-[#ffffff] ">
                    ROCK <br /> PAPER <br /> SCISSORS
                </div>
                <div className="flex  justify-center items-center flex-col h-full  w-32 rounded-lg bg-[#ffffff]">
                    <p className=" text-sm font-bold text-[#2a46c0] tracking-[1.5px]">
                        SCORE
                    </p>
                    <span className=" text-5xl font-bold text-[#474952]">
                        12
                    </span>
                </div>
            </div>
        </>
    )
}