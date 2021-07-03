import { Response } from 'express';

export function createJsonSuccessResponse<T>(res: Response, data: T) {
  res.status(200).json({ data, status: 'success' });
}

export function createJsonErrorResponse(res: Response, errors: string[]) {
  res.status(404).json({ messages: errors, status: 'error' });
}
