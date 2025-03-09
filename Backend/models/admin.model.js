import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },        
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        role: {type: String, require: true},
    },
    {
        timestamps: true,
    }
);

const Admin = mongoose.model("admin", adminSchema);

export default Admin;