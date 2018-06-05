class Portfolio extends Component{
  state = {
    array: [...Data]
  }
  filterHandler = (event) => {
    let category = event.target.getAttribute('category');
    switch (category) {
      case 'first': {
        this.setState({
          array: [...Data].filter(
            (array) => array.category === 'first'
          )}); break; }
      case 'second': {
        this.setState({
          array: [...Data].filter(
          (array) => array.category === 'second'
          )}); break; }
      case 'third': {
        this.setState({
          array: [...Data].filter(
          (array) => array.category === 'third'
          )}); break; }
      default: {
        this.setState({
          array: [...Data]
        })
      }
    }
  }
}