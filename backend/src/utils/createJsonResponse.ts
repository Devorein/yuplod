import { Response } from 'express';

export function createJsonSuccessResponse<T>(res: Response, data: T) {
  res.status(200).json({ data, status: 'success' });
}

export function createJsonErrorResponse(
  res: Response,
  errors: { field: string | null; message: string }[],
  statusCode?: number
) {
  statusCode = statusCode ?? 404;
  res.status(statusCode).json({ messages: errors, status: 'error' });
}
