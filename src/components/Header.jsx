const Header = () => {
  return (
    <header className="relative">
                <div className="h-14 bg-red-600 relative">
                    <div className="absolute w-[250px] sm:w-[300px] -bottom-2 left-2">
                        <img src="./imgs/pokedex.png" alt="" />
                    </div>
                </div>
                <div className="h-10 bg-black mb-4"></div>
                <div className="absolute right-0 -translate-x-[30%] -bottom-0  z-20 h-[65%] ">
                    <img className="h-full" src="./imgs/circle.png" alt="" />
                </div>
            </header>
  )
}
export default Header