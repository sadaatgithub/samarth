import { transporter, mailOption } from "@/config/nodemailer";

const handler = async (req, res) => {
    const data = req.body
    if(req.method === 'POST'){
        if(!data || !data.name || !data.email || !data.contact || !data.message || !data.subject){
          return res.status(400).json({message:"Bad request"})  
        }
    }

try {

    await transporter.sendMail({
        ...mailOption,
        subject:`Received ${data.subject} request from ${data.name}`,
        text:"This is a text string",
        html:`<h3>Hello Saramth Physio,</h3> <br>
        <p>${data.message}</p> <br>
        <p>${data.contact}</p> <br>
        <p>${data.email}</p>`
    })
    return res.status(200).json({ msg: 'Email Sent' })
    
} catch (error) {
    return res.status(400).json({message:error.message})
    
}

  };
  
  export default handler;