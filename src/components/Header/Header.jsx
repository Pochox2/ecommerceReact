import Navbar from "../Navbar/Navbar"


 function Header() {
    return (
        <header>
            <div className="header">
                <div className="div_logo">
                    <img className="logo" src="/public/img/logo1.png" width={200} />
                </div>
                <div className="div_navbar">
                    <Navbar />
                </div>
            </div>
        </header>
    )
 }

 export default Header