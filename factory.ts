/// <reference path='../../Libraries/bobril/library.d.ts'/>

interface IData {
    attachmentCode: string;
    getPayload(): object;
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
        const d = ctx.data;
        me.tag = "script";
        me.attrs = {
            type: "text/javascript",
            src: "https://d2ur3inljr7jwd.cloudfront.net/individeo/prod/v20/js/smartEmbed.js"
        };
        me.attrs["data-bp-attachment-code"] = d.attachmentCode;
        me.attrs["data-bp-individeo-data"] = "'" + JSON.stringify(d.getPayload()) + "'";
        if (d.language) me.attrs["data-bp-lang"] = d.language;
        if (d.environment) me.attrs["data-bp-env"] = d.environment;
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
    language: string,
    environment: string
): IBobrilNode {
    return {
        data: <IData>{
            attachmentCode,
            getPayload,
            language,
            environment
        },
        component: blueRushIndiVideoComponent
    };
}
