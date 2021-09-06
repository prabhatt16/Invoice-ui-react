import React from 'react'
import './Button.css'

function Button() {

    // const buttonOnClick= async()=>{
    //     var content = document.getElementById("divcontents");
    //     var pri = document.getElementById("ifmcontentstoprint").contentWindow;
    //     pri.document.open();
    //     pri.document.write(content.innerHTML);
    //     pri.document.close();
    //     pri.focus();
    //     //     //get table html
    //     //     const pdfTable = document.getElementById('divToPrint');
    //     //     //html to pdf format
    //     //     var html = htmlToPdfmake(pdfTable.innerHTML);
    //     //     const documentDefinition = { content: html };
    //     //     pdfMake.vfs = pdfFonts.pdfMake.vfs;
    //     //     pdfMake.createPdf(documentDefinition).open();
    // }
    return (
        <div className="">
            <button  id="ifmcontentstoprint" type="button" className="btn" onClick={()=>window.print()}>
                Print
            </button>
        </div>
    )
}

export default Button
