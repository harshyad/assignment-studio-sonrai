import { createLogger, format, transports } from 'winston';
import { Request, Response, NextFunction } from 'express';


const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.printf((info) => {
            const { timestamp, level, message } = info;
            return `${timestamp} ${level}: ${message}`;
        })
    ),
    transports: [
        new transports.Console(),
    ],
});


interface LoggerMiddleware {
    (req: Request, res: Response, next: NextFunction): void;
}

const logger_middleware: LoggerMiddleware = (req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl}`);
    next();
}


export default logger_middleware;

// Note: Do not use 'logger' as an Express middleware or route handler.
// Use it only for logging, e.g., logger.info('message');