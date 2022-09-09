const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((p) => (
      <Part key={p.id} part={p} />
    ))}
  </>
);

const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total sum={course.parts.reduce((s, p) => s + p.exercises, 0)} />
    </>
  );
};

export default Course;
