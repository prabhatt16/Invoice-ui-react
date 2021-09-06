import React from 'react'
import Button from './components/Button'
import Header from './components/Header'
import ItemTable from './components/ItemTable'
import Remark from './components/Remark'
import UserDetails from './components/UserDetails'
import './Page.css'

function Page() {
    return (
        <div class="book">
            <div class="page">
                <div class="subpage">
                    <Header/>
                    <br />  
                    <UserDetails/>
                    <br />
                    <ItemTable/>  
                    <br />
                    <br />
                    <Remark/>  
                    <br />
                    <Button/>
                </div>    
            </div>
        </div>
    )
}

export default Page
