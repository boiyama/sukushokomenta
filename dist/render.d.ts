import { type Group } from "./text";
import type { CommentItem, Shot } from "./types";
import type { QueueData } from "./queue";
export interface Ordered {
    shots: {
        shot: Shot;
        comments: CommentItem[];
    }[];
    /** 番号付きの本文用グループ */
    groups: Group[];
}
/** 画像・本文で共通の順序と番号を決める */
export declare function arrange(data: QueueData): Ordered;
/** ビューポートごとに「囲い・番号・コメントのカード・矢印を描いた画像」を縦に連結した PNG を作る */
export declare function renderImage(data: QueueData): Promise<Blob>;
