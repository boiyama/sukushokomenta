import type { QueueData } from "./queue";
export interface MenuHandlers {
    onExit: () => void;
    onCopy: () => void;
    onOpenIssue: () => void;
    onOpenShot: (id: string) => void;
    onDeleteShot: (id: string) => void;
    onClear: () => void;
}
/** ドラッグで動かせるメニュー。送信待ちコメントの一覧と送信もここ */
export declare class Menu {
    private h;
    private el;
    private panel;
    private countEl;
    private data;
    private statusEl;
    private busy;
    private copy;
    private msg;
    private curId;
    private urls;
    constructor(root: ShadowRoot, h: MenuHandlers);
    private drag;
    private placePanel;
    private panelClick;
    /** 画像の作成中は ① を押せなくする */
    setBusy(b: boolean): void;
    /** ① の状態(コピー済み / 保存済み)と、失敗などの一言を出す。state・msg とも空で元に戻す */
    setResult(state: "copied" | "saved" | null, msg?: string): void;
    private sync;
    private url;
    /** 画像の URL を解放する */
    destroy(): void;
    /** cur: いま開いているスクショの id */
    update(data: QueueData, cur?: string): void;
}
