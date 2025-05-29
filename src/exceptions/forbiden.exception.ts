import { AppException } from "@/exceptions/app.exception";

export class ForbiddenException extends AppException {
  constructor(message: string, details?: unknown) {
    super(message, details, 403);
  }
}
