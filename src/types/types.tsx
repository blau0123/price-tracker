export interface PriceHistoryPoint {
    price: number;
    date: string;
};

export interface ItemData {
    id: number;
    logo: string;
    link: string;
    company: string;
    itemName: string;
    currPrice: number;
    priceHistory?: PriceHistoryPoint[];
    priceIncrease?: boolean;
};