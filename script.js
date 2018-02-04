var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    image: 'https://img.cinemablend.com/filter:scale/quill/b/b/f/b/3/c/bbfb3c1ed393ec47b44de8709af71c8589cfa1db.jpg?mw=600'
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'http://moviesroom.pl/images/0.Aktualizacja_listopad/Dude%C5%82e/kr%C3%B3l_lew.jpg'
  },
  {
    id: 3,
    title: 'Transformers',
    desc: 'Film o robotach',
    image: 'https://is1-ssl.mzstatic.com/image/thumb/Video128/v4/6c/28/2d/6c282d17-3423-6493-1709-6915a9686ef8/source/1200x630bb.jpg'
  },
  {
    id: 4,
    title: 'Tom and Jerry',
    desc: 'Film o kocie i myszy',
    image: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/TomandJerryTitleCardc.jpg/250px-TomandJerryTitleCardc.jpg'
  }
];
var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },
  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieImage, {image: this.props.movie.image}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc})
      )
    )
  }
});
var moviesElements = movies.map(function(movie) {
  return (
    React.createElement(Movie, {key:movie.id, movie: movie})
  )
});
var MovieList = React.createClass({
  render: function() {
    return (
      React.createElement('ul', {}, moviesElements)
    )
  }
});
var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('h2', {}, this.props.title)
  }
});
var MovieImage = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('img', {src: this.props.image})
  }
});
var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },
  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});
var element = React.createElement('div', {}, 
  React.createElement('h1', {}, 'Lista filmów'),
  React.createElement(MovieList, {})
);
ReactDOM.render(element, document.getElementById('app'));