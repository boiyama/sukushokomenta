import type { Point } from "./types";
/** 貼り付け画像のレイアウト計算(描画に依存しない純関数) */
export declare const W = 1200;
export declare const SIDE = 360;
export declare const SW: number;
export declare const MARGIN = 20;
export declare const GAP = 16;
/** カードの端からスナップショットまでの、矢印を通す余白 */
export declare const ARROW = 44;
export declare const CARD_PAD = 14;
export declare const LINE_H = 42;
export declare const SIDE_CARD_W: number;
export declare const TB_CARD_W = 440;
export type Side = "top" | "bottom" | "left" | "right";
export interface LayoutItem {
    points: Point[];
    /** カードの文字を折り返す幅(px)から、行数を返す */
    lineCount: (innerWidth: number) => number;
}
export interface Card {
    index: number;
    side: Side;
    x: number;
    y: number;
    w: number;
    h: number;
    /** 矢印の根元(カードの縁) */
    from: Point;
    /** 矢印の先(囲い上の点。ブロックの座標) */
    to: Point;
}
export interface BlockLayout {
    width: number;
    height: number;
    /** スナップショットを置く位置と大きさ */
    shot: {
        x: number;
        y: number;
        w: number;
        h: number;
        scale: number;
    };
    cards: Card[];
}
/** 囲いの中心が、画像のどの端に最も近いか(同じ距離なら 上・下・左・右 の順) */
export declare function pickSide(points: Point[], width: number, height: number): Side;
/** 囲いの頂点のうち、その辺にいちばん近い点 */
export declare function anchorFor(points: Point[], side: Side): Point;
export declare function layoutBlock(shotW: number, shotH: number, items: LayoutItem[]): BlockLayout;
