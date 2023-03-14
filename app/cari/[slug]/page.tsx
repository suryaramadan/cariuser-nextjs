import React from 'react'

async function getData(params:string) {
  const res =  await fetch(`https://api.github.com/users/${params}`)
  return res.json();
}

export default async function DetailCari({params} : {params : {slug:string}}) {
  const data = await getData(params.slug)
  return (
    <div className='max-w-5xl mx-auto'>
      <h1>Detail Cari</h1>
      
      <div>Name : {data.login}</div>
      <div>Lokation : {data.location}</div>
      <div>Public Repository : {data.public_repos}</div>
      <div>Public Gist : {data.public_gists}</div>
      <div>Followers : {data.followers}</div>
      <div>Following : {data.following}</div>
      <div>Created at : {data.created_at}</div>

      <div className='mt-5'>
        <textarea className='w-full h-[150px]'>
          {JSON.stringify(data)}
        </textarea>
      </div>
      
    </div>
  )
}
