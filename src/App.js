import './App.css';
import pic from "../src/myimages/pic.jpg";



import Contact from './pages/footer';
import Mov from './pages/movies';
function App() {
  return (
    <div>
      <section id="header">
    <nav id="navbar">
        <a href="https://in.bookmyshow.com/explore/home/chennai"><img src={pic}/> </a>
            <div class="nav-links"><br/><br/>
                <ul>
                    <li><a href="/" >Home</a></li>
                    <li><a href="#header1">About</a></li>
                    <li><a href="#header3">Purchase</a></li>
                    <li><a href="#header4">Contact</a></li>
                </ul>
           </div>
    </nav>
<div class ="title">
    <br/><br/><h1><b>Book My Show</b></h1><br/>
    <p>
       Love With Cinema !  <span>Live with Cinema!</span>
    </p><br/><br/><br/><br/>
    <a href="https:/www.google.com" target="_blank" >Click here to KNOW MORE</a>
</div>
    
</section>
{/* About Section */}

    <Mov/>    
    <Contact/>
    </div>
  );
}

export default App;
