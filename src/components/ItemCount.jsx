import { useState } from "react";
import { thereIsStock } from "../functions/thereIsStock.js"

function ItemCount( { stock, initial } )  {
    const [actualCount, setCount] = useState(parseInt(initial));

    const showAvailableStock = (stock) => {
        if (parseInt(stock) === 0) {
           return <span className="fs-5 border rounded border-primary p-1">{`No tenemos stock`}</span>
        } else if (parseInt(stock) <= 5) {
            return<span className="fs-5 border rounded border-primary p-1">{`test ${stock} test`}</span>
        }
        return <span className="fs-5 border rounded border-primary p-1">{`Stock: ${stock} unidades`}</span>
    }

    return <>
        <div className="ItemCountContainer container-fluid d-flex flex-column align-items-center mt-5">
            <div className="counterContainer d-flex justify-content-between pt-5">
                <button className="btn btn-primary"
                        disabled = { thereIsStock(stock, true, false) }
                        onClick={() => actualCount > 1 ? setCount(actualCount - 1) : null }>-</button>
                <strong className="fs-3">
                    { thereIsStock(stock, "No stock", actualCount) }
                </strong>
                <button className="btn btn-primary"
                        disabled = { thereIsStock(stock, true, false) }
                        onClick={() => actualCount < stock ? setCount(actualCount + 1) : null }>+</button>
            </div>
            <div className="addToCartContainer d-flex mt-2">
                <button className="btn btn-primary flex-fill" onClick={ () => { alert(`Agregaste ${ actualCount } productos a tu carrito.`) }} disabled = { thereIsStock(stock, true, false) }>Agregar al carrito</button>
            </div>
            <div className="stockContainer d-flex justify-content-between mt-2">
                {
                    showAvailableStock(stock)
                }
            </div>
        </div>
    </>
}

export default ItemCount;