import Link from "next/link";

import { villas } from "@/content/villas";

export default function Home() {
  return (
    <main className='mx-auto flex min-h-dvh max-w-lg flex-col justify-center px-6'>
      <h1 className='font-display text-4xl italic'>Xenios</h1>
      <p className='mt-2 text-muted'>
        Digital guest guides for villas · by PixelZakynthos
      </p>
      <div className='mt-8 space-y-3'>
        {Object.values(villas).map((v) => (
          <Link
            key={v.slug}
            href={`/${v.slug}`}
            className='block rounded-2xl border border-line bg-card p-4 transition active:scale-[.99]'>
            <span className='text-[17px] font-medium'>{v.name}</span>
            <span className='mt-0.5 block text-sm text-muted'>
              {v.location.area.en}
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
