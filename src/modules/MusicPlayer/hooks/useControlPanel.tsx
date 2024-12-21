import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@src/store/store"
import AudioInterface from "../interfaces/MusicPlayerInterface"
import { useInitContext } from "@src/context/ContextProvider"

const useControlPanel = () => {

    /////Context
    const contextValue = useInitContext()

    /////States
    const stateIsPlaying = useSelector((store: RootState) => store.musicPlayer.stateIsPlaying)
    const stateHeightBar = useSelector((store: RootState) => store.musicPlayer.stateHeightBar)
    const stateTitleTrack = useSelector((store: RootState) => store.musicPlayer.stateTitleTrack)

    /////Dispatch
    const dispatch = useDispatch()

    /////Fcs
    const playAndPause = async () => {
        try {
            contextValue.refAudio.current && !contextValue.refAudio.current.paused 
                ? (contextValue.refAudio.current?.pause(),
                dispatch({type: 'setStateIsPlaying', payload: false}))
                : (await contextValue.refAudio.current?.play(),
                dispatch({type: 'setStateIsPlaying', payload: true}))
        } catch {
            dispatch({type: 'setStateIsPlaying', payload: false})
        }
    }

    const changeTrack = async (argTrack: AudioInterface<string>) => {
        try {
            contextValue.refAudio.current?.pause()
            dispatch({type: 'setStateIsPlaying', payload: false})
    
            const trackObject = argTrack
            dispatch({type: 'setStateTitleTrack', payload: trackObject.audioTitle})
            dispatch({type: 'setStateSrcTrack', payload: trackObject.audioSrc})
    
            const newArrayHeightValues = stateHeightBar.map(() => 1)
            dispatch({type: 'setStateHeightBar', payload: newArrayHeightValues})
    
            contextValue.refAudio.current?.load()
            setTimeout(async () => {
                await contextValue.refAudio.current?.play()
                dispatch({type: 'setStateIsPlaying', payload: true})
            }, 500)
        } catch {
            dispatch({type: 'setStateIsPlaying', payload: false})
        }
    }

    return { contextValue, stateTitleTrack, stateIsPlaying, changeTrack, playAndPause }
}

export default useControlPanel