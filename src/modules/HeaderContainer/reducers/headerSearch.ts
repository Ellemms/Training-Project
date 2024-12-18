const initialState = {
    stateSearchArray: [],
    stateInputFocus: false,
}

export const HeaderSearch = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setStateSearchArray': return {...state, stateSearchArray: action.payload};
        case 'setStateInputFocus': return {...state, stateInputFocus: action.payload};
        default: return state
    }
}

export interface HeaderSearchRootState {
    stateSearchArray: Array<string>;
    stateInputFocus: boolean;
}