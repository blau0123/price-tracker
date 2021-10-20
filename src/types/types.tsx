export interface PriceHistoryPoint {
    price: number;
    date: string;
};

export interface Item {
    logo: string;
    link: string;
    company: string;
    itemName: string;
    currPrice: number;
    priceHistory?: PriceHistoryPoint[];
};