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
      })}).then(function () {
      return botui.action.text({
        delay: 1000,
        action: {
          placeholder: 'Description'
        }
      })}).then(function () {

    botui.message.bot({delay: 1000, content:"Thanks! Now let's get to know more about Suraj"}).then(
        botui.message.bot({delay: 1000, content:"Click on one of the options below!"})
    )

}).then(function () {
    return botui.action.button({
      delay: 2000,
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
    botui.message.add({cssClass:'education', content:''})

};