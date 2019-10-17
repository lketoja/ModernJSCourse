let user = {
    name: 'lotta',
    age: 32,
    email: 'lotta.ketoja@gmail.com',
    location: 'turku',
    blogs: [
        {name: 'why coding rules', likes: 70}, 
        {name:'10 best books', likes: 30}
    ],
    login: function(){
        console.log('the user logged in');
    },

    //": function" can be taken out
    logout(){
        console.log('the user logged out');
    },
    logBlogs(){
        console.log('this user has written the following blogs:');
        this.blogs.forEach(blog => console.log(blog.name));
    }
};

console.log(user);
console.log(user.name);

//changing property with dot notation
user.age = 25;
console.log(user.age);

//and with square bracket notation
user['age'] = 35;
console.log(user.age);

//with square bracket notation we can pass in a variable.
//the following won't work with dot notation (user.key)
const key = 'location';
console.log(user[key]);

//typeof operator
console.log(typeof user.age);
console.log(typeof user);

//METHODS
user.login();
user.logout();
user.logBlogs();