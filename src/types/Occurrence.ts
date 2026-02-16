export type OccurrenceStatus =
    | "EM_ANDAMENTO"
    | "CONCLUIDA"
    | "AGUARDANDO"
    | "CANCELADA";

export interface Occurrence {
    id: number;
    type: string;
    location: string;
    status: OccurrenceStatus;
    team?: string;
}
