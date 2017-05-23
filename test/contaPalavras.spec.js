const { expect } = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const { contaPalavras } = require('../app/contaPalavras');

lab.test('verificar se conta corretamente', (done) => {
    expect(contaPalavras("meu nome é javascript")).to.equal(4);
    done();
});
