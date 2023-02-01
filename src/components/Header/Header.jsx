import Navbar from "../Navbar/Navbar"

 function Header() {
    return (
        <header>
            <div className="header">
            <img className="logo" src="../../../img/logo.png" width={200} />
            <Navbar />
            </div>
        </header>
    )
 }

 export default Header