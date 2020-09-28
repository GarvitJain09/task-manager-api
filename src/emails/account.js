const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to:'garvitjain09@gmail.com',
//     from:'garvitjain09@gmail.com',
//     subject:'Test Email',
//     text:'This is body'
// })

 const sendWelcomeEmail = (email,name)=>{
     sgMail.send({
         to:email,
         from:'garvitjain09@gmail.com',
         subject:'Thanks for Joining in',
         text:`${name}`
     })

 }
 const sendDeleteEmail =(email,name)=>{
     sgMail.send({
         to:email,
         from: 'garvitjain09@gmail.com',
         subject:'Thanks for being part of this task app',
         text:`we are sad as you are leaving ${name}, Please let us know more about expreience.`

     })
 }

 module.exports = {
     sendWelcomeEmail,
     sendDeleteEmail

 }


