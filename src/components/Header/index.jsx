import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { restart, showOptions } from "../../redux/actions/gameAction/actions";

const Header = () => {
  const { options } = useSelector((state) => state.gameReducer);
  const dispatch = useDispatch();

  return (
    <div className="w-full flex flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">Memory</h1>
      <div className="flex flex-row justify-end items-center">
        <button
          onClick={() => dispatch(restart(options.size))}
          className="bg-yellow-500 font-black hover:bg-yellow-600 text-white px-6 py-3 rounded-3xl"
        >
          Restart
        </button>
        <button
          onClick={() => dispatch(showOptions())}
          className="bg-blueGray-200 ml-3 font-black hover:bg-blueGray-300 px-6 py-3 rounded-3xl"
        >
          New game
        </button>
      </div>
    </div>
  );
};

export default Header;
