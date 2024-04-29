import { BASE_URL } from "../config";
const apiKey = import.meta.env.VITE_API_KEY;

export const getTeams = async () => {


    const response = await fetch(`${BASE_URL}/api/badge/teams`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "X-Api-Key": apiKey
        }
    });

    const data = await response.json();

    if (response.status === 200) {
        
        return data;
    }

    else {
        return [];
    }


}