import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="SandboxCode" description="Kỹ sư phần mềm AI">
      <div style={{
        background: 'linear-gradient(135deg, #0a0e27 0%, #151b2f 100%)',
        padding: '4rem 2rem',
        textAlign: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div>
          <h1 style={{
            fontSize: '3rem',
            background: 'linear-gradient(90deg, #ff6b35 0%, #1ac8ed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '1rem'
          }}>🤖 SandboxCode</h1>
          <p style={{
            fontSize: '1.5rem',
            color: '#b0b9c0',
            marginBottom: '2rem'
          }}>Kỹ sư phần mềm AI - Tự động hóa phát triển</p>
          <Link to="/docs/intro" style={{
            background: 'linear-gradient(90deg, #ff6b35 0%, #ff4500 100%)',
            color: 'white',
            padding: '1rem 2rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>🚀 Bắt đầu ngay</Link>
        </div>
      </div>
    </Layout>
  );
}