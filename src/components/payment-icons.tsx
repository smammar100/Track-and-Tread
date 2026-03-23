import Image from "next/image";

const payments = [
  { src: "/images/pay-visa.svg", alt: "Visa", w: 44 },
  { src: "/images/pay-mastercard.svg", alt: "Mastercard", w: 44 },
  { src: "/images/pay-amex.svg", alt: "American Express", w: 44 },
  { src: "/images/pay-discover.svg", alt: "Discover", w: 43 },
  { src: "/images/pay-applepay.svg", alt: "Apple Pay", w: 44 },
  { src: "/images/pay-paypal.svg", alt: "PayPal", w: 44 },
  { src: "/images/pay-shoppay.svg", alt: "Shop Pay", w: 43 },
];

export default function PaymentIcons() {
  return (
    <div className="flex gap-1 h-[30px] items-start">
      {payments.map((p) => (
        <div
          key={p.alt}
          className="relative shrink-0 h-[30px]"
          style={{ width: p.w }}
        >
          <Image src={p.src} alt={p.alt} fill className="object-contain" />
        </div>
      ))}
    </div>
  );
}
