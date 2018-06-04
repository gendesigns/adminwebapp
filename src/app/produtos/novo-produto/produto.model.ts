export class Produto {
    constructor(
        public ref: string,
        public category: string,
        public family: string,
        public collection: string,
        public tagsDetails: Array<any>=[],
        public image1: string,
        public image2: string,
        public image3: string,
        public status: string,
        public author: string,
        public createdAt: any
    ) {}
}