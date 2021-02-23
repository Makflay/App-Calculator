import React, { Component } from 'react';

class CalcKeyboard extends Component {
    // inputTextCursor = (props) => {
    //     //console.log(this.props);
    //     //let addTag = props.target.attributes[2].nodeValue;
    //     //console.log(addTag);
    //     let area = document.getElementById('invite_area');
    //     // console.log(area);
    //     // console.log('selectionStart: ' + area.selectionStart);
    //     // console.log(typeof area.selectionStart)
    //     // console.log('selectionEnd: ' + area.selectionEnd);
    //     // console.log(typeof area.selectionEnd);
    //     // console.log(area.value);
    //     if ((area.selectionStart) || (area.selectionStart === 0)) {
    //         // определяем, где начало выделения, если оно существует
    //         var tagStart = area.selectionStart;
    //         // определяем, где заканчивается выделение, если оно существует
    //         var tagEnd = area.selectionEnd;
    //         // вставляем соответствующий текст в указанное место
    //         area.value = area.value.substring(0, tagStart) + addTag + area.value.substring(tagEnd, area.value.length);
    //         //area[0].value = '';//чистим строку
    //     };
    // };
    render() {
        // document.addEventListener("keydown", (e) => {
        //     console.log(e.keyCode);
        //     console.log(e.key);
        //     console.log(e.code);
        //     console.log(e.shiftKey);
        // });
        return (
            <div>
                <input type="text" />
            </div>
        )
    }
}

export default CalcKeyboard;