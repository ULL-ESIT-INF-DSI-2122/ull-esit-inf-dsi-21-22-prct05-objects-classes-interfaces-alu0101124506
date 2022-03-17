//let number = 38;
//let hexStr = number.toString(16);
//console.log("0x" + hexStr);

export class Hexadecimal {
    public hexa: string = "";
    public num: number = 0;

    constructor(int: number){
        this.num = int;
    }

    toStringHex(): string{
        this.hexa = this.num.toString(16);
        return ("0x" + this.hexa);
    }


}