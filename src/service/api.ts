import axios from "axios";
import type {Occurrence} from "../types/Occurrence.ts";

const api = axios.create({
    baseURL: "http://localhost:8070/api",
});

export const fetchOccurrences = async (): Promise<T> => {
    const response = await api.get<Occurrence[]>("/occurrences");
    return response.data;
};

export default api;