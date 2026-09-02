(function () {
  'use strict';

  const measurementId = 'G-VL7H34L8LZ';
  const schedulerHost = 'zus03h0enw04.sg.larksuite.com';
  const schedulerPath = '/scheduler/03970278dd9a7925';

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag('js', new Date());
  window.gtag('config', measurementId);

  const tag = document.createElement('script');
  tag.async = true;
  tag.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(tag);

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href]');
    if (!link) return;

    let destination;
    try {
      destination = new URL(link.href, window.location.href);
    } catch (error) {
      return;
    }

    if (destination.hostname !== schedulerHost || destination.pathname !== schedulerPath) return;

    window.gtag('event', 'booking_click', {
      link_url: destination.href,
      link_text: (link.textContent || '').trim().slice(0, 100),
      source_page: window.location.pathname,
      source_title: document.title,
      transport_type: 'beacon'
    });
  });
})();
