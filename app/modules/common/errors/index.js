"use strict";

class CustomError {
    constructor(message, cause) {
        this.message = message;
        this.cause = cause;
        this.name = 'CustomError';
        this.stack = cause.stack;
    }
}

class DataReadError extends CustomError {
    constructor(message, cause) {
        super(message, cause);
        this.name = 'DataReadError';
    }
}

class FetchDataError extends CustomError {
    constructor(message, cause) {
        super(message, cause);
        this.name = 'FetchDataError';
    }
}

export {DataReadError, FetchDataError};