document.addEventListener('DOMContentLoaded', function(){
  // Lightbox modal image swap
  var lightbox = document.getElementById('lightbox');
  if(lightbox){
    lightbox.addEventListener('show.bs.modal', function (event) {
      var trigger = event.relatedTarget;
      var img = trigger.getAttribute('data-bs-img');
      var caption = trigger.getAttribute('data-bs-caption') || '';
      var source = trigger.getAttribute('data-bs-source') || '';
      var imgEl = document.getElementById('lightbox-img');
      var capEl = document.getElementById('lightbox-caption');
      if(imgEl) imgEl.src = img;
      if(capEl){
        // build caption with optional Unsplash source link
        if(source){
          capEl.innerHTML = caption + ' — <a href="' + source + '" target="_blank" rel="noopener">Lihat di Unsplash</a>';
        } else {
          capEl.textContent = caption;
        }
      }
    });
  }

  // Smooth scrolling for internal links
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      var target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

});
