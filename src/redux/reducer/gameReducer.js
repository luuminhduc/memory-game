import * as actions from '../actions/gameAction/actionTypes';

const initialState = {
    options:{
        numOfPlayers:1,
        size:16,
    },
    optionModal:true,
    resultModal:false,
    isPlaying:false,
    holes:[],
    hole1:null,
    hole2:null,
    move:0,
}

export default function gameReducer(state=initialState, action) {
    const {type,payload} = action;
    switch(type){
        case actions.GET_OPTIONS:return {...state, options:payload, isPlaying:true};
        case actions.SHOW_OPTIONS: return {...state,optionModal:true};
        case actions.HIDE_OPTIONS: return {...state,optionModal:false};
        case actions.SHOW_RESULT: return {...state,resultModal:true};
        case actions.HIDE_RESULT: return {...state,resultModal:false};
        case actions.UPDATE_STATUS:return{...state,isPlaying:payload};
        case actions.UPDATE_HOLES: case actions.CREATE_HOLES: return {...state,holes:payload}
        case actions.SET_HOLE_1:return{...state,hole1:payload}
        case actions.SET_HOLE_2:return{...state,hole2:payload}
        case actions.SET_MOVE:return{...state,move:payload}
        default: return state;
    }
}