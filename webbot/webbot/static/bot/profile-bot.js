/**
 * Created by suraj on 22/7/17.
 */

var botui = new BotUI('profile-bot');

botui.message
  .bot('Hey! I am Resume Bot!')
    .then(
    botui.message.bot({delay: 1000, content:"I'll help you get through Suraj Pai's Resume!!"})).then(
    botui.message.bot({delay: 2000, content:"But First, Let's START with your name and description"})).then(
    function () {
      return botui.action.text({
        delay: 3000,
        action: {
          placeholder: 'Name'
        }
      })}).then(function (res) {
      return res, botui.action.text({
        delay: 1000,
        action: {
          placeholder: 'Description'
        }
      })}).then(function (res1, res2) {

    botui.message.bot({delay: 1000, content:"Thanks"+ res1.value + "! Now let's get to know more about Suraj"}).then(
        botui.message.bot({delay: 2000, content:"Click on one of the options below!"})
    )

}).then(function () {
    return botui.action.button({
      delay: 3000,
      action: [{
        text: 'Education',
        value: 'ed'
      }, {
        text: 'Experience',
        value: 'exp'
      },
      {
        text: 'Skills',
        value: 'sk'
      },
      {
        text: 'GitHub',
        value: 'gh'
      },
      {
        text: 'Projects',
        value: 'pt'
      },
       {
        text: 'Download Resume',
        value: 're'
      }]
    })
}).then(function (res) {
  if(res.value == 'ed') {
    showEducation();
  } else if( res.value == 'exp') {
    showExperience();
  }
  else if( res.value == 'sk') {
    showSkills();
  }
  else if( res.value == 'gh') {
    showGithub();
  }
  else if( res.value == 'pt') {
    showProjects();
  }
  else if (res.value == 're'){
      downloadResume();
  }
});

var showEducation = function () {
    botui.message.add({cssClass:'image', delay: 1000, content:' Suraj is an Electronics and Communications Engineer with a Bachelor of Technology from Manipal Insitute of Technology.'}).then( botui.message.add({cssClass:'image', delay: 1500, content:' He graduated in 2016 with a CGPA of 8.43'})).then( botui.message.add({cssClass:'image', delay: 2000, content:' Some of his favorite subjects are: Soft Computing, Information Theory, Sat Comms, etc.'}))

};

var showExperience = function () {
    botui.message.add({cssClass:'image', delay: 1000, content:' Suraj has taken up multiple roles to provide him with perspective and experience.'}).then( botui.message.add({cssClass:'image', delay: 1500, content:' He is currently a Computer Vision Engineer at Cognitive Machines where he works on applying image processing to tackle real world problem sets.'})).then( botui.message.add({cssClass:'image', delay: 2000, content:' Previously, he was a Research Intern at MIT Practice School - Manipal; a Social Innovator at Digital Impact Square, Nashik; And a participant at the Stanford Crowd Course Initiative.'})).then(botui.message.add({delay:2500, content:"Check out Suraj's Resume to know more"}))


};
var showSkills = function () {
    botui.message.add({cssClass:'education', delay: 1000, content:"Some of Suraj's skill sets are: "}).then(botui.message.add({cssClass:"education", delay: 1500, content:"Image Processing; Machine Learning; NLP; Backend Development; ChatBot Development; etc."
    }))

};

var showGithub = function () {
    botui.message.add({delay: 1000, content:" Here is a link to Suraj's Github Folio!!"}).then(botui.message.add({delay: 1500, content:"[Suraj's GitHub](https://github.com/surajpaib)^"}))
};

var showProjects = function () {
  botui.message.add({delay: 1000, content:"Suraj has worked on multiple projects for fun, work and Hackathons! Here is list of a few of them, Download his Resume to find out more"}).then(botui.message.add({delay: 1500, content:"Facebook Messenger Chatbots: Black Adam Bot: To recognize user recorded Music; First Aid Bot: To give out basic first aid best practices!"})).then(botui.message.add({delay: 1000, content:"Machine Learning Projects: Loan Defaulter Prediction, HackerEarth ML Challenges, SimPol: US Elections Candidate Predictor, QA bot for a Hotel Receptionist, Kaggle Competitions, Airplane Crash Data Visualization, k-NN based prognosis Identifier, Speaker Diaterization systems,etc."}))

};

var downloadResume = function(){
  botui.message.add({delay:1500, content:"[Suraj's Resume]()^"})
};

