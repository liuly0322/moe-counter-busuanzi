export declare function generateCounterImage(count: number, length: number, useDefaultTheme: boolean, theme?: string[]): string;
export type BusuanziResult = {
    site_uv: number;
    page_pv: number;
    site_pv: number;
};
export declare function fetchBusuanziCounter(): Promise<BusuanziResult>;
