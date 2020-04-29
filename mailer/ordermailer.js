const nodeMailer = require('../config/nodemailer')

exports.newOrder = (order) =>{
    console.log('inside order Mailer')
    nodeMailer.transporter.sendMail({
        from: '97harishkumar@gmail.com',
        to: 'harishkumarvi12@gmail.com',
        subject: "New Order",
        html: '<h1></h1>'
    },(error, info) =>{
        if(error){
            console.log('error in sending mail', error);
            return ;
        }
        console.log('Message Sent', info)
        return; 
    })
}   