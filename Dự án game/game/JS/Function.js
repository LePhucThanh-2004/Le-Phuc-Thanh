function LuotDi(){
	var Temp = document.getElementById("iCoDen").src;
	document.getElementById("iCoDen").src = document.getElementById("iCoDo").src;
	document.getElementById("iCoDo").src = Temp;
}

function GetDiem(Name){
	switch(Name){
		case 'Xe':
			return 50;
		break;
		
		case 'Ma':
			return 50;
		break;
		
		case 'Tuong':
			return 50;
		break;
		
		case 'Hau':
			return 200;
		break;
		
		case 'Vua':
			return 300;
		break;
		
		case 'Tot':
			return 10;
		break;
		
		default:
			return 0;
		break;
	}
}

function DoiMau(X, Y){
	document.getElementById(X.toString() + Y.toString()).style.backgroundColor = "#F6CD61";
}

// function DoiMauPhongHau(X){
// 	document.getElementById(X).style.border = "thick solid #0000FF";
// 	// document.getElementById(X).innerText = "a";
// 	// document.getElementById(X).style = 

// 	console.log("🚀 ~ DoiMauPhongHau ~ document.getElementById(X):", document.getElementById(X))
// }



function GetColor(id){
	var rgb = document.getElementById(id).style.backgroundColor;
	var Temp = rgb.substring(rgb.indexOf('(') + 1, rgb.length - 1);
	while(Temp.indexOf(' ') != -1){
		Temp = Temp.replace(" ", "");
	}
	return Temp; //rgb
}

function GetName(id){
	console.log('Hello');

	try{
		var src = document.getElementById("i" + id).src;
		console.log("🚀 ~ GetName ~ src:", src)
		var Ten = src.substring(src.lastIndexOf('/') + 1, src.length - 4);
		console.log("🚀 ~ GetName ~ Ten:", Ten)
		return Ten;
	}catch(err){
		console.log("🚀 ~ GetName ~ err:", err)
		return err;
	}
}

function isChieuVua(Name){
	return Name.localeCompare("Vua") == 0 ? true : false;
}

function isCoDo(X, Y){
	var Temp = GetName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Do") == 0 ? true : false;
}

function isCoDen(X, Y){
	var Temp = GetName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Den") == 0 ? true : false;
}

function isRong(X, Y){
	var Temp = GetName(X.toString() + Y);
	Temp = Temp.substring(Temp.indexOf('_') + 1 , Temp.length);
	return Temp.localeCompare("Rong") == 0 ? true : false;
}

function isBien(X, Y){
	if(X < 1 || X > 8)
		return true;
	else if(Y < 1 || Y > 8)
		return true;
	else
		return false;
}

function DiChuyen(id, idMoi){
	if(id.localeCompare(idMoi) == 0 ||  GetColor(idMoi).localeCompare(Mau.NuocDi) != 0)
		return false;
	document.getElementById("i" + idMoi).src = document.getElementById("i" + id).src;
	document.getElementById("i" + id).src = CoDen.Rong;

	if (parseInt(idMoi) >= 11 && parseInt(idMoi)<=18){
		alert('Chuan bi phong hau');
		showPromotionMenu2(parseInt(idMoi))
		return true;
	}
	return true;
}	
