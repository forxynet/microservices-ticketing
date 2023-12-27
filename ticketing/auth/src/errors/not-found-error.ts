import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
    statusCode: number;

    constructor() {
        super('Route not found')
        this.statusCode = 404;

        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors(): { message: string; field?: string | undefined; }[] {
        return [{ message: 'Not Found' }];
    }

}