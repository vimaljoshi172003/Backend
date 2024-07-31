import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    Doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    Patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Patient,
    }
}, { timestamps: true });

export const Hospital = mongoose.model("Hospital", hospitalSchema)