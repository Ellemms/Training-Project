import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import { useEffect, useRef } from "react"

const useAudioTitle = () => {

    /////States
    const stateTitleTrack = useSelector((store: RootState) => store.musicPlayer.stateTitleTrack)
    const stateAudioTitleClass = useSelector((store: RootState) => store.musicPlayer.stateAudioTitleClass)

    /////Dispatch
    const dispatch = useDispatch()

    /////Refs
    const refAudioTitleContainer = useRef<HTMLDivElement>(null)
    const refAudioTitle = useRef<HTMLParagraphElement>(null)

    /////
    useEffect(() => {
        const titleContainerWidth: number = Number(refAudioTitleContainer.current?.clientWidth)
        const titleWidth: number = Number(refAudioTitle.current?.offsetWidth)
        titleWidth > titleContainerWidth ? dispatch({type: 'setStateAudioTitleClass', payload: 'audioTitleAnimation'})
                                         : dispatch({type: 'setStateAudioTitleClass', payload: 'audioTitle'})
    }, [stateTitleTrack])

    return { stateTitleTrack, stateAudioTitleClass, refAudioTitleContainer, refAudioTitle }

}

export default useAudioTitle