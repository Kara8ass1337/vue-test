import Vue from 'vue';

Vue.directive('console-fired-event', {
    inserted(el, {value: event}) {
        el.addEventListener(event, () => {
            console.log('Fired', `"${ event }"`);
        });
    }
});