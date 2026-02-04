import OriginalSearchBar from '@theme-original/SearchBar'
import React from 'react'

export default function SearchBarWithAnalytics(props) {
  return (
    <>
      <div>
        <OriginalSearchBar {...props} />
      </div>
    </>
  )
}
