const express = require('express');
const port = process.env.PORT || 5000;

const app = express();

const fs = require('fs');


// API MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('m00dlekiller'));


// API ROUTES
app.get('*', function (req, res) {
    res.sendfile(__dirname + '/mk_404.html');
});

app.post('/mk_profile', (req, res) => {
    var profile = {
        zaur_profile: []
    };
    profile.zaur_profile.push(req.body);
    console.log(profile);
    let content = JSON.parse(fs.readFileSync('m00dlekiller/profile_data.json', 'utf8'));
    let con = content.zaur_profile[0];
    let pro = profile.zaur_profile[0];
    con.description = pro.description;
    con.first_name = pro.first_name;
    con.surname = pro.surname;
    con.age = pro.age;
    con.sex = pro.sex;
    con.major = pro.major;
    con.country = pro.country;
    con.city = pro.city;
    con.email = pro.email;
    con.github = pro.github;
    con.telegram = pro.telegram;
    console.log("Change User Details");


    fs.writeFileSync('m00dlekiller/profile_data.json', JSON.stringify(content));
});

app.post('/mk_profile2', (req, res) => {
    var profile = {
        zaur_profile: []
    };
    profile.zaur_profile.push(req.body);
    console.log(profile);
    let content = JSON.parse(fs.readFileSync('m00dlekiller/profile_data.json', 'utf8'));
    let con = content.zaur_profile[0];
    let pro = profile.zaur_profile[0];

    con.name_1 = pro.name_1;
    con.description_1 = pro.description_1;
    con.color_1 = pro.color_1;
    con.width_1 = pro.width_1;

    con.name_2 = pro.name_2;
    con.description_2 = pro.description_2;
    con.color_2 = pro.color_2;
    con.width_2 = pro.width_2;

    con.name_3 = pro.name_3;
    con.description_3 = pro.description_3;
    con.color_3 = pro.color_3;
    con.width_3 = pro.width_3;

    console.log("Change Project Status");

    fs.writeFileSync('m00dlekiller/profile_data.json', JSON.stringify(content));
});

app.listen(port, () => {
    console.log('Server started at http://localhost:5000')
});
