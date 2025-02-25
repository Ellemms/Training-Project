import MenuListInterface from "../interfaces/MenuListInterface"

class MenuList {
    private _CategoriesMenu: MenuListInterface<string, boolean> [] = [
        {nameCategory: 'Contact list', nameSubCategory: ['Contact list (deleted)'], visible: true},
        {nameCategory: 'User list', nameSubCategory: ['User list'], visible: true},
        {nameCategory: 'Category 3', nameSubCategory: ['Weather'], visible: true},
        {nameCategory: 'Category 4', nameSubCategory: ['Empty'], visible: true},
        {nameCategory: 'Category 5', nameSubCategory: ['Empty'], visible: true},
        {nameCategory: 'Category 6', nameSubCategory: ['Empty'], visible: true},
        {nameCategory: 'Category 7', nameSubCategory: ['Empty'], visible: true},
        {nameCategory: 'Category 8', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 9', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 10', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 11', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 12', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 13', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 14', nameSubCategory: ['Empty'], visible: false},
        {nameCategory: 'Category 15', nameSubCategory: ['Empty'], visible: false}
    ]

    public get getCategories(): Readonly<MenuListInterface<string, boolean>> [] {
        return this._CategoriesMenu
    }

    public setVisibleSubcategory = (Index: number) => {
        if (Index >= 0 && Index < this._CategoriesMenu.length) {
            const newCategories = [...this._CategoriesMenu.map((el, i) => {
                return Index === i ? {...el, visible: !el.visible} : el
            })]

            this._CategoriesMenu = newCategories
            return newCategories
        }
    }

    public getResultSearch = (arg: string) => {
        const resultArray: Array<string> = []

        this._CategoriesMenu.forEach((el: MenuListInterface<string, boolean>) => {
            el.nameSubCategory.forEach((elem: string) => {
                const parFirst = elem.replace(/[ ]+/g, '').toLowerCase()
                const parSecond = arg.replace(/[ ]+/g, '').toLowerCase()

                resultArray.length < 15 && parFirst.includes(parSecond) ? resultArray.push(elem) : null
            });
        })
        
        return resultArray
    }
}
export default MenuList