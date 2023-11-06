import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const nav = <>
        {/* <li className='mx-2  rounded-xl font-semibold border  mt-1  button_trans h '>
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                Home
            </NavLink>
        </li>
        <li className='mx-2  rounded-xl font-semibold border  mt-1  button_trans hover:bg-white'>
            <NavLink to="/allassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                All Assignment
            </NavLink>
        </li>
        <li className='mx-2 rounded-xl font-semibold border  mt-1  button_trans '>
            <NavLink to="/createassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                Create Assignment
            </NavLink>
        </li>

        <li className='mx-2 rounded-xl font-semibold border  mt-1  button_trans px-1'>
            <NavLink to="/subbmittedassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                Submitted Assignment
            </NavLink>
        </li>
        <li className='mx-2 rounded-xl font-semibold border  mt-1  button_trans '>
            <NavLink to="/myassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                My Assignment
            </NavLink>
        </li> */}



        <li className="border-2 rounded-xl m-1 bg-slate-100 ">
            <NavLink to="/" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-blue underline text-red-600 bg-white" : ""
            }
            >
                Home
            </NavLink>
        </li>
        <li className="border-2 rounded-xl m-1 bg-slate-100">
            <NavLink to="/allassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                All Assignment
            </NavLink>
        </li>
        <li className="border-2 rounded-xl m-1 bg-slate-100">
            <NavLink to="/createassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                Create Assignment
            </NavLink>
        </li>
        <li className="border-2 rounded-xl m-1 bg-slate-100">
            <NavLink to="/subbmittedassignment" className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
            }
            >
                Submitted Assignment
            </NavLink>
        </li>

        <li tabIndex={0} className="border-2 rounded-xl bg-slate-100 m-1 ">
            <details className="">
                <summary>My Assignment</summary>
                <ul className=" z-[1] w-40 space-y-2  mt-8 border-4 p-4">
                    <li>
                        <NavLink to="/runningassignment" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
                        }
                        >
                            Running <br />Assignment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pendingassignment" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
                        }
                        >
                            Pending  <br /> Assignment
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/completeassignment" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
                        }
                        >
                            Complete  <br />Assignment
                        </NavLink>
                    </li>
                </ul>
            </details>
        </li>






        {
            !user &&
            <li className="border-2 rounded-xl m-1 bg-slate-100">
                <NavLink to="/register" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
                }
                >
                    Register
                </NavLink>
            </li>
        }
        {
            !user &&
            <li className="border-2 rounded-xl m-1 bg-slate-100">
                <NavLink to="/login" className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-blue underline text-red-600 bg-white" : ""
                }
                >
                    Login
                </NavLink>
            </li>
        }
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {nav}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {nav}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="navbar-end">
                        {
                            user ?
                                <div className="dropdown dropdown-bottom dropdown-end mr-4 ">
                                    <label tabIndex={0} >
                                        {
                                            user.photoURL ?
                                                <img className="w-[50px] rounded-full" src={user.photoURL} alt="pic" />
                                                :
                                                <img className="w-[50px] rounded-full" src='https://i.ibb.co/C0QmMFD/user.png' alt="pic" />
                                        }
                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu  shadow bg-base-100 rounded-box w-52 p-4 mt-6">
                                        {
                                            user.displayName ?
                                                <li className="mb-2 text-lg rounded-lg bg-[#72C614] hover:bg-white text-white"><a>{user.displayName}</a></li>
                                                :
                                                <li className="mb-2 text-lg rounded-lg bg-[#72C614] text-white hover:bg-white"><a>UserName</a></li>
                                        }
                                        <li className="text-lg rounded-lg bg-[#72C614]  text-white hover:bg-white" onClick={logOut}><a>Log Out</a></li>
                                    </ul>
                                </div>
                                :
                                ''
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;