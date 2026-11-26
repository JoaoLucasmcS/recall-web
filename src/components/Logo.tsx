// Mesmo desenho do favicon (public/favicon.svg): anel de "recall" com seta e um brilho no centro
function Logo({className = "size-8"}: { className?: string }) {
    return (
        <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
            <defs>
                <linearGradient id="logo-fundo" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#8b5cf6"/>
                    <stop offset="1" stopColor="#d946ef"/>
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill="url(#logo-fundo)"/>
            <path d="M32 14 A18 18 0 1 0 46.7 21.7" fill="none" stroke="#fff" strokeWidth="4.5" strokeLinecap="round"/>
            <path d="M43.0 16.4 L52.1 19.2 L42.6 25.8 Z" fill="#fff" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
            <path d="M32 22.5 L34.4 29.6 L41.5 32 L34.4 34.4 L32 41.5 L29.6 34.4 L22.5 32 L29.6 29.6 Z" fill="#fff"/>
        </svg>
    )
}

export default Logo
