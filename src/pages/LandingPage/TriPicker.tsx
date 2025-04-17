import BubbleButton from "../../components/BubbleButton";

export default function TriPicker(){
     
    return (
      <div className="relative z-10 w-[250px] h-[250px] tripicker">
        <div className="absolute inset-0">
          <svg height="250" width="250" fill="transparent" stroke="#141539" strokeWidth='15 ' xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,10 240,10 125,190"></polygon>
          </svg>
  
        </div>
        <div className="absolute w-full h-full ">
          <div className="absolute w-[150px] h-[150px] right-0 top-0 translate-x-[50%] translate-y-[-50%]">
      	    <BubbleButton 
              baseGradient="#81580c" 
              fromGradient="#ec9e0e"
              toGradient="#eca922" 
              icon="images/icon-scissors.svg"
              type="scissors"
            />
          </div>
          <div className=" absolute w-[150px] h-[150px] left-0 top-0 translate-x-[-50%] translate-y-[-50%]">
      	    <BubbleButton 
              baseGradient="#2941ba" 
              fromGradient="#5671f5" 
              toGradient="#4865f4" 
              icon="images/icon-paper.svg"
              type="paper"
            />
          </div>
          <div className="absolute w-[150px] h-[150px] left-[50%] bottom-0 translate-x-[-50%]">
      	    <BubbleButton 
              baseGradient="#8c192e" 
              fromGradient="#dc2e4e" 
              toGradient="#dd405d" 
              icon="images/icon-rock.svg"
              type="rock"
            />
          </div>
            
        </div>
         
           
      </div>
    );
}