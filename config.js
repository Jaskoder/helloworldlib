import {
    getOppositeTheme,
    getSavedTheme,
    hasTheme,
    setTheme,
    unSetTheme,
    Utils,
} from "./src/utils.js";

export const configOptions = {
    theme: getSavedTheme() || "dark",
};

export const ConfigFunctions = {
    theme: (theme) => {
        const hasThisTheme = hasTheme(theme);
        const oppositeTheme = getOppositeTheme(theme);

        if (!hasThisTheme) {
            unSetTheme(oppositeTheme);
            setTheme(theme);
        }
    },
};

export const applyConfig = (configOptions) => {
    Object.keys(configOptions).forEach((configOption) => {
        if (Utils.hasOwn(configOptions, configOption)) {
            ConfigFunctions[configOption](
                configOptions[configOption]
            );
        }
    });
};
