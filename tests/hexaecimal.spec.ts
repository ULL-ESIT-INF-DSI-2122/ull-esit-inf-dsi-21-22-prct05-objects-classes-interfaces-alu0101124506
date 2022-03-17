import 'mocha';
import {expect} from 'chai';
import {Hexadecimal} from '../src/hexadecimal';

describe('Hexadecimal', () => {
    it('De numero a hexadecimal', () =>{
        expect(new Hexadecimal(38).toStringHex()).to.be.eql("0x26");
    });
});