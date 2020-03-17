import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

import './table.css';


class Table extends Component {

    render() {
        const { data, search, sort } = this.props;

        const elemets = data.map((el) => {
            return (
                <tr key={el.id}>
                    <th scope="row" className="row_number">{el.id}</th>
                    <td>{el.firstName}</td>
                    <td>{el.lastName}</td>
                    <td>{el.birthDay}</td>
                    <td>
                        <select className="form-control">
                            <option>{el.gender[0]}</option>
                            <option>{el.gender[1]}</option>
                            <option>{el.gender[2]}</option>
                        </select>
                    </td>
                    <td className="married_checkbox"><input type="checkbox" value={el.married} defaultChecked={el.married} /></td>
                    <td>{JSON.stringify(el.address)}</td>
                </tr>
            );
        });

        return (
            <React.Fragment>
                <div className="d-flex">
                    <select className="form-control col-1">
                        <option>
                            Visible
                        </option>
                    </select>
                    <input
                        type="search"
                        className="form-control col-4 search-form"
                        placeholder="Search"
                        onChange={(e) => search(e)}
                    />
                </div>
                <table className="table table-bordered">
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" onClick={sort}>#</th>
                            <th scope="col">Firstname</th>
                            <th scope="col">Lastname</th>
                            <th scope="col">Birthday</th>
                            <th scope="col">Gender</th>
                            <th scope="col">Married</th>
                            <th scope="col">Addres</th>
                        </tr>
                    </thead>
                    <tbody>
                        {elemets}
                    </tbody>
                </table>
            </React.Fragment>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        data: state.data,
    };
};

const mapDispatchToProps = (dispatch) => {

    const { search, sort } = bindActionCreators(actions, dispatch);

    return {
        search,
        sort
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);