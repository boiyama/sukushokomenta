export interface Rect {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
}
export interface Size {
    width: number;
    height: number;
}
/**
 * 入力欄の左上を決める。丸(anchor)の右横 → 下 → 左横 → 上 の順に、
 * 丸に重ならず見える範囲(view)に収まる最初の位置を採る。どこにも収まらなければ上を試し、
 * 見える範囲に収まるよう寄せる。座標はすべて同じ座標系(ホストの左上が原点)
 */
export declare function placeEditor(anchor: Rect, size: Size, view: Size): {
    left: number;
    top: number;
};
/**
 * キーボードで見える範囲(viewHeight)が縮んだとき、丸(anchor)が見える範囲の縦の中ほどに来るよう、
 * スナップショットを上へずらす量を返す。丸が高くて収まらなければ、丸の上端を見える範囲の上端に合わせる。
 * ずらしすぎて下に余白が見えないよう、上限は pageHeight - viewHeight(キーボードの高さ相当)。
 * 下へは動かさない(0 以上)
 */
export declare function computeShift(anchor: Rect, pageHeight: number, viewHeight: number): number;
