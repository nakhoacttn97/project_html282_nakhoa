// // thêm vào giỏ hàng khác trang nên chưa làm được
// const btn = document.querySelectorAll(".btn-1");
// // console.log(btn);
// btn.forEach(function (a, index) {
//     a.addEventListener("click", function (event) {
//         {
//             var btnItem = event.target;
//             var product = btnItem.parentElement;
//             var product = product.parentElement;
//             var productImg = product.querySelector("img").src;
//             var productName = product.querySelector("h6").innerText;
//             var productPrice = product.querySelector("span").innerText;
//             // console.log(productImg, productName, productPrice);
//             addcart(productImg, productName, productPrice)
//         }
//     })

//     function addcart(productImg, productName, productPrice) {
//         var addtr = document.crea
//         var trcontent = '<tr><td scope="row"><img class="img-giohang" src="' + productImg + '" alt=""></td><td class="align-middle">' + productName + '</td><td class="align-middle text-right"><input type="number" value="1" min="1" class="w-50"></td><td class="align-middle text-right">' + productPrice + '<span class="price"><sup>đ</sup></span></td><td class="align-middle text-right">9.240.000 <span class="price"><sup>đ</sup></span></td><td class="align-middle text-center"><a href="#"><i class="fa fa-trash-o text-danger"></i></a></td></tr>';
//         addtr.innerHTML = trcontent;
//         var cartTable = document.querySelector("tbody");
//         cartTable.append(addtr);

//     }
// })

// Tính tổng số tiền
// function Total() {
//     var soLuong = document.getElementById("soLuong").value;
//     var donGia = document.getElementById("donGia").value;
//     var toTal = Number(soLuong) * Number(donGia);

//     document.getElementById("toTal").innerHTML = toTal;
// }
function tinhTongThanhTien() {
    let tongThanhTien = 0;
    const thanhTiens = document.querySelectorAll("#toTal");
    for (let i = 0; i < thanhTiens.length; i++) {
        const thanhTien = parseInt(thanhTiens[i].textContent.replace(/\./g, ""));
        tongThanhTien += thanhTien;
    }
    document.getElementById("tongThanhTien").textContent = formatCurrency(tongThanhTien);
}

function formatCurrency(number) {
    return new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(number);
}
