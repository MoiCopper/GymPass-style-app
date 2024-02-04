import { Prisma, User } from '@prisma/client'
import { UsersRepository } from '../users-repository'

export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = []

  create(data: Prisma.UserCreateInput) {
    // eslint-disable-next-line promise/param-names
    return new Promise<User>((resolve, _) => {
      const user = {
        id: 'user-1',
        name: data.name,
        email: data.email,
        password_hash: data.password_hash,
        created_at: new Date(),
      }
      this.items.push(user)
      resolve(user)
    })
  }

  findByEmail(email: string) {
    // eslint-disable-next-line promise/param-names
    return new Promise<User | null>((resolve, _) => {
      const user = this.items.find((item) => item.email === email)
      resolve(user || null)
    })
  }
}
