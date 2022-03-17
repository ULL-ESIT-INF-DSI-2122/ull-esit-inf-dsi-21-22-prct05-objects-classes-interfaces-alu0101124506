//let number = 38;
//let hexStr = number.toString(16);
//console.log("0x" + hexStr);

export class Hexadecimal {
    public hexa: string = "";
    public num: number = 0;

    constructor(int: number){
        this.num = int;
    }

    toStringHex(aux: number = this.num): string{
        this.hexa = aux.toString(16);
        return ("0x" + this.hexa);
    }

    valueOfHex(): number{
        return this.num;
    }

    add(hexa2: Hexadecimal): Hexadecimal{
        let aux: number = hexa2.valueOfHex();
        let result = new Hexadecimal(aux + this.num);
        result.hexa = this.toStringHex(result.num);
        return result;
    }
}