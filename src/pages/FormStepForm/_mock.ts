/* eslint no-use-before-define: 0 */
import type { Request, Response } from 'express';

export default {
  'POST  /api/stepForm': (_: Request, res: Response) => {
    res.send({ data: { message: 'Ok' } });
  },
};
