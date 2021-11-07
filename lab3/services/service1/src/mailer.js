const nodemailer = require('nodemailer');

class Mailer {

    constructor() {
        this.transport = nodemailer.createTransport({
            host: 'smtp.rambler.ru',
            port: 465,
            secure: true,
            auth: {
                user: 'tvv13',
                pass: '8eLsh0hQMg'
            }
        });

        this.from = 'tvv13@rambler.ru'
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

