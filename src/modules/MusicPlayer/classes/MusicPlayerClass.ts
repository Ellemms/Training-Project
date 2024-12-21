import AudioInterface from "../interfaces/MusicPlayerInterface"

class AudioPlayerClass<S> {
    private readonly _audioSrcArray: Array<AudioInterface<string>> = [
        {audioTitle: 'Jim Yosef & Laura Brehm — Into the Sky', audioSrc: '/music/Jim Yosef & Laura Brehm — Into the Sky.mp3'},
        {audioTitle: 'Jim Yosef & RIELL — Animal', audioSrc: '/music/Jim Yosef & RIELL — Animal.mp3'},
        {audioTitle: 'Jim Yosef & RIELL — Hate You', audioSrc: '/music/Jim Yosef & RIELL — Hate You.mp3'},
    ]

    public get getFirstTrack(): AudioInterface<string> {
        return this._audioSrcArray[0]
    }

    public getNextTrack = (arg: S) => {
        const indexTrack: number = this._audioSrcArray.findIndex(el => arg === el.audioTitle)
        return indexTrack < this._audioSrcArray.length - 1 ? this._audioSrcArray[indexTrack + 1] : this._audioSrcArray[0]
    }

    public getPrevTrack = (arg: S) => {
        const indexTrack: number = this._audioSrcArray.findIndex((el) => arg === el.audioTitle)
        return indexTrack > 0 ? this._audioSrcArray[indexTrack - 1] : this._audioSrcArray[this._audioSrcArray.length - 1]
    }
}

export default AudioPlayerClass