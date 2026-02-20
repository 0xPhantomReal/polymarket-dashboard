// usePolymarketData.ts

import { useEffect, useState } from 'react';
import axios from 'axios';

const POLYMARKET_API_URL = 'https://api.polymarket.com/v1/account';

export const usePolymarketData = (accountId) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${POLYMARKET_API_URL}/${accountId}`);
                setData(response.data);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [accountId]);

    return { data, loading, error };
};
