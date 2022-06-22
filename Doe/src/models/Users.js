//En este archivo definimos el esquema que vamos utilizar para el documento 

const {Schema,model}= require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
   // name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestamps:true
});

//recibe el dato y retorna el mismo dato cifrado
UserSchema.methods.encryptPassword = async password =>{
  const salt = await bcrypt.genSalt(10);
   return await bcrypt.hash(password,salt);
};

UserSchema.methods.matchPassword = async function(password){
   return await bcrypt.compare(password, this.password);
}

module.exports = model('User', UserSchema);