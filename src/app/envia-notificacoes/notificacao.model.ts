export class Notificacao {
    constructor(
        public titulo: string,
        public texto: string,
        public autor: string,
        public dataHora: any,
        public lida: boolean
    ) {}
}