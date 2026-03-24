document.addEventListener("DOMContentLoaded", () => {

  /* ─── TICKER ───────────────────────────── */
  const tickerData = [
    { sym: 'ABSI', price: '84.32', change: '+2.14', pct: '+2.60%', dir: 'up' },
    { sym: 'NBI', price: '4,821', change: '+38.5', pct: '+0.81%', dir: 'up' },
    { sym: 'XBI', price: '98.74', change: '-0.42', pct: '-0.42%', dir: 'down' },
    { sym: 'IBB', price: '156.90', change: '+1.23', pct: '+0.79%', dir: 'up' },
    { sym: 'SPX', price: '5,412', change: '+18.6', pct: '+0.34%', dir: 'up' }
  ];

  function buildTicker() {
    const track = document.getElementById('tickerTrack');
    if (!track) return;

    const items = [...tickerData, ...tickerData].map(d => `
      <span class="ticker-item">
        <span class="sym">${d.sym}</span>
        <span style="color:#fff">${d.price}</span>
        <span class="${d.dir}">${d.change} (${d.pct})</span>
      </span>
    `).join('');

    track.innerHTML = items;
  }

  buildTicker();


  /* ─── SCROLL ANIMATION ───────────────── */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        if (!counterStarted && entry.target.closest('.stats-band')) {
          animateCounters();
          counterStarted = true;
        }
      }
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.fade-up').forEach(el => {
    observer.observe(el);
  });


  /* ─── SMOOTH SCROLL ───────────────── */
  const navbar = document.getElementById("navbar");

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;

      e.preventDefault();

      const offset = navbar ? navbar.offsetHeight : 100;
      const top = target.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth"
      });
    });
  });

});