// ==================== GLOBAL/INIT =========================

var query = query || {},
    grdn = grdn || {};

/**
 * Function executed when document is ready. It calls all modules' init function.
 */
query.documentReady(function() {

        /**
         * Initialize all modules.
         */
        grdn.utils.initializeModules();    }
);
