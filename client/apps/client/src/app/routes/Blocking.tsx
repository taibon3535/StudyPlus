import {Background} from "../components/Background"
import { Navbar } from "../components/navbar";
import {Timer} from "../components/timer";

export const Blocking = () => {
    return(
        <div>
            <Navbar/>
            <Timer learntime={30} lbrake={15} sbrake={5}/>
            <Background/>
        </div>
        );
}
export default Blocking;