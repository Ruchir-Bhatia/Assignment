// console.log("Flashy Control")
// localStorage.setItem
// let flashyContainer = document.getElementById('flashyContainer')
// let FlashCloseBtn = document.getElementById('FlashCloseBtn')
// let flashReadBtn = document.getElementById('flashReadBtn')
// function disableScrolling() {
//     var x = window.scrollX;
//     var y = window.scrollY;
//     window.onscroll = function () { window.scrollTo(x, y); };
// }
// function enableScrolling() {
//     window.onscroll = function () { };
// }
// disableScrolling()

// FlashCloseBtn.addEventListener('click', function () {
//     flashyContainer.classList.add('notVisible')
//     enableScrolling()
// })
// flashReadBtn.addEventListener('click', function () {
//     flashyContainer.classList.add('notVisible')
//     enableScrolling()
// })

// function setWithExpiry(key, value, ttl) {
//     const now = new Date()
//     const item = {
//         value: value,
//         expiry: now.getTime() + ttl,
//     }
//     localStorage.setItem(key, JSON.stringify(item))
//     console.log('itemSet')
// }
// function getWithExpiry(key) {
//     const itemStr = localStorage.getItem(key)
//     // if the item doesn't exist, return null
//     if (!itemStr) {
//         setWithExpiry('shubham', 'firstTime', 10000)
//         flashyContainer.classList.add('visible')
//         disableScrolling()
//         return null
//     }
//     else {
//         const item = JSON.parse(itemStr)
//         const now = new Date()
//         if (now.getTime() > item.expiry) {
//             // If the item is expired, delete the item from storage
//             // and return null
//             console.log(item.expiry - now.getTime())
//             localStorage.removeItem(key)
//             return null
//         }
//     }
// }
// getWithExpiry('shubham')
// const visibility = localStorage.getItem('shubham')
// if (visibility) {
//     alert('HAI')
//     flashyContainer.classList.add('notVisible')
// }