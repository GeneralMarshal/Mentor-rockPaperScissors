import BubbleButton from "../../components/BubbleButton";

export default function TriPicker(){
      const bubbleData = [
        {
            title: "rock",
            fromColor: 	"#4865f4",
            toColor: 	"#5671f5",
            src: "/images/icon-rock.svg"
        },
        {
            title: "paper",
            fromColor: "#4865f4",
            toColor: "#5671f5",
            src: "/images/icon-paper.svg"
        },
        {
            title: "scissors",
            fromColor: "##ec9e0e",
            toColor: "#eca922",
            src:"/images/icon-scissors.svg"
        },
    ]
    return (
      <>
        <div>
          <svg height="200" width="200" fill="transparent" stroke="black" strokeWidth='10' xmlns="http://www.w3.org/2000/svg">
            <polygon points="10,10 190,10 100,190"></polygon>
          </svg>
  
        </div>
           <BubbleButton fromGradient={bubbleData[0].fromColor} toGradient={bubbleData[0].toColor} icon={bubbleData[0].src}/>
           
      </>
    );
}