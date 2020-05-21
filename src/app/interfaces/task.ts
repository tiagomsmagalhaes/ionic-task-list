export interface Task {
    id?: number;
    title: string;
    time: number;
    unit: string;
    cost: number;
    price: number;
    vat: number;
    profit?: number;
}
