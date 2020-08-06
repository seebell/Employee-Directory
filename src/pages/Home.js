import React, { Component } from "react";
import API from "../utils/API.js";
import Container from "../components/Container"
import Row from "../components/Row"
import Col from "../components/Col"
import Search from "../components/Search"
import moment from "moment";
import { Link } from "react-router-dom";

export default class Home extends Component {
    state = {
        Employees: [],
        filteredEmployees: [],
        sortDirection: "asc",
        search: "",
        error: ""
    };


    componentDidMount() {
        API.getUsers().then(employees => {
            console.log(employees);
            this.setState({
                Employees: employees.data.results,
                filteredEmployees: employees.data.results
            });
        });
    }

    handleInputChange = event => {
        console.log(event.target.value);
        console.log(this.state.search);
        if (event.target.value === "") {
            this.setState({ filteredEmployees: this.state.Employees });
        } else {
            this.setState({ search: event.target.value }, () => {
                this.findEmployee();
            });
        }
    };


    findEmployee = (e) => {
       let filteredEmp;
       let filteredName = this.state.search;
        filteredEmp = this.state.Employees.filter(function (employee) {
            console.log(employee.name.first);
            console.log(filteredName);
            filteredName = filteredName.toLowerCase();
            filteredName =
                filteredName.charAt(0).toUpperCase() + filteredName.slice(1);
            return filteredName === employee.name.first;
        });
        return this.setState({ filteredEmployees: filteredEmp });
    };

    sortName = () => {
       let nameSort;
       let direction;
        if (this.state.sortDirection === "asc") {
            nameSort = this.state.Employees.sort((a, b) =>
                a.name.last > b.name.last ? 1 : -1
            );
            direction = "dsc";
        } else {
            nameSort = this.state.Employees.sort((a, b) =>
                a.name.last < b.name.last ? 1 : -1
            );
            direction = "asc";
        }
        this.setState({ Employees: nameSort, sortDirection: direction });
    };

    render() {
        return (
            <div>
                <Container style={{ minHeight: "80%" }}>
                    <Row>
                        <Search
                            findEmployee={this.findEmployee}
                            handleInputChange={this.handleInputChange}
                            Employees={this.state.Employees}
                        />
                    </Row>
                    <Row>
                        <Col size="md-2">
                            <h3>Image</h3>
                            <hr></hr>
                        </Col>
                        <Col size="md-2">
                            <h3>
                                Name{" "}
                                <button onClick={this.sortName}>
                                <i className="fas fa-sort fa-xs"></i>
                                </button>
                            </h3>
                            <hr></hr>
                        </Col>
                        <Col size="md-2">
                            <h3>Phone</h3>
                            <hr></hr>
                        </Col>
                        <Col size="md-3">
                            <h3>E-mail</h3>
                            <hr></hr>
                        </Col>
                        <Col size="md-2">
                            <h3>DOB</h3>
                            <hr></hr>
                        </Col>
                    </Row>
                    {this.state.filteredEmployees.map((randomEmp, index) => {
                        return (
                            <Row key={index}>
                                <Col size="md-2">
                                    <img
                                        src={randomEmp.picture.medium}
                                        alt="employee_image"
                                    ></img>
                                </Col>
                                <Col size="md-2">
                                    {randomEmp.name.last}, {randomEmp.name.first}
                                </Col>
                                <Col size="md-2">{randomEmp.phone}</Col>
                                <Col size="md-3">
                                    <Link to={"/"}>{randomEmp.email}</Link>
                                </Col>
                                <Col size="md-2">{moment(randomEmp.dob.date.split("T")[0], "YYYY-MM-DD").format("l")}</Col>
                            </Row>
                        );
                    })}
                </Container>

            </div>
        );
    }
}



