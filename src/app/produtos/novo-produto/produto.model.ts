export class Produto {
    constructor(
        public ref: string,
        public category: string,
        public family: string,
        public collection: string,
        public details: Array<any>,
        public image1: any,
        public image2: any,
        public image3: any,
        public disabledProduct: boolean,
        public author: string,
        public createdAt: string
    ) {}
}