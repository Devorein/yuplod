import jwt from 'jsonwebtoken';

export function createJwtToken(id: number) {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRE
  });
}
