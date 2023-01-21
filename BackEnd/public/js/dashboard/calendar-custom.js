document.addEventListener("DOMContentLoaded", function () {
  const state = {
    events: [],
    tasks: [],
  };

  const event_box = document.getElementById("external-events");
  // const event_title = document.getElementById("event_title");
  // const event_add = document.getElementById("event_add");
  let index = 0;

  console.log(event_box);

  // event_add.addEventListener("click", add_events);
  // event_title.addEventListener("keypress", function (e) {
  //   if (e.key === "Enter") {
  //     e.preventDefault();
  //     add_events();
  //   }
  // });

  // function add_events() {
  //   if (event_title.value != "") {
  //     state.tasks.push({
  //       id: `task-id-${index++}`,
  //       content: event_title.value,
  //     });
  //     event_title.value = "";
  //     updateTasks();
  //   }
  //   event_title.focus();
  // }

  // function deleteBtn(e) {
  //   const newTasks = state.tasks.filter(
  //     (item) => item.id !== e.target.parentNode.id
  //   );

  //   state.tasks = newTasks;
  //   updateTasks();
  // }

  // function updateTasks() {
  //   event_box.innerHTML = "";
  //   state.tasks.map((item) => {
  //     event_box.innerHTML += `<div class="fc-event lable-event-${item.content} ui-draggable ui-draggable-handle hover-event" id="${item.id}" draggable="true">${item.content}<span class="btn-del-event">✖</span></div>`;
  //   });

  //   const btn_del = document.querySelectorAll(".btn-del-event");
  //   btn_del.forEach((item) => {
  //     item.removeEventListener("click", deleteBtn);
  //     item.addEventListener("click", deleteBtn);
  //   });
  // }

  let calendarEl = document.getElementById("calendar");

  // const btnDel = document.createElement("span");
  // btnDel.innerHTML = "✖";
  // btnDel.classList.add("btn-del-task");
  // btnDel.addEventListener("click", function (e) {
  //   const deletedEvent = calendar.getEventById(
  //     e.target.parentNode.parentNode.parentNode.parentNode.fcSeg.eventRange.def
  //       .publicId
  //   );
  //   state.events = state.events.filter(
  //     (item) => item.id != deletedEvent._def.publicId
  //   );
  //   state.tasks.push({
  //     id: deletedEvent._def.publicId,
  //     content: deletedEvent._def.title,
  //   });
  //   updateTasks();
  //   deletedEvent.remove();
  // });

  let eventDescriptionId = "";
  const description = document.getElementById("description");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    themeSystem: "bootstrap4",
    contentHeight: "auto",
    selectable: true,
    droppable: true,
    editable: true,
    dropAccept: ".external-event",
    headerToolbar: {
      start: "dayGridMonth,timeGridWeek,timeGridDay",
      center: "title",
      end: "prev,next today",
    },
    drop: function (data) {
      console.log(data);
      const event = {
        title: data.draggedEl.innerText,
        start: data.dataStr,
        end: data.dataStr,
      };

      calendar.addEvent(event);
    },
    eventDrop: function (info) {
      state.events.forEach((item) => {
        if (item.id === info.event._def.publicId) {
          let newStart = new Date(item.start);
          let newEnd = new Date(item.end);

          newStart.setDate(newStart.getDate() + info.delta.days);
          newEnd.setDate(newEnd.getDate() + info.delta.days);

          item.start = `${newStart.getFullYear()}-${
            newStart.getMonth() + 1
          }-${newStart.getDate()}`;
          item.end = `${newEnd.getFullYear()}-${
            newEnd.getMonth() + 1
          }-${newEnd.getDate()}`;
        }
      });
    },
    eventMouseEnter: function (info) {
      let element = info.el;

      element.dataset.toggle = "tooltip";
      element.dataset.placement = "top";

      state.events.forEach((item) => {
        if (item.id === info.event._def.publicId) {
          element.title = `start : ${new Date(item.start).toLocaleDateString(
            "fa-IR"
          )}\nend : ${new Date(item.end).toLocaleDateString("fa-IR")}`;
        }
      });

      if (info.el.querySelector(".btn-del-task") === null) {
        info.el.classList.add("hover-event");
        info.el.querySelector(".fc-event-title-container").appendChild(btnDel);
      }
    },
    eventResize: function (info) {
      state.events.forEach((item) => {
        if (info.event._def.publicId === item.id) {
          let newDate = new Date(item.end);
          newDate = `${newDate.getFullYear()}-${newDate.getMonth() + 1}-${
            newDate.getDate() + info.endDelta.days
          }`;
          item.end = newDate;
        }
      });
    },
    eventDidMount: function (info) {
      const mountedElement = info.el;
      const modalBoxContainer = document.querySelector(".modal-box-container");
      mountedElement.addEventListener("dblclick", function (e) {
        modalBoxContainer.classList.add("modal-box-open");

        eventDescriptionId = info.event._def.publicId;
        description.focus();
        state.events.forEach((item) => {
          if (item.id === info.event._def.publicId) {
            description.value = item.description;
          }
        });
      });
    },
    events: state.events,
  });

  calendar.render();
  calendar.setOption("locale", "fa");

  FullCalendar.Draggable(event_box, {
    itemSelector: ".external-event",
  });

  // let drake = dragula([event_box], {
  //   removeOnSpill: true,
  //   // copy: true,
  // });

  // new Sortable(event_box, {
  //   itemSelector: ".fc-event",
  //   removeOnSpill: true,
  //   // mirrorSelector: ".gu-mirror",
  // });

  //   document.getElementById("btn_close").addEventListener("click", closeDesc);
  //   document
  //     .querySelector(".modal-box-shadow")
  //     .addEventListener("click", closeDesc);

  //   function closeDesc() {
  //     const modalBoxContainer = document.querySelector(".modal-box-container");
  //     modalBoxContainer.classList.remove("modal-box-open");
  //   }

  //   const btn_save = document.getElementById("btn_save");
  //   btn_save.addEventListener("click", savingDesc);

  //   description.addEventListener("keypress", function (e) {
  //     if (e.key === "Enter") {
  //       savingDesc();
  //     }
  //   });

  //   function savingDesc() {
  //     if (description.value !== "") {
  //       state.events.forEach((item) => {
  //         if (item.id === eventDescriptionId) {
  //           item.description = description.value;
  //         }
  //       });
  //       const modalBoxContainer = document.querySelector(".modal-box-container");
  //       modalBoxContainer.classList.remove("modal-box-open");
  //     }
  //   }
});
