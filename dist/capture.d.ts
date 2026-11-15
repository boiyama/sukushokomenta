export interface Capture {
    blob: Blob;
    width: number;
    height: number;
}
/** 今見えているビューポートだけを画像化する */
export declare function captureViewport(ignore?: Element | null): Promise<Capture>;
