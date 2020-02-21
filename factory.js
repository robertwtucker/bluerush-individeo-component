"use strict";
/// <reference path="../../Libraries/bobril/library.d.ts"/>
/// <reference path="../../Libraries/dc-helpers/library.ts"/>
var blueRushIndiVideoComponent = {
    id: "BlueRushIndiVideoComponent",
    /*
    init(ctx: ICtx): void {
    },
     */
    render: function (ctx, me) {
        if (!PRODUCTION) {
            me.tag = "div";
            me.children = {
                tag: "h1",
                children: "BlueRush IndiVideo Personalized Digital Video"
            };
            return;
        }
        var d = ctx.data;
        me.attrs = {
            type: "text/javascript",
            src: d.smartEmbedUrl
        };
        me.attrs["data-bp-attachment-code"] = d.attachmentCode;
        me.attrs["data-bp-individeo-data"] = JSON.stringify(d.getPayload());
        if (d.language)
            me.attrs["data-bp-lang"] = d.language;
        if (d.environment)
            me.attrs["data-bp-env"] = d.environment;
    }
    /*,
    destroy(ctx: ICtx): void {
        // Placeholder for event subscription release
    }
    */
};
function blueRushIndiVideoComponentFactory(attachmentCode, getPayload, smartEmbedUrl, language, environment) {
    return {
        data: {
            attachmentCode: attachmentCode,
            getPayload: getPayload,
            smartEmbedUrl: smartEmbedUrl,
            language: language,
            environment: environment
        },
        component: blueRushIndiVideoComponent
    };
}
exports.blueRushIndiVideoComponentFactory = blueRushIndiVideoComponentFactory;
