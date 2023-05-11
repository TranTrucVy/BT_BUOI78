var numArray = [];
function getEle(id){
  return document.getElementById(id);
}

function AddNumber() {
    var number = getEle('nhapN').value;
    if(number == '') {
        number = 0;
    } 
    numArray.push(Number(number));
    getEle('kqAddNumber').innerHTML = numArray.toString();
}

getEle('btnAddNumber').onclick = AddNumber;

// Bài 1: Tính tổng các số dương trong mảng
function tinhTong() {
    if (numArray == '') {
        getEle('kqTinhTong').innerHTML = 0;
    }
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        } 
    }
    getEle('kqTinhTong').innerHTML = sum;
}
getEle('btnTinhTong').onclick = tinhTong;

// Bài 2: Đếm số dương trong mảng
function demSoDuong() {
    if (numArray == '') {
        getEle('kqSoDuong').innerHTML = 0;
    }
    var count = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }
    getEle('kqSoDuong').innerHTML = count;
}
getEle('btnSoDuong').onclick = demSoDuong;

// Bài 3: Tìm số nhỏ nhất trong mảng
function timSoNhoNhat() {
    if (numArray == '') {
        getEle('kqSoNhoNhat').innerHTML = "Số nhỏ nhất: 0";
    }
    var min = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
        }
    }
    getEle("kqSoNhoNhat").innerHTML = min;
}
getEle('btnSoNhoNhat').onclick = timSoNhoNhat;

// Bài 4: Tìm số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat() {
    var soDuongNhoNhat = [];
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > 0) {
          soDuongNhoNhat[i] = numArray[i];
        } 
    }

    var min = soDuongNhoNhat[0];
    for (let i = 1; i < soDuongNhoNhat.length; i++) {
        if (min > soDuongNhoNhat[i]) {
            min = soDuongNhoNhat[i];
        } 
    }
    getEle('kqSoDuongNhoNhat').innerHTML = min;
}
getEle('btnSoDuongNhoNhat').onclick = timSoDuongNhoNhat;

// Bài 5: Tìm số chẵn cuối cùng trong mảng
function timSoChanCC() {
    var soChan = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChan = numArray[i];
        }
        if (numArray[i] % 2 != 0) {
            getEle('kqSoChanCuoiCung').innerHTML = soChan;
        }
    }
    getEle('kqSoChanCuoiCung').innerHTML = soChan;
}
getEle('btnSoChanCuoiCung').onclick = timSoChanCC;

// Bài 6: Đổi chỗ 2 mảng theo vị trí
function doiCho() {
    var soViTri1 = getEle('viTri1').value;
    var soViTri2 = getEle('viTri2').value;
    if (soViTri1 == '' || soViTri2 == '') {
        return getEle('kqDoiCho').innerHTML = 'Nhập lại vị trí cần đổi!!!';
    } 
    var numArrayCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        numArrayCopy[i] = numArray[i];
    }
    if (soViTri2 > numArrayCopy.length) {
        return getEle('kqDoiCho').innerHTML = 
        "Không có " + soViTri2 + " chữ số trong mảng" 
        + ". Tối đa chỉ có " + numArrayCopy.length + " chữ số";
    }
    var temp = 0;
    temp = numArrayCopy[soViTri1];
    numArrayCopy[soViTri1] = numArrayCopy[soViTri2];
    numArrayCopy[soViTri2] = temp;

    getEle('kqDoiCho').innerHTML = numArrayCopy;
}
getEle('btnDoiCho').onclick = doiCho;

// Bài 7: sắp xếp tăng dần
function sapXepTangDan() {
    var numArrayCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        numArrayCopy[i] = numArray[i];
    }
    var temp = 0;
    
    for (let i = 0; i < numArrayCopy.length - 1; i++) {
        for (let j = 0; j < numArrayCopy.length - 1 - i; j++) {
            if (numArrayCopy[j] > numArrayCopy[j + 1]) {
                temp = numArrayCopy[j];
                numArrayCopy[j] = numArrayCopy[j + 1];
                numArrayCopy[j + 1] = temp;
            }
        }
    }
    getEle('kqSapXepTangDan').innerHTML = numArrayCopy;
}
getEle('btnSapXepTangDan').onclick = sapXepTangDan;

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng
function timSoNguyenTo() {
    var soNguyenTo = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (kiemTraPrime(numArray[i])) {
          soNguyenTo = numArray[i];
            break;
        }
    }
    if (soNguyenTo == -1) {
        getEle("kqSoNguyenTo").innerHTML =
            "Không có số nguyên tố tồn tại";
    } else {
        getEle("kqSoNguyenTo").innerHTML = soNguyenTo;
    }
}
getEle('btnSoNguyenTo').onclick = timSoNguyenTo;

function kiemTraPrime(n) {
    if(n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}

// Bài 9: Có bao nhiêu số nguyên
var numListB9 = [];
function ThemSoThuc() {
    var num = parseFloat(getEle('themSoThuc').value);
    if(num == '') {
        num = 0;
    } 
    numListB9.push(Number(num));
    getEle('kqThemSoThuc').innerHTML = numListB9.toString();
}
getEle('btnThemSoThuc').onclick = ThemSoThuc;

function demSoNguyen() {
    if (numListB9.length == '') {
        return getEle("kqDemSoNguyen").innerHTML = 'Mảng rỗng';
    }
    var count = 0;
    for (let i = 0; i < numListB9.length; i++) {
        if (Number.isInteger(numListB9[i])) {
            count++;
        }
    }
    getEle("kqDemSoNguyen").innerHTML = count;
}
getEle('btnDemSoNguyen').onclick = demSoNguyen;

// Bài 10: So sánh số lượng số dương, số lượng số âm
function ssAmDuong() {
    var soDuong = 0;
    var soAm = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        } else if (numArray[i] < 0){
            soAm++;
        }
    }
    
    if (soAm == soDuong) {
        getEle('kqSoSanh').innerHTML = 'Số âm = Số dương' + '( Số lượng số âm: ' + soAm + ' và Số lượng số dương: ' + soDuong + ' )';
    } else if (soAm > soDuong) {
        getEle('kqSoSanh').innerHTML = 'Số âm > Số dương' + '( Số lượng số âm: ' + soAm + ' và Số lượng số dương: ' + soDuong + ' )';
    } else {
        getEle('kqSoSanh').innerHTML = 'Số âm < Số dương' + '( Số lượng số âm: ' + soAm + ' và Số lượng số dương: ' + soDuong + ' )';
    }
}
getEle('btnSoSanh').onclick = ssAmDuong;