'use strict';

(function() {
    /**
     * Handles click events on the main CTA and emits the intent
     */
    function emitCTAIntent() {
        let cta = document.getElementById('onboarding_cta');
        cta.addEventListener('click', function(event) {
            event.preventDefault();
            self.port.emit('intent', cta.dataset.intent);
        });
    }

    /**
     * listen for the modify event emitted from the add-on, and only then,
     * start executiion of the code.
     * @param {object} data - An object containing the template and page titles.
     */
    self.port.on('modify', function(data) {
        let documentRoot = document.documentElement;
        documentRoot.insertAdjacentHTML('beforeend', data);
        emitCTAIntent();
    });
})();
