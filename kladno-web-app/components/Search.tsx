import { useState } from 'react'

export default function SearchBar(props) {
  const { setFilters, filters, value } = props

  // states for whether the filters have been clicked
  const [caseFiles, setCaseFiles] = useState(false)
  const [laws, setLaws] = useState(false)
  const [announcements, setAnnouncements] = useState(false)
  const [buckets, setBuckets] = useState(false)

  // state for the search bar
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])

  const changed = (e) => {
    console.log(e.target.value)
  }

  const filterClicked = (filter: string) => {
    // add or remove from `filters` list
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter))
    } else {
      setFilters([...filters, filter])
    }

    if (filter === 'caseFiles') {
      setCaseFiles(!caseFiles)
    } else if (filter === 'laws') {
      setLaws(!laws)
    } else if (filter === 'announcements') {
      setAnnouncements(!announcements)
    } else if (filter === 'buckets') {
      setBuckets(!buckets)
    }
  }

  return (
    <div className="fixed inset-x-0 top-0 flex w-screen justify-center ">
      <div>
        <div className="w-[800px]">
          <input
            type="text"
            placeholder="Search"
            onChange={changed}
            value={value}
            className="h-16 w-full border-2 border-t-0 border-semi-dark  bg-dark px-4 text-md text-semi-dark placeholder-semi-dark caret-semi-dark focus:border-white focus:text-white focus:outline-none "
          />
        </div>
        <div className="mt-3 flex w-full justify-center space-x-2">
          <div
            onClick={() => filterClicked('caseFiles')}
            className={`rounded-full border-2 border-semi-dark  ${
              caseFiles ? 'bg-semi-dark text-dark' : 'bg-dark text-semi-dark'
            }  px-4 py-2 text-2xl  hover:cursor-pointer `}
          >
            Case Files
          </div>
          <div
            onClick={() => filterClicked('laws')}
            className={`rounded-full border-2 border-semi-dark  ${
              laws ? 'bg-semi-dark text-dark' : 'bg-dark text-semi-dark'
            }  px-4 py-2 text-2xl  hover:cursor-pointer `}
          >
            Laws
          </div>
          <div
            onClick={() => filterClicked('announcements')}
            className={`rounded-full border-2 border-semi-dark ${
              announcements
                ? 'bg-semi-dark text-dark'
                : 'bg-dark text-semi-dark'
            }  px-4 py-2 text-2xl  hover:cursor-pointer `}
          >
            Announcements
          </div>
          <div
            onClick={() => filterClicked('buckets')}
            className={`rounded-full border-2 border-semi-dark ${
              buckets ? 'bg-semi-dark text-dark' : 'bg-dark text-semi-dark'
            }  px-4 py-2 text-2xl  hover:cursor-pointer `}
          >
            Buckets
          </div>
        </div>
      </div>
    </div>
  )
}
