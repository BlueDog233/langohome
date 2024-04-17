import Vue from 'vue';

export default Vue.extend({
    template: '<div>{{ message }}</div>',
    data() {
        return {
            message: 'Hello, Vue!'
        }
    }
});
