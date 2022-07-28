import Part from "./part";
import { Status } from "./status";

export default class Item {
    constructor(
        public title: string,
        public author: string,
        public status: Status,
        public translator: string,
        public parts: Part[],
        public originalPublishDate: string,
    ) { }
}