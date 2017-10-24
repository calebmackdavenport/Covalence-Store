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
}
