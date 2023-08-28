import React from "react"
import searchGray from "../../assets/search-icon.svg"

const Search = () => {
  let searchInput = React.useRef()

  function focusSearch() {
    searchInput.current.focus()
  }
  const [keyWord, setKeyword] = React.useState("Cuisines, restaurant")
  const [today, setDay] = React.useState("2020-01-01")
  const [maxDate, setmaxDay] = React.useState("2040-01-01")

  let SearchSugs = ["Dinary", "Restaurants", "Cuisines"]

  return (
    <>

      <div onClick={focusSearch} tabIndex={0} className="searchWord relative w-full border outline-none rounded-md p-2 mb-2 md:mb-0 md:border-0 md:rounded-none md:p-0 px-6 text-xs flex flex-col items-start">
        <p className="text-xxs text-gray-500">Search</p>
        <p spellCheck={false} className="Keyword text-left md:w-[150px] overflow-clip text-ellipsis font-medium leading-relaxed outline-none empty:before:content-['Find_by_key_word']  before:content-none
">{keyWord}</p>

        <div className="heroSearchSug absolute duration-150 opacity-0 max-h-0 bg-white top-14 left-0 md:-left-4 rounded-md p-5 z-10 border shadow-lg md:w-max w-full">

          <div className="searchBar flex items-center gap-2 border p-2 py-3 w-full rounded-full bg-white duration-100 z-10 focus-within:border-gray-400">
            <img draggable={false} src={searchGray} alt="reisty" className="w-4 shrink-0 ml-2" />
            <input ref={searchInput} onChange={e => { setKeyword(e.target.value) }} type="text" placeholder="Search restaurants, cuisines" className="text-xs w-full outline-none h-full" />
          </div>
          <div className="SearchSugs py-5 w-full max-h-30 flex flex-wrap max-w-[340px] gap-2">
            {SearchSugs.map(word => (
              <div key={word} className="searchWord border cursor-pointer w-max whitespace-nowrap text-center text-xxs p-2 px-4 hover:bg-gray-50 bg-white rounded-md shrink-0 grow-0">{word}</div>
            ))}
          </div>

        </div>
      </div>
    </>
  )
}

export default Search;