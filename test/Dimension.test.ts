import Dimension from "./../src/Dimension"

test("Deve criar as dimensões de um item", function(){
    const altura = 100;
    const largura = 30;
    const profundidade = 10;
    const dimension = new Dimension(altura, largura, profundidade);
    const volume = dimension.getVolume();
    //ALTURA/100 * LARGURA/100 * PROFUNDIDADE/100
    expect(volume).toBe(0.03);
})
