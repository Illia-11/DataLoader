import React from "react";
import DataLoader from "./components/DataLoader";

class App extends React.Component {
  getUsersData = () => {
    const usersDataPromise = fetch("/users.json").then((res) => res.json());

    return usersDataPromise;
  };

  renderUsersData = (state) => {
    const { data, isLoading, error } = state;

    return (
      <div>
        {isLoading && <h4>LOADING</h4>}
        {error && <h4>ERROR</h4>}
        {data &&
          data.map((user) => {
            <div key={user.id}>
              <h2>Name: {user.name}</h2>
              <h3>Gender: {user.gender}</h3>
            </div>;
          })}
      </div>
    );
  };

  render() {
    return (
      <div>
        <DataLoader
          loadUsersData={this.getUsersData}
          render={this.renderUsersData}
        />
      </div>
    );
  }
}

export default App;
