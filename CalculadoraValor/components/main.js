const Main = () => {


    const handleInput = (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");
    }

    const handleSales = () => {
        let valorCompra = document.getElementById("inputValorCompra").value
        let utilidad = document.getElementById("inputUtilidad").value
        let valorUtilidad = (valorCompra * utilidad / 100)
        let iva = document.getElementById("inputIva").value
        let valorIva = (valorCompra * iva / 100)
        if (valorCompra == '') {
            window.alert('Debe ingresar un valor de compra')
            return false
        }
        if (utilidad === '') {
            window.alert('Debe ingresar un valor de utilidad')
            return false
        }
        if (iva === '') {
            window.alert('Debe ingresar un valor de IVA')
            return false
        }
        //
        let valorVenta = parseFloat(valorCompra) + parseFloat(valorUtilidad) + parseFloat(valorIva)
        let valorGanancia = (valorCompra * utilidad) / 100
        // 
        document.getElementById("inputValorVenta").value = '$' + valorVenta.toFixed(2)
        document.getElementById("inputGanancia").value = '$' + valorGanancia.toFixed(2)
    }

    const handleClear = () => {
        document.getElementById("inputValorCompra").value = ''
        document.getElementById("inputUtilidad").value = ''
        document.getElementById("inputIva").value = ''
        document.getElementById("inputValorVenta").value = ''
        document.getElementById("inputGanancia").value = ''
    }

    return (
        <div className="col-md-12">
            <div className="row card">
                <div className="col-md-6 center">
                    <label className="col-md-3 form-control">Valor compra </label>
                    <input id="inputValorCompra" name="inputValorCompra" type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="Valor compra"></input>
                    <br />
                    <label className="col-md-3 form-control">Utilidad </label>
                    <input id="inputUtilidad" name="inputUtilidad" type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="Utilidad"></input>
                    <br />
                    <label className="col-md-3 form-control">IVA </label>
                    <input id="inputIva" name="inputIva" type="text" onChange={handleInput} className="col-md-5 form-control" placeholder="IVA"></input>
                    <br />
                    <button type="button" className="col-md-4 btn btn-success" onClick={handleSales}>Calcular</button>
                    <button type="button" className="col-md-4 btn btn-primary" onClick={handleClear}>Limpiar</button>
                    <br />
                    <label className="col-md-3 form-control">Valor venta </label>
                    <input id="inputValorVenta" name="inputValorVenta" type="text" className="col-md-5 form-control" placeholder="Valor venta" disabled></input>
                    <br />
                    <label className="col-md-3 form-control">Ganancia </label>
                    <input id="inputGanancia" name="inputGanancia" type="text" className="col-md-5 form-control" placeholder="Ganancia" disabled></input>
                </div>
            </div>
        </div>
    )
}