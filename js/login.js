const database = firebase.database();
const userref = database.ref("USER")

new Vue({
    el: '#loginbox',
    data: {
        username: '',
        password: '',
        query: []
    },
    methods: {
        checklogin: function() {
            usernametxt = this.username
            passwordtxt = this.password
            qq = this.query

            userref.on('value', snapshot => {
                this.query.push(snapshot.val())
                console.log(snapshot.val())
            })


        }
    }

})