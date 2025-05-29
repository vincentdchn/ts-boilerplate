import { AppException } from "@/exceptions/app.exception";

export class BadRequestException extends AppException {
  constructor(message: string, details?: unknown) {
    super(message, details, 400);
  }
}
