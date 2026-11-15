export declare function truncate(s: string, max?: number): string;
export declare function pathOf(url: string, base?: string): string;
/** パスの初出順で安定ソートする(番号と本文の並びをそろえるため) */
export declare function orderByPath<T extends {
    path: string;
}>(items: T[]): T[];
export interface Group {
    path: string;
    /** 画面名(撮影時の h1 か document.title)。なければパスを使う */
    title?: string;
    items: {
        n: number;
        text: string;
    }[];
}
/** すでに並び順が確定した [path, text] 列から、番号付きのグループを作る */
export declare function buildGroups(entries: {
    path: string;
    text: string;
    title?: string;
}[]): Group[];
export declare const TITLE_MAX = 30;
/** 画面名: h1 → document.title → パスの順。長ければ切る */
export declare function screenName(h1: string | undefined, docTitle: string | undefined, path: string): string;
export declare function buildTitle(groups: Group[]): string;
export declare const PASTE_START = "<!-- \u2193\u3053\u3053\u306B\u753B\u50CF\u8CBC\u308A\u4ED8\u3051 -->";
export declare const PASTE_END = "<!-- \u2191\u3053\u3053\u306B\u753B\u50CF\u8CBC\u308A\u4ED8\u3051 -->";
export declare const PASTE_AREA = "<!-- \u2193\u3053\u3053\u306B\u753B\u50CF\u8CBC\u308A\u4ED8\u3051 -->\n\n<!-- \u2191\u3053\u3053\u306B\u753B\u50CF\u8CBC\u308A\u4ED8\u3051 -->";
export declare function buildBody(groups: Group[], env: string, withComments?: boolean): string;
/** 「OS ブラウザ / 画面サイズ」の 1 行。画面サイズは撮影時のもので、違うものが混ざれば初出順に並べる */
export declare function describeEnv(ua: string, sizes: {
    width: number;
    height: number;
}[]): string;
