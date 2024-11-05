
//const address = document.querySelector('#add')

// form.addEventListener('submit',(evt)=>{
//     evt.preventDefault();
//     alert(`hello ${n}`);
// })

document.addEventListener('DOMContentLoaded',()=>{
    const form = document.querySelector('form')
    const btn = document.querySelector('#addDetails')
    const addressBook = []
    btn.addEventListener('click',()=>{
        const n = document.querySelector('#name').value
        const address = document.querySelector("#address").value
        const number = document.querySelector("#phone").value
        addressBook.push({'Name':n,'Phone number':number,'Address':address});
        form.reset()
    })
    form.addEventListener('submit',(evt)=>{
        evt.preventDefault();
        console.log(addressBook)
  })

 })