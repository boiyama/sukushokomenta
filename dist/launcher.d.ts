/** 画面の端に常に出る起動ボタン。ドラッグで動かせ、位置は localStorage に保存する */
export declare class Launcher {
    private onLaunch;
    readonly host: HTMLDivElement;
    private wrap;
    private btn;
    private badge;
    private closeBtn;
    private pos;
    private cur;
    /** このタブでは隠す(メモリ上のみ。再読み込みで戻る) */
    private hidden;
    private suppressed;
    private dead;
    private busy;
    private suppressClick;
    private suppressTimer;
    constructor(onLaunch: () => void);
    mount(): void;
    setCount(n: number): void;
    /** コメントモード中は隠す */
    setSuppressed(b: boolean): void;
    /** 画像化中の「処理中」表示 */
    setBusy(b: boolean): void;
    private onClick;
    destroy(): void;
    private onResize;
    private load;
    private save;
    /** 画面サイズに合わせて位置を補正して反映する */
    private apply;
    private dragSetup;
}
