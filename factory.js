"use strict";
/// <reference path='../../Libraries/bobril/library.d.ts'/>
var blueRushIndiVideoComponent = {
    id: "BlueRushIndiVideoComponent",
    /*
    init(ctx: ICtx): void {
    },
     */
    render: function (ctx, me) {
        var d = ctx.data;
        me.tag = "script";
        me.attrs = {
            type: "text/javascript",
            src: "https://d2ur3inljr7jwd.cloudfront.net/individeo/prod/v20/js/smartEmbed.js"
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
function blueRushIndiVideoComponentFactory(attachmentCode, getPayload, language, environment) {
    return {
        data: {
            attachmentCode: attachmentCode,
            getPayload: getPayload,
            language: language,
            environment: environment
        },
        component: blueRushIndiVideoComponent
    };
}
exports.blueRushIndiVideoComponentFactory = blueRushIndiVideoComponentFactory;
