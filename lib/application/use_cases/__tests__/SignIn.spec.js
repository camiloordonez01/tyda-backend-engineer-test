const messages = require('../../../../messages')
const SignIn = require('../SignIn')

jest.mock('../../common/Utils')
jest.mock('../../../interfaces/storage')
jest.mock('../../common/Utils')

describe('SignIn', () => {
    it('Inicio de sesión exitoso', async () => {
        const response = await SignIn('orarjuan@gmail.com', 'Camilo20*')
        expect(response).toEqual({
            AccessToken:
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWRVc2VyIjoiYTE0MmZhMjNiZjNkMzM2NzgyZjlkY2QzZTRiMzMwOWE0NjU3N2NlMDg0YTllMzljOGRjMjUyOGVmYTdkYjBhYzZlMWNkNjQ1MTJkZmJjYzAwZjRhYmEzNzFjNWYzNzI4IiwiaWF0IjoxNjQ1NTU4OTEzLCJleHAiOjE2NDU1NjI1MTN9.gsNNXg3gw3sPc-Q_I7kNOKHviKMZAWYLQmAW24li5mo',
            Expiration: '2022-02-22 15:41:53',
        })
    })
    it('Error: El usuario no se encuentra en la base de datos', async () => {
        await expect(SignIn('orarjuan@yahoo.com', 'Camilo20*')).rejects.toThrow(
            messages.LOGIN_INVALID
        )
    })
})
