import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  setHole1,
  setHole2,
  setMove,
  updateHoles,
  updateStatus,
} from "../../redux/actions/gameAction/actions";

const HoleItem = ({ item, idx }) => {
  const { isPlaying, holes, hole1, hole2, move } = useSelector(
    (state) => state.gameReducer
  );

  const dispatch = useDispatch();

  const showHole = (id) => {
    const arr = [...holes];
    arr.forEach((el) => {
      if (el.id === id) el.show = true;
    });
    dispatch(updateHoles(arr));
  };

  const hideHode = (id) => {
    const arr = [...holes];
    arr.forEach((el) => {
      if (el.id === id) {
        el.show = false;
      }
    });
    dispatch(updateHoles(arr));
  };

  const handleClick = () => {
    if (isPlaying) {
      if (!item.player) {
        if (hole1) {
          if (item.id !== hole1.id && !item.player) {
            dispatch(setHole2(item));
          }
        } else {
          dispatch(setHole1(item));
        }
      }
    }
  };

  useEffect(() => {
    if (hole1) {
      showHole(hole1.id);
    }
    if (hole2) {
      showHole(hole2.id);
    }
    if (hole1 && hole2) {
      dispatch(updateStatus(false));
      dispatch(setMove(move + 1));
      compare();
    }
    // eslint-disable-next-line
  }, [hole1, hole2]);

  const isCorrect = () => {
    return hole1.name === hole2.name;
  };

  const compare = () => {
    if (isCorrect()) {
      const arr = [...holes];
      arr.forEach((el) => {
        if (el.name === hole2.name) {
          el.player = "p";
        }
      });
      dispatch(updateHoles(arr));

      setTimeout(() => {
        dispatch(setHole1(null));
        dispatch(setHole2(null));
      }, [1000]);
      setTimeout(() => {
        dispatch(updateStatus(true));
      }, [1100]);
    } else {
      setTimeout(() => {
        hideHode(hole1.id);
        hideHode(hole2.id);
        dispatch(setHole1(null));
        dispatch(setHole2(null));
      }, [1000]);
      setTimeout(() => {
        dispatch(updateStatus(true));
      }, [1100]);
    }
  };

  return (
    <div onClick={handleClick} className={`cursor-pointer`}>
      {item.player ? (
        <div className="rounded-full font-bold text-2xl text-white h-24 flex justify-center items-center bg-yellow-500">
          {item.name}
        </div>
      ) : item.show ? (
        <div className="rounded-full font-bold text-2xl bg-blueGray-300 h-24 flex justify-center items-center">
          {item.name}
        </div>
      ) : (
        <div className="rounded-full bg-blueGray-800 h-24 flex justify-center items-center"></div>
      )}
    </div>
  );
};

export default HoleItem;
