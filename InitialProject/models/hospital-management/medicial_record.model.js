import mongoose from "mongoose";

const medicialRecordSchema = new mongoose.Schema({},{
    timestamps:true
})

export const MedicalRecord = mongoose.model("MedicalRecord",medicialRecordSchema)