
import mongoose,{Schema, Types} from 'mongoose';
const requestsSchema=new Schema({
parentName:
{
    type:String,
    required:true,
    min:5,
    max:50,
},
email:
{
    type:String,
    required:true,
    unique:true,
},
password:
{
    type:String,
    required:true,
    min:8,
    max:20,
},
phone:
{
    type:String,
    required:true,
    min:11,
    max:12,
  
},
location:
{
    type:String,
    required:true,
    min:10,
},
parentNationalId:
{
    type:String,
    required:true,
    length:14,
    unique:false,
},
job:
{
    type:String,
    required:true,
    min:3,
    max:50,
},
nationalIdFile:
{
    type:[{
        public_id:{type:String,required:true,unique:true},
        secure_url:{type:String,required:true},
    }],
    required:true,
},
childName:
{
    type:String,
    required:true,
    min:7,
    max:40,
    unique:false,
    
},
birthDate:
{
    type:Date,
    required:true,
},
childNationalId:
{
    type:String,
    required:true,
  
},
birthCertificateFile:
{
type:{
    public_id:{
        type:String,
        required:true,
        unique:true,
    },
    secure_url:
    {
        type:String,
        required:true,
        unique:true,
    },
},
required:true,
},
isActivated:
{
    type:Boolean,
    default:false,
},
state:
{
    type:String,
    enum:["notInQueue","underRevising","refused","finalRefused","accepted","interviewing","waiting"],
    default:"notInQueue",
},
dateOfInterviewing:
{
    type:Date,
    default:null,
},
evaluatedBy:
{
  type:Types.ObjectId,
  ref:"employee",   
  default:null, 
},
interViewedBy:{
    type:Types.ObjectId,
    ref:"employee",
    default:null,
},
resetCode:
{
    type:String,
  
},
condition:{
    type:String,
    default:null,
},
profilePicture:
{
   type:{ 
    public_id:
    {
        type:String,
        required:true,
    },
    secure_url:{
        type:String,
        required:true,
    }
},
required:false,
},
region:
{
    type:String,
    required:true,
},
busService:
{
    type:Boolean,
}
},{timestamps:true,toObject:{virtuals:true},toJSON:{virtuals:true}});
const requestsModel=mongoose.model("request",requestsSchema);
export default requestsModel;