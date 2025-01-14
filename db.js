import mongoose from 'mongoose';

async function mongoConnect(url) {
    try {
        await mongoose.connect(url);
        console.log("Connection Successful...");
    } catch (err) {
        console.error(err.message);
        throw new Error("MongoDB connection error");
    }
}

export default mongoConnect;