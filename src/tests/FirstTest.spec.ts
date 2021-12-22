import { User } from '../models/User'

test('it should be ok', () => {
  const user = new User()

  user.name = 'Daniel'

  expect(user.name).toEqual('Daniel')
})
