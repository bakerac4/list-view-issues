"use strict";

module.exports = {
    extends: ["recommended"],
    rules: {
        "no-bare-strings": true,
        "block-indentation": 4,
        "attribute-indentation": {
            indentation: 4,
            "open-invocation-max-len": 120
        }
    }
};
