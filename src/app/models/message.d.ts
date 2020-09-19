export interface Message {
    id: string,
    from?: string,
    to?: string,
    loading?: boolean
    question?: string,
    answer?: string
}