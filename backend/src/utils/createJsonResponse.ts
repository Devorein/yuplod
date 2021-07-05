import { Response } from 'express';

/**
 * Create a json success response
 * @param res Response object
 * @param data Data to send to
 */
export function createJsonSuccessResponse<T>(res: Response, data: T) {
  res.status(200).json({ data, status: 'success' });
}

/**
 * Create a json error response
 * @param res Response object
 * @param errors An array of field(target of error) and message
 * @param statusCode The status code of the error response
 */
export function createJsonErrorResponse(
  res: Response,
  errors: { field: string | null; message: string }[],
  statusCode?: number
) {
  statusCode = statusCode ?? 404;
  res.status(statusCode).json({ messages: errors, status: 'error' });
}
