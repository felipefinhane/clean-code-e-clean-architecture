export default class CPF {

    ERR_CPF_INVALID = "invalid cpf.";
    private FACTOR_DIGIT_1 = 10;
    private FACTOR_DIGIT_2 = 11;
    private value:string

    constructor (value: string) {
        if (!this.validate(value)) throw new Error(this.ERR_CPF_INVALID);
        this.value = value;
    }

    GetValue () {
        return this.value;
    }
    
    private validate (cpf:string) {
    	if (!cpf) return false;
        cpf = this.cleanCPF(cpf)
        if (!this.isValidLength(cpf)) return false;
        if (this.hasAllDigitsEqual(cpf)) return false;
        const digit1 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_1);
        const digit2 = this.calculateCheckDigit(cpf, this.FACTOR_DIGIT_2);
        const checkDigit = this.extractCheckDigit(cpf);  
        const calculatedDigit = `${digit1}${digit2}`;  
        return checkDigit == calculatedDigit;
    }

    private cleanCPF = function (cpf:string) {
        return cpf.replace(/[\.\-]/g, "");
    }

    private isValidLength = function(cpf:string){
        return cpf.length === 11;
    }

    private hasAllDigitsEqual = function(cpf:string){
        const [firstDigit] = cpf;
        return [...cpf].every(digit => digit === firstDigit)
    }

    private calculateCheckDigit = function(cpf:string, factor:number){
        let total = 0;
        for (const digit of cpf){
            if (factor > 1) total += parseInt(digit) * factor--;
        }
        const rest = total % 11;
        return (rest < 2) ? 0 : (11 - rest);
    }

    private extractCheckDigit = function(cpf:string){
        return cpf.slice(-2);
    }


}
