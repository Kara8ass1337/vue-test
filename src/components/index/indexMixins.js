export default {
    data() {
        return {
            btnText: 'Тыкни',
        }
    },
    methods: {
        pushTheButton() {
            this.btnText = 'Ты супер!';
        }
    }
};