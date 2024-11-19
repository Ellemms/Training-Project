import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import AudioInterface from "../interfaces/MusicPlayerInterface"
import { useInitContext } from "../../../context/ContextProvider"

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
    const playAndPause = () => {
        !stateIsPlaying ? contextValue.refAudio.current?.play() : contextValue.refAudio.current?.pause()
        dispatch({type: 'setStateIsPlaying', payload: stateIsPlaying ? false : true})
    }

    const changeTrack = (argTrack: AudioInterface<string>) => {
        contextValue.refAudio.current?.pause()
        dispatch({type: 'setStateIsPlaying', payload: false})

        const trackObject = argTrack
        dispatch({type: 'setStateTitleTrack', payload: trackObject.audioTitle})
        dispatch({type: 'setStateSrcTrack', payload: trackObject.audioSrc})

        const newArrayHeightValues = stateHeightBar.map(() => 1)
        dispatch({type: 'setStateHeightBar', payload: newArrayHeightValues})

        contextValue.refAudio.current?.load()
        setTimeout(() => {
            contextValue.refAudio.current?.play()
            dispatch({type: 'setStateIsPlaying', payload: true})
        }, 500)
    }

    return { contextValue, stateTitleTrack, stateIsPlaying, changeTrack, playAndPause }
}

export default useControlPanel