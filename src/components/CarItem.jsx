import audi from "../img/audi.png"

function CarItem() {
  return <div className="item">
  <img src={audi} alt="Audi" />
  <h2>Audi Q7</h2>
  <p>
  Suscipit, temporibus, natus expedita, fugiat delectus optio mollitia error repellendus quaerat! Dolore sapiente nesciunt corrupti delectus hic dolorum autem quod consequatur vel adipisci aperiam unde, quibusdam nostrum rem.
  Soluta quaerat quos consequatur nisi. Natus debitis aperiam soluta dicta iusto animi aliquid, doloremque, recusandae culpa architecto possimus quaerat earum excepturi, accusamnam mollitia eaque fuga tenetur.
  </p>
  <b>80.000$</b>
  <button>Buy</button>
</div>
}
export default CarItem;