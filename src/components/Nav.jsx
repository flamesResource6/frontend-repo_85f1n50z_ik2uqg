import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/learn', label: 'Learn' },
  { to: '/learner', label: 'Learner' },
  { to: '/mentor', label: 'Mentor' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-slate-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-white font-semibold text-lg tracking-tight">Health Platform</Link>
        <nav className="flex items-center gap-1">
          {navItems.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'bg-blue-600 text-white' : 'text-blue-100 hover:text-white hover:bg-blue-600/30'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <a href="/test" className="ml-2 px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:text-white hover:bg-indigo-600/30">Test</a>
        </nav>
      </div>
    </header>
  )
}
