/** ブラウザの文字拡大(iOS Chrome など)の倍率 k を測る。拡大なしなら 1。測ったらプローブはすぐ消す。 */
export declare function measureTextScale(doc?: Document): number;
/** 実測の高さと指定値から k を出す。測れない・極端な値は 1 にする */
export declare function computeScale(measured: number, base: number): number;
