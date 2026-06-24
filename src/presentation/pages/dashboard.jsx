import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Globe, TrendingUp, X, Sparkles } from 'lucide-react';
import Chart from 'react-apexcharts';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../application/hooks/useTheme';
import { Button } from '../components/ui/Button';

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-pink-500">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-cyan-500 dark:text-cyan-400">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.74-3.99-1.72-.08 2.76-.01 5.51-.05 8.26-.07 1.63-.67 3.29-1.92 4.36-1.5 1.34-3.71 1.72-5.59 1.09-2.34-.74-3.99-2.99-4.04-5.46-.07-2.92 2.06-5.63 4.95-6.07.72-.1 1.45-.09 2.17.02V14.6c-.52-.15-1.09-.15-1.6-.02-1.04.24-1.78 1.25-1.7 2.31.07.97.89 1.78 1.86 1.8 1.13.06 2.14-.77 2.21-1.9.04-2.58.01-5.16.02-7.74V.02z" />
  </svg>
);

// ─── helper ───────────────────────────────────────────────────────────────────
const pct = (prev, curr) => {
  const val = ((curr - prev) / prev) * 100;
  return val.toFixed(2);
};

const weeks = ['M12→M13', 'M13→M14', 'M14→M15'];

// ─── data persentase ──────────────────────────────────────────────────────────
const igRaw = {
  Followers:  [73, 81, 88, 103],
  Likes:      [173, 202, 217, 302],
  Postingan:  [4, 5, 6, 8],
  Views:      [2979, 3033, 3550, 5341],
};

const ttRaw = {
  Followers:  [31, 33, 41, 42],
  Likes:      [87, 107, 126, 128],
  Postingan:  [6, 7, 8, 9],
  Views:      [6817, 8678, 10600, 15200],
};

const webRaw = {
  Views:      [150, 180, 215, 251],
  Visitors:   [8, 12, 18, 29],
};

const buildChanges = (raw) =>
  Object.fromEntries(
    Object.entries(raw).map(([key, vals]) => [
      key,
      [
        { pct: pct(vals[0], vals[1]), abs: vals[1] - vals[0] },
        { pct: pct(vals[1], vals[2]), abs: vals[2] - vals[1] },
        { pct: pct(vals[2], vals[3]), abs: vals[3] - vals[2] },
      ],
    ])
  );

const igChanges  = buildChanges(igRaw);
const ttChanges  = buildChanges(ttRaw);
const webChanges = buildChanges(webRaw);

const getPeakGrowth = (raw) => {
  const changes = buildChanges(raw);
  const peaks = {};

  Object.entries(changes).forEach(([metric, wVals]) => {
    let maxVal = -Infinity;
    let maxIdx = 0;
    wVals.forEach((val, idx) => {
      const pctNum = parseFloat(val.pct);
      if (pctNum > maxVal) {
        maxVal = pctNum;
        maxIdx = idx;
      }
    });
    peaks[metric] = {
      week: weeks[maxIdx],
      pct: maxVal,
      abs: wVals[maxIdx].abs,
    };
  });

  return peaks;
};

// ─── sub-component: collapsible analysis panel ───────────────────────────────
const AnalyticsPanel = ({ changes, accentColor, isOpen, onClose }) => {
  const paramColors = {
    Followers: 'text-violet-500',
    Likes:     'text-pink-500',
    Postingan: 'text-amber-500',
    Views:     'text-blue-500',
    Visitors:  'text-teal-500',
  };

  return (
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0, marginTop: 0 }}
          animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
          exit={{ height: 0, opacity: 0, marginTop: 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] shadow-sm">
            {/* panel header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border-custom)]">
              <span className="text-xs font-semibold text-[var(--color-text-secondary)] uppercase tracking-wider flex items-center gap-1.5">
                <TrendingUp size={13} className={accentColor} />
                persentase per minggu
              </span>
              <button
                onClick={onClose}
                className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-[var(--color-text-secondary)] cursor-pointer"
                aria-label="Tutup panel"
              >
                <X size={14} />
              </button>
            </div>

            {/* tabel persentase */}
            <div className="p-4 overflow-x-auto">
              <table className="w-full text-xs min-w-[240px]">
                <thead>
                  <tr>
                    <th className="text-left text-[var(--color-text-secondary)] font-semibold pb-2 pr-3 w-1/4">Parameter</th>
                    {weeks.map((w) => (
                      <th key={w} className="text-center text-[var(--color-text-secondary)] font-semibold pb-2 px-1">{w}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.entries(changes).map(([param, vals]) => (
                    <tr key={param} className="border-t border-[var(--color-border-custom)]">
                      <td className={`py-2.5 pr-3 font-semibold ${paramColors[param] ?? 'text-[var(--color-text-primary)]'}`}>
                        {param}
                      </td>
                      {vals.map(({ pct: pctVal, abs: absVal }, i) => {
                        const num = parseFloat(pctVal);
                        const isUp = num >= 0;
                        return (
                          <td key={i} className="py-2.5 px-1 text-center">
                            <span className={`inline-flex flex-col items-center justify-center font-medium rounded-md px-2 py-1
                              ${isUp
                                ? 'bg-green-50 dark:bg-green-950/30 text-green-700 dark:text-green-400'
                                : 'bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400'
                              }`}>
                              <span className="flex items-center gap-0.5 whitespace-nowrap">
                                {isUp ? '▲' : '▼'} {Math.abs(num).toFixed(2)}%
                              </span>
                              <span className="text-[10px] opacity-75 font-normal whitespace-nowrap">
                                ({isUp ? '+' : ''}{absVal.toLocaleString('id-ID')})
                              </span>
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// ─── sub-component: platform card ──────────────────────
const PlatformCard = ({ accentClass, label, views, icon, bgAccent }) => {
  return (
    <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-5 shadow-sm flex items-center justify-between">
      <div>
        <span className={`text-xs font-semibold block mb-0.5 ${accentClass}`}>{label}</span>
        <h4 className="text-2xl font-bold font-display">{views.toLocaleString('id-ID')} views</h4>
        <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">Minggu 15 · Terkini</p>
      </div>
      <div className={`p-2.5 rounded-xl ${bgAccent}`}>
        {icon}
      </div>
    </div>
  );
};

// ─── sub-component: chart card with analysis button ─────────────────────────
const ChartCard = ({ title, subtitle, icon, series, chartOptions, changes, accentClass }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-4 sm:p-6 shadow-sm flex flex-col justify-between">
        <div>
          <div className="pb-4 mb-4 border-b border-[var(--color-border-custom)] flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold font-display text-[var(--color-text-primary)] flex items-center gap-2">
                {icon} {title}
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] mt-1">{subtitle}</p>
            </div>
            <button
              onClick={() => setOpen((o) => !o)}
              className={`flex items-center gap-1.5 text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border transition-colors whitespace-nowrap cursor-pointer
                ${open
                  ? 'bg-[var(--color-bg-primary)] border-[var(--color-border-custom)] text-[var(--color-text-secondary)]'
                  : 'border-[var(--color-border-custom)] hover:bg-gray-50 dark:hover:bg-gray-800 text-[var(--color-text-secondary)]'
                }`}
            >
              <TrendingUp size={11} className={accentClass} />
              {open ? 'Tutup' : 'Analisis'}
            </button>
          </div>

          <div className="h-[300px] w-full">
            <Chart
              options={chartOptions}
              series={series}
              type="line"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>

      <AnalyticsPanel
        changes={changes}
        accentColor={accentClass}
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

// ─── sub-component: growth insights card ─────────────────────────────────────
const GrowthInsightsCard = () => {
  const igPeaks = getPeakGrowth(igRaw);
  const ttPeaks = getPeakGrowth(ttRaw);
  const webPeaks = getPeakGrowth(webRaw);

  const formatWeek = (weekStr) => {
    return weekStr.replace('→', ' ke ');
  };

  return (
    <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6 pb-4 border-b border-[var(--color-border-custom)]">
        <div className="p-2 rounded-xl bg-amber-50 dark:bg-amber-950/20 text-amber-500">
          <Sparkles size={20} />
        </div>
        <div>
          <h3 className="text-base font-bold font-display text-[var(--color-text-primary)]">
            Highlight Pertumbuhan Tertinggi
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Analisis metrik dengan persentase kenaikan mingguan paling signifikan pada masing-masing platform.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Instagram */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--color-border-custom)]/50">
            <InstagramIcon />
            <span className="font-bold text-sm text-[var(--color-text-primary)]">Instagram</span>
          </div>
          <div className="space-y-3">
            {Object.entries(igPeaks).map(([metric, data]) => (
              <div key={metric} className="p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/20 border border-[var(--color-border-custom)]/40 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-[var(--color-text-secondary)]">{metric}</span>
                  <span className="font-bold text-green-600 dark:text-green-400 flex items-center gap-0.5">
                    ▲ {data.pct}%
                  </span>
                </div>
                <div className="text-[var(--color-text-secondary)] flex justify-between">
                  <span>Puncak: {formatWeek(data.week)}</span>
                  <span className="font-medium">({data.abs > 0 ? `+${data.abs.toLocaleString('id-ID')}` : data.abs.toLocaleString('id-ID')})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TikTok */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--color-border-custom)]/50">
            <TikTokIcon />
            <span className="font-bold text-sm text-[var(--color-text-primary)]">TikTok</span>
          </div>
          <div className="space-y-3">
            {Object.entries(ttPeaks).map(([metric, data]) => (
              <div key={metric} className="p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/20 border border-[var(--color-border-custom)]/40 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-[var(--color-text-secondary)]">{metric}</span>
                  <span className="font-bold text-green-600 dark:text-green-400 flex items-center gap-0.5">
                    ▲ {data.pct}%
                  </span>
                </div>
                <div className="text-[var(--color-text-secondary)] flex justify-between">
                  <span>Puncak: {formatWeek(data.week)}</span>
                  <span className="font-medium">({data.abs > 0 ? `+${data.abs.toLocaleString('id-ID')}` : data.abs.toLocaleString('id-ID')})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Website */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[var(--color-border-custom)]/50">
            <Globe size={20} className="text-blue-500" />
            <span className="font-bold text-sm text-[var(--color-text-primary)]">Website</span>
          </div>
          <div className="space-y-3">
            {Object.entries(webPeaks).map(([metric, data]) => (
              <div key={metric} className="p-3 rounded-xl bg-gray-50/50 dark:bg-gray-800/20 border border-[var(--color-border-custom)]/40 text-xs">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-semibold text-[var(--color-text-secondary)]">{metric}</span>
                  <span className="font-bold text-green-600 dark:text-green-400 flex items-center gap-0.5">
                    ▲ {data.pct}%
                  </span>
                </div>
                <div className="text-[var(--color-text-secondary)] flex justify-between">
                  <span>Puncak: {formatWeek(data.week)}</span>
                  <span className="font-medium">({data.abs > 0 ? `+${data.abs.toLocaleString('id-ID')}` : data.abs.toLocaleString('id-ID')})</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ─── main component ───────────────────────────────────────────────────────────
export const Dashboard = () => {
  const { theme } = useTheme();

  const instagramSeries = [
    { name: 'Followers', data: igRaw.Followers },
    { name: 'Likes',     data: igRaw.Likes },
    { name: 'Postingan', data: igRaw.Postingan },
    { name: 'Views',     data: igRaw.Views },
  ];

  const tiktokSeries = [
    { name: 'Followers', data: ttRaw.Followers },
    { name: 'Likes',     data: ttRaw.Likes },
    { name: 'Postingan', data: ttRaw.Postingan },
    { name: 'Views',     data: ttRaw.Views },
  ];

  const webSeries = [
    { name: 'Views',    data: webRaw.Views },
    { name: 'Visitors', data: webRaw.Visitors },
  ];

  const getChartOptions = (colors) => ({
    chart: {
      type: 'line',
      toolbar: { show: false },
      zoom: { enabled: false },
      foreColor: theme === 'dark' ? '#94a3b8' : '#64748b',
      background: 'transparent',
    },
    colors,
    stroke: { curve: 'smooth', width: 3 },
    grid: {
      borderColor: theme === 'dark' ? '#334155' : '#e2e8f0',
      strokeDashArray: 4,
      xaxis: { lines: { show: false } },
      yaxis: { lines: { show: true } },
    },
    xaxis: {
      categories: ['Minggu 12', 'Minggu 13', 'Minggu 14', 'Minggu 15'],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: { formatter: (val) => val.toLocaleString('id-ID') },
    },
    tooltip: {
      theme: theme === 'dark' ? 'dark' : 'light',
      y: { formatter: (val) => val.toLocaleString('id-ID') },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 600,
      labels: { colors: theme === 'dark' ? '#f8fafc' : '#0f172a' },
    },
  });

  const totalIG   = 5341;
  const totalTT   = 15200;
  const totalWeb  = 251;
  const totalViews = totalIG + totalTT + totalWeb;

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-300 pb-12">

      {/* Header */}
      <header className="border-b border-[var(--color-border-custom)] bg-white/70 dark:bg-[#0c0b08]/70 backdrop-blur-md sticky top-0 z-45 font-body">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="p-2 rounded-full border border-[var(--color-border-custom)] hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-center text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
              aria-label="Back to Home"
            >
              <ArrowLeft size={18} />
            </Link>
            <div>
              <span className="text-xs font-semibold text-[var(--color-accent-primary)] uppercase tracking-wider block">HaloMoment</span>
              <h1 className="font-display font-bold text-lg sm:text-xl md:text-2xl">
                Dashboard Analitik
              </h1>
            </div>
          </div>
          <Link to="/"><Button size="sm" variant="ghost">Kembali ke Home</Button></Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 space-y-6 font-body">

        {/* Total Views Card */}
        <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-[var(--color-text-secondary)] flex items-center gap-1.5">
              <Eye size={16} className="text-[var(--color-accent-primary)]" />
              Total Views (Minggu 12 – Minggu 15)
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold tracking-tight">
              {totalViews.toLocaleString('id-ID')}
            </h2>
            <p className="text-xs text-[var(--color-text-secondary)]">
              Akumulasi data analytics dari Minggu 12 sampai Minggu 15.
            </p>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ChartCard
            title="Instagram"
            subtitle="Followers, Likes, Postingan, & Views"
            icon={<InstagramIcon />}
            series={instagramSeries}
            chartOptions={getChartOptions(['#ec4899', '#f43f5e', '#a855f7', '#d946ef'])}
            changes={igChanges}
            accentClass="text-pink-500"
          />
          <ChartCard
            title="TikTok"
            subtitle="Followers, Likes, Postingan, & Views"
            icon={<TikTokIcon />}
            series={tiktokSeries}
            chartOptions={getChartOptions(['#06b6d4', '#10b981', '#f59e0b', '#6366f1'])}
            changes={ttChanges}
            accentClass="text-cyan-500"
          />
          <ChartCard
            title="Website"
            subtitle="Views & Visitors"
            icon={<Globe size={20} className="text-blue-500" />}
            series={webSeries}
            chartOptions={getChartOptions(['#3b82f6', '#0ea5e9'])}
            changes={webChanges}
            accentClass="text-blue-500"
          />
        </div>

        {/* Platform Breakdown */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <PlatformCard
            label="Instagram (ig)"
            accentClass="text-pink-500"
            views={totalIG}
            icon={<InstagramIcon />}
            bgAccent="bg-pink-50 dark:bg-pink-950/20"
          />
          <PlatformCard
            label="TikTok (tt)"
            accentClass="text-cyan-500"
            views={totalTT}
            icon={<TikTokIcon />}
            bgAccent="bg-cyan-50 dark:bg-cyan-950/20"
          />
          <PlatformCard
            label="Web (web)"
            accentClass="text-blue-500"
            views={totalWeb}
            icon={<Globe size={20} className="text-blue-500" />}
            bgAccent="bg-blue-50 dark:bg-blue-950/20"
          />
        </div>

        {/* Growth Insights Card */}
        <GrowthInsightsCard />

      </main>
    </div>
  );
};
