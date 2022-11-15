import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search = ({fetchData}) => {

  const [search, setSearch] = useState('')

  return (
    <div className='w-75 gap-3 d-flex justify-content-center align-items-center'>
        <input value={search} onChange={(e) => setSearch(e.target.value)} className='form-control w-100' placeholder='Enter City Name..' />
        <BsSearch onClick={() => fetchData(search)} class='fs-4 fw-bold' />
    </div>
  )
}

export default Search