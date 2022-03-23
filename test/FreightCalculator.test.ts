import Item from "./../src/Item"
import Dimension from "./../src/Dimension"
import FreightCalculator from "./../src/FreightCalculator"

test("Deve calcular o frete de um item", function(){
    const item = new Item("UUID-01", "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3)
    const freight = FreightCalculator.calculate(item, 2)
    expect(freight).toBe(60)
})
