import PageFrame from '../components/PageFrame'
import SiteMapBoard from '../components/SiteMapBoard'

export default function Home() {
  return (
    <PageFrame title="Platform Overview" subtitle="Interactive sitemap built like a Figma board">
      <div className="mb-6 text-white/80">
        Explore the structure. Click into any section to preview placeholder pages. This is a navigable blueprint you can iterate on.
      </div>
      <SiteMapBoard />
    </PageFrame>
  )
}
