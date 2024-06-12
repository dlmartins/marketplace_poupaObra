// utilities/setupMatchMedia.js
if (typeof window !== 'undefined' && !window.matchMedia) {
    window.matchMedia = function matchMedia(mediaQuery) {
        return {
            matches: false,
            media: mediaQuery,
            onchange: null,
            addListener: function () {},
            removeListener: function () {},
        };
    };
}
