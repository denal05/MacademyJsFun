/**
 * The properties defined within the attribute are now accessible within the callback.
 * For example, the "message" property is now accessible as config.message
 * If you use "*" to target all elements, the element property within the
 * callback will be null because RequireJS won't know which specific element you
 * wish to refeference. In this case, hardcode a selector or use an HTML class
 * attribute rather than an ID selector within your JS initialization.
 */
define(['vue', 'jquery', 'Denal05_MacademyJsFun/js/jquery-log'], function(Vue, $) {
    'use strict';
    // $.log("This is a jQuery message from vue-test.js using a jQuery extension module Denal05_MacademyJsFun/js/jquery-log.js Lesson: Use a RequireJS shim to define JavaScript relationships");

    return function(config, element) {
        return new Vue({
            el: '#' + element.id,
            data: {
                message: config.message
            }
        });
    };
});
