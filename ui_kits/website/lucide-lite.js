(function () {
  const NS = 'http://www.w3.org/2000/svg';
  const icons = {
    'arrow-left': [['path', { d: 'M19 12H5' }], ['path', { d: 'm12 5-7 7 7 7' }]],
    'arrow-right': [['path', { d: 'M5 12h14' }], ['path', { d: 'm12 5 7 7-7 7' }]],
    check: [['path', { d: 'm5 12 4 4L19 6' }]],
    'check-circle-2': [['circle', { cx: '12', cy: '12', r: '9' }], ['path', { d: 'm8 12 3 3 5-6' }]],
    plus: [['path', { d: 'M12 5v14' }], ['path', { d: 'M5 12h14' }]],
    minus: [['path', { d: 'M5 12h14' }]],
    'trending-up': [['path', { d: 'm3 17 6-6 4 4 8-8' }], ['path', { d: 'M14 7h7v7' }]],
    handshake: [['path', { d: 'M7 12 4 9l4-4 4 4' }], ['path', { d: 'm17 12 3-3-4-4-4 4' }], ['path', { d: 'M8 13h8l2 2a2 2 0 0 1-3 3l-1-1' }], ['path', { d: 'm9 16 2 2a2 2 0 0 0 3 0' }]],
    package: [['path', { d: 'M4 7.5 12 3l8 4.5-8 4.5z' }], ['path', { d: 'M4 7.5v9L12 21l8-4.5v-9' }], ['path', { d: 'M12 12v9' }]],
    sparkles: [['path', { d: 'M12 3l1.6 5.2L19 10l-5.4 1.8L12 17l-1.6-5.2L5 10l5.4-1.8z' }], ['path', { d: 'M19 17v4' }], ['path', { d: 'M17 19h4' }]],
    users: [['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2' }], ['circle', { cx: '9.5', cy: '7', r: '4' }], ['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.8' }], ['path', { d: 'M16 3.2a4 4 0 0 1 0 7.6' }]],
    'graduation-cap': [['path', { d: 'M22 10 12 5 2 10l10 5z' }], ['path', { d: 'M6 12v5c3 2 9 2 12 0v-5' }], ['path', { d: 'M22 10v6' }]],
    video: [['rect', { x: '3', y: '6', width: '13', height: '12', rx: '2' }], ['path', { d: 'm16 10 5-3v10l-5-3z' }]],
    radio: [['circle', { cx: '12', cy: '12', r: '2' }], ['path', { d: 'M8.5 8.5a5 5 0 0 0 0 7' }], ['path', { d: 'M15.5 8.5a5 5 0 0 1 0 7' }], ['path', { d: 'M5.5 5.5a9 9 0 0 0 0 13' }], ['path', { d: 'M18.5 5.5a9 9 0 0 1 0 13' }]],
    'message-square': [['path', { d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z' }]],
    'message-square-text': [['path', { d: 'M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z' }], ['path', { d: 'M8 9h8' }], ['path', { d: 'M8 13h6' }]],
    'messages-square': [['path', { d: 'M14 9a4 4 0 0 1 4 4v5l3 2v-9a4 4 0 0 0-4-4h-1' }], ['path', { d: 'M15 13a4 4 0 0 1-4 4H7l-4 3V8a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4z' }]],
    'shield-check': [['path', { d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z' }], ['path', { d: 'm8.5 12 2.5 2.5L16 9' }]],
    'shopping-bag': [['path', { d: 'M6 8h12l-1 13H7z' }], ['path', { d: 'M9 8a3 3 0 0 1 6 0' }]],
    rocket: [['path', { d: 'M5 16c-1 1-2 4-2 4s3-1 4-2' }], ['path', { d: 'M9 15 4 10l6-1 5-5c3-3 6-2 6-2s1 3-2 6l-5 5z' }], ['circle', { cx: '15', cy: '7', r: '1.8' }]],
    film: [['rect', { x: '3', y: '4', width: '18', height: '16', rx: '2' }], ['path', { d: 'M7 4v16' }], ['path', { d: 'M17 4v16' }], ['path', { d: 'M3 9h4' }], ['path', { d: 'M17 9h4' }], ['path', { d: 'M3 15h4' }], ['path', { d: 'M17 15h4' }]]
  };

  function makeIcon(name, source) {
    const svg = document.createElementNS(NS, 'svg');
    const style = source.getAttribute('style') || '';
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', source.style.width || source.getAttribute('width') || '24');
    svg.setAttribute('height', source.style.height || source.getAttribute('height') || '24');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    svg.setAttribute('stroke-width', source.style.strokeWidth || source.getAttribute('stroke-width') || '2');
    svg.setAttribute('stroke-linecap', 'round');
    svg.setAttribute('stroke-linejoin', 'round');
    svg.setAttribute('aria-hidden', 'true');
    svg.style.cssText = style;
    for (const [tag, attrs] of icons[name] || icons.sparkles) {
      const node = document.createElementNS(NS, tag);
      for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
      svg.appendChild(node);
    }
    return svg;
  }

  window.lucide = {
    createIcons() {
      document.querySelectorAll('i[data-lucide]').forEach((node) => {
        node.replaceWith(makeIcon(node.getAttribute('data-lucide'), node));
      });
    }
  };
})();
