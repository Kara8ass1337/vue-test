import Vue from 'vue';

Vue.component('page-title', {
    props: {
        'title': String,
        required: true
    },
    created() {
        document.title = this.title;
    },
    watch: {
        title() {
            // only used when the title changes after page load
            document.title = this.title;
        }
    },
    render() {}
});