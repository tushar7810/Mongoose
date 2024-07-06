import mongoose from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },

    price : {
        type : Number,
        required : true
    },

    quantity : {
        type : Number ,
        required : true,
        default : 0
    },

    routine : {
        type : String,
        required : true
    }

}, {timestamps : true})

export const MedicalRecord = mongoose.model('MedicalRecord' ,medicalRecordSchema )