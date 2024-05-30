class Movie {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  static getPG(movies) {
    return movies.filter((movie) => movie.rating === "PG");
  }
}

const mov = new Movie("Avengers Endgame", "Marvel Studios", "PG13");

const movies = [
  new Movie("X-Men", "20th Fox Century", "PG"),
  new Movie("Deadpool", "20th Fox Century", "R"),
  new Movie("X-Men 2", "20th Fox Century", "PG"),
  new Movie("Captian America Civil War", "Marvel Studios", "PG13"),
];

const pgMovies = Movie.getPG(movies);
pgMovies.forEach((movie) => {
  console.log(
    `Title: ${movie.title}, Studio: ${movie.studio}, Rating: ${movie.rating}`
  );
});

console.log(
  `Title: ${mov.title}, Studio: ${mov.studio}, Rating: ${mov.rating}`
);
