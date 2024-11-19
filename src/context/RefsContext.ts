interface RefsContextType {
    searchInputRef: React.RefObject<HTMLInputElement>;
    refAudio: React.RefObject<HTMLAudioElement>;
    RefUserListScroll: React.RefObject<HTMLDivElement>;
}

const defRefsValue: RefsContextType = {
    searchInputRef: { current: null },
    refAudio: { current: null },
    RefUserListScroll: { current: null }
}

export {defRefsValue}