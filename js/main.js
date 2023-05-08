document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var modal = document.querySelectorAll('.modal');
    var instances_modal = M.Modal.init(modal);
    var mediaimg = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(mediaimg);
  });