const main=document.getElementById('mainImg');
document.querySelectorAll('.thumb').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('.thumb').forEach(x=>x.classList.remove('active'));b.classList.add('active');main.src=b.dataset.src;main.scrollIntoView({behavior:'smooth',block:'center'})}));
const modal=document.getElementById('orderModal');
const open=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false')};
const close=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true')};
document.getElementById('showForm').onclick=open;document.getElementById('stickyOrder').onclick=open;document.getElementById('closeForm').onclick=close;
modal.addEventListener('click',e=>{if(e.target===modal)close()});
document.getElementById('orderForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.target);const msg=`Hola, quiero hacer un pedido contra entrega de la promoción AirPet 2x1 por $89.900.

Nombre: ${d.get('nombre')}
Teléfono: ${d.get('telefono')}
Departamento: ${d.get('departamento')}
Ciudad: ${d.get('ciudad')}
Dirección: ${d.get('direccion')}
Barrio: ${d.get('barrio')}
Talla: ${d.get('talla')}
Indicaciones: ${d.get('notas')||'Ninguna'}`;window.open('https://wa.me/573147636825?text='+encodeURIComponent(msg),'_blank')});