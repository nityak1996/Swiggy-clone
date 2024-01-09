import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name:"Dummy",
        location:"Default",
        avatar_url: "xyz"
      }
    };
  }
  async componentDidMount() {
   const data = await fetch("https://api.github.com/users/nitya29")
   const json = await data.json()
    this.setState({
      userInfo : json
    })
    
  }

  componentDidUpdate(){

  }


  componentWillUnmount(){
   
  }

  render() {
    // const { name, location } = this.props;
    const {name,location} = this.state.userInfo;

    return (
      <div className="user-card">
           <img className="h-12"
            src="https://avatars.githubusercontent.com/u/72698776?v=4/"/>
        <h2>Name: {name}</h2>
        
        <h3>Location: {location}</h3>
        <h4>Contact: @nityak1996</h4>
      </div>
    );
  }
}
export default UserClass;
