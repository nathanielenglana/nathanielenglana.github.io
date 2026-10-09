// Custom GA4 events. Each call is skipped until the gtag snippet is on the page.
(function () {
  function send(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }

  var project = document.body.getAttribute('data-project');
  if (project) send('project_view', { project_name: project });

  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[data-event]');
    if (!link) return;
    send(link.getAttribute('data-event'), {
      link_label: link.getAttribute('data-label') || link.textContent.trim(),
      link_url: link.href
    });
  });
})();
