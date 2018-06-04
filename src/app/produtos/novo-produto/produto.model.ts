export class Produto {
    constructor(
        public ref: string,
        public category: string,
        public family: string,
        public collection: string,
        public tagsDetails: Array<any>=[],
        public image1: any,
        public image2: any,
        public image3: any,
        public status: string,
        public author: string,
        public createdAt: any
    ) {}
}