export function NightSky() {
  return (
    <div className="night-sky" aria-hidden="true">
      <div className="stars stars-one" />
      <div className="stars stars-two" />
      <img className="sky-moon" src="/assets/background/moon-placeholder.svg" alt="" />
      <img className="sky-cloud sky-cloud-one" src="/assets/background/cloud-1-placeholder.svg" alt="" />
      <img className="sky-cloud sky-cloud-two" src="/assets/background/cloud-2-placeholder.svg" alt="" />
    </div>
  )
}
