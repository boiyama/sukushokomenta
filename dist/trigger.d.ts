export interface KeyLike {
    type: "keydown" | "keyup";
    key: string;
    code: string;
    repeat: boolean;
    isComposing: boolean;
    ctrlKey: boolean;
    altKey: boolean;
    metaKey: boolean;
    shiftKey: boolean;
}
export declare const DOUBLE_SHIFT_MS = 400;
/** 「Shift を 2 回すばやく押す」の判定。時刻を引数に取る純粋なステートマシン */
export declare class DoubleShift {
    private down;
    private tainted;
    private first;
    reset(): void;
    /** 起動すべきなら true */
    handle(e: KeyLike, now: number): boolean;
}
/** 文字をキーボードで入力する種類の input か */
export declare function isTextInputType(type: string): boolean;
/** ページ側で文字入力中か(Shadow DOM の中もたどる) */
export declare function isEditingElsewhere(): boolean;
/** Shift 2 回で onTrigger を呼ぶ。返り値で解除できる */
export declare function setupTrigger(onTrigger: () => void): () => void;
