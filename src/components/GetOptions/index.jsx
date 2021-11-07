import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getOptions, starGame } from "../../redux/actions/gameAction/actions";

const GetOptions = () => {
  const { optionModal } = useSelector((state) => state.gameReducer);

  const dispatch = useDispatch();

  const [size, setSize] = useState(16);

  const sizeArr = [16, 36];

  const handleClick = () => {
    const data = { size };
    dispatch(getOptions(data));
    dispatch(starGame(size));
  };

  return optionModal ? (
    <div className="fixed top-0 left-0 z-40 bg-coolGray-800 w-screen h-screen px-3 flex justify-center items-center">
      <div className="bg-white shadow-sm text-xl p-8 rounded-md w-full md:max-w-2xl mx-auto">
        <div className="mb-3">
          <h6 className="text-blueGray-600 font-semibold mb-3">
            Number of Holes
          </h6>
          <div className="grid grid-cols-4 gap-5 mb-3">
            {sizeArr.map((el) => (
              <p
                onClick={() => setSize(el)}
                className={`w-full flex cursor-pointer justify-center items-center p-3 ${
                  el === size ? "bg-coolGray-800" : "bg-blueGray-300 "
                } text-white rounded-3xl`}
                key={el}
              >
                {el}
              </p>
            ))}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="font-black w-full mt-3 p-3 bg-yellow-500 rounded-3xl hover:bg-yellow-600 text-white"
        >
          Start game
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default GetOptions;
