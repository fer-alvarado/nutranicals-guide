export default function Layout({ children }) {
  return (
    <div style={{
      maxWidth: '720px',
      margin: 'auto',
      padding: '2rem 1rem',
      fontFamily: 'Georgia, serif',
      lineHeight: 1.7,
      fontSize: '18px',
      color: '#1A1A1A'
    }}>
      <img src="/cover.jpg" alt="Portada" style={{ width: '100%', marginBottom: '2rem' }} />
      {children}
    </div>
  )
}