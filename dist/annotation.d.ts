import { type Rect } from "./placement";
export interface EditorOptions {
    text: string;
    /** 囲いの外接矩形(画面の座標、ずらしたあとの位置)。入力欄はこの横に出す。見える範囲が変わるたびに呼ぶ */
    anchor: () => Rect;
    /** 新規の囲いか。空のまま保存したら、新規は破棄、既存は空のコメントで保存する */
    isNew: boolean;
    /** 既存の囲いのときだけ渡す。あると削除ボタンを出す */
    onDelete?: () => void;
    onSave: (text: string) => void;
    onCancel: () => void;
}
/** 囲いのコメント入力欄(囲いの横に出る小さな箱)。返り値で閉じる */
export declare function openEditor(root: ShadowRoot, o: EditorOptions): () => void;
