import { useSelector } from "react-redux"
import { RootState } from "../../../../store/store"
import useControlPanel from "../../hooks/useControlPanel"

const AudioTag = () => {

    /////States
    const stateSrcTrack = useSelector((store: RootState) => store.musicPlayer.stateSrcTrack)
    const stateTitleTrack = useSelector((store: RootState) => store.musicPlayer.stateTitleTrack)

    /////Hooks
    const { contextValue, changeTrack } = useControlPanel()

    return (
        <audio src={stateSrcTrack} ref={contextValue.refAudio} onEnded={() => changeTrack(contextValue.AudioPlayerClassExR.getNextTrack(stateTitleTrack))}></audio>
    )
}

export default AudioTag