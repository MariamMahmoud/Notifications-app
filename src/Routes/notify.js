'use strict';

const express = require('express');
const app = express();
const notify = require('../Services/notify');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
// TODO: add authorization middleware
// TODO: use HTML response codes

module.exports = app =>{
    return {
        notify: app.get('/notify', async (req, res) => {
            try {
                const response = await notify;
                res.send({
                    success: true,
                    response,
                });
            } catch(error) {
                const err = {
                    name: 'API Notifier crashed',
                    details: error.stack,
                    message: error.message,
                }

                res.send({
                    success: false,
                    error: err,
                });
            }
        }),
        docs: app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument)),
    };
};
