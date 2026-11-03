import { LOCAL_STORE_PREFIX } from "../contsts.js";

const Utils = {
    hasOwn(object, key) {
        return object.hasOwnProperty(key);
    }
}

function removeDarkTheme() {
    document.documentElement.classList.remove("dark")
}

function removeLightTheme() {
    document.documentElement.classList.remove("light");
}

function setDarkTheme() {
    document.documentElement.classList.add("dark");
}

function setLightTheme() {
    document.documentElement.classList.add("light")
}

function hasTheme(theme) {
    return document.documentElement.classList.contains(theme);
}

function getOppositeTheme(originTheme) {
    const darkTheme = "dark";
    const lightTheme = "light";

    return originTheme === darkTheme ? lightTheme : darkTheme;
}

function setTheme(theme) {
    switch (theme) {
        case "dark":
            setDarkTheme();
            break;
        case "light":
            setLightTheme();
            break;
        default:
            throw new Error(`Unrecognized Theme ${theme}`);
    }
}

function unSetTheme(theme) {
    switch (theme) {
        case "dark":
            removeDarkTheme();
            break;
        case "light":
            removeLightTheme();
            break;
        default:
            throw new Error(`Unrecognized Theme ${theme}`);
    }
}

function getPrefixedLocalStorageKey(key) {
    return LOCAL_STORE_PREFIX.concat("_", key);
}

function getSavedTheme() {
    return localStorage.getItem(
        getPrefixedLocalStorageKey("theme")
    )
}

function $(selector) {
    return document.querySelector(selector);
}

function $$(selector) {
    return document.querySelectorAll(selector);
}

function $id(id) {
    return document.getElementById(id);
}

function toogleSidebar() {
    const _s = $(".sidebar");
    const openClassName = "open";
    const hasOpenClassName = _s.classList.contains(openClassName);

    _s.classList.toggle(openClassName, !hasOpenClassName)
}

export {
    Utils,
    removeDarkTheme,
    removeLightTheme,
    setDarkTheme,
    setLightTheme,
    hasTheme,
    getOppositeTheme,
    setTheme,
    unSetTheme,
    getSavedTheme,
    getPrefixedLocalStorageKey,
    toogleSidebar,
    $,
    $$,
    $id
}