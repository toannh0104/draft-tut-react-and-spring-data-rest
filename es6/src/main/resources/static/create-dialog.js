var React = require('react');

class CreateDialog extends React.Component{

    handleSubmit(e) {
        e.preventDefault();
        var newEmployee = {};
        this.props.attributes.forEach(attribute => {
            newEmployee[attribute] = React.findDOMNode(this.refs[attribute]).value.trim();
        });
        this.props.onCreate(newEmployee);
        this.props.attributes.forEach(attribute => {
            React.findDOMNode(this.refs[attribute]).value = ''; // clear out the dialog's inputs
        });
        window.location = "#";
    }

    render() {
        var inputs = this.props.attributes.map(attribute =>
                <p key={attribute}>
                    <input type="text" placeholder={attribute} ref={attribute} className="field" />
                </p>
        );
        return (
            <div>
                <a href="#createEmployee">Create</a>

                <div id="createEmployee" className="modalDialog">
                    <div>
                        <a href="#" title="Close" className="close">X</a>

                        <h2>Create new employee</h2>

                        <form>
                            {inputs}
                            <button onClick={this.handleSubmit.bind(this)}>Create</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

};

module.exports = CreateDialog;