import React from "react";
// import hero from "../hero.svg";
import hero1 from "../hero1.png";
import { Link } from "react-router-dom";
import '../index.css'

import useWebAnimations, {flipInX} from '@wellyshen/use-web-animations'

const Main = () => {

 //   const [joined, setJoined] = useState("");
 //   const history = useHistory();

    const {ref} = useWebAnimations({...flipInX})


    return(
        <React.Fragment>
             {/* <Annie /> */}
            <header>

                <div ref={ref}>
                <img src={hero1} className={"hero1"} alt=" "/> 
                </div>
                <div>
                    <h1>We build &amp; design <br/> kinetic applications.</h1>
                    <p>Kinetic typography, is the technical term for “moving text.” 
                        It's an animation technique that mixes movement and text to convey ideas and evoke emotion. </p>
                        
                        
                    <Link to="/contact">Get in touch</Link>
                </div>
            </header>
        </React.Fragment>
    )
}


export default Main;