var config = {
    // "map" works only with local AMD modules
    "map": {
        "*": {
            "fadeInElementAlias": "Denal05_MacademyJsFun/js/fade-in-element"
        }
    },
    "paths": {
        "vue": [
            // First try to use the CDN version of Vue:
            "https://cdn.jsdelivr.net/npm/vue@2/dist/vue",
            // and if the CDN is offline, use the local Vue version:
            "Denal05_MacademyJsFun/js/vue"
        ]
    }
};
