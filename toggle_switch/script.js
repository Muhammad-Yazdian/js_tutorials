function imageVolumeHandler() {
  var imgVolumeFullPath = document.getElementById('img-volume').src;
  // var filename_ = imgVolumeFullPath.match(/^.*[/\//]/g);
  var filename = imgVolumeFullPath.replace(/^.*[\\\/]/, '');
  if (filename == 'on.jpg') {
    document.getElementById('img-volume').src = 'img/off.jpg';
  }
  else if (filename == 'off.jpg') {
    document.getElementById('img-volume').src = 'img/on.jpg';
  }
}