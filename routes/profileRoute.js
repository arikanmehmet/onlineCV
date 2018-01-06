
var Profile = require('../models/profile')


//function that brings up the profile page.

module.exports.profilePage = function(req,res){
    var username = req.params.username;
    var jadeTemplate = req.params.jadeTemplate;

    if(req.params.jadeTemplate == null){
        jadeTemplate="index";
    }
    if(req.params.jadeTemplate == "index.html"){
        jadeTemplate="index";
    }
    if(req.params.jadeTemplate == "skills.html"){
        jadeTemplate="skills";
    }
    if(req.params.jadeTemplate == "work.html"){
        jadeTemplate="work";
    }
    if(req.params.jadeTemplate == "resume.html"){
        jadeTemplate="resume";
    }

    Profile.findOne({username : username},function(err, entity){
        if(err){
            console.log("Error while getting Profile for username: " + username + " ERROR: " + err);
        }else{
            console.log(entity);
            res.render(jadeTemplate,{profile:entity, jadeTemplate:jadeTemplate});
        }
    });
}

//you can edit it according to your curriculum vitae.

module.exports.profileSave = function(){

    var arikanMehmet = new Profile({
        username: 'marikan',
        profile:{
            name: 'Mehmet Arıkan',
            job : 'Computer Engineer',
            description: 'My name is Mehmet.I am 23 years old.I am a computer engineering student.In my daily life,i enjoy reading,software and sports.',   
            picture: '/img/mini.jpg',
            thumbnail: '/img/user.jpg'
        },
        skills:[
            {
                shortcode: 'Ps',
                fullname: 'PHOTOSHOP',
                value: '90',
                color: 'red'
            },
            {
                shortcode: 'Ai',
                fullname: 'Illustrator',
                value: '80',
                color: 'blue'
            },
            {
                shortcode: 'HTML5',
                fullname: 'HTML5',
                value: '75',
                color: 'white'
            },
            {
                shortcode: 'CSS3',
                fullname: 'CSS3',
                value: '85',
                color: 'green'
            }
        ],
        works:[
            {
                title: '1',
                thumbnail: '/img/noimg.png',
                image: '/img/noimg.png'
            },
            {
                title: '2',
                thumbnail: '/img/noimg.png',
                image: '/img/noimg.png'
            },
            {
                title: '3',
                thumbnail: '/img/noimg.png',
                image: '/img/noimg.png'
            },
            {
                title: '4',
                thumbnail: '/img/noimg.png',
                image: '/img/noimg.png'
            },
            {
                title: '5',
                thumbnail: '/img/noimg.png',
                image: '/img/noimg.png'
            },
            {
                title: '6',
                thumbnail: '/img/noimg.png',
                image: '/img/noimg.png'
            }
        ],
        resume: {
            description: 'You can download my resume for your reference and I hope that we will meet very soon! :)',
            file: '#',
            size: '125kb'
        }
    });

    arikanMehmet.save(function(err){
        if(err){
            console.log("Error while saving Example Profile. Error:  " + err );
        }
    });
}
