import CouponRepositoryMemory from "../../src/infra/repository/CouponRepositoryMemory";
import ItemRepositoryMemory from "../../src/infra/repository/ItemRepositoryMemory";
import OrderRepositoryMemory from "../../src/infra/repository/OrderRepositoryMemory";
import PlaceOrder from "../../src/application/usecase/PlaceOrder";

test("Deve fazer um pedido", function(){
    const itemRepository = new ItemRepositoryMemory();
    const OrderRepository = new OrderRepositoryMemory();
    const couponRepository = new CouponRepositoryMemory();
    const placeOrder = new PlaceOrder(itemRepository, OrderRepository, couponRepository);
    const input = {
        cpf: "041.207.010-34",
        orderItems: [
            {idItem: "UUID-001", quantity: 1},
            {idItem: "UUID-002", quantity: 1},
            {idItem: "UUID-003", quantity: 3}
        ],
        coupon: "VALE20"
    }
    const output = placeOrder.execute(input);
    expect(output.total).toBe(4872);
})