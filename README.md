# Project Title

## 1) Development

To set up the development environment, follow these steps:

1. **Create a `.env` file** and add the following lines:

    ```plaintext
    MONGO_URL=your_mongodb_url
    PORT=8000
    COIN_GECKO=your_coingecko_api_key
    ```

2. **Install dependencies** by running the following command in your terminal:

    ```bash
    npm install
    ```

3. **Start the server** with:

    ```bash
    npm start
    ```

### Example Coin IDs

You can use the following coin IDs as examples:

- `bitcoin`
- `ethereum`
- `matic-network`

### API Endpoints

- To see the latest data for a given `coin_id`, use:
  
  ```plaintext
  http://localhost:8000/api/stats?coin=coin_id
  http://localhost:8000/api/deviation?coin=coin_id
## 2) Production
 ```plaintext
https://crypto-assignment-p4v9.onrender.com/api/stats?coin=coin_id
https://crypto-assignment-p4v9.onrender.com/api/deviation?coin=coin_id
