export const dbConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("DB CONNECTED SUCCESSFULLY");
    } catch (err) {
        console.error(err);
    }
};

dbConnect();