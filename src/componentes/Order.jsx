import './App.css'

function Order() {

  return (
    <div>
        
    <div class="container px-5">
        <div class="row gx-5 align-items-center">
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">@</span>
                <input type="text" class="form-control" placeholder="Usuario" aria-label="Username" aria-describedby="basic-addon1"/>                       
              </div>
              <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="No. de Orden" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              </div>
              <button type="button" class="btn btn-success">Consultar Orden</button>
              <button type="button" class="btn btn-danger">Eliminar Orden</button>
              
              <label for="basic-url" class="form-label">Crear Orden de Envío</label>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Recogida</span>
                <input type="text" class="form-control" id="basic-url" aria-describedby="basic-addon3"/>
              </div>
              
              <div class="input-group mb-3">
                <span class="input-group-text">Destino</span>
                <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
              </div>
              
              <div class="input-group mb-3">
                <span class="input-group-text">@</span>
                <input type="text" class="form-control" placeholder="Usuario" aria-label="Username"/>
            
              </div>
              
              <div class="input-group">
                <span class="input-group-text">Descripción del Paquete</span>
                <textarea class="form-control" aria-label="With textarea"></textarea>
              </div>
            </div>
        </div>
         </div>
         
        
)
}

export default Order