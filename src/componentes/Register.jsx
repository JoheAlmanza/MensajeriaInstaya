import './App.css'

function Register() {

  return (
        <div>
            <section>
    <div class="container px-5">
        <div class="row gx-5 align-items-center">
            <div class="col-lg-6">
                <div class="p-5"><img class="img-fluid rounded-circle" src="./src/assets/img/Mensajeria-instantanea-como-canal-de-atencion-al-cliente.png" alt="..." /></div>
            </div>
            <div class="col-lg-6">
                <div class="p-5">
                    <h2 class="display-4">¿Ya estás registrado? Inicia Sesión</h2>
                </div>
                <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label">Nombre de Usuario</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                        <div class="invalid-feedback">
                          Por favor elige un nombre de usuario.
                        </div>
                      </div>
                      
                      <div id="emailHelp" class="form-text">Nunca compartiremos tu nombre de Usuario</div>
                    </div>
                    <div class="mb-3">
                      <label for="exampleInputPassword1" class="form-label">Contraseña</label>
                      <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div class="mb-3 form-check">
                      <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                      <label class="form-check-label" for="exampleCheck1">Recordar mi contraseña</label>
                    </div>
                    <button type="submit" class="btn btn-primary">Iniciar Sesión</button>
                  </form>
            </div>
        </div>
    </div>
        </section>

        </div>

)
}

export default Register