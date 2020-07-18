import React, {useRef} from 'react'
// import './App.css'
import useWebAnimations, {backInLeft} from '@wellyshen/use-web-animations'
import hero1 from "../hero1.png";
import '../index.css'

function Aniee () {
    const {ref, playState} = useWebAnimations({...backInLeft})


    /*
    const {ref, playState, getAnimation} = useWebAnimations({
        keyframes:[
            {transform: "translate(0px)", background: "yellow"},
            {transform: "translate(500px)", background: "blue"}    
        ],
        timing: {
            duration:3000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out"
        },
        onUpdate:({playState, animate, animation}) => {

        }
    })
*/
    return (
        <div>
            {/* <div>Animation {playState}</div> */}
            <div ref={ref} style={{width: "100px", height:"100px"}} > 
                <img src={hero1} className={"hero1"}/>
            </div>

            {/* <button onClick={()=>{
                getAnimation().play()
            }} >Play</button>

            <button onClick={()=>{
                getAnimation().pause()
            }} >Pause</button> */}


        </div>
    )
}

export default Aniee