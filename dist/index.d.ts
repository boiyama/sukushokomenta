import type { InitOptions } from "./types";
export type { InitOptions } from "./types";
/**
 * コメントモードを使えるようにする。返り値で解除できる(コメントモード中なら閉じる)。
 * すでに init 済みなら、前のものを解除してから新しい設定で始める。
 */
export declare function init(options: InitOptions): () => void;
