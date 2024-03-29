"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend("re_eEDdFJZC_5XoH6bQkDz19xDBCgSxw4f7b");



export const sendEmail = async(formData:FormData) => {
    const senderEmail = formData.get("senderEmail");
    const message = formData.get("message");

    if(!validateString(senderEmail,500)){
        return {
            error:"Invalid sender email",
        }
    }
    if(!validateString(message,5000)){
        return {
            error:"Invalid Message",
        }
    }
    let data;
try{

    data = await resend.emails.send({
        from:"Contact Form <onboarding@resend.dev>",
        to:"atharvaanbhule@gmail.com",
        subject:"Message from contact form",
        reply_to:senderEmail as string,
        //text:message as string,
        react:React.createElement(ContactFormEmail,{
            message:message as string,
            senderEmail:senderEmail as string,
        })
        //react:<ContactFormEmail message={message} senderEmail={senderEmail}/>
    })
}
catch(error:unknown){
return {
    error:getErrorMessage(error),
}
}

return {
    data,
};
};
