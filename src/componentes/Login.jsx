import './App.css'

function Login() {

  return (
    <div>
        <section id="scroll">
    <form class="row g-3 needs-validation" novalidate>
        <label for="basic-url" class="form-label">Formulario de Registro</label>
        <div class="col-md-4">
          <label for="validationCustom01" class="form-label">Nombres</label>
          <input type="text" class="form-control" id="validationCustom01" value=" " required/>
          <div class="valid-feedback">
            Bien Hecho!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustom02" class="form-label">Apellidos</label>
          <input type="text" class="form-control" id="validationCustom02" value=" " required/>
          <div class="valid-feedback">
            Bien Hecho!
          </div>
        </div>
        <div class="col-md-4">
          <label for="validationCustomUsername" class="form-label">Usuario</label>
          <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend">@</span>
            <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
            <div class="invalid-feedback">
              Por favor elige un nombre de usuario.
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <label for="validationCustom03" class="form-label">Ciudad</label>
          <input type="text" class="form-control" id="validationCustom03" required/>
          <div class="invalid-feedback">
            Ingresa un nombre de Ciudad válida
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom04" class="form-label">Departamento</label>
          <select class="form-select" id="validationCustom04" required>
            <option selected disabled value="">Elige....</option>
            <option>...</option>
          </select>
          <div class="invalid-feedback">
            Por favor elige un departamento válido
          </div>
        </div>
        <div class="col-md-3">
          <label for="validationCustom05" class="form-label">Zip</label>
          <input type="text" class="form-control" id="validationCustom05" required/>
          <div class="invalid-feedback">
            Ingresa un código postal válido
          </div>
        </div>
        <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label for="inputPassword6" class="col-form-label">Contraseña</label>
            </div>
            <div class="col-auto">
              <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline"/>
            </div>
            <div class="col-auto">
              <span id="passwordHelpInline" class="form-text">
                Debe tener de 8-20 caracteres.
              </span>
            </div>
          </div>
        <div class="col-12">
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
            <label class="form-check-label" for="invalidCheck">
              Acepto terminos y condiciones
            </label>
            <div class="invalid-feedback">
              Debes aceptar los terminos antes de inscribirte
            </div>
          </div>
        </div>
        <div class="col-12">
          <button class="btn btn-primary" type="submit">Validar</button>
        </div>
      </form>
        </section>
</div>
  )
}


  export default Login