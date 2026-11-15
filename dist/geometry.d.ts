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
/** ほぼ動かなかったストロークはタップとみなす */
export declare function isTap(points: Point[], threshold?: number): boolean;
/** 近すぎる点を間引く */
export declare function thin(points: Point[], minDist?: number): Point[];
