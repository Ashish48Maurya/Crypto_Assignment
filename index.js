import 'dotenv/config';
import express from 'express';
import cron from 'node-cron';
import mongoConnect from './db.js';
import router from './routes/route.js';
import { fetchCryptoData } from './controllers/service.js';
const app = express();
const PORT = process.env.PORT || 8000;


app.use('/api', router)

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Backend is Live 🎉🎉🎉"
    })
})

app.use((err, req, res, next) => {
    return res.status(500).json({ success: false, message: 'Internal Server Error', error: err.message });
});

const cronJob = cron.schedule('0 */2 * * *', async () => {
    console.log("Cron job triggered:", new Date());
    try {
        await fetchCryptoData();
    } catch (err) {
        console.error("Error in cron job:", err.message);
    }
}, {
    scheduled: true,
    timezone: "UTC"
});


mongoConnect(process.env.MONGO_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is listening at http://localhost:${PORT}`);
    });
    cronJob.start();
}).catch((err) => {
    console.error(err.message);
    process.exit(1);
});
