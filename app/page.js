export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>🎄 Festive Store Test Page 🎄</h1>
      <p style={{ color: '#666', marginBottom: '30px' }}>If you can see this, the deployment is working!</p>
      
      <div style={{ background: '#f0f0f0', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
        <h2>✅ Deployment Status: WORKING</h2>
        <p>Your Vercel deployment is successful!</p>
      </div>
      
      <div style={{ marginTop: '30px' }}>
        <a 
          href="/admin" 
          style={{ 
            background: '#0070f3', 
            color: 'white', 
            padding: '10px 20px', 
            textDecoration: 'none', 
            borderRadius: '5px',
            margin: '0 10px'
          }}
        >
          Go to Admin Panel
        </a>
      </div>
      
      <div style={{ marginTop: '40px', fontSize: '14px', color: '#999' }}>
        <p>Built with Next.js 14 | Deployed on Vercel</p>
        <p>Time: {new Date().toLocaleString()}</p>
      </div>
    </div>
  )
}
