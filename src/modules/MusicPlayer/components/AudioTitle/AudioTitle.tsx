import useAudioTitle from "../../hooks/useAudioTitle"

const AudioTitle = () => {

    const { stateTitleTrack,
            stateAudioTitleClass,
            refAudioTitleContainer,
            refAudioTitle } = useAudioTitle()

    return (
        <div className='audioTitleContainer' ref={refAudioTitleContainer}>
            <p className={stateAudioTitleClass} ref={refAudioTitle}>
                {stateTitleTrack}
            </p>
        </div>
    )
}

export default AudioTitle