class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.state = {
            title: 'Visibility Toggle',
            details: 'This is the Details of something!!!',
            visibility: false
        };
    }

    toggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <button onClick={this.toggleVisibility}>
                    {this.state.visibility ? 'Hide details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                        <p>{this.state.details}</p>
                    </div>
                )}
            </div>
        )
    }

}

ReactDOM.render(<VisibilityToggle/>, document.getElementById('app'));
