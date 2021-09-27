import  React from 'react';

class NameField extends React.Component {
    constructor(props) {
        super(props);
        let isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }
    validate(val){
        return val.length>2;
    }
    onChange(e) {
         let   val = e.target.value;
         let  isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
       let  color = this.state.valid===true?"green":"red";
        return <p>
            <label>Имя:</label><br />
            <input type="text" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>;
    }   
}
class AgeField extends React.Component {
    
    constructor(props) {
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }
    validate(val){
        return val>=0;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        let color = this.state.valid===true?"green":"red";
        return <p>
            <label>Возраст:</label><br />
            <input type="number" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>;
    }   
}



class Height extends React.Component {
    
    constructor(props) {
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }
    validate(val){
        return val>=170;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        let color = this.state.valid===true?"green":"red";
        return <p>
            <label>Рост:</label><br />
            <input type="number" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>;
    }   
}

class Place extends React.Component {
    
    constructor(props) {
        super(props);
        var isValid = this.validate(props.value);
        this.state = {value: props.value, valid: isValid};
        this.onChange = this.onChange.bind(this);
    }
    validate(val){
        return val.length>0;
    }
    onChange(e) {
        let val = e.target.value;
        let isValid = this.validate(val);
        this.setState({value: val, valid: isValid});
    }
    render() {
        let color = this.state.valid===true?"green":"red";
        return <p>
            <label>Место проживания:</label><br />
            <input type="text" value={this.state.value} onChange={this.onChange} style={{borderColor:color}} />
        </p>;
    }   
}







 export default class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.nameField = React.createRef();
        this.ageField = React.createRef();
        this.height = React.createRef();
        this.place = React.createRef();
    }
    handleSubmit(e) {
        e.preventDefault();
        let name = this.nameField.current.state.value;
        let age = this.ageField.current.state.value;
        let hei = this.height.current.state.value;
        let pl = this.place.current.state.value;
        if(this.nameField.current.state.valid && this.ageField.current.state.valid && this.height.current.state.valid ){
            alert("Имя: " + name + " Возраст: " + age + " Рост: "  + hei + " Место проживания: " + pl );
        }
    }

    render() {
        return (
            <div className='form'>
                <form onSubmit={this.handleSubmit}>
                <NameField value="" ref={this.nameField} />
                <Place value="" ref={this.place} />
                <AgeField value="19" ref={this.ageField} />
                <Height value="170" ref={this.height} />
                <input type="submit" value="Отправить" />
                </form>
            </div>
    );
  }
}
