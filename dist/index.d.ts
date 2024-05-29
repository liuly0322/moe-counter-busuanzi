export type generateCounterImageOptions = {
    length?: number;
    theme?: string[];
};
export declare function generateCounterImage(count: number, generateOptions?: generateCounterImageOptions): string;
export type BusuanziResult = {
    site_uv: number;
    page_pv: number;
    site_pv: number;
};
export declare function fetchBusuanziCounter(): Promise<BusuanziResult>;
