export type Point = [number, number];
export interface Shot {
    id: string;
    createdAt: number;
    /** URL のパス部分(クエリ・ハッシュなし) */
    path: string;
    /** 画面名(撮影時の h1 か document.title)。保存済みの古いものにはない */
    title?: string;
    /** 撮影時のビューポート(CSS px) */
    width: number;
    height: number;
    image: Blob;
}
export interface CommentItem {
    id: string;
    shotId: string;
    createdAt: number;
    points: Point[];
    text: string;
}
export interface InitOptions {
    /** 例: "owner/repo"。issue を立てるリポジトリ */
    repo: string;
    /** false なら起動ボタンを出さない。既定 true */
    button?: boolean;
}
export declare const MAX_COMMENTS = 10;
