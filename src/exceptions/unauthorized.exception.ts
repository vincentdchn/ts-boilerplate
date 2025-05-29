import { AppException } from "@/exceptions/app.exception";

export class UnauthorizedException extends AppException {
  constructor(message: string, details?: unknown) {
    super(message, details, 401);
  }
}
