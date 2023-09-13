import { Link } from "react-router-dom"

export const FooterOrganism = () => {
    return (  
        <footer className="w-full footer h-60 absolute bottom-0 shadow pt-1 pb-8 bg-offWhite flex flex-row justify-center items-center">
        <div className="w-11/12  h-full flex flex-row justify-start items-start">
                <div className="flex w-11/12 pt-[2%] pb-[2%] flex-col md:flex-row h-full justify-start items-start">
                    <div className="flex-col md:w-1/4 h-full items-start flex justify-start">
                        <div className="mt-2">
                        <Link className=" font-light uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200" to={'/about'}>About</Link></div>
                        <div className="mt-2">
                        <Link className=" font-light uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200" to={'/resume'}>Resume</Link></div>
                        <div className="mt-2">
                        <Link className=" font-light uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200" to={'/portfolio'}>Porfolio & skills</Link></div>
                        <div className="mt-2">
                        <Link className=" font-light uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200" to={'/contact'}>Contact</Link></div>
                    </div>
                    <div className="flex-col md:ml-20">
                    <div className="mt-2">
                        <Link className=" font-light uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200" to={'/linkedin'}>LinkedIn</Link></div>
                        <div className="mt-2">
                        <Link className=" font-light uppercase cursor-pointer scale-100 hover:italic  hover:scale-110 transition duration-200 hover:duration-200" to={'/github'}>Github</Link></div>
                    </div>

                </div>
                </div>
        </footer>
      )

}