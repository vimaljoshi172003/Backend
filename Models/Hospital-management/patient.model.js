import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    diagonseWith: {
        type: String,
        required: true,
    },
    Address: {
        type: String,
        required: true,
    },
    Age: {
        type: Number,
        required: true,
    },
    Bloodgroup: {
        type: String,
        required: true,
    },
    Gender: {
        type: Number,
        enum: ["Male", "Female", "Others"],
        required: true,
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, { timestamps: true });

export const Patient = mongoose.model("Patient", patientSchema)