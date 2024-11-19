/////
const initialStateMusicPlayer = {
    stateTitleTrack: '',
    stateSrcTrack: '',
    stateIsPlaying: false,
    stateHeightBar: Array(25).fill(1),
    stateAudioTitleClass: 'audioTitle',
}

/////
export const MusicPlayerReducer = (state = initialStateMusicPlayer, action: any) => {
    switch (action.type) {
        case 'setStateTitleTrack': return {...state, stateTitleTrack: action.payload};
        case 'setStateSrcTrack': return {...state, stateSrcTrack: action.payload};
        case 'setStateIsPlaying': return {...state, stateIsPlaying: action.payload};
        case 'setStateHeightBar': return {...state, stateHeightBar: action.payload};
        case 'setStateAudioTitleClass': return {...state, stateAudioTitleClass: action.payload};

        default: return state
    }
}

/////
export interface MusicPlayerRoot {
        stateTitleTrack: string;
        stateSrcTrack: string;
        stateIsPlaying: boolean;
        stateHeightBar: Array<number>;
        stateAudioTitleClass: string;
}