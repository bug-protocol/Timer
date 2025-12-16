import { Link } from "react-router-dom";

function LandingPage() {
    return <section className=" min-h-screen flex flex-row justify-center items-center gap-8">
        <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-2">Timer</h1>
        <Link to="/app"><button className="border px-2 py-1 rounded bg-green-500 text-white">Start</button></Link>
        </div>
        <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-2">StopWatch</h1>
        <Link to="/stopwatch"><button className="border px-2 py-1 rounded bg-green-500 text-white">Start</button></Link>
        </div>
        </section>
}
export default LandingPage;