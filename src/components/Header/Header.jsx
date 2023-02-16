import Navbar from "../Navbar/Navbar"

 function Header() {
    return (
        <header>
            <div className="header">
            <img className="logo" src="/public/img/logo1.png" width={200} />
            <Navbar />
            </div>
        </header>
    )
 }

 export default Header