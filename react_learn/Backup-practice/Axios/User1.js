import React from'react'
import  Axios from'axios'
class User1 extends React.Component{
    constructor(props) {
        super(props);
        console.log("First Construcotr")
        this.state = {
            user: []
        }
    }
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/users')
              .then((response)=>{
                  this.setState({user:response.data})
              })
              .catch()
    }
    render(){
        return(<div>
                <h1>User Data</h1>
                <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <table className="table table-hover">
                            <thead className="bg-dark text-primary">
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Website</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.user.map((singleUser) => {
                                        return <tr>
                                            <td>{singleUser.id}</td>
                                            <td>{singleUser.name}</td>
                                            <td>{singleUser.email}</td>
                                            <td>{singleUser.phone}</td>
                                            <td>{singleUser.website}</td>
                                        </tr>
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
export default User1