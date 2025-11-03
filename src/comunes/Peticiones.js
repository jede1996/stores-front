import axios from "axios";

const API_BASE_URL = "http://localhost:8081/vets/v1/";

const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function apiRequest(endpoint, method, data, headers) {
    try {
        const response = await api.request({
            url: endpoint,
            method,
            data,
            headers,
        });

        if (response.status === 200) {
            return response;
        } else {
            throw new Error("Error en la petición");
        }
    } catch (error) {
        throw new Error(error.response.data.message || "Error en la petición");
    }
}