import CouponRepository from "../../domain/repository/CouponRepository";
import Order from "../../domain/entity/Order";
import PlaceOrderInput from "./PlaceOrderInput";
import PlaceOrderOutput from "./PlaceOrderOutput";
import ItemRepository from "../../domain/repository/ItemRepository";
import OrderRepository from "../../domain/repository/OrderRepository";

export default class PlaceOrder{

    constructor(readonly itemRepository: ItemRepository, readonly orderRepository: OrderRepository, readonly couponReposotpory: CouponRepository){

    }

    execute (input: PlaceOrderInput): PlaceOrderOutput {
        const order = new Order(input.cpf);
        for (const orderItem of input.orderItems) {
            const item = this.itemRepository.getByID(orderItem.idItem);
            if (!item) throw new Error("item not found");
            order.AddItem(item, orderItem.quantity);
        }
        if (input.coupon) {
            const coupon = this.couponReposotpory.getByCode(input.coupon);
            if (coupon) order.AddCoupon(coupon)
        }
        const total = order.GetTotal();
        this.orderRepository.save(order);
        const output = new PlaceOrderOutput(total);
        return output
    }

}