import React, { Component } from 'react';

class Navbar extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <nav class="navbar navbar-expand navbar-light bg-light">
                    <div class="nav navbar-nav">
                        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
                        <a class="nav-item nav-link" href="#">About</a>
                    </div>
                </nav>
            </div>
          );
    }
}
 
export default Navbar;