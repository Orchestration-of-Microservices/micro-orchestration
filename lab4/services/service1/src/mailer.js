const nodemailer = require('nodemailer');

class Mailer {

    constructor() {
        this.transport = nodemailer.createTransport({
            host: process.env.EMAIL_SMTP,
            port: process.env.EMAIL_PORT,
            secure: process.env.EMAIL_SECURE,
            auth: {
                user: process.env.EMAIL_ACCOUNT,
                pass: process.env.EMAIL_PASSWORD
            }
        });

        this.from = process.env.EMAIL_FROM
    }

    sendHtml(to, subject, what) {
        return this._send(to, subject, null, what);
    }

    sendText(to, subject, what) {
        return this._send(to, subject, what);
    }

    _send(to, subject, text, html) {
        const options = {
            subject,
            to,
            from: this.from,
            text,
            html
        };
        return this.transport.sendMail(options);
    }
}

module.exports = new Mailer();

