let btnAgregar = document.querySelector('#btnAgregar');
btnAgregar.addEventListener('click', agregar);
let btnTotal = document.querySelector('#btnTotal');
btnTotal.addEventListener('click', sumar);
let compras = [];

load();

async function load() {
  let table = document.querySelector('#tblCompras');
  try {
    let response = await fetch('mock.json');
    if (response.ok) {
      let json = await response.json();
      compras = json.compras;
      mostrarTablaCompras();
    } else {
      table.innerHTML = '<h1>Error - Failed URL!</h1>';
    }
  } catch (error) {
    table.innerHTML = `<h1>Connection error: ${error.message}</h1>`;
  }
}

function agregar() {
  console.log('Funcion Agregar');
  let producto = document.querySelector('#producto').value;
  let precio = parseInt(document.querySelector('#precio').value);

  let renglon = {
    producto: producto,
    precio: precio,
  };
  compras.push(renglon);

  mostrarTablaCompras();
}

function sumar() {
  console.log('Funcion Sumar');
  let total = 0;
  for (let i = 0; i < compras.length; i++) {
    total += compras[i].precio;
  }
  let max = compras[0].precio;
  for (let r of compras) {
    if (max < r.precio) max = r.precio;
  }
  document.querySelector('#total').innerHTML =
    '<p>Total: $' + total + '</p>' + '<p>Maximo: $' + max + '</p>';
}

function mostrarTablaCompras() {
  html = '';
  for (let r of compras) {
    html += `
            <tr>
                <td>${r.producto}</td>
                <td>${r.precio}</td>
            </tr>
        `;
  }
  document.querySelector('#tblCompras').innerHTML = html;
}
