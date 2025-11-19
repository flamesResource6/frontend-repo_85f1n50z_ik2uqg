import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './Home'
import Placeholder from './Placeholder'
import { sitemap } from '../data/sitemap'

function allRoutes() {
  const routes = [
    { path: '/', title: 'Home', data: sitemap[0].groups[0] }
  ]

  sitemap.forEach(section => {
    section.groups.forEach(g => {
      if (g.url) routes.push({ path: g.url, title: g.title, data: g })
      if (g.urls) g.urls.forEach(u => routes.push({ path: u, title: `${g.title}`, data: g }))
      if (g.baseUrl) routes.push({ path: g.baseUrl, title: g.title, data: g })
    })
  })

  return routes
}

export default function AppRouter() {
  const location = useLocation()
  const routes = allRoutes()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Home />} />
      {routes.filter(r => r.path !== '/').map(r => (
        <Route key={r.path} path={r.path} element={<Placeholder title={r.title} details={r.data} />} />
      ))}
      <Route path="*" element={<Placeholder title="Not Found" details={{ purpose: 'The page does not exist.' }} />} />
    </Routes>
  )
}
