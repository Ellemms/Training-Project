import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../store/store"
import React, { useEffect } from "react"
import UserListClass from "../classes/UserList_Class"

const useUserListFooter = (UserListClassExR: UserListClass, RefUserListScroll: React.ForwardedRef<HTMLDivElement | null>) => {

    /////States
    const {
        UserListArray,
        UserListSelect_Visible,
        QuantityOfElements,
        ActivePage,
        TotalNumberPages,
        UserListSearchValue
    } = useSelector ((store: RootState) => store.userList)

    /////Dispatch
    const dispatch = useDispatch()
    
    /////UseEffects
    useEffect(() => {
        setUserListArray(UserListSearchValue, ActivePage, QuantityOfElements)
        dispatch({type: 'resetNumberActivePage'})
    }, [QuantityOfElements])
    
    useEffect(() => {
        setUserListArray(UserListSearchValue, ActivePage, QuantityOfElements)
    }, [ActivePage])
    
    useEffect(() => {
        const totalNumberPages = Math.ceil(UserListClassExR.GetNewArray.length / QuantityOfElements);
        dispatch({type: 'setTotalNumberPages', payload: totalNumberPages >= 1 ? totalNumberPages : 1});
        (RefUserListScroll as React.MutableRefObject<HTMLDivElement | null>).current?.scrollTo({ top: 0, behavior: 'smooth' });
    }, [UserListArray])

    /////Functions
    const setQuantityOfElements = (e: React.MouseEvent<HTMLLIElement>) => {
        dispatch({type: 'setQuantityOfElements', payload: e.currentTarget.textContent})
        dispatch({type: 'setUserListSelect_Visible'})
    }
    const setUserListArray = (UserListSearchValue: string, ActivePage: number, QuantityOfElements: number) => {
        dispatch({type: 'setUserListArray', payload: UserListClassExR.ChangePage(UserListSearchValue, ActivePage, QuantityOfElements)});
    };
    
    /////Styles&Classes
    const UserListFooterSelect_Ul = UserListSelect_Visible ? 'UserListSelect_Visible' : 'UserListSelect_NotVisible'

    return { UserListFooterSelect_Ul, setQuantityOfElements, dispatch, QuantityOfElements, ActivePage, TotalNumberPages }

}

export default useUserListFooter