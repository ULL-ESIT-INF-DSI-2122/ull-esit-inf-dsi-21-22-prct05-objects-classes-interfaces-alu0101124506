import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio1/ejercicio1';
import {Combat} from '../src/ejercicio1/ejercicio1.1';

let ninetales = new Pokemon("ninetales", 19.9, 1.1, "fuego", 76, 75, 100, 73);
let leafeon = new Pokemon("leafeon", 25.5, 1.0, "hierba", 110, 130, 95, 65);

describe('Combate Pokemon', () => {
    it('Ninetales contra Leafeon', () =>{
        expect(new Combat(ninetales, leafeon).fight()).to.be.equal(ninetales.name);
    });
});