export class TransferResult {
    public success: boolean;
    public message: string;

    constructor(success: boolean, message: string) {
        this.success = success;
        this.message = message;
    }
}
