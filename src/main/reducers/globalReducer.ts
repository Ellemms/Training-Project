const initialState = {
    colorStyle: localStorage.getItem('colorStyle') || 'dark',
    nameActivePage: localStorage.getItem('nameActivePage') || '',
}

export const AppReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setColorStyle': return {...state, colorStyle: action. payload};
        case 'setNameActivePage': return {...state, nameActivePage: action.payload};
        default: return state
    }
}

export interface AppRootState {
    colorStyle: 'dark' | 'light';
    nameActivePage: string;
}