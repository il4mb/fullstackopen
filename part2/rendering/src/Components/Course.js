import Content from "./Content";
import Header from "./Header";


const Course = ({course = {}}) => {

    return (
        <>
            <Header>{course.name}</Header>
            <Content contents={course.parts}/>
        </>
    )
}

export default Course;