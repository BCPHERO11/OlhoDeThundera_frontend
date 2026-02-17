import type { Occurrence } from "../types/Occurrence";

export interface OccurrenceFilters {
    status?: string;
    type?: string;
}

const API_BASE_URL = `${import.meta.env.VITE_API_URL ?? "http://localhost:8070"}/api`;

type ApiOccurrence = Partial<Occurrence> & {
    tipo?: string;
    localizacao?: string;
    equipe?: string;
};

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

    const payload = (await response.json()) as ApiOccurrence[] | ApiOccurrence;
    const occurrences = Array.isArray(payload) ? payload : [payload];

    return occurrences.map((occurrence, index) => ({
        id: Number(occurrence.id ?? index + 1),
        type: occurrence.type ?? occurrence.tipo ?? "-",
        location: occurrence.location ?? occurrence.localizacao ?? "-",
        status: occurrence.status ?? "unknown",
        team: occurrence.team ?? occurrence.equipe ?? "-",
    }));
};
