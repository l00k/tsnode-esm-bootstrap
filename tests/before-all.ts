import { expect } from 'chai';

declare const global : any;
(<any>global).expect = expect;

declare global
{
    // @ts-ignore
    const expect : Chai.ExpectStatic;
}
