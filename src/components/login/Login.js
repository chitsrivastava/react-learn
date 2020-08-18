import React from "react";
import './Login.css'
export default class Login extends React.Component {
  render() {
    return (
      <div className="main-div">
        <table>
          <thead>
          <tr styles="display:flex;justify-content:center">
           <th className="jdf-title">Login to JDF</th>
          </tr>
          </thead>
<tbody>
<tr><td></td></tr>
          <tr>
            <td>
              <label>Email</label>
            </td>
            <td>
              <input type="text"/>
            </td>
          </tr>
          <tr>
            <td>
              <label>Password</label>
            </td>
            <td>
              <input type="password"/>
            </td>
          </tr>
          <tr>
            <td>
              <label></label>
            </td>
            <td>
<button>Login</button>            </td>
          </tr>
</tbody>
          
        </table>
      </div>
    );
  }
}
