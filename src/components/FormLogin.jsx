import { nanoid } from 'nanoid';
import { Component } from 'react';
import styled from 'styled-components';

const FormWrap = styled.div`
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    isChecked: true,
    gender: 'male',
    print: null,
  };

  createUser = data => {
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log('newUser :>> ', newUser);
    this.setState({ print: newUser });
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // this.props.createUser(this.state)

    this.createUser({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });
    this.setState({
      email: '',
      password: '',
    });
    // this.props.closeModal();
  };

  handleCheck = ({ target: { checked } }) => {
    this.setState({
      isChecked: checked,
    });
  };

  handleRadio = ({ target }) => {
    this.setState({ gender: target.value });
  };

  render() {
    return (
      <FormWrap>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={this.state.isChecked}
              onChange={this.handleCheck}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              I agree
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
              checked={this.state.gender === 'male'}
              onChange={this.handleRadio}
              value="male"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Male
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked={this.state.gender === 'female'}
              onChange={this.handleRadio}
              value="female"
            />
            <label className="form-check-label" for="flexRadioDefault2">
              Female
            </label>
          </div>
          <button
            disabled={!this.state.isChecked}
            type="submit"
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
        <div>{JSON.stringify(this.print)}</div>
      </FormWrap>
    );
  }
}

export default FormLogin;
