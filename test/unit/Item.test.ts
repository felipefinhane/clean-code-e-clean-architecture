import Item from "../../src/domain/entity/Item"
import Dimension from "../../src/domain/entity/Dimension"

test("Deve criar item com dimensões e calcular volume", function(){
    const item = new Item("UUID-01", "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10))
    const volume = item.getVolume();
    expect(volume).toBe(0.03)
})

test("Deve criar item com dimensões e calcular densidade", function(){
    const item = new Item("UUID-01", "Instrumentos Musicais", "Guitarra", 1000, new Dimension(100, 30, 10), 3)
    const density = item.getDensity();
    //DENSIDADE = PESO / VOLUME
    expect(density).toBe(100)
})
