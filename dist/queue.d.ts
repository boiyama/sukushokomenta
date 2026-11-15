import type { CommentItem, Shot } from "./types";
export interface QueueData {
    shots: Shot[];
    comments: CommentItem[];
}
export declare function loadAll(): Promise<QueueData>;
export declare function putShot(shot: Shot): Promise<void>;
export declare function putComment(c: CommentItem): Promise<void>;
/** コメントを消す。そのスクショに他のコメントがなければスクショも消す */
export declare function deleteComment(id: string): Promise<void>;
/** スクショと、そのコメントをまとめて消す */
export declare function deleteShot(id: string): Promise<void>;
export declare function clearAll(): Promise<void>;
export declare function uid(): string;
