import { Visa, Mastercard, Yape, Plin } from '../../../../assets'

export default function Payments() {
  return (
    <section className="flex items-center justify-center gap-11 py-10">
      <img src={Visa} alt="Visa" />
      <img src={Mastercard} alt="Mastercard" />
      <img src={Yape} alt="Yape" />
      <img src={Plin} alt="Plin" />
    </section>
  )
}
