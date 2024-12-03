import React from "react";

class DataLoader extends React.Component {
  state = {
    data: null,
    isLoading: false,
    error: null,
  };

  componentDidMount() {
    this.load();
  }

  load = () => {
    const { loadUsersData } = this.props;

    this.setState({
      isLoading: true,
      error: null,
    });

    loadUsersData()
      .then((data) => {
        this.setState({ data });
      })
      .catch((error) => {
        this.setState({ error });
      })
      .finally(() => {
        this.setState({
          isLoading: false,
        });
      });
  };

  render() {
    return this.props.render(this.state, this.load);
  }
}

export default DataLoader;
