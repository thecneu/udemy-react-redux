import React from 'react'

const SearchBar = ({search}) => (
  <section className="search-bar">
    <input className="form-control" onChange={e => search(e.target.value)} />
  </section>
)

export default SearchBar