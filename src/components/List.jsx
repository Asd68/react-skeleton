var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [{"id":1,"text":"ham"}, {"id":2, "text":"cheese"}, {"id":3,"text":"potatoes"}];

class List extends React.Component {
  render() {
    var listItem = ingredients.map(item => {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return <ul>{listItem}</ul>;
  }
};

module.exports = List;
