
const dotenv = require('dotenv');
dotenv.config();
const app = require('./app');
const connectDB = require('./DB/connectDB');

const server = async () => {
    const PORT = process.env.PORT || 3000;
    try {
        app.listen(PORT, () =>
            console.log(`Server is listening on port ${PORT}...`)
        );
        const DB = process.env.DATABASE.replace(
            "<password>",
            process.env.DATABASE_PASSWORD
        );
        await connectDB(DB);
    } catch (error) {
        console.log(error);
    }
};

server();