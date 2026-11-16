import type { Point } from "./types";
export declare function pointInPolygon(p: Point, poly: Point[]): boolean;
export declare function distToSegment(p: Point, a: Point, b: Point): number;
/** 囲いの内側、または線から tolerance px 以内なら当たり */
export declare function hitTest(p: Point, poly: Point[], tolerance?: number): boolean;
export declare function bbox(points: Point[]): {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
};
/** 始点と終点を結んで閉じた多角形の面積 */
export declare function polygonArea(points: Point[]): number;
/**
 * ストロークを、囲い・タップ・どちらでもない(線を引いただけ)に分ける。
 * 指のタップは少しずれて短い線になるので、動いた量ではなく囲んだ面積で囲いかどうかを決める
 */
export declare function classifyStroke(points: Point[], minArea?: number, tapSize?: number): "shape" | "tap" | "none";
/** 近すぎる点を間引く */
export declare function thin(points: Point[], minDist?: number): Point[];
export declare const BADGE_R = 12;
export declare const TRASH_R = 14;
/** 番号の丸の中心。囲いのいちばん上の点に置く(画像の端からはみ出さない) */
export declare function badgeCenter(points: Point[]): Point;
/**
 * 削除ボタン(🗑)の中心。番号の丸の右隣にくっつけて置き、画像(w×h)の中に収める。
 * 右に入らなければ、番号の丸の左隣に置く。
 */
export declare function trashCenter(points: Point[], w: number, h: number): Point;
