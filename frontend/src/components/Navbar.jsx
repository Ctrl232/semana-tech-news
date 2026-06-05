import { Link } from 'react-router-dom'

const styles = {
  nav: {
    background: '#c8102e',
    padding: '0 2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '56px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  brand: {
    color: '#fff',
    fontWeight: '700',
    fontSize: '20px',
    letterSpacing: '-0.5px',
  },
  link: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: '14px',
    fontWeight: '500',
    padding: '4px 12px',
    borderRadius: '6px',
    transition: 'background 0.15s',
  }
}

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.brand}>SEMANA</Link>
      <Link to="/admin" style={styles.link}>Panel Admin</Link>
    </nav>
  )
}