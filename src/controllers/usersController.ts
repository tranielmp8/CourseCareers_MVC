import express, { Response, Request } from 'express';
import User from '../models/usersModel.js'

const getMany = async  (req: Request, res: Response) => {
  const users = await User.getMany() 
  res.render('users', { users })
};

const get = async (req: Request, res: Response) => {
  const user = await User.get(Number.parseInt(req.params.id));
  res.render('user', {user})
}



export default {
  getMany,
  get
};