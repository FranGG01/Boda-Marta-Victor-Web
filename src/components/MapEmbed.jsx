export default function MapEmbed({ address, title = "Mapa" }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
  return (
    <div className="my-10 flex justify-center">
      <div className="w-[92vw] max-w-[960px] rounded-2xl overflow-hidden border border-[#2b2b2b]/10 shadow-md">
        <iframe
          title={title}
          src={src}
          width="100%"
          height="360"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
