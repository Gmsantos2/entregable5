import { useDispatch } from "react-redux";
import { setTrainerName } from "../store/trainerName.slice";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
    const dispatch =useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const trainerName = e.target.trainerName.value;
        dispatch(setTrainerName(trainerName));
        navigate("/pokedex");
    };
    return (
        <section className="grid grid-rows-[1fr_auto] h-screen overflow-hidden">
            <div className="text-center justify-self-center self-center">
                <main className="flex flex-col p-4 text-center max-sm:w-[350px]">
                    <header className="pb-4 max-sm:w-auto w-[480px] justify-center self-center">
                        <img src="/imgs/pokedex.png" alt="" />
                    </header>
                    <p className="text-3xl font-bold text-red-600 pt-5 font-inter">Hello trainer!</p>
                    <p className="text-black/80 text-lg font-medium font-inter">Write your name for start</p>
                    <form
                        className="grid grid-cols-[1fr_210px] pt-10"
                        onSubmit={handleSubmit}>
                        <input
                            className="p-2 max-sm:w-[200px] text-black/35 text-base font-medium border-black-400/ border-2 pt-2 pb-2 pl-6 pr-6"
                            name="trainerName" 
                            placeholder="Type your name..."
                            type="text"
                            autoComplete="off"
                            required />
                        <button 
                            className="bg-red-600 text-white p-2 font-bold max-sm:w-[100px] " type="submit" >Start</button>
                    </form>
                </main>
            </div>
            <Footer />
        </section>
    )
}
export default Home