import CPF from "./CPF";
import OrderItem from "./OrderItem";
import Item from "./Item";
import Coupon from "./Coupon";
import Freight from "./Freight";

export default class Order {
    cpf: CPF;
    orderItems: OrderItem[];
    coupon: Coupon | undefined;
    freight: Freight;

    constructor (cpf:string, readonly issueDate: Date = new Date()) {
        this.cpf = new CPF(cpf);
        this.issueDate = issueDate;
        this.orderItems = [];
        this.freight = new Freight();
    }

    AddItem(item:Item, quantity:number) {
        this.freight.addItem(item, quantity);
        this.orderItems.push(new OrderItem(item.ID, item.price, quantity))
    }

    AddCoupon(coupon: Coupon) {
        if (!coupon.isExpired(this.issueDate)){
            this.coupon = coupon;
        }
    }

    GetTotal () {
        let total = 0;
        for (const orderItem of this.orderItems) {
            total += orderItem.GetTotal();
        }
        if (this.coupon) {
            total -= this.coupon.calculateDiscount(total)
        }
        total += this.freight.getTotal();
        return total;
    }
}
