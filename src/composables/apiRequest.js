import { BASE_URL } from "../config";

export const getTeams = async () => {


    const response = await fetch(`${BASE_URL}/api/badge/teams`, {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
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