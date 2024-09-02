"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKER_JWT_SECRET = exports.JWT_SECRET = void 0;
exports.authMiddleware = authMiddleware;
exports.workerMiddleware = workerMiddleware;
// import { JWT_SECRET, WORKER_JWT_SECRET } from "./config";
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.JWT_SECRET = "jwt secret";
exports.WORKER_JWT_SECRET = "worker jwt secret";
function authMiddleware(req, res, next) {
    var _a;
    const authHeader = (_a = req.headers["authorization"]) !== null && _a !== void 0 ? _a : "";
    try {
        const decoded = jsonwebtoken_1.default.verify(authHeader, exports.JWT_SECRET);
        console.log(decoded);
        // @ts-ignore
        if (decoded.userId) {
            // @ts-ignore
            req.userId = decoded.userId;
            return next();
        }
        else {
            return res.status(403).json({
                message: "You are not logged in",
            });
        }
    }
    catch (e) {
        return res.status(403).json({
            message: "You are not logged in",
        });
    }
}
function workerMiddleware(req, res, next) {
    var _a;
    const authHeader = (_a = req.headers["authorization"]) !== null && _a !== void 0 ? _a : "";
    console.log(authHeader);
    try {
        const decoded = jsonwebtoken_1.default.verify(authHeader, exports.WORKER_JWT_SECRET);
        // @ts-ignore
        if (decoded.userId) {
            // @ts-ignore
            req.userId = decoded.userId;
            return next();
        }
        else {
            return res.status(403).json({
                message: "You are not logged in",
            });
        }
    }
    catch (e) {
        return res.status(403).json({
            message: "You are not logged in",
        });
    }
}
