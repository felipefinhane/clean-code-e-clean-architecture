import Coupon from "../src/Coupon";

test("Deve criar um cupom de desconto", function(){
    const coupon = new Coupon("VALE20", 20);
    const isExpired = coupon.isExpired();
    expect(isExpired).toBeFalsy();
})

test("Deve criar um cupom de desconto e calcular o desconto", function(){
    const coupon = new Coupon("VALE20", 20);
    const valorTotal = 1000;
    const discount = coupon.calculateDiscount(valorTotal);
    expect(discount).toBe(200);
})

test("Deve criar um cupom de desconto expirado", function(){
    const coupon = new Coupon("VALE20", 20, new Date("2021-03-01T10:00:00"));
    const isExpired = coupon.isExpired(new Date("2022-03-01T10:00:00"));
    expect(isExpired).toBeTruthy();
})
