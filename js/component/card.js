const cardComponent = (noOrder, type, status, pAddress, pTitle, pStartDate, pEndDate, dAddress, dTitle, dStartDate, dEndDate,key) =>{
    let cardWrapper = document.createElement('section')
    cardWrapper.classList.add('card-wrapper')
    let orderNumber = document.createElement('div')
    orderNumber.classList.add('order-number')
    let textOrderNum = document.createElement('h3')
    let textOrder = document.createElement('span')
    textOrder.innerText = 'Orden'
    textOrderNum.innerText = `#${noOrder}`
    let cardBox = document.createElement('section')
    cardBox.classList.add('card-box')
    let cardDivider = document.createElement('div')
    cardDivider.classList.add('card-divider')
    let cardDividerInfo = document.createElement('section')
    cardDividerInfo.classList.add('card-divider_info')
    let cardDividerInfoSeco = document.createElement('div')
    cardDividerInfoSeco.classList.add('d-flex')
    let cardDividerInfoFirst = document.createElement('div')
    cardDividerInfoFirst.classList.add('d-flex')
    let deliveryIcon = document.createElement('img')
    deliveryIcon.classList.add(...'me card-icon'.split(' '))
    deliveryIcon.setAttribute('src', '../../assets/delivery-icon.svg')
    let typeText = document.createElement('span')
    let statusText = document.createElement('span')
    statusText.innerText = status.split(' ')[1]
    typeText.innerText = type
    let statusCircle = document.createElement('span')
    statusCircle.classList.add( status === 'Orden Asignada' ? 'circle-gray' : 'circle-yellow')
    let deliveryResume = document.createElement('div')
    deliveryResume.classList.add('delivery-resume')
    let pickupItem = document.createElement('div')
    
    pickupItem.classList.add('pickup-item')
    let pickupInfo = document.createElement('div')
    pickupInfo.classList.add('pickup-info')
    let pickupIcon = document.createElement('img')
    pickupIcon.setAttribute('src', '../../assets/delivery-icon.svg')
    pickupIcon.classList.add('card-icon')
    let pickupTextContent = document.createElement('div')
    let pickupTitle = document.createElement('span')
    pickupTitle.innerText = pTitle.toUpperCase()
    let pickupCountry = document.createElement('h3')
    pickupCountry.innerText = 'México'
    let pickupAddress = document.createElement('span')
    pickupAddress.innerText = `${pAddress.slice(0, 40)}...`
    let pickupDates = document.createElement('div')
    pickupDates.classList.add(...'d-flex flex-column-end'.split(' '))
    let pTextDate = document.createElement('span')
    pTextDate.innerText = moment(pStartDate).format("DD/MM/YY");
    let pTextHour = document.createElement('span')
    pTextHour.innerText = moment(pEndDate).format("LT");
    let dropoffItem = document.createElement('div')
    dropoffItem.classList.add('pickup-item')
    let dropoffInfo = document.createElement('div')
    dropoffInfo.classList.add('pickup-info')
    let dropoffIcon = document.createElement('img')
    dropoffIcon.setAttribute('src', '../../assets/location-icon.svg')
    dropoffIcon.classList.add('card-icon')
    let dropoffTextContent = document.createElement('div')
    let dropoffTitle = document.createElement('span')
    dropoffTitle.innerText = dTitle.toUpperCase()
    let dropoffCountry = document.createElement('h3')
    dropoffCountry.innerText = 'México'
    let dropoffAddress = document.createElement('span')
    dropoffAddress.innerText = `${dAddress.slice(0, 40)}...`
    let dropoffDates = document.createElement('div')
    dropoffDates.classList.add(...'d-flex flex-column-end'.split(' '))
    let dTextDate = document.createElement('span')
    dTextDate.innerText = moment(dStartDate).format("DD/MM/YY");

    let dTextHour = document.createElement('span')
    dTextHour.innerText = moment(dEndDate).format("LT");

    let dividerLeft = document.createElement('div')
    dividerLeft.classList.add('divider-left')


    let btnWrapper = document.createElement('div')
    btnWrapper.classList.add('card-button')
    let btn = document.createElement('button')
    let btnTitle = document.createElement('a')
    btnTitle.setAttribute('href', `/views/infoCard.html?orderId=${key}`)
    btnTitle.innerText = 'Resumen'
    let btnIcon = document.createElement('img')
    btnIcon.setAttribute('src', '../../assets/eye-icon.svg')
    //cardDivider
    cardDividerInfoFirst.append(deliveryIcon,typeText)
    cardDividerInfoSeco.append(statusCircle,statusText)
    cardDividerInfo.append(cardDividerInfoFirst, cardDividerInfoSeco)
    cardDivider.append(cardDividerInfo)
    //pickup
    pickupTextContent.append(pickupTitle,pickupCountry,pickupAddress)
    pickupInfo.append(pickupIcon,pickupTextContent)
    pickupDates.append(pTextDate, pTextHour)
    pickupItem.append(pickupInfo, pickupDates)
    //pickup
    dropoffTextContent.append(dropoffTitle,dropoffCountry,dropoffAddress)
    dropoffInfo.append(dropoffIcon,dropoffTextContent)
    dropoffDates.append(dTextDate, dTextHour)
    dropoffItem.append(dropoffInfo, dropoffDates)
    //
    deliveryResume.append(pickupItem,dividerLeft,dropoffItem )
    //btn
    btn.append(btnTitle,btnIcon)
    btnWrapper.append(btn)
    //
    cardBox.append(cardDivider,deliveryResume,btnWrapper)
    //
    orderNumber.append(textOrder, textOrderNum)
    //
    cardWrapper.append(orderNumber,cardBox)

    return cardWrapper
}

const trackOrderCard = (status, active) =>{

    let listItem = document.createElement('li')
    listItem.classList.add('track-item')
    let divCheck = document.createElement('div')
    divCheck.classList.add( active ? 'check-icon' : 'check-list_item')
    let spanTitle = document.createElement('span')
    spanTitle.classList.add('check-list_title')
    spanTitle.innerText = status

    listItem.append(divCheck, spanTitle)
     return listItem
}

export {cardComponent, trackOrderCard}