import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center">
            <h2 className="text-6xl">Opss!!</h2>
            <Link to={"/"}><button className="text-white text-xs font-semibold py-4 p-6 bg-slate-400 my-5">Home</button></Link>
        </div>
    );
};

export default ErrorPage;