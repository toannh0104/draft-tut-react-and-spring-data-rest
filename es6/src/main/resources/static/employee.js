var React = require('react');

var UpdateDialog = require('./update-dialog');

// tag::employee[]
var Employee = React.createClass({
    handleDelete: function () {
        this.props.onDelete(this.props.employee);
    },
    render: function () {
        return (
            <tr>
                <td>{this.props.employee.entity.firstName}</td>
                <td>{this.props.employee.entity.lastName}</td>
                <td>{this.props.employee.entity.description}</td>
                <td>{this.props.employee.entity.manager.name}</td>
                <td>
                    <UpdateDialog employee={this.props.employee}
                                  attributes={this.props.attributes}
                                  onUpdate={this.props.onUpdate}/>
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>
        )
    }
});
// end::employee[]

module.exports = Employee;
