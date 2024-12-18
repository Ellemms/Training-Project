import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@src/store/store"
import { useEffect } from "react"

const useEqualizer = () => {

    /////States
    const stateIsPlaying = useSelector((store: RootState) => store.musicPlayer.stateIsPlaying)
    const stateHeightBar = useSelector((store: RootState) => store.musicPlayer.stateHeightBar)

    /////Dispatch
    const dispatch = useDispatch()

    //////EqualizerAnimation
    const randomHeight = () => {
        return Math.floor(Math.random() * 30) + 1
    }

    /////
    useEffect(() => {
        if (stateIsPlaying) {
            const setHeightBar = setInterval (() => {
                const newArrayHeightValues = stateHeightBar.map(() => {
                        return randomHeight()
                    })

                dispatch({type: 'setStateHeightBar', payload: newArrayHeightValues})
            }, 100);

            return () => clearInterval (setHeightBar)
        }
        
    }, [stateIsPlaying])

    return { stateHeightBar }

}

export default useEqualizer