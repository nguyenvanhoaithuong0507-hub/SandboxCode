import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const IconCode = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconBug = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"></circle>
    <path d="M12 1v6m6-1l-4.22 4.22m-2.56 0L4 6M1 12h6m13 0h6m-1 6l-4.22-4.22m-2.56 0L4 18M12 17v6"></path>
  </svg>
);

const IconBox = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
  </svg>
);

const IconGit = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="1"></circle>
    <circle cx="19" cy="5" r="1"></circle>
    <circle cx="5" cy="19" r="1"></circle>
    <line x1="12" y1="13" x2="18" y2="6"></line>
    <line x1="12" y1="13" x2="6" y2="19"></line>
  </svg>
);

const IconGitPull = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="18" y1="8" x2="18" y2="16"></line>
    <line x1="18" y1="16" x2="6" y2="12"></line>
  </svg>
);

const IconShield = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);

export default function Dashboard() {
  return (
    <Layout title="Dashboard - SandboxCode" description="Dashboard">
      <main style={{ background: '#000000', color: '#ffffff' }}>
        {/* Header */}
        <header style={{
          background: '#000000',
          borderBottom: '1px solid #1e293b',
          padding: '1rem 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <button style={{
            background: 'transparent',
            border: '1px solid #404854',
            color: '#ffffff',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1.25rem',
            display: 'flex',
            alignItems: 'center'
          }}>
            ☰
          </button>

          <div style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            fontFamily: 'monospace'
          }}>
            <span style={{ color: '#ffffff' }}>SANDBOX</span>
            <span style={{ color: '#2563eb' }}>CODEX_</span>
          </div>

          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            fontSize: '0.85rem',
            color: '#10b981',
            fontFamily: 'monospace'
          }}>
            <span>USER: GUEST</span>
            <span>|</span>
            <span>MODE: READONLY</span>
            <div style={{
              width: '8px',
              height: '8px',
              background: '#10b981',
              borderRadius: '50%'
            }}></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{
          padding: '4rem 2rem',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Section Label */}
          <div style={{
            color: '#2563eb',
            fontSize: '0.875rem',
            letterSpacing: '0.2em',
            marginBottom: '3rem',
            fontFamily: 'monospace',
            textTransform: 'uppercase'
          }}>
            // SANDBOX DASHBOARD
          </div>

          {/* Features Grid - 6 columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem',
            marginBottom: '5rem'
          }}>
            {[
              { icon: IconCode, title: 'REVIEW CODE', description: 'Phân tích và đánh giá chất lượng code thông minh.' },
              { icon: IconBug, title: 'FIX ISSUES', description: 'Tự động sửa lỗi và cải thiện code.' },
              { icon: IconBox, title: 'SANDBOX RUNTIME', description: 'Thực thi an toàn trong môi trường sandbox.' },
              { icon: IconGit, title: 'COMMIT & PUSH', description: 'Tự động commit và push thay đổi lên repository.' },
              { icon: IconGitPull, title: 'PULL REQUEST', description: 'Tạo Pull Request với mô tả chi tiết.' },
              { icon: IconShield, title: 'SECURE & ISOLATED', description: 'Bảo mật, có lập và kiểm soát hoàn toàn.' }
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} style={{
                  border: '1px solid #1e293b',
                  padding: '1.5rem',
                  background: 'rgba(37, 99, 235, 0.02)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#2563eb';
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#1e293b';
                  e.currentTarget.style.background = 'rgba(37, 99, 235, 0.02)';
                }}>
                  <div style={{ color: '#2563eb', marginBottom: '1rem' }}>
                    <Icon />
                  </div>
                  <h3 style={{
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    marginBottom: '0.75rem',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    margin: '0 0 0.75rem 0'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#9ca3af',
                    lineHeight: 1.5,
                    margin: 0,
                    marginBottom: '1rem'
                  }}>
                    {feature.description}
                  </p>
                  <div style={{
                    color: '#2563eb',
                    fontSize: '0.8rem',
                    fontFamily: 'monospace'
                  }}>
                    {'> _'}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Trusted Technology */}
          <div style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '3rem',
            marginBottom: '5rem'
          }}>
            <div style={{
              color: '#2563eb',
              fontSize: '0.875rem',
              letterSpacing: '0.2em',
              marginBottom: '2rem',
              fontFamily: 'monospace',
              textTransform: 'uppercase'
            }}>
              // TRUSTED TECHNOLOGY
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '3rem',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '2rem 0',
              borderTop: '1px solid #1e293b',
              borderBottom: '1px solid #1e293b'
            }}>
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PNPM'].map((tech, index) => (
                <div key={index} style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#d1d5db',
                  transition: 'color 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.target.style.color = '#2563eb'}
                onMouseLeave={(e) => e.target.style.color = '#d1d5db'}>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* System Status */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            fontSize: '0.875rem',
            fontFamily: 'monospace'
          }}>
            {/* Left Column */}
            <div>
              <div style={{ color: '#2563eb', marginBottom: '1.5rem' }}>$ SANDBOXCODEX SYSTEM</div>
              {[
                { label: 'STATUS', value: 'ONLINE' },
                { label: 'ENV', value: 'PRODUCTION' },
                { label: 'REGION', value: 'GLOBAL' },
                { label: 'UPTIME', value: '24/7' }
              ].map((item, index) => (
                <div key={index} style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#2563eb' }}>{`> `}</span>
                  {item.label}: <span style={{ color: '#22c55e' }}>{item.value}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div>
              <div style={{ color: '#2563eb', marginBottom: '1.5rem' }}>BUILD INFO</div>
              {[
                { label: 'VERSION', value: '0.1.0' },
                { label: 'BUILD', value: '2025.05.15' },
                { label: 'ARCH', value: 'SCX-64' },
                { label: 'MODE', value: 'AI_AUTONOMOUS' }
              ].map((item, index) => (
                <div key={index} style={{ color: '#d1d5db', marginBottom: '0.5rem' }}>
                  <span style={{ color: '#2563eb' }}>{`> `}</span>
                  {item.label}: <span style={{ color: '#60a5fa' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div style={{
            marginTop: '4rem',
            paddingTop: '2rem',
            borderTop: '1px solid #1e293b',
            textAlign: 'center',
            color: '#6b7280',
            fontFamily: 'monospace',
            fontSize: '0.8rem'
          }}>
            © 2025 SANDBOXCODEX. ALL RIGHTS RESERVED.
          </div>
        </div>
      </main>
    </Layout>
  );
}
