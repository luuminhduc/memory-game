import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { showResult } from "../../redux/actions/gameAction/actions";
import HoleItem from "../HoleItem";

const Main = () => {
  const { options, holes, move } = useSelector((state) => state.gameReducer);
  const { size } = options;

  console.log(holes);

  const dispatch = useDispatch();

  useEffect(() => {
    if (holes.length > 0) {
      setTimeout(() => {
        if (holes.every((el) => el.player)) {
          dispatch(showResult());
        }
      }, [500]);
    }
  }, [holes, dispatch]);

  return (
    <div>
      <div className={`grid grid-cols-${size === 16 ? "4" : "6"} gap-5 mt-10`}>
        {holes.length > 0 &&
          holes.map((item, idx) => (
            <HoleItem item={item} key={idx} idx={idx} />
          ))}
      </div>
      <div className="mt-10">
        <div className="bg-blueGray-300 flex flex-row justify-between items-center px-6 py-3 rounded">
          <p>Moves:</p>
          <p className="font-black">{move}</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
