
// import bmw from "./img/bmw.png"
// import volvo from "./img/volvo.jpg" 


import Header from "./components/Header";
import CarItem from "./components/CarItem";

function App() {
  return (
    <div className="App">
    <Header/>
     <div className="products">
      <CarItem/>
      <CarItem/>
      <CarItem/>

      {/* <div className="item">
        <img src={bmw} alt="BMW" />
        <h2>BMW</h2>
        <p>
        Suscipit, temporibus, natus expedita, fugiat delectus optio mollitia error repellendus quaerat! Dolore sapiente nesciunt corrupti delectus hic dolorum autem quod consequatur vel adipisci aperiam unde, quibusdam nostrum rem.
        Soluta quaerat quos consequatur nisi. Natus debitis aperiam soluta dicta iusto animi aliquid, doloremque, recusandae culpa architecto possimus quaerat earum excepturi, accusamnam mollitia eaque fuga tenetur.
        </p>
        <b>62.000$</b>
        <button>Buy</button>
      </div>

      <div className="item">
        <img src={volvo} alt="Volvo" />
        <h2>Volvo XV70</h2>
        <p>
        Suscipit, temporibus, natus expedita, fugiat delectus optio mollitia error repellendus quaerat! Dolore sapiente nesciunt corrupti delectus hic dolorum autem quod consequatur vel adipisci aperiam unde, quibusdam nostrum rem.
        Soluta quaerat quos consequatur nisi. Natus debitis aperiam soluta dicta iusto animi aliquid, doloremque, recusandae culpa architecto possimus quaerat earum excepturi, accusamnam mollitia eaque fuga tenetur.
        </p>
        <b>55.000$</b>
        <button>Buy</button>
      </div> */}
     </div>
    </div>
  );
}

export default App;
