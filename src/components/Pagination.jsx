const Pagination = ({lastPage, pagesInCurrentBlock, setCurrentPage, currentPage}) => {
  console.log(pagesInCurrentBlock);
  const handleLastPage = () => setCurrentPage(lastPage);  
  const handleFisrtPage = () => setCurrentPage(1);
  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if(nextPage <= lastPage){
        setCurrentPage(nextPage);
    }
  }
  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    if(previousPage > 0){
        setCurrentPage(previousPage);
    }
  }
  
  return (
    <ul className="pb-4 pl-2 pr-2 text-lg flex gap-2 justify-center font-bold flex-wrap">
        <li><button onClick={handleFisrtPage} className="p-2 bg-red-600 rounded-md hover:bg-red-200 hover:text-black text-white transition-colors">{"<<"}</button></li>
        <li><button onClick={handlePreviousPage} className="p-2 bg-red-600 rounded-md hover:bg-red-200 hover:text-black text-white transition-colors">{"<"}</button></li>
        {
            pagesInCurrentBlock.map((page)=> (
                <li key={page}>
                    <button onClick={() => setCurrentPage(page)} 
                    className={`p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors ${page === currentPage ? "bg-red-600 text-white" : "bg-red-100"}`}
                    >
                        {page}</button>
                </li>
            ))
        }
        <li><button  onClick={handleNextPage} className="p-2 bg-red-600 rounded-md hover:bg-red-200 hover:text-black text-white transition-colors">{">"}</button></li>
        <li><button onClick={handleLastPage} className="p-2 bg-red-600 rounded-md hover:bg-red-200 hover:text-black text-white transition-colors">{">>"}</button></li>
    </ul>
  )
}
export default Pagination