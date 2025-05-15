/*! See: https://github.com/FranBar1966/bootstrap-5-modal-close-on-back */

/*
 * Bootstrap 5 close a modal with back button
 * https://github.com/FranBar1966/bootstrap-5-modal-close-on-back
 */
(function(window, bootstrap) {
    'use strict';

    const state = {
        historyOpenModals: [],
        skipModalHiddenEvent: false,
        skipModalHashChangeEvent: false
    };

    function handleModalShown(ev) {
        if (!ev.target.id) return;

        if (!state.historyOpenModals.includes(ev.target.id)) {
            state.historyOpenModals.push(ev.target.id);
            window.history.pushState(null, '', '#' + ev.target.id);
        }
    }

    function handleModalHide(ev) {
        if (state.skipModalHiddenEvent) {
            state.skipModalHiddenEvent = false;
            return;
        }

        state.skipModalHashChangeEvent = true;
        window.history.go(-1);
        state.historyOpenModals = state.historyOpenModals.filter(id => id !== ev.target.id);
    }

    function handleHashChange(ev) {
        if (state.skipModalHashChangeEvent) {
            state.skipModalHashChangeEvent = false;
            return;
        }

        const lastModalId = state.historyOpenModals[state.historyOpenModals.length - 1];
        if (!lastModalId) return;

        const modal = bootstrap.Modal.getInstance(document.getElementById(lastModalId));
        if (modal) {
            state.skipModalHiddenEvent = true;
            state.historyOpenModals = state.historyOpenModals.filter(id => id !== lastModalId);
            modal.hide();
        }
    }

    window.addEventListener('shown.bs.modal', handleModalShown);
    window.addEventListener('hide.bs.modal', handleModalHide);
    window.addEventListener('hashchange', handleHashChange);

})(window, bootstrap || {});
