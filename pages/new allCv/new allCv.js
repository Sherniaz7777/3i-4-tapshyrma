const h1=document.querySelector('h1')
const inputs=document.querySelectorAll('input')
const jasoobtn=document.getElementById('create')
const root=document.getElementById('root')


jasoobtn.onclick=(e)=>{
    if (inputs[0,1,2,3].value.trim().length>0) {
        e.preventDefault()
    showInfo()
    }
    
    
}

function showInfo() {
    h1.innerHTML=`${inputs[0].value}
    ${inputs[1].value}
    `

    root.innerHTML=`
    <h2>Кесип:  ${inputs[2].value}</h2>
    <h4>Tel.: ${inputs[3].value}</h4>
    `
}