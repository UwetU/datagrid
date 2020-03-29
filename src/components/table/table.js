import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { bindActionCreators } from 'redux';

import './table.css';


class Table extends Component {

    render() {
        const { data, search, sort, sortBy } = this.props;

        let sortBorderClass = '';

        if (sortBy === true) {
            sortBorderClass = 'borderDesc';
        } else {
            sortBorderClass = 'borderAsc';
        }

        if (sortBy === null) {
            sortBorderClass = '';
        }


        const elemets = data.map((el) => {
            return (
                <tr key={el.id}>
                    <th scope="row" className="row_number">{el.id}</th>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                    <td>{el.birthday}</td>
                    <td>
                        <select className="form-control">
                            <option>{el.gender[0]}</option>
                            <option>{el.gender[1]}</option>
                            <option>{el.gender[2]}</option>
                        </select>
                    </td>
                    <td className="married">{JSON.stringify(el.married)}</td>
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
                            <th scope="col" className={sortBorderClass} onClick={(e) => { sort(e, sortBy) }}>
                                id
                            </th>
                            <th scope="col" className={sortBorderClass} onClick={(e) => sort(e, sortBy)}>Firstname</th>
                            <th scope="col" className={sortBorderClass} onClick={(e) => sort(e, sortBy)}>Lastname</th>
                            <th scope="col" className={sortBorderClass} onClick={(e) => sort(e, sortBy)}>Birthday</th>
                            <th scope="col" className={sortBorderClass}>Gender</th>
                            <th scope="col" className={sortBorderClass}>
                                <span>Married</span>
                                <input
                                    type="checkbox"
                                    value="Married"
                                    className="checkbox-form"
                                    onClick={(e) => sort(e, e.target.checked)}
                                />
                            </th>
                            <th scope="col" onClick={(e) => sort(e, sortBy)} className={sortBorderClass}>Addres</th>
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
        sortBy: state.sortBy
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