"use strict";
var blueRushIndiVideoComponent = {
    id: "BlueRushIndiVideoComponent",
    render: function (ctx, me) {
        if (PRODUCTION) {
            var d_1 = ctx.data;
            me.tag = "script";
            me.attrs = {
                type: "text/javascript",
                src: d_1.smartEmbedUrl
            };
            me.attrs["data-bp-attachment-code"] = d_1.attachmentCode;
            me.attrs["data-bp-individeo-data"] = JSON.stringify(d_1.getPayload());
            if (d_1.language)
                me.attrs["data-bp-lang"] = d_1.language;
            if (d_1.environment)
                me.attrs["data-bp-env"] = d_1.environment;
        }
        else {
            me.tag = "div";
            me.children = "IndiVideo Personalized Digital Video";
        }
    }
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
