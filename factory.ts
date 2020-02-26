/// <reference path="../../Libraries/bobril/library.d.ts"/>
declare var PRODUCTION: boolean;

interface IData {
    attachmentCode: string;
    getPayload(): object;
    smartEmbedUrl: string;
    language: string;
    environment: string;
}

interface ICtx {
    data: IData;
}

const blueRushIndiVideoComponent: IBobrilComponent = {

    id: "BlueRushIndiVideoComponent",

    /*
    init(ctx: ICtx): void {
    },
     */

    render(ctx: ICtx, me: IBobrilNodeWithTag | IBobrilNodeWithComponent | IBobrilNodeWithChildren): void {
        // if (!PRODUCTION) {
        //     me.tag = "h3";
        //     me.children = "IndiVideo Personalized Digital Video";
        //     return;
        // }

        if (PRODUCTION) {
            const d = ctx.data;
            me.tag = "script";
            me.attrs = {
                type: "text/javascript",
                src: d.smartEmbedUrl
            };
            me.attrs["data-bp-attachment-code"] = d.attachmentCode;
            me.attrs["data-bp-individeo-data"] = JSON.stringify(d.getPayload());
            if (d.language) me.attrs["data-bp-lang"] = d.language;
            if (d.environment) me.attrs["data-bp-env"] = d.environment;
        }
    }

    /*,
    destroy(ctx: ICtx): void {
        // Placeholder for event subscription release
    }
    */
};

export function blueRushIndiVideoComponentFactory(
    attachmentCode: string,
    getPayload: () => object,
    smartEmbedUrl: string,
    language: string,
    environment: string
): IBobrilNode {
    return {
        data: <IData>{
            attachmentCode,
            getPayload,
            smartEmbedUrl,
            language,
            environment
        },
        component: blueRushIndiVideoComponent
    };
}
