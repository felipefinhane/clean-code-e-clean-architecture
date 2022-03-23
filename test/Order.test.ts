import Order from "./../src/Order";
import Item from "./../src/Item";
import Coupon from "./../src/Coupon";
import Dimension from "./../src/Dimension";

test("Não deve criar um pedido com CPF inválido", function () {
    expect(() => new Order("111.111.111-11")).toThrow(new Error("invalid cpf."));
})

test("Deve criar um pedido com 3 itens", function() {
    const order = new Order("041.207.010-34");
    order.AddItem(new Item("UUID-001", "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.AddItem(new Item("UUID-002", "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.AddItem(new Item("UUID-003", "Acessórios", "Cabo P10", 30), 3);
    const total = order.GetTotal();
    expect(total).toBe(6090);
})

test("Deve criar um pedido com 3 itens com cupom de desconto", function() {
    const order = new Order("041.207.010-34");
    order.AddItem(new Item("UUID-001", "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.AddItem(new Item("UUID-002", "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.AddItem(new Item("UUID-003", "Acessórios", "Cabo P10", 30), 3);
    const coupon = new Coupon("VALE20", 20);
    order.AddCoupon(coupon);
    const total = order.GetTotal();
    expect(total).toBe(4872);
})

test("Deve criar um pedido com 3 itens com cupom de descontoi expirado", function() {
    const order = new Order("041.207.010-34", new Date("2022-03-01T10:00:00"));
    order.AddItem(new Item("UUID-001", "Instrumentos Musicais", "Guitarra", 1000), 1);
    order.AddItem(new Item("UUID-002", "Instrumentos Musicais", "Amplificador", 5000), 1);
    order.AddItem(new Item("UUID-003", "Acessórios", "Cabo P10", 30), 3);
    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"));
    order.AddCoupon(coupon);
    const total = order.GetTotal();
    expect(total).toBe(6090);
})

test("Deve criar um pedido com 3 itens e calcula o frete", function() {
    const order = new Order("041.207.010-34");
    order.AddItem(new Item("UUID-001", "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3), 1);
    order.AddItem(new Item("UUID-002", "Instrumentos Musicais", "Amplificador", 5000, new Dimension(100, 50, 50), 20), 1);
    order.AddItem(new Item("UUID-003", "Acessórios", "Cabo P10", 30, new Dimension(10, 10, 10), 1), 3);
    const total = order.GetTotal();
    expect(total).toBe(6350);
})

test("Deve criar um pedido com 1 itens e calcula o frete mínimo", function() {
    const order = new Order("041.207.010-34");
    order.AddItem(new Item("UUID-003", "Acessórios", "Cabo P10", 30, new Dimension(10, 10, 10), 0.9), 1);
    const total = order.GetTotal();
    expect(total).toBe(40);
})

