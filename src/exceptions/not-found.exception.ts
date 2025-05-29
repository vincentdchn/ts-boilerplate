import { AppException } from "@/exceptions/app.exception";

export class NotFoundException extends AppException {
  constructor(message: string, details?: unknown) {
    super(message, details, 404);
  }
}
