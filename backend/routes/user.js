const express=require('express');
const User = require('../models/user');

const router= express.Router();

const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');




router.post('/register', (req , res)=>{
    let data= req.body;
    let user= new User(data);
    let salt=bcrypt.genSaltSync(10);
    user.password= bcrypt.hashSync(data.password,salt);
   
    user.save()

   .then(
    (Result)=>{
      
        res.send(Result)
    }
   )
   .catch(
    (err)=>{
        res.send(err)
    })

})

router.post('/login',(req , res)=>{
   let data= req.body;
    User.findOne({email: data.email})
   

    .then(
        (Result)=>{
            if(!Result){res.send('email invalid');

            }else{
                let validPass= bcrypt.compareSync(data.password, Result.password)
                if(!validPass){res.send('password invalid')

                }else{
                    let payload={
                        _id:Result.id,
                        name:Result.name,
                        lastname:Result.lastname,
                        email:Result.email

                    }
                    let token= jwt.sign(payload, '123456789');
                    res.send({mytoken:token});
                }
            }

        }
    )
    .catch(
        (err)=>{
            res.send(err)
        })

})






module.exports=router;