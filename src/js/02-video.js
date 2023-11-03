import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function ({ seconds }) {
    localStorage.setItem(LOCAL_KEY, seconds);
    console.log('localStorage');
  }, 1000)
);
const savedTime = localStorage.getItem(LOCAL_KEY);
if (savedTime) {
  player.setCurrentTime(savedTime);
}
