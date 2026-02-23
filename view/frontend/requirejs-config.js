var config = {
    // "map" works only with local AMD modules.
    "map": {
        "*": {
            "fadeInElementAlias": "Denal05_MacademyJsFun/js/fade-in-element",
            "Magento_Review/js/submit-review": "Denal05_MacademyJsFun/js/submit-review"
        }
    },
    // Path fallbacks for defining JS files:
    "paths": {
        "vue": [
            // First try to use the CDN version of Vue:
            "https://cdn.jsdelivr.net/npm/vue@2/dist/vue",
            // and if the CDN is offline, use the local Vue version:
            "Denal05_MacademyJsFun/js/vue"
        ]
    },
    // "shim" can be used only on non-AMD modules, i.e., traditional JS scripts, such as a jQuery plugin.
    // Use shims sparingly, since it's a global anti-pattern.
    // It's much better to call JS each time you need to use it, rather than defining it globally.
    "shim": {
        // "<local jQuery extensino module>": [<array of dependencies>]
        "Denal05_MacademyJsFun/js/jquery-log": ["jquery"]
    },
    // A "dep" immediately loads the JS file, while a "shim" only defines the relationship between a third-party plugin
    // and a dependency.
    "deps": [
        "Denal05_MacademyJsFun/js/every-page"
    ]
};
