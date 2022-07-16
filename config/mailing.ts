import * as nodemailer from "nodemailer"

export class Mailing {

    protected static Init () {
        return nodemailer.createTransport({
            host    :   process.env.SMTP_HOST,
            port    :   Number(process.env.SMTP_PORT),
            secure  :   Boolean(process.env.SMTP_SECURE),
            auth    : {
                user    :   process.env.SMTP_USERNAME,
                pass    :   process.env.SMTP_PASSWORD,
            }
        })
    }
}