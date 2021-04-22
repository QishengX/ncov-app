import React, { Component } from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';
export default class Bootstraptab extends Component {
    state = {
        employee: [],
        columns: [{
            dataField: 'Id',
            text: 'Id'
        },
        {
            dataField: 'Name',
            text: 'Name',
            sort: true
        },
        {
            dataField: 'Age',
            text: 'Age',
            sort: true
        },
        {
            dataField: 'Address',
            text: 'Address',
            sort: true
        },
        {
            dataField: 'City',
            text: 'City',
            sort: true
        },
        {
            dataField: 'ContactNum',
            text: 'ContactNum',
            sort: true
        },
        {
            dataField: 'Salary',
            text: 'Salary',
            sort: true
        },
        {
            dataField: 'Department',
            text: 'Department',
            sort: true
        }]
    };

    componentDidMount() {
        axios.get('http://localhost:51760/Api/Emp/employee').then(response => {
            console.log(response.data);
            this.setState({
                employee: response.data
            });
        });
    }

    render() {
        return (
            // <Bootstraptable data={this.state.columns} hover="" keyfield="id" striped="" this.state.employee="">
            <div/>
        )
    }
}