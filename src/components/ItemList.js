import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {

const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-b-gray-500 py-2"
        >
          <div className="flex justify-between">
            <div className=" px-4 w-10/12">
              <div className=" flex flex-col">
                <span className="font-bold">{item.card.info.name}</span>
                <span>{"Rs-" + item.card.info.price / 100}</span>
              </div>
              <p className=" text-xs py-1 px-1 ">
                {item.card.info.description}
              </p>
            </div>
            <div className="w-2/12 p-3 flex flex-col">
              <img
                className="w-[80px] h-[60px] rounded-lg"
                src={CDN_URL + item.card.info.imageId}
                alt=""
              />
              <div className="absolute mx-3 my-12">
                <button
                  className="bg-green-500 px-1 text-white rounded-md"
                  onClick={() => handleAddItem(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
