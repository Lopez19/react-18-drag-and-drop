import React, { useState } from "react";

const DragAndDrop = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Any Number Can Win (Mélodie en sous-sol )",
      body: "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      list: 1,
    },
    {
      id: 2,
      title: "Jerky Boys, The",
      body: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
      list: 1,
    },
    {
      id: 3,
      title: "Three Stooges, The",
      body: "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
      list: 1,
    },
    {
      id: 4,
      title: "Forget me not",
      body: "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
      list: 1,
    },
    {
      id: 5,
      title: "Carny",
      body: "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
      list: 1,
    },
  ]);

  const getList = (list: number) => {
    return tasks.filter((task) => task.list === list);
  };

  const startDrag = (evt: React.DragEvent<HTMLDivElement>, item: any) => {
    evt.dataTransfer.setData("taskID", item.id);
  };

  const draggingOver = (evt: React.DragEvent<HTMLDivElement>) => {
    evt.preventDefault();
  };

  const onDrop = (evt: React.DragEvent<HTMLDivElement>, list: number) => {
    const taskID = evt.dataTransfer.getData("taskID");
    const item = tasks.find((task) => task.id == parseInt(taskID));
    item!.list = list;

    const newState = tasks.map((task) => {
      if (task.id === parseInt(taskID)) return item;
      return task;
    });

    setTasks(newState as any);
  };

  return (
    <>
      <h1>Drag and Drop</h1>
      <br />
      <div className="drag-and-drop">
        <div className="column column--1">
          <h3>Tareas por hacer</h3>
          <div
            className="dd-zone"
            onDrop={(evt) => onDrop(evt, 1)}
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
          >
            {getList(1).map((task) => (
              <div
                className="dd-element"
                key={task.id}
                draggable
                onDragStart={(evt) => startDrag(evt, task)}
              >
                <strong className="title">{task.title}</strong>
                <p className="body">{task.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="column column--2">
          <h3>Tareas en progreso</h3>
          <div
            className="dd-zone"
            onDrop={(evt) => onDrop(evt, 2)}
            droppable="true"
            onDragOver={(evt) => draggingOver(evt)}
          >
            {getList(2).map((task) => (
              <div
                className="dd-element"
                key={task.id}
                draggable
                onDragStart={(evt) => startDrag(evt, task)}
              >
                <strong className="title">{task.title}</strong>
                <p className="body">{task.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
