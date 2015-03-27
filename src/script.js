$(function() {
  'use strict';

  var PLAYER_TEMPLATE = '' +
    '<div class="jp-audio">' +
    '  <div class="timekeeper">' +
    '    <span class="jp-current-time"></span>' +
    '    / ' +
    '    <span class="jp-duration"></span>' +
    '  </div>' +
    '  <div class="jp-progress">' +
    '    <div class="jp-seek-bar">' +
    '      <div class="jp-play-bar"></div>' +
    '    </div>' +
    '  </div>' +
    '  <table class="jp-controls"><tr>' +
    '    <td><a href="#" title="Jump back 15 seconds" class="jp-jump-back"><i class="fa fa-repeat fa-flip-horizontal"></i></a></td>' +
    '    <td>' +
    '      <a href="#" title="Play" class="jp-play"><i class="fa fa-play"></i></a>' +
    '      <a href="#" title="Pause" class="jp-pause"><i class="fa fa-pause"></i></a>' +
    '    </td>' +
    '    <td class="jp-volume-controls">' +
    '      <a href="#" title="Mute" class="jp-mute"><i class="fa fa-volume-up"></i></a>' +
    '      <a href="#" title="Unmute" class="jp-volume-max"><i class="fa fa-volume-off"></i></a>' +
    '    </td>' +
    '  </tr></table>' +
    '  <div class="jp-no-solution">' +
    '      Media Player Error<br>' +
    '      Update your browser or Flash plugin' +
    '  </div>' +
    '</div>' +
    '';

  $('audio.jp-player-simple').each(function() {
    var media = $(this);
    var randomId = 'jp_container_' + Math.floor(Math.random() * 9999);
    var player = $(PLAYER_TEMPLATE).insertAfter(media);
    player.attr('id', randomId);
    media.jPlayer({
      ready: function () {
        $(this).jPlayer('setMedia', {
          mp3: media.attr('src')
        });
      },
      cssSelectorAncestor: ('#' + randomId),
      supplied: 'mp3',
      solution: 'html',
      preload: 'auto'
    });

    player.on('click', '.jp-jump-back', function(e) {
      e.preventDefault();
      var rewind = 15;
      var currentTime = media.data('jPlayer').status.currentTime;
      var newTime = Math.max(currentTime - rewind, 0);
      media.jPlayer('play', newTime);
    });
  });
});
