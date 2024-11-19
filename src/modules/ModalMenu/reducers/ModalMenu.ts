import MenuListInterface from "../interfaces/MenuListInterface";

const initialState = {
    stateVisibleMenu: false,
    stateVisibleSettings: true,
    stateMenuList: [{
        nameCategory: '',
        nameSubCategory: [''],
        visible: false,
    }],
    visibleListProjects: true,
}

export const ModalMenuReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case 'setStateVisibleMenu': return {...state, stateVisibleMenu: !state.stateVisibleMenu};
        case 'setVisibleSettings': return {...state, stateVisibleSettings: !state.stateVisibleSettings};
        case 'setStateMenuList': return {...state, stateMenuList: action.payload};
        case 'setVisibleListProjects': return {...state, visibleListProjects: !state.visibleListProjects};
        default: return state
    }
}

export interface ModalMenuRoot {
    stateVisibleMenu: boolean;
    stateVisibleSettings: boolean;
    stateMenuList: Array<MenuListInterface<string, boolean>>;
    visibleListProjects: boolean;
}