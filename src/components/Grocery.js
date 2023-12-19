import { GROCERY_LOGO } from "../utils/constants";

const Grocery = () => {
    return (
     <div className="flex flex-col items-center my-20 gap-5">
        <img className="h-80 rounded-xl  " src={GROCERY_LOGO} alt="" />
        <h1 className="text-3xl">We are Getting Ready...</h1>
     </div>
    );
};

export default Grocery;