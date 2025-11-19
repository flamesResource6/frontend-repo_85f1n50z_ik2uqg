import PageFrame from '../components/PageFrame'

export default function Placeholder({ title, details }) {
  return (
    <PageFrame title={title} subtitle={details?.purpose}>
      <div className="grid gap-4 md:grid-cols-2">
        <section className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-semibold mb-2">Key Content</h3>
          <ul className="list-disc list-inside space-y-1 text-white/80">
            {details?.keyContent?.map((k, i) => (
              <li key={i}>{k}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-xl border border-white/10 bg-white/5 p-4">
          <h3 className="font-semibold mb-2">Notes</h3>
          <p className="text-white/70 text-sm">This is a placeholder page. We will attach real data and UI later.</p>
        </section>
      </div>
    </PageFrame>
  )
}
