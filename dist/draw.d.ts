import type { Point } from "./types";
export interface Shape {
    points: Point[];
    n: number;
    /** コメントの id。番号の横の削除ボタン(🗑)で消すのに使う */
    id: string;
}
/** 画像の上に重ねる描画用 canvas。手書きの囲いとタップ、囲いごとの削除ボタンを扱う */
export declare class Board {
    private w;
    private h;
    private onShape;
    private onTap;
    private onDelete;
    readonly canvas: HTMLCanvasElement;
    /** 削除ボタンを置く層。canvas の上に重ね、ボタン以外は触れても canvas に通す */
    readonly layer: HTMLDivElement;
    private ctx;
    private shapes;
    private current;
    /** コメント欄を開いている囲いの id。あるあいだ、ほかの囲いを薄くする */
    private active;
    private pid;
    constructor(w: number, h: number, onShape: (points: Point[]) => void, onTap: (p: Point) => void, onDelete: (id: string) => void);
    /** 表示する画像の大きさに合わせる(描きかけは捨てる) */
    resize(w: number, h: number): void;
    setShapes(shapes: Shape[]): void;
    /** コメント欄を開いている囲いを示す(null で解除) */
    setActive(id: string | null): void;
    /** 囲いの番号 */
    numberOf(id: string): number | undefined;
    private dimmed;
    private placeTrash;
    /** 画面の座標を、画像の上の座標にする(画像をずらしているときも合う) */
    toLocal(clientX: number, clientY: number): Point;
    private pos;
    private down;
    private move;
    private up;
    private cancel;
    private path;
    private paint;
}
