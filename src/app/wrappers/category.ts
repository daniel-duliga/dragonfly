import Item from "./item";

export default class Category {
    constructor(
        public title: string,
        public items: Item[],
        public subcategories: Category[],
    ) { }
}