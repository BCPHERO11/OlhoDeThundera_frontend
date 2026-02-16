import type { Occurrence } from "../types/Occurrence";

export interface OccurrenceFilters {
    status?: string;
    type?: string;
}

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? "http://localhost:8070"}/api`;

const buildQueryString = (filters: OccurrenceFilters): string => {
    const params = new URLSearchParams();

    if (filters.status) {
        params.set("status", filters.status);
    }

    if (filters.type) {
        params.set("type", filters.type);
    }

    const queryString = params.toString();
    return queryString ? `?${queryString}` : "";
};

export const fetchOccurrences = async (
    filters: OccurrenceFilters = {}
): Promise<Occurrence[]> => {
    const response = await fetch(`${API_BASE_URL}/occurrences${buildQueryString(filters)}`);

    if (!response.ok) {
        throw new Error("Failed to fetch occurrences");
    }

    return (await response.json()) as Occurrence[];
};
