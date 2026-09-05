import dynamic from 'next/dynamic';

const MapView = dynamic(() => import('./components/MapView'), {
  ssr: false,
  loading: () => <div className="map-loading">Загружаем карту Левого берега…</div>,
});

export default function Home() {
  return (
    <main className="app-shell">
      <header className="topbar">
        <a className="brand" href="#map" aria-label="Astana Mobility Lab">
          <span className="brand-mark" aria-hidden="true"><i /><i /><i /></span>
          <span><strong>ASTANA</strong><em>mobility lab</em></span>
        </a>
        <div className="header-copy"><span className="eyebrow">ЦИФРОВОЙ ДВОЙНИК</span><span>Левый берег · Ботанический сад</span></div>
        <a className="source-link" href="https://www.openstreetmap.org" target="_blank" rel="noreferrer">Данные карты ↗</a>
      </header>

      <section id="map" className="map-stage" aria-label="Интерактивная карта Ботанического сада">
        <MapView />
        <section className="intro-card" aria-labelledby="page-title">
          <p className="eyebrow">РАБОЧАЯ КАРТА · 01</p>
          <h1 id="page-title">Ботанический сад<br />и Левый берег</h1>
          <p className="intro-text">Реальная карта района — основа для инвентаризации дорог, переходов и будущего симулятора светофоров.</p>
          <div className="card-divider" />
          <div className="location-row"><span className="pin" aria-hidden="true">●</span><span>Астана, Есильский район<br /><b>51.10617, 71.41657</b></span></div>
        </section>

        <aside className="map-legend" aria-label="Статус слоёв">
          <div className="legend-heading"><span>СЛОИ КАРТЫ</span><b>02</b></div>
          <div className="legend-row"><span className="legend-dot real" /><span><strong>Реальная карта улиц</strong><small>OpenStreetMap</small></span><span className="on">Вкл.</span></div>
          <div className="legend-row"><span className="legend-dot study" /><span><strong>Рабочая зона проекта</strong><small>радиус 1,2 км</small></span><span className="on">Вкл.</span></div>
          <div className="legend-note">Пробки, фазы и штрафы не показаны: публичных достоверных данных для этой зоны пока нет.</div>
        </aside>

        <div className="map-caption"><span className="status-light" /><span>КАРТА ВЕРСИИ MVP</span><span className="caption-rule" /><span>масштабируйте и перемещайте карту</span></div>
      </section>

      <section className="lower-bar" aria-label="Контекст проекта">
        <div><span className="lower-number">01</span><p><b>Геометрия</b><br />дороги, тротуары, переходы</p></div>
        <div><span className="lower-number">02</span><p><b>Потоки</b><br />запрашиваются у владельца ITS</p></div>
        <div><span className="lower-number">03</span><p><b>Управление</b><br />только безопасные фазы в симуляторе</p></div>
        <a href="https://www.openstreetmap.org/#map=15/51.10617/71.41657" target="_blank" rel="noreferrer">Открыть полную карту ↗</a>
      </section>
    </main>
  );
}
