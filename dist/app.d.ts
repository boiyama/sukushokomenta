export declare class App {
    private repo;
    private active;
    private destroyed;
    private launcher;
    private exitFn;
    constructor(repo: string, button?: boolean);
    /** 起動ボタンを出す */
    mount(): void;
    /** コメントモードを閉じ、起動ボタンも外す */
    destroy(): void;
    private refreshCount;
    enter(): Promise<void>;
}
