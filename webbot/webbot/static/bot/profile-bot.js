/**
 * Created by suraj on 22/7/17.
 */

var botui = new BotUI('profile-bot');

botui.message
  .bot('Welcome to Suraj Pai Bot. Ill walk you through Surajs profile and help you get to know him better')
    .then(
    botui.message.bot('What would you like to know?'))
  .then(function () {
    return botui.action.button({
      delay: 1000,
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
});

var showEducation = function () {
   botui.message.bot(' Surajs Education is')
};