import OriginalDocSidebarItem from '@theme-original/DocSidebarItem'
import React from 'react'

export default function DocSidebarItem(props: { item }) {
  return (
    <>
      <div
        onClick={(event) => {
          event.stopPropagation()
        }}
      >
        <OriginalDocSidebarItem {...props} />
      </div>
    </>
  )
}
