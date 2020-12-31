
function bo(){
var hienthi="Bạn đã chọn các kết quả sau: ";

var name = document.getElementsByName('Tên');
hienthi=hienthi + "\n" + "Họ và tên: " + document.getElementById("Tên").value
var email = document.getElementsByName('Email');
hienthi=hienthi + "\n" + "Email: " + document.getElementById("Email").value
var name = document.getElementsByName('Tuổi');
hienthi=hienthi + "\n" + "Tuổi: " + document.getElementById("Tuổi").value
var cau1 = document.getElementsByName('Cau1');
for (var i = 0, length = cau1.length; i < length; i++)
{
    if (cau1[i].checked)
    {
  
     hienthi=hienthi + "\n" + "Câu 1: " + cau1[i].value

     
     break;
    }
}
var cau2 = document.getElementsByName('Cau2');
for (var i = 0, length = cau2.length; i < length; i++)
{
    if (cau2[i].selected)
    {
     
     hienthi=hienthi + "\n" + "Câu 2: " + cau2[i].value

     
     break;
    }
}

var cau3 = document.getElementsByName('Cau3');
for (var i = 0, length = cau3.length; i < length; i++)
{
    if (cau3[i].checked)
    {
    
     hienthi=hienthi + "\n" + "Câu 3: " + cau3[i].value

     
     break;
    }
}
var cau4 = document.getElementsByName('Cau4');
hienthi= hienthi+ "\n" + "Câu 4: "
for (var i = 0, length = cau4.length; i < length; i++)
{
    if (cau4[i].checked)
    {
     
     hienthi=hienthi + "\n" + "      " + cau4[i].value 
    }
}
var cau5 = document.getElementsByName('Cau5');
hienthi= hienthi+ "\n" + "Câu 5: "
for (var i = 0, length = cau5.length; i < length; i++)
{
    if (cau5[i].checked)
    {
     
     hienthi=hienthi + "\n" + "      " + cau5[i].value 
    }
}
var cau6 = document.getElementsByName('Cau6');
hienthi= hienthi+ "\n" + "Câu 6: "
for (var i = 0, length = cau6.length; i < length; i++)
{
    if (cau6[i].checked)
    {
     
     hienthi=hienthi + "\n" + "      " + cau6[i].value 
    }
}
var cau7 = document.getElementsByName('Cau7');
for (var i = 0, length = cau7.length; i < length; i++)
{
    if (cau7[i].checked)
    {
     
     hienthi=hienthi + "\n" + "Câu 7: " + cau7[i].value

     
     break;
    }
}


alert(hienthi);
}