export class AppException extends Error {
  public details?: unknown;
  public status: number;

  constructor(message: string, details?: unknown, status: number = 500) {
    super(message);
    this.name = this.constructor.name;
    this.status = status;
    this.details = details;
  }
}
