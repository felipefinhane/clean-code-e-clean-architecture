export default class PlaceOrderInput{

    constructor(readonly cpf: string, readonly orderItems: { idItem: string, quantity: number}[], readonly coupon?: string){
    }
}