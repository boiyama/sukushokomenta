import { type Rect } from "./placement";
export interface EditorOptions {
    text: string;
    /** 囲いの番号。欄の左に、囲いと同じ番号の丸を出す */
    n?: number;
    /** 囲いの外接矩形(画面の座標、ずらしたあとの位置)。入力欄はこの横に出す。見える範囲が変わるたびに呼ぶ */
    anchor: () => Rect;
    /** 閉じるときに、入力された文字(前後の空白を除く)で呼ぶ */
    onSave: (text: string) => void;
    /**
     * 欄の外で、画像の上に触れたときに(保存する前に)呼ぶ。
     * 関数を返すと、保存して閉じたあとに呼ぶ(触れた先の囲いの欄を開くのに使う)
     */
    onOutside?: (e: PointerEvent) => (() => void) | void;
}
/** 囲いのコメント入力欄(囲いの横に出る小さな箱)。返り値で閉じる */
export declare function openEditor(root: ShadowRoot, o: EditorOptions): () => void;
