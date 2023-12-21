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
                <main className="p-4">
                    <header className="pb-4">
                        <img src="./imgs/pokedex.png" alt="" />
                    </header>
                    <h3 className="text-3xl font-bold text-red-600 pt-5">Hello trainer!</h3>
                    <p className="text-lg">Write your name for start</p>
                    <form
                        className="grid grid-cols-[1fr_210px] gap-4 pt-10"
                        onSubmit={handleSubmit}>
                        <input
                            className="p-2 max-sm:w-[200px] text-black/35 text-base font-medium border-black-400/ border-2 pt-2 pb-2 pl-6 pr-6"
                            name="trainerName" 
                            placeholder="Type your name..."
                            type="text"
                            autoComplete="off"
                            required />
                        <button 
                            className="bg-red-600 text-white p-2 font-bold " type="submit" >Start</button>
                    </form>
                </main>
            </div>
            <Footer />
        </section>
    )
}
export default Home