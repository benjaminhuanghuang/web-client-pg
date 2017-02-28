var newEle = document.createElement("p");

//创建文本节点
var node = document.createTextNode("这是使用Javascript创建的新段落。");

//将文本节点添加到新创建的 <p> 元素中
newEle.appendChild(node);
vardiv1_ele = document.getElementById("div1");
//将新创建的元素添加到已有的元素中
div1_ele.appendChild(newEle);


function createTable() {

    var mybody = document.getElementsByTagName("body")[0];

    mytable = document.createElement("table");
    mytablebody = document.createElement("tbody");

    for (var j = 0; j < 2; j++) {
        mycurrent_row = document.createElement("tr");
        for (var i = 0; i < 2; i++) {
            mycurrent_cell = document.createElement("td");
            currenttext = document.createTextNode("单元格是第" + j + "行，第" + i + "列");
            mycurrent_cell.appendChild(currenttext);
            mycurrent_row.appendChild(mycurrent_cell);
        }
        mytablebody.appendChild(mycurrent_row);
    }
    mytable.appendChild(mytablebody);
    mybody.appendChild(mytable);
    mytable.setAttribute("border", "2");
}