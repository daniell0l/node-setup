import { UserModel } from '../database/models/UserModel'
import { Request, Response } from 'express'

export class UsersController {
  async findAll(req: Request, res: Response) {}
  async findOne(req: Request, res: Response) {}
  async create(req: Request, res: Response) {
    const { email, name, idade } = req.body
    const user = await UserModel.create({
      email,
      name,
      idade
    })
  }
  async update(req: Request, res: Response) {}
  async destroy(req: Request, res: Response) {}
}

export default new UsersController()
