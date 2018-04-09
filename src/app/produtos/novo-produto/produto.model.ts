export class Produto {
    constructor(
        public ref: string,
        public category: string,
        public tags: Array<any>,
        public image1: any,
        public image2: any,
        public image3: any,
        public disabled: boolean
    ) {}
}