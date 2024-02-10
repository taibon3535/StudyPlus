import {Background} from "../components/Background"
import { Navbar } from "../components/navbar";
import {Timer} from "../components/timer";

export const Fifty = () => {
    return(
        <div>
            <Navbar/>
            <Timer learntime={50} lbrake={20} sbrake={10}/>
            <Background/>
        </div>
        );
}
export default Fifty;