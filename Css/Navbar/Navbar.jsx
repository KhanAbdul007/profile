import './Navbar.css'
import Header from './Head'
import About from './About'
import Skill from './Skill'


const Navbar =() =>{

    function cli() {
        

        const a=document.getElementById('nv1');

        a.style.background="grey"
    }

    return(
        <div className="Navbar">




            <nav id='nv1'>
             <div className="ak"><h1>SD</h1></div>
                  <div className="options">
                      <div>Home</div>
                      <div>About</div>
                      <div>Gallery</div>
                      <div>Contact</div>
                      <div>Services</div>
                      </div>
             <div class="icon"><h2><i className="fa-brands fa-facebook"></i>
             <i className="fa-brands fa-linkedin"></i>
             <i className="fa-brands fa-twitter"></i></h2></div>

             <button onClick={cli}>Click</button>
            </nav>



   <Header/>
   <About/>
   <Skill/>
        </div>
    )
}

export default Navbar
