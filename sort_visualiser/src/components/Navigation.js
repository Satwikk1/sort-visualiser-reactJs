import {Navbar, Container, Nav, NavDropdown, Button} from "react-bootstrap"
import {useState, useRef} from 'react';
import Switch from './Switch';
import LoopIcon from '@material-ui/icons/Loop';


const Navigation = (props) => {

    const [algo_nav, setalgo_nav] = useState("Algorithm")
    const [algo, setalgo] = useState([
        {
            id: "#action/3.2",
            algo: "Selection Sort"
        },
        {
            id: "#action/3.3",
            algo: "Insertion Sort",
        },
        {
            id: "#action/3.4",
            algo: "Merge Sort",
        },
        {
            id: "#action/3.5",
            algo: "Quick Sort",
        },
        {
            id: "#action/3.6",
            algo: "Heap Sort",
        },
        {
            id: "#action/3.7",
            algo: "Bubble Sort",
        },
        {
            id: "#action/3.8",
            algo: "Bucket Sort",
        },
    ])

    const SetValue = (e)=>{
        const val=e.target.innerText;
        setalgo_nav(val);
    }

    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Sort_visualiser</Navbar.Brand>
                    <Nav className="me-auto">

                        <Button onClick={()=>props.onGenerateRandomArray()} variant="light">
                            <LoopIcon />
                        </Button>
                        <NavDropdown className={"btn-sm btn-outline-info"} title={algo_nav} id="collasible-nav-dropdown dropdown-button-drop-start">
                            <NavDropdown.Item key={1} href="#action/3.1">Random</NavDropdown.Item>
                            <NavDropdown.Divider />
                            {algo.map((algo)=>(
                                <NavDropdown.Item key={algo.id} onClick={SetValue}  href={algo.id}>{algo.algo}</NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    </Nav>
                    <Switch />
                </Container>
            </Navbar>
        </div>
        
    )
}

export default Navigation
