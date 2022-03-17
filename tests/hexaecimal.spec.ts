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
});