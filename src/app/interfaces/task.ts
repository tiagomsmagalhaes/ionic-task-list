export interface Task {
    id?: string;
    title: string;
    time: number;
    unit: string;
    cost: number;
    price: number;
    vat: number;
    profit?: number;
}
