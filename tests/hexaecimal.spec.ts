import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/hexadecimal';

describe('Hexadecimal', () => {
    it('De decimal a hexadecimal', () =>{
        expect(new Hexadecimal(38).toStringHex()).to.be.eql("0x26");
    });

    it('De hexadecimal a decimal', () =>{
        expect(new Hexadecimal(38).valueOfHex()).to.be.eql(38);
    });

    it('Sumar 2 haxadecimales (decimal) ', () =>{
        let myFirstHexValue = new Hexadecimal(23);
        let mySecondHexValue = new Hexadecimal(15);
        expect(myFirstHexValue.add(mySecondHexValue).valueOfHex()).to.be.eql(38);
    });

    it('Sumar 2 haxadecimales (hexadecimal)', () =>{
        let myFirstHexValue = new Hexadecimal(23);
        let mySecondHexValue = new Hexadecimal(15);
        expect(myFirstHexValue.add(mySecondHexValue).toStringHex()).to.be.eql("0x26");
    });
});