function DiChuyenPhongHau(from, to) {
  var Name = GetNamePhongHau(from);
  var piece = Name.split('_')[0];
  var color = Name.split('_')[1];

  if (piece === 'Tot' && (to.charAt(0) === '1' || to.charAt(0) === '8')) {
    promotePawnToQueen(to, color);
    return false; // Chặn di chuyển tiếp cho đến khi phong hậu hoàn thành
  }

  return true;
}

// Thực hiện phong hậu (tự động phong hậu thành quân hậu)
function promotePawnToQueen(square, color) {
  var imgElement = document.getElementById("i" + square);
  imgElement.src = "Quanco/Hau_" + color + ".png";
  imgElement.alt = "Hau_" + color;

  // Cập nhật trạng thái bàn cờ
  SetName(square, "Hau_" + color);
  VeBanCoTrangDen();
}

// Cập nhật tên quân cờ tại một ô
function SetName(id, name) {
  document.getElementById(id).setAttribute('name', name);
}

// Lấy tên quân cờ tại một ô
function GetNamePhongHau(id) {
  return document.getElementById(id).getAttribute('name');
}