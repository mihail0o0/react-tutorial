import { useState } from "react";

const AddTask = ({ addTask }) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(text === "" || day === "") return;

        let newTask = {
            text,
            day,
            reminder
        }

        addTask(newTask);

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="Text">Text</label>
                <input type="text" placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label htmlFor="Day">Day and time</label>
                <input type="text" placeholder="Day and time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.target.checked)} />
            </div>

            <input className="btn btn-block" type="submit" value="Save Task" />
        </form>
    );
};

export default AddTask;
