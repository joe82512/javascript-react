import React, {useState, useMemo} from 'react';
import FirstPage from "./page/FirstPage";
import SecondPage from "./page/SecondPage";
import NavbarItem from './NavbarItem';

import { OpenContext, SetOpenContext } from './context/ControlContext';

const asideStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    height: "100%",
    backgroundColor:"#808080",
}

const buttonStyle = {
    backgroundColor: "transparent",
    border: "none",
    outline: "none"
}

const ulStyle = {
    display: "flex",
    flexDirection: "column",
    padding: "0", //clear li space    
    width: "100%",
}

export let navbarSet = [
    ['/','page1',<FirstPage/>],
    ['/2','page2',<SecondPage/>],
];

const Navbar = (props) => {
    const [isOpen,setIsOpen] = useState(false);
    const [newNavbarSet, setNewNavbarSet] = useState(navbarSet);

    let navbarItem = useMemo( ()=> {
        return newNavbarSet.map((prop) => <NavbarItem key={prop[1]} url={prop[0]} text={prop[1]}/>);
    },[newNavbarSet]);

    // let navbarItem = newNavbarSet.map((prop) => <NavbarItem key={prop[1]} url={prop[0]} text={prop[1]}/>);
    
    return (
        <OpenContext.Provider value={isOpen}>
        <SetOpenContext.Provider value={setIsOpen}>
        <>
            <aside style={asideStyle}>
                <button style={buttonStyle} onClick={()=>{setIsOpen(!isOpen)}}>
                    {(isOpen)?"<":">"}
                </button>
                <button onClick={ () => {
                    let updateNavbarSet = [['/3','page3',<FirstPage/>]].concat(newNavbarSet);
                    setNewNavbarSet(updateNavbarSet); 
                }}>click</button>
                {/* <ul style={ulStyle}>{navbarItem}</ul> */}
                { isOpen && <ul style={ulStyle}>{navbarItem}</ul> }
            </aside>
            {props.children}
        </>
        </SetOpenContext.Provider>
        </OpenContext.Provider>    
    )
}

export default Navbar;