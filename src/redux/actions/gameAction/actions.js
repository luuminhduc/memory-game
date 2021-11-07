import * as actions from './actionTypes';
import {v4} from 'uuid';

export const showOptions = () => {
    return {
        type: actions.SHOW_OPTIONS,
    }
}
export const hideOptions = () => {
    return {
        type: actions.HIDE_OPTIONS,
    }
}
export const showResult = () => {
    return {
        type: actions.SHOW_RESULT,
    }
}
export const hideResult = () => {
    return {
        type: actions.HIDE_RESULT,
    }
}

export const getOptions = (data) => {
    return{
        type: actions.GET_OPTIONS,
        payload:data,
    }
}

export const updateStatus = (status) => {
    return{
        type: actions.UPDATE_STATUS,
        payload:status,
    }
}

export const createHoles = (size) => {
    console.log(size);
    let arr = [];
    const numOfNumber = size / 2;
    for (let i = 1; i <= numOfNumber; i++) {
      arr.push(i);
      arr.push(i);
    }
    shuffle(arr);
    arr = arr.map(el => ({name:el,show:false, player:null,id:v4()}))
    return{
        type: actions.CREATE_HOLES,
        payload:arr,
    }
}

export const updateHoles = (arr) => {
    return{
        type: actions.UPDATE_HOLES,
        payload:arr,
    }   
}

const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
}

export const setHole1 = (hole) => {
    return{
        type:actions.SET_HOLE_1,
        payload:hole
    }
}

export const setHole2 = (hole) => {
    return{
        type:actions.SET_HOLE_2,
        payload:hole
    }
}

export const starGame = (size) => dispatch => {
    dispatch(setMove(0));
    dispatch(setHole1(null))
    dispatch(setHole2(null))
    dispatch(updateStatus(true));
    dispatch(hideResult());
    dispatch(hideOptions());
    dispatch(createHoles(size));
}

export const endGame = () => dispatch => {
    dispatch(updateStatus(false));
    dispatch(showResult());
}

export const restart = (size) => dispatch => {
    dispatch(setMove(0));
    dispatch(setHole1(null))
    dispatch(setHole2(null))
    dispatch(createHoles(size));
    dispatch(hideResult())
}

export const setMove = (num) => {
    return{
        type: actions.SET_MOVE,
        payload:num,
    }
}