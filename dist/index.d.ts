export declare function generateCounterImage(count: number): string;
export type BusuanziResult = {
    site_uv: number;
    page_pv: number;
    site_pv: number;
};
export declare function fetchBusuanziCounter(): Promise<BusuanziResult>;
