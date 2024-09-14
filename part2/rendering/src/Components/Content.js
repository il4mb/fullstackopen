import Part from "./Part";

const Content = ({ contents = [] }) => {

    const total = contents.reduce((s, p) => {
        return s + p.exercises;
    }, 0);


    return (
        <>
            <div>
                {contents.map((part, i) => (
                    <Part name={part.name} id={part.id} exercises={part.exercises} key={i} />
                ))}
            </div>
            <b>total of {total} exercises</b>
        </>
    );
};

export default Content;
