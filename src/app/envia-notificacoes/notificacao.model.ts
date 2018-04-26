export class Notificacao {
    constructor(
        public titulo: string,
        public texto: string,
        public autor: string,
        public createdAt: string,
        public lida: boolean
    ) {}
}