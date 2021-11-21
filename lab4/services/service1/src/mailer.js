const nodemailer = require('nodemailer');

class Mailer {

    constructor() {
        this.transport = nodemailer.createTransport({
            host: global.EMAIL_SMTP,
            port: global.EMAIL_PORT,
            secure: global.EMAIL_SECURE,
            auth: {
                user: global.EMAIL_ACCOUNT,
                pass: global.EMAIL_PASSWORD
            }
        });

        this.from = global.EMAIL_FROM
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

