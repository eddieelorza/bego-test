import {getUpcomingOrders, getOrders} from "./api/api.js";
import {cardComponent} from "./component/card.js";

let cardList = document.getElementById('card-list')
cardList.innerHTML = ''
const createOrderCards = async() =>{
    let dataOrder = await getUpcomingOrders()
    let orderObject = dataOrder
    let filter = input.value.toUpperCase()
    console.log(orderObject)
    for(let key in orderObject){
        let {order_number,status_string, type, destinations } = orderObject[key]

        let card = cardComponent(order_number, type, status_string, destinations[0]['address'], destinations[0]['nickname'], destinations[0]['start_date'], destinations[0]['end_date'],
        destinations[1]['address'], destinations[1]['nickname'], destinations[1]['start_date'], destinations[1]['end_date'],key)
        if(order_number.toUpperCase().indexOf(filter) > -1){
            cardList.appendChild(card)
        }
    }
}
let input = document.getElementById('search-input')
input.addEventListener('keyup', (event) => {
    cardList.innerHTML = ''
    createOrderCards()
})





createOrderCards()

