import { CustomError } from './custom-error';

export class BadRequestErorr extends CustomError {
    statusCode: number;

    constructor(public message: string) {
        super(message);

        this.statusCode = 400;

        Object.setPrototypeOf(this, BadRequestErorr.prototype);
    }

    serializeErrors() {
        return [{ message: this.message }]
    }
}