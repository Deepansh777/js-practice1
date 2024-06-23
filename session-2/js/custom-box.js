const isColor = (strColor) => {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

function custom_box(){

    //  get element id of inputs
    const bcg = document.getElementById("bcg");
    const bt = document.getElementById("bt");
    const br = document.getElementById("br");
    const boc = document.getElementById("boc");

    // get element id of the box
    const box_tab1 = document.getElementById("box_tab1");

    // deal with invalid inputs
    if( bt.value <0 || br.value<0 ){
        window.alert('Invalid border radius or border thinkness input value')
        return
    }

    if( !isColor(bcg.value) ){
        window.alert('Invalid background color!')
        return
    }

    if( !isColor(boc.value) ){
        window.alert('Invalid border outline color!')
        return
    }

    // we'll now assign features to the box
    box_tab1.style.backgroundColor = bcg.value
    box_tab1.style.borderWidth = bt.value + 'px'
    box_tab1.style.borderRadius = br.value + 'px'
    box_tab1.style.outlineColor = boc.value

}