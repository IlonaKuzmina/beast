
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {

        
        // const DATA_SORCE_URL = `${process.env.NEXT_PUBLIC_CURRENCY_API_ENDPOINT}/public/currency`;
        // const DATA_SORCE_URL = `https://switchere.com/api/v2/public/currency`;

        let currencyList;
        const res = await fetch("https://switchere.com/api/v2/public/currency", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        currencyList = await res.json();

        return Response.json({ currencyList });
    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: 'Failed to process the request' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}
