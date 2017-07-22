/**
 * Created by suraj on 22/7/17.
 */
var botui = new BotUI('hello-world');

botui.message.add({
  content: 'Hello World from bot!'
});

botui.message.add({
  human: true,
  content: 'Hello World from human!'
});