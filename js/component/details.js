import {getOrders} from "../api/api.js";
import {trackOrderCard} from "../component/card.js";

let urlParams = new URLSearchParams(window.location.search)
let orderId = urlParams.get("orderId")
let collapse = document.getElementById("collapse-id")

let radioWrapper = document.querySelectorAll("#radio-wrapper input[type='radio']" )

const filterStatus = async(elems) => {
    let ulWrapper = document.getElementById("order-li")
    let btn = document.getElementById("id-btn-list")
    ulWrapper.innerHTML = ""
    let getStatus = await getOrders(orderId)
    let statusArray = Object.values(getStatus)
    let statusObj = statusArray[11][`${elems}`]
    statusObj.forEach(element => {
        let {status, active} = element
        ulWrapper.append(trackOrderCard(status , active))
        if(statusObj[0].active && statusObj[1].active && statusObj[2].active){
            btn.classList.add("active")
        }else{
            btn.classList.remove("active")
        }
    });
}

filterStatus("pickup")

radioWrapper.forEach(element => {
    element.addEventListener("change",(event) =>{
        let select = event.target.value //event es el evento que se esta ejecutando, target es el elemento que esta disparando el evento, value es el valor del elemento que esta disparando el evento
        filterStatus(select)        

    })
});

const renderDetails = async() => {
    let getData = await getOrders(orderId)
    let {order_number,status_string, type, destinations, contact_info} = getData
    let orderNumber = document.getElementById("norder-id")
    let pickupType = document.getElementById("ptype-id")
    let pickupCountry = document.getElementById("pct-id")
    let pickupAddress = document.getElementById("padd-id")
    let pickupStatus = document.getElementById("pstatus-id")
    let deliveryType = document.getElementById("dtype-id")
    let deliveryCountry = document.getElementById("dct-id")
    let deliveryAddress = document.getElementById("dadd-id")
    let deliveryStatus = document.getElementById("dstatus-id")
    let hour = document.getElementById("hour-id")
    console.log(status_string)
    orderNumber.innerHTML = `Orden: #${order_number}`
    pickupType.innerHTML = destinations[1]['nickname']
    pickupCountry.innerHTML = 'México'
    pickupAddress.innerHTML =  `${destinations[1]['address'].slice(0, 20)}...` 
    pickupStatus.innerHTML = status_string.split(' ')[1]
    deliveryType.innerHTML = destinations[0]['nickname']
    deliveryCountry.innerHTML = 'México'
    deliveryAddress.innerHTML = `${destinations[0]['address'].slice(0, 20)}...`
    deliveryStatus.innerHTML = status_string. split(' ')[1]
    hour.innerHTML = moment().format('LT')


}

collapse.addEventListener("click", (event) => {
    let collapseIcon = document.getElementById("collapse-icon")
    let collapseContent = document.getElementById("collapse-content")
    if(collapse.classList.contains("active")){
        collapse.classList.remove("active")
        collapseIcon.classList.remove("fa-chevron-up")
        collapseIcon.classList.add("fa-chevron-down")
        collapseContent.style.display = "none"

    }else{
        collapse.classList.add("active")
        collapseIcon.classList.add("fa-chevron-up")
        collapseIcon.classList.remove("fa-chevron-down")
        collapseContent.style.display = "flex"

    }
})

renderDetails()


