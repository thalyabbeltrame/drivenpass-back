import { Request, Response } from 'express';
import { createUserService, loginUserService } from '../services/index';

export class UserController {
  public static async signup(req: Request, res: Response) {
    const { email, password } = req.body;
    await createUserService.execute({ email, password });
    res.status(201).send('User created with success');
  }

  public static async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await loginUserService.execute({ email, password });
    res.status(200).json({ token });
  }
}
