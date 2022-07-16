import {Mailing} from "../../../config/mailing";

/**
 *
 * Default Mailing Service Used Is NodeMailer
 *
 */

class Email extends Mailing {
    static initEmailService = Mailing.Init();
}

export const Mail  = Email.initEmailService