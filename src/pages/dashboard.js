import React, { useState } from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

const IconRocket = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5-1.5-2-5-2-5s3.5-.5 5-2m15-9l-1.7 10.2c-.1.6-.6 1-1.2 1H5c-.6 0-1-.4-1-1V5c0-.6.4-1 1-1h14.8c.6 0 1.1.4 1.2 1L19.5 1"></path>
  </svg>
);

const IconCheckCircle = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

const IconCode = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const IconBook = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const IconSettings = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M12 1v6m0 6v6M4.22 4.22l4.24 4.24m2.12 2.12l4.24 4.24M1 12h6m6 0h6m-16.78 7.78l4.24-4.24m2.12-2.12l4.24-4.24"></path>
  </svg>
);

const IconDatabase = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
    <path d="M3 5v14a9 3 0 0 0 9 3 9 3 0 0 0 9-3V5"></path>
    <path d="M3 12a9 3 0 0 0 9 3 9 3 0 0 0 9-3"></path>
  </svg>
);

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {
      id: 'overview',
      label: 'Overview',
      subsections: [
        { name: 'SandboxCode', href: '/docs/intro' },
        { name: 'Features', href: '/docs/features' },
        { name: 'Quick Start', href: '/docs/quick-start' }
      ]
    },
    {
      id: 'guides',
      label: 'Guides',
      subsections: [
        { name: 'Setup Guide', href: '/docs/setup' },
        { name: 'Configuration', href: '/docs/config' },
        { name: 'Deployment', href: '/docs/deploy' }
      ]
    },
    {
      id: 'api',
      label: 'API Reference',
      subsections: [
        { name: 'REST API', href: '/docs/api/rest' },
        { name: 'CLI Commands', href: '/docs/api/cli' },
        { name: 'SDK Reference', href: '/docs/api/sdk' }
      ]
    }
  ];

  const features = [
    {
      icon: IconRocket,
      title: 'Bắt đầu',
      description: 'Cài đặt SandboxCode và thiết lập Gateway chi trong vài phút.'
    },
    {
      icon: IconCheckCircle,
      title: 'Chạy quy trình giới thiệu',
      description: 'Quy trình thiết lập và ghép nối được hướng dẫn opencclaw onboard từng bước.'
    },
    {
      icon: IconCode,
      title: 'Kết nối một kênh',
      description: 'Liên kết Discord, Signal, Telegram, WhatsApp và nhiều ứng dụng khác để trò chuyện mọi lúc.'
    },
    {
      icon: IconDatabase,
      title: 'Mở giao diện người dùng điều khiển',
      description: 'Mở bảng điều khiển trực tuyến để truy cập trò chuyện, cấu hình và phần làm việc.'
    }
  ];

  return (
    <Layout title="Dashboard - SandboxCode" description="Documentation Dashboard">
      <main style={{ background: '#000000', minHeight: '100vh' }}>
        {/* Header */}
        <header style={{
          background: '#000000',
          borderBottom: '1px solid #1e293b',
          padding: '1rem 2rem',
          position: 'sticky',
          top: 0,
          zIndex: 100
        }}>
          <div style={{
            maxWidth: '1400px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <h1 style={{
              margin: 0,
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#ffffff',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}>
              <span style={{ color: '#f97316' }}>SandboxCode</span> Dashboard
            </h1>
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              <input 
                type="text" 
                placeholder="Search documentation..."
                style={{
                  background: '#1e293b',
                  border: '1px solid #334155',
                  color: '#e2e8f0',
                  padding: '0.5rem 1rem',
                  borderRadius: '6px',
                  fontSize: '0.875rem',
                  width: '250px'
                }}
              />
              <button style={{
                background: 'transparent',
                border: '1px solid #334155',
                color: '#e2e8f0',
                padding: '0.5rem 1rem',
                borderRadius: '6px',
                cursor: 'pointer'
              }}>
                ⚙️
              </button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '250px 1fr',
          gap: 0,
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {/* Sidebar Navigation */}
          <aside style={{
            background: '#0a0a0a',
            borderRight: '1px solid #1e293b',
            padding: '2rem 1.5rem',
            height: 'calc(100vh - 60px)',
            overflowY: 'auto'
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {sections.map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                    style={{
                      background: 'transparent',
                      border: 'none',
                      color: activeSection === section.id ? '#f97316' : '#94a3b8',
                      padding: '0.75rem 0',
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%'
                    }}
                  >
                    {section.label}
                    <span style={{ fontSize: '0.75rem' }}>
                      {activeSection === section.id ? '▼' : '▶'}
                    </span>
                  </button>

                  {activeSection === section.id && (
                    <div style={{
                      marginTop: '0.5rem',
                      paddingLeft: '1rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {section.subsections.map((sub, idx) => (
                        <Link 
                          key={idx}
                          to={sub.href}
                          style={{
                            color: '#cbd5e1',
                            textDecoration: 'none',
                            fontSize: '0.825rem',
                            padding: '0.5rem 0',
                            transition: 'color 0.2s',
                            borderLeft: '2px solid transparent',
                            paddingLeft: '0.75rem'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.color = '#f97316';
                            e.target.style.borderLeftColor = '#f97316';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.color = '#cbd5e1';
                            e.target.style.borderLeftColor = 'transparent';
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content Area */}
          <div style={{ padding: '2rem' }}>
            {/* Features Grid */}
            <section style={{ marginBottom: '4rem' }}>
              <div style={{
                color: '#f97316',
                fontSize: '0.75rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontWeight: 600,
                marginBottom: '1.5rem',
                fontFamily: 'monospace'
              }}>
                // Features
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '1.5rem'
              }}>
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={index}
                      style={{
                        background: '#0a0a0a',
                        border: '1px solid #1e293b',
                        borderRadius: '8px',
                        padding: '2rem',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#f97316';
                        e.currentTarget.style.background = 'rgba(249, 115, 22, 0.05)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#1e293b';
                        e.currentTarget.style.background = '#0a0a0a';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                    >
                      <div style={{
                        color: '#f97316',
                        marginBottom: '1rem'
                      }}>
                        <Icon />
                      </div>
                      <h3 style={{
                        fontSize: '1.125rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        marginBottom: '0.75rem',
                        margin: '0 0 0.75rem 0'
                      }}>
                        {feature.title}
                      </h3>
                      <p style={{
                        fontSize: '0.95rem',
                        color: '#94a3b8',
                        lineHeight: 1.6,
                        margin: 0
                      }}>
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Quick Actions */}
            <section style={{
              background: '#0a0a0a',
              border: '1px solid #1e293b',
              borderRadius: '8px',
              padding: '2rem',
              marginBottom: '3rem'
            }}>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
                marginTop: 0,
                marginBottom: '1.5rem'
              }}>
                Quick Actions
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem'
              }}>
                {[
                  { title: 'Setup Guide', icon: '🚀', href: '/docs/setup' },
                  { title: 'API Docs', icon: '📚', href: '/docs/api' },
                  { title: 'Configuration', icon: '⚙️', href: '/docs/config' },
                  { title: 'Troubleshooting', icon: '🔧', href: '/docs/troubleshooting' }
                ].map((action, idx) => (
                  <Link
                    key={idx}
                    to={action.href}
                    style={{
                      display: 'block',
                      padding: '1rem',
                      background: '#111111',
                      border: '1px solid #1e293b',
                      borderRadius: '6px',
                      color: '#e2e8f0',
                      textDecoration: 'none',
                      textAlign: 'center',
                      transition: 'all 0.2s',
                      fontSize: '0.875rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#f97316';
                      e.currentTarget.style.background = 'rgba(249, 115, 22, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#1e293b';
                      e.currentTarget.style.background = '#111111';
                    }}
                  >
                    <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                      {action.icon}
                    </div>
                    {action.title}
                  </Link>
                ))}
              </div>
            </section>

            {/* Recent Updates */}
            <section>
              <h2 style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: '#ffffff',
                marginTop: 0,
                marginBottom: '1.5rem'
              }}>
                Recent Updates
              </h2>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {[
                  { title: 'Documentation Updated', date: '2 hours ago', category: 'Docs' },
                  { title: 'New Feature: Advanced Routing', date: '1 day ago', category: 'Feature' },
                  { title: 'API v2 Released', date: '3 days ago', category: 'Release' }
                ].map((update, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '1rem',
                      background: '#0a0a0a',
                      border: '1px solid #1e293b',
                      borderRadius: '6px'
                    }}
                  >
                    <div>
                      <p style={{
                        margin: 0,
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: '#e2e8f0'
                      }}>
                        {update.title}
                      </p>
                      <p style={{
                        margin: '0.25rem 0 0 0',
                        fontSize: '0.8rem',
                        color: '#64748b'
                      }}>
                        {update.date}
                      </p>
                    </div>
                    <span style={{
                      background: '#1e293b',
                      color: '#f97316',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 600
                    }}>
                      {update.category}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
}
