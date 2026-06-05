export default function SkeletonCard() {
  return (
    <div style={{
      background: '#fff',
      borderRadius: '10px',
      overflow: 'hidden',
      border: '1px solid #e8e8e8',
    }}>
      <div style={{ width: '100%', height: '180px', background: '#f0f0f0', animation: 'pulse 1.5s infinite' }} />
      <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ height: '16px', width: '60px', background: '#f0f0f0', borderRadius: '4px', animation: 'pulse 1.5s infinite' }} />
        <div style={{ height: '18px', width: '90%', background: '#f0f0f0', borderRadius: '4px', animation: 'pulse 1.5s infinite' }} />
        <div style={{ height: '14px', width: '100%', background: '#f0f0f0', borderRadius: '4px', animation: 'pulse 1.5s infinite' }} />
        <div style={{ height: '14px', width: '75%', background: '#f0f0f0', borderRadius: '4px', animation: 'pulse 1.5s infinite' }} />
      </div>
      <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
    </div>
  )
}