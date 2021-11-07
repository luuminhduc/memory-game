import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { restart, showOptions } from "../../redux/actions/gameAction/actions";

const Result = () => {
  const { resultModal, move, options } = useSelector(
    (state) => state.gameReducer
  );
  const dispatch = useDispatch();
  return resultModal ? (
    <div className="fixed top-0 left-0 bg-opacity-25 bg-coolGray-800 w-screen h-screen px-3 flex justify-center items-center">
      <div className="bg-white shadow-sm text-xl p-8 rounded-md w-full md:max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold">You did it</h1>
        <div className="mt-10">
          <div className="bg-blueGray-300 flex flex-row justify-between items-center px-6 py-3 rounded">
            <p>Moves:</p>
            <p className="font-black">{move}</p>
          </div>
        </div>
        <button
          onClick={() => dispatch(restart(options.size))}
          className="bg-yellow-500 w-full mt-10 font-black hover:bg-yellow-600 text-white px-6 py-3 rounded-3xl"
        >
          Restart
        </button>
        <button
          onClick={() => dispatch(showOptions())}
          className="bg-blueGray-200 w-full mt-10 font-black hover:bg-blueGray-300 px-6 py-3 rounded-3xl"
        >
          New game
        </button>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Result;
