import { Status } from "./status";

export default class Part {
    constructor(
        public number: number,
        public title: string,
        public status: Status,
    ) {}
}