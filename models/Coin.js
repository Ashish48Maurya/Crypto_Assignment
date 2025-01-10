import mongoose from 'mongoose';
const cryptoSchema = new mongoose.Schema({
    coins: [
        {
            coinId: {
                type: String,
                required: true
            },
            usd: {
                type: Number,
                required: true
            },
            usd_market_cap: {
                type: Number,
                required: true
            },
            usd_24h_change: {
                type: Number,
                required: true
            },
        }
    ]
}, {
    timestamps: true
});

const Crypto = mongoose.model('Crypto', cryptoSchema);
export default Crypto;