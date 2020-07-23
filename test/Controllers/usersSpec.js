const usersController = require('../../src/Controllers/users');
const { expect, connectDB } = require('../Helpers/helper');
const _ = require('lodash');

describe('Controllers/Users', () => {
    before(async() => {
        // TODO: flush db
        await connectDB();
    });

    it('should insert user', async() =>{
        const response = await usersController.create({
            username: 'MariamMahmoud',
            phone: '00202222221111',
            language: 'ar',
        });

        return expect(_.omit(response, ['_id', '__v'])).to.deep.equal({
            username: 'MariamMahmoud',
            phone: '00202222221111',
            language: 'ar',
        });
    });


    it('should insert user with default language', async() =>{
        const response = await usersController.create({
            username: 'MariamMahmoud',
            phone: '00202222221111',
        });

        return expect(_.omit(response, ['_id', '__v'])).to.deep.equal({
            username: 'MariamMahmoud',
            phone: '00202222221111',
            language: 'en',
        })
    });

    it('should not insert user with no phone number', async() =>{
        const promise = usersController.create({
            username: 'MariamMahmoud',
        });

        return expect(response).to.be.eventually.rejectedWith(Error)
            .that.is.an.instanceOf('ValidationError')
            .and.has.property('message')
            .that.equals('User validation failed: phone: Path `phone` is required');
    });
})