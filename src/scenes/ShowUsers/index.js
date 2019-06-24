import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../../actions';

class ShowUsers extends Component {
    componentDidMount() {
        this.props.fetchUsers();
    }

    render() {
        if (this.props.users){
            return (
                <div>
                    {this.props.users.map((users) => (
                        <div>
                            <p>Bienvenido {users.first_name} {users.last_name}</p>
                        </div>
                    ))}
                </div>
            )
        } else {
            return(
                <div>
                    No se pudieron cargar los usuarios
                </div>
            )
        }
    }
}


function mapStateToProps(state) {
    return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(ShowUsers);
