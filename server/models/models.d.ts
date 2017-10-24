declare namespace models {
    interface ICat {
        id: number;
        name: string;
    }
    interface IEmail {
        address: string;
    }
    interface IProduct {
        categoryid: number;
        title: string;
        description: string;
        price: number;
        url: string;
    }
    interface iPurchase {
        id: number;
        price: number;
        stripeid: string;
    }
}
