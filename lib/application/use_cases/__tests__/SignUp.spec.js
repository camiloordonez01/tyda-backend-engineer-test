const messages = require('../../../../messages')
const SignUp = require('../SignUp')

jest.mock('../../../interfaces/storage')

describe('SignUp', () => {
    it('Registro exitoso', async () => {
        const response = await SignUp({
            email: 'orarjuan@hotmail.com',
            password: 'Camilo20*',
        })
        expect(response).toEqual(true)
    })
    it('Error: El usuario ya se encuentra en la base de datos', async () => {
        await expect(
            SignUp({
                email: 'orarjuan@gmail.com',
                password: 'Camilo20*',
            })
        ).rejects.toThrow(messages.USER_EXISTING)
    })
    it('Error: No se pudo crear el usuario', async () => {
        await expect(
            SignUp({
                email: 'orarjuan@yahoo.com',
                password: 'Camilo20*',
            })
        ).rejects.toThrow(messages.USER_EXISTING)
    })
})
