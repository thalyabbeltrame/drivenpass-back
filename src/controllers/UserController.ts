import { Request, Response } from 'express';
import { createUserService } from '../services/index';

export class UserController {
  public static async signup(req: Request, res: Response) {
    const { email, password } = req.body;

    await createUserService.execute({ email, password });

    res.status(201).send('User created with success');
  }
}
