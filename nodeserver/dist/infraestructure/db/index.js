"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const pg = require('pg');
// create a config to configure both pooling behavior
// and client options
// note: all config is optional and the environment variables
// will be read if the config is not present
var config = {
    user: 'postgres',
    database: 'dbpostgres',
    password: 'santiago123',
    host: 'instpostgres.cgp7o6r1hiqa.us-east-1.rds.amazonaws.com',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};
const pool = new pg.Pool(config);
function query(q, p) {
    return __awaiter(this, void 0, void 0, function* () {
        const client = yield pool.connect();
        let res;
        try {
            yield client.query('BEGIN');
            try {
                res = yield client.query(q, p);
                yield client.query('COMMIT');
            }
            catch (err) {
                yield client.query('ROLLBACK');
                throw err;
            }
        }
        finally {
            client.release();
        }
        return res;
    });
}
module.exports = query;
