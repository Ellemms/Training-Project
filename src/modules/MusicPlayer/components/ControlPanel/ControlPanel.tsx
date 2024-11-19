import useControlPanel from "../../hooks/useControlPanel"

const ControlPanel = () => {

    const { contextValue, stateTitleTrack, stateIsPlaying, changeTrack, playAndPause } = useControlPanel()
    
    return (
        <div className='audioPlayerButtons'>
            <button className='previousTrackBtn' onClick={() => changeTrack(contextValue.AudioPlayerClassExR.getPrevTrack(stateTitleTrack))}>Prev</button>
            <button className='playPauseBtn' onClick={playAndPause}>{!stateIsPlaying ? 'Play' : 'Pause'}</button>
            <button className='nextTrackBtn' onClick={() => changeTrack(contextValue.AudioPlayerClassExR.getNextTrack(stateTitleTrack))}>Next</button>
        </div>
    )
}

export default ControlPanel