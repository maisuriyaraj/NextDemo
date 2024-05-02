import mongoose from 'mongoose'
// Check if the model has already been defined before defining it again
    const userSchema = new mongoose.Schema({
        fname: { type: String },
        lname: { type: String }
    });

    // Define the model only if it hasn't been defined before
export const userModels = mongoose.models.student || mongoose.model("student", userSchema);