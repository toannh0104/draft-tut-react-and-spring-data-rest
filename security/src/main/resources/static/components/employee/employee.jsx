/**
 * Created by Toan_H on 8/11/2016.
 */
define(function (require) {
    var React = require('react');
    // tag::employee[]
    var Employee = React.createClass({
        handleDelete: function () {
            this.props.onDelete(this.props.employee);
        },
        render: function () {
            return (
                <tr className="text-center" >
                    <td >{this.props.employee.entity.firstName}</td>
                    <td >{this.props.employee.entity.lastName}</td>
                    <td  >{this.props.employee.entity.description}</td>
                    <td  > {this.props.employee.entity.manager.name}</td>
                    <td>
                        <UpdateDialog employee={this.props.employee}
                                      attributes={this.props.attributes}
                                      onUpdate={this.props.onUpdate}/>
                    </td>
                    <td>
                        <button onClick={this.handleDelete} className="btn-link" >Delete</button>
                    </td>
                </tr>
            )
        }
    });

    return {};
});