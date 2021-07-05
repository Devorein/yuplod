import jwt from 'jsonwebtoken';

/**
 * Returns a jwt token by signing it with the passed payload
 * @param id Id of the user to store as a payload of the jwt token
 * @returns JWT token
 */
export function createJwtToken(id: number) {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRE
  });
}
