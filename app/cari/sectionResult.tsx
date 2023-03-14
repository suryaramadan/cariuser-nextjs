import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'

const fetcher = (url:string) => fetch(url).then(res => res.json())
interface Props{
  query:string
}

export default function SectionResult({query}:Props) {
  const {data, error} = useSWR(`https://api.github.com/search/users?q=${query}`, fetcher)
  var loading = !data && !error

  return (
    <div className='max-w-5xl mx-auto'>
      <p>Hasil Pencarian : {query}</p>
      <div className='flex flex-col'>
        {loading && "Tunggu Sebentar lagi cari user Github..."}
        {data && data.items.map((user:any, index:number) => {
          return (
            <ul key={index}>
              <li><Link href={`/cari/${user.login}`}>{user.login}</Link></li>
            </ul>
          )
        })}
      </div>
    </div>
  )
}
