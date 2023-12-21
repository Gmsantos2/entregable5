const Header = () => {
  return (
    <header className="relative h-full">
                <div className="h-16 bg-red-600 relative">
                    <div className="absolute w-[230px] sm:w-[300px] max-sm:w-[240px] -bottom-2 left-10">
                        <img src="/imgs/pokedex.png" alt="" />
                    </div>
                </div>
                <div className="h-10 bg-black mb-4"></div>
                <div className="absolute right-2 -translate-x-1/2 translate-y-[5%] -bottom-2 h-[70px] ">
                    <img className="h-full" src="/imgs/pokeball.svg" alt="" />
                </div>
            </header>
  )
}
export default Header