import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';

const SecurityTxt = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const fileContents = fs.readFileSync('./public/.well-known/security.txt', 'utf-8');
    res.status(200).send(fileContents);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal server error');
  }
};

export default SecurityTxt;
