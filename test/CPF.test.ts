import CPF from "./../src/CPF";

test("CPF Válido", function () {
    const cpf = new CPF("041.207.010-34");
	expect(cpf.GetValue()).toBe("041.207.010-34");
});

test("CPF Inválido com dígitos iguais", function () {
    expect(() => new CPF("111.111.111-11")).toThrow(new Error("invalid cpf."));
});

test("CPF Inválido", function () {
    expect(() => new CPF("123.456.789-99")).toThrow(new Error("invalid cpf."));
});


test("CPF Inválido vazio", function () {
    expect(() => new CPF("")).toThrow(new Error("invalid cpf."));
});

test("CPF Inválido undefined", function () {
    expect(() => new CPF("undefined")).toThrow(new Error("invalid cpf."));
});

