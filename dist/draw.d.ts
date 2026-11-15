import type { Point } from "./types";
export interface Shape {
    points: Point[];
    n: number;
}
/** 画像の上に重ねる描画用 canvas。手書きの囲いとタップを扱う */
export declare class Board {
    private w;
    private h;
    private onShape;
    private onTap;
    readonly canvas: HTMLCanvasElement;
    private ctx;
    private shapes;
    private current;
    private pid;
    constructor(w: number, h: number, onShape: (points: Point[]) => void, onTap: (p: Point) => void);
    /** 表示する画像の大きさに合わせる(描きかけは捨てる) */
    resize(w: number, h: number): void;
    setShapes(shapes: Shape[]): void;
    private pos;
    private down;
    private move;
    private up;
    private cancel;
    private path;
    private paint;
}
