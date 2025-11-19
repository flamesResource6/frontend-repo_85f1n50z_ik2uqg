import { Link } from 'react-router-dom'
import { sitemap } from '../data/sitemap'

function Card({ title, subtitle, children }) {
  return (
    <div className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-base font-semibold text-white/90">{title}</h3>
        {subtitle && <span className="text-xs text-white/60">{subtitle}</span>}
      </div>
      <div className="text-sm text-blue-100/90 space-y-2">
        {children}
      </div>
    </div>
  )
}

export default function SiteMapBoard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sitemap.map(section => (
        <div key={section.id} className="rounded-2xl border border-white/10 bg-slate-800/40 p-4">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-bold text-white">{section.title}</h2>
          </div>

          <div className="space-y-3">
            {section.groups.map(g => (
              <Card key={g.id} title={g.title} subtitle={g.url || g.baseUrl || (g.urls && 'Multiple')}>
                <p className="text-xs text-white/70 mb-1">{g.purpose}</p>
                <ul className="list-disc list-inside space-y-1">
                  {g.keyContent?.map((k, idx) => (
                    <li key={idx} className="text-white/80">{k}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-2">
                  {g.url && <Link to={g.url} className="px-2 py-1 rounded bg-blue-600/80 text-white text-xs hover:bg-blue-600">Visit</Link>}
                  {g.baseUrl && <Link to={g.baseUrl} className="px-2 py-1 rounded bg-indigo-600/80 text-white text-xs hover:bg-indigo-600">Open Base</Link>}
                  {g.urls?.map(u => (
                    <Link key={u} to={u} className="px-2 py-1 rounded bg-teal-600/80 text-white text-xs hover:bg-teal-600">{u}</Link>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
