import useListOfMenu from '../../hooks/useListOfMenu'
import './listOfMenu.css'

const ListOfMenu = () => {

    const { sectionsContainer,
            stateMenuList,
            listVisible,
            changeThePage,
            dispatch } = useListOfMenu()

    return (
        <div className='listOfMenuContainer'>
            <h1 className='titleListOfProjects' onClick={() => dispatch({type: 'setVisibleListPropjects'})}>List of projects</h1>
            <div className={sectionsContainer}>
                {stateMenuList.map((el, i) => {
                    return <div key={i} className='itemListOfMenu'>
                                <h1 className='titleOfSection' onClick={() => listVisible(i)}>{el.nameCategory}</h1>
                                <ul className={el.visible ? "ulListOfProjects_Show" : 'ulListOfProjects_Hide'}>
                                    {el.nameSubCategory.map((el, i) => {
                                        return <li key={i} className='itemListOfSection' onClick={() => {changeThePage(el)}}>{el}</li>
                                    })}
                                </ul>
                           </div>    
                })}
            </div>
        </div>
        
    )
}

export default ListOfMenu