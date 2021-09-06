import React from 'react'
import './ItemTable.css'
import Ram from '../ram.jpg'
import Ssd from '../ssd.jpg'
function ItemTable() {
    return (
        <div className="table">
            <table>
            <tr>
                <th>SKU</th>
                <th>Name</th>
                <th>Description</th>
                <th>QTY</th>
                <th>Image</th>
            </tr>
            <tr className='midTr'>
                <td>123</td>
                <td>RAM</td>
                <td>ALKETRON Quantum-Cache (Extreme Gaming Memory) | Long-DIMM (UDIMM)</td>
                <td>5005</td>
                <td>
                    <img className='itemImage' src={Ram} alt='picImage'/>
                </td>
            </tr>
            <tr className='midTr'>
                <td>584</td>
                <td>SSD</td>
                <td>Western Digital WD Green 240 GB 2.5 inch (6.3 cm) SATA  </td>
                <td>5005</td>
                <td>
                    <img className='itemImage' src={Ssd} alt='picImage'/>
                </td>                
            </tr>
            </table>
        </div>

    )
}

export default ItemTable
