import { Sample } from '$/mod/sample.js';


describe('sample', () => {
    it('should be true', () => {
        expect(Sample.hello()).to.be.eq('Hello World!');
        console.trace();
    });
    
    it('should fail', () => {
        expect(Sample.hello()).to.be.eq('Hello World!!');
    });
});
