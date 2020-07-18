const usersController = require('../../src/Controllers/users');
const chai = require('chai');
const expect = chai.expect;

describe('Controllers/Users', () => {
    before(() => {
        // TODO: flush db
    });

    it('should insert user', async() =>{
        const response = await usersController.create({
            username: 'MariamMahmoud',
            phone: '00202222221111',
            language: 'ar',
        });

        return expect(response).to.deep.equal('the expected response goes here')
    });


    it('should insert user with default language', async() =>{
        const response = await usersController.create({
            username: 'MariamMahmoud',
            phone: '00202222221111',
        });

        return expect(response).to.deep.equal('the expected response goes here')
    });

    it('should not insert user with no phone number', async() =>{
        const promise = usersController.create({
            username: 'MariamMahmoud',
        });

        expect(response).to.be.eventually.rejectedWith('rejection error');

        return promise;
    });
})