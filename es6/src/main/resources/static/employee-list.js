var React = require('react');

var Employee = require('./employee');

var EmployeeList = React.createClass({
    handleInput: function (e) {
        e.preventDefault();
        var pageSize = React.findDOMNode(this.refs.pageSize).value;
        if (/^[0-9]+$/.test(pageSize)) {
            this.props.updatePageSize(pageSize);
        } else {
            React.findDOMNode(this.refs.pageSize).value = pageSize.substring(0, pageSize.length - 1);
        }
    },
    handleNavFirst: function (e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.first.href);
    },
    handleNavPrev: function (e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.prev.href);
    },
    handleNavNext: function (e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.next.href);
    },
    handleNavLast: function (e) {
        e.preventDefault();
        this.props.onNavigate(this.props.links.last.href);
    },
    render: function () {
        var pageInfo = this.props.page.hasOwnProperty("number") ?
            <h3>Employees - Page {this.props.page.number + 1} of {this.props.page.totalPages}</h3> : null;

        var employees = this.props.employees.map(employee =>
                <Employee key={employee.entity._links.self.href}
                          employee={employee}
                          attributes={this.props.attributes}
                          onUpdate={this.props.onUpdate}
                          onDelete={this.props.onDelete}/>
        );

        var navLinks = [];
        if ("first" in this.props.links) {
            navLinks.push(<button key="first" onClick={this.handleNavFirst}>&lt;&lt;</button>);
        }
        if ("prev" in this.props.links) {
            navLinks.push(<button key="prev" onClick={this.handleNavPrev}>&lt;</button>);
        }
        if ("next" in this.props.links) {
            navLinks.push(<button key="next" onClick={this.handleNavNext}>&gt;</button>);
        }
        if ("last" in this.props.links) {
            navLinks.push(<button key="last" onClick={this.handleNavLast}>&gt;&gt;</button>);
        }

        return (
            <div>
                {pageInfo}
                <input ref="pageSize" defaultValue={this.props.pageSize} onInput={this.handleInput}/>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Description</th>
                        <th>Manager</th>
                        <th></th>
                        <th></th>
                    </tr>
                    {employees}
                </table>
                <div>
                    {navLinks}
                </div>
            </div>
        )
    }
});

module.exports = EmployeeList;