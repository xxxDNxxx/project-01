const database = firebase.database();
const userRef = database.ref("USER")
new Vue({
    el: "#register",
    data: {
        username: '',
        password: '',
        firstname: '',
        lastname: '',
        email: '',
        status: ''
    },
    methods: {
        storeuser: function() {
            userRef.push({
                username: this.username,
                password: this.password,
                firstname: this.firstname,
                lastname: this.lastname,
                email: this.email,
                status: this.status
            })
            alert('สมัครสมาชิกเสร็จสิ้น')
            this.username = ''
            this.password = ''
            this.firstname = ''
            this.lastname = ''
            this.email = ''

        }
    },
    created() {

    }
})