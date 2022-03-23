export default class OrderItem {

    constructor (readonly itemID:string, readonly price:number, readonly quantity:number) {
    }

    GetTotal() {
        return this.price * this.quantity;
    }

}
