import { Link } from 'react-router-dom';
import { ArrowLeft, Eye, Globe } from 'lucide-react';
import Chart from 'react-apexcharts';
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

export const Dashboard = () => {
  const { theme } = useTheme();

  const instagramSeries = [
    {
      name: 'Followers',
      data: [73, 81, 88, 103]
    },
    {
      name: 'Likes',
      data: [173, 202, 217, 302]
    },
    {
      name: 'Postingan',
      data: [4, 5, 6, 8]
    },
    {
      name: 'Views',
      data: [2979, 3033, 3550, 5341]
    }
  ];

  const tiktokSeries = [
    {
      name: 'Followers',
      data: [31, 33, 41, 42]
    },
    {
      name: 'Likes',
      data: [87, 107, 126, 128]
    },
    {
      name: 'Postingan',
      data: [6, 7, 8, 9]
    },
    {
      name: 'Views',
      data: [6817, 8678, 10600, 15200]
    }
  ];

  const webSeries = [
    {
      name: 'Views',
      data: [150, 180, 215, 251]
    },
    {
      name: 'Visitors',
      data: [8, 12, 18, 29]
    }
  ];

  const getChartOptions = (colors) => ({
    chart: {
      type: 'line',
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      },
      foreColor: theme === 'dark' ? '#94a3b8' : '#64748b',
      background: 'transparent'
    },
    colors: colors,
    stroke: {
      curve: 'smooth',
      width: 3
    },
    grid: {
      borderColor: theme === 'dark' ? '#334155' : '#e2e8f0',
      strokeDashArray: 4,
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      }
    },
    xaxis: {
      categories: ['Minggu 12', 'Minggu 13', 'Minggu 14', 'Minggu 15'],
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        formatter: (val) => val.toLocaleString('id-ID')
      }
    },
    tooltip: {
      theme: theme === 'dark' ? 'dark' : 'light',
      y: {
        formatter: (val) => val.toLocaleString('id-ID')
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      fontFamily: 'Plus Jakarta Sans',
      fontWeight: 600,
      labels: {
        colors: theme === 'dark' ? '#f8fafc' : '#0f172a'
      }
    }
  });

  const totalIG = 5341;
  const totalTT = 15200;
  const totalWeb = 251;
  const totalViews = totalIG + totalTT + totalWeb;

  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] transition-colors duration-300 pb-12">
      {/* Header Panel */}
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

          <Link to="/">
            <Button size="sm" variant="ghost">Kembali ke Home</Button>
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 sm:mt-10 space-y-6 font-body">

        {/* Total Views Card */}
        <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 shadow-sm relative overflow-hidden">
          <div className="space-y-1">
            <span className="text-sm font-semibold text-[var(--color-text-secondary)] flex items-center gap-1.5">
              <Eye size={16} className="text-[var(--color-accent-primary)]" />
              Total Views (Minggu 12 - Minggu 15)
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
          {/* Instagram Chart Card */}
          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-4 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[var(--color-border-custom)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-[var(--color-text-primary)] flex items-center gap-2">
                    <InstagramIcon /> Instagram
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    Followers, Likes, Postingan, & Views
                  </p>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <Chart
                  options={getChartOptions(['#ec4899', '#f43f5e', '#a855f7', '#d946ef'])}
                  series={instagramSeries}
                  type="line"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>

          {/* TikTok Chart Card */}
          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-4 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[var(--color-border-custom)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-[var(--color-text-primary)] flex items-center gap-2">
                    <TikTokIcon /> TikTok
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    Followers, Likes, Postingan, & Views
                  </p>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <Chart
                  options={getChartOptions(['#06b6d4', '#10b981', '#f59e0b', '#6366f1'])}
                  series={tiktokSeries}
                  type="line"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>

          {/* Website Chart Card */}
          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-4 sm:p-6 shadow-sm flex flex-col justify-between">
            <div>
              <div className="pb-4 mb-4 border-b border-[var(--color-border-custom)] flex items-center justify-between">
                <div>
                  <h3 className="text-base font-bold font-display text-[var(--color-text-primary)] flex items-center gap-2">
                    <Globe size={20} className="text-blue-500" /> Website
                  </h3>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    Views & Visitors
                  </p>
                </div>
              </div>

              <div className="h-[300px] w-full">
                <Chart
                  options={getChartOptions(['#3b82f6', '#0ea5e9'])}
                  series={webSeries}
                  type="line"
                  height="100%"
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Platform Breakdown Details */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-5 space-y-2 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-pink-500 block">Instagram (ig)</span>
              <h4 className="text-2xl font-bold font-display">{totalIG.toLocaleString('id-ID')} views</h4>
            </div>
            <div className="p-2.5 rounded-xl bg-pink-50 dark:bg-pink-950/20">
              <InstagramIcon />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-5 space-y-2 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-cyan-500 block">TikTok (tt)</span>
              <h4 className="text-2xl font-bold font-display">{totalTT.toLocaleString('id-ID')} views</h4>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-50 dark:bg-cyan-950/20">
              <TikTokIcon />
            </div>
          </div>

          <div className="rounded-2xl border border-[var(--color-border-custom)] bg-[var(--color-bg-card)] p-5 space-y-2 shadow-sm flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-blue-500 block">Web (web)</span>
              <h4 className="text-2xl font-bold font-display">{totalWeb.toLocaleString('id-ID')} views</h4>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/20 text-blue-500">
              <Globe size={20} />
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};
