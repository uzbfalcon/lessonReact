import React from "react";

class Student extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            title: "UZBFaLcon"
        }
    }
    render() {
        // const onChange = (event) => {
        //     this.setState({ title: event.target.value })
        // }
        const onNameChange = (e) => {
            this.setState({ name: e.target.value })
            console.log(e.target.value);
        }
        const onSurnameChange = (e) => {
            this.setState({ surname: e.target.value })
            console.log(e.target.value);
        }
        const onSubmit = (e) => {
            this.setState({ name: e.target.value })
            console.log(e.target.checked);
        }
        return (
            <div>
                <h1>name: {this.state.name}</h1>
                <h1>surname: {this.state.surname}</h1>
                <input type="text" placeholder="name" onChange={onNameChange} />
                <input type="text" placeholder="surname" onChange={onSurnameChange} />
                <input type="checkbox" onChange={onSubmit} />
            </div>
        )
    }
}
export default Student